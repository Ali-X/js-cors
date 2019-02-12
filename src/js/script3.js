;(function() {
  let table = createTable();
  let responsePromise = createRequest('https://tanuhaua.github.io/datas-file-json/github_users.json');

  responsePromise
    .then(
      result => JSON.parse(result)
    )
    .then(
      jsonArr => {
        jsonArr.forEach(elem => {
          createRequest(`https://api.github.com/users/${elem['githubName']}`).then(
            result => JSON.parse(result)
          ).then(
            infoObj => {
              let row = createDataRow(elem, infoObj);
              table.appendChild(row);
            }
          );
        })
      }
    );

  function createRequest(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);

      xhr.onerror = () => {
        reject(new Error(xhr.status + ': ' + xhr.statusText));
      };
      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject(new Error(xhr.status + ': ' + xhr.statusText));
        } else {
          resolve(xhr.responseText);
        }
      };

      xhr.send();
    });
  }

  function createTable() {
    let table = document.createElement('table');
    table.classList.add('table');
    let row = document.createElement('tr');
    row.classList.add('table__header-row');
    let nameHeader = document.createElement('th');
    nameHeader.innerText = 'Name';
    let imageHeader = document.createElement('th');
    imageHeader.innerText = 'Image';

    row.appendChild(nameHeader);
    row.appendChild(imageHeader);

    table.appendChild(row);

    document.body.appendChild(table);

    return table;
  }

  function createDataRow(elem, infoObj) {
    let row = document.createElement('tr');
    let nameCell = document.createElement('td');
    nameCell.classList.add('table__name-data');
    nameCell.innerText = elem['fullName'];
    let imageCell = document.createElement('td');
    imageCell.classList.add('table__image-data');
    let image = document.createElement('img');
    image.classList.add('table__image');
    image.src = infoObj['avatar_url'];
    imageCell.appendChild(image);

    row.appendChild(nameCell);
    row.appendChild(imageCell);
    return row;
  }
})();


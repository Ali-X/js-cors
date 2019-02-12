;(function() {
  let table = createTable();

  fetch('https://tanuhaua.github.io/datas-file-json/github_users.json')
    .then(function(response) {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then(
      jsonArr => {
        jsonArr.forEach(elem => {
          fetch(`https://api.github.com/users/${elem['githubName']}`).then(
            function(response) {
              if (response.status === 200) {
                return response.json();
              }
            }
          ).then(
            infoObj => {
              let row = createDataRow(elem, infoObj);
              table.appendChild(row);
            }
          );
        })
      });

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


;(function() {
  let responsePromise = createRequest('https://tanuhaua.github.io/datas-file-json/github_users.json');
  responsePromise
    .then(
      result => console.log("Fulfilled: " + result),
      error => console.log("Rejected: " + error.message)
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
})();


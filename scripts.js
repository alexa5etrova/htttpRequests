const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((data) => data.json())
    .then(
      (data) =>
        (resultsContainer.innerHTML = `<div class="response-container">
              <img src="${data.avatar_url}">
              <p> Имя: <span>${data.name}</span><p>
              <p> О себе: <span>${data.bio}</span><p>
              <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
          </div>`)
    );
});
const postsBtn = document.querySelector("#postRequests");
const postsContainer = document.querySelector("#postResults");

postsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      let postsData = response.data.map(
        (item) =>
          `<div class="postItem"><p class="postTitle">${item.title}</p><p class="postBody">${item.body}</p></div>`
      );
      postsContainer.innerHTML = postsData.join("");
    });
});

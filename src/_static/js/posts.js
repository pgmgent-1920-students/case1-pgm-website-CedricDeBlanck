let postshtml = document.getElementById('posts');
let DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-CedricDeBlank';

function postsData() {
    fetch(`${DOMAIN}/data/posts/index.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          console.log(data)
            postsInDom(data);
        })
        .catch((error) => {
            console.log(error);
        })
};

postsData()

function postsInDom(posts) {
  posts.forEach(post => {
    
        postshtml.innerHTML += `
            <div class="m-post">
              <a href="${post.i}" class="m-post__hover">
                <p class="a-post__moreinfo">Meer info</p>
                <picture>
                  <img class="a-post__image" src="${post.image}">
                </picture>
              </a>
              <div class="a-post__textcontainer">
                  <p class="a-post__title">${post.title}</p>
                </div>
            </div>
        `;
    
  });
};
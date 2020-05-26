let postshtml = document.getElementById('posts');
let jsonurl = 'https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/data/posts.json?token=ANGVHBQFTEAUYQWZ5QWLYAS62L7WW';

function postsData() {
    fetch(jsonurl)
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
let postshtml = document.getElementById('posts');
let jsonurl = 'https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/data/posts.json?token=ANGVHBQFTEAUYQWZ5QWLYAS62L7WW';

function jsonData() {
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

jsonData()

function postsInDom(posts) {
  posts.forEach(post => {
    
 
        postshtml.innerHTML += `
        <div class="m-post">
              <picture>
              <img class="a-post__image" src="${post.image}">
              </picture>
              <p class="a-post__title">${post.title}</p>
              <p class="a-post__text">${post.text}</p>
              </div>
        `;
    
  });
};
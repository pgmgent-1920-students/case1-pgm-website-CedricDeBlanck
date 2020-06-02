let postshtml = document.getElementById('posts');
let DOMAIN = 'https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/posts/index.json?token=ANGVHBQS2334IPHBWOQE3YS63KI3Y';

function postsData() {
    fetch(DOMAIN)
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
  const searchLink = window.location.search;
  const projectId = searchLink.substring(searchLink.indexOf('=') + 1);
  console.log(projectId);
  posts.forEach(post => {
    
        postshtml.innerHTML += `
            <div class="m-post">
              <a href="/case1-pgm-website-CedricDeBlanck/posts/posts?post-id=${post.id}" class="m-post__hover">
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
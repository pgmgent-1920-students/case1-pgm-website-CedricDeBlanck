let postshtml = document.getElementById('detailpage-posts');
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

function postsInDom(data) {
    
  const searchLink = window.location.search;
  const postId = searchLink.substring(searchLink.indexOf('=') + 1);
  let detail = data.find(detail => detail.id === postId);

        postshtml.innerHTML += `
            <div class="m-post">
              <a href="/case1-pgm-website-CedricDeBlanck/posts/posts?post-id=${detail.id}" class="m-post__hover">
                <p class="a-post__moreinfo">Meer info</p>
                <picture>
                  <img class="a-post__image" src="${detail.image}">
                </picture>
              </a>
              <div class="a-post__textcontainer">
                  <p class="a-post__title">${detail.title}</p>
                </div>
            </div>
        `;
    
};
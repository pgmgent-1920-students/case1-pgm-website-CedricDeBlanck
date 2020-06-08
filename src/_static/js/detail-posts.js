let postshtml = document.getElementById('detailpage-posts');
let DOMAIN = 'https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/posts/index.json?token=ANGVHBQS2334IPHBWOQE3YS63KI3Y';

function postsData() {
    fetch(DOMAIN)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
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
        <div class="g-fb-container">
            <div class="m-post">
                <div class="a-post__info">
                  <picture>
                    <img class="a-post__image" src="${detail.img}">
                  </picture>
                  <div class="a-post__textcontainer__inner">
                  <p class="a-post__title__inner">${detail.title}</p>
                  <div class="post__info__inner">
                    <p>${detail.intro}</p>
                  </div>
                  </div>
                  
                </div>
                <div class="post__content">
                ${detail.content}
                </div>
            </div>
        </div>
        `;
    
};
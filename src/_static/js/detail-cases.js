let postshtml = document.getElementById('detailpage-cases');
let DOMAIN = 'https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/cases/index.json?token=ANGVHBRNGJOX5F4EAIDWOBS63KLQ6';

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
  const caseId = searchLink.substring(searchLink.indexOf('=') + 1);
  let detail = data.find(detail => detail.id === caseId);

        postshtml.innerHTML += `
            <div class="m-case">
              <div class="a-case__textcontainer">
                  <p class="a-case__title">${detail.title}</p>
              </div>
              <div class="image__text">
                <picture>
                  <img class="a-case__image" src="${detail.images[0].src}">
                  <img class="a-case__image" src="${detail.images[1].src}">
                </picture>
                  <div class="a-case__description">
                    <p>${detail.description}</p>
                  </div>                  
                </div>
                <div class="a-case__info">
                  <p>Tags: ${detail.tags}</p>
                  <p>Creator: ${detail.makers}</p>
                </div>
            </div>
        `;
    
};
let postshtml = document.getElementById('detailpage-cases');
let DOMAIN = 'https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/cases/index.json?token=ANGVHBRNGJOX5F4EAIDWOBS63KLQ6';

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
  const caseId = searchLink.substring(searchLink.indexOf('=') + 1);
  let detail = data.find(detail => detail.id === caseId);
  console.log(detail)

        postshtml.innerHTML += `
            <div class="m-case">
              <div class="a-case__textcontainer">
                  <p class="a-case__title">${detail.title}</p>
              </div>
                <picture>
                  <img class="a-case__image" src="${detail.image}">
                </picture>
              </a>
            </div>
        `;
    
};
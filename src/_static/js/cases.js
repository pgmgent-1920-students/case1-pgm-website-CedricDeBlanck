let studentshtml = document.getElementById('cases');

const fetchAPI = async (url) => {
  try {
    let response = await fetch(url)
    let data = await response.json();
    return data
  } catch {
    throw new Error('Tis kapot...')
  }
}

async function dataToDom() {
  const apidata = await fetchAPI('https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/cases/index.json?token=ANGVHBRNGJOX5F4EAIDWOBS63KLQ6')
  apidata.forEach(i => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="m-case">
              <a href="/case1-pgm-website-CedricDeBlanck/cases/cases?case-id=${i.id}" class="m-case__hover">
                <p class="a-case__moreinfo">Meer info</p>
                <picture>
                  <img class="a-case__image" src="${i.images[0].src}">
                </picture>
              </a>
              <div class="a-case__textcontainer">
                  <p class="a-case__title">${i.title}</p>
                </div>
            </div>
  `;
    // body vervangen door een variabele die naar u container verwijst
    document.getElementById('cases').appendChild(div);
  });
};

dataToDom();
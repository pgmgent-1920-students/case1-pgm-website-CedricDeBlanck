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
  const apidata = await fetchAPI('https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/data/cases.json?token=ANGVHBXDBAJXBLDJCWIBNA2623XC6')
  apidata.forEach(i => {
    const div = document.createElement('div');
    div.classList.add('a-cases__content');
    div.innerHTML = `
    <div class="a-student__info">
    <picture>
    <img class="o-student__image" src="${i.image}">
    </picture>
      <div class="o-student__name">
      <p>${i.title}</p>
      <p>${i.text}</p>
      </div>
      </div>

  `;
    // body vervangen door een variabele die naar u container verwijst
    document.getElementById('cases').appendChild(div);
  });
};

dataToDom();
const fetchAPI1 = async (url) => {
  try {
    let response = await fetch(url)
    let data = await response.json();
    return data
  } catch {
    throw new Error('Tis kapot...')
  }
}

async function dataToDom() {
  const apidata = await fetchAPI1('https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/team/index.json?token=ANGVHBR64GASJTCGAYZ7IPS63JS5S')
  apidata.forEach((i, index) => {
    const div = document.createElement('div');
    div.classList.add('a-student__content');
    div.innerHTML = `
    <div class="a-student__info g-fb-col-3">
      <picture>
        <img class="o-student__image" src="${i.thumbnailUrl}">
      </picture>
        <div class="o-student__name">
          <p>${i.name}</p>
          <p>${i.function}</p>
          <a class="nav-item" href="/case1-pgm-website-CedricDeBlanck/students/students?student-id=${index}">Meer info</a>
      </div>
    </div>

  `;
    // body vervangen door een variabele die naar u container verwijst
    document.getElementById('team').appendChild(div);
  });
};

dataToDom();
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
  const apidata = await fetchAPI('https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/students/index.json?token=ANGVHBRF6XN26FEZIQYBOES63JQJA')
  apidata.records.forEach((i, index) => {
    const div = document.createElement('div');
    div.classList.add('a-student__content');
    div.innerHTML = `
    <div class="a-student__info g-fb-col-3" data-id="${i.id}">
      <picture>
        <img class="o-student__image" src="${i.fields.img[0].thumbnails.large.url}">
      </picture>
        <div class="o-student__name">
          <p>${i.fields.name_first}</p>
          <p>${i.fields.name_last}</p>
          <a class="more-info" href="/case1-pgm-website-CedricDeBlanck/students/students?student-id=${i.id}">Meer info<i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>

  `;
    // body vervangen door een variabele die naar u container verwijst
    document.getElementById('students').appendChild(div);
  });
};

dataToDom();
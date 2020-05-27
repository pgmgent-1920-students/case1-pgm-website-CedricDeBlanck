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
  const apidata = await fetchAPI('https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/data/students.json?token=ANGVHBS5HM6LK6PFSNKDKX262POYG')
  apidata.records.forEach(i => {
    const div = document.createElement('div');
    div.classList.add('a-student__content');
    div.innerHTML = `
    <div class="a-student__info">
    <picture>
    <img class="o-student__image" src="${i.fields.img[0].thumbnails.large.url}">
    </picture>
      <div class="o-student__name">
      <p>${i.fields.name_first}</p>
      <p>${i.fields.name_last}</p>
      </div>
      </div>

  `;
  console.log(i.fields.img[0].thumbnails.small.url)
    // body vervangen door een variabele die naar u container verwijst
    document.getElementById('students').appendChild(div);
  });
};

dataToDom();
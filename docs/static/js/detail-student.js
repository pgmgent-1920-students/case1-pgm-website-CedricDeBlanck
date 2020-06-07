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
  const apidata = await fetchAPI1('https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/students/index.json?token=ANGVHBRF6XN26FEZIQYBOES63JQJA')
  const searchLink = window.location.search;
  const studentId = searchLink.substring(searchLink.indexOf('=') + 1);
  let detail = apidata.records.find(student => student.id === studentId);
  let detailElement = null;
  detailElement = document.createElement('div');
  detailElement.classList.add('detail');
  detailElement.innerHTML = `
<div class="container">
      <div class="detail__name__student">
        <h2>${detail.fields.name_first} ${detail.fields.name_last}</h2>
      </div>
      <div class="detail__team">
        <div class="detail__info">
          <h2 class="detail__title__info">Info:</h2>
          <p class="detail__about">${detail.fields.about}</p>
          <br>
        </div>
        <div class="detail__image">
          <picture>
            <img src="${detail.fields.img[0].thumbnails.large.url}">
          </picture>
        </div>
      </div>
      <div class="detail__studentinfo">
          <h2 class="detail__title__info">Interesses:</h2>
          <p class="detail__interests">${detail.fields.interests}</p>
          <h2 class="detail__title__info">Favoriet vak:</h2>
          <p class="detail__favourite">${detail.fields.favourite}</p>
      </div>
  </div>
            `;
  document.getElementById('detailpage-students').appendChild(detailElement);
};

dataToDom();
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
  console.log(studentId);
  console.log(apidata)
  let detail = apidata.records.find(student => student.id === studentId);
  console.log(detail);
    let detailElement = null;
    detailElement = document.createElement('div');
    detailElement.classList.add('detail');
    //apidata.records.forEach((detail) => {

    detailElement.innerHTML = `
      <div class="detail__maintext__news">
          <h2>${detail.fields.name_first}</h2>
          <p>${detail.fields.name_last}</p>
          <p>${detail.id}</p>
          <picture>
          <img src="${detail.fields.img[0].thumbnails.large.url}">
          </picture>
      </div>
            `;
    document.getElementById('detailpage-students').appendChild(detailElement);
  
  //});
  
};

dataToDom();
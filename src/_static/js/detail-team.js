
// (() => {
//   const app = {
//     initialize() {
//       this.detailData = null;
//       this.cacheElements();
//       this.loadDetail();
//     },
//     cacheElements() {
//       this.detailData = [];
//       this.detailListElement = document.querySelector('.detailpage-team');
//     },
//     async loadDetail() {
//     Ajax.fetchJsonByHandlers(`https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/students/index.json?token=ANGVHBXZQW7S6DNNRBVEI6S63JQXA`,
//     (data) => {
//       this.detailData = data;
//       this.generateUIForProjectsDetail();
//       console.log(detailData);
//     },
//     (error) => {
//       console.log(error);
//     });
//     },

//     async generateUIForProjectsDetail() {
//       const searchLink = window.location.search;
//       const projectId = searchLink.substring(searchLink.indexOf('=') + 1);
//       console.log(this.detailData[projectId]);
//       let detailData = this.detailData[projectId];
//       if (this.detailData !== null && this.detailListElement !== null) {
//         detailData.forEach((detail, index) => {
//           let detailElement = null;
//           detailElement = document.createElement('div');
//           detailElement.classList.add('detail');
//           detailElement.innerHTML = `
//           <div class="detail__maintext">
//                 <h3>Naam:</h3>
//                 <p>${detail.fields.name_first} ${detail.fields.name_last}</p>

//                 <p></p>
//           `;
//           this.detailListElement.appendChild(detailElement);
//         });
//       };
//     }
//   };
//   app.initialize();
// })();


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
  const apidata = await fetchAPI1('https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/team/index.json?token=ANGVHBVPWLY5EWVBTYUQEQC63KWC2')

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
    document.getElementById('detailpage').appendChild(div);
  });
};

dataToDom();
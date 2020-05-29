
(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loadDetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpage');
    },
    async loadDetail() {
    Ajax.fetchJsonByHandlers(`https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/docs/data/students/index.json?token=ANGVHBXZQW7S6DNNRBVEI6S63JQXA`,
    (data) => {
      this.detailData = data;
      this.generateUIForProjectsDetail();
      console.log(detailData);
    },
    (error) => {
      console.log(error);
    });
    },

    async generateUIForProjectsDetail() {
      const searchLink = window.location.search;
      const projectId = searchLink.substring(searchLink.indexOf('=') + 1);
      console.log(this.detailData[projectId]);
      let detailData = this.detailData[projectId];
      if (this.detailData !== null && this.detailListElement !== null) {
        detailData.forEach((detail, index) => {
          let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
          <div class="detail__maintext">
                <h3>Naam:</h3>
                <p>${detail.fields.name_first} ${detail.fields.name_last}</p>

                <p></p>
          `;
          this.detailListElement.appendChild(detailElement);
        });
      };
    }
  };
  app.initialize();
})();
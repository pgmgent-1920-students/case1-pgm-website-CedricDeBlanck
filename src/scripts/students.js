

(() => {
  const app = {
    initialize() {
      this.studentData = null;
      this.cacheElements();
      this.loadReasons();
    },
    cacheElements() {
      this.studentListElement = document.querySelector('.students');
    },
    loadReasons() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`./data/students.json`,
        (data) => {
          this.studentData = data;
          this.generateUIForStudents();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForStudents() {
      if (this.studentData !== null && this.studentListElement !== null) {
        let studentElement = null;
        this.studentData.forEach((reasons, index) => {
          studentElement = document.createElement('div');
          studentElement.classList.add('student')
          studentElement.innerHTML = `
          <picture>
          <img src="${student.image}">
          </picture>
          <div class="student__title">
          <h2>${student.fields.name_first}</h2>
          <h2>${student.fields.name_last}</h2>
          <p>Meer info<i class="fas fa-long-arrow-alt-right"></p>
          </div>
          `;
          this.studentListElement.appendChild(studentElement);
        });
      }
    },
  };
  app.initialize();
})();
let studentshtml = document.getElementById('students');
let studentsurl = 'https://raw.githubusercontent.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/master/data/students.json?token=ANGVHBS5HM6LK6PFSNKDKX262POYG';

function studentsData() {
    fetch(studentsurl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          console.log(data)
          studentsInDom(data);
        })
        .catch((error) => {
            console.log(error);
        })
};

studentsData()

function studentsInDom(student) {
  for (let i = 1; i < 3; i++) {
        studentshtml.innerHTML += `
        class="container">
        <div class="row align-self-start">
          <picture id="o-cases-picture__img">
            <img src='../../assets/picture.png' />
        </picture>
        <div id="o-cases__lesson">
         <a href="/cases"><h1>${student[student.length - i].records[i].fields.name_first}</h1></a>
         </div>

        `;
      };

};
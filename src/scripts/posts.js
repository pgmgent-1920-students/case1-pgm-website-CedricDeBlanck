import { postshtml } from './variabelen';

let jsonurl = 'https://github.com/pgmgent-1920-students/case1-pgm-website-baas-CedricDeBlanck/blob/master/data/posts.json';

export function JsonData() {
    // console.log(jsonurl);
    fetch(jsonurl)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return postsInDom(data);
        })
        .catch((error) => {
            console.log(error);
        })
};
function postsInDom(post) {
    for (let i = 1; i < 3; i++) {
        // console.log(cases[cases.length - i])
        postshtml.innerHTML += `
        <div class="diensten">
              <p class="diensten_title">${post.title[i]}</p>
              <p class="diensten_text">${post.text}</p>
              </div>
        `;
    }
};


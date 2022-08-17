const questionResearch = [
    ['Você quer seguir para área de Back-End ou Front-End?', 'back-end', 'front-end'],
    ['Você prefere aprender C# ou Java?', 'C#', 'Java'],
    ['Você prefere aprender React ou Vue?', 'react', 'vue'],
    ['Você quer se especializar na área escolhida ou se tornar Fullstack?', 'especializar', 'fullstack'],
    ['Tem mais alguma tecnologia que você pretende aprender?', 'sim', 'não']
]

let dataUser = {
    career: null,
    tech: null,
    fullstack: null,
    techFullstack: null,
    learnMore: null,
    arrayTechs: []
}

const mainContainer = document.querySelectorAll('.main');
document.querySelector('.start').addEventListener('click', () => {
    startResearch();
    document.querySelector('.start').classList.add('hide');
}, false);

function startResearch() {
    if (dataUser.career === null) {
        makeQuestion(0);
        mainContainer[1].onclick = () => {
            dataUser.career = mainContainer[1].innerText;
            startResearch();
        };
        mainContainer[2].onclick = () => {
            dataUser.career = mainContainer[2].innerText
            startResearch();
        };
    }
    if (dataUser.tech === null && dataUser.career === questionResearch[0][1]) {
        makeQuestion(1);
        mainContainer[1].onclick = () => {
            dataUser.tech = mainContainer[1].innerText;
            startResearch();
        }
        mainContainer[2].onclick = () => {
            dataUser.tech = mainContainer[2].innerText;
            startResearch();
        }
    }
    if (dataUser.tech === null && dataUser.career === questionResearch[0][2]) {
        makeQuestion(2);
        mainContainer[1].onclick = () => {
            dataUser.tech = mainContainer[1].innerText;
            startResearch();
        }
        mainContainer[2].onclick = () => {
            dataUser.tech = mainContainer[2].innerText;
            startResearch();
        }
    }
    if (dataUser.fullstack === null && dataUser.tech !== null) {
        makeQuestion(3);
        mainContainer[1].onclick = () => {
            dataUser.fullstack = mainContainer[1].innerText;
            startResearch();
        }
        mainContainer[2].onclick = () => {
            dataUser.fullstack = mainContainer[2].innerText;
            startResearch();
        }
    }
    if (dataUser.techFullstack === null && dataUser.fullstack === questionResearch[3][1]) {
        makeQuestion(4);
        mainContainer[1].onclick = () => {
            dataUser.learnMore = true;
            startResearch();
        }
        mainContainer[2].onclick = () => {
            dataUser.learnMore = false;
            startResearch();
        }
    }
    if (dataUser.techFullstack === null && dataUser.fullstack === questionResearch[3][2]) {
        if (dataUser.career === questionResearch[0][1]) {
            makeQuestion(2);
            mainContainer[1].onclick = () => {
                dataUser.techFullstack = mainContainer[1].innerText;
                startResearch();
            }
            mainContainer[2].onclick = () => {
                dataUser.techFullstack = mainContainer[2].innerText;
                startResearch();
            }
        } else {
            makeQuestion(1);
            mainContainer[1].onclick = () => {
                dataUser.techFullstack = mainContainer[1].innerText;
                startResearch();
            }
            mainContainer[2].onclick = () => {
                dataUser.techFullstack = mainContainer[2].innerText;
                startResearch();
            }
        }
    }
    if (dataUser.techFullstack !== null && dataUser.fullstack === questionResearch[3][2]) {
        makeQuestion(4)
        mainContainer[1].onclick = () => {
            dataUser.learnMore = true;
            startResearch();
        }
        mainContainer[2].onclick = () => {
            dataUser.learnMore = false;
            startResearch();
        }      
    }
    if (dataUser.learnMore === true) {
        dataUser.arrayTechs.push(prompt('Digite a tecnologia que pretende aprender:'));
    }
    if (dataUser.learnMore === false) {
        showResult(dataUser);
    }
}

function showResult(data) {
    const sectionContainer = document.querySelector('.container');
    sectionContainer.innerHTML = `<p class="text">
        Você irá seguir a carreira de ${data.career}, com a tecnologia ${data.tech}
    </p>`;
}

function makeQuestion(q) {
    for (let i = 0; i < mainContainer.length; i++) {
        mainContainer[i].classList.remove('hide');
        mainContainer[i].innerText = (questionResearch[q][i]);
    }
}





// let dataUser = [];

// const mainContainer = document.querySelectorAll('.main');
// document.querySelector('.start-button').addEventListener('click', () => startResearch(), false);

// function makeQuestion(j) {
//     document.querySelector('.start-button').classList.add('hide');
//     let answer = '';

//     for (let i = 0; i < mainContainer.length; i++) {
//         mainContainer[i].classList.remove('hide');
//         mainContainer[i].innerText = (questionResearch[j][i]);
//     }
//     mainContainer[1].addEventListener('click', () => answer = mainContainer[1], false);
//     mainContainer[2].addEventListener('click', () => {answer = mainContainer[2].innerText; console.log(answer)}, false);
//     return answer;
// }

// function startResearch() {
//     dataUser.career =  makeQuestion(0);
//     console.log(dataUser);

// }

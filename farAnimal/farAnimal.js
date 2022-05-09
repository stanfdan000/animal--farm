import { animals } from '../data.js';
import { findById } from '../utils.js';
const parm = new URLSearchParams(window.location.search);
const farAnimal = findById(parm.get('id'), animals);
console.log(farAnimal);

const main = document.querySelector('main');

function renderAnimalDetails(farAnimal) {
    
    const div = document.createElement('div');
    const head = document.createElement('h1');
    const text = document.createElement('p');
    const img = document.createElement('img');
    img.src = `../assets/${farAnimal.type}.svg`;
    head.textContent = farAnimal.name;
    text.textContent = farAnimal.says;
    div.append(head, text, img);
    return div; 
}
const animalDiv = renderAnimalDetails(farAnimal);
main.append(animalDiv);

export function renderListItem(animal) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    a.href = `./farAnimal/?id=${animal.id}`;
    a.textContent = `More Info`;
    div.classList.add('animal');
    div.style.top = animal.top;
    div.style.left = animal.left;

    const img = document.createElement('img');
    img.src = `./assets/${animal.type}.svg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = animal.says;



    div.append(img, nameSpan, span, a);
    return div;



}


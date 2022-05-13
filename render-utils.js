export function renderListItem(gem) {
    const div = document.createElement('div');
    div.classList.add('gem');
    //class stuff later!
    const img = document.createElement('img');
    img.src = `./assets/${gem.type}.jpg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = gem.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = gem.represents;

    const a = document.createElement('a');
    a.href = `./dynamic-gems/?id=${gem.id}`;

    a.append(img, nameSpan,);
    div.append(a);
    return div;
}

export function renderListItemDetail(gem) {
    const divEl = document.createElement('div');
    divEl.classList.add('gem');
    const img = document.createElement('img');
    img.src = `./assets/${gem.type}.jpg`;

    const nameSpanEl = document.createElement('span');
    nameSpanEl.textContent = gem.name;
    nameSpanEl.classList.add('name');

    const span = document.createElement('span');
    span.textContent = gem.metProps;

    const a = document.createElement('a');
    a.href = `./dynamic-gems/?id=${gem.id}`;

    a.append(img, nameSpanEl, span);
    divEl.append(a);
    return divEl;
}
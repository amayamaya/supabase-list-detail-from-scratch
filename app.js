// import { gems } from './data.js';
import { getStones } from './fetch-utils.js';
import { renderListItem } from './render-utils.js';

const main = document.querySelector('main');

async function loadGems() {
    const gems = await getStones();
    for (let gem of gems) {
        const gemDiv = renderListItem(gem);
        main.append(gemDiv);
    }
}

loadGems();

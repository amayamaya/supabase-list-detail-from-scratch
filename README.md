## Supabase List / Detail

### List Page To Do List

0. Copy over your render function, data, app.js, CSS from your Spotlight.
1. Add your table in Supabase X

-   Keys in your data correspond to your columns
-   Strings become varchars, Numbers become either ints or floats
-   Lets not worry about nested arrays
-   Create a row for each item in your array of data using the values
    _Validation step: Can you see the data in Supabase (also can ask TAs or Julie)_

2. Set up my app to be ready for Supabase

-   Add our script tag to our HTML in the `<head>`

```js
<script defer src="https://yhletbviclmzgnzikzpu.supabase.co"></script>
```

-   Make a `fetch-util.js` file, and add your Supabase URL and key at the top

```js
const SUPABASE_URL = 'https://ibfimxopxwngijoyxknw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY4NDQ3MSwiZXhwIjoxOTUyMjYwNDcxfQ.ewbC-sV1ELppz_IP21q0P7QEX_VoDqbi_ZZ1__Uphvs';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
```

3. Add a fetch function for your data in your `fetch-utils.js`

```js
export async function getAnimals() {
    const resp = await client.from('farm_animals').select('*');
    console.log(resp);
    return resp.data;
}
```

_Validation step: Call fetch function inside of your app.js and confirm you're getting data back_

4. Add an async loading function in your `app.js` to replace the hard coded data with the data from Supabase

```js
async function loadData() {
    const animals = await getAnimals();
    console.log(animals);
    const main = document.querySelector('main');

    for (let animal of animals) {
        const animalDiv = renderListItem(animal);
        main.append(animalDiv);
    }
}

loadData();
```

_Validation Step: stuff is loading on your page_

### Detail Page To Do List

1. Setup a detail page with a folder, an `index.html` and a JS file
2. Get the detail page ready for Supabase by adding the script tag to your HTML

```js
<script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
```

3. Add links to the details page from the home page using URLSearchParams
4. Load the id from the URLSearchParams in your JS file
5. Add your `getItemById` supabase function in your `fetch-utils.js`

```js
export async function getAnimalById(idFromParams) {
    const resp = await client.from('farm_animals').select('*').match({ id: idFromParams }).single();
    console.log(resp);
    return resp.data;
}
```

_Validation step: call your function with a hardcoded id from your js file_

6. Add a `loadData` function in your js file that calls `getItemById` with the URLSearchParameter and fertilize/hydrate/inoculate/dump/seed/yassify all your details on the page

```js
async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    animalNameElem.textContent = animal.name;
}

loadData();
```
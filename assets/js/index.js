// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import {monsters} from '/assets/js/monsters.js';

console.log(monsters);

const showMonsters = (monsterdiv) => {
    // Create a div called monster
    const monster = document.createElement('div');
    monster.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monsterdiv.id}?set=set2`;
    img.alt = monsterdiv.name;

    const name = document.createElement('p');
    name.className = 'name'
    name.innerText = monsterdiv.name

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monsterdiv.email;

    // storage it in monster const
    monster.append(img, name, email);

    document.querySelector('.monsters').append(monster);


    console.log(monster);
};

for (let mosterdiv of monsters) {
    showMonsters(mosterdiv);
}

const notFound = () => {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';

    const span = document.createElement('span');
    span.innerText = '404';

    const h1 = document.createElement('h1');
    h1.innerText = ' 🧟‍♂️ No Monster Found 🧟‍♂️ '

    notFoundDiv.append(span, h1)
    console.log(notFoundDiv);
}

notFound();
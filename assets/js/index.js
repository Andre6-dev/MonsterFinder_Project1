// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import {monsters} from '/assets/js/monsters.js';


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

document.querySelector('#search-monster').addEventListener('keyup', (e) => {
    const keyword = e.target.value.toLowerCase();

    // Getting all the divs
    const findMonster = document.querySelectorAll('.monster')

    let notFound = true;

    for (let monster of findMonster) {
        // get the index 1 that it's the name
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();

        if (name.includes(keyword) || email.includes(keyword)) {
            monster.style.display = 'block';
            // if something is encountered notFound is false otherwise it passes to the next if condition.
            notFound = false;
        } else {
            monster.style.display = 'none';
        }
    }

    if (notFound) {
        document.querySelector('.not-found').style.display = 'block';
    } else {
        document.querySelector('.not-found').style.display = 'none';
    }

})
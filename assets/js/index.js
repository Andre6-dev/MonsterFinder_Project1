// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
const showMosters = () => {
    // Create a div called monster
    const monster = document.createElement('div');
    monster.className = 'monster';

    const img = document.createElement('img');
    img.src = 'https://robohash.org/6?set=set2';
    img.alt = 'Andre Gallegos';

    const name = document.createElement('p');
    name.className = 'name'
    name.innerText = 'Andre Gallegos'

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = 'ndre322@gmail.com';

    // storage it in monster const
    monster.append(img, name, email);

    document.querySelector('.monsters').append(monster);


    console.log(monster);
};

showMosters();

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
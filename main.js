let url = "https://rickandmortyapi.com/api/character/";
let charactersContainer = document.getElementById('container');

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(character => {
     
            let characterCard = document.createElement('div');
            characterCard.classList.add('character-card');

            let nameParagraph = document.createElement('p');
            nameParagraph.textContent = character.name;

       
            let imageElement = document.createElement('img');
            imageElement.src = character.image;
            imageElement.alt = character.name;

            characterCard.appendChild(nameParagraph);
            characterCard.appendChild(imageElement);

            charactersContainer.appendChild(characterCard);
        });
    });
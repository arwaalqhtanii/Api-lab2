let url = "https://rickandmortyapi.com/api/character/";
        let characters = document.getElementById('container');

        fetch(url)
            .then(response => response.json())
            .then(data => {
                characters.innerHTML = data.results.map(character => `
                    <div class="character-card">
                        <img src="${character.image}" alt="${character.name}">
                        <p>${character.name}</p>
                    </div>
                `).join('');
            });

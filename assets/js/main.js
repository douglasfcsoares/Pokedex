const pokemonsList = document.getElementById("pokemonsList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 10;
let offset = 0;

function laodPokemonitens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonsList.innerHTML += pokemons
      .map(
        pokemon => `
          <li class="pokemon ${pokemon.type}">
              <h2 class="name">${pokemon.name}</h2>
              <span class="number">#${pokemon.order}</span>

              <div class="detail">
                  <ol class="types ">
                  ${pokemon.types
                    .map(
                      type => `<li class="type ${pokemon.type}">${type}</li>`
                    )
                    .join("")}
                  </ol>

                  <img
                  src=${pokemon.image}
                  alt="${pokemon.name}"
                  />
            </div>
          </li>
      `
      )
      .join("");
  });
}

laodPokemonitens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  laodPokemonitens(offset, limit);
});

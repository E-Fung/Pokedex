export async function getCards() {
  return fetch("https://pokeapi.co/api/v2/pokemon/1/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
}

export default getCards;

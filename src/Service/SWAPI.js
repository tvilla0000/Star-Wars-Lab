export function getAllStarships() {
  return fetch(`https://swapi.co/api/starships/`).then(res => res.json());
}

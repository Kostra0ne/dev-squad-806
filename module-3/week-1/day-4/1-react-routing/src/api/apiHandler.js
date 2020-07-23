import axios from "axios";

const service = axios.create({
  baseURL: "https://ironhack-pokeapi.herokuapp.com/pokemon",
});

export default {
  service,
  getAllPokemons() {
    return service.get("/");
  },
  getOnePokemon(id) {
    return service.get("/" + id);
  },
};

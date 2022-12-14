import { ref } from "vue";
import { defineStore } from "pinia";
import axios from 'axios'

export const usePokemonStore = defineStore("pokemonStore", () => {
  const currentPokemon = ref({
    // id: "001",
    // height: 7,
    // weight: 69,
    // name: "Bulbasaur",
    // description:
    //   "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
  });
  const currentPosition = ref(0)
  const pokemons = ref([
    // {
    //   id: "001",
    //   height: 7,
    //   weight: 69,
    //   name: "Bulbasaur",
    //   description:
    //     "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    // },
    // {
    //   id: "112",
    //   height: 7,
    //   weight: 79,
    //   name: "Bulbasaur7",
    //   description:
    //     "777A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    // }
  ])

  async function getAllPokemons() {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    data.results.forEach(ele => {
      pokemons.value.push(
        {
          id: parseInt(ele.url.split('/')[6]),
          name: ele.name, 
          description: "",
          height: "",
          weight: ""
        }
    )})
    const res = await axios.get(data.results[0].url)
    const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemons.value[0].id}/`)
      
    Object.assign(currentPokemon.value, {
      ...pokemons.value[0], 
      weight: res.data.weight,
      height: res.data.height,
      description: res2.data.flavor_text_entries[0].flavor_text
    }) 
    // 1)_ vai executar um axios ...
    // 2) vai gravar a busca em pokemons.value
    // 3) vai zerar o currentPosition
    // 4) vai pegar a posicao zero e colocar no currentPokemon
  }

  async function avancaPokemon() {
    currentPosition.value = currentPosition.value + 1 
    
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons.value[currentPosition.value].id}/`)
    const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemons.value[currentPosition.value].id}/`)
      
    Object.assign(currentPokemon.value, {
      ...pokemons.value[currentPosition.value]  , 
      weight: res.data.weight,
      height: res.data.height,
      description: res2.data.flavor_text_entries[0].flavor_text
    }) 
    // currentPokemon.value = pokemons.value[currentPosition.value]
  }

  async function recuaPokemon() {
    currentPosition.value = currentPosition.value - 1
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons.value[currentPosition.value].id}/`)
    const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemons.value[currentPosition.value].id}/`)
      
    Object.assign(currentPokemon.value, {
      ...pokemons.value[currentPosition.value]  , 
      weight: res.data.weight,
      height: res.data.height,
      description: res2.data.flavor_text_entries[0].flavor_text
    }) 
    // currentPokemon.value = pokemons.value[currentPosition.value]
  }

  function findPokemon(id) {
    const located = pokemons.value.find(p => p.id === id)
    if (located !== undefined) { 
      // currentPosition.value = currentPosition.value - 1  DESCOBRIR A POSICAO
      currentPokemon.value = located
    }
  }

  return { currentPokemon, avancaPokemon, recuaPokemon, findPokemon, getAllPokemons };
});

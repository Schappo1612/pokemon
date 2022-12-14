<script>
import CircleComp from "./components/pokedex/CircleComp.vue";
import HeaderCircles from "./components/pokedex/HeaderCircles.vue";
import NameComp from "./components/pokedex/NameComp.vue";
import NumberButton from "./components/pokedex/NumberButton.vue";
import ScreenRow from "./components/pokedex/ScreenRow.vue";
import SvgComp from "./components/pokedex/SvgComp.vue";
import TypesRow from "./components/pokedex/TypesRow.vue";

import { mapStores, mapState, mapActions } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";

export default {
  components: {
    HeaderCircles,
    CircleComp,
    NameComp,
    NumberButton,
    ScreenRow,
    SvgComp,
    TypesRow,
  },
  data() {
    return {
      display: "",
      displayWithDescription: true,
    };
  },
  computed: {
    ...mapStores(usePokemonStore),
    ...mapState(usePokemonStore, ["currentPokemon"]),
  },
  async created() {
    await this.getAllPokemons()
  },
  methods: {
    ...mapActions(usePokemonStore, ['findPokemon', 'getAllPokemons']),
    enviaNumero(num) {
      if (this.displayWithDescription) {
        this.display = num;
        this.displayWithDescription = false;
      } else {
        this.display = this.display + num;
      }
      if (this.display.length === 3) {
        this.displayWithDescription = true
        this.findPokemon(this.display);
      }
    },
  },
};
</script>
<template>
  <div id="language-selector"></div>
  <div id="pokedex-container">
    <div id="pokedex">
      <div id="pokedex-left">
        <HeaderCircles />
        <CircleComp />
        <ScreenRow />
        <NameComp />
      </div>
      <div id="pokedex-right">
        <div id="screen-description-row">
          <div id="screen-description" v-if="displayWithDescription">{{ currentPokemon.description }}</div>
          <div id="screen-description" v-else>{{ display }}</div>
        </div>
        <NumberButton @enviaNumero="enviaNumero" />
        <div id="decoration-buttons">
          <div id="deco-button"></div>
          <div id="deco-button"></div>
        </div>
        <TypesRow />
      </div>
      <SvgComp />
    </div>
  </div>
  
  <hr />
</template>

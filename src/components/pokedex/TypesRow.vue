<script>
import { mapStores, mapState } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";

export default {
  computed: {
    ...mapStores(usePokemonStore),
    ...mapState(usePokemonStore, ["currentPokemon"]),
  },
};
</script>

<template>
  <div id="types-row">
    <div id="types-container">
      <div id="type-box" style="border-right: none">
        <img id="type1" class="type-pokemon"
        src=https://cdn2.bulbagarden.net/upload/7/74/GrassIC_Big.png>
      </div>
      <div id="type-box">
        <img id="type2" class="type-pokemon"
        src=https://cdn2.bulbagarden.net/upload/3/3d/PoisonIC_Big.png>
      </div>
    </div>
    <div id="deco-light"></div>
  </div>
  <div id="extra-info-pokemon-row">
    <div class="extra-info-screen" id="extra-info-screen-1">
      Height: {{ currentPokemon.height }}
    </div>
    <div class="extra-info-screen" id="extra-info-screen-2">
      Weight: {{ currentPokemon.weight }}
    </div>
  </div>
</template>
<style>
#types-row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

#types-container {
  display: flex;
}
#type-box {
  width: 85px;
  height: 50px;
  background-color: #dedede;
  border: 2px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

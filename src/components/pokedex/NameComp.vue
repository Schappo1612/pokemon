<script>
import { mapStores, mapState, mapActions } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";

export default {
  computed: {
    ...mapStores(usePokemonStore),
    ...mapState(usePokemonStore, ["currentPokemon"]),
  },
  methods: {
    ...mapActions(usePokemonStore, ['avancaPokemon', 'recuaPokemon'])
  }
};
</script>
<template>
  <div id="name-row">
    <div id="name-container">
      <div id="name-screen">{{ currentPokemon.name }}</div>
      <div id="buttons-container">
        <div id="button-red" onclick="clickNormalColor()">
          <div id="light-button-red" class="light on"></div>
        </div>
        <div id="button-blue" onclick="clickShinyColor()">
          <div id="light-button-blue" class="light off"></div>
        </div>
      </div>
      <div id="arrows-container">
        <div id="cross">
          <div id="leftcross" @click="recuaPokemon">
            <div id="leftT"></div>
          </div>
          <div id="topcross" onclick="clickUp()">
            <div id="upT"></div>
          </div>
          <div id="rightcross" @click="avancaPokemon">
            <div id="rightT"></div>
          </div>
          <div id="midcross">
            <div id="midCircle"></div>
          </div>
          <div id="botcross" onclick="clickBottom()">
            <div id="downT"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#name-row {
  display: flex;
  justify-content: center;
}
#name-container {
  width: 400px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#name-screen {
  background-color: #52af5f;
  height: 45px;
  width: 150px;
  border: 1px solid #000000;
  font-family: "VT323", monospace;
  font-size: 25px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  text-transform: capitalize;
  box-shadow: inset 1px 1px #306938, inset 2px 2px #000000;
}
</style>

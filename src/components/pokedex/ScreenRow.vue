<script>
import { mapStores, mapState} from "pinia";
import { usePokemonStore } from "@/stores/pokemon";

export default {
  computed: {
    ...mapStores(usePokemonStore),
    ...mapState(usePokemonStore, ["currentPokemon"]),
  },
  methods: {
    getImgUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.currentPokemon.id}.png`
    }
  }
  
};
</script>
<template>
  <div id="screen-row">
    <div id="screen-border">
      <div id="top-screen-decoration">
        <div id="circle3" style="margin-right: 20px"></div>
        <div id="circle3" style="margin-left: 20px"></div>
      </div>
      <div id="screen">
        <div id="picture-row">
          <img id="picture" :src="getImgUrl()" />
        </div>
        <div id="screen-row-info">
          <div id="number-pokemon">{{currentPokemon.id}}</div>
          <div id="gender-container">
            <svg
              id="male-icon"
              class="gender-icon gender-active svg-inline--fa fa-mars fa-w-12"
              onclick="setGender('male')"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="mars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
              ></path>
            </svg>
            <svg
              id="female-icon"
              class="gender-icon svg-inline--fa fa-venus fa-w-9"
              onclick="setGender('female')"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="venus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 288 512"
            >
              <path
                fill="currentColor"
                d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5  CircleComp.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// export default {

//   methods: {
//     clickNum
//   }
// }
</script>
<template>
  <div id="numbers-buttons-row">
    <div id="button-0" @click="$emit('enviaNumero', '0')" class="number-button">
      0
    </div>
    <div id="button-1" @click="$emit('enviaNumero', '1')" class="number-button">
      1
    </div>
    <div id="button-2" @click="$emit('enviaNumero', '2')" class="number-button">
      2
    </div>
    <div id="button-3" @click="$emit('enviaNumero', '3')" class="number-button">
      3
    </div>
    <div id="button-4" @click="$emit('enviaNumero', '4')" class="number-button">
      4
    </div>
    <div id="button-5" @click="$emit('enviaNumero', '5')" class="number-button">
      5
    </div>
    <div id="button-6" @click="$emit('enviaNumero', '6')" class="number-button">
      6
    </div>
    <div id="button-7" @click="$emit('enviaNumero', '7')" class="number-button">
      7
    </div>
    <div id="button-8" @click="$emit('enviaNumero', '8')" class="number-button">
      8
    </div>
    <div id="button-9" @click="$emit('enviaNumero', '9')" class="number-button">
      9
    </div>
  </div>
</template>

<style>
#numbers-buttons-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.number-button {
  width: 19%;
  height: 25px;
  background-color: #2aaafc;
  border: 1px solid #000000;
  cursor: pointer;
  text-align: center;
  padding-top: 10px;
  font-family: "Odibee Sans", cursive;
  font-size: 19px;
}
.number-button:hover {
  text-shadow: 0px 0px 4px #c51818;
  color: #fff8c3;
}
</style>

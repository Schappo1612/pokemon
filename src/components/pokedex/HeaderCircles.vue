<script setup>
import CircleComp from "./CircleComp.vue";
</script>
<template>
  <div>
    <CircleComp id="circle1" subclass="" subid="light-circle1" />
    <CircleComp
      id="circle2"
      class="circleRed"
      subclass="light-circle2"
      subid="light-circle2Red"
    />
    <CircleComp
      id="circle2"
      class="circleYellow"
      subclass="light-circle2"
      subid="light-circle2Yellow"
    />
    <CircleComp
      id="circle2"
      class="circleGreen"
      subclass="light-circle2"
      subid="light-circle2Green"
    />
  </div>
</template>
<style>
#circle1 {
  width: 70px;
  height: 70px;
  background-color: #146b9f;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #000000, 0 0 0 15px #e9eef3, 0 0 0 16px #000000;
  position: relative;
  top: 35px;
  left: 35px;
}
#light-circle1 {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  top: 17px;
  left: 17px;
  animation: lightCircle1Blinks 5s ease 0s infinite alternate none;
}
@keyframes lightCircle1Blinks {
  0% {
    background-color: #146b9f;
    box-shadow: none;
  }
  97% {
    background-color: #146b9f;
    box-shadow: none;
  }
  100% {
    background-color: rgb(0 255 255 / 25%);
    box-shadow: 0 0 40px 0 #0ff;
  }
}
#circle2 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  border: 1px solid #000000;
}
.light-circle2 {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  top: 5px;
  left: 5px;
}
.circleRed {
  background-color: #710000;
  top: -35px;
  left: 135px;
}
#light-circle2Red {
  animation: circle2RedBlinks 2s ease 3s infinite;
}
@keyframes circle2RedBlinks {
  0% {
    background-color: #710000;
    box-shadow: none;
  }
  90% {
    background-color: #710000;
    box-shadow: none;
  }
  100% {
    background-color: rgb(255 0 0 / 25%);
    box-shadow: 0 0 9px 0 #f00;
  }
}
.circleYellow {
  background-color: #c3ba00;
  top: -57px;
  left: 165px;
}
#light-circle2Yellow {
  animation: circle2YellowBlinks 2s ease 3.25s infinite;
}
@keyframes circle2YellowBlinks {
  0% {
    background-color: #c3ba00;
    box-shadow: none;
  }
  90% {
    background-color: #c3ba00;
    box-shadow: none;
  }
  100% {
    background-color: rgb(247 246 218 / 68%);
    box-shadow: 0 0 9px 0 rgb(253 255 145);
  }
}
.circleGreen {
  background-color: #1f743b;
  top: -79px;
  left: 195px;
}
#light-circle2Green {
  animation: circle2GreenBlinks 2s ease 3.5s infinite;
}
@keyframes circle2GreenBlinks {
  0% {
    background-color: #1f743b;
    box-shadow: none;
  }
  90% {
    background-color: #1f743b;
    box-shadow: none;
  }
  100% {
    background-color: rgb(247 246 218 / 68%);
    box-shadow: 0 0 9px 0 rgb(253 255 145);
  }
}
</style>

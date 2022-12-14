<script>
export default {
  props: ["subclass", "subid"],
};
</script>

<template>
  <div id="circle2" class="circleRed">
    <div :class="subclass" :id="subid"></div>
  </div>
</template>

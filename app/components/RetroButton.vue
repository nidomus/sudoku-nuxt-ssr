<template>
<div class="bex">
  <div class="bex__line bex__line--top"></div>
  <div class="bex__line bex__line--right"></div>
  <div class="bex__line bex__line--bottom"></div>
  <div class="bex__line bex__line--left"></div>

</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>


body {
  height: 100vh;
  width: 100vw;
  background-color: black;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bex{
  height: 200px;
  width: 300px;
  position: relative;
}

.bex_line {
  position: absolute;
  background:rgb(233, 0, 0);
  &--top,
  &--bottom {
    height:  2px;;
    width: 100%;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width:  2px;;
      height:  2px;;
      background:rgb(233, 0, 0);
    }
  }
  &--top {
    top: - 2px;;
    &::before {
      left: 0;
      bottom: - 2px;;      
    }
    &::after {
      right: 0;
      bottom: - 2px;;
    }
  }
  &--bottom {
    bottom: - 2px;;
    &::before {
      left: 0;
      top: - 2px;;      
    }
    &::after {
      right: 0;
      top: - 2px;;
    }
  }
  &--left,
  &--right {
    width:  2px;;
    height: 100%;
  }
  &--left {
    left: - 2px;;
  }
  &--right {
    right: - 2px;;
  }
}
</style>
<template>
  <div>
    <button class="btn" v-ripple>click</button>
  </div>
</template>

<script setup lang="ts"></script>

<style>
* {
  padding: 0;
  margin: 0;
}
.btn {
  margin: 20px;
  min-width: 100px;
  padding: 10px 15px;
  color: #fff;
  background: #4b77c2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

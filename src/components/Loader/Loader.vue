<template>
  <div class="loader">
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>

</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class Loader extends Vue {}
</script>

<style scoped lang="scss">
.loader {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 12px;
}
</style>

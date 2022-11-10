<template>
  <v-sheet
    color="white"
    elevation="3"
    height="160"
    outlined
    rounded
    width="100%"
    class="ml-4 mr-4"
  >
    <slot />
  </v-sheet>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class Sheet extends Vue {}
</script>

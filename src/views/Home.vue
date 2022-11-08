<template>
  <div class="home">
    <v-btn>Button</v-btn>
    <div>api url: {{ apiUrl }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  apiUrl = "";
  created() {
    this.apiUrl = process.env.VUE_APP_BASE_URL_API;
  }
}
</script>

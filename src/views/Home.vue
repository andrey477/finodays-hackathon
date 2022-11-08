<template>
  <div class="home">
    <v-btn>Button</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  created() {
    console.log(process.env.VUE_APP_BASE_URL_API);
  }
}
</script>

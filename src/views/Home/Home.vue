<template>
  <div class="home">Home Page</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RouteNames } from '@/router/routeNames';

@Component
export default class Home extends Vue {
  created() {
    this.$router.push({ name: RouteNames.MORTGAGES });
  }
}
</script>

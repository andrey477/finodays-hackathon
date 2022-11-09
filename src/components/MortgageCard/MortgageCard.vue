<template>
  <div class="mortgage-card">
    <div>{{ mortgage.name }}</div>
    <div>{{ mortgage.maxSum }}</div>
    <div>{{ mortgage.percent }}</div>
    <div>{{ mortgage.years }}</div>
    <v-btn @click="redirectToMortgagePage">Оформить</v-btn>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import { Mortgage } from '@/types/mortgage';
import { RouteNames } from '@/router/routeNames';

@Component
export default class MortgageCard extends Vue {
  @Prop({ type: Object, required: true }) readonly mortgage: Mortgage.Result;

  redirectToMortgagePage(): void {
    this.$router.push({
      name: RouteNames.MORTGAGE,
      query: { id: String(this.mortgage.id) },
    });
  }
}
</script>

<style scoped lang="scss">
.mortgage-card {
  padding: 12px;
  border: 1px solid black;
}
</style>

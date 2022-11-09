<template>
  <div>
    <h1>Ипотеки</h1>
    <MortgageCard
      v-for="mortgage in mortgages"
      :key="mortgage.id"
      :mortgage="mortgage"
    />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Mortgage } from '@/types/mortgage';
import MortgageCard from '@/components/MortgageCard/MortgageCard.vue';
@Component({
  components: { MortgageCard },
})
export default class MortgagesPage extends Vue {
  mortgages: Mortgage.Data[] = [
    {
      id: 4,
      name: 'fdsf',
      years: 32,
      percent: 32,
      maxSum: 244324,
    },
  ];

  loading = false;

  created() {
    this.fetchMortgages();
  }

  async fetchMortgages(): Promise<void> {
    try {
      this.loading = true;
      // this.mortgages = await getAllMortgages();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

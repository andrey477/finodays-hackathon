<template>
  <v-container class="container">
    <h1>Ипотеки</h1>
    <Loader v-if="loading" />
    <MortgageCard
      v-else
      v-for="mortgage in mortgages.result"
      :key="mortgage.id"
      :mortgage="mortgage"
    />
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Mortgage } from '@/types/mortgage';
import MortgageCard from '@/components/MortgageCard/MortgageCard.vue';
import { getAllMortgages } from '@/api/mortgage';
import Loader from '@/components/Loader/Loader.vue';
@Component({
  components: { Loader, MortgageCard },
})
export default class MortgagesPage extends Vue {
  mortgages: Mortgage.Data | null = null;

  loading = false;

  created() {
    this.fetchMortgages();
  }

  async fetchMortgages(): Promise<void> {
    try {
      this.loading = true;
      this.mortgages = await getAllMortgages();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 800px;
}
</style>

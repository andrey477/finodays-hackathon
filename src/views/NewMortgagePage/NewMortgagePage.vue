<template>
  <div>
    <MortgageBlock @changeMortgage="handleChangeMortgage" />
    <FiltersBlock @changeStrategies="handleChangeStrategies" />
    <v-row class="mt-6">
      <v-col>
        <v-btn @click="fetchNewMortgage">Создать</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import FiltersBlock from '@/components/FiltersBlock/FiltersBlock.vue';
import MortgageBlock from '@/components/MortgageBlock/MortgageBlock.vue';
import { Strategy } from '@/types/strategy';
import { createNewMortgage } from '@/api/mortgage';
@Component({
  components: { MortgageBlock, FiltersBlock },
})
export default class NewMortgagePage extends Vue {
  error = false;

  loading = true;

  requestBody: Partial<Strategy.Request> = {
    mortgage: undefined,
    strategy: undefined,
  };

  handleChangeMortgage(mortgage: Strategy.Mortgage): void {
    this.requestBody.mortgage = mortgage;
  }

  handleChangeStrategies(strategies: Strategy.Filter[]): void {
    this.requestBody.strategy = strategies;
  }

  async fetchNewMortgage(): Promise<void> {
    try {
      if (this.requestBody.mortgage && this.requestBody.strategy) {
        this.loading = true;
        await createNewMortgage(this.requestBody);
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

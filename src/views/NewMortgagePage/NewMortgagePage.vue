<template>
  <v-container class="container">
    <h1>Ипотека</h1>
    <v-form ref="form">
      <MortgageBlock @changeMortgage="handleChangeMortgage" />
    </v-form>
    <FiltersBlock @changeStrategies="handleChangeStrategies" />
    <v-row class="mt-6">
      <v-col align="right">
        <v-btn @click="fetchNewMortgage" color="primary" :loading="loading">Создать</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import FiltersBlock from '@/components/FiltersBlock/FiltersBlock.vue';
import MortgageBlock from '@/components/MortgageBlock/MortgageBlock.vue';
import { Strategy } from '@/types/strategy';
import { createNewMortgage } from '@/api/mortgage';
import { RouteNames } from '@/router/routeNames';
@Component({
  components: { MortgageBlock, FiltersBlock },
})
export default class NewMortgagePage extends Vue {
  error = false;

  loading = false;

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
        this.error = false;
        this.loading = true;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const valid = this.$refs?.form?.validate();
        if (valid) {
          await createNewMortgage(this.requestBody);
          await this.$router.push({ name: RouteNames.MORTGAGES });
        }
      }
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

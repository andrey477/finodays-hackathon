<template>
  <Loader v-if="loading" />
  <v-container v-else class="container">
    <h1>Редактирование</h1>
    <v-form ref="form">
      <MortgageBlock
        :initMortgage="initMortgage.result"
        @changeMortgage="handleChangeMortgage"
      />
    </v-form>
    <FiltersBlock
      @changeStrategies="handleChangeStrategies"
      :init-mortgage="initMortgage"
    />
    <v-row class="mt-6">
      <v-col align="right">
        <v-btn @click="handleSubmit" color="primary" :loading="loading">
          Редактирование
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Strategy } from '@/types/strategy';
import { createNewMortgage, getMortgage, updateMortgage } from '@/api/mortgage';
import { CreditApplication } from '@/types/creditApplication';
import MortgageBlock from '@/components/MortgageBlock/MortgageBlock.vue';
import Loader from '@/components/Loader/Loader.vue';
import { Watch } from 'vue-property-decorator';
import { RouteNames } from '@/router/routeNames';
import FiltersBlock from '@/components/FiltersBlock/FiltersBlock.vue';
@Component({
  components: { FiltersBlock, Loader, MortgageBlock },
})
export default class EditPage extends Vue {
  loading = false;

  initMortgage: CreditApplication.Mortgage | null = null;

  requestBody: Partial<Strategy.Request> = {
    mortgage: undefined,
    strategy: undefined,
  };

  created() {
    this.fetchMortgage();
  }

  get id(): string {
    const id = this.$route.query.id;
    return id ? String(id) : '';
  }

  @Watch('requestBody', { deep: true })
  changeRequestBody(value: any) {
    console.log(this.requestBody);
  }

  handleChangeMortgage(mortgage: Strategy.Mortgage): void {
    this.requestBody.mortgage = mortgage;
  }

  handleChangeStrategies(strategies: Strategy.Filter[]): void {
    this.requestBody.strategy = strategies;
  }

  async fetchMortgage(): Promise<void> {
    try {
      this.loading = true;
      this.initMortgage = await getMortgage(this.id);
      this.requestBody.mortgage = {
        years: this.initMortgage?.result.years,
        maxSum: this.initMortgage?.result.max_sum,
        percent: this.initMortgage?.result.percent,
        name: this.initMortgage?.result.name,
      };
      // this.addFields();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  async handleSubmit(): Promise<void> {
    try {
      if (this.requestBody.mortgage) {
        this.loading = true;
        await updateMortgage(this.requestBody);
        await this.$router.push({ name: RouteNames.MORTGAGES });
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

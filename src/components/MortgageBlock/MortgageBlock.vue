<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          v-model="mortgage.name"
          label="Название ипотеки"
          :rules="[requiredRule]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="mortgage.percent"
          label="Процентная ставка"
          type="number"
          :rules="[requiredRule]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="mortgage.maxSum"
          label="Максимальная сумма кредита"
          type="number"
          :rules="[requiredRule]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="mortgage.years"
          label="Максимальный срок кредита"
          type="number"
          :rules="[requiredRule]"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Strategy } from '@/types/strategy';
import { Prop, Watch } from 'vue-property-decorator';
import { requiredRule } from '@/utils/utils';
import { CreditApplication } from '@/types/creditApplication';

@Component
export default class MortgageBlock extends Vue {
  @Prop({ type: Object })
  readonly initMortgage: CreditApplication.Result;

  mortgage: Strategy.Mortgage = {
    name: undefined,
    percent: undefined,
    maxSum: undefined,
    years: undefined,
  };

  @Watch('initMortgage', { deep: true })
  changeInitMortgage11(value: any) {
    console.log('!!!');
    console.log('te');
    this.mortgage = {
      name: this.initMortgage?.name,
      percent: this.initMortgage?.percent,
      maxSum: this.initMortgage?.max_sum,
      years: this.initMortgage?.years,
    };
  }

  mounted() {
    console.log(this.initMortgage);
    this.mortgage = {
      name: this.initMortgage?.name,
      percent: this.initMortgage?.percent,
      maxSum: this.initMortgage?.max_sum,
      years: this.initMortgage?.years,
    };
  }

  requiredRule = requiredRule;

  @Watch('mortgage', { deep: true })
  changeMortgage(value: any) {
    this.$emit('changeMortgage', this.mortgage);
  }
}
</script>

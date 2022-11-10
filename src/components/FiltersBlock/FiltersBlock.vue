<template>
  <div>
    <h1>Стратегии</h1>
    <v-form ref="form">
      <v-row>
        <v-col>
          <v-text-field
            v-for="num in strategies.length"
            :key="num - 1"
            v-model="strategies[num - 1].name"
            label="Название стратегии"
          />
        </v-col>
        <v-col>
          <v-select
            v-for="num in strategies.length"
            :key="num - 1"
            v-model="strategies[num - 1].operation"
            :items="operands"
            label="Операнд"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            v-for="num in strategies.length"
            :key="num - 1"
            v-model="strategies[num - 1].value"
            label="Значение"
          />
        </v-col>
      </v-row>
    </v-form>
    <v-btn @click="addCount" color="primary">Добавить</v-btn>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop, Watch } from 'vue-property-decorator';
import { Strategy } from '@/types/strategy';
import { emailRule } from '@/utils/utils';
import { CreditApplication } from '@/types/creditApplication';

@Component
export default class FiltersBlock extends Vue {
  @Prop({ type: Object }) readonly initMortgage: CreditApplication.Mortgage;
  strategies: Strategy.Filter[] = [];

  operands = ['>', '<', '='];

  emptyFilter: Strategy.Filter = {
    name: '',
    value: '',
    operation: '',
  };

  emailRule = emailRule;

  created() {
    this.strategies.push({ ...this.emptyFilter });
    if (
      this.initMortgage &&
      this.initMortgage.result &&
      this.initMortgage.result.filters.length
    ) {
      this.strategies = this.initMortgage.result.filters.map((item) => ({
        value: item.value_const,
        operation: item.operation,
        name: item.name,
      }));
    }
  }

  addCount(): void {
    this.strategies.push({ ...this.emptyFilter });
  }

  @Watch('strategies', { deep: true })
  changeForm(value: any) {
    console.log(this.strategies);
    this.$emit('changeStrategies', this.strategies);
  }
}
</script>

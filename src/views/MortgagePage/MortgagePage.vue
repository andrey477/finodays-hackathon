<template>
  <div>
    <h1 v-if="mortgage && mortgage.name">{{ mortgage.name }}</h1>
    <div v-if="mortgage && mortgage.percent">{{ mortgage.percent }}</div>
    <div v-if="mortgage && mortgage.maxSum">{{ mortgage.maxSum }}</div>
    <div v-if="mortgage && mortgage.years">{{ mortgage.years }}</div>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="creditApplication.lastName" label="Фамилия" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="creditApplication.firstName" label="Имя" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="creditApplication.middleName"
            label="Отчество"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="creditApplication.phoneNumber"
            label="Номер телефона"
          />
        </v-col>
      </v-row>
      <div v-if="mortgage">
        <v-row v-for="(field, index) in mortgage.strategy" :key="field.name">
          <v-col>
            <v-text-field
              v-model="creditApplication.additionalFields[index].value"
              :label="field.name"
            />
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col>
          <v-btn type="submit">Отправить</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { CreditApplication } from '@/types/creditApplication';
import { getMortgage } from '@/api/mortgage';
import { Watch } from 'vue-property-decorator';

@Component
export default class MortgagePage extends Vue {
  creditApplication: CreditApplication.Data = {
    firstName: '',
    lastName: '',
    middleName: '',
    phoneNumber: '',
    additionalFields: [],
  };

  loading = false;

  mortgage: CreditApplication.Mortgage | null = null;

  id = '';

  created(): void {
    this.id = this.$route.params.id ?? '';
    this.fetchMortgage();
  }

  @Watch('creditApplication', { deep: true })
  changeCreditApplication(value: any): void {
    console.log(this.creditApplication);
  }

  async fetchMortgage(): Promise<void> {
    try {
      this.loading = true;
      // this.mortgage = await getMortgage(this.id);
      this.mortgage = {
        name: 'fds',
        years: 32,
        maxSum: 43,
        percent: 43,
        strategy: [
          {
            name: 'Стаж',
          },
        ],
      };
      this.addFields();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  addFields(): void {
    this.mortgage?.strategy.forEach((item, index) => {
      this.creditApplication.additionalFields[index] = {
        field: item.name,
        value: '',
      };
    });
  }

  // async handleSubmit(): void {
  //
  // }
}
</script>

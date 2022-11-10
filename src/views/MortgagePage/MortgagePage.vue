<template>
  <div>
    <div v-if="mortgage && mortgage.result">
      <h1 v-if="mortgage.result.name">{{ mortgage.result.name }}</h1>
      <div v-if="mortgage.result.percent">{{ mortgage.result.percent }}</div>
      <div v-if="mortgage.result.max_sum">{{ mortgage.result.max_sum }}</div>
      <div v-if="mortgage.result.years">{{ mortgage.result.years }}</div>
    </div>

    <v-form @submit.prevent="handleSubmit">
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
        <v-row
          v-for="(field, index) in mortgage.result.filters"
          :key="field.name"
        >
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
import { getMortgage, sendCreditApplication } from '@/api/mortgage';
import { Watch } from 'vue-property-decorator';

@Component
export default class MortgagePage extends Vue {
  creditApplication: CreditApplication.Data = {
    firstName: '',
    lastName: '',
    middleName: '',
    phoneNumber: '',
    blockId: '',
    additionalFields: [],
  };

  loading = false;

  loadingApplication = false;

  mortgage: CreditApplication.Mortgage | null = null;

  response: CreditApplication.Response | null = null;

  created(): void {
    this.fetchMortgage();
    this.creditApplication.blockId = this.id;
  }

  get id(): string {
    const id = this.$route.query.id;
    return id ? String(id) : '';
  }

  @Watch('creditApplication', { deep: true })
  changeCreditApplication(value: any): void {
    console.log(this.creditApplication);
  }

  async fetchMortgage(): Promise<void> {
    try {
      this.loading = true;
      this.mortgage = await getMortgage(this.id);
      this.addFields();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  addFields(): void {
    if (this.mortgage && this.mortgage.result) {
      this.mortgage?.result.filters.forEach((item, index) => {
        this.creditApplication.additionalFields[index] = {
          id: item.id,
          field: item.name,
          value: '',
        };
      });
    }
  }

  async handleSubmit(): Promise<void> {
    try {
      this.loadingApplication = true;
      this.response = await sendCreditApplication(this.creditApplication);
    } catch (error) {
      console.error(error);
    } finally {
      this.loadingApplication = false;
    }
  }
}
</script>

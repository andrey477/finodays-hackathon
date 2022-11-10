<template>
  <div id="mortgage">
    <v-container class="container">
      <h1 v-if="mortgage.result.name" class="title-text">
        {{ mortgage.result.name }}
      </h1>
    </v-container>
    <div class="information mt-6">
      <sheet v-if="mortgage.result.percent">
        <div class="card-sheet pt-4">
          <h1 class="value">{{ mortgage.result.percent }}</h1>
          <strong>Процентная ставка</strong>
        </div>
      </sheet>
      <sheet v-if="mortgage.result.max_sum">
        <div class="card-sheet pt-4">
          <h1 class="value">{{ mortgage.result.max_sum }}</h1>
          <strong>Максимальная сумма кредита</strong>
        </div>
      </sheet>
      <sheet v-if="mortgage.result.years">
        <div class="card-sheet pt-4">
          <h1 class="value">{{ mortgage.result.years }}</h1>
          <strong>Максимальный срок кредита</strong>
        </div>
      </sheet>
    </div>
    <v-container class="container mt-10">
      <v-row class="mt-4">
        <v-col>
          <result v-if="response" :result="response.result" />
        </v-col>
      </v-row>
      <v-form ref="form" @submit.prevent="handleSubmit">
        <v-row>
          <v-col>
            <v-text-field
              v-model="creditApplication.lastName"
              label="Фамилия"
              :rules="[requiredRule]"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="creditApplication.firstName"
              label="Имя"
              :rules="[requiredRule]"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="creditApplication.middleName"
              label="Отчество"
              :rules="[requiredRule]"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="creditApplication.phoneNumber"
              label="Номер телефона"
              :rules="[requiredRule]"
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
                :rules="[requiredRule]"
              />
            </v-col>
          </v-row>
        </div>
        <v-row>
          <v-col align="right">
            <v-btn type="submit" color="primary">Отправить</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { CreditApplication } from '@/types/creditApplication';
import { getMortgage, sendCreditApplication } from '@/api/mortgage';
import { Watch } from 'vue-property-decorator';
import Sheet from '@/components/Sheet/Sheet.vue';
import Result from '@/components/Result/Result.vue';
import { requiredRule } from '@/utils/utils';
@Component({
  components: { Result, Sheet },
})
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

  requiredRule = requiredRule;

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const valid = this.$refs?.form?.validate();
      if (valid) {
        this.response = await sendCreditApplication(this.creditApplication);
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.loadingApplication = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import 'src/assets/colors.scss';
.container {
  max-width: 800px;
}

.card-sheet {
  text-align: center;
}

.value {
  display: block;
  margin-bottom: 20px;
  font-size: 48px;
  color: $color-secondary;
}

.information {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
}

.title-text {
  color: $color-tertiary;
  text-align: center;
  font-size: 48px;
}
</style>

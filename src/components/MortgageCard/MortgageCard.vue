<template>
  <v-card class="mx-auto mt-6" max-width="800" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">ИПОТЕКА</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ mortgage.name }}
        </v-list-item-title>
        <div class="description">
          <span class="description-text">
            Сумма: до
            <strong class="description-value">{{ mortgage.max_sum }}</strong> рублей
          </span>
        </div>
        <div class="description">
          <span class="description-text">
            Ставка: от
            <strong class="description-value">{{ mortgage.percent }}</strong> %
          </span>
        </div>
        <div class="description">
          <span class="description-text">
            Максимальный срок до:
            <strong class="description-value">{{ mortgage.years }}</strong> лет
          </span>
        </div>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn @click="redirectToMortgagePage" outlined rounded text>
        Оформить
      </v-btn>
      <v-btn @click="redirectToEditPage" outlined rounded text>
        Редактировать
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import { Mortgage } from '@/types/mortgage';
import { RouteNames } from '@/router/routeNames';
import Loader from '@/components/Loader/Loader.vue';
@Component({
  components: { Loader },
})
export default class MortgageCard extends Vue {
  @Prop({ type: Object, required: true }) readonly mortgage: Mortgage.Result;

  redirectToMortgagePage(): void {
    this.$router.push({
      name: RouteNames.MORTGAGE,
      query: { id: String(this.mortgage.id) },
    });
  }

  redirectToEditPage(): void {
    this.$router.push({
      name: RouteNames.EDIT,
      query: { id: String(this.mortgage.id) },
    });
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/colors.scss';
.mortgage-card {
  padding: 12px;
  border: 1px solid black;
}

.description {
  display: flex;
  justify-content: left;
  margin-bottom: 12px;
}

.description-text {
  font-size: 18px;
}

.description-value {
  font-size: 24px;
  color: $color-primary;
}
</style>

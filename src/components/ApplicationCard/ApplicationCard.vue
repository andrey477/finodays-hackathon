<template>
  <v-card class="mx-auto mb-6" max-width="800" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">ЗАЯВКА</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ `${result.surname} ${result.name} ${result.middle_name}` }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ result.phone }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <div class="container">
      <result
        :result="result.accepted"
        success-text="Одобрена"
        canceled-text="Отклонена"
      />
    </div>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import { CreditApplication } from '@/types/creditApplication';
import Result from '@/components/Result/Result.vue';
@Component({
  components: { Result },
})
export default class ApplicationCard extends Vue {
  @Prop({ type: Object, required: true })
  readonly result: CreditApplication.All.Result;

  created() {
    console.log(this.result);
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 250px;
}
</style>

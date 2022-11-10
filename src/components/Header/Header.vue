<template>
  <v-app-bar app class="header">
    <div class="d-flex align-center">
      <h1 class="text">Smart<span class="title-second">Credit</span></h1>
    </div>

    <v-spacer></v-spacer>

    <nav>
      <span v-for="item in navigation" :key="item.name" class="ml-6">
        <router-link :to="{ name: item.route }" class="text">
          {{ item.name }}
        </router-link>
      </span>
    </nav>
  </v-app-bar>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { navigation } from '@/constants/navigation';

@Component
export default class Header extends Vue {
  navigation = navigation;
}
</script>

<style scoped lang="scss">
@import '../../assets/colors.scss';

.text {
  color: #fff;
}

.title-second {
  color: $color-primary
}

.header {
  background-color: $color-tertiary !important;
}
</style>

<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <h1>SmartCredit.</h1>
    </div>

    <v-spacer></v-spacer>

    <nav class="nav">
      <span v-for="item in navigation" :key="item.name" class="ml-6">
        <router-link :to="{ name: item.route }">{{ item.name }}</router-link>
      </span>
    </nav>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
      color="error"
    >
      <span class="mr-2">Выйти</span>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
  <!--  <v-app-bar color="deep-purple accent-4" dark>-->
  <!--    <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

  <!--    <v-toolbar-title>Page title</v-toolbar-title>-->

  <!--    <v-spacer></v-spacer>-->

  <!--    <v-btn icon>-->
  <!--      <v-icon>mdi-heart</v-icon>-->
  <!--    </v-btn>-->

  <!--    <v-btn icon>-->
  <!--      <v-icon>mdi-magnify</v-icon>-->
  <!--    </v-btn>-->

  <!--    <v-menu left bottom>-->
  <!--      <template v-slot:activator="{ on, attrs }">-->
  <!--        <v-btn icon v-bind="attrs" v-on="on">-->
  <!--          <v-icon>mdi-dots-vertical</v-icon>-->
  <!--        </v-btn>-->
  <!--      </template>-->

  <!--      <v-list>-->
  <!--        <v-list-item v-for="n in 5" :key="n" @click="() => {}">-->
  <!--          <v-list-item-title>Option {{ n }}</v-list-item-title>-->
  <!--        </v-list-item>-->
  <!--      </v-list>-->
  <!--    </v-menu>-->
  <!--  </v-app-bar>-->
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
.logo-name {
  color: #fff;
}

.nav {
  margin-right: 40px;
}
</style>

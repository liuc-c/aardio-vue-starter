<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-black:86 text-white">
    <Header class="bg-black:40" />
    <Menu class="select-none bg-black:88" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { isShowMenu, useMenu } from '@/composables/menu'

const { miniState, menu, currActive } = useMenu()
</script>

<template>
  <q-drawer
    v-model="isShowMenu"
    show-if-above
    :mini="miniState"
    side="left"
    :width="200"
    :breakpoint="800"
    @mouseover="miniState = false" @mouseout="miniState = true"
  >
    <q-list padding>
      <q-item
        v-for="(item, key) in menu"
        :key v-ripple style="-webkit-user-drag: none;" active-class="bg-primary text-white" clickable
        :active="item.title === currActive"
        :to="item.to"
        @click="currActive = item.title"
      >
        <q-item-section avatar>
          <q-icon :class="item.icon" />
        </q-item-section>
        <q-item-section>
          {{ item.title }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<style scoped>

</style>

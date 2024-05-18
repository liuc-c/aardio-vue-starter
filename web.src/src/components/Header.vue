<script setup lang="ts">
import IconBtn from '@/components/IconBtn.vue'
import { isShowMenu } from '@/composables/menu'
import { useWindowOperation } from '@/composables/aardio'

const { closeWindow, hitCaption, minWindow, setTopmost, isTopmost } = useWindowOperation()
</script>

<template>
  <q-header>
    <q-toolbar>
      <IconBtn flat dense icon="i-carbon-menu" color="white" @click="isShowMenu = !isShowMenu" />
      <q-toolbar-title select-none @mousedown="hitCaption">
        App Title
      </q-toolbar-title>
      <div flex="~ gap-2">
        <IconBtn flat dense icon="i-carbon-pin" color="white" :class="{ 'bg-accent': isTopmost }" @click="setTopmost" />
        <q-btn flat dense label="__" w-32px @click="minWindow" />
        <IconBtn flat dense icon="i-carbon-close" color="red" hover="bg-red" @click="closeWindow" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped>

</style>

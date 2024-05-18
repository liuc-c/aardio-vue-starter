<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  tooltip: { type: String, default: '' },
  tooltipPosition: {
    type: String,
    validator: (value: string) => ['bottom', 'top', 'right', 'left'].includes(value),
    default: 'bottom',
  },
  icon: { type: String, required: true },
  color: { type: String, default: 'teal' },
})
const tooltipPositions = {
  left: { anchor: 'center left', self: 'center right' },
  right: { anchor: 'center left', self: 'center left' },
  top: { anchor: 'top middle', self: 'bottom middle' },
  bottom: { anchor: 'bottom middle', self: 'top middle' },
}
type tooltipPositionType = keyof typeof tooltipPositions
const anchor = computed(() => tooltipPositions[props.tooltipPosition as tooltipPositionType].anchor as 'center left' | 'top middle' | 'bottom middle')
const self = computed(() => tooltipPositions[props.tooltipPosition as tooltipPositionType].self as 'center right' | 'center left' | 'top middle' | 'bottom middle')
</script>

<template>
  <q-btn :color="color">
    <slot />
    <q-icon :class="icon" h-24px w-24px />
    <q-tooltip v-if="tooltip" :class="`bg-${color}`" :anchor="anchor" :self="self">
      {{ tooltip }}
    </q-tooltip>
  </q-btn>
</template>

<style scoped>

</style>

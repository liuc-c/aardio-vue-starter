import { ref } from 'vue'

export const isShowMenu = ref(true)

const menu = ref([
  {
    title: '欢迎',
    icon: 'i-carbon-pin',
    to: '/',
  },
  {
    title: '示例1',
    icon: 'i-carbon-pin',
    to: '/1',
  },
  {
    title: '示例2',
    icon: 'i-carbon-pin',
    to: '/2',
  },
])

export function useMenu() {
  const currActive = ref(menu.value[0].title)
  const miniState = ref(true)
  return { miniState, menu, currActive }
}

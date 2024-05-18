import { ref } from 'vue'

/**
 * 窗口操作
 */
export function useWindowOperation() {
  // 关闭窗口
  function closeWindow() {
    aardio.close()
  }
  // 拖动窗口
  function hitCaption() {
    aardio.hitCaption()
  }
  // 最小化窗口
  function minWindow() {
    aardio.hitMin()
  }
  // 窗口是否置顶
  const isTopmost = ref(false)
  // 窗口置顶操作
  function setTopmost() {
    isTopmost.value = !isTopmost.value
    aardio.setTopmost(isTopmost.value)
  }
  return { closeWindow, hitCaption, minWindow, setTopmost, isTopmost }
}

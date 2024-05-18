interface aardioExternal {
  /** 这是一个 aardio  函数 */
  close: () => void
  hitMin: () => void
  hitCaption: () => void
  setTopmost: (isTopmost: boolean) => void
}

declare let aardio: aardioExternal

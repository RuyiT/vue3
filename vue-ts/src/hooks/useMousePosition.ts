import { ref, onMounted, onUnmounted } from 'vue'
function useMousePositon () {
  const x = ref(0)
  const y = ref(0)
  const upadateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', upadateMouse)
  })
  onUnmounted(() => {
    document.removeEventListener('click', upadateMouse)
  })
  return { x, y }
}
export default useMousePositon

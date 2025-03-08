import { ref, onMounted, onUnmounted } from "vue";

export const useMousePosition = () => {
  const x = ref(0);
  const y = ref(0);

  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", updateMouse);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", updateMouse);
  });

  return { x, y };
};

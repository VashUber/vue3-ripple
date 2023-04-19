import { Directive } from "vue";
import "./style.scss";

type RippleBindings = {
  color?: string;
};

export const ripple: Directive<HTMLElement, RippleBindings> = {
  mounted(el, bindings) {
    const color = bindings.value?.color;

    el.style.overflow = "hidden";
    el.style.position = "relative";

    el.addEventListener("click", (e) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.x;
      const y = e.clientY - rect.y;
      const rippleElement = document.createElement("span");

      rippleElement.classList.add("ripple");
      rippleElement.style.left = `${x}px`;
      rippleElement.style.top = `${y}px`;
      rippleElement.style.background = color || "rgba(226, 237, 255, 0.5)";

      el.insertAdjacentElement("afterbegin", rippleElement);

      setTimeout(() => {
        rippleElement.remove();
      }, 600);
    });
  },
};

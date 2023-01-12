import { component$, Slot, useClientEffect$, useSignal } from "@builder.io/qwik";
import { animate } from "motion";

export interface Animate {
  animation?: 'fadeIn' | 'fadeOut';
  duration?: number;
}
export const Animate = component$((props: Animate) => {
  const { duration = 0.5 } = props;
  const ref = useSignal<Element>();
  useClientEffect$( () => {
   if (ref.value) {
     animate(
       "el.value.className",
       { rotate: 10 },
       {
         duration: duration,
         easing: "ease-in-out",
         repeat: Infinity,
         direction: "alternate",
       }
     );
   }
  });
  return <span ref={ref}><Slot /></span>;
});
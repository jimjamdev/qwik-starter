import { component$, Slot, useClientEffect$, Fragment, useSignal } from "@builder.io/qwik";
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
     console.log('***animateElement', ref.value?.children[0]?.tagName);
     animate(
       `${ref.value?.children[0]?.tagName}`,
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
  return <Fragment ref={ref}><Slot /></Fragment>;
});

import {
  component$,
  Slot, useClientEffect$,
  useSignal, useStore,
} from '@builder.io/qwik';
// import styles from 'swiper/css/bundle?inline';

export const Carousel = component$(() => {
  const store = useStore({
    element: undefined,
  });
  // useStylesScoped$(styles);
  const swiperRef = useSignal<any>();
  useClientEffect$(() => {
    if (swiperRef.current) {
      store.element = swiperRef.current;
    }
  });
  // const swiper = new Swiper(swiperRef, {});
  console.log('**Slot', Slot, 'element', store?.element);
  return (
    <div ref={swiperRef} class="swiper">
      <div class="swiper-wrapper">
        <Slot />
        {/* {slides.map((slide) => (
          <div class="swiper-slide">{slide}</div>
        ))} */}
      </div>
    </div>
  );
});

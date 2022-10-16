import Swiper, { Navigation, Pagination } from 'swiper';
import {
  component$, useClientEffect$, useSignal, useStylesScoped$,
} from '@builder.io/qwik';
import styles from 'swiper/css/bundle?inline';

export const Carousel = component$(({ slides, options }) => {
  useStylesScoped$(styles);
  const swiperRef = useSignal<HTMLDivElement>();
  // init Swiper:
  useClientEffect$(() => {
    const swiper = new Swiper('.swiper', {
      options,
      modules: [Navigation, Pagination],
    });
    swiper.destroy();
  });
  return (
    <div ref={swiperRef} class="swiper">
      <div class="swiper-wrapper">
        {slides.map((slide) => (
          <div class="swiper-slide">{slide}</div>
        ))}
      </div>
    </div>
  );
});

import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { getLocale } from "~/utils/routing/getLocale";

export default component$(() => {
  const locale = getLocale();
  console.log('layoutlocale', locale);
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  )
}) ;

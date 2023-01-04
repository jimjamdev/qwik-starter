import { component$, Resource, useClientEffect$ } from "@builder.io/qwik";
import { animate } from "motion";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { Button } from "~/ui/components/button";
import { fetchUsers, fetchUsers2, Users, Users2 } from "~/api";
import { useLocale } from "~/ui/providers";
export const onGet: RequestHandler<Users> = async () => fetchUsers();
export const onGet2: RequestHandler<Users2> = async () => fetchUsers2();

export default component$(() => {
  const { lang } = useLocale();
  const users = useEndpoint<Users>();
  const users2 = useEndpoint<Users2>();
  useClientEffect$(async () => {
    animate(
      "button.btn-spin",
      { rotate: 90 },
      {
        duration: 0.5,
        easing: "ease-in-out",
        repeat: Infinity,
        direction: "alternate"
      }
    )
  });
  return (
    <>
      <div>
        locale route {lang} <Button class="btn-spin">Test</Button>
      </div>
      <h1>Users Data...</h1>
      <Resource
        value={users}
        onPending={() => <div style={{ background: 'orange', padding: '10px' }}>loading...</div>}
        onRejected={() => <div style={{ background: 'tomato', padding: '10px' }}>error</div>}
        onResolved={(users) => (
          <>
            <pre>{JSON.stringify(users?.drinks[0].strDrink, null, 2)}</pre>
          </>
        )}
      />
      <h2>Users2</h2>
      <Resource
        value={users2}
        onPending={() => <div style={{ background: 'orange', padding: '10px' }}>loading...</div>}
        onRejected={() => <div style={{ background: 'tomato', padding: '10px' }}>error</div>}
        onResolved={(users2) => (
          <>
            <pre>{JSON.stringify(users2, null, 2)}</pre>
          </>
        )}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: `Casino App`,
  meta: [
    {
      name: "description",
      content: "Casino App",
    }
  ],
};

import { component$, Resource, useClientEffect$ } from "@builder.io/qwik";
import { animate } from "motion";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { Button } from "~/ui/components/button";
import { fetchUsers, Users } from "~/api";
import { useLocale } from "~/ui/providers";
export const onGet: RequestHandler<Users> = async () => fetchUsers();

export default component$(() => {
  const { lang } = useLocale();
  const users = useEndpoint<Users>();
  useClientEffect$(async () => {
    animate(
      "button",
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
        locale route {lang} <Button>Test</Button>
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

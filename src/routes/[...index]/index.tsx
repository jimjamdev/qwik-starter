import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { useLocale } from "~/context/locale";
import { Button } from "~/ui/components/button";
import { fetchUsers, Users } from "~/api";
export const onGet: RequestHandler<Users> = async () => fetchUsers();

export default component$(() => {
  const { lang } = useLocale();
  const users = useEndpoint<Users>();
  return (
    <>
      <div>
        locale route {lang} <Button>Test</Button>
      </div>
      <h3>Users Data...</h3>
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
  title: "Casino App",
};

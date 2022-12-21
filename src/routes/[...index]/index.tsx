import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { useLocale } from "~/context/locale";
import { Button } from "~/ui/components/button";
import { fetchUsers, Users } from "~/api/users/fetchUsers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onGet: RequestHandler<Users> = async ({ params }) => fetchUsers();

export default component$(() => {
  const { lang } = useLocale();
  const users = useEndpoint<Users>();
  return (
    <>
      <div>
        locale route {lang} <Button>Test</Button>
      </div>
      <h3>Users Data</h3>
      <Resource
        value={users}
        onPending={() => <div>loading...</div>}
        onRejected={() => <div>error</div>}
        onResolved={(users) => <><pre>{JSON.stringify(users, null, 2)}</pre></>}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Casino App",
};

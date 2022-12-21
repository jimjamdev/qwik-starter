import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, useEndpoint } from "@builder.io/qwik-city";
import { useLocale } from "~/context/locale";
import { Button } from "~/ui/components/button";
import { Users } from "~/data/users/fetchUsers";

export default component$(() => {
  const { lang } = useLocale();
  const users = useEndpoint<Users>();
  return (
    <>
      <div>
        locale route {lang} <Button>Test</Button>
      </div>
      <Resource
        value={users}
        onResolved={(users) => <>{JSON.stringify(users, null, 2)}</>}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Casino App",
};

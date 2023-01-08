import { component$ } from "@builder.io/qwik";
// import { animate } from "motion";
import {
  DocumentHead, loader$,
} from "@builder.io/qwik-city";
import { Button } from "~/ui/components/button";
import { fetchUsers, Users, IP } from "~/api";
import { useLocale } from "~/ui/providers";
import { Box } from "~/ui/components/box";

export interface HomeProps {
  users: Users;
  ip: IP;
}
/*export const onGet: RequestHandler<HomeProps> = async () => {
  return {
    users: await fetchUsers(),
    ip: await fetchIP(),
  };
};*/

export const getUser = loader$(async () => fetchUsers());

export default component$(() => {
  const { lang } = useLocale();
  const users = getUser.use();
  /*useClientEffect$(async () => {
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
  });*/
  return (
    <>
      <div>
        locale route {lang} <Button class="btn-spin">Test</Button>
        <Box as="button" color="$brandLight" bg={{mobile: '$brand', tablet: '$brandDark'}} margin="$large">Box</Box>
      </div>
      <h1>Users Data...</h1>
      <pre>{JSON.stringify(users.value, null, 2)}</pre>
      {/*<Resource
        value={users}
        onPending={() => <div style={{ background: 'orange', padding: '10px' }}>loading...</div>}
        onRejected={() => <div style={{ background: 'tomato', padding: '10px' }}>error</div>}
        onResolved={(users) => (
          <>
            <pre>{JSON.stringify(users, null, 2)}</pre>
          </>
        )}
      />*/}
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

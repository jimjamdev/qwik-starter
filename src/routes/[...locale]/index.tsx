import { component$, Resource, useClientEffect$, useSignal } from "@builder.io/qwik";
import { DocumentHead, loader$ } from "@builder.io/qwik-city";
import { Button } from "~/ui/components/button";
import { fetchUsers } from "~/api";
import { useLocale } from "~/ui/providers";
import { Box } from "~/ui/components/box";
import { usePortal } from "~/ui/providers/portal";
import { Animate } from "~/ui/components/animate";

export const getUser = loader$(async ({ query }) =>
  fetchUsers({ page: query.get("page") || "1" })
);

export default component$(() => {
  const { lang } = useLocale();
  const { openPortal, closeAllPortals } = usePortal();
  const buttonRef = useSignal<Element>();
  const users = getUser.use();
  useClientEffect$(async () => {
    if (buttonRef.value) {
      console.log("***buttonRef--", buttonRef.value);
    }
  });
  return (
    <>
      <Box as="section">
        locale route {lang}{" "}
        <Animate>
          <Button>Test Animation</Button>
        </Animate>
        <Button
          class="btn-spin"
          onClick$={() => openPortal("test1", { some: "props" })}
        >
          Test Portal
        </Button>
        <Box
          ref={buttonRef}
          as="button"
          color="$brandLight"
          bg={{ mobile: "$brand", tablet: "$brandDark" }}
          margin="$large"
          onClick$={() => openPortal("test2", { date: new Date() })}
        >
          Portal 2
        </Box>
        <Box
          as="button"
          margin="$large"
          color="$brandLight"
          bg="$brandDark"
          onClick$={() => openPortal("test3" as any, { some: "props" })}
        >
          Portal that doesn't exist
        </Box>
        <Button onClick$={() => closeAllPortals()}>Close All</Button>
      </Box>
      <h1>Test Data...</h1>
      <pre>{JSON.stringify(users?.value?.data[0], null, 2)}</pre>
      <Resource
        value={users}
        onPending={() => <div style={{ background: 'orange', padding: '10px' }}>loading...</div>}
        onRejected={() => <div style={{ background: 'tomato', padding: '10px' }}>error</div>}
        onResolved={(users) => (
          <>
            <pre>{JSON.stringify(users?.data[1], null, 2)}</pre>
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
    },
  ],
};
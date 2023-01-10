import {
  component$,
  useContextProvider,
  createContext,
  Slot,
  useContext,
  useStore,
  $
} from "@builder.io/qwik";

export interface IPortal {
  [key: string]: any;
}

export interface IPortalContext {
  portals: string[];
  openPortal?: (portalKey: string) => void;
  openPortal$?: (portalKey: string) => void;
}

export const PortalContext = createContext("portal");

export const PortalProvider = component$(() => {
  const state = useStore(PortalContext);

  const openPortal$ = $((portalKey: string) => {
    console.log("***openPortal", state, portalKey);
    // state.portals.push(portalKey);
  });

  const portalState = useStore<IPortalContext>({
    portals: ['testPortalKey'],
    openPortal: openPortal$
  }, {
    recursive: true,
  });
  useContextProvider(PortalContext, portalState);
  return <Slot />;
});

export const usePortal = () => useContext(PortalContext);

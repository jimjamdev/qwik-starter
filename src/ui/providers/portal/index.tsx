import {
  component$,
  useContextProvider,
  createContext,
  Slot,
  useContext,
  useStore,
  $
} from "@builder.io/qwik";

export interface IPortalContext {
  portals: Array<string>;
}

export const PortalContext = createContext("portal");

export const PortalProvider = component$(() => {

  const portalState = useStore<IPortalContext>({
    portals: ['testPortalKey'],
  });

  useContextProvider(PortalContext, portalState);
  return <Slot />;
});

export const usePortal = () => {
  const state = useContext(PortalContext) as IPortalContext;
  return {
    portals: state.portals,
    openPortal$: $((portalKey: string) => {
      console.log("***usePortal-State", state.portals);
      console.log("***usePortal-openPortal", portalKey);
      state.portals = [...state.portals, portalKey];
    }),
  }
};


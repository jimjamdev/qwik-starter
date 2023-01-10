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
    portals: ['initialValue'],
  });

  useContextProvider(PortalContext, portalState);
  return <Slot />;
});

export const usePortal = () => {
  const state = useContext(PortalContext) as IPortalContext;
  const portals = state.portals;
  return {
    portals,
    openPortal: $((portalKey: string) => {
      console.log("***usePortal-State", portals);
      console.log("***usePortal-openPortal", portalKey);
      if(!portals.includes(portalKey)) {
        state.portals = [...state.portals, portalKey];
      }
    }),
  }
};


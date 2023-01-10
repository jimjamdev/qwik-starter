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

}

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
  return {
    portals: state.portals,
    openPortal: $((portalKey: string) => {
      if(!state.portals.includes(portalKey)) {
        state.portals = [...state.portals, portalKey];
      }
    }),
    closePortal: $((portalKey: string) => {
      state.portals = state.portals.filter((key) => key !== portalKey);
    }),
    closeAllPortals: $(() => {
      state.portals = [];
    }),
  }
};


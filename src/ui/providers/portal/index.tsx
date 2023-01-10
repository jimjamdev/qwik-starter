import {
  component$,
  useContextProvider,
  createContext,
  Slot, useContext, useStore
} from "@builder.io/qwik";

export interface IPortal {
  portalKey?: string;
}

export interface IPortalContext {
  value?: Array<IPortal>;
}

export const PortalContext = createContext('portal');

export const PortalProvider = component$((props: any) => {
  // const { portalsList = {} } = props;
  console.log('***portalProps', props);
  const activePortals = useStore<IPortalContext>({ value: [] });

  /*const openPortal = ((portalKey: string) => {
    activePortals.value = [...activePortals.value, portalsList[portalKey]];
  });*/

  useContextProvider(PortalContext, activePortals);
  return <Slot />;
});

export const usePortal = () => useContext(PortalContext) as IPortalContext;

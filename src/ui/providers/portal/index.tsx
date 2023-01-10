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

export const PortalProvider = component$((props: IPortal) => {
  const activePortal = useStore<IPortalContext>({ value: [props] });
  useContextProvider(PortalContext, activePortal);
  return <Slot />;
});

export const usePortal = () => useContext(PortalContext) as IPortalContext;

import {
  component$,
  useContextProvider,
  createContext,
  Slot,
  useContext,
  useStore,
} from "@builder.io/qwik";

export interface IPortal {
  portalKey?: string;
}

export interface IPortalContext {
  value?: Array<{ activePortals: any }>;
  openPortal?: (portal: IPortal) => void;
}

export const PortalContext = createContext("portal");

export const PortalProvider = component$((props: any) => {
  const { portalsList = {} } = props;
  console.log("***portalProps", props);
  const activePortals = useStore<IPortalContext>({ value: [],  });

  const openPortal$ = ((portalKey: string) => {
    console.log("***openPortal", portalKey, 'from', portalsList);
  });

  useContextProvider(PortalContext, { activePortals, openPortal$ });
  return <Slot />;
});

export const usePortal = () => useContext(PortalContext) as IPortalContext;

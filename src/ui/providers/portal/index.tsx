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
  value?: {
    activePortals?: IPortal;
  };
  openPortal$?: (portal: IPortal) => void;
}

export const PortalContext = createContext("portal");

export const PortalProvider = component$((props: any) => {
  // const { portalsList = {} } = props;
  console.log("***portalProps", props);

  /*const openPortal$ = (portalKey: IPortal) => {
    console.log("***openPortal", portalKey);
  };*/

  const store = useStore<IPortalContext>({
    value: { activePortals: ["somePortal"] },
    openPortal$: $(() => console.log("openPortal$")),
  }, {
    recursive: true
  });
  useContextProvider(PortalContext, store);
  return <Slot />;
});

export const usePortal = () => useContext(PortalContext) as IPortalContext;

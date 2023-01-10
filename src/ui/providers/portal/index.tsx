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
  openPortal?: (portalKey: string) => void;
}

export const PortalContext = createContext("portal");

export const PortalProvider = component$((props: any) => {
  // const { portalsList = {} } = props;
  console.log("***portalProps", props);

  /*const openPortal$ = (portalKey: IPortal) => {
    console.log("***openPortal", portalKey);
  };*/

  const state = useStore<IPortalContext>({
    value: { activePortals: ["somePortal"] },
    openPortal: $((portalKey: string) => console.log("openPortal$", portalKey)),
  }, {
    recursive: true,
  });
  useContextProvider(PortalContext, state);
  return <Slot />;
});

export const usePortal = () => useContext(PortalContext) as IPortalContext;

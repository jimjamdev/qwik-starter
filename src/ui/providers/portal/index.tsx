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

export const PortalProvider = component$((props: any) => {
  // const { portalsList = {} } = props;
  console.log("***portalProps", props);

  const portals = useStore<IPortalContext>({
    portals: ['testPortalKey'],
    openPortal: $((portalKey: string) => {
      return console.log("***openPortal", portalKey);
    }),
  }, {
    recursive: true,
  });
  useContextProvider(PortalContext, portals);
  return <Slot />;
});

export const usePortal = () => useContext(PortalContext) as IPortalContext;

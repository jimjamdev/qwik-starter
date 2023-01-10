import {
  component$,
  useContextProvider,
  createContext,
  Slot,
  useContext,
  useStore,
} from "@builder.io/qwik";

export interface IPortal {
  [key: string]: any;
}

export interface IPortalContext {
  value?: {
    activePortals?: IPortal;
    openPortal?: (portal: IPortal) => void;
  };
}

export const PortalContext = createContext("portal");

export const PortalProvider = component$((props: any) => {
  const defaultState = {
    value: {
      activePortals: ['somePortal'],
    }
  }
  // const { portalsList = {} } = props;
  console.log("***portalProps", props);
  const state = useStore<IPortalContext>(defaultState);

  /*const openPortal$ = ((portalKey: string) => {
    console.log("***openPortal", portalKey, 'from', portalsList);
  });
*/
  useContextProvider(PortalContext, state);
  return <Slot />;
});

export const usePortal = () => useContext(PortalContext) as IPortalContext;

import { component$, createContextId, Slot, useContext, useContextProvider, useStore } from "@builder.io/qwik";

export interface Auth {
  user?: any;
  isLoggedIn?: boolean;
}

export const AuthContext = createContextId('auth');

export const AuthProvider = component$(() => {
  const auth = useStore<Auth>({ isLoggedIn: false, user: undefined });
  useContextProvider(AuthContext, auth);
  return <Slot />;
});

export const useAuth = () => useContext(AuthContext) as Auth;

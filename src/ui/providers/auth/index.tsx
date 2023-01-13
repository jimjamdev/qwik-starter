import { component$, createContext, Slot, useContext, useContextProvider, useStore } from "@builder.io/qwik";

export interface Auth {
  user?: any;
  isLoggedIn?: boolean;
}

export const AuthContext = createContext('auth');

export const AuthProvider = component$(() => {
  const auth = useStore<Auth>({ isLoggedIn: false, user: undefined });
  useContextProvider(AuthContext, auth);
  return <Slot />;
});

export const useAuth = () => useContext(AuthContext) as Auth;

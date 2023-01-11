import { LoginPortal } from "~/components/portals/login";

export const portalsList = {
  login: LoginPortal,
  test1: LoginPortal,
  test2: LoginPortal,
};

export type PortalsList = keyof typeof portalsList[keyof typeof portalsList];

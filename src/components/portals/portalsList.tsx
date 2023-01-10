import { LoginPortal } from "~/components/portals/login";

export const portals = {
  login: LoginPortal
}

export const portalsList = Object.keys(portals).map((key) => key);

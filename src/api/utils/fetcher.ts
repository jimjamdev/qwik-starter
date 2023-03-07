import { Params } from "~/api";

export const fetcher = async (
  url: string,
  params?: Params,
  options?: RequestInit
): Promise<any> => {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json ", // set the header bearer
      "Bearer": "Bearer  1234567890", // set the header bearer
    },
  }); // include try cache
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

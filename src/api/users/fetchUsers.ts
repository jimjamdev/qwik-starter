import type { RequestHandler } from '@builder.io/qwik-city';

export interface Users {
  name: string;
  height: number;
  gender: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchUsers = async () => {
  const req = await fetch('https://swapi.dev/api/people/1/');
  return req.json()
};

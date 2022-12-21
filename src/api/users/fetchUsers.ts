import type { RequestHandler } from '@builder.io/qwik-city';

export interface Users {
  name: string;
  height: number;
  gender: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onGet: RequestHandler<Users> = async ({ params }) => {
  const req = await fetch('https://swapi.dev/api/people/1/');
  return req.json()
};

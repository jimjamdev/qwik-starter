export interface User {
  breed: string;
}

export interface Users {
  data: User[];
}

export interface IP {
  ip: string;
}

export interface Params {
  limit?: number | string;
  page?: number | string;
}

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
//Test fetch
export const fetchUsers = async (params: Params): Promise<Users> => {
  const { limit = 5, page = 1 } = params || {};
  return fetcher(`https://catfact.ninja/breeds?limit=${limit}&page=${page}`);
};

export const fetchIP = async (): Promise<IP> => {
  const req = await fetch("https://api.ipify.org/?format=json");
  return req.json();
};



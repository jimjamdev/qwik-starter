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
//Test fetch
export const fetchUsers = async (params: Params): Promise<Users> => {
  console.log(params);
  const { limit = 5, page = 1 } = params || {};
  const req = await fetch(`https://catfact.ninja/breeds?limit=${limit}&page=${page}`);
  return req.json()
};

export const fetchIP = async (): Promise<IP> => {
  const req = await fetch('https://api.ipify.org/?format=json');
  return req.json()
};

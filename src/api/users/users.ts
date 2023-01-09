export interface User {
  strDrink: string;
}

export interface Users {
  drinks: User[];
}

export interface IP {
  ip: string;
}

export interface Params {
  limit?: number;
  page?: number;
}
//Test fetch
export const fetchUsers = async (params: Params): Promise<Users> => {
  const { limit = 5, page = 1 } = params || {};
  const req = await fetch(`https://catfact.ninja/breeds?limit=${limit}&page=${page}`);
  return req.json()
};

export const fetchIP = async (): Promise<IP> => {
  const req = await fetch('https://api.ipify.org/?format=json');
  return req.json()
};

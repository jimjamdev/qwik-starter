export interface User {
  strDrink: string;
}

export interface Users {
  drinks: User[];
}

export interface IP {
  ip: string;
}

export const fetchUsers = async (): Promise<Users> => {
  const req = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  return req.json()
};

export const fetchIP = async (): Promise<IP> => {
  const req = await fetch('https://api.ipify.org/?format=json');
  return req.json()
};

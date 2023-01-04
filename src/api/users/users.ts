export interface User {
  strDrink: string;
}

export interface Users {
  drinks: User[];
}

export interface Users2 {
  ip: string;
}

export const fetchUsers = async () => {
  const req = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  return req.json()
};

export const fetchUsers2 = async () => {
  const req = await fetch('https://api.ipify.org/?format=json');
  return req.json()
};

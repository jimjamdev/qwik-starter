export interface User {
  strDrink: string;
}

export interface Users {
  drinks: User[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchUsers = async () => {
  const req = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  return req.json()
};

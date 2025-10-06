import { useEffect, useState } from "react";

interface IUser {
    name: string
}

export function UserProfile() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);
  
  if (!user) return <div>Загрузка...</div>;
  return <div>Привет, {user.name}</div>;
}
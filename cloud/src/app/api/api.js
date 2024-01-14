// pages/api/users.ts

import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  nome: string;
  sobrenome: string;
  email: string;
}

const users: User[] = [
  {
    nome: "Fulano",
    sobrenome: "Silva",
    email: "fulano@example.com",
  },
  {
    nome: "Beltrano",
    sobrenome: "Pereira",
    email: "beltrano@example.com",
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  res.status(200).json(users);
}

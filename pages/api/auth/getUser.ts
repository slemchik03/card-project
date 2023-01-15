
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

// Test user for example... In production we can fetch user from real db.
const user = {
  id: "2182",
  name: "slemchik_02",
  email: "vadimmaster227@gmail.com",
}

export interface IUserResponse {
  ok: boolean,
  user: Session["user"]
}

export default async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const { login, password } = req.query;

  // Simulate compare users logic...
  if (login === user.name && password === "123") {
    return res.status(200).json({ ok: true, user })
  }

  return res.status(404).json({ ok: false })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "./../../lib/mongodb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });

  const client = await clientPromise;
  const db = client.db("twihistory-nextjs");
  await db.collection("authTwitter").insertOne({
    name: "John Doe",
  });
}

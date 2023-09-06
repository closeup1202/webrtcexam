import Link from "next/link";
import { connectDB } from "@/utils/database/mongo";
import { ObjectId } from "mongodb";

export default async function JoinBtn(){
  const client = await connectDB;
  const db = client.db("videoconference")
  let result = await db.collection('user').findOne({_id: new ObjectId('64f88027176b559071132cc2')})

  return(
    <Link href={'join/' + result.team} className="border border-red-500 p-3 rounded-md mx-5 hover:bg-red-500 hover:text-lime-200">! Join My Space</Link>
  )
}
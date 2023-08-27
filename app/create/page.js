import CreateBtn from "../components/creatRoomBtn";
import Link from "next/link";

export default function Create(){
  return(
    <div className="text-center">
      <p className="mt-40 text-6xl font-bold">My Team</p>
      <div className="mt-10 text-left w-96 mx-auto">
        <label>Space name</label><br/>
        <input type="text" className="border-2 border-black p-2 rounded-lg w-full" placeholder="your space name"/><br/>
      </div>
      <div className="mt-3 text-left w-96 mx-auto">
        <label>Security Option</label><br/>
        <select className="border-2 border-black p-2 rounded-lg w-full">
          <option className="">Anyone with the office URL can enter</option>
          <option>Everyone needs to enter password</option>
        </select>
      </div>
      <CreateBtn/>
      <div className="mt-2 w-96 mx-auto">
        <Link href='/' className="border-2 border-black rounded-xl p-4 hover:bg-red-400 font-phudu inline-block w-full font-extrabold">Back</Link>
      </div>
    </div>
  )
}
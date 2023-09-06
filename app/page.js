import Link from "next/link"
import JoinBtn from "@/app/components/joinbtn"

export default function Home() {
  return (
    <div>
      <nav className="mt-80 text-center font-extrabold font-phudu text-3xl text-red-500">
        <JoinBtn/>
        <Link href={'create'} className="border border-red-500 p-3 rounded-md hover:bg-red-500 hover:text-lime-200"> + Create Space</Link>
      </nav>
    </div>
  )
}

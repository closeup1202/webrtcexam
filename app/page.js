import Link from "next/link"

export default function Home() {
  return (
    <div>
      <nav className="mt-96 text-center font-extrabold font-phudu text-3xl text-red-500">
        <Link href={'join/' + '123'} className="border border-red-500 p-3 rounded-md mx-5 hover:bg-red-500 hover:text-lime-200">Join My Space</Link>
        <Link href={'create'} className="border border-red-500 p-3 rounded-md hover:bg-red-500 hover:text-lime-200"> + Create Space</Link>
      </nav>
    </div>
  )
}

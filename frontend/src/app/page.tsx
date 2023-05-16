import Link from "next/link"

type Props = {}

export default function Home({}: Props) {
  return <div>page
    <button><Link href="/auth/login">login</Link></button>
  </div>
}

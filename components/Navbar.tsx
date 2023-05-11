import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image src="/condens.png" width={32} height={32} alt="Condens logo" />
          <span className="ms-3">Condens</span>
        </Link>
      </div>
    </div>
  )
}

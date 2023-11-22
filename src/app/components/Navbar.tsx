import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-amber-200 dark:bg-gray-950 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-amber-950/80 hover:text-amber-950 no-underline dark:text-amber-100/80 dark:hover:text-amber-100 "
          >
            GW LAWYERS LTD
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-4xl lg:text-5xl">
          <Link href="/about">About Us</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

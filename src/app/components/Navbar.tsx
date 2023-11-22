import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-amber-200 dark:bg-yellow-950 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-amber-950/80 hover:text-amber-950 no-underline dark:text-amber-100/80 dark:hover:text-amber-100 "
          >
            GW LAWYERS LTD
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-6 text-3xl lg:text-2xl">
          <Link
            href="/about"
            className="text-amber-950/80 hover:text-amber-950 no-underline dark:text-amber-100/80 dark:hover:text-amber-100 "
          >
            About Us
          </Link>
          <Link
            href="/team"
            className="text-amber-950/80 hover:text-amber-950 no-underline dark:text-amber-100/80 dark:hover:text-amber-100 "
          >
            Our Team
          </Link>
          <Link
            href="/contact"
            className="text-amber-950/80 hover:text-amber-950 no-underline dark:text-amber-100/80 dark:hover:text-amber-100 "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

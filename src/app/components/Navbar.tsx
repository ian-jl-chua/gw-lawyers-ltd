import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-amber-100 dark:bg-yellow-950 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-4xl font-bold grid place-content-center mt-2 mb-8 sm:mb-0 sm:mt-0">
          <Link
            href="/"
            className="text-amber-950/80 hover:text-amber-950 no-underline dark:text-amber-100/80 dark:hover:text-amber-100 whitespace-nowrap "
          >
            GW LAWYERS LTD
          </Link>
        </h1>
        <div className="flex flex-row justify-between align-middle gap-6 text-2xl sm:text-center sm:justify-center sm:p-5 lg:text-2xl">
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

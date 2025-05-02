import Link from 'next/link'
import { EBGaramond } from '../fonts/font'

const navList = [
  {
    id: 1,
    navName: 'About Us',
    navRef: '/about',
  },
  {
    id: 2,
    navName: 'Our Team',
    navRef: '/team',
  },
  {
    id: 3,
    navName: 'Contact',
    navRef: '/contact',
  },
]

export default function Navbar() {
  return (
    <>
      <nav className="backdrop-blur-md bg-amber-100/80 dark:bg-yellow-950/80 p-4 sticky top-0 drop-shadow-xl z-[100] md:p-6">
        <div className="relative">
          <div className="prose prose-md mx-auto flex justify-between flex-col md:flex-row">
            <h1
              style={EBGaramond.style}
              className="text-4xl font-bold grid place-content-center mt-2 mb-8 sm:mt-0 md:mb-0 lg:text-5xl"
            >
              <Link
                href="/"
                className="text-amber-950/80 hover:text-amber-950 no-underline dark:text-amber-100/80 dark:hover:text-amber-100 whitespace-nowrap"
              >
                GW LAWYERS LTD
              </Link>
            </h1>
            <div className="flex flex-row justify-between align-middle gap-6 text-xl sm:text-center md:justify-center md:text-2xl md:mt-2">
              {navList.map((list) => (
                <Link className="nav-link" key={list.id} href={list.navRef}>
                  {list.navName}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Selector Tab */}
          <div className="absolute -bottom-[1rem] sm:-bottom-[1.5rem] -right-1 translate-y-full z-[100] w-fit bg-amber-200 dark:bg-amber-900 px-3 py-1 rounded-b-lg ">
            Language Selector
          </div>
        </div>
      </nav>
    </>
  )
}

import Link from 'next/link'
import { EBGaramond } from '../fonts/font'

export default function Footer() {
  const thisYear = new Date()
  return (
    <footer className="p-6 bg-amber-100/80 dark:bg-stone-900 md:p-8">
      <div className="block pb-10">
        <div>
          <Link style={EBGaramond.style} className="text-3xl font-bold text-amber-900 dark:text-amber-100" href="/">
            GW LAWYERS LTD
          </Link>
          <p>NZBN &#58; 9429031418959</p>
        </div>
        <div></div>
      </div>
      <p className="text-xs text-amber-900/50 dark:text-amber-100/50">
        &copy; {thisYear.getFullYear()} GW Lawyers Ltd. All rights reserved.
      </p>
    </footer>
  )
}

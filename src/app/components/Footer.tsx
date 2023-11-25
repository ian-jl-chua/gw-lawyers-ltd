import Link from 'next/link'

export default function Footer() {
  const thisYear = new Date()
  return (
    <footer className="p-4 bg-amber-100/80 dark:bg-stone-950">
      <div className="grid pb-4">
        <div>
          <Link className="font-bold text-amber-900 dark:text-amber-100" href="/">
            GW LAWYERS LTD
          </Link>
          <p>NZBN &#58; 9429031418959</p>
        </div>
        <div></div>
      </div>
      <p className="text-xs dark:text-amber-100/60">
        &copy; {thisYear.getFullYear()} GW Lawyers Ltd. All rights reserved.
      </p>
    </footer>
  )
}

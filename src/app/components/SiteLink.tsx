import Link from 'next/link'

interface Link {
  id: number
  linkName: string
  linkRef: string
}

interface SiteLinkProps {
  links: Link[]
}

export default function SiteLink({ links }: SiteLinkProps) {
  return (
    <ul className="px-4 py-4 text-center list-inside leading-10 sm:text-xl lg:px-8 lg:text-left lg:text-2xl">
      {links.map((link) => (
        <li key={link.id} className="sm:py-4">
          <Link
            href={link.linkRef}
            className="underline-offset-4 hover:text-amber-600 hover:underline hover:decoration-2 hover:underline-offset-8 "
            target="blank"
          >
            {link.linkName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

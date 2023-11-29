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
    <ul className="list-inside leading-9">
      {links.map((link) => (
        <li key={link.id} className="underline-offset-4 hover:text-amber-500 hover:underline hover:decoration-2 ">
          <Link href={link.linkRef} target="blank">
            {link.linkName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

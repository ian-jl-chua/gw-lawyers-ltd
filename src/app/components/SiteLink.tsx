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
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.linkRef} target="blank">
            {link.linkName}
          </a>
        </li>
      ))}
    </ul>
  )
}

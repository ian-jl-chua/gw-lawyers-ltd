import SiteLink from "./SiteLink";
import { EBGaramond } from "../fonts/font";

const links = [
  {
    id: 1,
    linkName: "Inland Revenue",
    linkRef: "https://www.ird.govt.nz",
  },
  {
    id: 2,
    linkName: "Immigration New Zealand",
    linkRef: "https://www.immigration.govt.nz",
  },
  {
    id: 3,
    linkName: "New Zealand Companies Register",
    linkRef: "https://www.companiesoffice.govt.nz",
  },
  {
    id: 4,
    linkName: "New Zealand Law Society",
    linkRef: "https://www.lawsociety.org.nz",
  },
  {
    id: 5,
    linkName: "New Zealand Legislation",
    linkRef: "https://www.legislation.govt.nz",
  },
];

export default function UsefulLinks() {
  return (
    <section className="section2">
      <h1 style={EBGaramond.style} className="section-title">
        Useful Links
      </h1>
      <div>
        <SiteLink links={links} />
      </div>
    </section>
  );
}

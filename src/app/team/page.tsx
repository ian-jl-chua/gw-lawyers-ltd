import Image from 'next/image'
import george from 'public/george-wang.jpg'
import { EBGaramond } from '../fonts/font'

export default function Team() {
  return (
    <section className="section">
      <h1 style={EBGaramond.style} className="section-title">
        Meet Our Team
      </h1>
      <div className="px-4 md:px-8 lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="flex flex-wrap justify-center pb-16 w-full px-16 sm:px-48 md:px-60 lg:px-0 lg:pb-8">
          <Image
            className="sm:h-[280px]"
            width={250}
            src={george}
            alt="Profile picture of George Wang"
            priority={true}
          />
          <div className="whitespace-nowrap">
            <h2 className="font-bold text-xl pt-4 text-center">
              Dongxing &#40;George&#41; Wang
            </h2>
            <p className="text-sm ">
              <b>MOBILE</b> <a href="tel:+64211591367">021 159 1367</a>
            </p>
            <p className="text-sm ">
              <b>EMAIL</b> <a href="#">george@gwlawyers.co.nz</a>
              {/* still need to fix the email link!!!! */}
            </p>
          </div>
        </div>
        <div className="leading-7 md:col-span-2">
          <div>
            <h2 className="font-bold text-2xl pb-2">About</h2>
            <p className="pb-4">
              George is the principal person of the firm. He was admitted as a
              barrister and solicitor of the High Court of New Zealand in 2007.
            </p>
            <p className="pb-4">
              George has worked in two respected New Zealand law firms for three
              and half years before he set up this firm. He is always indebted
              to his former employers for the knowledge and experience he has
              got from them. He also has seven years of work experience in
              Commerce in China before he emigrated to New Zealand in 2003.
            </p>
            <p className="pb-8">
              George is experienced in Property, Commercial, Contract,
              Matrimonial Property, Employment and Immigration Law. George&#39;s
              ability in legal research and analysis, enables him to apply the
              right law on a case by case basis. In the field of civil
              litigation, George has cooperated with some trustworthy and
              reputable barristers and is able to provide clients with low cost
              and high quality solutions.
            </p>
          </div>
          <div className="pb-10 lg:col-span-3 lg:text-left">
            <h3 className="font-bold text-xl pb-1">Qualifications</h3>
            <ul className="text-sm md:text-base">
              <li>
                Bachelor of Laws &#40;Hons&#41; at{' '}
                <span className="whitespace-nowrap ">
                  University of Auckland
                </span>
              </li>
              <li>Bachelor of Engineering</li>
              <li>Master of Philosophy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

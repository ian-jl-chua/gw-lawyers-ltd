import Image from 'next/image'
import george from 'public/george-wang.jpg'

export default function Team() {
  return (
    <section className="py-8 px-4 text-amber-950 dark:bg-gradient-to-b from-amber-950 dark:text-amber-50 lg:px-8">
      <h1 className="font-bold text-3xl flex justify-center text-center pb-8">
        Meet our team
      </h1>
      <div className="px-4 md:px-8">
        <div className="flex justify-center pb-4">
          <Image
            className="pb-4"
            src={george}
            alt="Profile picture of George Wang"
            priority={true}
          />
        </div>
        <h2 className="font-bold text-xl pb-4 text-center">Dongxing &#40;George&#41; Wang</h2>
        <div className="leading-7">
          <p className="pb-6">
            George is the principal person of the firm. He was admitted as a
            barrister and solicitor of the High Court of New Zealand in 2007.
          </p>
          <p className="pb-6">
            George has worked in two respected New Zealand law firms for three
            and half years before he set up this firm. He is always indebted to
            his former employers for the knowledge and experience he has got
            from them. He also has seven years of work experience in Commerce in
            China before he emigrated to New Zealand in 2003.
          </p>
          <p className="pb-10">
            George is experienced in Property, Commercial, Contract, Matrimonial
            Property, Employment and Immigration Law. George&#39;s ability in
            legal research and analysis, enables him to apply the right law on a
            case by case basis. In the field of civil litigation, George has
            cooperated with some trustworthy and reputable barristers and is
            able to provide clients with low cost and high quality solutions.
          </p>

          <div className="pb-10">
            <h3 className="font-bold text-xl">Qualifications</h3>
            <ul className="">
              <li>Bachelor of Laws &#40;Hons&#41; at <span className='whitespace-nowrap '>University of Auckland</span></li>
              <li>Bachelor of Engineering</li>
              <li>Master of Philosophy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

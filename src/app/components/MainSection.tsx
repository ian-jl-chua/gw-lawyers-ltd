import Image from 'next/image'
import mainImg from 'public/main-img.jpg'

export default function MainSection() {
  return (
    <section className="landing-bg w-full grid grid-row-2 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2"></div>
      <div className="flex flex-col justify-center text-center p-4 z-10 md:pr-8">
        <h2 className="py-8 text-2xl font-bold md:pt-0 lg:text-4xl">
          Qualified And Confidential{' '}
          <span className="whitespace-nowrap">Legal Advice</span>
        </h2>
        <p className="pb-8 lg:text-2xl">
          We act in the best interest of our clients, by protecting their legal
          and equitable rights, to help them succeed.
        </p>
      </div>
    </section>
  )
}
{
  /* <Image
          className=""
          src={mainImg}
          alt="Books on the table"
          priority={true}
        /> */
}
{
  /* <div className="opacity-50 ">
          <div className=''>
            
          </div>
        </div> */
}

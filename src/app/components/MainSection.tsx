import Image from 'next/image'
import mainImg from 'public/main-img.jpg'

export default function MainSection() {
  return (
    <section className="w-full landing-bg grid grid-row-2 lg:grid-cols-2">
      <div className="">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet non
          iste optio recusandae officiis mollitia facilis nam in alias
          voluptatem nesciunt soluta adipisci minima minus, quidem corporis
          aperiam. Mollitia, dicta!
        </p>
      </div>
      <div className="flex flex-col justify-center text-center px-8 lg:text-left  lg:pr-8">
        <h2 className="py-8 text-2xl font-bold tracking-widest md:pt-0 md:text-3xl lg:text-5xl">
          Qualified, Confidential Legal Advice
        </h2>
        <p className="pb-8 md:text-2xl lg:text-3xl">
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

import Image from 'next/image'
import mainImg from 'public/main-img.jpg'

export default function MainSection() {
  return (
    <section className="w-full grid grid-row-2 md:grid-cols-2 lg:grid-cols-3">
      <div className="md:opacity-40 lg:col-span-2">
        <Image
          className="mt-0 w-full h-min"
          src={mainImg}
          alt="Books on the table"
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-center text-center p-4 dark:bg-gradient-to-b from-amber-950 to-stone-950 md:p-2 dark:text-amber-50">
        <h2 className="py-8 text-2xl font-bold md:pt-0 ">
          Qualified And Confidential{' '}
          <span className="whitespace-nowrap">Legal Advice</span>
        </h2>
        <p className="pb-8 ">
          We act in the best interest of our clients, by protecting their legal
          and equitable rights, to help them succeed.
        </p>
      </div>
    </section>
  )
}

import Image from 'next/image'
import mainImg from 'public/main-img.jpg'

export default function MainImg() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="mx-auto mt-0 w-full md:w-2/3 lg:w-5/6 xl:w-screen h-screen"
        src={mainImg}
        // width={1800}
        // height={200}
        alt="Books on the table"
        priority={true}
      />
    </section>
  )
}

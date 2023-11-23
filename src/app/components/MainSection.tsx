import Image from 'next/image'
import mainImg from 'public/main-img.jpg'

export default function MainSection() {
  return (
    <section className="w-full grid grid-row-2 md:grid-cols-2 gap-4">
      <Image
        className="mt-0 w-full h-min"
        src={mainImg}
        // width={1800}
        height={200}
        alt="Books on the table"
        priority={true}
      />
      <div></div>
    </section>
  )
}

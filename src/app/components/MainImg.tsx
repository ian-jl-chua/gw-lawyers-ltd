import Image from 'next/image'
import mainImg from 'public/main-img.jpg'

export default function MainImg() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="mx-auto mt-0 w-full h-screen"
        // className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src={mainImg}
        // width={1800}
        // height={200}
        alt="Books on the table"
        priority={true}
      />
    </section>
  )
}

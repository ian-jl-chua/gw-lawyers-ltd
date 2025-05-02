import Link from "next/link";

export default function MainSection() {
  return (
    <section className="landing-bg grid-row-2 grid w-full lg:grid-cols-2">
      <div className="hidden lg:block">
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet non
          iste optio recusandae officiis mollitia facilis nam in alias
          voluptatem nesciunt soluta adipisci minima minus, quidem corporis
          aperiam. Mollitia, dicta!
        </p> */}
      </div>
      <div className="flex flex-col justify-center px-8 text-center lg:pr-8 lg:text-left">
        <h2 className="py-8 text-2xl font-bold tracking-widest md:pt-0 md:text-3xl lg:text-5xl">
          Qualified, Confidential Legal Advice
        </h2>
        <p className="pb-8 opacity-70 md:text-2xl lg:text-3xl">
          We act in the best interest of our clients, by protecting their legal
          and equitable rights, to help them succeed.
        </p>
        <button className="flex justify-center pb-20 text-xl lg:justify-start">
          <Link
            className="flex h-16 w-60 content-center justify-center rounded-md bg-amber-950/90 pt-4 text-amber-50 transition duration-200 ease-out hover:bg-amber-800 dark:bg-amber-100/80 dark:text-neutral-950 dark:hover:bg-amber-100"
            href="/contact#contactUs"
          >
            Contact Us
          </Link>
        </button>
      </div>
    </section>
  );
}

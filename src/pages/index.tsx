import Head from "next/head"
import MyForm from "../components/myform"
import MenuBtn from "../components/menubtn"
import Mobmen from "../components/mobmenu"
import Image from 'next/image'

export default function Home() {

  return (
  <>
  <Head>
    <title>Shortly</title>
  </Head>
  <main>
    {/* nav coontainer */}
    <nav className="relative container mx-auto p-6">
      {/* flex container for items */}
      <div className="flex items-center justify-between">
        {/* flex container for logo/menu */}
        <div className="flex items-center space-x-20">
          {/* logo */}
          <Image src="logo.svg" alt="" />
          {/* left menu */}
          <div className="hidden space-x-8 font-bold lg:flex">
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
              Features
            </a>
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
              Pricing
            </a>
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
              Resources
            </a>
          </div>
        </div>

        {/* right menu buttons */}
        <div 
          className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex"
        >
          <div className="hover:text-veryDarkViolet">
            Login
          </div>
          <a 
            href="#" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >Sign Up</a>
        </div>
        <MenuBtn />
      </div>
      <Mobmen />
    </nav>

    {/* hero */}
    <section id="hero">
      {/* hero contain */}
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        {/* content container */}
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w=1/2">
          <h1 className="text-5xl font-bold text-center lg:text-6xl max-w-md lg:text-left">
            More than just shorter links
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
          Build your brand`s recognition and get detailed insights on
          how your
          links are performing.
          </p>
          <div className="mx-auto lg:mx-0">
            <a href="#" className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
              Get Started
            </a>
          </div>
        </div>

        {/* image */}
        <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <Image src="illustration-working.svg" alt="" />
        </div>
      </div>
    </section>

    {/* shorten section */}
    <section id="shorten" className="relative bg-gray-100">
      {/* shorten container */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">

        {/* form */}
        <MyForm />

        {/* link 1 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">

          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://frontendmentor.io
          </p>

          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">
              https://rel.ink/k4IKyk
            </div>
            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>

        {/* link 2 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">

          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://twitter.com/frontendmentor
          </p>

          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">
              https://rel.ink/gx0Xp9
            </div>
            <button className="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>

        {/* link 3 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">

          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://linkedin.com/frontendmentor
          </p>

          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">
              https://rel.ink/gob3X9
            </div>
            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* stats section */}
    <section id="stats" className="py-24 bg-gray-100">
      <div className="container mx-auto px-3">
        <h2 className="text-4xl mb-6 font-bold text-center">
          Advanced Statistics
        </h2>
        <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
    </section>

    {/* feature box sect */}
    <section id="features" className="pb-32 bg-gray-100">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        {/* horizontal line */}
        <div className="hidden absolute top-24 left-16 w-10/12 h-3 bg-cyan md:block"></div>
        {/* vertical line */}
        <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

        {/* box 1 */}
        <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
          {/* image position */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* image container for bg n center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <Image src="icon-brand-recognition.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Brand Recognition
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links don`t mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        {/* box 2 */}
        <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3 ">
          {/* image position */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* image container for bg n center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <Image src="icon-detailed-records.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Detailed Records
          </h5>
          <p className="text-center text-gray-400 md:text-left">
          Gain insights into who is clicking your links. Knowing when
          and
          where people engage with your content helps inform better
          decisions.
          </p>
        </div>

        {/* box 3 */}
        <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3 ">
          {/* image position */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            {/* image container for bg n center */}
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <Image src="icon-fully-customizable.svg" alt="" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Fully Customizable
          </h5>
          <p className="text-center text-gray-400 md:text-left">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>

    {/* cta area */}
    <section id="cta" className="py-24 bg-veryDarkViolet">
      <div className="flex flex-col p-2 space-y-6">
        <h5 className="mx-auto text-4xl font-bold text-center text-white">
          Boost your links today
        </h5>
        <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">
          Get Started
        </button>
      </div>
    </section>

    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* logo */}
        <Image src="logo.svg" alt="" />
        {/* menus container */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* menu 1 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Features
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Link shortening</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Branded links</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Analitycs</a>
            </div>
          </div>
          {/* menu 2 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Blog</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Developers</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Support</a>
            </div>
          </div>
          {/* menu 3 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Company
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">About</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Our Team</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Careers</a>
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Contact</a>
            </div>
          </div>
        </div>
        {/* social cont */}
        <div className="flex space-x-6">
          <a href="#">
            <Image src="icon-facebook.svg" alt="" className="ficon" />
          </a>
          <a href="#">
            <Image src="icon-twitter.svg" alt="" className="ficon" />
          </a>
          <a href="#">
            <Image src="icon-pinterest.svg" alt="" className="ficon" />
          </a>
          <a href="#">
            <Image src="icon-instagram.svg" alt="" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  </main>
  </>
  )
}

import ErrorImg from "../assets/404.png"
import Button from "../components/Shared/Button"
const Error = () => {
  return (
    <div className="relative h-screen">
        <div className="h-full w-full absolute bg-[#0E0E0E]/55"/>
        <div className="h-full w-full absolute flex items-center justify-center flex-col px-6 text-center">
            <h1 className="lg:text-[250px] md:text-[175px] text-[100px] leading-none tracking-[0.1em] font-vissa md:mb-7">404</h1>
            <h2 className="xl:text-[78px] lg:text-6xl md:text-5xl  text-[38px] tracking-[0.04em] font-vissa leading-none uppercase md:mb-6">Sorry! The page isn't found here</h2>
            <Button dir="/" aspects="md:size-auto size-9" textStyles="font-light md:text-lg text-[10px]" height={64} width={60} className="md:w-[220px] w-[130px]" title="Go To home page" />
        </div>
        <img src={ErrorImg} className="h-full w-full object-cover"  alt="Error" />
    </div>
  )
}

export default Error
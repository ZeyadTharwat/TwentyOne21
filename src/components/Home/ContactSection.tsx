import Input from "../Shared/Input"
import Contact1 from "../../assets/Contact1.png"
import Contact3 from "../../assets/Contact3.png"
import Button from "../Shared/Button"
import PressBg2 from "../../assets/PressBg2.svg"
import Contact2 from "../../assets/Project3-9.png"

const ContactSection = () => {
  return (
    <div className="pb-40 pt-20 relative">
      <img src={PressBg2} className="absolute bottom-0 right-0 opacity-80" alt="" />

      <div className="container flex xl:gap-20 gap-10 lg:flex-row flex-col items-center">
        <div className="lg:w-1/2 md:w-2/3 w-full">
          <div className="sm:mb-14 mb-8">
            {/* <h1 className="xl:text-[32px] sm:text-[28px] text-xl tracking-[0.04em] font-vissa uppercase">Its Time To</h1> */}
            <h2 className="xl:text-6xl text-4xl tracking-[0.04em] font-vissa">Ask us anything</h2>
          </div>
          <form className="space-y-9 sm:space-y-14">
            <Input name="name" inputStyles="w-full" placeholder="Name" />
            <Input name="email" inputStyles="w-full" placeholder="Email" />
            <Button aspects="sm:size-auto size-12" height={85} width={80} title="Send a Request" textStyles="sm:text-xl text-xs font-light" className="sm:w-[250px] w-[150px] sm:mt-14 mt-7" />
          </form>
        </div>
        <div className="flex sm:gap-5 gap-3 relative z-50">
          <img className="xl:max-w-[240px] w-1/3 sm:max-w-[210px] object-cover sm:max-h-[486px] xl:min-w-[240px] sm:min-w-[210px] sm:min-h-[486px]" src={Contact1} alt="Contact 1" />
          <div className="sm:space-y-5 space-y-3 w-2/3 h-full">
            <img className="w-full xl:max-w-[402px] object-cover h-full sm:max-h-[261px] sm:max-w-[330px] sm:min-w-[330px] xl:min-w-[402px] sm:min-h-[261px]" src={Contact2} alt="Contact 2" />
            <img className="w-full xl:max-w-[402px] object-cover sm:max-h-[203px] sm:max-w-[330px] sm:min-w-[330px] xl:min-w-[402px] sm:min-h-[203px]" src={Contact3} alt="Contact 3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection

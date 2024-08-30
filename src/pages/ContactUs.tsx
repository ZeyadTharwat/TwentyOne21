import { Link } from "react-router-dom"
import FacebookIcon from "../components/Icons/FacebookIcon"
import InstagramIcon from "../components/Icons/InstagramIcon"
import LinkedInIcon from "../components/Icons/LinkedInIcon"
import MapComponent from "../components/Shared/MapComponent"
import Input from "../components/Shared/Input"
import ContactUsBg from "../assets/ContactUsBg.png"
const ContactUs = () => {
    return (
        <div>
            <div className="relative lg:pb-48 pt-40 ">
                <img src={ContactUsBg} className="absolute object-left bottom-0 left-0 object-cover h-full w-full"/>
                <div className="text-center md:mb-24 mb-12 lg:mb-36 z-50 relative">
                    <h1 className="lg:text-[95px] md:text-7xl sm:text-5xl text-[42px] font-vissa tracking-[0.04em] uppercase leading-none sm:mb-3">Lets Work together</h1>
                    <p className="font-light md:text-3xl sm:text-2xl text-lg tracking-[0.06em] font-houschka">hello@Twentyone.com</p>

                </div>
                <div className='grid lg:grid-cols-5 grid-cols-1 gap-y-16 max-w-[1660px] lg:px-5 mx-auto z-50 relative'>
                    <div className="lg:col-span-2 col-span-1 lg:text-start text-center">
                        <div className="md:mb-14 mb-8">
                            <h1 className="font-light text-[26px] md:text-[32px] text-[#D0D0D0] font-houschka md:mb-2 mb-4">Call US</h1>
                            <h2 className="font-vissa text-3xl md:text-5xl tracking-[0.02em] mb-4">(907) 262-2578</h2>
                            <h2 className="font-vissa text-3xl md:text-5xl tracking-[0.02em]">(907) 262-2578</h2>
                        </div>
                        <div className="md:mb-16 mb-8">
                            <h1 className="font-light text-[26px] md:text-[32px] text-[#D0D0D0] font-houschka md:mb-1 mb-4.5">Drop A Message</h1>
                            <h2 className="font-vissa text-3xl md:text-5xl tracking-[0.02em]">hello@TwentyOne.com</h2>
                        </div>
                        <div>
                            <h1 className="font-light text-[26px] md:text-[32px] text-[#D0D0D0] font-houschka md:mb-3 mb-4">Social</h1>
                            <div className="flex gap-4 lg:justify-start justify-center">
                                <Link to={'/'}>
                                    <FacebookIcon className="md:size-auto size-7" />
                                </Link>
                                <Link to={'/'}>
                                    <InstagramIcon className="md:size-auto size-7" />
                                </Link>
                                <Link to={'/'}>
                                    <LinkedInIcon className="md:size-auto size-7" />
                                </Link>
                            </div>

                        </div>
                    </div>
                    <form className="bg-[#FFEADF] md:px-14 px-5 py-8 md:py-11 space-y-6 lg:col-span-3" col-span-1>
                        <div className="flex sm:flex-row flex-col gap-7 w-full">
                        <Input name="first name" titleStyle="text-black" inputStyles="!text-black w-full border-b-[#393939] placeholder:text-[#888888] font-light" placeholder="First name here" label="First Name"/>
                        <Input name="first name" titleStyle="text-black" inputStyles="!text-black w-full border-b-[#393939] placeholder:text-[#888888] font-light" placeholder="Last name here" label="Last Name"/>
                        </div>
                        <div className="flex sm:flex-row flex-col gap-7 w-full">
                        <Input name="first name" titleStyle="text-black" inputStyles="!text-black w-full border-b-[#393939] placeholder:text-[#888888] font-light" placeholder="Add Email" label="Email Address"/>
                        <Input name="first name" titleStyle="text-black" inputStyles="!text-black w-full border-b-[#393939] placeholder:text-[#888888] font-light" placeholder="How can we help you" label="Subject"/>
                        </div>
                        <div>
                        <label className="font-light text-lg mb-6 text-black">Comments / Questions <sup className="text-primary">*</sup></label>

                        <textarea className="bg-transparent text-black font-houschka font-light border-b placeholder:text-white/60 tracking-[0.02em] text-base pb-4 hover:border-primary focus:border-primary duration-300 transition-all focus:outline-none outline-none focus:ring-0 w-full border-b-[#393939] placeholder:text-[#888888] resize-none h-[140px] sm:h-[187px] caret-black"/>

                        </div>
                    </form>
                </div>
            </div>
            <div className="lg:pb-52 md:pb-36 sm:pb-28 pb-24">
            <MapComponent/>

            </div>
        </div>
    )
}

export default ContactUs
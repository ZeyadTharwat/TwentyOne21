import Logo from "../../assets/Logo.png"
import FacebookIcon from "../Icons/FacebookIcon"
import LinkedInIcon from "../Icons/LinkedInIcon"
import InstagramIcon from "../Icons/InstagramIcon"
import { Link } from "react-router-dom"
import ChevronIcon from "../Icons/ChevronIcon"
import ButtonVector from "../../assets/ButtonVector.svg"
import Button from "../Shared/Button"
import YoutubeIcon from "../Icons/YoutubeIcon"
const Footer = () => {
    const backToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <footer className=" md:rounded-t-0 rounded-t-[10px] bg-transparent overflow-hidden text-white relative ">
            <div className="bg-[#0E0E0E]">
                <div className="container  h-full w-full grid pt-12 md:pt-36 grid-cols-1 md:grid-cols-4 gap-y-9 lg:grid-cols-12 pb-9 md:pb-24 border-b border-white/30 mb-5 md:mb-9">
                    <div className="xl:col-span-4 lg:col-span-5 md:col-span-3 col-span-1">
                        <Link to={'/'}>
                            <img className="md:size-auto w-[110px] h-12 mb-9 md:mb-14" src={Logo} />
                        </Link>
                        <Link to={'https://maps.app.goo.gl/XC1sDUoTweZmBg2r6'} target="_blank" className=" font-vissa text-[#888888] text-[26px] md:text-4xl lg:text-5xl ">Corporate Studio</Link>
                        <p className="font-houschka md:text-2xl font-light tracking-[0.06em] leading-[2.25]">
                                    <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5 mb-7" to={'https://maps.app.goo.gl/XC1sDUoTweZmBg2r6'} target="_blank">Stop by the studio
                                    </Link>
                                </p>

                        <p className="tracking-[0.02em] mt-1.5 md:text-2xl font-houschka font-light mb-2">Find us on social media</p>
                        <div className="flex gap-4">
                            <Link target="_blank" to={'https://www.facebook.com/p/TwentyOne06-100054351738420/'}>
                                <FacebookIcon className="md:size-auto size-7" />
                            </Link>
                            <Link target="_blank" to={'https://www.instagram.com/twentyone06/'}>
                                <InstagramIcon className="md:size-auto size-7" />
                            </Link>
                            <Link target="_blank" to={'https://www.linkedin.com/company/twentyone06'}>
                                <LinkedInIcon className="md:size-auto size-7" />
                            </Link>
                            <Link target="_blank" to={'https://www.youtube.com/@TwentyOne06'}>
                                <YoutubeIcon className="md:size-auto size-7" />
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-1 col-span-1">
                        <h1 className="font-vissa text-[26px] md:text-4xl lg:text-5xl mb-2.5 md:mb-4">Fast track</h1>
                        <div className="gap-4 flex md:flex-col">
                            <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5" to={'/'}>Home</Link>
                            <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5" to={'/about'}>About</Link>
                            <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5" to={'/our-creations'}>Projects</Link>
                            <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5" to={'/faqs'}>FAQS</Link>
                            <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5" to={'/contact-us'}>Contact Us</Link>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-4 col-span-1">
                        <div>
                            <h1 className="font-vissa text-[26px] md:text-4xl lg:text-5xl mb-2.5 md:mb-4">Hit us up</h1>
                            <div className="md:block flex gap-12">
                                <p className="font-houschka md:text-2xl font-light tracking-[0.06em] leading-[2.25]">
                                    <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5" to="tel:+971525977090">971-52-597-7090
                                    </Link>
                                </p>
                                <p className="font-houschka md:text-2xl font-light tracking-[0.06em] leading-[2.25]">
                                    <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5" to="tel:+97145548082">971-4-554-8082                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="md:mt-16 mt-9">
                            <h1 className="font-vissa text-[26px] md:text-4xl lg:text-5xl mb-2.5 md:mb-3">Slide into our inbox</h1>
                            <p className="font-houschka md:text-2xl font-light tracking-[0.06em] leading-loose">
                                <Link className="inline-block hover:text-primary duration-300 transition-all font-houschka font-light md:text-2xl md:hover:ml-5 md:hover:mt-0 hover:-mt-5" to="mailto:Info@twentyone06.com">Info@twentyone06.com</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container flex justify-center md:justify-between pb-7 items-center relative z-[9999999999999] bg-[#0E0E0E]">
                    <h1 className="font-vissa text-[#888888] md:block hidden">2024 – TwentyOne06</h1>
                    <div className="flex flex-col items-center">
                        <h1 className=" font-vissa text-[26px] md:text-4xl lg:text-5xl mb-2 md:mb-4 uppercase">Got A Project?</h1>
                        <Button title="tell us about it" aspects="sm:size-auto size-8" textStyles="sm:text-sm text-[10px]" width={44} height={47} className="sm:w-[174px] w-[120px]" />
                    </div>
                    <div className="md:block hidden">
                        <button onClick={backToTop} className="relative">
                            <img className="lg:w-[100px] w-20 h-[75px] lg:h-[95px] rotate-[115deg]" src={ButtonVector} />
                            <ChevronIcon className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rotate-90 lg:size-auto size-6" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer

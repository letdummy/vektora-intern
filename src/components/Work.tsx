import SectionHeading from "./SectionHeading";

function Work() {
    return (
        <section className="relative h-auto bg-no-repeat bg-cover bg-[url('/shape-1.svg')]" id="work">
            <div className="relative z-10 bg-transparent">
                <section className="flex justify-center gap-14 lg:gap-40 h-fit p-10 md:p-28 md:py-60 flex-col lg:flex-row bg-transparent" data-aos="fade-up">
                    <SectionHeading
                        title="What’s included in working with Amino?"
                        description="Create custom landing pages with Omega that 
                        convers more visitors than any website. With lots of unique blocks, you can easily build a page without coding."
                        isReverse={false}
                    />
                    <div className="relative bg-transparent">
                        <img
                            src="/model-1.png"
                            alt="Work Ilustration"
                            width={400}
                            className="mx-auto lg:mx-0 bg-transparent"
                            data-aos-duration="1000"
                            data-aos="fade-up"
                        />

                        <img
                            src="/notif-1.svg"
                            alt="Work Ilustration"
                            className="absolute bottom-32 h-20 -left-5 md:left-1/2 md:bottom-12 lg:-left-10 lg:bottom-20 z-10 bg-transparent"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos="fade-up"
                        />
                    </div>
                </section>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 bg-transparent">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(233%+1.3px)] h-20 bg-transparent"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="#1A191C"
                    />
                </svg>
            </div>
        </section>
    );
}

export default Work;
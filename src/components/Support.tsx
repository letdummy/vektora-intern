import SupportHeading from "./SupportHeading";

function Support() {
    return (
        <section className="flex justify-center gap-14 lg:gap-32 h-fit p-10 md:p-28 md:py-40 flex-col lg:flex-row bg-transparent" id="support">
            <div className="relative bg-transparent">
                <img
                    src="/model-2.png"
                    alt="Work Ilustration"
                    width={400}
                    className="mx-auto lg:mx-0 bg-transparent"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                />

                <img
                    src="/notif-2.svg"
                    alt="Work Ilustration"
                    className="absolute top-10 h-20 -right-5 md:right-1/2 md:top-12 lg:-left-10 lg:top-20 z-10 bg-transparent"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                />
            </div>
            <SupportHeading />
        </section>
    );
}

export default Support;
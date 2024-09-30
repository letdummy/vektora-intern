

function HeroIllustration() {
    return (
        <section className="relative">
            <img
                src="/phone-item-1.png"
                alt="Hero Ilustration"
                width={300}
                className="absolute top-24 -left-5 md:-left-10 z-10"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos="fade-up"
            />

            <img
                src="/phone.png"
                alt="Hero Ilustration"
                width={300}
                className="mx-auto lg:mx-0"
                data-aos-duration="1000"
                data-aos="fade-up"
            />

            <img
                src="/phone-item-2.png"
                alt="Hero Ilustration"
                width={300}
                className="absolute bottom-32 md:-right-10 -right-7 z-10"
                data-aos-delay="700"
                data-aos-duration="1500"
                data-aos="fade-up"
            />
        </section>
    );
}

export default HeroIllustration;
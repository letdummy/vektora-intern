import HeroHeading from "./HeroHeading";
import HeroIllustration from "./HeroIllustration";

function Hero() {
    return (
        <section className="flex justify-center gap-14 lg:gap-40 h-fit p-10 md:p-28 flex-col lg:flex-row" data-aos="fade-up">
            <HeroHeading />
            <HeroIllustration />
        </section>
    )
}

export default Hero;

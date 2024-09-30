import Button from "./Button";

function HeroHeading() {
    return (
        <section className="flex flex-col gap-5 h-full w-full lg:w-1/4 items-center text-center lg:items-start lg:text-start self-center">
            <h1 className="text-4xl font-extrabold text-white">
                Unlimited design interface in your business
            </h1>
            <p className="text-white opacity-50">
                Turn your ideas into reality with top talented designer. With lots of unique blocks, you can easily build a page without coding.
            </p>
            <Button text="Get Started" isReverse={false} />
        </section>
    )
}

export default HeroHeading;

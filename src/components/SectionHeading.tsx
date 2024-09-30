import Button from "./Button";

interface SectionHeadingProps {
    title: string;
    description: string;
    isReverse: boolean;
}

function SectionHeading({ title, description, isReverse }: SectionHeadingProps) {
    return (
        <section
            className="flex flex-col gap-10 items-center text-center max-w-96 lg:items-start lg:text-start self-center"
            data-aos-duration="1200"
            data-aos="fade-up"
        >
            <h1 className="text-5xl font-extrabold text-white">
                {title}
            </h1>
            <p className="max-w-96 text-white opacity-50">
                {description}
            </p>
            <Button text="Learn More" isReverse={isReverse} />
        </section>
    )
}

export default SectionHeading;
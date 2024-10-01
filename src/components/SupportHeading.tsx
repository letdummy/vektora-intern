

function SupportHeading() {
    return (
        <section
            className="flex flex-col gap-10 items-center text-center max-w-96 lg:items-start lg:text-start self-center bg-transparent"
            data-aos-duration="1200"
            data-aos="fade-up"
        >
            <h1 className="text-4xl font-extrabold text-white bg-transparent">
                Let us help you with your design hassles
            </h1>
            <p className="max-w-96 text-white opacity-50 bg-transparent">
                Create custom landing pages with Omega that convers more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
            </p>
            <div className="flex flex-col gap-3">
                <img src="/support-item-1.svg" alt="Service Item" className="w-96" data-aos-duration="1000" data-aos="fade-up" />
                <img src="/support-item-2.svg" alt="Service Item" className="w-96" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" />
            </div>
        </section>
    );
}

export default SupportHeading;
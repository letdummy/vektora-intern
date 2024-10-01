import ServiceItem from "./ServiceItem";

function ServiceList() {

    const services = [
        {
            icon: "/graphic.svg",
            title: "Graphic Design",
            description: "with lots of unique blocks, you can easily build a page without coding.",
            href: "#",
        },
        {
            icon: "/video.svg",
            title: "Video Design",
            description: "with lots of unique blocks, you can easily build a page without coding.",
            href: "#",
        },
        {
            icon: "/webflow.svg",
            title: "Webflow Pages",
            description: "with lots of unique blocks, you can easily build a page without coding.",
            href: "#",
        },
        {
            icon: "/custom.svg",
            title: "Custom Illustrations",
            description: "with lots of unique blocks, you can easily build a page without coding.",
            href: "#",
        },
    ];

    return (
        <section className="flex flex-wrap w-fit md:max-w-screen-md justify-center gap-5">
            {
                services.map((service, index) => (
                    <section
                        data-aos-delay={`${index * 200}`}
                        data-aos-duration="1000"
                        data-aos="fade-up"
                    >
                        <ServiceItem
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            href={service.href}
                        />
                    </section>
                ))
            }
        </section>
    );
}

export default ServiceList;
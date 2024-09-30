import ServiceList from "./ServiceList";
import SectionHeading from "./SectionHeading";

function Service() {
    return (
        <section className="flex flex-col-reverse md:flex-row gap-5 justify-center my-36 mx-3">
            <ServiceList />
            <SectionHeading
                title="Our Services would be your best fit"
                description="We provide the best services for our clients. We are committed to delivering quality services to our clients."
                isReverse={true}
            />
        </section>
    );
}

export default Service;
import SubscriptionForm from "./SubscriptionForm";

function Subscription() {
    return (
        <section
            className="pt-20 flex flex-col py-32 w-full mx-auto self-center bg-red-50 items"
            data-aos-disable="true"
        >
            <section className="max-w-screen-md mx-auto items gap-5 flex flex-col">
                <div className="items flex flex-col gap-10 max-w-lg mx-3 md:mx-auto text-center">
                    <h1
                        className="text-4xl font-extrabold text-white items"
                        data-aos-duration="1200"
                        data-aos="fade-up"
                    >
                        Get Started
                    </h1>
                    <p
                        className="text-gray-500 items"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos="fade-up"
                    >
                        Create custom landing  pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
                    </p>
                </div>

                <SubscriptionForm />
            </section>
        </section>
    );
}

export default Subscription;
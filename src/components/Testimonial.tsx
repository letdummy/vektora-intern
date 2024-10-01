import TestimonialItem from "./TestimonialItem";

function Testimonial() {

    const testimonials = [
        {
            icon: 'https://avatars.githubusercontent.com/u/71609913?v=4',
            name: 'Jonathan Taylor',
            position: 'Freelance Developer',
            text: 'OMG! I cannot believe that I have got a brand new landing page after getting @Amino...'
        },
        {
            icon: 'https://letdummy.vercel.app/me.png',
            name: 'Jane Doe',
            position: 'CEO at Sekali Submit',
            text: '@Amino is great for creating landing pages within minutes! it actually takes less time...'
        },
        {
            icon: 'https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png',
            name: 'Vectora Studio',
            position: 'Design Studio',
            text: 'Whenever I need to create a new landing page for clients, @Amino is my solution...'
        },
    ];

    return (
        <section className="relative flex flex-col gap-14 my-20 z-10">
            <h3
                className="max-w-md justify-center mx-4 md:mx-auto text-center text-5xl text-white font-bold"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos="fade-up"
            >
                Customers are loving our Amino
            </h3>
            <div className="flex flex-wrap w-fit md:max-w-screen-xl justify-center gap-5 mx-3 md:mx-auto">
                {
                    testimonials.map((testimonial, index) => (
                        <section
                            data-aos-delay={`${index * 300}`}
                            data-aos-duration="1200"
                            data-aos="fade-up"
                        >
                            <TestimonialItem key={index} testimonial={testimonial} />
                        </section>
                    ))
                }
            </div>

            <div
                className="flex flex-row gap-3 max-w-md justify-center mx-auto text-center"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos="fade-up"
            >
                <img
                    src="/testimonial.svg"
                    alt="Work Ilustration"
                />

                <p className="text-[#535CDB]">
                    See all testimonials
                </p>
            </div>

            <div className="absolute -bottom-[6rem] left-0 w-full overflow-hidden rotate-180 z-10 bg-transparent">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(300%+1.3px)] h-[113px] bg-transparent"
                >
                    <path
                        d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                        fill="#1E1E20"
                    ></path>
                </svg>
            </div>

        </section>
    );
}

export default Testimonial;
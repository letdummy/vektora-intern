
interface testimonialProps {
    testimonial: {
        icon: string;
        name: string;
        position: string;
        text: string;
    };
}

function TestimonialItem({ testimonial }: testimonialProps) {
    return (
        <section className="flex flex-col items-center gap-5 max-w-sm p-7 items transition-transform transform hover:-translate-y-3 cursor-default">
            <div className="flex flex-row items-center justify-between space-x-4 w-full bg-transparent">
                <div className="flex flex-row gap-5 bg-transparent items-center">
                    <img
                        src={testimonial.icon}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full bg-transparent"
                    />
                    <div className="bg-transparent">
                        <h3 className="font-semibold text-white bg-transparent">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 bg-transparent">{testimonial.position}</p>
                    </div>
                </div>

                <img src="/x-icon.svg" alt="X icon" className="w-7 h-7 bg-transparent" />
            </div>
            <p className="text-start bg-transparent text-gray-500">
                {testimonial.text.split('@Amino').map((part, index, array) => (
                    <>
                        {part}
                        {index < array.length - 1 && (
                            <span className="text-[#535CDB]">@Amino</span>
                        )}
                    </>
                ))}
            </p>
        </section>
    );
}
export default TestimonialItem;
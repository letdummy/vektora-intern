function SubscriptionForm() {
    return (
        <form className="mx-auto max-w-screen-md w-full px-10 flex flex-col gap-5 items">
            <div
                className="items"
                data-aos-delay="700"
                data-aos-duration="1200"
                data-aos="fade-up"
            >
                <input
                    type="text"
                    id="username"
                    className="text-white text-sm rounded-lg block w-full p-4 focus:outline-orange-600 focus-within:outline-none"
                    placeholder="Your name"
                    required
                />
            </div>
            <div
                className="items"
                data-aos-delay="900"
                data-aos-duration="1200"
                data-aos="fade-up"
            >
                <input
                    type="email"
                    id="email"
                    className="text-white text-sm rounded-lg block w-full p-4 focus:outline-orange-600 focus-within:outline-none"
                    placeholder="Email Address"
                    required
                />
            </div>
            <button
                type="submit"
                className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                data-aos-delay="1100"
                data-aos-duration="1200"
                data-aos="fade-up"
            >
                Submit
            </button>
        </form>
    );
}

export default SubscriptionForm;
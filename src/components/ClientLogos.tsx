const ClientLogos = () => {
    const logos = [
        { name: 'GeekWire', src: '/geekwire.png', alt: 'GeekWire' },
        { name: 'Slack', src: '/slack.png', alt: 'Slack' },
        { name: 'Envato', src: '/envato.png', alt: 'Envato' },
        { name: 'USA Today', src: '/usa-today.png', alt: 'USA Today' },
        { name: 'Forbes', src: '/forbes.png', alt: 'Forbes' },
    ];

    return (
        <div className="py-6 max-w-screen-xl self-center mx-auto">
            <div className="container mx-auto text-center">
                <div className="flex justify-center items-center mb-6">
                    <h3 className="text-white opacity-25 text-sm mx-3">Popular teams who use Amino for appointments</h3>
                    <div className="flex-grow border-t border-white opacity-25 ml-4 hidden md:block"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 md:gap-x-32">
                    {logos.map((logo) => (
                        <img
                            key={logo.name}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-7 md:h-10 opacity-75 hover:opacity-100 transition-opacity grow-0"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ClientLogos;

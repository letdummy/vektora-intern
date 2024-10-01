const footerItems = [
    {
        title: 'About',
        content: [
            { name: 'Our Mission', href: '#' },
            { name: 'Our Story', href: '#' },
            { name: 'Team Members', href: '#' },
        ],
    },
    {
        title: 'Learn',
        content: [
            { name: 'Tutorials', href: '#' },
            { name: 'How it works', href: '#' },
            { name: 'F.A.Q', href: '#' },
        ],
    },
    {
        title: 'Stories',
        content: [
            { name: 'Blog', href: '#' },
            { name: 'Tech Stories', href: '#' },
        ],
    },
    {
        title: 'Hire',
        content: [
            { name: 'Career', href: '#' },
            { name: 'Freelancers', href: '#' },
            { name: 'Trainee', href: '#' },
        ],
    },
];

const socialLinks = [
    {
        href: '#',
        icon: (
            <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
            >
                <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        label: 'Facebook page',
    },
    {
        href: '#',
        icon: (
            <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
            >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
        ),
        label: 'Discord community',
    },
];



function Footer() {
    return (
        <footer className="items">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 items">
                <div className="flex flex-col md:flex-row gap-5 md:justify-between mx-auto w-fit md:min-w-full items">
                    <div className="mb-6 md:mb-0 items text-center md:text-left">
                        <a href="#" className="items-center items">
                            <span className="text-3xl font-semibold text-white items">Amino</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-8 text-center md:text-left items">
                        {footerItems.map((item, index) => (
                            <div key={index} className='max-w-40 md:w-fit items'>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase items">{item.title}</h2>
                                <ul className="text-gray-400 font-medium items">
                                    {item.content.map((link, idx) => (
                                        <li className="mb-4 items" key={idx}>
                                            <a href={link.href} className="hover:underline items">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8 items" />
                <div className="sm:flex sm:items-center sm:justify-between items">
                    <span className="text-sm text-gray-500 sm:text-center items">
                        © 2020 <a href="#" className="hover:underline items">UXTheme</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 items">
                        {socialLinks.map((social, idx) => (
                            <a key={idx} href={social.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                {social.icon}
                                <span className="sr-only">{social.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
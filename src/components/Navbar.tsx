import { useState } from 'react';

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navItems = [
        { name: 'What we offer', href: '#', current: true },
        { name: 'Benefit', href: '#' },
        { name: 'How it work', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Testimonial', href: '#' },
    ];

    return (
        <nav className="relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Amino</span>
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                        Get started
                    </button>
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                        aria-controls="navbar-cta"
                        aria-expanded={isNavOpen}
                        onClick={toggleNav}
                    >
                        <img src='/hamburger.svg' alt='menu' />
                    </button>
                </div>
                <div className={`${isNavOpen ? 'absolute left-0 top-full' : 'hidden'} items-center md:block justify-between w-full md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:bg-transparent">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={`block py-2 px-3 rounded ${item.current
                                        ? 'text-orange-600 text-center font-bold'
                                        : 'text-white md:hover:bg-transparent hover:text-orange-700 text-center font-normal opacity-50 hover:opacity-100'
                                        }`}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
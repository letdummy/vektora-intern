import React from 'react';

interface ServiceItemProps {
    title: string;
    description: string;
    href: string;
    icon: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, href, icon }) => {
    return (
        <section className="max-w-xs p-6 rounded-lg shadow transition-transform transform hover:-translate-y-3 items">
            <div className="w-12 h-12 text-white mb-3 bg-transparent">
                <img src={icon}
                    alt="Graphic Design"
                    className="bg-transparent" />
            </div>
            <a href={href}>
                <h5 className="mb-2 text-2xl font-semibold text-white bg-transparent">
                    {title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-white opacity-50 bg-transparent">
                {description}
            </p>
        </section>
    );
};

export default ServiceItem;

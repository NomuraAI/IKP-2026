import React from 'react';

const LinkCard = ({ href, label, icon, color }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        relative overflow-hidden group p-6 rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-300 transform hover:-translate-y-1 block
        ${color}
      `}
        >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm text-white">
                    {icon}
                </div>
                <span className="text-xl font-bold text-white tracking-wide">{label}</span>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12 scale-150 text-white">
                {icon}
            </div>
        </a>
    );
};

export default LinkCard;

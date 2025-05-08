// /src/components/ContactItemCard.jsx

const ContactItemCard = ({ Icon, link, label, children, isExternal }) => {
    return (
      <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
        <div className="flex items-center gap-4">
          <Icon className="w-7 h-7" />
          <a 
            href={link} 
            className="underline text-blue-400 text-lg" 
            target={isExternal ? "_blank" : "_self"} 
            rel={isExternal ? "noopener noreferrer" : ""}
          >
            {children || label}
          </a>
        </div>
      </div>
    );
  };
  
  export default ContactItemCard;
  
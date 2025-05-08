import { Mail, Github, Linkedin, Phone } from "lucide-react";
import ContactItemCard from "../components/ContactItemCard";

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white p-8 flex flex-col sm:flex-row justify-center gap-6">
      {/* Email Card */}
      <ContactItemCard 
        Icon={Mail} 
        link="mailto:diptendulodh@gmail.com"
        label="diptendulodh@gmail.com"
      />

      {/* GitHub Card */}
      <ContactItemCard 
        Icon={Github} 
        link="https://github.com/diptendu07"
        label="GitHub"
        isExternal={true}
      />

      {/* LinkedIn Card */}
      <ContactItemCard 
        Icon={Linkedin} 
        link="https://www.linkedin.com/in/diptendu-lodh-70bab9295"
        label="LinkedIn"
        isExternal={true}
      />

      {/* Phone Card */}
      <ContactItemCard 
        Icon={Phone} 
        link="tel:+917044061273"
        label="+91 7044061273"
      />
    </div>
  );
};

export default Contact;

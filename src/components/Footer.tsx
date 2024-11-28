import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

interface SocialIcon {
  name: string;
  url: string;
  icon: JSX.Element;
}

interface Language {
  label: string;
  isActive: boolean;
}

const Footer = () => {
  const navItems: NavItem[] = [
    { label: "Избранное", path: "/favorites" },
    { label: "Корзина", path: "/cart" },
    { label: "Контакты", path: "/contacts" },
    { label: "Условия сервиса", path: "/terms" },
  ];

  const socialIcons: SocialIcon[] = [
    {
      name: "VK",
      url: "https://vk.com",
      icon: <img src="../src/assets/icons/VK.svg" alt="" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: <img src="../src/assets/icons/Instagram.svg" alt="" />,
    },
    {
      name: "Telegram",
      url: "https://wa.me",
      icon: <img src="../src/assets/icons/Telegram.svg" alt="" />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me",
      icon: <img src="../src/assets/icons/Whatsapp.svg" alt="" />,
    },
  ];

  const languages: Language[] = [
    { label: "Каз", isActive: false },
    { label: "Рус", isActive: true },
    { label: "Eng", isActive: false },
  ];

  return (
    <footer className="bg-white py-4 shadow-lg rounded-tl-[30px] rounded-tr-[30px] h-[149px] px-[40px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">QPICK</h1>
        </div>

        <div className="space-x-6 text-gray-600 flex">
          {navItems.map((item) => (
            <div className="">
              <Link key={item.path} to={item.path} className="hover:text-black">
                <div>{item.label}</div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-gray-600">
          <img src="../src/assets/icons/RU.svg" alt="" />
          {languages.map((language) => (
            <span
              key={language.label}
              className={`cursor-pointer ${language.isActive ? "text-orange-500" : ""}`}
            >
              {language.label}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 mx-1">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-gray-600 hover:text-black"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

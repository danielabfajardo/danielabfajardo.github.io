import { socialMedia } from "@/data";
import Link from "next/link";

const Contact = () => {
  return (
    <footer className="w-full">
        <div className="flex flex-row items-center gap-6 md:gap-12">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className={`cursor-pointer flex justify-center items-center opacity-60 hover:opacity-100 transition duration-200 ${info.id === 3 || info.id === 4 ? 'invert' : '' }`}
            >
              <Link href={info.url} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="Social Media Links" width={25} height={25} />
              </Link>
            </div>
          ))}
        </div>
    </footer>
  );
};

export default Contact;
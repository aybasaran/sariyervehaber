import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="">
      <div className="container"></div>
      <div className="py-4 bg-neutral-800">
        <div className="container">
          <h3 className="text-lg text-center text-white">
            Copyright &copy; {new Date().getFullYear()}.Her Hakkı Saklıdır.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

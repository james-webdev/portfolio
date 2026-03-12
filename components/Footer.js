import Github from "./GitHub";
import LinkedIn from "./LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="h-20 footer flex justify-center items-start">
        <div className="mt-4 flex">
          <div className="m-4 md:ml-8">
            <LinkedIn />
          </div>
          <div className="m-4">
            <Github />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

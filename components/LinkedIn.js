import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const LinkedIn = () => (
  <div className="text-3xl flex items-center justify-center">
    <a className="flex items-center justify-center" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jamesroe-dev/">
      <FontAwesomeIcon style={{ color: "white" }} icon={faLinkedinIn} />
    </a>
  </div>
);

export default LinkedIn;

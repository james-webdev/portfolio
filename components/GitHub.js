import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Github = () => (
  <div className="text-3xl flex items-center justify-center">
    <a className="flex items-center justify-center" target="_blank" rel="noreferrer" href="https://www.github.com/james-webdev">
      <FontAwesomeIcon style={{ color: "white" }} icon={faGithub} />
    </a>
  </div>
);

export default Github;

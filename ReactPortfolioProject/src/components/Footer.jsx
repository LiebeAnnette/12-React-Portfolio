import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p>© 2025 React Portfolio Project</p>
      <p>
        <a
          href="https://github.com/liebeannette"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>{" "}
        <a
          href="https://linkedin.com/in/liebe-stevenson-116ba97a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://stackoverflow.com/users/28229648/liebe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow size={24} />
        </a>
      </p>
    </footer>
  );
}

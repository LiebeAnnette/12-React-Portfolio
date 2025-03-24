import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-center py-4 mt-5"
      style={{
        backgroundColor: "#794E57",
        color: "#fff",
        borderTop: "4px solid #E6B037",
      }}
    >
      <p className="mb-2">© 2025 React Portfolio Project</p>
      <div className="d-flex justify-content-center gap-4">
        <a
          href="https://github.com/liebeannette"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
          className="footer-icon"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/liebe-stevenson-116ba97a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
          className="footer-icon"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://stackoverflow.com/users/28229648/liebe"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
          className="footer-icon"
        >
          <FaStackOverflow size={24} />
        </a>
      </div>
    </footer>
  );
}

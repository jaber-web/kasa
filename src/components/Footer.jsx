import "./Footer.scss";
import logoFooter from "../assets/logo-footer.svg";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={logoFooter}
        alt="Kasa"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
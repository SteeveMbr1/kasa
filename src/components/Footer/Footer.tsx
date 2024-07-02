import Logo from "../Logo/Logo";
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <Logo/>
      <p className="footer-copyright">&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            architecto rerum in quas quo quos debitis sed laboriosam distinctio
            culpa perferendis consectetur, sunt repellendus magni nihil
            accusamus aliquam fuga neque.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 706-117-6233</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer-container">
      <section class="footer-subscription">
        <p class="footer-subscription-heading">
          Join our community to get the latest news
        </p>
        <p class="footer-subscription-text">You can unsubscribe at any time.</p>
        <div class="input-areas">
          <form>
            <input
              class="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button class="btn btn-outline-light">Subscribe</button>
          </form>
        </div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" class="social-logo">
              <img
                src="./images/marvel.png"
                class="marvel-logo"
                alt="marvel-logo"
              />
            </Link>
          </div>
          <small class="website-rights">ROI YEHEZKEL © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link class="social-icon-link youtube" to="/" aria-label="Youtube">
              <i class="fab fa-youtube" />
            </Link>
            <Link class="social-icon-link twitter" to="/" aria-label="Twitter">
              <i class="fab fa-twitter" />
            </Link>
            <Link class="social-icon-link twitter" to="/" aria-label="LinkedIn">
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;

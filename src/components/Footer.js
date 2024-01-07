import React from "react";
import "./Footer.css";

function Footer() {
    const today = new Date().getFullYear();

    return (
        <footer className="footer">
            Made with ❤️ & 🍦
            <br />
            © Brandi Burnell {today}
        </footer>
    )
}

export default Footer;
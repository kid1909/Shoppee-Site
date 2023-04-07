import "../assets/css/navbar.css";
import "../index.css";
import qrcode from "../assets/img/qrcode.png";
import apple from "../assets/img/appstore.png";
import google from "../assets/img/google.png";
import ps5 from "../assets/img/ps5-control.webp";
import xbox from "../assets/img/xbox1.jpg";
import switch1 from "../assets/img/switch.jpg";

function Navbar() {
  return (
    <header className="header">
      <div className="grid">
        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
              Access Shoppee through App
              <div className="header__qr">
                <img src={qrcode} alt="QR code" className="header__qr-img" />
                <div className="header__qr-apps">
                  <img
                    src={google}
                    alt="GoogleStore"
                    className="header__qr-download-img"
                  />
                  <img
                    src={apple}
                    alt="AppleStore"
                    className="header__qr-download-img"
                  />
                </div>
              </div>
            </li>
            <li className="header__navbar-item">
              <span className="header__navbar-item-title--disable">
                {" "}
                Connect{" "}
              </span>
              <a href="" className="header__navbar-icon-link">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="" className="header__navbar-icon-link">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__notify-item-has-window">
              <a href="" className="header__navbar-item-link ">
                <i className="fa-solid fa-bell"></i>
                Notification
              </a>

              <div className="header__notify">
                <header className="header__notify-header">
                  <h3>New Notification</h3>
                </header>
                <ul className="header__notify-list">
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src={ps5} alt="" className="header__notify-img" />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          PS5 Controller
                        </span>

                        <span className="header__notify-descp">
                          Official PS5 Controller OEM
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item">
                    <a href="" className="header__notify-link">
                      <img src={xbox} alt="" className="header__notify-img" />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Xbox Controller
                        </span>

                        <span className="header__notify-descp">
                          Official xbox Controller OEM
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item header__notify-item">
                    <a href="" className="header__notify-link">
                      <img
                        src={switch1}
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Nintendo Switch Console
                        </span>

                        <span className="header__notify-descp">
                          Nintendo Switch Console
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                <footer className="header__notify-footer">
                  <a href="" className="header__notify-footer-btn">
                    Expand all
                  </a>
                </footer>
              </div>
            </li>
            <li className="header__navbar-item ">
              {" "}
              <a href="" className="header__navbar-item-link ">
                <i className="fa-solid fa-question-circle"></i>
                Help
              </a>
            </li>
            <li className="header__navbar-item header__navbar-item--strong header__navbar-item--separate">
              Sign Up
            </li>
            <li className="header__navbar-item header__navbar-item--strong">
              Register
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

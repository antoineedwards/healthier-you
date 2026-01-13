import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div id="wrapper" className="fade-in">


      {/* Header */}
      <header id="header">
        <Link href="/" className="logo">
          A Healthier You
        </Link>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul className="links">
          <li className="active">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#products">Products</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main */}
      <div id="main">
        {/* Products */}
        <section className="posts">

        </section>

        {/* Footer */}
        <footer>
          <div className="pagination">
            {/*<a href="#" className="previous">Prev</a>*/}
            <a href="#" className="page active">
              1
            </a>
            <a href="#" className="page">
              2
            </a>
            <a href="#" className="page">
              3
            </a>
            <span className="extra">&hellip;</span>
            <a href="#" className="page">
              8
            </a>
            <a href="#" className="page">
              9
            </a>
            <a href="#" className="page">
              10
            </a>
            <a href="#" className="next">
              Next
            </a>
          </div>
        </footer>
      </div>

      {/* Footer */}
      <footer id="footer">
        <section>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={3}></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split contact">
          <section className="alt">
            <h3>Address</h3>
            <p>
              1234 Somewhere Road #87257
              <br />
              Nashville, TN 00000-0000
            </p>
          </section>
          <section>
            <h3>Phone</h3>
            <p>
              <a href="#">(000) 000-0000</a>
            </p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              <a href="#">info@untitled.tld</a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
              <li>
                <a href="#" className="icon brands alt fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </footer>

      {/* Copyright */}
      <div id="copyright">
        <ul>
          <li>&copy; A Healthier You</li>
          <li>
            Design: <a href="https://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

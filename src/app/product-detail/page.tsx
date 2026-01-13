import Link from "next/link";

export default function ProductDetail() {
    return (
        <div id="wrapper">
            {/* Header */}
            <header id="header">
                <Link href="/" className="logo">
                    A Healthier You
                </Link>
            </header>

            {/* Nav */}
            <nav id="nav">
                <ul className="links">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="active">
                        <Link href="#">Product Details</Link>
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
                {/* Post */}
                <section className="post">
                    <header className="major">
                        <span className="date">Product</span>
                        <h1>Nutrition Plan</h1>
                        <p>A comprehensive nutrition plan tailored to your body type and fitness goals.</p>
                    </header>
                    <div className="image main">
                        <img src="/images/pic02.jpg" alt="" />
                    </div>
                    <p>
                        Achieving your health goals starts with what you eat. Our nutrition plan is designed to provide you with a balanced diet that fuels your body and mind.
                    </p>
                    <p>
                        We work with you to understand your dietary preferences, lifestyle, and health objectives. Whether you want to lose weight, build muscle, or simply eat healthier, our plan provides you with delicious recipes, shopping lists, and meal prep tips.
                    </p>
                    <h3>What&apos;s Included?</h3>
                    <ul>
                        <li>Customized meal plans</li>
                        <li>Weekly grocery lists</li>
                        <li>Nutritional guidance</li>
                        <li>24/7 support</li>
                    </ul>
                </section>
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

import "./footer.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container ">

                {/* Column 1 */}
                <div className="footer-col brand">
                    <div className="logo">
                        <span>ع</span>
                        <h3>عدسة</h3>
                    </div>
                    <p>
                        مدونة متخصصة في فن التصوير الفوتوغرافي.
                        نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                    </p>

                    <div className="socials">
                        <FaYoutube size={40} />
                        <FaLinkedin size={40} />
                        <FaGithub size={40} />
                        <FaTwitter size={40} />
                    </div>

                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <h4>استكشف</h4>
                    <ul>
                        <li><Link to="/">الرئيسية</Link></li>
                        <li><Link to="/blogs">المدونة</Link></li>
                        <li>من نحن</li>
                    </ul>
                </div>


                {/* Column 3 */}

                <div className="footer-col">
                    <h4>التصنيفات</h4>
                    <ul>
                        <li>إضاءة</li>
                        <li>بورتريه</li>
                        <li>مناظر طبيعية</li>
                        <li>تقنيات</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="footer-col">
                    <h4>ابقَ على اطلاع</h4>
                    <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
                    <div class="newsletter-form">
                        <input type="email" placeholder="أدخل بريدك الإلكتروني" />
                        <button>اشترك</button>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 عدسة. صُنع بكل <span className="heart">❤️</span> جميع الحقوق محفوظة.</p>
            </div>
        </footer>
    );
}

export default Footer;

import { Mail } from "lucide-react";
import "./Newsletter.css";

/**
 * Newsletter subscription section
 */
export default function Newsletter() {
    return (
        <section className="newsletter-section py-5 d-flex justify-content-center">
            <div className="newsletter-card text-center">

                {/* Icon */}
                <div className="mb-4">
                    <div className="newsletter-icon">
                        <Mail size={36} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="newsletter-title mb-3 fw-bold">
                    اشترك في <span className="highlight">نشرتنا الإخبارية</span>
                </h2>

                {/* Description */}
                <p className="newsletter-desc mb-4">
                    احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                </p>

                <div className="newsletter-form-wrapper mb-4">
                    <div className="newsletter-form d-flex flex-column flex-md-row gap-2">
                        <input
                            type="email"
                            className="newsletter-input form-control"
                            placeholder="أدخل بريدك الإلكتروني"
                        />
                        <button className="newsletter-button btn">
                            اشترك الآن
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="newsletter-footer-wrapper">
                    <div className="newsletter-footer">
                        <div className="avatars">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Subscriber avatar" />
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Subscriber avatar" />
                            <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Subscriber avatar" />
                        </div>

                        <span>بدون إزعاج</span>
                        <span>•</span>
                        <span>إلغاء الاشتراك في أي وقت</span>
                        <span>•</span>
                        <span className="highlight">+10,000</span> مصور
                    </div>
                </div>


            </div>
        </section>
    );
}

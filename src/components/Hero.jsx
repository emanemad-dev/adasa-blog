import { Link, NavLink, useLocation } from "react-router-dom";
import { FaPenNib, FaTags, FaUsers, FaFileAlt, FaArrowDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";

const PAGE_DATA = {
    "/": {
        badge: "مرحبًا بك في عدسة",
        title: <>اكتشف <span>فن</span> <br /> التصوير الفوتوغرافي</>,
        desc: "انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير",
        primaryBtn: { text: "استكشف المقالات ←", link: "/blogs" },
        secondaryBtn: { text: "اعرف المزيد", link: "/about", icon: <FaArrowDown /> },
        stats: [
            { icon: <FaFileAlt />, value: "50+", label: "مقالة" },
            { icon: <FaUsers />, value: "10K+", label: "قارئ" },
            { icon: <FaTags />, value: "4", label: "تصنيفات" },
            { icon: <FaPenNib />, value: "6", label: "كاتب" }
        ],
        showStats: true // إضافة خاصية جديدة
    },
    "/about": {
        badge: "من نحن",
        title: <>مهمتنا هي <span>الإعلام والإلهام</span></>,
        desc: "مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.",
        primaryBtn: { text: "استكشف المدونة ←", link: "/blogs" },
        secondaryBtn: { text: "الصفحة الرئيسية", link: "/", icon: <FaArrowDown style={{ transform: "rotate(180deg)" }} /> },
        stats: [
            { icon: <FaUsers />, value: "+2مليون", label: "قارئ شهرياً" },
            { icon: <FaFileAlt />, value: "+500", label: "مقالة منشورة" },
            { icon: <FaPenNib />, value: "+50", label: "كاتب خبير" },
            { icon: <FaTags />, value: "+15", label: "تصنيف" }
        ],
        showStats: true // إضافة خاصية جديدة
    },
    "/blogs": {
        badge: "المدونة",
        title: (
            <>
                استكشف <span className="highlight">مقالاتنا</span>
                <br />
            </>
        ),
        desc: "اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث.",
        primaryBtn: { text: "تصفح جميع المقالات ←", link: "/blogs/all" },
        secondaryBtn: { text: "الصفحة الرئيسية", link: "/", icon: <FaArrowDown style={{ transform: "rotate(180deg)" }} /> },
        stats: [
            { icon: <FaFileAlt />, value: "200+", label: "مقالة مجانية" },
            { icon: <FaUsers />, value: "25K+", label: "قارئ نشط" },
            { icon: <FaTags />, value: "8", label: "تصنيفات رئيسية" },
            { icon: <FaPenNib />, value: "12", label: "كاتب محترف" }
        ],
        showStats: false // إضافة خاصية جديدة لتحديد عدم عرض stats
    }
};

function Hero() {
    const location = useLocation();
    const page = PAGE_DATA[location.pathname] || PAGE_DATA["/"];

    return (
        <section className="hero-section d-flex align-items-center text-center text-light">
            <div className="container p-5">

                {/* Badge */}
                <span className="hero-badge mb-3 d-inline-flex align-items-center gap-2">
                    <span className="loading-dots">
                        <span></span>
                        <span></span>
                    </span>
                    {page.badge}
                </span>

                {/* Heading */}
                <h1 className="hero-title fw-bold mb-3">{page.title}</h1>

                {/* Description */}
                <p className="hero-desc text-center mb-4">{page.desc}</p>

                {/* Actions */}
                <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
                    {page.primaryBtn && (
                        <Link to={page.primaryBtn.link} className="btn hero-btn-primary">
                            {page.primaryBtn.text}
                        </Link>
                    )}
                    {page.secondaryBtn && (
                        <NavLink to={page.secondaryBtn.link} className="btn hero-btn-secondary d-flex align-items-center gap-2">
                            {page.secondaryBtn.icon}
                            {page.secondaryBtn.text}
                        </NavLink>
                    )}
                </div>

                {/* Stats - تظهر فقط إذا كانت showStats = true */}
                {page.showStats && (
                    <div className="row g-3 justify-content-center">
                        {page.stats.map((stat, idx) => (
                            <Stat key={idx} {...stat} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

const Stat = ({ icon, value, label }) => (
    <div className="col-6 col-md-3">
        <div className="stat-box h-100">
            <div className="stat-icon">{icon}</div>
            <h3 className="stat-value">{value}</h3>
            <p className="stat-label">{label}</p>
        </div>
    </div>
);

export default Hero;
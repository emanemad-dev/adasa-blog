import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; // أضف useState
import blogData from "../data/blogs";
import {
    FaShare,
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaCalendarAlt,
    FaClock,
    FaCamera,
    FaArrowLeft,
    FaRegHeart
} from "react-icons/fa";
import "./BlogDetails.css";

const BlogDetails = ({ post }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    if (!post) return null;

    const headers = [];
    const contentLines = post.content.split("\n");

    contentLines.forEach((line) => {
        if (line.startsWith("## ")) {
            const title = line.slice(3).trim();
            const id = title.replace(/\s+/g, "-");
            headers.push({ title, id });
        }
    });

    const relatedPosts = blogData.posts
        .filter((p) => p.id !== post.id && p.category === post.category)
        .slice(0, 3);

    const shareUrl = window.location.href;

    const formatDateArabic = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const contentSections = post.content.split("\n\n").map((section, idx) => {
        const trimmed = section.trim();

        if (trimmed.startsWith("## ")) {
            const title = trimmed.slice(3);
            const id = title.replace(/\s+/g, "-");

            return (
                <h2 key={idx} id={id} className="section-title">
                    <FaCamera className="section-icon" />
                    {title}
                </h2>
            );
        }

        return (
            <p
                key={idx}
                className="section-text"
                dangerouslySetInnerHTML={{
                    __html: trimmed.replace(/\n/g, "<br/>"),
                }}
            />
        );
    });

    const handleSmoothScroll = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const handleShare = () => {
        navigator.clipboard.writeText(shareUrl);
        alert("تم نسخ الرابط ✅");
    };

    const shareOnTwitter = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const shareOnLinkedin = () => {
        const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setError("يرجى إدخال بريد إلكتروني صحيح");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');

            if (subscriptions.includes(email)) {
                setError("هذا البريد مشترك بالفعل");
                setLoading(false);
                return;
            }

            subscriptions.push(email);
            localStorage.setItem('subscriptions', JSON.stringify(subscriptions));

            alert("تم الاشتراك بنجاح! شكراً لك");
            setEmail("");

        } catch (err) {
            setError("حدث خطأ، يرجى المحاولة مرة أخرى");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="blog-page" dir="rtl">
            <div className="container">

                {/* HERO */}
                <div className="hero">
                    <img src={post.image} className="hero-img" alt={post.title} />

                    <div className="hero-overlay"></div>

                    <div className="hero-content">
                        <div className="top-meta">
                            <span className="badge">{post.category}</span>
                            <span>
                                <FaClock /> {post.readTime}
                            </span>
                            <span>
                                <FaCalendarAlt /> {formatDateArabic(post.date)}
                            </span>
                        </div>

                        <h1>{post.title}</h1>

                        <div className="author">
                            <img src={post.author.avatar} alt={post.author.name} />
                            <div>
                                <strong>{post.author.name}</strong>
                                <span>{post.author.role}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="layout">
                    {/* MAIN */}
                    <div className="main">
                        <div className="content">{contentSections}</div>

                        {/* TAGS */}
                        <div className="tags-section">
                            <h4 className="tags-title">
                                <FaCamera className="tags-icon" />
                                الوسوم
                            </h4>
                            <div className="tags-list">
                                {post.tags?.map((tag, i) => (
                                    <span key={i} className="tag-item">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* SHARE */}
                        <div className="share-section">
                            <h4 className="share-title">
                                <FaShare className="share-icon" />
                                شارك المقال
                            </h4>
                            <div className="share-buttons">
                                <button onClick={handleShare} className="share-btn share-more">
                                    <FaShare />
                                </button>
                                <button onClick={shareOnTwitter} className="share-btn twitter">
                                    <FaTwitter />
                                </button>
                                <button onClick={shareOnFacebook} className="share-btn facebook">
                                    <FaFacebookF />
                                </button>
                                <button onClick={shareOnLinkedin} className="share-btn linkedin">
                                    <FaLinkedinIn />
                                </button>
                            </div>
                        </div>

                        {/* AUTHOR */}
                        <div className="author-section">
                            <div className="author-avatar-wrapper">
                                <img src={post.author.avatar} alt={post.author.name} className="author-avatar-large" />
                                <div className="author-verified-badge">✓</div>
                            </div>
                            <div className="author-info">
                                <h4 className="author-name-large">{post.author.name}</h4>
                                <p className="author-role-badge">{post.author.role}</p>
                                <p className="author-bio">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="sidebar">
                        {/* محتوى المقال */}
                        <div className="sidebar-section">
                            <h4 className="sidebar-title">
                                <span className="title-icon">📑</span>
                                محتوى المقال
                            </h4>
                            <ul className="table-of-contents">
                                {headers.map((h, i) => (
                                    <li key={i}>
                                        <a
                                            onClick={(e) => handleSmoothScroll(e, h.id)}
                                            className="toc-link"
                                            href="#"
                                        >
                                            <span className="toc-number">{i + 1}</span>
                                            <span className="toc-text">{h.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* وقت القراءة */}
                        <div className="sidebar-section reading-time-box">
                            <div className="reading-time-icon">⏱️</div>
                            <div className="reading-time-content">
                                <span className="reading-time-label">وقت القراءة</span>
                                <span className="reading-time-value">{post.readTime}</span>
                            </div>
                        </div>

                        {/* تاريخ النشر */}
                        <div className="sidebar-section publish-date-box">
                            <div className="date-icon">📅</div>
                            <div className="date-content">
                                <span className="date-label">تاريخ النشر</span>
                                <span className="date-value">{formatDateArabic(post.date)}</span>
                            </div>
                        </div>

                        {/* نموذج الاشتراك */}
                        <div className="sidebar-section subscribe-box">
                            <div className="subscribe-header">
                                <span className="subscribe-icon">📬</span>
                                <h4 className="subscribe-title">لا تفوّت جديدنا</h4>
                            </div>
                            <p className="subscribe-text">اشترك للحصول على أحدث المقالات</p>

                            <form onSubmit={handleSubscribe} className="subscribe-form">
                                <input
                                    type="email"
                                    placeholder="بريدك الإلكتروني"
                                    className="subscribe-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                                {error && <div className="subscribe-error">{error}</div>}
                                <button type="submit" className="subscribe-btn" disabled={loading}>
                                    {loading ? "جاري الاشتراك..." : "اشترك الآن"}
                                    {!loading && <span className="btn-arrow">→</span>}
                                </button>
                            </form>
                        </div>

                        {/* زر تصفح المزيد */}
                        <div className="sidebar-section browse-more">
                            <button className="browse-more-btn" onClick={() => navigate('/blogs')}>
                                تصفح المزيد
                                <span className="btn-icon">📖</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* RELATED POSTS */}
                {relatedPosts.length > 0 && (
                    <div className="related-section">

                        <div className="related-header">
                            <div>
                                <h3>
                                    <FaRegHeart className="related-icon" />
                                    مقالات قد تعجبك
                                </h3>
                                <p>استكشف المزيد من المحتوى المميز</p>
                            </div>

                            <button className="arrow-btn" onClick={() => navigate("/blogs")}>
                                عرض الكل
                                <FaArrowLeft />
                            </button>
                        </div>

                        <div className="related-grid">
                            {relatedPosts.map((r) => (
                                <Link
                                    to={`/blog/${r.slug}`}
                                    key={r.id}
                                    className="related-card"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    {/* IMAGE */}
                                    <div
                                        className="related-img"
                                        style={{ backgroundImage: `url(${r.image})` }}
                                    >
                                        <span className="card-badge">{r.category}</span>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="related-content">
                                        <h4>{r.title}</h4>

                                        <div className="card-meta">
                                            <div className="card-author">
                                                <img src={r.author.avatar} alt={r.author.name} />
                                                <span>{r.author.name}</span>
                                            </div>
                                            <span>{r.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                )}

            </div>
        </section>
    );
};

export default BlogDetails;
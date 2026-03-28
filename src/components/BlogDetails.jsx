// BlogDetails.jsx
import { Link } from "react-router-dom";
import blogData from "../data/blogs";
import {
    FaShare,
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaCalendarAlt,
    FaClock,
} from "react-icons/fa";
import "./blogDetails.css";

const BlogDetails = ({ post }) => {
    if (!post) return null;

    // استخراج العناوين من المحتوى لإنشاء قائمة المحتويات
    const headers = [];
    const contentLines = post.content.split("\n");

    contentLines.forEach((line) => {
        if (line.startsWith("## ")) {
            const title = line.slice(3).trim();
            const id = title
                .toLowerCase()
                .replace(/[^\u0600-\u06FFa-z0-9\s-]/g, "")
                .replace(/\s+/g, "-");
            headers.push({ title, id });
        }
    });

    // مقالات ذات صلة بنفس التصنيف
    const relatedPosts = blogData.posts
        .filter((p) => p.id !== post.id && p.category === post.category)
        .slice(0, 3);

    const shareUrl = window.location.href;

    // تنسيق التاريخ بالعربية
    const formatDateArabic = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    // معالجة المحتوى وتحويله إلى عناصر React
    const contentSections = post.content
        .split("\n\n")
        .map((section, idx) => {
            const trimmed = section.trim();

            if (trimmed.startsWith("## ")) {
                const title = trimmed.slice(3);
                const id = title
                    .toLowerCase()
                    .replace(/[^\u0600-\u06FFa-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-");

                return (
                    <h2 key={idx} id={id} className="section-title">
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

    // وظيفة للتمرير السلس
    const handleSmoothScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, null, `#${id}`);
        }
    };

    // وظيفة المشاركة
    const handleShare = () => {
        navigator.clipboard.writeText(shareUrl);
        alert("تم نسخ رابط المقال!");
    };

    return (
        <section className="blog-page" dir="rtl">
            <div className="container">
                {/* HERO SECTION */}
                <div className="hero">
                    <img src={post.image} alt={post.title} className="hero-img" />
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <span className="badge-category">{post.category}</span>
                        <h1>{post.title}</h1>
                        <div className="hero-meta">
                            <div className="author">
                                <img src={post.author.avatar} alt={post.author.name} />
                                <div>
                                    <div>{post.author.name}</div>
                                    <small>{post.author.role}</small>
                                </div>
                            </div>
                            <span>
                                <FaCalendarAlt style={{ marginLeft: "6px" }} />
                                {formatDateArabic(post.date)}
                            </span>
                            <span>
                                <FaClock style={{ marginLeft: "6px" }} />
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT + SIDEBAR */}
                <div className="row-grid">
                    {/* MAIN CONTENT */}
                    <div className="main-col">
                        <div className="content">{contentSections}</div>

                        {/* TAGS */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="tags">
                                {post.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                        )}

                        {/* SHARE */}
                        <div className="share">
                            <button className="share-btn" onClick={handleShare}>
                                <FaShare />
                            </button>
                            <FaTwitter
                                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
                                style={{ cursor: "pointer" }}
                            />
                            <FaFacebookF
                                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
                                style={{ cursor: "pointer" }}
                            />
                            <FaLinkedinIn
                                onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
                                style={{ cursor: "pointer" }}
                            />
                        </div>

                        {/* AUTHOR BOX */}
                        <div className="author-box">
                            <img src={post.author.avatar} alt={post.author.name} />
                            <div>
                                <h5>{post.author.name}</h5>
                                <p>{post.author.bio || post.author.role}</p>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="sidebar-col">
                        <div className="sidebar">
                            <h5>محتوى المقال</h5>
                            <ul>
                                {headers.map((h, i) => (
                                    <li key={i}>
                                        <a
                                            href={`#${h.id}`}
                                            onClick={(e) => handleSmoothScroll(e, h.id)}
                                        >
                                            {h.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="subscribe-box">
                                <p>📬 اشترك ليصلك كل جديد</p>
                                <button
                                    className="btn"
                                    onClick={() => alert("شكراً لاشتراكك! ستصل أحدث المقالات إلى بريدك.")}
                                >
                                    اشترك الآن
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RELATED POSTS */}
                {relatedPosts.length > 0 && (
                    <div className="related">
                        <h3>مقالات قد تعجبك</h3>
                        <div className="row">
                            {relatedPosts.map((r) => (
                                <div className="col-md-4" key={r.id}>
                                    <Link to={`/blog/${r.slug}`} className="card-related">
                                        <div
                                            className="img"
                                            style={{ backgroundImage: `url(${r.image})` }}
                                        />
                                        <h6>{r.title}</h6>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogDetails;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaRegClock } from 'react-icons/fa';
import './SelectedArticles.css';

/* ---------------------- */
/* Helper Functions       */
/* ---------------------- */
const formatDateArabic = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const arabicDay = day.toString().split('').map(d => arabicNumbers[parseInt(d)]).join('');
    const arabicYear = year.toString().split('').map(y => arabicNumbers[parseInt(y)]).join('');

    const arabicMonths = [
        'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];

    return `${arabicDay} ${arabicMonths[month]} ${arabicYear}`;
};

const extractReadTimeMinutes = (readTimeText) => {
    if (!readTimeText) return null;
    const match = readTimeText.match(/(\d+)/);
    if (!match) return null;
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return arabicNumbers[parseInt(match[1])] || null;
};

/* ---------------------- */
/* Main Component         */
/* ---------------------- */
const SelectedArticles = ({ posts = [] }) => {
    const navigate = useNavigate();

    const goToBlogs = () => {
        navigate('/blogs'); // رابط صفحة البلوجات
    };

    const latestPosts = Array.isArray(posts) ? posts.slice(0, 3) : [];

    return (
        <section className="selected-articles" dir="rtl">
            <div className="container">

                {/* Section Header */}
                <div className="section-header text-end">
                    <span className="hero-badge mb-3 d-inline-flex align-items-center gap-2">
                        <span className="loading-dots"><span></span><span></span></span>
                        مميز
                    </span>

                    <h1 className="section-title">مقالات مختاره</h1>

                    {/* Subtitle + Arrow */}
                    <div className="subtitle-row">
                        <p className="section-subtitle">
                            محتوى منتقى لبدء رحلة تعلمك
                        </p>

                        <div className="arrow-buttons">
                            <button className="arrow-btn" onClick={goToBlogs}>
                                عرض جميع المقالات
                                <FaArrowLeft />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Posts Grid */}
                <div className="posts-grid">
                    {latestPosts.map(post => (
                        <Link to={`/blog/${post.slug}`} className="post-card-link" key={post.id}>
                            <article className="post-card">

                                {/* Post Image */}
                                <div
                                    className="post-image"
                                    style={{
                                        backgroundImage: post.image ? `url(${post.image})` : `url('/placeholder.jpg')`,
                                    }}
                                />
                                {post.category && <span className="post-category-badge">{post.category}</span>}

                                {/* Post Meta */}
                                {(post.readTime || post.date) && (
                                    <div className="post-card-header">
                                        <div className="post-time-date">
                                            {post.readTime && (
                                                <span className="post-read-time">
                                                    <FaRegClock className="read-time-icon" />
                                                    {extractReadTimeMinutes(post.readTime)} دقائق للقراءة
                                                </span>
                                            )}
                                            {post.readTime && post.date && <span className="post-separator">•</span>}
                                            {post.date && <span className="post-date">{formatDateArabic(post.date)}</span>}
                                        </div>
                                    </div>
                                )}

                                {/* Post Content */}
                                <div className="post-card-content">
                                    {post.title && <h3 className="post-title"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>}
                                    {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
                                </div>

                                {/* Author Info */}
                                {post.author && (
                                    <div className="post-author">
                                        <div className="author-info">
                                            {post.author.avatar && (
                                                <div
                                                    className="author-avatar"
                                                    style={{
                                                        backgroundImage: `url(${post.author.avatar})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center'
                                                    }}
                                                />
                                            )}
                                            <div className="author-details">
                                                {post.author.name && <h4 className="author-name">{post.author.name}</h4>}
                                                {post.author.role && <p className="author-role">{post.author.role}</p>}
                                            </div>
                                            <span className="author-arrow">&gt;</span>
                                        </div>
                                    </div>
                                )}

                            </article>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SelectedArticles;

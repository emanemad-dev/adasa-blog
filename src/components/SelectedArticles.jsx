import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegClock } from "react-icons/fa";
import "./SelectedArticles.css";

/* ---------------------- */
/* Helpers                */
/* ---------------------- */

const extractReadTimeMinutes = (readTimeText) => {
    if (!readTimeText) return null;
    const match = readTimeText.match(/(\d+)/);
    if (!match) return null;

    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return arabicNumbers[parseInt(match[1])] || null;
};

/* ---------------------- */
/* Sub Components         */
/* ---------------------- */

const SectionHeader = ({ onShowAll }) => (
    <div className="section-header text-end">
        <span className="hero-badge mb-3 d-inline-flex align-items-center gap-2">
            <span className="loading-dots">
                <span></span><span></span>
            </span>
            مميز
        </span>

        <h1 className="section-title">مقالات مختاره</h1>

        <div className="subtitle-row">
            <p className="section-subtitle">محتوى منتقى لبدء رحلة تعلمك</p>

            <button className="arrow-btn" onClick={onShowAll}>
                عرض جميع المقالات
                <FaArrowLeft />
            </button>
        </div>
    </div>
);

const PostCard = ({ post, onShowAll }) => (
    <div className="post-card-link-wrapper">
        <Link to={`/blog/${post.slug}`} className="post-card-link">
            <article className="post-card">

                <div
                    className="post-image"
                    style={{
                        backgroundImage: `url(${post.image || "/placeholder.jpg"})`
                    }}
                />

                <div className="post-content-wrapper">

                    {post.category && (
                        <span className="post-category-badge">مميز</span>
                    )}

                    {post.category && (
                        <span className="post-category-badge">{post.category}</span>
                    )}

                    {post.readTime && (
                        <div className="post-time-date">
                            <span className="post-read-time">
                                <FaRegClock className="read-time-icon" style={{ marginLeft: '6px' }} />
                                {extractReadTimeMinutes(post.readTime)} دقائق للقراءة
                            </span>
                        </div>
                    )}

                    <div className="post-card-content">
                        {post.title && (
                            <h3 className="post-title">
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>
                        )}

                        {post.excerpt && (
                            <p className="post-excerpt">{post.excerpt}</p>
                        )}
                    </div>

                    {post.author && (
                        <div className="post-author">
                            <div className="author-info">

                                {post.author.avatar && (
                                    <div
                                        className="author-avatar"
                                        style={{
                                            backgroundImage: `url(${post.author.avatar})`
                                        }}
                                    />
                                )}

                                <div className="author-details">
                                    {post.author.name && (
                                        <h4 className="author-name">{post.author.name}</h4>
                                    )}
                                    {post.author.role && (
                                        <p className="author-role">{post.author.role}</p>
                                    )}
                                </div>

                                <button className="arrow-btn" onClick={onShowAll}>
                                    اقرأ المقال
                                    <FaArrowLeft />
                                </button>

                            </div>
                        </div>
                    )}

                </div>
            </article>
        </Link>
    </div>
);

/* ---------------------- */
/* Main Component         */
/* ---------------------- */

const SelectedArticles = ({ posts = [] }) => {
    const navigate = useNavigate();

    const goToBlogs = () => navigate("/blogs");

    const latestPosts = Array.isArray(posts) ? posts.slice(0, 3) : [];

    return (
        <section className="selected-articles" dir="rtl">
            <div className="container">

                <SectionHeader onShowAll={goToBlogs} />

                <div className="posts-grid">
                    {latestPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onShowAll={goToBlogs}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SelectedArticles; 
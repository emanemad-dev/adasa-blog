import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import Newsletter from "../components/Newsletter";
import blogData from "../data/blogs";
import { Categories } from "../components/Categories";
import SelectedArticles from "../components/SelectedArticles";
// import Newsletter from "../components/Newsletter";


function Home() {
    const posts = blogData && blogData.posts ? blogData.posts : [];

    return (
        <>
            <SelectedArticles posts={posts} />
            {/* <section className="home-stats py-5 bg-light" dir="rtl">
                <div className="container">
                    <div className="row g-4 justify-content-center text-center">
                        <div className="col-lg-3 col-md-6">
                            <h2 className="display-4 fw-bold text-primary mb-3">{posts.length}+</h2>
                            <p className="h5 text-muted">مقالة فوتوغرافية</p>
                            <p className="lead">محتوى متخصص</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h2 className="display-4 fw-bold text-success mb-3">{blogData.categories?.length || 0}</h2>
                            <p className="h5 text-muted">فئة</p>
                            <p className="lead">متنوعة</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h2 className="display-4 fw-bold text-warning mb-3">{posts.filter(p => p.featured).length}</h2>
                            <p className="h5 text-muted">مقال</p>
                            <p className="lead">مميز</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📸</div>
                            <p className="h5 text-muted">عدسة Adasa</p>
                            <p className="lead">عالم التصوير</p>
                        </div>
                    </div>
                </div>
            </section> */}
            <Categories />
            <LatestPosts posts={posts.slice(0, 6)} />
            <Newsletter />
        </>
    );
}

export default Home;
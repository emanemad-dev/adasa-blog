import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import { FaCamera, FaHome } from 'react-icons/fa';

function NotFound() {
    return (
        <section className="not-found-section py-5 min-vh-100 d-flex align-items-center" dir="rtl" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="not-found-hero mb-5" style={{ fontSize: '10rem' }}>📸</div>
                        <h1 className="display-1 fw-bold mb-4 text-white">404</h1>
                        <h2 className="display-4 mb-4 text-muted">المقال غير موجود</h2>
                        <p className="lead mb-5 text-white">
                            يبدو أن الصفحة التي تبحث عنها قد اختفت أو انتقلت إلى مكان آخر في المدونة.
                        </p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Link to="/" className="btn btn-primary btn-lg d-flex align-items-center gap-2">
                                <FaHome /> العودة للرئيسية
                            </Link>
                            <Link to="/blogs" className="btn btn-outline-light btn-lg d-flex align-items-center gap-2">
                                <FaCamera /> تصفح المقالات
                            </Link>
                        </div>
                    </div>
                </div>
                <Newsletter />
            </div>
        </section>
    );
}

export default NotFound;

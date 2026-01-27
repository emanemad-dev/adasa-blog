import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaArrowLeft, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import './ContactCTA.css';

const ContactCTA = () => {
    return (
        <section className="contact-cta py-5 text-center text-white" dir="rtl">
            <div className="container">

                <div className="cta-box mx-auto p-4 p-md-5 rounded-4">

                    {/* Title */}
                    <h2 className="fw-bold mb-3">
                        لديك أسئلة؟ دعنا نتحدث!
                    </h2>

                    {/* Description */}
                    <p className="text-light opacity-75 mb-4">
                        نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Link to="/contact" className="btn bg-dark text-white p-3">
                            <FaEnvelope className="ms-2" /> تواصل معنا
                        </Link>

                        <Link to="/blogs" className="btn btn-outline-light p-3">
                            تصفح المقالات <FaArrowLeft className="ms-2" />
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactCTA;

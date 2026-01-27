import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { slug } = useParams();

    return (
        <div>
            <h1>Slug: {slug}</h1>
        </div>
    );
};

export default BlogDetails;

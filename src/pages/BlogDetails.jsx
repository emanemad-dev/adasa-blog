import { useParams } from "react-router-dom";
import blogData from "../data/blogs";
import BlogDetails from "../components/BlogDetails";
import NotFound from "./NotFound";

function BlogDetailsPage() {
    const { slug } = useParams();
    const post = blogData.posts.find(p => p.slug === slug);

    if (!post) {
        return <NotFound />;
    }

    return <BlogDetails post={post} />;
}

export default BlogDetailsPage;

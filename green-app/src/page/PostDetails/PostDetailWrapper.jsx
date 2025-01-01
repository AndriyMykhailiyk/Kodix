import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostDetail from "./PostDetail";

const PostDetailWrapper = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
  
    if (!postId) {
      navigate('/');
    }
  
    return <PostDetail postId={postId} />;
  };

  export default PostDetailWrapper;
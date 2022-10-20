import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Description = () => {
  const params = useParams();
  const [post, setPost] = useState<PostResponse>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });

  useEffect(() => {
    const fetchPostAddDescription = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
      );
      const responsePost = await response.json();
      setPost(responsePost);
    };

    fetchPostAddDescription();
  }, []);

  return <>{post.body}</>;
};

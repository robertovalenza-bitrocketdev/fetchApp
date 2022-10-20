import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Comments = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const fetchPostList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const responsePost = await response.json();
      setPostList(responsePost);
    };

    fetchPostList();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {postList.map((post) => (
        <p
          style={{ cursor: "pointer" }}
          key={post.id}
          onClick={() => {
            setIsOpened(!isOpened);
            navigate(`/${post.id}`);
          }}
        >
          {post.title}
        </p>
      ))}
    </>
  );
};

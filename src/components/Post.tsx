import { useEffect, useState } from "react";

interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Post = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const [openedPost, setOpenedPost] = useState<PostResponse>();
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState<number>();

  const fetchPostAddDescription = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const responsePost = await response.json();
    setOpenedPost(responsePost);
    setSelected(id);
  };

  return (
    <>
      {postList.map((post) => (
        <p
          style={{ cursor: "pointer" }}
          key={post.id}
          onClick={() => {
            fetchPostAddDescription(post.id);
            setIsOpened(!isOpened);
          }}
        >
          {post.title}
        </p>
      ))}
    </>
  );
};

export default Post;

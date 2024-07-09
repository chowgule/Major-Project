import { useEffect, useState } from "react";
import Post from "..//components/Post";
import axios from "axios";

interface PostType {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

const PostCardList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    console.log(import.meta.env.VITE_APP_ID);

    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((response) => {
        const responseObject: { data: PostType[] } = response.data;
        setPosts([...responseObject.data]);
      });
  }, []);

  return posts.length === 0
    ? "loading..."
    : posts.map((post) => (
        <Post
          key={post.id}
          content={post.text}
          image={post.image}
          authorFirstName={post.owner.firstName}
        />
      ));
};

export default PostCardList;

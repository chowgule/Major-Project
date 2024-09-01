import { usePostsContext } from "../providers/PostsProvider";
import Post from "../components/Post";
import React from "react";

const PostCardList = () => {
  const { products, setProducts } = usePostsContext();

  return products.length === 0
    ? "loading..."
    : products.map((product) => (
        <Post
          key={product.id}
          content={product.title}
          image={product.image}
          authorFirstName={product.category} // Temporarily using category as an author placeholder
        />
      ));
};

export default React.memo(PostCardList);

// * prvious code

// import { useContext, useEffect } from "react";
// import Post from "../components/Post";
// import axios from "axios";
// import PostsContext from "../providers/PostsProvider";

// interface ProductType {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   category: string;
// }

// const PostCardList = () => {
//   // const [products, setProducts] = useState<ProductType[]>([]);
//   const { products, setProducts } = useContext(PostsContext);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   return products.length === 0
//     ? "loading..."
//     : products.map((product) => (
//         <Post
//           key={product.id}
//           content={product.title}
//           image={product.image}
//           authorFirstName={product.category} // Temporarily using category as an author placeholder
//         />
//       ));
// };

// export default PostCardList;

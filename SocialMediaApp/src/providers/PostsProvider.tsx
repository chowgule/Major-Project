import React, { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

// Define the ProductType interface
interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

// Define the context type
interface PostsContextType {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

// Create the context with a default value
const PostsContext = createContext<PostsContextType | undefined>(undefined);

// Create the provider component
export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <PostsContext.Provider value={{ products, setProducts }}>
      {children}
    </PostsContext.Provider>
  );
};

// Custom hook to use the PostsContext
export const usePostsContext = () => {
  const context = React.useContext(PostsContext);
  if (!context) {
    throw new Error("usePostsContext must be used within a PostsProvider");
  }
  return context;
};

export default PostsContext;

//*previous code

// import { createContext } from "react";

// const PostsContext = createContext([]);

// export default PostsContext;

// import React, { useState } from "react";
// import PostContext from "./PostContext";

// const PostProvider = ({ children }) => {
//   const [posts, setPosts] = useState([]);

//   return (
//     <PostContext.Provider value={{ posts, setPosts }}>
//       {children}
//     </PostContext.Provider>
//   );
// };

// export default PostProvider;

import { Button, Input, Stack, Text, Box, Image } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState, useCallback } from "react";
import PostsContext from "../providers/PostsProvider";
import React from "react";

const TextField = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("TextField must be used within a PostsProvider");
  }

  const { products, setProducts } = context;

  const createPost = useCallback(async () => {
    if (!title || !price || !description || !imageUrl || !category) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(parseFloat(price))) {
      setError("Price must be a valid number.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        title: title.trim(),
        price: parseFloat(price),
        description: description.trim(),
        image: imageUrl.trim(),
        category: category.trim(),
      });

      console.log("Product created successfully:", response.data);
      setProducts([response.data, ...products]);

      setError(null);

      // Reset form fields
      setTitle("");
      setPrice("");
      setDescription("");
      setImageUrl("");
      setCategory("");
    } catch (err) {
      console.error("Error creating product:", err);
      setError("Failed to create product. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [title, price, description, imageUrl, category, products, setProducts]);

  return (
    <>
      <Stack spacing={3}>
        <Input
          variant="outline"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          variant="outline"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          variant="outline"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          variant="outline"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Input
          variant="outline"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Stack>

      {error && <Text color="red.500">{error}</Text>}

      <Button colorScheme="blue" onClick={createPost} isDisabled={loading}>
        {loading ? "Creating..." : "Submit"}
      </Button>

      {/* Display the list of products */}
      <Stack spacing={5} mt={5}>
        {products.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px">
            <Text fontWeight="bold">{product.title}</Text>
            <Text>Price: ${product.price}</Text>
            <Text>{product.description}</Text>
            {product.image && (
              <Image
                src={product.image}
                alt={product.title}
                onError={(e) => {
                  e.currentTarget.onerror = null; // prevents looping
                  e.currentTarget.src = "path/to/default/image.jpg"; // fallback image
                }}
              />
            )}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default React.memo(TextField);

// * previous code

// import { Button, Input, Stack, Text, Box, Image } from "@chakra-ui/react";
// import axios from "axios";
// import { useContext, useState } from "react";
// // import PostCardContext from "../providers/PostsProvider";
// import PostsContext from "../providers/PostsProvider";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   category: string;
// }

// const TextField = () => {
//   const [title, setTitle] = useState<string>("");
//   const [price, setPrice] = useState<string>("");
//   const [description, setDescription] = useState<string>("");
//   const [imageUrl, setImageUrl] = useState<string>("");
//   const [category, setCategory] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const { products, setProducts } = useContext(PostsContext);

//   async function createPost() {
//     if (!title || !price || !description || !imageUrl || !category) {
//       setError("All fields are required.");
//       return;
//     }

//     if (isNaN(parseFloat(price))) {
//       setError("Price must be a valid number.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post<Product>(
//         "https://fakestoreapi.com/products",
//         {
//           title: title.trim(),
//           price: parseFloat(price),
//           description: description.trim(),
//           image: imageUrl.trim(),
//           category: category.trim(),
//         }
//       );

//       console.log("Product created successfully:", response.data);
//       setProducts([...products, response.data]);

//       setError(null);

//       // Reset form fields
//       setTitle("");
//       setPrice("");
//       setDescription("");
//       setImageUrl("");
//       setCategory("");
//     } catch (err) {
//       console.error("Error creating product:", err);
//       setError("Failed to create product. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <>
//       <Stack spacing={3}>
//         <Input
//           variant="outline"
//           placeholder="Product Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <Input
//           variant="outline"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <Input
//           variant="outline"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <Input
//           variant="outline"
//           placeholder="Image URL"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//         />
//         <Input
//           variant="outline"
//           placeholder="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         />
//       </Stack>

//       {error && <Text color="red.500">{error}</Text>}

//       <Button colorScheme="blue" onClick={createPost} isDisabled={loading}>
//         {loading ? "Creating..." : "Submit"}
//       </Button>

//       {/* Display the list of products */}
//       <Stack spacing={5} mt={5}>
//         {products.map((product: Product) => (
//           <Box key={product.id} p={5} shadow="md" borderWidth="1px">
//             <Text fontWeight="bold">{product.title}</Text>
//             <Text>Price: ${product.price}</Text>
//             <Text>{product.description}</Text>
//             {product.image && (
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 onError={(e) => {
//                   e.currentTarget.onerror = null; // prevents looping
//                   e.currentTarget.src = "path/to/default/image.jpg"; // fallback image
//                 }}
//               />
//             )}
//           </Box>
//         ))}
//       </Stack>
//     </>
//   );
// };

// export default TextField;

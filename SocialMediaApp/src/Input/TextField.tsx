import { Button, Input, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const TextField = () => {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createPost() {
    if (!postText || !imageUrl) {
      setError("Post text and image URL cannot be empty.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://dummyapi.io/data/v1/post/create",
        {
          owner: "66ab79645f7fd859863c86f5", // Replace with a valid owner ID
          text: postText.trim(),
          image: imageUrl.trim(),
          tags: tags.split(","),
          likes: 0, // Optional, set to 0 if required by the API
        },
        {
          headers: {
            "Content-Type": "application/json",
            "app-id": import.meta.env.VITE_APP_ID, // Ensure this is correctly set in your environment variables
          },
        }
      );

      console.log("Post created successfully:", response.data);
      // You might want to clear the input fields and reset the loading state here
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Stack spacing={3}>
        <Input
          variant="outline"
          placeholder="Your Next Post"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <Input
          variant="outline"
          placeholder="Image URL for your Post"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <Input
          variant="outline"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </Stack>

      {error && <Text color="red.500">{error}</Text>}

      <Button colorScheme="blue" onClick={createPost} isDisabled={loading}>
        Submit
      </Button>
    </>
  );
};

export default TextField;

import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";

import { createIcon } from "@chakra-ui/icon";

import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

interface PostProps {
  authorFirstName: string;
  image: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ authorFirstName, image, content }) => {
  const OutlinedStarIcon = createIcon({
    displayName: "OutlinedStarIcon",
    viewBox: "0 0 24 24",
    path: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    ),
  });
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      <Card maxW="md">
        <CardHeader>
          <Flex gap="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                name={authorFirstName.substring(0, 1)}
                src="https://bit.ly/sage-adebayo"
              />

              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{content}</Text>
        </CardBody>
        <Image objectFit="cover" src={image} alt="Chakra UI" />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          {isLiked ? (
            <OutlinedStarIcon onClick={() => setIsLiked(!isLiked)} />
          ) : (
            <StarIcon color="red" onClick={() => setIsLiked(!isLiked)} />
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Post;

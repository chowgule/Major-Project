import {
  Avatar,
  Box,
  Button,
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

import { BiLike } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

interface PostProps {
  authorFirstName: string;
  image: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ authorFirstName, image, content }) => {
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
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Post;

import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import PostCardList from "../PostCardList/PostCardList";

const MainContainer = () => {
  return (
    <Box p={4} justifyContent="center">
      <Grid
        templateColumns="auto 1fr"
        gap={4}
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>
          <Text fontSize="xl" fontWeight="bold">
            1
          </Text>
        </GridItem>
        <GridItem>
          <PostCardList />
        </GridItem>
      </Grid>
      <Grid
        templateColumns="auto 1fr"
        gap={4}
        alignItems="center"
        justifyContent="center"
        mt={6}
      ></Grid>
      {/* Add more posts as needed */}
    </Box>
  );
};

export default MainContainer;

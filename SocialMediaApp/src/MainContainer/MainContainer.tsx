import { Grid, GridItem, Box } from "@chakra-ui/react";
import PostCardList from "../PostCardList/PostCardList";
import UserList from "../UserList/UserList";

const MainContainer = () => {
  return (
    <Box display="flex">
      <Grid
        templateColumns="auto 1fr"
        gap={4}
        alignItems="start"
        justifyContent="center"
      >
        <GridItem>
          <UserList />
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

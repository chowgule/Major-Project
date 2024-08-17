import { List, ListItem } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface UserType {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((response) => {
        const responseObject: { data: UserType[] } = response.data;
        setUsers([...responseObject.data]);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return users.length === 0 ? (
    "loading..."
  ) : (
    <div>
      <List spacing={3}>
        {users.map((user) => (
          <ListItem key={user.id} id={`user-${user.id}`}>
            {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
            <img
              src={user.picture}
              alt={`${user.firstName} ${user.lastName}`}
              style={{ width: "50px", borderRadius: "50%" }}
            />
            <p>{`${user.title} ${user.firstName} ${user.lastName}`}</p>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;

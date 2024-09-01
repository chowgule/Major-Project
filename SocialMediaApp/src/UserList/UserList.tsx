import { List, ListItem } from "@chakra-ui/react";
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
    // Placeholder users
    const placeholderUsers: UserType[] = [
      {
        id: "1",
        title: "Mr.",
        firstName: "John",
        lastName: "Doe",
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: "2",
        title: "Ms.",
        firstName: "Jane",
        lastName: "Doe",
        picture: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      // Add more users as needed
    ];

    setUsers(placeholderUsers);
  }, []);

  return users.length === 0 ? (
    "loading..."
  ) : (
    <div>
      <List spacing={3}>
        {users.map((user) => (
          <ListItem key={user.id} id={`user-${user.id}`}>
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

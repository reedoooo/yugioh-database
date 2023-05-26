// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Collapse,
//   Grid,
//   GridItem,
//   Text,
//   useDisclosure,
//   useHover,
// } from "@chakra-ui/react";

// function UsersGrid() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const { isOpen, onToggle } = useDisclosure();

//   const getUsers = async () => {
//     const token = localStorage.getItem("token");
//     const response = await fetch("/users", {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Get users failed");
//     }

//     const data = await response.json();
//     setUsers(data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const UserRow = ({ user }) => {
//     const { hoverRef, isHovered } = useHover();

//     return (
//       <GridItem
//         ref={hoverRef}
//         cursor="pointer"
//         onClick={() => {
//           setSelectedUser(user);
//           onToggle();
//         }}
//         bg={isHovered ? "lightblue" : "white"}
//         transition="background-color 0.3s"
//       >
//         <Box p={4}>
//           <Text fontSize="lg">{user.name}</Text>
//         </Box>
//       </GridItem>
//     );
//   };

//   return (
//     <Box>
//       <Grid templateColumns="repeat(1, 1fr)" gap={6}>
//         {users.map((user) => (
//           <UserRow key={user.id} user={user} />
//         ))}
//       </Grid>
//       <Collapse in={isOpen}>
//         <Box p={4} color="white" mt="4" bg="teal.500">
//           <Text fontSize="lg">
//             Selected User: {selectedUser && selectedUser.name}
//           </Text>
//           <Text fontSize="lg">
//             Email: {selectedUser && selectedUser.email}
//           </Text>
//           <Text fontSize="lg">
//             Username: {selectedUser && selectedUser.username}
//           </Text>
//         </Box>
//       </Collapse>
//     </Box>
//   );
// }

// export default UsersGrid;

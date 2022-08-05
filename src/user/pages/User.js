import React from "react";
import UsersList from "../components/UsersList";

const user = () => {
  const USERS = [
    {
      id: "u1",
      name: "hamza",
      image:
        "https://196034-584727-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/03/teacher-resume-photo.jpg",
      places: 4
    }
  ];

  return <UsersList items={USERS} />;
};

export default user;

// react
import { useState } from "react";

function useMembers(initial_members) {
  const [members, setMembers] = useState(initial_members);
  const add_member = ({ name, description, favorite_fruit }) => {
    setMembers(
      members.concat({
        name,
        description,
        favorite_fruit,
      })
    );
  };
  return { members, add_member };
}

export default useMembers;

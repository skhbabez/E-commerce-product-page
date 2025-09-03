import { useContext } from "react";
import Avatar from "../avatar";
import ImageLink from "../imageLink";
import { UserCtx } from "../../context/userContext";

// Use A router for next project
const Header = () => {
  const { user, setUser } = useContext(UserCtx);
  return (
    <header>
      <ImageLink href="#">
        <Avatar alt="User Avatar" src={user.avatar}></Avatar>
      </ImageLink>
    </header>
  );
};

export default Header;

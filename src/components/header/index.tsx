import Avatar from "../avatar";
import ImageLink from "../imageLink";
import styles from "./Header.module.css";
// Use A router for next project
const Header = () => {
  return (
    <header>
      <ImageLink href="#">
        <Avatar alt="User Avatar" src="public/images/image-avatar.png"></Avatar>
      </ImageLink>
    </header>
  );
};

export default Header;

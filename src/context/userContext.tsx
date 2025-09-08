import {
  createContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import type { User } from "../types";

// https://stackoverflow.com/questions/73526249/how-to-fix-the-object-passed-as-the-value-prop-to-the-context-provider-changes
// https://react.dev/reference/react/createContext
// https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component

const userDefault = {
  id: 1,
  avatar: "images/image-avatar.png",
};

interface UserCtxType {
  user: User;
  setUser: (user: User) => void;
}

const UserCtx = createContext<UserCtxType>({
  user: userDefault,
  setUser: () => {
    console.log(`User not set`);
  },
});

const UserCtxProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>(userDefault);
  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );
  return <UserCtx value={value}>{children}</UserCtx>;
};

export { UserCtx, UserCtxProvider };

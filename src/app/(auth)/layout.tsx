import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="">
      <div className=" p-10 rounded-md">{children}</div>
    </div>
  );
};

export default AuthLayout;

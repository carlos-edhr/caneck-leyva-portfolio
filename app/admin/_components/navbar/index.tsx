// import { UserMenu } from "@/components/user-menu";
import { Actions } from "./actions";
import { Logo } from "./logo";
import { Search } from "./search";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-stone-100 px-2 lg:px-4 flex justify-between items-center shadow-sm border border-b-2">
      <Logo />
      {/* <Search /> */}
      <Actions />
      {/* <UserMenu /> */}
    </nav>
  );
};

export default Navbar;

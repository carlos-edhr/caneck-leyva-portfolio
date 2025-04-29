import { Button } from "@/components/ui/button";
// import { currentUser } from "@/lib/auth";
import { Clapperboard, Undo2 } from "lucide-react";
import Link from "next/link";
// import { UserButton } from "@/components/auth/user-button";
// import { SignInButton } from "@/components/auth/sign-in-button";

export const Actions = async () => {
  // const user = await currentUser();

  // console.log("Transimisiones: --->>> ", { user });
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {/* {!user && <SignInButton />} */}
      {/* {user?.role === "STREAMER" && (
        <div className="flex items-center gap-x-4 ">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Creator Dashboard</span>
            </Link>
          </Button> */}
      {/* <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
};
// {user?.role === "ADMIN" && (
//   <div className="flex items-center gap-x-4 ">
//     <Button
//       size="sm"
//       variant="ghost"
//       className="text-muted-foreground hover:text-primary"
//       asChild
//     >
//       <Link href={`/home`}>
//         <Undo2 className="h-5 w-5 lg:mr-2" />
//         <span className="hidden lg:block">Return</span>
//       </Link>
//     </Button>
{
  /* <UserButton afterSignOutUrl="/" /> */
}
// </div>
// )}
// </div>
//   );
// };

// import { getUser } from "@/queries/user";
import { Suspense } from "react";
import { Login } from "../login";
// import { redirect } from "next/navigation";

export default async function SignUpPage() {
  // const user = await getUser();
  // if (user) {
  //   return redirect("/app");
  // }

  return (
    <Suspense>
      <Login mode="signup" />
    </Suspense>
  );
}

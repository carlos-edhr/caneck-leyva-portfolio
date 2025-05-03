import { redirect } from "next/navigation";
import { Login } from "../login";
import { getUser } from "@/queries/user";
import { Suspense } from "react";
export default async function SignInPage() {
  // const user = await getUser();
  // if (user) {
  //   return redirect("/app");
  // }

  return (
    <Suspense>
      <Login mode="signin" />
    </Suspense>
  );
}

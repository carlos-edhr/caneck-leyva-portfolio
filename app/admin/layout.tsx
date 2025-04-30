import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Container } from "./_components/container";
import Navbar from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
// import { ModalProvider } from "@/components/providers/modal-provider";
// import { currentUser } from "@/lib/auth";
import DashboardFooter from "./_components/dashboard-footer";

// interface BrowseLayoutProps {
//   params: { username: string };
//   children: React.ReactNode;
// }

const BrowseLayout = async () =>
  // { params, children }: BrowseLayoutProps
  {
    // try {
    //   const self = await currentUser();
    // } catch {
    //   redirect("/auth/login");
    // }

    return (
      <>
        {/* <Navbar />
      <div className="flex h-full pt-20 bg-white">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>

        <Container>{children}</Container>
      </div> */}
      </>
    );
  };

export default BrowseLayout;

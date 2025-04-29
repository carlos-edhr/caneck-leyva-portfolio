// import { getRecommended } from "@/lib/recommended-service";
// import { Recommended, RecommendedSkeleton } from "./recommended";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";
// import { Following, FollowingSkeleton } from "./following";
import Options from "./options";
export const Sidebar = async () => {
  // const recommended = await getRecommended();
  // const following = await getFollowedUsers();
  return (
    <Wrapper>
      <Toggle />
      <div className="font-roboto pt-1 lg:pt-0 ">
        <Options />
        {/* <Following data={following} />
        <Recommended data={recommended} /> */}
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-stone-200 border-r border-[#2d2e35] bg-opacity-50 z-50">
      <ToggleSkeleton />
      {/* <FollowingSkeleton /> */}
      {/* <RecommendedSkeleton /> */}
    </aside>
  );
};

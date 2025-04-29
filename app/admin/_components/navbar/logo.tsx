import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className=" p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/logos/logo.png"
            alt="Astrofoto-logo"
            height="125"
            width="75"
          />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="font-roboto text-lg font-extralight text-slate-950 ">
            Caneck Leyva
          </p>
          <p className="font-roboto text-xs text-muted-foreground text-primaryLanding">
            Professional Portfolio
          </p>
        </div>
      </div>
    </Link>
  );
};

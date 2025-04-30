import dynamic from "next/dynamic";
// import { Separator } from "@/components/ui/separator";
import DashboardHeader from "../_components/dashboard-header";
import DashboardFooter from "../_components/dashboard-footer";

import EmailsTable from "../_components/emails-table";
import SendEmail from "../_components/send-email";
import { Separator } from "@/components/ui/separator";

const EmailsPage = () => {
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Emails"}
        subtitle={"Send emails and check previously sent emails."}
      />
      {/* TABLA */}

      <SendEmail />
      <Separator className="w-full h-[1px] m-7 bg-slate-800 mt-8" />
      <EmailsTable />
      <DashboardFooter />
    </div>
  );
};

export default EmailsPage;

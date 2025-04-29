import dynamic from "next/dynamic";
// import { Separator } from "@/components/ui/separator";
import DashboardHeader from "../_components/dashboard-header";
import DashboardFooter from "../_components/dashboard-footer";

import EmailsTable from "../_components/emails-table";

const EmailsPage = () => {
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Sistema de automatización de emails"}
        subtitle={
          "Aquí puedes revisar y modificar información sobre los eventos agendados en la aplicación."
        }
      />
      {/* TABLA */}
      <EmailsTable />
      <DashboardFooter />
    </div>
  );
};

export default EmailsPage;

import dynamic from "next/dynamic";
// import { Separator } from "@/components/ui/separator";
import DashboardHeader from "../_components/dashboard-header";
import DashboardFooter from "../_components/dashboard-footer";

import VentasTable from "../_components/ventas-table";

const AdminDashboard = () => {
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Administración de Ventas"}
        subtitle={"Aquí puedes revisar las ventas realizadas en la aplicación."}
      />
      {/* TABLA */}
      <VentasTable />
      <DashboardFooter />
    </div>
  );
};

export default AdminDashboard;

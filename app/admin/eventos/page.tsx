import dynamic from "next/dynamic";
// import { Separator } from "@/components/ui/separator";
import DashboardHeader from "../_components/dashboard-header";
import DashboardFooter from "../_components/dashboard-footer";
import {
  Eye,
  DollarSign,
  Package,
  Users,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import ProductTable from "../_components/product-table";
// import AnalyticsDashboard from "../_components/analytics-section";
import EventsTable from "../_components/events-table";

const AdminDashboard = () => {
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Administración de Eventos"}
        subtitle={
          "Aquí puedes revisar y modificar información sobre los eventos agendados en la aplicación."
        }
      />
      {/* TABLA */}
      {/* <EventsTable /> */}
      <DashboardFooter />
    </div>
  );
};

export default AdminDashboard;

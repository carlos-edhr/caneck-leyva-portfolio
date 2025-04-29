import dynamic from "next/dynamic";
// import { Separator } from "@/components/ui/separator";
import DashboardHeader from "../_components/dashboard-header";
import DashboardFooter from "../_components/dashboard-footer";
import UsersTable from "../_components/users-table";

const UsersDashboard = () => {
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Administración de Usuarios"}
        subtitle={
          "Revisa información acerca de los usuarios registrados en la plataforma, modifica sus privilegios e invita a nuevos usuarios."
        }
      />
      {/* TABLA */}
      <UsersTable />
      <DashboardFooter />
    </div>
  );
};

export default UsersDashboard;

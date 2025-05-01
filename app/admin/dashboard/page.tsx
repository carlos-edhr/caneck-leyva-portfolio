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
// import { WeekChart } from "../_components/week-chart";
import ProductTable from "../_components/product-table";
// import AnalyticsDashboard from "../_components/analytics-section";
import { Separator } from "@/components/ui/separator";
import GalleryTable from "../_components/gallery-table";
import LandingPageControls from "../_components/landing-page-controls";

// Dynamically import the chart component with SSR disabled
// const PaymentsChart = dynamic(
//   () =>
//     import("../_components/payments-chart").then((mod) => mod.PaymentsChart),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="h-80 bg-stone-700/50 animate-pulse rounded-lg" />
//     ),
//   },
// );

const stats = [
  {
    title: "Usuarios Activos",
    value: "3.5K",
    icon: Eye,
    percentage: "0.43%",
    trend: "up",
  },
  {
    title: "Ganancias Totales",
    value: "$4.2K",
    icon: DollarSign,
    percentage: "4.33%",
    trend: "up",
  },
  {
    title: "Productos Totales",
    value: "3.5K",
    icon: Package,
    percentage: "2.59%",
    trend: "up",
  },
  {
    title: "Ventas Totales",
    value: "3.5K",
    icon: Users,
    percentage: "0.99%",
    trend: "down",
  },
];

const AdminDashboard = () => {
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto text-slate-950">
      <DashboardHeader
        title={"Caneck Leyva"}
        subtitle={"Professional Photography Porfolio Website. "}
      />
      {/* MAIN DASHBOARD SECTION HERE */}
      {/* TABLA */}
      {/* <ProductTable /> */}
      <GalleryTable />
      {/* <Separator className="w-full h-[1px] m-7 bg-slate-800 mt-8" /> */}
      {/* Payments Overview Section */}
      {/* <div className="bg-stone-800 p-6 rounded-lg shadow-sm border border-slate-700 mb-12">
        {/* <h2 className="text-xl font-semibold mb-6">Pagos por mes</h2> */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-14"> */}
      {/* Left Column Content */}
      {/* <PaymentsChart /> */}
      {/* <WeekChart /> */}
      {/* Right Column - Chart */}
      {/* <h2 className="text-xl font-semibold mb-6">Pagos por semana</h2> */}
      {/* <WeekChart /> */}
      {/* </div> */}
      {/* </div>  */}
      {/* <Separator className="w-full h-[1px] m-7 bg-slate-800 mt-8" /> */}
      {/* // Add this section after your metrics cards */}
      <Separator className="w-full h-[1px] m-7 bg-slate-800 mt-8" />
      <LandingPageControls />
      {/* <AnalyticsDashboard /> */}
      <Separator className="w-full h-[1px] m-7 bg-slate-800 mt-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <img src="https://ttwxbitlxritmxvslrik.supabase.co/storage/v1/object/public/portfolio-gallery//20.jpg" />
        <img src="/img/3.jpg" />
        <img src="/img/6.jpg" />
        <img src="/img/12.jpg" />
        <img src="/img/13.jpg" />
        <img src="/img/8.jpg" />
      </div>

      <DashboardFooter />
    </div>
  );
};

export default AdminDashboard;

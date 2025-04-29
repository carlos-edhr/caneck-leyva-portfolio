// // week-chart.tsx
// "use client";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
//   Tooltip,
//   Legend,
//   Label,
//   CartesianGrid,
//   LabelList,
// } from "recharts";

// // Datos de ejemplo para ventas diarias
// const weeklyData = [
//   { day: "Lun", sales: 45 },
//   { day: "Mar", sales: 68 },
//   { day: "Mié", sales: 72 },
//   { day: "Jue", sales: 55 },
//   { day: "Vie", sales: 90 },
//   { day: "Sáb", sales: 120 },
//   { day: "Dom", sales: 85 },
// ];

// // Tooltip personalizado
// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-stone-700 p-4 rounded-lg shadow-lg border border-slate-600">
//         <p className="font-medium text-slate-300">{label}</p>
//         <div className="mt-2 space-y-1">
//           <p className="text-blue-400">
//             Ventas: <span className="ml-2">{payload[0].value}</span>
//           </p>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

// export const WeekChart = (): JSX.Element => {
//   return (
//     <div className="h-80">
//       <h2 className="text-xl font-semibold mb-6">Ventas por semana</h2>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={weeklyData}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

//           <XAxis
//             dataKey="day"
//             stroke="#64748b"
//             tick={{
//               fill: "#94a3b8",
//               fontSize: 12,
//             }}
//             tickLine={{ stroke: "#64748b" }}
//           >
//             <Label
//               value="Día de la semana"
//               offset={-5}
//               position="insideBottom"
//               fill="#94a3b8"
//               className="text-sm"
//             />
//           </XAxis>

//           <YAxis
//             stroke="#64748b"
//             tick={{
//               fill: "#94a3b8",
//               fontSize: 12,
//             }}
//             tickLine={{ stroke: "#64748b" }}
//           >
//             <Label
//               value="Número de ventas"
//               angle={-90}
//               position="insideLeft"
//               fill="#94a3b8"
//               className="text-sm"
//               offset={10}
//             />
//           </YAxis>

//           <Tooltip
//             content={<CustomTooltip />}
//             cursor={{ fill: "#1e293b", opacity: 0.5 }}
//           />

//           <Legend
//             wrapperStyle={{ paddingTop: 20 }}
//             formatter={(value) => (
//               <span className="text-slate-300 text-sm">{value}</span>
//             )}
//           />

//           <Bar
//             dataKey="sales"
//             name="Ventas diarias"
//             fill="#3b82f6"
//             radius={[4, 4, 0, 0]}
//             barSize={20}
//           >
//             <LabelList
//               dataKey="sales"
//               position="top"
//               fill="#3b82f6"
//               className="text-xs"
//             />
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

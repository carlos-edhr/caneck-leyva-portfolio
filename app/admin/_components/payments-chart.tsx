// // app/_components/payments-chart.tsx
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

// const monthlyData = [
//   { month: "Jan", received: 65, due: 45 },
//   { month: "Feb", received: 59, due: 48 },
//   { month: "Mar", received: 80, due: 65 },
//   { month: "Apr", received: 81, due: 60 },
//   { month: "May", received: 56, due: 52 },
//   { month: "Jun", received: 55, due: 58 },
//   { month: "Jul", received: 40, due: 35 },
//   { month: "Aug", received: 50, due: 68 },
//   { month: "Sep", received: 30, due: 25 },
//   { month: "Oct", received: 45, due: 35 },
//   { month: "Nov", received: 60, due: 45 },
//   { month: "Dec", received: 70, due: 50 },
// ];

// // Custom Tooltip component
// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-stone-700 p-4 rounded-lg shadow-lg border border-slate-600">
//         <p className="font-medium text-slate-300">{label}</p>
//         <div className="mt-2 space-y-1">
//           <p className="text-blue-400">
//             Received: <span className="ml-2">${payload[0].value}</span>
//           </p>
//           <p className="text-slate-400">
//             Due: <span className="ml-2">${payload[1].value}</span>
//           </p>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

// export const PaymentsChart = (): JSX.Element => {
//   return (
//     <div className="h-80">
//       <h2 className="text-xl font-semibold mb-6">Ganancias por mes</h2>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={monthlyData}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

//           <XAxis
//             dataKey="month"
//             stroke="#64748b"
//             tick={{
//               fill: "#94a3b8",
//               fontSize: 12,
//             }}
//             tickLine={{ stroke: "#64748b" }}
//           >
//             <Label
//               value="Mes"
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
//             tickFormatter={(value) => `$${value}`}
//           >
//             <Label
//               value="Cantidad ($)"
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
//             dataKey="received"
//             name="Received Amount"
//             fill="#3b82f6"
//             radius={[4, 4, 0, 0]}
//             barSize={20}
//           >
//             <LabelList
//               dataKey="received"
//               position="top"
//               fill="#3b82f6"
//               formatter={(value: number) => `$${value}`}
//               className="text-xs"
//             />
//           </Bar>

//           <Bar
//             dataKey="due"
//             name="Due Amount"
//             fill="#94a3b8"
//             radius={[4, 4, 0, 0]}
//             barSize={20}
//           >
//             <LabelList
//               dataKey="due"
//               position="top"
//               fill="#94a3b8"
//               formatter={(value: number) => `$${value}`}
//               className="text-xs"
//             />
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

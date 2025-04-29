// // app/admin/_components/analytics-section.tsx
// "use client";
// import { useEffect, useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// type TimeSeriesData = {
//   date: string;
//   visitors: number;
// };
// type CountryData = {
//   country: string;
//   code: string;
//   count: number;
//   coordinates: [number, number];
// };

// export default function AnalyticsDashboard() {
//   const [visitors, setVisitors] = useState(0);
//   const [countryData, setCountryData] = useState<CountryData[]>([]);
//   const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesData[]>([]);
//   const [tooltip, setTooltip] = useState<{
//     content: string;
//     x: number;
//     y: number;
//   } | null>(null);

//   useEffect(() => {
//     // Replace with actual API call
//     const mockData = {
//       totalVisits: 4521,
//       countries: [
//         {
//           country: "United States",
//           code: "US",
//           count: 1200,
//           coordinates: [-95.7129, 37.0902] as [number, number],
//         },
//         {
//           country: "Spain",
//           code: "ES",
//           count: 800,
//           coordinates: [-3.7492, 40.4637] as [number, number],
//         },
//         {
//           country: "France",
//           code: "FR",
//           count: 600,
//           coordinates: [2.2137, 46.2276] as [number, number],
//         },
//       ],
//       timeSeries: [
//         { date: "2024-01", visitors: 400 },
//         { date: "2024-02", visitors: 1200 },
//         { date: "2024-03", visitors: 800 },
//       ],
//     };

//     setVisitors(mockData.totalVisits);
//     setCountryData(mockData.countries);
//     setTimeSeriesData(mockData.timeSeries);
//   }, []);

//   return (
//     <div className="grid gap-6">
//       {/* Top Row - Total Visitors and Map */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <Card className="bg-stone-800 border-slate-700">
//           <CardHeader>
//             <CardTitle className="text-slate-300">Used Devices</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="relative w-full h-48 flex items-center justify-center">
//               {/* Circular Progress Chart */}
//               <svg className="w-32 h-32 transform -rotate-90">
//                 {/* Background Circle */}
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="45"
//                   className="fill-none stroke-slate-700"
//                   strokeWidth="8"
//                 />
//                 {/* Desktop Segment */}
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="45"
//                   className="fill-none stroke-blue-500"
//                   strokeWidth="8"
//                   strokeDasharray={`${2 * Math.PI * 45}`}
//                   strokeDashoffset={`${2 * Math.PI * 45 * 0.35}`} // 65% (100% - 65% = 35% offset)
//                 />
//                 {/* Mobile Segment */}
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="45"
//                   className="fill-none stroke-green-500"
//                   strokeWidth="8"
//                   strokeDasharray={`${2 * Math.PI * 45}`}
//                   strokeDashoffset={`${2 * Math.PI * 45 * 0.8}`} // 20% (100% - 65% - 20% = 15% remaining)
//                 />
//                 {/* Tablet Segment */}
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="45"
//                   className="fill-none stroke-purple-500"
//                   strokeWidth="8"
//                   strokeDasharray={`${2 * Math.PI * 45}`}
//                   strokeDashoffset={`${2 * Math.PI * 45 * 0.9}`} // 10%
//                 />
//               </svg>

//               {/* Center Text */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                 <div className="text-2xl font-bold text-blue-400">30,000</div>
//                 <div className="text-sm text-slate-400">Total Visits</div>
//               </div>
//             </div>

//             {/* Legend */}
//             <div className="grid grid-cols-3 gap-4 mt-4 text-center">
//               <div className="flex items-center justify-center gap-2">
//                 <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//                 <span className="text-slate-300 text-sm">Desktop 65%</span>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
//                 <span className="text-slate-300 text-sm">Tablet 10%</span>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 <span className="text-slate-300 text-sm">Mobile 20%</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-stone-800 border-slate-700 h-96">
//           <CardHeader>
//             <CardTitle className="text-slate-300">
//               Visitors by Country
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="relative h-[calc(100%-3.5rem)]">
//             <div className="w-full h-full relative">
//               <ComposableMap projection="geoMercator" className="w-full h-full">
//                 <Geographies geography={geoUrl}>
//                   {({ geographies }) =>
//                     geographies.map((geo) => {
//                       const country = countryData.find(
//                         (c) => c.code === geo.properties.iso_a2,
//                       );
//                       return (
//                         <Geography
//                           key={geo.rsmKey}
//                           geography={geo}
//                           fill={country ? "#3b82f6" : "#334155"}
//                           stroke="#64748b"
//                           strokeWidth={0.5}
//                           style={{
//                             default: { outline: "none" },
//                             hover: {
//                               fill: "#60a5fa",
//                               outline: "none",
//                             },
//                           }}
//                           onMouseMove={(event) => {
//                             const rect = (
//                               event.target as SVGGElement
//                             ).getBoundingClientRect();
//                             setTooltip({
//                               content: geo.properties.name,
//                               x: event.clientX - rect.left,
//                               y: event.clientY - rect.top,
//                             });
//                           }}
//                           onMouseLeave={() => setTooltip(null)}
//                         />
//                       );
//                     })
//                   }
//                 </Geographies>
//                 {countryData.map(({ coordinates, count }) => (
//                   <Marker key={coordinates.join(",")} coordinates={coordinates}>
//                     <circle
//                       r={Math.sqrt(count) * 0.8}
//                       fill="#3b82f6"
//                       fillOpacity={0.4}
//                       stroke="#2563eb"
//                       strokeWidth={0.5}
//                     />
//                     <text
//                       x="0"
//                       y="0"
//                       textAnchor="middle"
//                       fill="#fff"
//                       fontSize="10"
//                       dy=".3em"
//                     >
//                       {count.toLocaleString()}
//                     </text>
//                   </Marker>
//                 ))}
//               </ComposableMap>

//               {tooltip && (
//                 <div
//                   className="bg-stone-700 p-2 px-4 rounded-lg shadow-lg border border-slate-600 absolute pointer-events-none text-sm z-50"
//                   style={{
//                     left: tooltip.x + 10,
//                     top: tooltip.y + 10,
//                   }}
//                 >
//                   {tooltip.content}
//                 </div>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Bottom Row - Charts and List */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <Card className="bg-stone-800 border-slate-700 h-96">
//           <CardHeader>
//             <CardTitle className="text-slate-300">Visitors Over Time</CardTitle>
//           </CardHeader>
//           <CardContent className="h-[calc(100%-3.5rem)]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart
//                 data={timeSeriesData}
//                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//               >
//                 <XAxis
//                   dataKey="date"
//                   stroke="#64748b"
//                   tick={{ fill: "#94a3b8" }}
//                   tickLine={{ stroke: "#64748b" }}
//                 />
//                 <YAxis
//                   stroke="#64748b"
//                   tick={{ fill: "#94a3b8" }}
//                   tickLine={{ stroke: "#64748b" }}
//                   tickFormatter={(value) => value.toLocaleString()}
//                 />
//                 <Tooltip
//                   content={({ active, payload }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-stone-700 p-2 px-4 rounded-lg border border-slate-600">
//                           <p className="text-blue-400">
//                             {payload[0].payload.date}
//                           </p>
//                           <p>Visitors: {payload[0].value?.toLocaleString()}</p>
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="visitors"
//                   stroke="#3b82f6"
//                   strokeWidth={2}
//                   dot={false}
//                   activeDot={{ r: 6 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         <Card className="bg-stone-800 border-slate-700 h-96">
//           <CardHeader>
//             <CardTitle className="text-slate-300">
//               Visitors by Country
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ScrollArea className="h-72">
//               <div className="space-y-4">
//                 {countryData.map((country) => (
//                   <div
//                     key={country.code}
//                     className="flex justify-between items-center p-3 bg-stone-700/50 rounded-lg"
//                   >
//                     <span className="text-slate-300">{country.country}</span>
//                     <span className="text-blue-400 font-medium">
//                       {country.count.toLocaleString()}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </ScrollArea>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

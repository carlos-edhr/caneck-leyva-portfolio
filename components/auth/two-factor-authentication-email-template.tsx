// import * as React from "react";
// import { Tailwind } from "@react-email/tailwind";
// interface TwoFactorAuthenticationEmailProps {
//   username: string;
//   token: string;
//   email: string;
//   // agencyName: string;
//   // supportEmail: string;
// }

// export const TwoFactorAuthenticationEmail: React.FC<
//   Readonly<TwoFactorAuthenticationEmailProps>
// > = ({ username, token, email }) => {
//   return (
//     <div>
//       <Tailwind>
//         <div className="bg-gray-100 font-sans">
//           <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
//             {/* Header */}
//             <div className="bg-indigo-600 text-white text-center py-6 rounded-t-lg">
//               <h1 className="text-2xl font-bold">
//                 Carlos-EHR Login Verification
//               </h1>
//             </div>

//             {/* Body */}
//             <div className="p-8">
//               <p className="text-lg text-gray-700">Hello {username},</p>
//               <p className="mt-4 text-gray-600 leading-relaxed">
//                 We noticed a login attempt to your Carlos-EHR account, with
//                 email: {email}, that requires two-factor authentication. Please
//                 use the verification code below to complete your login:
//               </p>

//               {/* 2FA Token */}
//               <div className="mt-6 text-center">
//                 <span className="inline-block bg-gray-200 text-3xl font-mono py-4 px-6 rounded-lg tracking-widest">
//                   {token}
//                 </span>
//               </div>

//               <p className="mt-6 text-gray-600 leading-relaxed">
//                 If you did not attempt to log in, please secure your account
//                 immediately by changing your password or contacting our support
//                 team.
//               </p>
//             </div>

//             {/* Footer */}
//             <div className="bg-gray-50 text-center py-6 rounded-b-lg">
//               <p className="text-gray-500 text-sm">
//                 Need assistance? Contact us at{" "}
//                 <a
//                   // href={`mailto:${supportEmail}`}
//                   className="text-indigo-600 hover:underline"
//                 >
//                   Carlos-EHR
//                 </a>
//                 .
//               </p>
//               <p className="text-gray-500 text-sm mt-2">
//                 &copy; {new Date().getFullYear()} Carlos-EHR. All rights
//                 reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Tailwind>
//     </div>
//   );
// };

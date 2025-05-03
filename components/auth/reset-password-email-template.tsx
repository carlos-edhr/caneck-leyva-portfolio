import * as React from "react";
import { Tailwind } from "@react-email/tailwind";
interface PasswordResetEmailProps {
  resetLink: string;
  //   agencyName: string;
  //   supportEmail: string;
}

export const PasswordResetEmail: React.FC<
  Readonly<PasswordResetEmailProps>
> = ({ resetLink }) => {
  return (
    <div>
      <Tailwind>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white text-center py-6">
              <h1 className="text-2xl font-semibold">Password Reset Request</h1>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-lg mb-4">Hello,</p>
              <p className="text-gray-600 mb-6">
                We received a request to reset the password for your account at{" "}
                <strong>Carlos-EHR</strong>. If you made this request, please
                click the button below to reset your password:
              </p>
              <div className="text-center">
                <a
                  href={resetLink}
                  className="inline-block px-8 py-3 bg-blue-600 text-white font-bold text-sm uppercase rounded-md shadow-lg transition transform hover:bg-blue-700 hover:scale-105"
                >
                  Reset Password
                </a>
              </div>
              <p className="text-gray-600 mt-6">
                If you did not request a password reset, please ignore this
                email. Your password will remain unchanged.
              </p>
            </div>
            <div className="bg-gray-100 text-center py-4 text-sm text-gray-500">
              <p>
                If you have any questions, feel free to contact us at{" "}
                <a
                  //   href={`mailto:${supportEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {/* {supportEmail} */}
                  Support Email
                </a>
                .
              </p>
              <p className="mt-2">
                &copy; {new Date().getFullYear()} Carlos-EHR. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </Tailwind>
    </div>
  );
};

import * as React from "react";
import { Tailwind } from "@react-email/tailwind";
interface ConfirmRegisterEmailProps {
  confirmLink: string;
  name: string;
  //   agencyName: string;
  //   supportEmail: string;
}

export const ConfirmRegisterEmail: React.FC<
  Readonly<ConfirmRegisterEmailProps>
> = ({ confirmLink, name }) => {
  return (
    <div>
      <Tailwind>
        <div className="bg-gray-100 font-sans">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
            {/* Header */}
            <div className="bg-blue-600 text-white text-center py-6 rounded-t-lg">
              <h1 className="text-2xl font-bold">Welcome to Carlos-EHR!</h1>
            </div>

            {/* Body */}
            <div className="p-8">
              <p className="text-lg text-gray-700">Hello {name},</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We’re thrilled to have you on board! Your account has been
                successfully created at Carlos-EHR, the platform where
                cutting-edge software engineering projects come to life.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To complete your registration and start exploring the platform,
                please confirm your account by clicking the button below:
              </p>

              {/* Confirmation Button */}
              <div className="mt-6 text-center">
                <a
                  href={confirmLink}
                  className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Confirm Account
                </a>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                If you didn’t create an account with Carlos-EHR, you can safely
                ignore this email.
              </p>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 text-center py-6 rounded-b-lg">
              <p className="text-gray-500 text-sm">
                If you have any questions, feel free to reach out to us at{" "}
                <a
                  // href={`mailto:${supportEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  Carlos-EHR
                </a>
                .
              </p>
              <p className="text-gray-500 text-sm mt-2">
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

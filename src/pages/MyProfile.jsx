import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function MyProfile({ user }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <PageHeader title="My Profile" />
      <div className="tracking-wide text-lg bg-stone-100 rounded-xl shadow-lg p-6 w-11/12 sm:w-4/5 md:w-3/4 lg:w-7/12 xl:w-7/12 max-w-4xl mx-auto font-medium text-stone-900">
        <div className="flex flex-row justify-evenly border-b border-stone-200 pb-4">
          <img
            src="https://ui-avatars.com/api/?name=Utku+Kaba"
            alt="Profile Photos"
            className="w-20 h-20 rounded-full shadow-sm"
          />
          <div className="py-3 space-y-2">
            <p>
              Profile Roles: <span className="font-extralight">Admin</span>
            </p>
            <p>
              Membership Date:{" "}
              <span className="font-extralight">01.10.2025</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-4 space-y-2 px-14">
          <p>
            Username: <span className="font-extralight">{user?.email}</span>
          </p>
          <div className="flex items-center justify-between">
            <p>
              Password:{" "}
              <span className="font-extralight">
                {showPassword ? user?.password : "••••••••"}
              </span>
            </p>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer ml-2 text-stone-700 hover:text-stone-900 hover:scale-105 transition"
            >
              {showPassword ? (
                <EyeOff className="mr-3 w-5 h-5" />
              ) : (
                <Eye className="mr-3 w-5 h-5" />
              )}
            </button>
          </div>
          <p>
            Phone Number:{" "}
            <span className="font-extralight">+90 5414829523</span>
          </p>
          <p>
            Account Status: <span className="font-extralight">Active</span>
          </p>
          <p>
            Last Login:{" "}
            <span className="font-extralight">04.10.2025 - 12.47 am</span>
          </p>
        </div>
      </div>
    </div>
  );
}

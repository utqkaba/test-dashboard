import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

export default function Roles() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const rolesData = [
    { role: "Admin", permissions: ["read", "write", "delete"] },
    { role: "Editor", permissions: ["read", "write"] },
    { role: "Viewer", permissions: ["read"] },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const enrichedUsers = data.map((user) => {
          const randomRole =
            rolesData[Math.floor(Math.random() * rolesData.length)];
          return {
            ...user,
            role: randomRole.role,
            permissions: randomRole.permissions,
          };
        });
        setUsers(enrichedUsers);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-extralight text-lg text-stone-900 text-shadow-lg">
        Loading roles & permissions...
      </div>
    );
  }

  return (
    <div className="m-0 p-0">
      <PageHeader title="Roles & Permissions" />
      <div className="flex justify-center tracking-wide">
        <div className="bg-stone-100 rounded-xl shadow-lg p-8 w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-4xl hover:shadow-2xl transition">
          <h2 className="text-2xl font-light text-stone-900 border-b border-stone-200 pb-3 mb-4">
            User Roles Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-stone-800">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 px-3 font-semibold">Name</th>
                  <th className="py-2 px-3 font-semibold">Role</th>
                  <th className="py-2 px-3 font-semibold">Permissions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-stone-100 hover:bg-stone-200 transition"
                  >
                    <td className="py-2 px-3 font-extralight">
                      {user.id} - {user.name}
                    </td>
                    <td className="py-2 px-3 text-red-600 font-light">
                      {user.role}
                    </td>
                    <td className="py-2 px-3 font-extralight">
                      {user.permissions.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

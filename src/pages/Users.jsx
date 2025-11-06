import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedUser, setExpandedUser] = useState(null); // Açık olan kullanıcı id'si

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-extralight text-lg text-stone-900 text-shadow-lg">
        Loading users...
      </div>
    );
  }

  const toggleExpand = (id) => {
    setExpandedUser((prev) => (prev === id ? null : id));
  };

  return (
    <div className="m-0 p-0">
      <PageHeader title="Users" />

      <div className="flex justify-center mt-4 mb-8 font-extralight">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-80 bg-linear-to-r from-stone-100 to-stone-200 border bg-stone-200 border-stone-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-800 placeholder-stone-400"
        />
      </div>

      <div className="flex flex-col items-center space-y-6 tracking-wide">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-stone-100 rounded-xl shadow-lg p-6 w-11/12 sm:w-4/5 md:w-6/8 lg:w-2/3 xl:w-5/8 max-w-2xl hover:shadow-2xl transition cursor-pointer"
              onClick={() => toggleExpand(user.id)}
            >
              <h2 className="text-2xl text-shadow-md font-light text-stone-900 border-b border-stone-200 mb-2 pb-2 flex justify-between items-center">
                <span>
                  {user.id} - {user.name}
                </span>
                <span className="text-stone-500 text-lg">
                  {expandedUser === user.id ? "⤴︎" : "⤵︎"}
                </span>
              </h2>

              {expandedUser === user.id && (
                <div className="space-y-1 pl-4 transition-all duration-300 animate-fadeIn">
                  <p>
                    Username:{" "}
                    <span className="font-extralight">@{user.username}</span>
                  </p>
                  <p>
                    E-mail:{" "}
                    <span className="font-extralight">{user.email}</span>
                  </p>
                  <p>
                    Phone number:{" "}
                    <span className="font-extralight">{user.phone}</span>
                  </p>
                  <p>
                    Web Site:{" "}
                    <span className="font-extralight">{user.website}</span>
                  </p>
                  <p>
                    Address:{" "}
                    <span className="text-red-500 font-extralight">
                      {user.address.city}, {user.address.street}{" "}
                      {user.address.zipcode}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-stone-600 text-lg font-extralight mt-8">
            No users found matching "
            <span className="font-medium">{searchTerm}</span>"
          </p>
        )}
      </div>
    </div>
  );
}

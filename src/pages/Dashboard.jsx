import PageHeader from "../components/PageHeader";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  // Üst istatistik kartları
  const stats = [
    { title: "Total Users", value: 118 },
    { title: "Active Users", value: 79 },
    { title: "Inactive Users", value: 39 },
  ];

  // Kullanıcı dağılımı (örnek veri)
  const userRoles = [
    { name: "Admin", value: 5 },
    { name: "Editor", value: 30 },
    { name: "Viewer", value: 85 },
  ];

  const COLORS = ["#6b7280", "#9ca3af", "#d6d3d1"];

  // Son 1 ay kullanıcı artışı (örnek veri)
  const userGrowth = [
    { date: "Oct 1", users: 76 },
    { date: "Oct 8", users: 104 },
    { date: "Oct 15", users: 115 },
    { date: "Oct 22", users: 101 },
    { date: "Oct 29", users: 108 },
  ];

  return (
    <div className="m-0 p-0">
      <PageHeader title="Dashboard" />

      {/* Üst istatistik kartları */}
      <div className="grid grid-cols-3 gap-2 px-30 py-4 justify-items-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-stone-100 rounded-xl shadow-lg w-11/12 sm:w-5/6 lg:w-3/4 p-4 text-center hover:shadow-xl transition"
          >
            <h3 className="text-lg font-medium text-shadow-lg text-stone-900 border-b border-stone-200 pb-2">
              {item.title}
            </h3>
            <p className="text-4xl font-extralight text-stone-500 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Alt kısım: Grafikler */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-14 py-6 justify-items-center">
        {/* User Role Distribution */}
        <div className="bg-stone-100 rounded-xl shadow-lg w-11/12 sm:w-5/6 lg:w-5/6 p-6">
          <h3 className="text-xl font-medium text-stone-900 text-center mb-4 text-shadow-lg">
            User Distribution by Role
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userRoles}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {userRoles.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth (Last 30 Days) */}
        <div className="bg-stone-100 rounded-xl shadow-lg w-11/12 sm:w-5/6 lg:w-5/6 p-6">
          <h3 className="text-xl font-medium text-stone-900 text-center mb-4 text-shadow-lg">
            User Growth (Last 30 Days)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userGrowth}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6b7280" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" stroke="#78716c" />
              <YAxis stroke="#78716c" />
              <CartesianGrid strokeDasharray="3 3" stroke="#d6d3d1" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#6b7280"
                fillOpacity={1}
                fill="url(#colorUsers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

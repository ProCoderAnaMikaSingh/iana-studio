function DashboardCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg hover:border-yellow-500 transition">
        <p className="text-gray-400 text-lg">
          Total Contacts
        </p>

        <h2 className="text-5xl font-bold text-yellow-400 mt-4">
          {stats.totalContacts}
        </h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg hover:border-green-500 transition">
        <p className="text-gray-400 text-lg">
          Today's Contacts
        </p>

        <h2 className="text-5xl font-bold text-green-400 mt-4">
          {stats.todayContacts}
        </h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg hover:border-blue-500 transition">
        <p className="text-gray-400 text-lg">
          This Month
        </p>

        <h2 className="text-5xl font-bold text-blue-400 mt-4">
          {stats.monthContacts}
        </h2>
      </div>

    </div>
  );
}

export default DashboardCards;
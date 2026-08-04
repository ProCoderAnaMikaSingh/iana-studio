import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";


function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
const contactsPerPage = 10;

  const [selectedContact, setSelectedContact] = useState(null);

  const [stats, setStats] = useState({
    totalContacts: 0,
    todayContacts: 0,
    monthContacts: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contact");
      const data = await response.json();

      if (data.success) {
        setContacts(data.contacts);
        setStats(data.stats);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Contact Deleted Successfully ✅");
        fetchContacts();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleExport = () => {

  const exportData = contacts.map((contact) => ({
    Name: contact.name,
    Email: contact.email,
    Phone: contact.phone,
    Business: contact.business_type,
    Date: new Date(contact.created_at).toLocaleString(),
    Message: contact.message,
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });

  saveAs(file, "IANA-Contacts.xlsx");

};

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-5 border-b border-zinc-800">

        <h1 className="text-3xl font-bold text-yellow-400">
          IANA Studio Admin
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>

      </div>

      <div className="max-w-7xl mx-auto p-10">

        <h2 className="text-4xl font-bold mb-8">
          Dashboard
        </h2>

        {/* Dashboard Cards */}

        <div className="flex justify-between items-center mb-6">

  <h2 className="text-2xl font-bold">
    Contact List
  </h2>

  <input
    type="text"
    placeholder="Search by Name / Email / Phone"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 w-80 outline-none focus:border-yellow-500 text-white"
  />

  <button
  onClick={handleExport}
  className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-lg font-semibold"
>
  Export Excel
</button>

</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-700">

            <p className="text-gray-400">
              Total Contacts
            </p>

            <h2 className="text-5xl font-bold text-yellow-400 mt-3">
              {stats.totalContacts}
            </h2>

          </div>

          <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-700">

            <p className="text-gray-400">
              Today's Contacts
            </p>

            <h2 className="text-5xl font-bold text-green-400 mt-3">
              {stats.todayContacts}
            </h2>

          </div>

          <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-700">

            <p className="text-gray-400">
              This Month
            </p>

            <h2 className="text-5xl font-bold text-blue-400 mt-3">
              {stats.monthContacts}
            </h2>

          </div>

        </div>

        {loading ? (
          <h2 className="text-center text-2xl">
            Loading...
          </h2>
        ) : (

          <div className="overflow-x-auto rounded-xl">

            <table className="w-full border border-zinc-700">

              <thead className="bg-yellow-500 text-black">

                <tr>

                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Business</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">View</th>
                  <th className="p-4">Delete</th>

                </tr>

              </thead>

              <tbody>

  {contacts
    .filter((contact) => {
      return (
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()) ||
        contact.phone.includes(search)
      );
    })
    .map((contact) => (

      <tr
        key={contact.id}
        className="border-t border-zinc-700 hover:bg-zinc-900 transition"
      >

        <td className="p-4">{contact.name}</td>

        <td className="p-4">{contact.email}</td>

        <td className="p-4">{contact.phone}</td>

        <td className="p-4">{contact.business_type}</td>

        <td className="p-4">
  {new Date(contact.created_at).toLocaleString()}
</td>

        <td className="p-4 max-w-sm">
          {contact.message.length > 40
            ? contact.message.substring(0, 40) + "..."
            : contact.message}
        </td>

        {/* View Button */}
        <td className="p-4">
          <button
  onClick={() => setSelectedContact(contact)}
  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
>
  View
</button>
        </td>

        {/* Delete Button */}
        <td className="p-4">
          <button
            onClick={() => handleDelete(contact.id)}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </td>

      </tr>

    ))}

</tbody>

            </table>

          </div>

        )}

      </div>

      {/* Contact Details Modal */}

      {selectedContact && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-[700px] p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-3xl font-bold text-yellow-400">
                Contact Details
              </h2>

              <button
                onClick={() => setSelectedContact(null)}
                className="text-red-500 text-3xl"
              >
                ×
              </button>

            </div>

            <div className="space-y-5">

              <div>
                <p className="text-gray-400">Name</p>
                <h3 className="text-xl">{selectedContact.name}</h3>
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <h3>{selectedContact.email}</h3>
              </div>

              <div>
                <p className="text-gray-400">Phone</p>
                <h3>{selectedContact.phone}</h3>
              </div>

              <div>
                <p className="text-gray-400">Business</p>
                <h3>{selectedContact.business_type}</h3>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Message</p>

                <div className="bg-zinc-800 rounded-lg p-4">
                  {selectedContact.message}
                </div>

              </div>

            </div>

            <button
              onClick={() => setSelectedContact(null)}
              className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold"
            >
              Close
            </button>

          </div>

        </div>
      )}


    </div>



  );
}

export default AdminDashboard;
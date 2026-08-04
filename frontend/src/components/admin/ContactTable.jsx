function ContactTable({
  contacts,
  search,
  handleDelete,
  setSelectedContact,
}) {

  return (

    <div className="overflow-x-auto rounded-xl">

      <table className="w-full border border-zinc-700">

        <thead className="bg-yellow-500 text-black">

          <tr>

            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Business</th>
            <th className="p-4">Message</th>
            <th className="p-4">View</th>
            <th className="p-4">Delete</th>

          </tr>

        </thead>

        <tbody>

          {contacts

            .filter((contact) => {

              return (

                contact.name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||

                contact.email
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||

                contact.phone.includes(search)

              );

            })

            .map((contact) => (

              <tr
                key={contact.id}
                className="border-t border-zinc-700 hover:bg-zinc-900"
              >

                <td className="p-4">
                  {contact.name}
                </td>

                <td className="p-4">
                  {contact.email}
                </td>

                <td className="p-4">
                  {contact.phone}
                </td>

                <td className="p-4">
                  {contact.business_type}
                </td>

                <td className="p-4">

                  {contact.message.length > 40
                    ? contact.message.substring(0, 40) + "..."
                    : contact.message}

                </td>

                <td className="p-4">

                  <button
                    onClick={() => setSelectedContact(contact)}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                  >
                    View
                  </button>

                </td>

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

  );
}

export default ContactTable;
function ContactModal({ selectedContact, setSelectedContact }) {
  if (!selectedContact) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-[700px] p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-yellow-400">
            Contact Details
          </h2>

          <button
            onClick={() => setSelectedContact(null)}
            className="text-red-500 text-4xl"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

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

        </div>

        <div className="mt-8">

          <p className="text-gray-400 mb-3">
            Message
          </p>

          <div className="bg-zinc-800 rounded-xl p-5 whitespace-pre-wrap">
            {selectedContact.message}
          </div>

        </div>

        <div className="mt-8 flex justify-end">

          <button
            onClick={() => setSelectedContact(null)}
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default ContactModal;
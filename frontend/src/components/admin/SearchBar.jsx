function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-between items-center mb-8">

      <h2 className="text-2xl font-bold">
        Contact List
      </h2>

      <input
        type="text"
        placeholder="Search Name / Email / Phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-96 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none text-white focus:border-yellow-500"
      />

    </div>
  );
}

export default SearchBar;
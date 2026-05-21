import { useState } from "react";
import { CircleUser, Gem, Menu, Plus, Search } from "lucide-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex flex-col gap-4 w-full bg-[#4378FF0D]">
      <div className="flex items-center justify-between gap-4 px-4 pt-4 md:pb-4">
        <div className="group flex-1 max-w-[560px] flex items-center px-4 py-3 bg-white border border-[#1977F2] rounded-lg focus-within:ring-2 focus-within:ring-[#1977F2] transition-all duration-200">
          <input
            type="search"
            placeholder="Find influencers to collaborate with"
            className="flex-1 text-[#505050] bg-transparent border-0 outline-none"
          />
          <Search
            size={20}
            className="text-[#505050] group-focus-within:text-brand-500 transition-colors duration-200"
          />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            aria-label="Upgrade plan"
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-bold bg-yellow-600 text-white hover:bg-yellow-700 transition-all duration-200">
            <Gem />
            Upgrade
          </button>
          <button
            type="button"
            aria-label="Create campaign"
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-bold bg-brand-500 text-white hover:bg-brand-600 transition-all duration-200">
            <Plus /> Create Campaign
          </button>
          <div className="flex items-center gap-3 p-3 bg-white rounded-full">
            <CircleUser />
            <Menu />
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden flex items-center bg-transparent outline-none"
          onClick={() => setShowMenu(!showMenu)}>
          <Menu />
        </button>
      </div>

      <div
        className={`md:hidden flex flex-col transition-all duration-500 ease-in-out ${showMenu ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <button
          type="button"
          aria-label="Upgrade plan"
          className="inline-flex items-center gap-2 p-3 text-brand-500 border-b border-blue-300 hover:bg-blue-50 transition-all duration-200">
          <Gem />
          Upgrade
        </button>
        <button
          type="button"
          aria-label="Create campaign"
          className="inline-flex items-center gap-2 p-3 text-brand-500 border-b border-blue-300 hover:bg-blue-50 transition-all duration-200">
          <Plus /> Create Campaign
        </button>
        <div className="inline-flex items-center gap-2 p-3 text-brand-500 border-b border-blue-300 hover:bg-blue-50 transition-all duration-200">
          <CircleUser /> User
        </div>
      </div>
    </nav>
  );
};

export default Header;

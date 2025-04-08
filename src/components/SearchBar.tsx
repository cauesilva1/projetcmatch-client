import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="flex w-[70%] sm:w-[50%] items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-gray-500">
        <span className="pl-3 flex items-center text-gray-500">
          <Search className="w-5 h-5" />
        </span>
        <input
          type="text"
          placeholder="Pesquise por projetos..."
          className="p-2 w-full focus:outline-none border-none"
          value={searchTerm} // Valor controlado
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de pesquisa
        />
      </div>
    </div>
  );
};

export default SearchBar;
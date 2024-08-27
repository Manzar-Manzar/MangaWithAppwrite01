// import React, { useState } from 'react';
// import browse from "../Browse/Browse"
// import { FaSearch } from 'react-icons/fa'; // Import the search icon

// function Search() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);
  
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const results = browseManga.filter(manga =>
//       manga.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     // Filter suggestions based on the search term
//     if (value) {
//       const filteredSuggestions = browseManga
//         .filter(manga => manga.title.toLowerCase().includes(value.toLowerCase()))
//         .map(manga => manga.title);
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setSuggestions([]);
//     handleSearch(); // Trigger the search when a suggestion is selected
//   };

//   return (
//     <div className="bg-gray-700 min-h-screen px-4 py-8 flex flex-col relative">
//       <h1 className="text-4xl font-extrabold mb-6 text-center text-white">Search Manga</h1>

//       {/* Search Form */}
//       <div className="mb-8 flex justify-center relative">
//         <form onSubmit={handleSearch} className="w-full max-w-md flex">
//           <input
//             type="text"
//             placeholder="Search for manga..."
//             value={searchTerm}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-500 rounded-l-lg shadow-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-orange-500 text-white rounded-r-lg flex items-center hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           >
//             <FaSearch className="w-5 h-5" />
//           </button>
//         </form>

//         {/* Suggestions Dropdown */}
//         {suggestions.length > 0 && (
//           <ul className="absolute z-10 w-full mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto">
//             {suggestions.map((suggestion, index) => (
//               <li
//                 key={index}
//                 className="px-4 py-2 hover:bg-gray-600 cursor-pointer text-gray-200 transition duration-150 ease-in-out rounded-md"
//                 onClick={() => handleSuggestionClick(suggestion)}
//               >
//                 {suggestion}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Search Results */}
//       <div className="flex-grow">
//         {searchResults.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {searchResults.map((manga) => (
//               <div key={manga.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//                 <img src={manga.image} alt={manga.title} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold mb-2 text-white">{manga.title}</h2>
//                   <p className="text-gray-300">{manga.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-400">No results found. Try a different search term.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Search;


import React from 'react'

function Search() {
  return (
    <div>Search</div>
  )
}

export default Search
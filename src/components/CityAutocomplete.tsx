'use client';

import {useState, useEffect} from 'react';
import {searchCities} from '@/lib/citySearch';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CityAutocomplete({value, onChange}: Props) {

  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  function handleChange(value: string) {

    setQuery(value);

    const r = searchCities(value);

    setResults(r);
  }

  function selectCity(city: string) {

    setQuery(city);

    onChange(city);

    setResults([]);
  }

  return (
    <div className="w-full relative">

      <input
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search city..."
        className="w-full border rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-black"
      />

      {results.length > 0 && (

        <div className="absolute w-full border rounded-lg mt-1 bg-white shadow z-10">

          {results.map((r, i) => (

            <div
              key={i}
              onClick={() => selectCity(r.city)}
              className="p-3 hover:bg-gray-100 cursor-pointer"
            >
              {r.city}, {r.country}
            </div>

          ))}

        </div>

      )}

    </div>
  );
}
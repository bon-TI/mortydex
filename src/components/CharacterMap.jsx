import { useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
import Load from "./Load";
import { useFetch } from "../hooks/useFetch";

function CharacterMap() {
  const [page, setPage] = useState(1);
  const { characters, loading } = useFetch(page);
  
  if (loading) {
    return <Load />;
  }

  return (
    <div className="container mx-auto py-2">
      <Pagination page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid justify-center md:grid-cols-3 gap-8">
          {characters.map((character) => {
            return (
              <div key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterMap;

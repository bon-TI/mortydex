
export const Status = (character) => {
    if (character.status === "Alive") {
        return (
          <h1 className="text-green-500 text-lg font-medium py-2 animate-pulse capitalize">
            <span className="inline-flex rounded-full mx-2 h-3 w-3  bg-green-500"></span>
            {character.status} - {character.species}
          </h1>
        );
      } else if (character.status === "Dead") {
        return (
          <h1 className="text-red-500 text-lg font-medium py-2 animate-pulse capitalize">
            <span className="inline-flex rounded-full mx-2 h-3 w-3  bg-red-500"></span>
            {character.status} - {character.species}
          </h1>
        );
      } else if (character.status === "unknown") {
        return (
          <h1 className="text-gray-500 text-lg font-medium py-2 animate-pulse capitalize">
            <span className="inline-flex rounded-full mx-2 h-3 w-3 bg-gray-500"></span>
            {character.status} - {character.species}
          </h1>
        );
      }
}

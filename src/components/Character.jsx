import { Status } from "./Status";

function Character({ character }) {
  const status = Status(character);

  return (
    <div className="text-center flex flex-col justify-center items-center w-80 md:w-auto m-4 py-4 max-w-sm bg-gray-900 rounded-3xl shadow-lg shadow-gray-100 hover:scale-105 transition-all">
      <div>
        <h2 className="text-white font-semibold text-xl py-2 capitalize">
          {character.name}
        </h2>
      </div>
      <div>{status}</div>
      <div className="h-60">
        <img
          src={character.image}
          alt={character.name}
          className="w-60 rounded-3xl"
        />
      </div>
      <div className="h-auto flex flex-col py-4 text-white justify-center items-center">
        <h1>
          <span className="text-orange-300">Origin Location</span>
          <br />
          {character.origin.name}
        </h1>
        <h1>
        <span className="text-orange-300">Actual Location</span>
          <br />
          {character.location.name}
        </h1>
      </div>
    </div>
  );
}

export default Character;

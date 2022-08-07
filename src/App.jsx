import CharacterMap from "./components/CharacterMap";

function App() {
  return (
    <div className="bg-gray-700">
      <div className="h-[25vh] flex justify-center items-center relative">
        <h1 className="text-center text-6xl text-teal-400 text-shadow font-schwifty z-20">
          Mortydex
        </h1>
        <div className="absolute w-80 h-24 bg-lime-500 blur-xl z-10 animate-pulse"></div>
      </div>
      <CharacterMap />
    </div>
  );
}

export default App;

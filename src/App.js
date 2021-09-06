import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";

const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();

function App() {
  return (
    <>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date} />
    </>
  );
}

export default App;

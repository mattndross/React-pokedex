const BestPokemon = (props) => {
    
    return (
      <div>
      <p>My favorite pokemon is Rookey</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
      </div>
    )
  };

  export default BestPokemon;
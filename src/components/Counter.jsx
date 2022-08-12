import { useState } from "react"; //todas as palavras que começam com Use é um hook-> gancho
// imultbilidade -vc não pode alterar diretamentemas vc pode dar  uma variavel para ela

export const Counter = () => {

	const [counter, setCounter] = useState(0)

	function increment() {
		setCounter(counter + 1)

	}
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  );
};

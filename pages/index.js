import { useState } from "react";

export default function Home() {
    return <Contador />
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionar() {
        setContador(contador + 1);
    }

    return (
        <div>
        <div>Home</div>
        <button onClick={adicionar}>{contador}</button>
        </div>
    );

}
import { useState, useEffect } from "react";

const Palpiteiro = ({ valor }) => {
  const [palpite, setPalpite] = useState("");

  const Palpites = () => {
    switch (valor) {
      case 0:
        return "E tem zero no Bingo, é?";
      case 1:
        return "Hello World!";
      case 10:
        return "De romboooo...";
      case 11:
        return "As canelas de Odete";
      case 12:
        return "Vitamina B12";
      case 13:
        return "O melhor, o da sorte";
      case 22:
        return "Dois patinhos na lagoa";
      case 33:
        return "Idade de Cristo";
      default:
        return "Não sou capaz de opinar!";
    }
  };

  useEffect(() => {
    setPalpite(Palpites());
  }, [valor]);

  return (
    <>
      <h3>Palpitrômetro</h3>
      <p>{palpite}</p>
      <img 
      src="https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-97-png.png " 
      alt="Flork com carinha feliz, juntando os dedos em frente ao toráx"
      width="45px" />
    </>
  );
};

export default Palpiteiro;

import { useState } from "react";
import { Form1 } from "./styles";

const Form = () => {
  const [valor, setValor] = useState("");
  return (
    <Form1>
      <h3> Simule sua Antecipação </h3>
      <p>Informe o valor da venda *</p>
      <input
        type="text"
        placeholder="R$"
        onChange={(event) => setValor(event.target.value)}
      />
      <p>Em quantas parcelas *</p>
      <input type="text" />
      <p>Informe o percentual de MDR *</p>
      <input type="text" />
    </Form1>
  );
};

export default Form;

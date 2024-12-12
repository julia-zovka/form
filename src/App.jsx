import styles from "./index.module.css"
import logo from "./assets/computador.png"
import { useState } from "react"



function App() {
  const{nome,setname}= useState("")// variavel do nome do ususuario
  const [experiencia, setexperiencia] = useState(""); // Estado para o area 
  const [interesse, setInteresse] = useState([]); // Estado para as áreas de interesse
  const [outroInteresse, setOutroInteresse] = useState(""); // Estado para o valor do campo "Outro"


  const onSubmit=(e)=>
    {//e.preventDefault();
    console.log("form enviado", nome,experiencia,interesse,outroInteresse)}
    
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInteresse((prev) => [...prev, value]); // Adiciona o valor ao array
    } else {
      setInteresse((prev) => prev.filter((item) => item !== value)); // Remove o valor do array
    }
  };

  return (
    <main className={styles.main}>
      <img src={logo} title="By Freepik"alt="logo"  className={styles.icon} /> 
      <h1>Road to Dev</h1>


      <form onSubmit={onSubmit}>
        <input  
          type="text" 
          name="nome"
          placeholder="Como você quer ser chamado"
          required
          onChange={(e) => setname(e.target.value)}/>

        <div>
        <h4>Qual sua nível de experiçência:</h4>
        <label>
          <input
            type="radio"
            name="experiencia"// salva area de interresse numa variael com esse nome
            value="Não sei de nada"
            onChange={(e) => setexperiencia(e.target.value)}
            required
          />
          Não sei de nada
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="experiencia"
            value="Iniciante"
            onChange={(e) => setexperiencia(e.target.value)}
            required
          />
          Iniciante
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="experiencia"
            value="Já tenho uma noção"
            onChange={(e) => setexperiencia(e.target.value)}
            required
          />
          Já tenho uma noção
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="experiencia"
            value="Intermediário"
            required
            onChange={(e) => setexperiencia(e.target.value)}
          />
          Intermediário
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="experiencia"
            value="Já sou experiente na área"
            required
            onChange={(e) => setexperiencia(e.target.value)}
          />
          Já sou experiente na área
        </label>
      </div>



        <h4>Quais suas áreas de interesse:</h4>
        
          {[
            "Desenvolvimento de Software",
            "Ciência de Dados",
            "IA",
            "Backend",
            "Frontend",
            "UX/UI",
            "Gestão de projetos",
          ].map((area) => (
            <label key={area}>
              <input
                type="checkbox"
                name="interesse"
                value={area}
                onChange={handleCheckboxChange}
              />
              {area}
            </label>
          ))}

          <label>
            <input
              type="checkbox"
              name="interesse"
              value="Outro"
              onChange={(e) => {
                handleCheckboxChange(e);
                if (!e.target.checked) setOutroInteresse("");
              }}
            />
            Outro
          </label>

          {interesse.includes("Outro") && (
            <input
              type="text"
              placeholder="Descreva seu interesse"
              value={outroInteresse}
              onChange={(e) => setOutroInteresse(e.target.value)}
            />
          )}
    <br />

    
    <input 
        type ="Submit" 
        value="Enviar"/>
    </form>
    

    </main> 
  )
}

export default App



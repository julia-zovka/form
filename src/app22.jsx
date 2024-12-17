import styles from "./index.module.css";
import logo from "./assets/computador.png";
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const validateAtLeastOne = (value) => {
    return value && value.length > 0 ? true : "Selecione pelo menos uma opção";
  };

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <main className={styles.main}>
      <img src={logo} title="By Freepik" alt="logo" className={styles.icon} />
      <h1>Road to Dev</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nome */}
        <input
          type="text"
          placeholder="Como você quer ser chamado"
          {...register("nome", { required: "O nome é obrigatório" })}
        />
        {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}

        {/* Experiência */}
        <div>
          <h4>Qual sua nível de experiência:</h4>
          {["Não sei de nada", "Iniciante", "Já tenho uma noção", "Intermediário", "Já sou experiente na área"].map((nivel) => (
            <label key={nivel}>
              <input
                type="radio"
                value={nivel}
                {...register("experiencia", { required: "Selecione seu nível de experiência" })}
              />
              {nivel}
            </label>
          ))}
          {errors.experiencia && <p style={{ color: "red" }}>{errors.experiencia.message}</p>}
        </div>

        {/* Áreas de Interesse */}
        <h4>Quais suas áreas de interesse:</h4>
        {[
          "Desenvolvimento de Software",
          "Ciência de Dados",
          "IA",
          "Backend",
          "Frontend",
          "UX/UI",
          "Gestão de projetos",
          ///"Outro",
        ].map((area) => (
          <label key={area}>
            <input
              type="checkbox"
              value={area}
              {...register("interesse", { validate: validateAtLeastOne })}
            />
            {area}
          </label>
        ))}
        {errors.interesse && <p style={{ color: "red" }}>{errors.interesse.message}</p>}

     
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </main>
  );
}

export default App;

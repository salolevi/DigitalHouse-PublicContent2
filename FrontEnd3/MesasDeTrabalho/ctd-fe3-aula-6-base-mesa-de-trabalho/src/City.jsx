export const City = ({cityObj}) => {

const {id, city, country, population, color} = cityObj;

const style = {
  color,
  "font-family": "Comic Sans MS",
  "font-size": "1.2em",
  backgroundColor: "rgba(0 0 0 / .3)",
  "border-radius": "15px"
}

  return <article className="city" style={style}>
      <p>ID de la ciudad: {id}</p>
      <p>Ciudad: {city}</p>
      <p>Pais: {country}</p>
      <p>Poblacion: {population}</p>
    </article>
}


export const CityContainer = ({children}) => {
  console.log(children);
  const style = {
    display: 'grid',
    'grid-template-columns': "1fr 1fr 1fr",
    gap: "1.5em"
  }
  return <section style={style}>{children}</section>
}

function Calc(a , b) {

  return a + b
 
}

function App() {
  const title = " Hello, World"
  const subject = "Me livrei da Maldicao"

  return (
    <div>
      <h1>{title}</h1>
      <p>{subject}</p>
      <h2>React it's easy like 1 + 1 is {1 + 1}</h2>
      <span>A soma dos numeros é igual a: {Calc(5, 4)}</span>
    </div>
  )
}

export default App

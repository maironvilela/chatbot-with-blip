import { useContext, useEffect } from "react"
import { AuthenticateContext } from "./contexts/authenticate"


function App() {

  const { auth } = useContext(AuthenticateContext);



  useEffect(() => {
    const getData = (async () => {
      const status = await auth();
      console.log(status);
    })
    getData();
  })

  return (
    <h1>HOME</h1>
  )
}

export default App

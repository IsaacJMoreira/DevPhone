import Routes from "./Router"
import {GlobalCss} from "./Global"
import {LogadoProvider} from "./Routes/Logado"



function App() {
  return <>
     <LogadoProvider>
       <Routes/>
       <GlobalCss/>
     </LogadoProvider>  
    </>
  
}

export default App

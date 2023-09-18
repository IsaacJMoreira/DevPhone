import Routes from "./Router"
import {GlobalCss} from "./Global"
import {LogadoProvider} from "./Routes/Logado"
import { Provider } from "./Pages/Components/HeaderMenu/Card/ItemCard/provider"



function App() {
  return <>
  <Provider>
     <LogadoProvider>
       <Routes/>
       <GlobalCss/>
     </LogadoProvider>  
  </Provider>
    </>
}

export default App

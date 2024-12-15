
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes"


function App() {
  return (
    <BrowserRouter>
    <div>
      <main>
        <AppRoutes/>
      </main>
    </div>
  </BrowserRouter>
  )  
}

export default App

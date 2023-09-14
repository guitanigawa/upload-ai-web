import { Separator } from "./components/ui/separator";
import { NavBar } from "./components/NavBar";
import Prompts from "./components/MainPrompts";
import ExecuteForm from "./components/ExecuteForm";
import UploadForm from "./components/UploadForm";


export default function App() {



  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>

      <main className="flex flex-1 gap-6 p-6">
        
        <Prompts/>
          
        <aside className="w-80 space-y-6">
          <UploadForm/>

          <Separator/>

          <ExecuteForm/>
        </aside>


      </main>  
    </div>
  )
}

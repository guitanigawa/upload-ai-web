import { MagicWandIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";

export default function ExecuteForm(){

    return(
        <form className="space-y-6">


            <div className="space-y-1.5">
              <Label>Prompt</Label>

              <Select>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Selecione um prompt..."/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem 
                    value="yt-title"
                    className="cursor-pointer"
                  >
                    Título Youtube
                  </SelectItem>
                  
                  <SelectItem 
                    value="yt-description"
                    className="cursor-pointer"
                  >
                    Descrição Youtube
                  </SelectItem>
                  
                  <SelectItem 
                    value="create-new" 
                    className="text-muted-foreground"
                  >
                    Criar novo (em breve)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Modelo</Label>

              <Select disabled>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="GPT 3.5-turbo 16k"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-3.5"/>
                </SelectContent>
              </Select>

              <span className="block text-sm text-muted-foreground italic">Você poderá customizar essa opção em breve.</span>
            </div>

            <Separator/>

            <div className="space-y-3">
              
              <Label htmlFor="temperature">Temperatura</Label> 
              <Slider defaultValue={[0.5]} min={0} max={1} step={0.1} id="temperature"/>

              <span className="block text-sm text-muted-foreground italic">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>

            </div>

            <Separator/>

            <Button className="w-full">
              Executar
              <MagicWandIcon className="ml-1"/>
            </Button>
          </form>
    )
}
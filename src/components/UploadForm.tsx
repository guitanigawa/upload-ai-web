import { DownloadIcon, UploadIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function UploadForm(){

    return(
        <form className="space-y-5">

            <label
              htmlFor="video"
              className="block py-[4.3rem] text-center border border-dashed text-sm text-muted-foreground cursor-pointer rounded-lg"
            > 
              <UploadIcon className="m-auto mb-1.5"/>
              Selecione um vídeo
            </label>
            
            <input 
              id="video"
              type="file" 
              accept="video/np4" 
              className="hidden"
            />
            
            <Separator className="w-full"/>

            <div className="space-y-1.5">
              <Label htmlFor="transcription-prompt"> Prompt de transcrição </Label>
              
              <Textarea 
                id="transcrition-prompt"
                className="resize-none p-3 pb-6" 
                placeholder="Inclua palavras chave mencionadas no vídeo separadas por vírgula (,)"
              />
            </div>

            <Button 
              type="submit"
              className="w-full" 
            >
              Carregar vídeo      
              <DownloadIcon className="ml-1.5"/>
              
            </Button>
          </form>
    )
}
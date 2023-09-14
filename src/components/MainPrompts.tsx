import { Textarea } from "./ui/textarea";

export default function Prompts(){

    return(
        <div className="flex flex-1 flex-col gap-3">
          
            <div className="grid flex-1 gap-4">
                <Textarea 
                    className="resize-none p-4 leading-relaxed text-base" 
                    placeholder="Inclua o prompt para a IA..."
                />
                
                <Textarea 
                    className="resize-none p-4 leading-relaxed text-base" 
                    placeholder="Resultado gerado pela IA..."
                />
            </div>
            
            <p className="text-sm text-muted-foreground text-justify">
                Lembre-se: você pode usar a tag <code className="text-violet-600">{'{transcription}'}</code> no seu prompt para adicionar a transcrição do vídeo selecionado.
            </p>
        </div>
    )


}
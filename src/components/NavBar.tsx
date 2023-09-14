import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";


export function NavBar(){
    return(
        <nav className="px-6 py-3 flex items-center justify-between border-b">
            <h1 className="text-xl font-bold">upload.ai</h1>

            <div className="flex items-center gap-3">
                <span className="text-base text-muted-foreground">Desenvolvido com 💜 no NLW da Roketseat</span>

                <Separator orientation="vertical" className="h-6"/>  

                <a href="https://github.com/rocketseat">
                    <Button variant="outline">
                        <GitHubLogoIcon className="mr-1.5"/>
                        Github
                    </Button>
                </a>
            </div>


      </nav>

    )


}
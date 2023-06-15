import { ProjectTechnology } from "./projectTechnology.interface";
import { download } from "./download.interface";


export interface Experience{

    year: number,
    title:string,
    description:string,
    img:string,
    download?:download[],
    projectTechnology? : ProjectTechnology[];
    
    
}



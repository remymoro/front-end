import { ProjectTechnology } from "./projectTechnology.interface";


export interface Experience{

    year: number,
    title:string,
    description:string,
    img:string,
    projectTechnology? : ProjectTechnology[];
    
    
}



export class Todo{
id:number;
description:string;
isEditing:boolean = false;
constructor(id:number,description:string){
    this.id = id;
    this.description = description;
}
}
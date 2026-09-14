export class ElectricRat{
  name: string;
  hp: number;
  atk: number;

  public constructor(name:string, hp:number, atk:number){
    this.name = name
    this.hp = hp
    this.atk =atk

    if(name.trim() == ""){
        throw new Error("A név mező nem lehet üres")
    }
  }
}

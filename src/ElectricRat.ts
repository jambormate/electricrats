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
    if (hp <= 0) {
      throw new Error("A HP pozitív egész szám kell legyen");
    }

    if (atk <= 0) {
      throw new Error("Az ATK pozitív egész szám kell legyen");
    }
  }
}

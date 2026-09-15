import './style.css'
import { ElectricRat} from './ElectricRat'

document.addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById("form") as HTMLFormElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const container = document.getElementById("cards") as HTMLDivElement;
  const exportButton = document.getElementById("export") as HTMLButtonElement;
  const csv = document.getElementById("csv") as HTMLTextAreaElement;
  csv.value = "";
  const ratties: ElectricRat[] = [];

  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = nameInput.value
    const atk = Math.floor(Math.random()*(20-10+1)+10) 
    const hp =  Math.floor(Math.random()*(100-50+1)+50) 
  try {
      const rat = new ElectricRat(name, hp, atk);
      ratties.push(rat);
      const card = document.createElement("div");
      card.className = "card";
      const ratName = document.createElement("h2");
      ratName.textContent = rat.name;
      const ratHp = document.createElement("p");
      ratHp.textContent = "HP: " + rat.hp;
      const ratAtk = document.createElement("p");
      ratAtk.textContent = "ATK: " + rat.atk;
      card.appendChild(ratName);
      card.appendChild(ratHp);
      card.appendChild(ratAtk);
      container.appendChild(card);
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    document.getElementById("export")!.style.display = "block";
  })
  exportButton.addEventListener("click", () => {
  let text = "name;atk;hp\n";
  document.getElementById("csv")!.style.display = "block";

  for (const rat of ratties) {
    text += rat.toCSV() + "\n";
  }
  csv.value = text;
})
})
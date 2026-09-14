import './style.css'
import { ElectricRat} from './ElectricRat'

document.addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById("form") as HTMLFormElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;

  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const ratties = [];
    const name = nameInput.value
    const atk = Math.floor(Math.random()*(20-10+1)+10) 
    const hp =  Math.floor(Math.random()*(100-50+1)+50) 
    ratties.push (new ElectricRat(name.toString(), atk, hp))
    console.log(ratties)
    form.reset()

    const container = document.getElementById("cards")
    const card = document.getElementById("div")
    const ratName = document.createElement("p")
    const ratHp = document.createElement("p")
    const ratAtk = document.createElement("p")
    ratName.appendChild(ratName)
    ratHp.appendChild(ratHp)
    




  })
})
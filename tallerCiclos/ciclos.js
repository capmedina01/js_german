const btn_guardar = document.getElementById("btn-guardar");
const menu_container = document.getElementById("container-menu");
const menu_select = document.getElementById("menu-option");
const menuArray = ["Adenina", "Timina", "Citosina", "Guanina"];

const menu = document.createElement("div");
for (let i = 0; i < menuArray.length; i++) {
  let opcion = document.createElement("option");
  opcion.value = menuArray[i];
  opcion.textContent = menuArray[i];
  menu_select.appendChild(opcion);
}

btn_guardar.addEventListener("click", () =>{
    const seleccion = menu_select.value;
    console.log(`Su selección es ${seleccion}`)
})

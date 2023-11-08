 // Aquí tu código //  no lo entendi bien, perceber la apresentacion del profesor. 

 function addItemToList() {
    
    const agregar = prompt('agregar');

    if (agregar) {
        
            const listItem = document.createElement('li')

            console.log(agregar)

            listItem.textContent = agregar;

            document.getElementById('agregar').appendChild(listItem)
            const addButton = document.getElementById('addButton')
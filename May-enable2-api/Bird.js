"use strict";

document.querySelector("body > form").addEventListener("submit", function (event) {
    event.preventDefault(); // turns off the page refresh/redirect
   
    // to extract data
    const data = {
        name: this.name.value,
        species: this.species.value,
        age: this.age.value
    }

    console.log("DATA: ", data);
    
    axios.post("http://localhost:8080/createBird", data)
    .then(res => {
        console.log("RES: ", res);
        this.reset();
        this.name.focus();
        renderBirds();
    })
    .catch(err => console.error(err));
});
const output = document.querySelector("#output");


function renderBirds() {
    axios.get("http://localhost:8080/getBirds")
        .then(res => {
            console.log("birds: ", res.data);
            output.innerHTML = "";
            for (let bird of res.data) {
                const birdCol = document.createElement("div");
                birdCol.className = "col";

                const birdCard = document.createElement("div");
                birdCard.className = "card";
                birdCol.appendChild(birdCard);

                const birdDiv = document.createElement("div");
                birdDiv.className = "card-body";
                birdCard.appendChild(birdDiv);

                const birdName = document.createElement("h2");
                birdName.innerText = bird.name;
                birdDiv.appendChild(birdName);

                const birdAge = document.createElement("p");
                birdAge.innerText = bird.age + " years old.";
                birdDiv.appendChild(birdAge);

                const birdSpecies = document.createElement("p");
                birdSpecies.innerText = bird.species;
                birdDiv.appendChild(birdSpecies);

                const birdDelete = document.createElement('button');
                birdDelete.innerText = "DELETE";
                birdDelete.addEventListener("click", () => {
                    console.log("BIRD: ", bird);
                    deleteBird(bird.id);
                });
                birdDiv.appendChild(birdDelete);

                output.appendChild(birdCol);
            }
        })
        .catch(err => console.error(err));
}

const deleteBird = (id) => {
    axios.delete("http://localhost:8080/removeBird/" + id)
            .then(res => {
                console.log("Delete successful");
                renderBirds();
            }).catch(err => console.error(err));
}

renderBirds();
    


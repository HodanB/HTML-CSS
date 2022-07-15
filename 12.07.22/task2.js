"use strict"

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
    .then (response => {
    console.log("Res: ", response)
    for(let i=0; i<response.data.length; i++){
       if(
        response.data[i].hse
        .toLowerCase()
        .includes(houseInput.value.toLowerCase())
       ){
        const rulerName = document.createElement("p");
        rulerName.innerText = response.data[i].nm;
        output.appendChild(rulerName);
        
        const city = document.createElement("p");
        city.innerText = response.data[i].cty;
        output.appendChild(city);
       
        const house = document.createElement("p");
        house.innerText = response.data[i].hse;
        output.appendChild(house);

        const yearsRuling = document.createElement("p");
        yearsRuling.innerText = response.data[i].yrs;
        output.appendChild(yearsRuling);

    }
})
.catch(error => console.log(error));

"use strict"

// https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then (response => {
        console.log("Res: ", response)

        document.write("Squad Name: ", response.data.squadName)
        document.write("Founded: ", response.data.formed)
        document.write("Member ", response.data.members[2].name)

    //     for(let i=0; i<response.data.members.length; i++){
    //         const member = document.createElement("p");
    //         member.innerText = " [Name]= " + response.data.members[i].name +" [Alias]= " + response.data.members[i].secretIdentity;
    //         output.appendChild(member);
    //     }

    })
    .catch(error=> console.error(error));
    




    //  // const xName = document.createElement("p");
        // xName.innerText = "Name" + response.data.name;
        // output.appendChild(xName);

        // const xId = document.createElement("p");
        // xId.innerText = "Id" + response.data.id;
        // output.appendChild(xId)
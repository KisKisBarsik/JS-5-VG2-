let currentImageIndex = 0;

document.getElementById("submit0").addEventListener("click", function () {

    let myData = document.getElementById("input0").value.toLowerCase()
    const myAPI = "https://dattebayo-api.onrender.com/characters"

    const div = document.getElementById("mainContent")
    div.style.display = "flex";

    const images = document.getElementById("images")
    images.innerHTML = "";

    fetch(myAPI)

      .then(response => response.json())
      .then(data => {
          
        data.characters.forEach(element => {

          const character = data.characters.find(c => c.name.toLowerCase() === myData);
              
          if (myData == element.name.toLowerCase()) {

            var image = document.createElement("img")
            image.id = "image"

            image.src = character.images[currentImageIndex] || character.images[0];

            const p0 = document.getElementById("textInfo0")
            const p1 = document.getElementById("textInfo1")
            const p2 = document.getElementById("textInfo2")

            p0.id = "textInfo0"
            p1.id = "textInfo1"
            p2.id = "textInfo2"

            p0.innerText = "Name: " + element.name;
            p1.innerHTML = "Birthdate: " + element.personal.birthdate;
            p2.innerHTML = "Clan: " + element.personal.clan;

            images.appendChild(image)
            div.appendChild(p0)
            div.appendChild(p1)
            div.appendChild(p2)

            currentImageIndex = currentImageIndex === 0 ? 1 : 0;
                
          }

          console.log(element);
                
        });
            
      })

})





// Enter funksjon
var input = document.getElementById("input0")
var submitBtn = document.getElementById("submit0")

input.addEventListener("keypress", function(event) {

  // If the user presses the "Enter" key on the keyboard

  if (event.key === "Enter") {

    // Cancel the default action, if needed
    event.preventDefault();

    // Trigger the button element with a click
    submitBtn.click();

  }

})
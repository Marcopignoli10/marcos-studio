// room page that comes  from the data room in the html

    const roomName = document.body.dataset.room;

        const gallery = document.querySelector(".gallery");  //where im keeping the sketches

    fetch("data.json")

        .then(function (response) {       //stacksoverflow said .then(function) is easier than async/wait
                return response.json();
        })

        .then(function (data) 
        {
                    const drawings = data[roomName];    //get list of skecthes from this 'room'
        


                drawings.forEach(function (drawing) 
            {
                    const block = document.createElement("figure");
                          block.className="work";
                          block.innerHTML = '<img class="piece" src="'+ drawing.image + '" alt="' + drawing.title + '">' + '<figcaption class="caption">' + drawing.title + ' ' + drawing.year + '</figcaption>';
                          
                            gallery.appendChild(block);

            
            });
        });

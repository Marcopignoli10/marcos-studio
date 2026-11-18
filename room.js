// room page that comes  from the data room in the html

    const roomName = document.body.dataset.room;

        const gallery = document.querySelector(".gallery");  //where im keeping the sketches

    fetch("data.json")

        .then(function (response) 
        {                                    //stacksoverflow said .then(function) is easier than async/wait
                return response.json();
        })

        .then(function (data) 
        {
                    const drawings = data[roomName];    //get list of skecthes from this 'room'
        


                drawings.forEach(function (drawing) 
            {
                    const block = document.createElement("figure");
                          block.className="work";
                          block.innerHTML = '<img loading="lazy" class="piece" src="' + drawing.image + '" alt="' + drawing.title + '">' + '<figcaption class="caption">' + drawing.title + ' ' + drawing.year + '</figcaption>';
                          
                            gallery.appendChild(block);

            //
            });

            updateCounter();
        });
                       // left and right arrow buttons 

            const leftArrow = document.createElement("button");           
            leftArrow.className = "arrow arrow-left";
                    leftArrow.setAttribute("aria-label", "Previous drawing");
                            leftArrow.textContent = "<";

                const rightArrow = document.createElement("button");
                rightArrow.className = "arrow arrow-right";
                        rightArrow.setAttribute("aria-label", "Next drawing");
                                rightArrow.textContent = ">";

    document.body.appendChild(leftArrow);
    document.body.appendChild(rightArrow);


    leftArrow.addEventListener("click", function ()
{
        gallery.scrollBy({ left: -gallery.clientWidth * 0.75, behavior: "smooth" });
});

        rightArrow.addEventListener("click", function () 
{
        gallery.scrollBy({ left: gallery.clientWidth * 0.75, behavior: "smooth" });
});


                        const counter = document.createElement("p"); //counter 
                                counter.className= "counter";

                                        document.body.appendChild(counter);

                
                function updateCounter()
                {
                        const items = gallery.children;

                                const middle = gallery.scrollLeft + gallery.clientWidth / 2;
                                        let current = 0;
                                        
                                        let smallestGap = Infinity;

                        
                        for (let i = 0; i < items.length; i++)
                        {
                                const itemMiddle = items[i].offsetLeft + items[i].clientWidth / 2;

                                        const gap = Math.abs(itemMiddle - middle);

                                if (gap < smallestGap)

                                {
                                        smallestGap = gap;
                                        
                                        current = i;
                                }
                        }


                                for (let i = 0;i < items.length; i++)
                                {
                                        items[i].classList.toggle("active", i === current);
                                }



                        counter.textContent = (current + 1) + " / " + items.length;
                }


        gallery.addEventListener("scroll", updateCounter);   //updates every row move


                        const progress = document.createElement("div");
                progress.className = "progress";

                        document.body.appendChild(progress);

                function updateProgress()
                {
                        const maxScroll = gallery.scrollWidth - gallery.clientWidth;

                                if (maxScroll > 0)

                                        {
                                                const percent = (gallery.scrollLeft / maxScroll) * 100;
                                                        
                                                progress.style.width = percent + "%";
                                        }
                }

                gallery.addEventListener("scroll", updateProgress);


        const viewer = document.createElement("div");  //big view of a single sketch
                
                viewer.className = "viewer";
                        viewer.innerHTML = '<button class="viewer-close" aria-label="Close">X</button><img class="viewer-image" src="" alt="">';
                                document.body.appendChild(viewer);

                        const viewerImage = viewer.querySelector(".viewer-image");
                                const viewerClose = viewer.querySelector(".viewer-close");


        gallery.addEventListener("click", function (event)
{
        if (event.target.classList.contains("piece"))
        {
                viewerImage.src = event.target.src;

                        viewerImage.alt = event.target.alt;

                                viewer.classList.add("open");
        }
});

                function closeViewer()
                {
                        viewer.classList.remove("open");
                }


        viewerClose.addEventListener("click", closeViewer);

        
        
                        document.addEventListener("keydown", function (event)
                        {
                                if (event.key === "Escape")
                                {
                                        closeViewer();
                                }
                        });





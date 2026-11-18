const allEntries = document.querySelectorAll(".entry");



const watcher = new IntersectionObserver(function (watchedItems)
{
    watchedItems.forEach(function (item)
    {

        if (item.isIntersecting)
            
            {
                item.target.classList.add("visible");
            }
    });
});



    allEntries.forEach(function (entry)
{
                watcher.observe(entry);


});


const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

function openMenu()
{
    menu.classList.add("open");
        burger.classList.add("open");
            burger.setAttribute("aria-expanded", "true");

}

    function closeMenu()    {
        menu.classList.remove("open");
            burger.classList.remove("open");
                burger.setAttribute("aria-expanded", "false");

    }


    burger.addEventListener("click", function ()
{
    if (menu.classList.contains("open"))
    {
            closeMenu();

    }
            else {
            openMenu();
            }
});

        document.addEventListener("keydown", function (event) 
    {
            if (event.key === "Escape")
            {
                    closeMenu();

            }
    });


        menu.querySelectorAll("a").forEach(function (link)
        {
                link.addEventListener("click", closeMenu);

        });

    const timeline = document.querySelector(".timeline");    //a counter and progress line but test out more ideas

        if (timeline)
        {
            const evoCounter = document.createElement("p");
                evoCounter.className = "counter evo-only";
            document.body.appendChild(evoCounter);

            const evoProgress = document.createElement("div");
                evoProgress.className = "progress evo-only";
            document.body.appendChild(evoProgress);

                function updateEvolution()
                {
                    const middle = timeline.scrollLeft + timeline.clientWidth / 2;   //indication ie closest to the middle of the screen
                        let current = 0;
                            let smallestGap = Infinity;

                        
                    allEntries.forEach(function (entry, i)
                {
                            const entryMiddle = entry.offsetLeft + entry.clientWidth / 2;

                            const gap = Math.abs(entryMiddle - middle);

                                if (gap < smallestGap)
                                {
                                    smallestGap = gap;

                                    current = i;
                                }
                });

                    evoCounter.textContent = (current + 1) + " / " + allEntries.length;


                                    const maxScroll = timeline.scrollWidth - timeline.clientWidth;   //timeline progress

                                    if (maxScroll > 0)

                                    {
                                            evoProgress.style.width = (timeline.scrollLeft / maxScroll) * 100 + "%";
                                    }
                }

                timeline.addEventListener("scroll", updateEvolution);
                updateEvolution();
        }
    

        document.querySelectorAll("a").forEach(function (link)   //since link is picked, the page will fade out first then on to the next page
    
    {
                link.addEventLIstener("click", function (event)
            
            {
                        const address = link.getAttribute("href");

                            if (address && address.endsWith(".html"))

                                    {
                                        event.preventDefault();    //stop the jump asap

                                            document.body.classList.add("Leaving");

                                        setTimeout(function ()
                                    {

                                        window.location.href = address;
                                    }, 400);

                                    }


            });
    });



            window.addEventListener("pageshow", function ()
            {
                document.body.classList.remove("leaving");
            });
    
        
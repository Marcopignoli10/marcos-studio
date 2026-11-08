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
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
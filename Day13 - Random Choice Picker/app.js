

const tagsEl = document.getElementById("tags")
const textArea = document.getElementById("textArea")

textArea.focus();

textArea.addEventListener("keyup", (e) => 
{
    CreateTags(e.target.value);

    if (e.key === "Enter") 
    {
        setTimeout(() => 
        {
            e.target.value = "";
        }, 10);
        RandomSelect()
    }
})


function CreateTags(input) 
{
    // Cant be empty string, and trim whitepscae
    const tags = input.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim());

    tagsEl.innerHTML = "";
    tags.forEach(tag => 
    {
        const el = document.createElement("span");
        el.classList.add("tag");
        el.innerHTML = tag;
        tagsEl.appendChild(el);
    });
}

function RandomSelect()
{
    const times = 30

    const interval = setInterval(() => 
    {
        const randomTag = PickRandomTag()
	
        if (randomTag !== undefined) 
        {
            HighlightTag(randomTag)

            setTimeout(() => 
            {
                UnHighlightTag(randomTag)
            }, 100)
        }
    }, 100);

    setTimeout(() => 
    {
        clearInterval(interval)

        setTimeout(() => 
        {
            const randomTag = PickRandomTag()

            HighlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function PickRandomTag()
{
    const tags = document.querySelectorAll(".tag");

    return tags[Math.floor(Math.random () * tags.length)]
}

function HighlightTag(tag)
{
    tag.classList.add("highlight");
}

function UnHighlightTag(tag)
{
    tag.classList.remove("highlight");
}
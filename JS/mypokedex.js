/*
im gonna use the pokeapi.co rest api to GET me some data to display and have some fancy information about pokemon for users to veiw

i should remember to cache results. if i have fetched once i should use it to its full extent before fetching again.
as patryk showed base info was easy to fetch but the image needed an additional request

todo:
make an utility fetch function?
get some poke info
display some pokeinfo
*/

const pokeContainerEL = document.getElementById("pokemaincontainer")

async function apiGet(url){
    const request = await fetch(url)
    if(!request.ok){
        //need some debug info here and expand this to a proper try catch with maybe some attempt again exponential timer thing
    }
    const data = request.json()
    return data
}

async function pokemonTest(){
    pokemonData = await apiGet("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5")
    const pageMeat = pokemonData.results
    let arrayOfPokemon = []
    for (const meat of pageMeat) {
        arrayOfPokemon.push(pageBuilder(meat))
    }
    pokeContainerEL.append(...arrayOfPokemon)
}

pokemonTest()

function pageBuilder(obj){
    const {name, url} = obj
    const title = document.createElement("p")
    title.textContent = name
    const picture = document.createElement("img")
    //picture.src = "url"
    picture.alt = name
    const card = document.createElement("div")
    card.className = "card"

    card.append(title,picture)
    return card
}
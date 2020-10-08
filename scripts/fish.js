

export const Fish = (fish) => {
    return `
    <div class="aquarium__fish--each">
            <h3 style="font-size: 20px;">${fish.name}</h3>
            <p><img src="${fish.image}"></p>
            <p>Species: ${fish.species}</p>
            <p>Size: ${fish.size}</p>
            <p>Diet: ${fish.diet}</p>
            <p>Harvested Location: ${fish.harvested}</p>
    </div>
    `
}
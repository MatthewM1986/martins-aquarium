

export const Fish = (fishEach) => {
    return `
        <div class="aquarium__fish--each">
            <h3 style="font-size: 20px;">${fishEach.name}</h3>
            <p><img src="${fishEach.image}"></p>
            <p>Species: ${fishEach.species}</p>
            <p>Size: ${fishEach.size}</p>
            <p>Diet: ${fishEach.diet}</p>
            <p>Harvested Location: ${fishEach.harvested}</p>
        </div>
    `
}
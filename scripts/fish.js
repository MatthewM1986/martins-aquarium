

export const Fish = (fishEach) => {
    return `
        <div class="aquarium__fish--each">
            <h3 style="font-size: 20px;">${fishEach.name}</h3>
            <p><img src="${fishEach.image}"></p>
            <p>Species: ${fishEach.species}</p>
            <p>Size: ${fishEach.size} Inch</p>
            <p>Diet: ${fishEach.diet}</p>
            <p>Harvested Location: ${fishEach.harvested}</p>
        </div>
    `
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for (const fishHoly of fishCollection) {
        if (number % 3 === 0) {
            holyFish.push(fishHoly)
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fishSoldiers of fishCollection) {
        if (number % 5 === 0 && number % 3 !== 0) {
            soldiers.push(fishSoldiers)
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fishRegular of fishCollection) {
        if (number % 3 !== 0 && number % 5 !== 0) {
            regularFish.push(fishRegular)
    return regularFish
}
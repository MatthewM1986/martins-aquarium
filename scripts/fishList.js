

import { Fish } from './fish.js'
import { useFish, mostHolyFish, soldierFish, nonHolyFish } from './fishDataProvider.js'

const sortedFishHTML = (arrayOfFish) => {
    let fishHTMLData = ""
    for (const fish of arrayOfFish) {
        fishHTMLData += Fish(fish)
    }
    return fishHTMLData
}

export const FishList = () => {
    const contentElement = document.querySelector(".aquarium__fish--container")

    const holyFish = mostHolyFish()
    const holyFishHTML = sortedFishHTML(holyFish)

    const soldiers = soldierFish()
    const soldierFishHTML = sortedFishHTML(soldiers)

    const regularFish = nonHolyFish()
    const regularFishHTML = sortedFishHTML(regularFish)

    contentElement.innerHTML += `
        <div class="aquarium__fish--list">
            ${holyFishHTML}
            ${soldierFishHTML}
            ${regularFishHTML}
        </div>
        `
}


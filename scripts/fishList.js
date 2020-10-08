

import { Fish } from './fish.js'
import { useFish } from './fishDataProvider.js'

export const FishList = () => {

   
    const contentElement = document.querySelector(".aquarium__fish--container")

    const fishes = useFish()

    let fishHTMLData = ""
    for (const fish of fishes) {
        fishHTMLData += Fish(fish)
    }

    contentElement.innerHTML += `
        <div class="aquarium__fish--list">
            ${fishHTMLData}
        </div>
        `
}
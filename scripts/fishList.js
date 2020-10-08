

import { Fish } from './fish.js'
import { useFish } from './fishDataProvider.js'

export const FishList = () => {

   
    const contentElement = document.querySelector(".aquarium__fish--each")

    const fishes = useFish()

    let fishHTMLData = ""
    for (const fish of fishes) {
        fishHTLData += Fish(fish)
    }

    contentElement.innerHTML += `
        <div class="aquarium__fish--each">
            ${fishHTMLData}
        </div>
        `
}
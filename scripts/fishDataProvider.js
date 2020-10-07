

const fishCollection = [
    {
        name: "Chevy",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0OTY5MTExMzM4NjI0OTky/tropical-fish-for-beginners.webp",
        species: "Neon Tetra",
        size: 1.5,
        diet: "Brine Shrimp, Daphnia & Bloodworms",
        harvested: "Amazon River Basin, Brazil"
    },
    {
        name: "Ford",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0OTY5MTExMzM4ODIxNjAw/tropical-fish-for-beginners.webp",
        species: "Species: Swordtail",
        size: 6.3,
        diet: "Daphnia & Bloodworms",
        harvested: "Pánuco River, Mexico"
    },
    {
        name: "Dodge",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_600/MTc0OTY5MTExMzM4NzU2MDY0/tropical-fish-for-beginners.webp",
        species: "Fancy Guppy",
        size: 2.4,
        diet: "Algal, Plant Fragments & Aquatic Insects",
        harvested: "Rio Grande River, Jamaica"
    },
    {
        name: "Toyota",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0OTY5MTExMzM4NTU5NDU2/tropical-fish-for-beginners.webp",
        species: "Cory Catfish",
        size: 4.7,
        diet: "Insects, Insect Larvae and Worms",
        harvested: "Rio de la Plata, Argentina"
    },
    {
        name: "Ferrari",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0NDc2MDgzOTg5NTg3NTkw/tropical-fish-for-beginners.webp",
        species: "Black-skirt Tetra",
        size: 3.0,
        diet: "Daphnia, Mosquito Larvae & Bloodworms",
        harvested: "Paraguay River, Brazil"
    },
    {
        name: "Nissan",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0OTY5MTExMzM5MDE4MjA4/tropical-fish-for-beginners.webp",
        species: "Zebra Danio",
        size: 1.5,
        diet: "Zooplankton, Phytoplankton, Insects",
        harvested: "utlej river basin, Paksitan"
    },
    {
        name: "Honda",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0OTY5MTExMzM4NjkwNTI4/tropical-fish-for-beginners.webp",
        species: "Cherry Barb",
        size: 2.0,
        diet: "Daphnia & Bloodworms",
        harvested: "Mahaweli River, Sri Lanka"
    },
    {
        name: "Porsche",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0OTY5MTExMzM5MDgzNzQ0/tropical-fish-for-beginners.webp",
        species: "Harlequin Rasbora",
        size: 2.0,
        diet: "Daphnia",
        harvested: "Siak River, Sumatra"
    },
    {
        name: "Lambo",
        image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTc0OTY5MTExMzM4OTUyNjcy/tropical-fish-for-beginners.webp",
        species: "Platy",
        size: 2.4,
        diet: "Crustaceans, Insects & Annelid Worms",
        harvested: "Actopan River, Mexico"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}
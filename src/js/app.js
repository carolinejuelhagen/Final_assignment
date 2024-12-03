// NAVBAR
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll (".navbar__link");

toggleMenuButton.addEventListener("click", ()=>{
    navbarLinksContainer.classList.toggle("navbar__links--active");
})

// ARRAY LOCATIONS

const locations = [
    {
    title: "Vilma Sjøbad, Tofte",
    description:
        "A stunning seaside venue offering a romantic atmosphere with breathtaking fjord views—perfect for a tranquil, scenic wedding celebration.",
    price: 37500,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/vilmaSjobad1.jpg",
    },
    {
    title: "Villa Utsikten, Tofte",
    description:
        "Experience elegance and charm at this hillside villa, boasting panoramic views of the fjord—an ideal spot for a memorable wedding.",
    price: 32000,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/villaUtsikten1.webp",
    },
    {
    title: "Astral, Lilleborg, Oslo",
    description: 
    "The premises have a rough and industrial feel. Large window areas and modern furnishings also provide good settings for brides and grooms who want their wedding in an urban, unique and non-traditional environment.",
    price: 36000,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/astral1.jpeg",
    },
    {
    title: "Helgaker Gård, Gran",
    description:
        "A rustic farm with picturesque landscapes, offering a warm, intimate atmosphere for couples seeking a traditional countryside wedding.",
    price: 17500,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/helgaakerGaard1.webp",
    },
    {
    title: "Holm gård, Hurum",
    description:
        "Set in serene nature, this charming farm venue blends rustic elegance with scenic views, perfect for a cozy and relaxed wedding.",
    price: 24900,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/holmGaard1.jpg",
    },
    {
    title: "Svensefjøset, Lier",
    description:
        "A historic barn venue with a cozy, rustic charm and modern amenities—ideal for couples looking for a country-style wedding.",
    price: 18000,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/svensefjoset1.jpg",
    },
    {
    title: "Lysebu, Oslo (Holmenkollen)",
    description:
        "ocated high in the hills, Lysebu offers panoramic views of Oslo and a stylish, serene environment for your dream wedding.",
    price: 51900,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/lysebu1.jpg",
    },
    {
    title: "Rønningen, Lierdalen (Sylling)",
    description:
        "A tranquil, nature-filled location with charming rustic settings, perfect for couples who desire a peaceful and intimate wedding celebration.",
    price: 17000,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/ronningen1.jpg",
    },
    {
    title: "Bogstad Gård, Oslo",
    description:
        "A beautiful historic manor surrounded by nature, offering a timeless, elegant atmosphere for a sophisticated wedding experience.",
    price: 23000,
    imageUrl: "../src/assets/images/locations/bogstad1.jpg",
    },
    {
    title: "Båtsportens hus, Sandvika",
    description:
        "A unique waterfront venue perfect for maritime-inspired weddings, offering a stylish, modern setting with spectacular views of the fjord.",
    price: 12000,
    dealOffer: false,
    imageUrl: "../src/assets/images/locations/baatsportensHus1.webp",
    }
];

const locationsCardContainer = document.querySelector(".locations__card-container");

// RENDER LOCATIONS
const renderLocations = (locations) => {
    locationsCardContainer.textContent = ""; 

    locations.forEach((location) => {

        const card = document.createElement("article");
        card.classList.add("locations__card");

        const img = document.createElement("img");
        img.src = location.imageUrl || "default-placeholder.jpeg";
        img.alt = location.title || "Location image";

        const cardContent = document.createElement("div");
        cardContent.classList.add("card__content");

        const title = document.createElement("h3");
        title.textContent = location.title || "Untitled Location";

        const description = document.createElement("p");
        description.textContent = location.description || "No description available.";

        const price = document.createElement("p");
        price.textContent = `Price ${location.price || "N/A"} NOK`;

        const selectLocationButton = document.createElement("button");
        selectLocationButton.classList.add("select-location-button");
        selectLocationButton.textContent = "Select location";

        cardContent.append(title, description, price);
        card.append(img, cardContent, selectLocationButton);
        locationsCardContainer.append(card);
    });
};

window.addEventListener("DOMContentLoaded", () => renderLocations(locations));
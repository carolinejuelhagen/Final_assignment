// NAVBAR TOGGLE
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");

toggleMenuButton.addEventListener("click", () => {
    navbarLinksContainer.classList.toggle("navbar__links--active");
});

// LOCATIONS
// DOM Elements
const filterInput = document.querySelector("#filterInput");
const filterDropdown = document.querySelector("#filterDropdown");
const locationsCardContainer = document.querySelector(".locations__card-container");

// Array locations
const locations = [
    {
    title: "Vilma Sjøbad, Tofte",
    description: "A stunning seaside venue offering a romantic atmosphere.Vilma Sjøbad offers a serene atmosphere, perfect for couples seeking an intimate wedding with breathtaking sunset views and coastal charm.",
    price: 37500,
    cleaning: false,
    service: false,
    type: "seaside",
    imageUrl: "../src/assets/images/locations/vilmaSjobad1.jpg",
    },
    {
    title: "Villa Utsikten, Tofte",
    description: "Perched on a hillside overlooking the fjord, Villa Utsikten combines elegance with scenic beauty. With its stunning panoramic views, this venue is an idyllic spot for couples desiring a sophisticated yet tranquil wedding experience.",
    price: 32000,
    cleaning: true,
    service: false,
    type: "seaside",
    imageUrl: "../src/assets/images/locations/villaUtsikten1.webp",
    },
    {
    title: "Astral, Lilleborg",
    description: 
    "Located in the heart of Oslo, Astral features a unique blend of industrial charm and modern design. Perfect for urban couples, this venue offers large windows, contemporary furnishings, and a vibrant, non-traditional wedding setting",
    price: 36000,
    cleaning: false,
    service: false,
    type: "urban",
    imageUrl: "../src/assets/images/locations/astral1.jpeg",
    },
    {
    title: "Helgaker Gård, Gran",
    description:
        "Nestled in the countryside, Helgaker Gård is a charming farm venue surrounded by scenic landscapes. Ideal for traditional weddings, it provides an intimate setting with rustic charm and a warm, welcoming atmosphere",
    price: 17500,
    cleaning: false,
    service: false,
    type: "farm",
    imageUrl: "../src/assets/images/locations/helgaker1.jpeg",
    },
    {
    title: "Holm gård, Hurum",
    description:
        "Tucked away in serene nature, Holm gård combines rustic elegance with scenic beauty. This cozy venue is perfect for couples dreaming of a relaxed wedding amidst rolling fields and peaceful surroundings.",
    price: 24900,
    cleaning: false,
    service: false,
    type: "farm",
    imageUrl: "../src/assets/images/locations/holmGaard1.jpg",
    },
    {
    title: "Svensefjøset, Lier",
    description:
        "A historic barn with modern amenities, Svensefjøset offers a delightful mix of tradition and comfort. Its warm interiors and country-style ambiance make it a perfect choice for couples envisioning a charming rural wedding.",
    price: 18000,
    cleaning: false,
    service: true,
    type: "farm",
    imageUrl: "../src/assets/images/locations/svensefjoset1.jpg",
    },
    {
    title: "Lysebu, Holmenkollen",
    description:
        "Situated high in the Holmenkollen hills, Lysebu boasts spectacular views of Oslo. This stylish venue offers an elegant and serene environment, making it an ideal spot for a dream wedding with a touch of sophistication.",
    price: 51900,
    cleaning: false,
    service: false,
    type: "hillside",
    imageUrl: "../src/assets/images/locations/lysebu1.jpg",
    },
    {
    title: "Rønningen Gård, Lierdalen",
    description:
        "Rønningen is a tranquil retreat set in the midst of nature, offering charming rustic settings. Ideal for intimate weddings, this peaceful location provides a perfect escape from city life for a romantic celebration.",
    price: 17000,
    dcleaning: false,
    service: true,
    type: "farm",
    imageUrl: "../src/assets/images/locations/ronningen1.jpg",
    },
    {
    title: "Bogstad Gård, Oslo",
    description:
        "A historic estate surrounded by lush greenery, Bogstad Gård offers timeless elegance and charm. This stately manor is ideal for couples looking to host a sophisticated wedding in a serene, nature-filled setting.",
    price: 68000,
        cleaning: false,
    service: true,
    type: "farm",
    imageUrl: "../src/assets/images/locations/bogstad1.jpg",
    },
    {
    title: "Båtsportens hus, Sandvika",
    description:
        "Overlooking the stunning fjord, Båtsportens hus is a stylish waterfront venue. Its modern design and maritime-inspired setting make it a unique choice for couples seeking a vibrant, yet serene, wedding experience.",
    price: 12000,
    cleaning: true,
    service: true,
    type: "seaside",
    imageUrl: "../src/assets/images/locations/baatsportensHus1.webp",
    },
    {
    title: "Syverstad gård, Asker",
    description:
        "Located in the serene countryside of Asker, Syverstad Gård offers a rustic and charming setting for a fairytale wedding. Surrounded by lush greenery and peaceful landscapes, this traditional farm venue blends historic elegance with modern amenities, making it a perfect spot for an intimate and unforgettable celebration",
    price: 12000,
    cleaning: true,
    service: false,
    type: "farm",
    imageUrl: "../src/assets/images/locations/syverstad1.png",
    },
    {
    title: "S4, Oslo sentrum",
    description:
        "Perched atop a bustling cityscape, S4 Rooftop offers a sleek and contemporary venue with panoramic views of Oslo’s skyline. This urban oasis combines modern design with vibrant energy, making it ideal for couples seeking a stylish, cosmopolitan wedding in the heart of the city.",
    price: 12000,
    cleaning: true,
    service: true,
    type: "urban",
    imageUrl: "../src/assets/images/locations/s41.jpeg",
    }, 
    {
    title: "Studentenes roklubb, Bygdøy",
    description:
        "Nestled along the serene waterfront of Bygdøy, Roklubben offers a unique blend of natural beauty and elegant charm. With stunning fjord views, lush surroundings, and a cozy atmosphere, this venue is perfect for couples dreaming of a tranquil and picturesque wedding by the water.",
    price: 12000,
    cleaning: false,
    service: false,
    type: ["urban", "seaside"], 
    imageUrl: "../src/assets/images/locations/roklubben1.jpeg",
    }
];

// Function to render locations dynamically
const renderLocations = (locationsArray) => {
    locationsCardContainer.textContent = ""; // Clear previous content

    if (locationsArray.length === 0) {
        locationsCardContainer.innerHTML = `<p>No locations found!</p>`;
        return;
    }

    locationsArray.forEach((location) => {
        const card = document.createElement("article");
        card.classList.add("locations__card");
// Image
        const img = document.createElement("img");
        img.classList.add("locations__card-image");
        img.src = location.imageUrl || "default-placeholder.jpeg";
        img.alt = location.title || "Location image";
// Title        
        const title = document.createElement("h3");
        title.classList.add("locations__card-heading");
        title.textContent = location.title || "No Title";
// Description
        const description = document.createElement("p");
        description.classList.add("locations__card-description")
        description.textContent = location.description || "No description available.";
// Price
        const price = document.createElement("p");
        price.classList.add("locations__card-price");
        price.textContent = `Price: ${location.price || "N/A"} NOK`;
// Type
        const type = document.createElement("p");
        type.classList.add("locations__card-type")
        type.textContent = `Type: ${Array.isArray(location.type) ? location.type.join(", ") : location.type}`;
// Button
        const button = document.createElement("button");
        button.classList.add("select-location-button");
        button.textContent = "Select";
        button.addEventListener("click", () => {
            alert(`You selected ${location.title}`);
});
// Append child
        card.append(img, title, description, price, type, button);
        locationsCardContainer.appendChild(card);
    });
};

// Function to filter locations based on input and dropdown
const filterLocations = () => {
    const filterValue = filterInput.value.toLowerCase();
    const dropdownValue = filterDropdown.value;

    const filteredLocations = locations.filter((location) => {
        const matchesType =
            dropdownValue === "all" ||
            (Array.isArray(location.type)
                ? location.type.includes(dropdownValue)
                : location.type === dropdownValue);
        const matchesSearch = location.title.toLowerCase().includes(filterValue);

        return matchesType && matchesSearch;
    });

    renderLocations(filteredLocations);
};

// Event Listeners
filterInput.addEventListener("input", filterLocations);
filterDropdown.addEventListener("change", filterLocations);

// Initial render
window.addEventListener("DOMContentLoaded", () => renderLocations(locations));

// FAQ
document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const question = item.querySelector(".accordion-question");
        const answer = item.querySelector(".accordion-answer");

    question.addEventListener("click", () => {
        
      // Toggle the current answer
        const isActive = answer.style.display === "block";
        answer.style.display = isActive ? "none" : "block";

      // Collapse other open answers and remove active class
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
            otherItem.querySelector(".accordion-answer").style.display = "none";
            otherItem.querySelector(".accordion-question").classList.remove("active");
        }
    });
    });
});
});

// LOCAL STORAGE

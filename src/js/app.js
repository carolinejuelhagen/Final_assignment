// Declaring locations

const locations = [
	{
		title: "Vilma Sjøbad, Tofte",
		description:
			"A stunning seaside venue offering a romantic atmosphere.Vilma Sjøbad offers a serene atmosphere, perfect for couples seeking an intimate wedding with breathtaking sunset views and coastal charm.",
		price: 37500,
		cleaning: false,
		service: false,
		type: "seaside",
		imageUrl: "./assets/images/locations/vilmaSjobad1.jpg",
	},
	{
		title: "Villa Utsikten, Tofte",
		description:
			"Perched on a hillside overlooking the fjord, Villa Utsikten combines elegance with scenic beauty. With its stunning panoramic views, this venue is an idyllic spot for couples desiring a sophisticated yet tranquil wedding experience.",
		price: 32000,
		cleaning: true,
		service: false,
		type: "seaside",
		imageUrl: "./assets/images/locations/villaUtsikten1.webp",
	},
	{
		title: "Astral, Lilleborg",
		description:
			"Located in the heart of Oslo, Astral features a unique blend of industrial charm and modern design. Perfect for urban couples, this venue offers large windows, contemporary furnishings, and a vibrant, non-traditional wedding setting",
		price: 36000,
		cleaning: false,
		service: false,
		type: "urban",
		imageUrl: "./assets/images/locations/astral1.jpeg",
	},
	{
		title: "Helgaker Gård, Gran",
		description:
			"Nestled in the countryside, Helgaker Gård is a charming farm venue surrounded by scenic landscapes. Ideal for traditional weddings, it provides an intimate setting with rustic charm and a warm, welcoming atmosphere",
		price: 17500,
		cleaning: false,
		service: false,
		type: "farm",
		imageUrl: "./assets/images/locations/helgaker1.jpeg",
	},
	{
		title: "Holm gård, Hurum",
		description:
			"Tucked away in serene nature, Holm gård combines rustic elegance with scenic beauty. This cozy venue is perfect for couples dreaming of a relaxed wedding amidst rolling fields and peaceful surroundings.",
		price: 24900,
		cleaning: false,
		service: false,
		type: "farm",
		imageUrl: "./assets/images/locations/holmGaard1.jpg",
	},
	{
		title: "Svensefjøset, Lier",
		description:
			"A historic barn with modern amenities, Svensefjøset offers a delightful mix of tradition and comfort. Its warm interiors and country-style ambiance make it a perfect choice for couples envisioning a charming rural wedding.",
		price: 18000,
		cleaning: false,
		service: true,
		type: "farm",
		imageUrl: "./assets/images/locations/svensefjoset1.jpg",
	},
	{
		title: "Lysebu, Holmenkollen",
		description:
			"Situated high in the Holmenkollen hills, Lysebu boasts spectacular views of Oslo. This stylish venue offers an elegant and serene environment, making it an ideal spot for a dream wedding with a touch of sophistication.",
		price: 51900,
		cleaning: false,
		service: false,
		type: "hillside",
		imageUrl: "./assets/images/locations/lysebu1.jpg",
	},
	{
		title: "Rønningen Gård, Lierdalen",
		description:
			"Rønningen is a tranquil retreat set in the midst of nature, offering charming rustic settings. Ideal for intimate weddings, this peaceful location provides a perfect escape from city life for a romantic celebration.",
		price: 17000,
		dcleaning: false,
		service: true,
		type: "farm",
		imageUrl: "./assets/images/locations/ronningen1.jpg",
	},
	{
		title: "Bogstad Gård, Oslo",
		description:
			"A historic estate surrounded by lush greenery, Bogstad Gård offers timeless elegance and charm. This stately manor is ideal for couples looking to host a sophisticated wedding in a serene, nature-filled setting.",
		price: 68000,
		cleaning: false,
		service: true,
		type: "farm",
		imageUrl: "./assets/images/locations/bogstad1.jpg",
	},
	{
		title: "Båtsportens hus, Sandvika",
		description:
			"Overlooking the stunning fjord, Båtsportens hus is a stylish waterfront venue. Its modern design and maritime-inspired setting make it a unique choice for couples seeking a vibrant, yet serene, wedding experience.",
		price: 12000,
		cleaning: true,
		service: true,
		type: "seaside",
		imageUrl: "./assets/images/locations/baatsportensHus1.webp",
	},
	{
		title: "Syverstad gård, Asker",
		description:
			"Located in the serene countryside of Asker, Syverstad Gård offers a rustic and charming setting for a fairytale wedding. Surrounded by lush greenery and peaceful landscapes, this traditional farm venue blends historic elegance with modern amenities, making it a perfect spot for an intimate and unforgettable celebration",
		price: 12000,
		cleaning: true,
		service: false,
		type: "farm",
		imageUrl: "./assets/images/locations/syverstad1.png",
	},
	{
		title: "S4, Oslo sentrum",
		description:
			"Perched atop a bustling cityscape, S4 Rooftop offers a sleek and contemporary venue with panoramic views of Oslo’s skyline. This urban oasis combines modern design with vibrant energy, making it ideal for couples seeking a stylish, cosmopolitan wedding in the heart of the city.",
		price: 12000,
		cleaning: true,
		service: true,
		type: "urban",
		imageUrl: "./assets/images/locations/s41.jpeg",
	},
	{
		title: "Studentenes roklubb, Bygdøy",
		description:
			"Nestled along the serene waterfront of Bygdøy, Roklubben offers a unique blend of natural beauty and elegant charm. With stunning fjord views, lush surroundings, and a cozy atmosphere, this venue is perfect for couples dreaming of a tranquil and picturesque wedding by the water.",
		price: 12000,
		cleaning: false,
		service: false,
		type: ["urban", "seaside"],
		imageUrl: "./assets/images/locations/roklubben1.jpeg",
	},
];

// Declaring Packages
const packages = [
	{
		name: "Basic",
		description:
			"Perfect for intimate celebrations, this package provides the essentials for a beautiful wedding day without breaking the bank.",
		includes: [
			"Venue rental for ceremony and reception (4 hours)",
			"Minimal floral arrangements (bridal bouquet, groom’s boutonniere, and ceremony decor)",
			"Seating and table arrangements for up to 50 guests",
			"Basic sound system for ceremony and reception",
			"Dedicated day-of coordinator",
		],
		imageUrl: "./assets/icons/budget.svg",
		price: " From 50 000.-",
	},
	{
		name: "Standard",
		description:
			"A comprehensive package designed for couples seeking a balanced combination of elegance and convenience for their special day.",
		includes: [
			"Venue rental for ceremony and reception (6 hours)",
			"Full floral arrangements (bridal bouquet, bridesmaids' bouquets, boutonnieres, and centerpieces)",
			"Seating and table arrangements for up to 100 guests",
			"Professional DJ or live music for 4 hours",
			"Catering service (3-course meal and drinks for up to 100 guests)",
			"Dedicated wedding planner and day-of coordinator",
			"Wedding cake (3 tiers, customizable design)",
		],
		imageUrl: "./assets/icons/standard.svg",
		price: " From 100 000.-",
	},
	{
		name: "Premium",
		description:
			"Experience a luxurious, stress-free wedding with every detail meticulously planned and executed to perfection.",
		includes: [
			"Exclusive venue rental for the entire day",
			"Luxury floral arrangements (custom designs for all wedding party and venue decor)",
			"Seating and table arrangements for up to 200 guests",
			"Professional DJ, live band, or both for the entire event",
			"Premium catering service (multi-course meal, open bar, and dessert table)",
			"Dedicated full-service wedding planner and day-of coordination team",
			"Custom wedding cake (5 tiers with intricate designs)",
			"Photography and videography package (8 hours, includes edited highlight video and photo album)",
			"Bridal suite and groom's lounge access",
			"Guest favors and event styling",
		],
		imageUrl: "./assets/icons/premium.svg",
		price: " From 200 000.-",
	},
	{
		name: "Custom",
		description:
			"Tailored to your unique vision, this package allows you to customize every aspect of your wedding day for a truly one-of-a-kind celebration.",
		includes: [
			"Completely customizable venue setup",
			"Personalized floral arrangements and decor tailored to your theme",
			"Bespoke seating and table arrangements for up to 300 guests",
			"Custom catering options, including specialty dietary menus",
			"Entertainment options of your choice (DJ, live band, performers, etc.)",
			"Full-service wedding planner to bring your ideas to life",
			"Unique guest experiences (photo booths, interactive stations, etc.)",
			"High-end photography and videography package (unlimited hours, cinematic edits)",
			"Luxury bridal suite, groom's lounge, and transportation for the wedding party",
			"Personalized guest favors and keepsakes",
		],
		imageUrl: "./assets/icons/custom.svg",
		price: " Upon request",
	},
];

// Navbar toggle
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");

//Calling form elements for Contact

const form = document.querySelector(".contact__form");
const firstNameInput = document.querySelector("[name='firstName']");
const lastNameInput = document.querySelector("[name='lastName']");
const emailInput = document.querySelector("[name='email']");
const phoneInput = document.querySelector("[name='phone']");
const primaryLocationInput = document.querySelector(
	"[name='select-location1']"
);
const secondaryLocationInput = document.querySelector(
	"[name='select-location2']"
);
const tertiaryLocationInput = document.querySelector(
	"[name='select-location3']"
);
const packageInput = document.querySelector("[name='select-package']");
const messageInput = document.querySelector("[name='message']");

// Locations DOM Elements
const filterInput = document.querySelector("#filterInput");
const filterDropdown = document.querySelector("#filterDropdown");
const locationsCardContainer = document.querySelector(
	".locations__card-container"
);

// Connecting to local storage
const customerSelections =
	JSON.parse(localStorage.getItem("customerSelections")) || [];

toggleMenuButton.addEventListener("click", () => {
	navbarLinksContainer.classList.toggle("navbar__links--active");
});

//Function to render locations dynamically
const renderLocations = (locationsArray) => {
	locationsCardContainer.textContent = "";

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
		description.classList.add("locations__card-description");
		description.textContent =
			location.description || "No description available.";

		// Price
		const price = document.createElement("p");
		price.classList.add("locations__card-price");
		price.textContent = `Price: ${location.price || "N/A"} NOK`;

		// Type
		const type = document.createElement("p");
		type.classList.add("locations__card-type");
		type.textContent = `Type: ${
			Array.isArray(location.type) ? location.type.join(", ") : location.type
		}`;

		// Append child
		card.append(img, title, description, price, type);
		locationsCardContainer.appendChild(card);
	});
};
// Function to render packages dynamically
const packagesCardContainer = document.querySelector(
	".packages__card-container"
);
const renderPackages = (packagesArray) => {
	packagesCardContainer.textContent = "";

	if (packagesArray.length === 0) {
		packagesCardContainer.innerHTML = `<p>No packages found!</p>`;
		return;
	}

	packagesArray.forEach((package) => {
		const card = document.createElement("article");
		card.classList.add("packages__card");

		const img = document.createElement("img");
		img.classList.add("packages__card-image");
		img.src = package.imageUrl || "default-placeholder.jpeg";
		img.alt = package.title || "Packages image";

		const contentContainer = document.createElement("div");
		contentContainer.classList.add("packages__card-content");

		const title = document.createElement("h3");
		title.classList.add("packages__card-heading");
		title.textContent = package.name || "No Title";

		const description = document.createElement("p");
		description.classList.add("packages__card-description");
		description.textContent =
			package.description || "No description available.";

		const price = document.createElement("p");
		price.classList.add("packages__card-price");
		price.textContent = `Price: ${package.price || "N/A"} NOK`;

		card.append(img, contentContainer);
		contentContainer.append(title, description, price);
		packagesCardContainer.appendChild(card);
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

// Wrap Event Listeners in DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
	if (filterInput && filterDropdown) {
		filterInput.addEventListener("input", filterLocations);
		filterDropdown.addEventListener("change", filterLocations);
	} else {
		console.error("Filter input or dropdown is missing from the DOM.");
	}

	// Initial render
	renderLocations(locations);
});

document.addEventListener("DOMContentLoaded", () => {
	renderPackages(packages);
});


// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
	const accordionItems = document.querySelectorAll(".accordion-item");

	accordionItems.forEach((item) => {
		const question = item.querySelector(".accordion-question");
		const answer = item.querySelector(".accordion-answer");

		question.addEventListener("click", () => {
			// Toggle the current answer
			const isActive = answer.style.display === "block";
			answer.style.display = isActive ? "none" : "block";

			// Collapse other open answers and remove active class
			accordionItems.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.querySelector(".accordion-answer").style.display = "none";
					otherItem
						.querySelector(".accordion-question")
						.classList.remove("active");
				}
			});
		});
	});
});

const storeCustomerSelection = () => {
	const customerFirstName = firstNameInput.value;
	const customerLastName = lastNameInput.value;
	const customerEmail = emailInput.value;
	const customerPhone = phoneInput.value;
	const customerFirstPriorityLocation = primaryLocationInput.value;
	const customerSecondPriorityLocation = secondaryLocationInput.value;
	const customerThirdPriorityLocation = tertiaryLocationInput.value;
	const customerPackage = packageInput.value;
	const customerMessage = messageInput.value;

	console.log(customerFirstName);
	console.log(customerLastName);
	console.log(customerEmail);
	console.log(customerPhone);
	console.log(customerFirstPriorityLocation);
	console.log(customerSecondPriorityLocation);
	console.log(customerThirdPriorityLocation);
	console.log(customerPackage);
	console.log(customerMessage);

	const selection = {
		id: Date.now(),
		customerFirstName,
		customerLastName,
		customerEmail,
		customerPhone,
		customerFirstPriorityLocation,
		customerSecondPriorityLocation,
		customerThirdPriorityLocation,
		customerPackage,
		customerMessage,
	};

	customerSelections.push(selection);
	form.reset();
	localStorage.setItem(
		"customerSelections",
		JSON.stringify(customerSelections)
	);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	storeCustomerSelection();
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  	if (event.target == modal) {
    modal.style.display = "none";
  	}
}
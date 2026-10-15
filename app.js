// =====================================================
// NSS WEBSITE JAVASCRIPT
// =====================================================


// =====================================================
// 1. SIDEBAR
// =====================================================

const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");


// Open Sidebar

openSidebar.addEventListener("click", function () {

    sidebar.classList.add("active");

    sidebarOverlay.classList.add("active");

});


// Close Sidebar

closeSidebar.addEventListener("click", function () {

    sidebar.classList.remove("active");

    sidebarOverlay.classList.remove("active");

});


// Close Sidebar when clicking outside

sidebarOverlay.addEventListener("click", function () {

    sidebar.classList.remove("active");

    sidebarOverlay.classList.remove("active");

});


// =====================================================
// 2. SIDEBAR NAVIGATION
// =====================================================

const sidebarLinks =
    document.querySelectorAll(".sidebar-nav a");


sidebarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        sidebar.classList.remove("active");

        sidebarOverlay.classList.remove("active");

    });

});


// =====================================================
// 3. CREATE EVENT
// =====================================================

const eventForm =
    document.getElementById("eventForm");

const eventContainer =
    document.getElementById("eventContainer");


// Get saved events from localStorage

let events =
    JSON.parse(localStorage.getItem("nssEvents")) || [];


// =====================================================
// 4. DISPLAY EVENTS
// =====================================================

function displayEvents() {

    // Remove previously created events

    const createdEvents =
        document.querySelectorAll(".created-event");

    createdEvents.forEach(function (event) {

        event.remove();

    });


    // Display every saved event

    events.forEach(function (event, index) {

        createEventCard(event, index);

    });

}


// =====================================================
// 5. CREATE EVENT CARD
// =====================================================

function createEventCard(event, index) {

    // Convert date

    const date = new Date(event.date);

    const day =
        String(date.getDate()).padStart(2, "0");

    const month =
        date.toLocaleString("en-US", {
            month: "short"
        }).toUpperCase();


    // Create event card

    const eventCard =
        document.createElement("div");

    eventCard.classList.add(
        "event-card",
        "created-event"
    );


    eventCard.innerHTML = `

        <div class="event-date">

            <strong>${day}</strong>

            <span>${month}</span>

        </div>


        <div class="event-info">

            <h3>
                ${event.name}
            </h3>


            <p>

                <i class="fa-solid fa-location-dot"></i>

                ${event.location}

            </p>


            <p>

                <i class="fa-solid fa-clock"></i>

                ${event.time}

            </p>


            <p>

                ${event.description}

            </p>


            <p>

                <i class="fa-solid fa-user"></i>

                Organized by: ${event.organizer}

            </p>


            <button
                class="delete-event-btn"
                onclick="deleteEvent(${index})">

                <i class="fa-solid fa-trash"></i>

                Delete Event

            </button>

        </div>

    `;


    eventContainer.appendChild(eventCard);

}


// =====================================================
// 6. SUBMIT CREATE EVENT FORM
// =====================================================

eventForm.addEventListener("submit", function (event) {

    // Stop page refresh

    event.preventDefault();


    // Get form values

    const eventName =
        document.getElementById("eventName").value.trim();


    const eventDate =
        document.getElementById("eventDate").value;


    const eventTime =
        document.getElementById("eventTime").value;


    const eventLocation =
        document.getElementById("eventLocation").value.trim();


    const eventOrganizer =
        document.getElementById("eventOrganizer").value.trim();


    const eventDescription =
        document.getElementById("eventDescription").value.trim();


    // Create event object

    const newEvent = {

        name: eventName,

        date: eventDate,

        time: eventTime,

        location: eventLocation,

        organizer: eventOrganizer,

        description: eventDescription

    };


    // Add event to array

    events.push(newEvent);


    // Save to localStorage

    localStorage.setItem(
        "nssEvents",
        JSON.stringify(events)
    );


    // Show new event

    displayEvents();


    // Clear form

    eventForm.reset();


    // Success message

    alert("Event created successfully!");


    // Go to Events section

    document
        .getElementById("events")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// =====================================================
// 7. DELETE EVENT
// =====================================================

function deleteEvent(index) {

    const confirmDelete =
        confirm("Are you sure you want to delete this event?");


    if (confirmDelete) {

        // Remove event

        events.splice(index, 1);


        // Update localStorage

        localStorage.setItem(
            "nssEvents",
            JSON.stringify(events)
        );


        // Display updated events

        displayEvents();

    }

}


// =====================================================
// 8. REGISTER BUTTON
// =====================================================

const registerButtons =
    document.querySelectorAll(".register-btn");


registerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Thank you for your interest! Event registration will be available soon."
        );

    });

});


// =====================================================
// 9. CONTACT FORM
// =====================================================

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    alert(
        "Thank you! Your message has been submitted."
    );


    contactForm.reset();

});


// =====================================================
// 10. GALLERY
// =====================================================

const galleryImages =
    document.querySelectorAll(".gallery-container img");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        alert(
            "You clicked on an NSS activity image!"
        );

    });

});


// =====================================================
// 11. LOAD EVENTS WHEN PAGE OPENS
// =====================================================

displayEvents();


// =====================================================
// 12. PAGE LOADED
// =====================================================

console.log(
    "NSS Website loaded successfully!"
);
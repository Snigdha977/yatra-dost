const places = [
    {
      name: "Paris",
      description: "The city of lights, known for the Eiffel Tower and art museums.",
      touristSpots: ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"],
      resorts: [
        "Hotel de Paris - $300/night",
        "Eiffel Stay - $200/night",
        "Louvre Palace Hotel - $250/night",
      ],
      map: "https://www.google.com/maps/place/Paris,+France",
      guide: "https://www.makemytrip.com/tripideas/memorable-experiences-paris",
    },
    {
      name: "New York",
      description: "The Big Apple, famous for Times Square and Central Park.",
      touristSpots: ["Statue of Liberty", "Central Park", "Times Square"],
      resorts: [
        "Times Square Hotel - $400/night",
        "Liberty Inn - $150/night",
        "Central Park Suites - $350/night",
      ],
      map: "https://www.google.com/maps/place/New+York,+NY,+USA",
      guide: "https://www.makemytrip.com/tripideas/memorable-experiences-new-york",
    },
    {
      name: "Tokyo",
      description: "A bustling city with a mix of tradition and modernity.",
      touristSpots: ["Tokyo Tower", "Shinjuku Gyoen", "Akihabara"],
      resorts: [
        "Tokyo Bay Hotel - $250/night",
        "Shinjuku Inn - $180/night",
        "Akihabara Stay - $300/night",
      ],
      map: "https://www.google.com/maps/place/Tokyo,+Japan",
      guide: "https://www.makemytrip.com/tripideas/memorable-experiences-tokyo",
    },
  ];
  
  function searchPlace() {
    const destination = document.getElementById("destination").value.trim().toLowerCase();
    const place = places.find((p) => p.name.toLowerCase() === destination);
  
    const details = document.getElementById("details");
    if (place) {
      details.innerHTML = `
        <h2>${place.name}</h2>
        <p>${place.description}</p>
        <h3>Tourist Spots:</h3>
        <ul>
          ${place.touristSpots.map((spot) => `<li>${spot}</li>`).join("")}
        </ul>
        <h3>Resorts:</h3>
        <ul>
          ${place.resorts.map((resort) => `<li>${resort}</li>`).join("")}
        </ul>
        <a href="${place.map}" target="_blank">View on Map</a> | 
        <a href="${place.guide}" target="_blank">Read Travel Guide</a>
      `;
    } else {
      details.innerHTML = `<p>No details found for "${destination}".</p>`;
    }
  }
  
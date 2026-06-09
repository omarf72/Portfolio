

//"https://qlk1zy4874.execute-api.us-east-1.amazonaws.com/visitor-count"


async function updateVisitorStats() {
  const API_URL = "https://qlk1zy4874.execute-api.us-east-1.amazonaws.com/visitor-count";

  const isOwner = localStorage.getItem("portfolio-owner") === "true";

  let requestBody;

  if (isOwner) {
    console.log("Owner detected. Reading stats only.");

    requestBody = {
      action: "read"
    };
  } else {
    let visitorId = localStorage.getItem("portfolio-visitor-id");
    let visitType;

    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem("portfolio-visitor-id", visitorId);
      visitType = "new";
    } else {
      visitType = "returning";
    }

    requestBody = {
      action: "update",
      visitType: visitType
    };
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    document.getElementById("unique-visitors").textContent = data.uniqueVisitors;
    document.getElementById("returning-visits").textContent = data.returningVisits;
    document.getElementById("total-visits").textContent = data.totalVisits;
  } catch (error) {
    console.error("Visitor counter error:", error);

    document.getElementById("unique-visitors").textContent = "Unavailable";
    document.getElementById("returning-visits").textContent = "Unavailable";
    document.getElementById("total-visits").textContent = "Unavailable";
  }
}

updateVisitorStats();
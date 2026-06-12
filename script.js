async function fetchUser() {
    const userData = document.getElementById("userData");
    const error = document.getElementById("error");
    const loading = document.getElementById("loading");

    userData.innerHTML = "";
    error.innerHTML = "";
    loading.innerHTML = "Loading...";

    try {
        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        const user = data.results[0];

        userData.innerHTML = `
            <h3>User Information</h3>
            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Country:</strong> ${user.location.country}</p>
        `;
    }
    catch (err) {
        error.innerHTML = "Failed to fetch user data. Please try again.";
        console.error(err);
    }
    finally {
        loading.innerHTML = "";
    }
}

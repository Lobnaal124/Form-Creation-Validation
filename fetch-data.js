// Define the asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Define the API URL
    const dataContainer = document.getElementById('api-data'); // Select the data container element

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert the response to JSON

        dataContainer.innerHTML = ''; // Clear the loading message

        const userList = document.createElement('ul'); // Create a <ul> element

        // Loop through the users array and create a <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> element
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        dataContainer.appendChild(userList); // Append the <ul> to the data container
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
    }
}

// Add event listener for DOMContentLoaded to invoke fetchUserData
document.addEventListener('DOMContentLoaded', fetchUserData);

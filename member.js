var selectedRow = null;



var add_button = window.document.getElementById('add_button')

add_button.onclick = function () {

    var full_name = document.getElementById("full_name").value;
    var flat_number = document.getElementById("flat_number").value;
    var family_member = document.getElementById("family_member").value;
    var vehicle_name = document.getElementById("vehicle_name").value;
    var vehicle_number = document.getElementById("vehicle_number").value;
    var contact_number = document.getElementById("contact_number").value;

    var data = { full_name, flat_number, family_member, vehicle_name, vehicle_number, contact_number };

    // Get the existing data from local storage
    let storedData = localStorage.getItem("formData");

    // If there is no existing data, create an empty array
    if (!storedData) {
        storedData = [];
    } else {
        // Otherwise, parse the stored data from a JSON string to an array
        storedData = JSON.parse(storedData);
    }

    // Add the new data to the array
    storedData.push(data);

    // Store the updated data in local storage
    localStorage.setItem("formData", JSON.stringify(storedData));

    // // Clear the form fields for the next input
    // document.getElementById("full_name").value = "";
    // document.getElementById("flat_number").value = "";
    // document.getElementById("family_member").value = "";
    // document.getElementById("vehicle_name").value = "";
    // document.getElementById("vehicle_number").value = "";
    // document.getElementById("contact_number").value = "";

}


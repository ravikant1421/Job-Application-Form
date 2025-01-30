console.log(localStorage.getItem("form_data"));
document.addEventListener("DOMContentLoaded", () => {
    let firstNameField = document.getElementById("first_name");
    let lastNameField = document.getElementById("last_name");
    let emailField = document.getElementById("email");
    let phoneNoField = document.getElementById("phone_no");
    let jobRoleField = document.getElementById("job_role");
    let dateField = document.getElementById("date");
    let cityField = document.getElementById("city");
    let pincodeField = document.getElementById("pincode");
    let addressField = document.getElementById("address");
    let anchor = document.getElementById("cv_link");

    let data = JSON.parse(localStorage.getItem("form_data"))
    const storedFile = localStorage.getItem("uploaded_file");

    firstNameField.value = data.first_name;
    lastNameField.value = data.last_name;
    emailField.value = data.email;
    phoneNoField.value = data.phone_no;
    jobRoleField.value = data.job_role;
    dateField.value = data.date;
    cityField.value = data.city;
    pincodeField.value = data.pincode;
    addressField.value = data.address;

    const fileData = JSON.parse(storedFile);
    const { name, type, content } = fileData;
    anchor.href = content; 
    anchor.download = name; 
    anchor.innerHTML = name

})
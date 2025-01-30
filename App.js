
document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");
    let button = document.getElementById("apply_button");
    let alert = document.getElementById("alert");
    let fileInput = document.getElementById("file_cv");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        let formData = new FormData(form);
        let data = {};
        formData.forEach((val, key) => {
            data[key] = val;
        })
        let isCompleteData = Object.values(data).every((val)=>{
            return val != "" && val !=null && val !=undefined
        })
        const file = fileInput.files[0];
        if (file && isCompleteData) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                const fileData = {
                    name: file.name,
                    type: file.type,
                    content: reader.result,
                };
                localStorage.setItem("uploaded_file", JSON.stringify(fileData));
                localStorage.setItem("form_data", JSON.stringify(data));
                window.location.href = "submited.html"
            };
        }
        else {
            alert.style.visibility = "visible"
        }
    });
});

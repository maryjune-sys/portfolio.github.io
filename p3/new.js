function MyFunction() {

    var Fname = document.getElementById("fname").value;
    var Lname = document.getElementById("lname").value;
    var Email = document.getElementById("email").value;
    var Pass = document.getElementById("pass").value;
    var Phone = document.getElementById("phone").value;
    var Birthday = document.getElementById("birthday").value;
    var Course = document.getElementById("course").value;

    var Gender = document.querySelector('input[name="gender"]:checked')?.value;
    var TC = document.querySelector('input[name="agree"]:checked')?.value;

    if (Fname !== "" && Lname !== "" && Email !== "" && Pass !== "" && Phone !== "" && Birthday !== "" && Course !== "" && Gender !== "" && TC !== "")
    {
        alert("REGISTRATION SUCCESSFULLY.");

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("birthday").value = "";
        document.getElementById("course").value = "";

        document.querySelectorAll('input[name="gender"]').forEach(radio=> radio.checked = false);
        document.querySelectorAll('input[name="agree"]').forEach(radio=> radio.checked = false);
    }
    else 
    {
        alert ("Please complete the necessary fields.");
    }
}
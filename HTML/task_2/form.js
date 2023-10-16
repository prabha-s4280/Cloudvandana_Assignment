let surveyForm = document.getElementById("survey-form");
let popup = document.getElementById("popup");
let popupValues = document.getElementById("popup-values");
let closePopup = document.getElementById("close-popup");

popup.style.display="none";

surveyForm.addEventListener("submit", function (event) {
    event.preventDefault();
    displayFormDetails();
    openPopup();
});

closePopup.addEventListener("click", function () {
    closePopupFn();
});

function displayFormDetails() {
    popupValues.innerHTML = "";
    let isValidDob=true;
    let isValidPhone=true;
    let formData=new FormData(surveyForm);
    for(let [name,value] of formData){
        let div=document.createElement("div");
        div.textContent=`${name}: ${value}`;
        popupValues.appendChild(div);

        if(name==="Date Of Birth"){
            isValidDob=validateDOB(value);
        }

        if(name=="Contact Details"){
            isValidPhone=mobileNumberValidation(value);
        }

    }
    if(!isValidDob){
        popupValues.innerHTML="Invalid Date Of Birth.";
    }
    if(!isValidPhone){
        popupValues.innerHTML="Invalid Mobile Number."
    }
}
function openPopup() {
    popup.style.display = "block";
}

function closePopupFn() {
    popup.style.display = "none";
    surveyForm.reset();
}

function validateDOB(DOB){
    const pattern=/^\d{4}-\d{2}-\d{2}$/;

    if(!DOB.match(pattern)){
        return false;
    }
    return true;
}

function mobileNumberValidation(Number){
    const pattern=/^\d{10}$/;
    return Number.match(pattern);
}
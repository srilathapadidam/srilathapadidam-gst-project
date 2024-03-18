

const btnEl = document.getElementById("paymentBtn");

btnEl.addEventListener("click", () => {

  const nameEl = document.getElementById("nameInput");
  const emailEl = document.getElementById("emailInput");
  const mobileEl = document.getElementById("mobileInput");
  const placeEl = document.getElementById("placeInput");

  

  const resNameEl = document.getElementById("resName");
  const resEmailEl = document.getElementById("resEmail");
  const resMobileEl = document.getElementById("resMobile");
  const resPlaceEl = document.getElementById("resPlace");

  const totalAmountEl = document.getElementById("totalAmount");

  const gst = document.getElementById("totalWithGst");

  const wallCabinEl = document.getElementById("wallCabin").value;
  const besideTableEl = document.getElementById("besideTable").value;
  const bookCaseEl = document.getElementById("bookCase").value;
  const deskSpaceEl = document.getElementById("deskSpace").value;
  const officeChairEl = document.getElementById("officeChair").value;
  const gstEl = document.getElementById("gstInput").value;

  resNameEl.innerHTML = `Name: ${nameEl.value}`;
  resNameEl.classList.add("name_element");

  resEmailEl.innerHTML = `E-mail : ${emailEl.value}`;
  resEmailEl.classList.add("email_element");

  resMobileEl.innerHTML = `Mobile: ${mobileEl.value}`;
  resMobileEl.classList.add("mobile_element");

  resPlaceEl.innerHTML = `Place: ${placeEl.value}`;
  resPlaceEl.classList.add("place_element");

  let total = [
    parseInt(wallCabinEl),
    parseInt(besideTableEl),
    parseInt(bookCaseEl),
    parseInt(deskSpaceEl),
    parseInt(officeChairEl),
  ];

  amount = 0;

  for (let i = 0; i < total.length; i++) {

    amount += total[i];
  }

  let totalAmount = amount * ( gstEl/ 100) + amount;
  totalAmountEl.innerHTML = `Total bill is: ${amount}`
  totalWithGstEl = document.getElementById('totalWithGst');
  totalWithGstEl.innerHTML = `Actual bill payment With ${gstEl}% GST : ${totalAmount}`;
  
  
  if(totalAmount <= 30000){

        totalWithGstEl.innerHTML = ` Actual bill payment With ${gstEl}% GST : ${totalAmount}`;

    } else if (totalAmount > 50000){

      document.getElementById("totalAmount").innerHTML = ` Total bill payment after discount is : ${totalAmount -1000}/-<br> Note :
      bill exceeds more than 50000 then u will get 1000 discount on ur total bill`; 
    }
    else{
      document.getElementById("totalAmount").innerHTML = `Total bill payment after discount is : ${totalAmount -500}/-<br> Note : bill in between 30000 to 50000 then u will get 500 discount on ur total bill`;
    }
    }  
);

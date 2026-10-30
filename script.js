
function showDiscountAlert() {
    alert("🎉 HARDY TECH SPECIAL: Use code 'HARDY2026' at checkout to receive 15% off your order!");
}

function orderProduct(productName, price) {
    alert("🛒 Cart Updated!\nItem: " + productName + "\nPrice: " + price + "\nThank you for choosing HARDY TECH!");
}


function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();

    if (name === "" || email === "") {
        alert("Please complete the required fields.");
        return;
    }

    alert("✅ Thank you, " + name + "!\nYour inquiry has been received. Our team will contact you at " + email + " within 24 hours.");
    document.getElementById("contactForm").reset();
}
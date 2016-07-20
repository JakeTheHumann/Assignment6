//
document.getElementById('addressType').addEventListener('change', otherAddressType, false);
function otherAddressType() {
    if (document.getElementById('addressType').value === 'other') {
        document.getElementById('divOtherAddress').style.display = 'block';
    } else {
        document.getElementById('divOtherAddress').style.display = 'none';
    }
}








document.getElementById('name').addEventListener('blur', nameCheck, false);
function nameCheck() {
    var name = document.getElementById('name');
    var nameRegEx = /^[^0-9]+$/g;
    if (!nameRegEx.test(name.value)) {
        window.alert('Name is incorrect. Please do not use numbers.');
    } 
}
document.getElementById('zip').addEventListener('blur', zipCheck, false);
function zipCheck() {
    var zip = document.getElementById('zip');
    var zipRegEx = /^[0-9]{5}$/g;
    if (!zipRegEx.test(zip.value)) {
        window.alert('Zipcode is wrong.');
    } 
}
document.getElementById('phone').addEventListener('blur', phoneCheck, false);
function phoneCheck() {
    var phone = document.getElementById('phone');
    var phoneRegEx = /^\(\d{3}\)\s\d{3}-\d{4}$/g;
    if (!phoneRegEx.test(phone.value)) {
        window.alert('Phone number format is incorrect. It should be: (123) 456-7890');
    } 
}

document.getElementById('email').addEventListener('blur', emailCheck, false);
function b() {}
function emailCheck() {
    var email = document.getElementById('email');
    var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/g;
    if (!emailRegEx.test(email.value)) {
        window.alert('Email format is incorrect.');
    } 
}












































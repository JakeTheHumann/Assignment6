document.getElementById('addressType').addEventListener('change', otherAddressType, false);
function otherAddressType() {
    if (document.getElementById('addressType').value === 'other') {
        document.getElementById('divOtherAddress').style.display = 'block';
    } else {
        document.getElementById('divOtherAddress').style.display = 'none';
    }
}
document.getElementById('name').addEventListener('blur', bla, false);
function bla() {
    alert("Triggered");
}
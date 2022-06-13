console.log('Welcome to The Prescription Tool');

// ADD MEDICAL NOTE FIELD
function addNewMNField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('note-field');
    newNode.setAttribute('rows', '1');
    newNode.setAttribute('placeholder', 'Enter New Note');

    let mn = document.getElementById('mn');
    let mnAdd = document.getElementById('mnAdd');

    mn.insertBefore(newNode, mnAdd[0]);
}

// DELETE MEDICAL NOTE FIELD
function delNewMNField() {
    let deleteNode = document.getElementsByClassName('note-field');
    deleteNode[1].remove();
}

// ADD MEDICINE DETAILS FIELD
function addNewMDField() {
    let newNode2 = document.createElement('textarea');
    newNode2.classList.add('form-control');
    newNode2.classList.add('mt-2');
    newNode2.classList.add('detail-field');
    newNode2.setAttribute('rows', '1');
    newNode2.setAttribute('placeholder', 'Enter New Medicine  Detail');


    let md = document.getElementById('md');
    let mdAdd = document.getElementById('mdAdd');

    md.insertBefore(newNode2, mdAdd[0]);
}

// DELETE MEDICINE DETAILS FIELD
function delNewMDField() {
    let deleteNode = document.getElementsByClassName('detail-field');
    deleteNode[1].remove();
}

// GENERATE PRESCRIPTION

function generatePrescription() {
    // NAME
    let name = document.getElementById('name').value;
    let nameT = document.getElementById('nameT');
    nameT.innerHTML = name;

    // AGE
    let age = document.getElementById('age').value;
    let ageT = document.getElementById('ageT');
    ageT.innerHTML = age;

    // GENDER
    let gender = document.getElementById('gender').value;
    let genderT = document.getElementById('genderT');
    genderT.innerHTML = gender;

    // ADDRESS
    let address = document.getElementById('address').value;
    let addressT = document.getElementById('addressT');
    addressT.innerHTML = address;

    // DATE
    let date = document.getElementById('date').value;
    let dateT = document.getElementById('dateT');
    dateT.innerHTML = date;

    // MEDICAL NOTE
    let medicalNotes = document.getElementsByClassName('note-field');

    let str1 = '';
    for (let i of medicalNotes) {
        str1 = str1 + `<li>${i.value}</li>`
    }

    let medicalNotesT = document.getElementById('medicalNotesT');
    medicalNotesT.innerHTML = str1;

    // MEDICINE DETAILS
    let medicineDetails = document.getElementsByClassName('detail-field');

    let str2 = '';
    for (let j of medicineDetails) {
        str2 = str2 + `<li>${j.value}</li>`
    }

    let medicineDetailsT = document.getElementById('medicineDetailsT');
    medicineDetailsT.innerHTML = str2;

    // DISPLAY PRESCRIPTION and HIDE FORM & TITLE
    document.getElementById('prescriptionForm').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('prescriptionTemplate').style.display = 'block';
}


// PRINT PRESCRIPTION
function printPrescription() {
    window.print();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('survey-form');
    const bioContainer = document.querySelector('.bio-container');

    function updateBio() {
        const name = document.getElementById('name').value;
        const fname = document.getElementById('fname').value;
        const mname = document.getElementById('mname').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const dob = document.getElementById('dob').value;
        const department = document.getElementById('department').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const languages = Array.from(document.querySelectorAll('input[name="language"]:checked'))
                                .map(input => input.value).join(', ');

        // Update bio-container with values
        bioContainer.innerHTML = `
            <h2 class="bio-heading">My Bio Data</h2>
            <div class="bio-item">
                <p class="bio-label">Name:</p>
                <p class="bio-value">${name}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Father's Name:</p>
                <p class="bio-value">${fname}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Mother's Name:</p>
                <p class="bio-value">${mname}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Email:</p>
                <p class="bio-value">${email}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Age:</p>
                <p class="bio-value">${age}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">DOB:</p>
                <p class="bio-value">${dob}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Qualification:</p>
                <p class="bio-value">${department}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Gender:</p>
                <p class="bio-value">${gender || 'Not specified'}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Address:</p>
                <p class="bio-value">${address}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Pincode:</p>
                <p class="bio-value">${pincode}</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Languages:</p>
                <p class="bio-value">${languages}</p>
            </div>
            <div class="bio-declaration">
          <p class="bio-declaration-text">Declaration:</p>
          <p class="bio-declaration-value">
            I hereby declare that the above information is true and correct to
            the best of my knowledge and belief. I understand that any false
            statement or misrepresentation may result in my disqualification or
            other consequences as deemed appropriate.
          </p>
          <br>
          <p>Date:</p>
          <p>
            Place: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Signature
          </p>
        </div>
        `;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        updateBio(); 
    });

    form.addEventListener('reset', () => {
        bioContainer.innerHTML = `
            <h2 class="bio-heading">My Bio Data</h2>
            <div class="bio-item">
                <p class="bio-label">Name:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Father's Name:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Mother's Name:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Email:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Age:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">DOB:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Qualification:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Gender:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Address:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Pincode:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-item">
                <p class="bio-label">Languages:</p>
                <p class="bio-value">Not provided</p>
            </div>
            <div class="bio-declaration">
          <p class="bio-declaration-text">Declaration:</p>
          <p class="bio-declaration-value">
            I hereby declare that the above information is true and correct to
            the best of my knowledge and belief. I understand that any false
            statement or misrepresentation may result in my disqualification or
            other consequences as deemed appropriate.
          </p>
          <br>
          <p>Date:</p>
          <p>
            Place: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Signature
          </p>
        </div>
        `;
    });
});

document.getElementById('print-button').addEventListener('click', function() {
    const printWindow = window.open('', '', 'height=600,width=800');
    
    const content = document.querySelector('.bio-container').innerHTML;
    
    printWindow.document.write('<html><head><title>Print Bio Data</title>');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; margin: 20px; }</style>'); // Add any necessary styles here
    printWindow.document.write('</head><body >');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    
    printWindow.document.close();
    
    printWindow.print();
});

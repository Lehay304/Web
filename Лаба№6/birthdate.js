document.getElementById("birthdate").addEventListener("change", function () {
    const birthDate = new Date(this.value);
    const age = calculateAge(birthDate);
    document.getElementById("age").textContent = age;
});

function calculateAge(birthDate) {
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const BirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
    if (!BirthdayThisYear) {
      age--;
    }
  
    return age;
  }
  
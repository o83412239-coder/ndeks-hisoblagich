document.getElementById('calculateBtn').onclick = () => {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value)/100;
  if(weight && height){
    const bmi = (weight / (height*height)).toFixed(2);
    document.getElementById('result').textContent = "Sizning BMI: " + bmi;
  } else {
    document.getElementById('result').textContent = "Iltimos, barcha maydonlarni to'ldiring!";
  }
}

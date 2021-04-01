const inpCard = document.getElementById('card-numbers');

inpCard.addEventListener('keyup', () => {
  let val = inpCard.value;
  let newValue = '';

  val = val.replace(/\s/g, '');

  for (let index = 0; index < val.length; index++) {
    if (index % 4 === 0 && index > 0) {
      newValue = newValue.concat(' ');
    }

    newValue = newValue.concat(val[index]);
  }

  inpCard.value = newValue;
});

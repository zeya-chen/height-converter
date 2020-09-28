function do_the_math(feet_value, inches_value) {
  let meters = feet_value * 0.3048 + inches_value * 0.0254;
  meters = meters.toFixed(2);
  return meters;
}

// create a function to click/change
function user_changed() {
  const feet_field = document.querySelector('.input-feet');
  const inches_field = document.querySelector('.input-inches');
  const meters_field = document.querySelector('.input-meters');

  let feet_value = feet_field.value;
  feet_value = parseFloat(feet_value);
  let inches_value = inches_field.value;
  inches_value = parseFloat(inches_value);

  // parse result into 'meters' input
  meters_field.value = do_the_math(feet_value, inches_value);
}

const feet_field = document.querySelector('.input-feet');
const inches_field = document.querySelector('.input-inches');
const button = document.querySelector('.convert');
button.addEventListener('click', do_the_math);

// listen for changes
feet_field.addEventListener('change', user_changed);
inches_field.addEventListener('change', user_changed);

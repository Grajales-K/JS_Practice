function toggle(element) {
    // we want to check if the element has the class 'toggled-on' or 'toggled-off' and toggle it accordingly.
  if (element.classList.contains('toggled-on')) {
    // if it is on, we turn it off
    element.classList.remove('toggled-on');
    element.classList.add('toggled-off');
  } else {
    // if it is off, we turn it on
    element.classList.remove('toggled-off');
    element.classList.add('toggled-on');
  }
}
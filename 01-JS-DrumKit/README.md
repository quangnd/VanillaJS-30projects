# Lesson 1 - Get along with key down, audio, transition effect (simple animation)

1. We need check HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading

    ```
    document.addEventListener('DOMContentLoaded', function(e){
      //DOM Content loaded
    });
    ```

2. To remove a CSS class on a element, we need to find out the element's event. In this case, **transitionend** is occurred when the element transformed!

3. Some useful JS commands
    *  `window.addEventListener('keydown', playSound);` //listen a event
    *  `const audio = document.querySelector('audio[data-key]="65"');` // get an element have attribute named data-key
    *  `document.querySelectorAll('.key');`    //get all elements that have className is key
    *  `element.classList.add('playing');`   //add CSS class - to remove using .remove()

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(element) {

    for (var i = 0; i < element.parentNode.childNodes.length; i++) {
    classname=element.parentNode.childNodes[i].className;
      if (!classname) continue;
        if (classname.includes("dropdown-content")) {
      element.parentNode.childNodes[i].classList.toggle("show");
          break;
        }        
    }
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction(element) {

//     for (var i = 0; i < element.parentNode.childNodes.length; i++) {
//     classname=element.parentNode.childNodes[i].className;
//       if (!classname) continue;
//         if (classname.includes("dropdown-content")) {
//       element.parentNode.childNodes[i].classList.toggle("show");
//           break;
//         }        
//     }
//     }
    
//     // Close the dropdown if the user clicks outside of it
//     window.onclick = function(event) {
//       if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//           }
//         }
//       }
//     }


   /* Utility Functions */

//    const elementHasClass = function(element, theClass) {
//     return element.className.includes(theClass);
//  };
 
//  const elementAddsClass = function (element, theClass) {
//     var classArray = element.className.split(' ');
//     var newClassArray = classArray.concat(theClass);
//     element.className = newClassArray.join(' ');
//  };
 
//  const elementRemovesClass = function(element, theClass) {
//     var classArray = element.className.split(' ');
//     var newClassArray = classArray.filter((oneClass) => (oneClass != theClass));
//     element.className = newClassArray.join(' ');
//  };
 
//  const elementTogglesClass = function(element, theClass) {
//     if (elementHasClass(element, theClass))
//        elementRemovesClass(element, theClass);
//     else
//        elementAddsClass(element, theClass);
//  };
 
//     /* Subsequent Tasks */
 
//  const findTheList = function(event) {
//     var theButton = event.target;
//     var theList = theButton.nextElementSibling;
//     // ---
//     return theList
//  };
 
//  const findOtherShownLists = function(event) {
//     var theList = findTheList(event);
//     // ---
//     var allShownLists = document.querySelectorAll('.dropdown-list.shown');
//     var allShownListArray = Array.from(allShownLists);
//     var otherShownListArray = allShownListArray.filter((oneList) => (oneList != theList));
//     // ---
//     return otherShownListArray
//  };
 
//  const toggleVisibility = function(arrayOfList) {
//     // ---
//     var toggleVisibilityClasses = function(oneList) {
//        elementTogglesClass(oneList, 'shown');
//        elementTogglesClass(oneList, 'hidden');
//     };
//     // ---
//     arrayOfList.forEach((oneList) => toggleVisibilityClasses(oneList));
//  };
 
//     /* Event Listeners */
 
//  const toggleTheList = function(event) {
//     var theList = findTheList(event);
//     toggleVisibility( [theList] );
//  };
 
//  const hideOtherShownLists = function(event) {
//     var otherShownListArray = findOtherShownLists(event);
//     toggleVisibility(otherShownListArray);
//  };
 
//     /* Binding Lísteners */
 
//  const buttonList = document.getElementsByClassName('dropdown-button');
//  const buttonArray = Array.from(buttonList);
 
//  const bindListeners = function(button) {
//     button.addEventListener('click', toggleTheList);
//     button.addEventListener('click', hideOtherShownLists);
//  };
 
//  buttonArray.forEach(bindListeners);
 
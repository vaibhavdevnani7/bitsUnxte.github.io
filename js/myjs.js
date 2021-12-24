var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// JavaScript program to find whether an array
// is subset of another array
  
    /* Return true if arr2[] is a subset 
    of arr1[] */
    function isSubset(arr1, arr2){
        let m = arr1.length;
        let n = arr2.length;
        let i = 0;
        let j = 0;
        for (i = 0; i < n; i++) {
            for (j = 0; j < m; j++)
                if (arr2[i] == arr1[j])
                    break;
  
            /* If the above inner loop 
            was not broken at all then
            arr2[i] is not present in
            arr1[] */
            if (j == m)
                return false;
        }
  
        /* If we reach here then all
        elements of arr2[] are present
        in arr1[] */
        return true;
    }




function checkboxreturn(){
  var checkboxarr;
  var options;
  checkboxarr = []
  options = document.getElementsByClassName('fcheckbox');
  for (i=0; i < options.length; i++){
    
    if (options[i].checked == true){
      
        checkboxarr.push(options[i].value);
      
    }
    else{
      const index = checkboxarr.indexOf(options[i].value);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
  }
  return checkboxarr

}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    if (isSubset(x[i].className.split(" "),c)){
      w3AddClass(x[i], "show")
    } 
    else{
      w3RemoveClass(x[i], "show")
    }
  }
}
function checkboxupdate(){
  filterSelection(checkboxreturn());
}
function showall(){
  var x, i;
  x = document.getElementsByClassName("card");
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++){
    w3AddClass(x[i], "show");
  }
  var options;
  options = document.getElementsByClassName('fcheckbox');
  for (i=0; i < options.length; i++){
    options[i].checked = false;
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Close the dropdown if the user clicks outside of it

function searchfunc() {
  var cardss, i;
  cardss = document.getElementsByClassName("card");
  var input, filter, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
  
  for (i = 0; i < cardss.length; i++) {
      txtValue = cardss[i].className + " "+ cardss[i].getElementsByClassName("fullname")[0].innerHTML +" "+cardss[i].getElementsByClassName("desctags")[1].innerHTML;
      console.log(txtValue)
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          cardss[i].style.display = "";
      } else {
          cardss[i].style.display = "none";
      }
  }
}
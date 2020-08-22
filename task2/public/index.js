(function ($) {
  AOS.init();
})(jQuery);

var counter_list = [10, 1000, 800, 0];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var str_counter_3 = counter_list[3];
var display_str = "";
var display_div = document.getElementById("display_div_id");

function incrementCount(current_count) {
  setTimeout(function(){
    for (var i = 0; i <10; i++) {
      var new_span = document.createElement("span");
      new_span.className = "ini_tiles";
      new_span.innerText = Math.floor(Math.random()*8)+1;
      display_div.appendChild(new_span);
    }
  },300);

  setInterval(function () {
    while (display_div.hasChildNodes()) {
      display_div.removeChild(display_div.lastChild);
    }
    str_counter_0 += 6;
    if (str_counter_0 > 99) {
      str_counter_0 = 10;
      str_counter_1 += 1;
    }
    if (str_counter_1 > 99999) {
      str_counter_2++;
    }
    if (str_counter_2 > 999999999) {
      str_counter_3++;
    }
    display_str =
      str_counter_3.toString() +
      str_counter_2.toString() +
      str_counter_1.toString() +
      str_counter_0.toString();
      
    for (var i = 0; i < display_str.length; i++) {
      var new_span = document.createElement("span");
      new_span.className = "num_tiles";
      if (i == 0 && str_counter_2 < 999999999) {
        new_span.classList.add("hide");
      }
      new_span.innerText = display_str[i];
      display_div.appendChild(new_span);
    }
  }, 1000);
}




// var tile1 = "#box-1";
// var tile2 = "#box-2";
// var tile3 = "#box-3";
// var tile4 = "#box-4";
// var tile5 = "#box-5";
// var tile6 = "#box-6";
// var tile7 = "#box-7";
// var tile8 = "#box-8";
// var tile9 = "#box-9";
// var array_of_tiles = [
//   tile1,
//   tile2,
//   tile3,
//   tile4,
//   tile5,
//   tile6,
//   tile7,
//   tile8,
//   tile9,
// ];
// var array_without_1 = [tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];

// $(window).on("load", function () {
//   window.setTimeout(() => {
//     array_of_tiles.forEach((element) => {
//       $(element).text("8");
//     });
//   }, 1000);
//   window.setTimeout(() => {
//     $(tile1).text("8");
//     array_without_1.forEach((element) => {
//       $(element).text("0");
//     });
//   }, 2000);
// });


$(document).ready(function() {
  window.verses = [
    ["900x400.png", "(Geneza 1:1)", "Lorem ipsum1"],
    ["placeholder.png", "(Geneza 1:2)", "Lorem ipsum2"],
    ["placeholder.png", "(Geneza 1:3)", "Lorem ipsum3"],
    ["placeholder.png", "(Geneza 1:4)", "Lorem ipsum4"],
    ["placeholder.png", "(Geneza 1:5)", "Lorem ipsum5"],
  ];

  window.item = 0;

  function set_slide(item) {
    var current_item = window.verses[item];
    $("img#main-image").attr("src", "./assets/" + current_item[0]);
    $("p.img-reference").text(current_item[1]);
    $("p.img-text").text(current_item[2]);
  }

  function start_app() {
    set_slide(0);

    $("a.btn#next").on("click", function(evt) {
      evt.preventDefault();
      window.item += 1;
      if (window.item >= window.verses.length) {
        window.item = 0;
      }
      set_slide(window.item);
    });

  }

  start_app();
});

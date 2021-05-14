$(document).ready(function() {
  window.verses = [
    ["1-1.png", "(Geneza 1:1)", "Text1"],
    ["1-2.png", "(Geneza 1:2)", "Text2"],
    ["1-3.png", "(Geneza 1:3)", ""],
    ["1-4.png", "(Geneza 1:4)", ""],
    ["1-5.png", "(Geneza 1:5)", ""],
    ["1-6.png", "(Geneza 1:6)", ""],
    ["1-7.png", "(Geneza 1:7)", ""],
    ["1-8.png", "(Geneza 1:8)", ""],
    ["1-9.png", "(Geneza 1:9)", ""],
    ["1-10.png", "(Geneza 1:10)", ""],
    ["1-11.png", "(Geneza 1:11)", ""],
    ["1-12.png", "(Geneza 1:12)", ""],
    ["1-13.png", "(Geneza 1:13)", ""],
    ["1-14.png", "(Geneza 1:14)", ""],
    ["1-15.png", "(Geneza 1:15)", ""],
    ["1-16.png", "(Geneza 1:16)", ""],
    ["1-17.png", "(Geneza 1:17)", ""],
    ["1-18.png", "(Geneza 1:18)", ""],
    ["1-19.png", "(Geneza 1:19)", ""],
    ["1-20.png", "(Geneza 1:20)", ""],
    ["1-21-23.png", "(Geneza 1:21-23)", ""],
    ["1-24-25.png", "(Geneza 1:24-25)", ""],
    ["1-26-28.png", "(Geneza 1:26-28)", ""],
    ["1-29.png", "", "(Geneza 1:29)"],
    ["1-30-31.png", "(Geneza 1:30-31)", ""],
  ];

  window.item = 0;

  function set_slide(item) {
    var current_item = window.verses[item];
    $("img#main-image").attr("src", "./assets/verses/" + current_item[0]);
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

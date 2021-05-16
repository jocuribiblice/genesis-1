$(document).ready(function() {
  window.verses = [
    ["1-1.png", "(Geneza 1:1)", "La început, Dumnezeu a făcut cerurile şi pământul."],
    ["1-2.png", "(Geneza 1:2)", "Pământul era pustiu şi gol; peste faţa adâncului de ape era întuneric, şi Duhul lui Dumnezeu Se mişca pe deasupra apelor."],
    ["1-3.png", "(Geneza 1:3)", "Dumnezeu a zis: „Să fie lumină!” Şi a fost lumină."],
    ["1-4.png", "(Geneza 1:4)", "Dumnezeu a văzut că lumina era bună; şi Dumnezeu a despărţit lumina de întuneric."],
    ["1-5.png", "(Geneza 1:5)", "Dumnezeu a numit lumina zi, iar întunericul l-a numit noapte. Astfel, a fost o seară, şi apoi a fost o dimineaţă: aceasta a fost ziua întâi."],
    ["1-6.png", "(Geneza 1:6)", "Dumnezeu a zis: „Să fie o întindere între ape, şi ea să despartă apele de ape.”"],
    ["1-7.png", "(Geneza 1:7)", "Şi Dumnezeu a făcut întinderea, şi ea a despărţit apele care sunt dedesubtul întinderii de apele care sunt deasupra întinderii. Şi aşa a fost."],
    ["1-8.png", "(Geneza 1:8)", "Dumnezeu a numit întinderea cer. Astfel, a fost o seară, şi apoi a fost o dimineaţă: aceasta a fost ziua a doua."],
    ["1-9.png", "(Geneza 1:9)", "Dumnezeu a zis: „Să se strângă la un loc apele care sunt dedesubtul cerului şi să se arate uscatul!” Şi aşa a fost."],
    ["1-10.png", "(Geneza 1:10)", "Dumnezeu a numit uscatul pământ, iar grămada de ape a numit-o mări. Dumnezeu a văzut că lucrul acesta era bun."],
    ["1-11.png", "(Geneza 1:11)", "Apoi Dumnezeu a zis: „Să dea pământul verdeaţă, iarbă cu sămânţă, pomi roditori, care să facă rod după soiul lor şi care să aibă în ei sămânţa lor pe pământ.” Şi aşa a fost."],
    ["1-12.png", "(Geneza 1:12)", "Pământul a dat verdeaţă, iarbă cu sămânţă după soiul ei şi pomi care fac rod şi care îşi au sămânţa în ei, după soiul lor. Dumnezeu a văzut că lucrul acesta era bun."],
    ["1-13.png", "(Geneza 1:13)", "Astfel, a fost o seară, şi apoi a fost o dimineaţă: aceasta a fost ziua a treia."],
    ["1-14.png", "(Geneza 1:14)", "Dumnezeu a zis: „Să fie nişte luminători în întinderea cerului, ca să despartă ziua de noapte; ei să fie nişte semne care să arate vremurile, zilele şi anii;"],
    ["1-15.png", "(Geneza 1:15)", "şi să slujească de luminători în întinderea cerului, ca să lumineze pământul.” Şi aşa a fost."],
    ["1-16.png", "(Geneza 1:16)", "Dumnezeu a făcut cei doi mari luminători, şi anume: luminătorul cel mai mare ca să stăpânească ziua, şi luminătorul cel mai mic ca să stăpânească noaptea; a făcut şi stelele."],
    ["1-17.png", "(Geneza 1:17)", "Dumnezeu i-a aşezat în întinderea cerului ca să lumineze pământul,"],
    ["1-18.png", "(Geneza 1:18)", "să stăpânească ziua şi noaptea şi să despartă lumina de întuneric. Dumnezeu a văzut că lucrul acesta era bun."],
    ["1-19.png", "(Geneza 1:19)", "Astfel, a fost o seară, şi apoi a fost o dimineaţă: aceasta a fost ziua a patra."],
    ["1-20.png", "(Geneza 1:20)", "Dumnezeu a zis: „Să mişune apele de vieţuitoare şi să zboare păsări deasupra pământului pe întinderea cerului.”"],
    ["1-21-23.png", "(Geneza 1:21-23)", "Dumnezeu a făcut peştii cei mari şi toate vieţuitoarele care se mişcă şi de care mişună apele, după soiurile lor; a făcut şi orice pasăre înaripată după soiul ei. Dumnezeu a văzut că erau bune. Dumnezeu le-a binecuvântat şi a zis: „Creşteţi, înmulţiţi-vă şi umpleţi apele mărilor; să se înmulţească şi păsările pe pământ.” Astfel a fost o seară, şi apoi a fost o dimineaţă: aceasta a fost ziua a cincea."],
    ["1-24-25.png", "(Geneza 1:24-25)", "Dumnezeu a zis: „Să dea pământul vieţuitoare după soiul lor, vite, târâtoare şi fiare pământeşti, după soiul lor.” Şi aşa a fost. Dumnezeu a făcut fiarele pământului după soiul lor, vitele după soiul lor şi toate târâtoarele pământului după soiul lor. Dumnezeu a văzut că erau bune."],
    ["1-26-28.png", "(Geneza 1:26-28)", "Apoi Dumnezeu a zis: „Să facem om după chipul Nostru, după asemănarea Noastră; el să stăpânească peste peştii mării, peste păsările cerului, peste vite, peste tot pământul şi peste toate târâtoarele care se mişcă pe pământ.” Dumnezeu a făcut pe om după chipul Său, l-a făcut după chipul lui Dumnezeu; parte bărbătească şi parte femeiască i-a făcut. Dumnezeu i-a binecuvântat şi Dumnezeu le-a zis: „Creşteţi, înmulţiţi-vă, umpleţi pământul şi supuneţi-l; şi stăpâniţi peste peştii mării, peste păsările cerului şi peste orice vieţuitoare care se mişcă pe pământ.”"],
    ["1-29.png", "(Geneza 1:29)", "Şi Dumnezeu a zis: „Iată că v-am dat orice iarbă care face sămânţă şi care este pe faţa întregului pământ şi orice pom care are în el rod cu sămânţă: aceasta să fie hrana voastră."],
    ["1-30-31.png", "(Geneza 1:30-31)", "Iar tuturor fiarelor pământului, tuturor păsărilor cerului şi tuturor vietăţilor care se mişcă pe pământ, care au în ele o suflare de viaţă, le-am dat ca hrană toată iarba verde.” Şi aşa a fost. Dumnezeu S-a uitat la tot ce făcuse; şi iată că erau foarte bune. Astfel, a fost o seară, şi apoi a fost o dimineaţă: aceasta a fost ziua a şasea."],
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

    $("a.btn#prev").on("click", function(evt) {
      evt.preventDefault();
      window.item -= 1;
      if (window.item < 0) {
        window.item = window.verses.length - 1;
      }
      set_slide(window.item);
    });
  }

  $("a#app-info-details").on("click", function(evt) {
    evt.preventDefault();
    $("div.app-info-details").toggle();
  });

  start_app();
});

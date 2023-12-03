function exportTableToExcel(tableID, filename = '') {
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);

  // Obtén las filas de la tabla
  var rows = tableSelect.getElementsByTagName('tr');

  // Crear un objeto HTML para almacenar solo las columnas deseadas
  var filteredTable = document.createElement('table');

  // Agregar encabezados a la nueva tabla
  var headerRow = filteredTable.createTHead().insertRow(0);
  headerRow.innerHTML = "<th>Id</th><th>Tipo de documento</th><th>Documento</th><th>Acudiente</th><th>Beneficiario</th><th>Telefono</th>";

  // Recorrer las filas de la tabla original y copiar solo las columnas deseadas a la nueva tabla
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName('td');
    if (cells.length >= 6) { // Asegurarse de que haya al menos 5 celdas (las columnas deseadas)
      var newRow = filteredTable.insertRow(-1);
      for (var j = 0; j < 6; j++) { // Copiar solo las primeras 5 celdas (las columnas deseadas)
        var newCell = newRow.insertCell(j);
        newCell.innerHTML = cells[j].innerHTML;
      }
    }
  }

  // Convertir la nueva tabla a HTML
  var tableHTML = filteredTable.outerHTML.replace(/ /g, '%20');

  // Especificar el nombre de archivo
  filename = filename ? filename + '.xls' : 'Listado_Acudientes.xls';

  // Crear el elemento de enlace de descarga
  downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(['ufeff', tableHTML], {
      type: dataType
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Crear un enlace al archivo
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

    // Establecer el nombre de archivo
    downloadLink.download = filename;

    // Activar la función
    downloadLink.click();
  }
}
// Fin de funcion de descarga

// inicio de en paginado
const data = [{
  "id": 1,
  "nombre_Acudiente": "Jessi Marke",
  "beneficiario": "Dolly Wadly",
  "tipo_Documento": "PKV",
  "documento": "7474696746",
  "telefono": "+92 615 213 6685"
}, {
  "id": 2,
  "nombre_Acudiente": "Evaleen Sherlock",
  "beneficiario": "Winnah Oswick",
  "tipo_Documento": "NZE",
  "documento": "7526576304",
  "telefono": "+52 647 374 9381"
}, {
  "id": 3,
  "nombre_Acudiente": "Cristie Haeslier",
  "beneficiario": "Brinn Hackey",
  "tipo_Documento": "ILK",
  "documento": "6971551877",
  "telefono": "+60 420 100 4411"
}, {
  "id": 4,
  "nombre_Acudiente": "Elvyn Ettles",
  "beneficiario": "Petra Glazyer",
  "tipo_Documento": "DBU",
  "documento": "3540961798",
  "telefono": "+81 769 965 0154"
}, {
  "id": 5,
  "nombre_Acudiente": "Adan Twyning",
  "beneficiario": "Rafi Warden",
  "tipo_Documento": "RRL",
  "documento": "5817662671",
  "telefono": "+7 374 962 6117"
}, {
  "id": 6,
  "nombre_Acudiente": "Meg McCourt",
  "beneficiario": "Garey Patley",
  "tipo_Documento": "XSC",
  "documento": "3573592805",
  "telefono": "+1 367 568 7836"
}, {
  "id": 7,
  "nombre_Acudiente": "Nicolina Hambrick",
  "beneficiario": "Saxe M'Chirrie",
  "tipo_Documento": "KPE",
  "documento": "0116300515",
  "telefono": "+595 867 861 8326"
}, {
  "id": 8,
  "nombre_Acudiente": "Keefer Terbeek",
  "beneficiario": "Billy Waugh",
  "tipo_Documento": "WFI",
  "documento": "6146871184",
  "telefono": "+46 546 760 6331"
}, {
  "id": 9,
  "nombre_Acudiente": "Frank Ruddle",
  "beneficiario": "Elinor Peploe",
  "tipo_Documento": "DSS",
  "documento": "4211550322",
  "telefono": "+63 713 626 7817"
}, {
  "id": 10,
  "nombre_Acudiente": "Torre Addie",
  "beneficiario": "Gratia Spridgen",
  "tipo_Documento": "TEQ",
  "documento": "4257354755",
  "telefono": "+48 926 119 2078"
}, {
  "id": 11,
  "nombre_Acudiente": "Ravid Thaim",
  "beneficiario": "Daphna Nuss",
  "tipo_Documento": "GUL",
  "documento": "8947761451",
  "telefono": "+95 705 731 7944"
}, {
  "id": 12,
  "nombre_Acudiente": "Nicolas Cottem",
  "beneficiario": "Layney Monketon",
  "tipo_Documento": "CCM",
  "documento": "6424202005",
  "telefono": "+53 258 662 9665"
}, {
  "id": 13,
  "nombre_Acudiente": "Emlyn Duffitt",
  "beneficiario": "Chariot Eades",
  "tipo_Documento": "EGS",
  "documento": "9855825004",
  "telefono": "+7 170 818 0080"
}, {
  "id": 14,
  "nombre_Acudiente": "Timoteo Henrot",
  "beneficiario": "Bonni Coolbear",
  "tipo_Documento": "MDF",
  "documento": "6852326543",
  "telefono": "+63 392 545 1101"
}, {
  "id": 15,
  "nombre_Acudiente": "Darren Gwilliam",
  "beneficiario": "Reamonn Suart",
  "tipo_Documento": "CZL",
  "documento": "6312855546",
  "telefono": "+86 210 403 3601"
}, {
  "id": 16,
  "nombre_Acudiente": "Sheeree Danshin",
  "beneficiario": "Lawry Javes",
  "tipo_Documento": "MDR",
  "documento": "6658122199",
  "telefono": "+39 600 611 7450"
}, {
  "id": 17,
  "nombre_Acudiente": "Lewiss Vasile",
  "beneficiario": "Lisabeth Weatherill",
  "tipo_Documento": "GRL",
  "documento": "6685860286",
  "telefono": "+255 310 966 4222"
}, {
  "id": 18,
  "nombre_Acudiente": "Florian Belward",
  "beneficiario": "Ronald Calverley",
  "tipo_Documento": "SJT",
  "documento": "6141953050",
  "telefono": "+86 495 391 2684"
}, {
  "id": 19,
  "nombre_Acudiente": "Anette McQuirk",
  "beneficiario": "Danica Darton",
  "tipo_Documento": "OSD",
  "documento": "5178316797",
  "telefono": "+62 832 334 3680"
}, {
  "id": 20,
  "nombre_Acudiente": "Robbie Nelane",
  "beneficiario": "Marijn Haines",
  "tipo_Documento": "HWA",
  "documento": "3585520545",
  "telefono": "+86 112 977 7012"
}, {
  "id": 21,
  "nombre_Acudiente": "Sven Hugk",
  "beneficiario": "Rochester Orknay",
  "tipo_Documento": "STD",
  "documento": "5374904647",
  "telefono": "+55 713 449 6465"
}, {
  "id": 22,
  "nombre_Acudiente": "Lelah Taye",
  "beneficiario": "Rockwell Penk",
  "tipo_Documento": "MDB",
  "documento": "4952245179",
  "telefono": "+351 885 272 1832"
}, {
  "id": 23,
  "nombre_Acudiente": "Rob Gomez",
  "beneficiario": "Gavrielle Mandres",
  "tipo_Documento": "UEN",
  "documento": "3486009850",
  "telefono": "+46 782 500 4576"
}, {
  "id": 24,
  "nombre_Acudiente": "Solomon Camus",
  "beneficiario": "Rufus Mott",
  "tipo_Documento": "GNU",
  "documento": "3268470254",
  "telefono": "+58 781 474 7440"
}, {
  "id": 25,
  "nombre_Acudiente": "Ronica Bantham",
  "beneficiario": "Mariellen Westney",
  "tipo_Documento": "NUL",
  "documento": "5042839879",
  "telefono": "+7 990 514 5786"
}, {
  "id": 26,
  "nombre_Acudiente": "Keelby Cella",
  "beneficiario": "Cchaddie Ching",
  "tipo_Documento": "MXD",
  "documento": "2121558772",
  "telefono": "+62 574 772 7658"
}, {
  "id": 27,
  "nombre_Acudiente": "Lev Marchment",
  "beneficiario": "Cortie Greenhalf",
  "tipo_Documento": "DPG",
  "documento": "5112195339",
  "telefono": "+7 572 268 2225"
}, {
  "id": 28,
  "nombre_Acudiente": "Jerry Matas",
  "beneficiario": "Mollee Guidoni",
  "tipo_Documento": "TIF",
  "documento": "3029540707",
  "telefono": "+993 936 481 0157"
}, {
  "id": 29,
  "nombre_Acudiente": "Birdie Jakobsson",
  "beneficiario": "Mirelle Surgood",
  "tipo_Documento": "SDJ",
  "documento": "3392869309",
  "telefono": "+503 647 709 4245"
}, {
  "id": 30,
  "nombre_Acudiente": "Corliss Jedrzejewski",
  "beneficiario": "Thomasine Delete",
  "tipo_Documento": "KEY",
  "documento": "0957549474",
  "telefono": "+7 990 387 2857"
}, {
  "id": 31,
  "nombre_Acudiente": "Siusan Beri",
  "beneficiario": "Caldwell Hazeltine",
  "tipo_Documento": "GBH",
  "documento": "1501900730",
  "telefono": "+961 402 265 8792"
}, {
  "id": 32,
  "nombre_Acudiente": "Belicia Gosnoll",
  "beneficiario": "Mandel Robinette",
  "tipo_Documento": "DUG",
  "documento": "6527667795",
  "telefono": "+352 747 242 7696"
}, {
  "id": 33,
  "nombre_Acudiente": "Emmeline Philipard",
  "beneficiario": "Reed Sabban",
  "tipo_Documento": "RVT",
  "documento": "9174580418",
  "telefono": "+30 575 482 7696"
}, {
  "id": 34,
  "nombre_Acudiente": "Seth Brawley",
  "beneficiario": "Lissie Bradnick",
  "tipo_Documento": "ARU",
  "documento": "8205137935",
  "telefono": "+63 291 744 8624"
}, {
  "id": 35,
  "nombre_Acudiente": "Terrye Lakes",
  "beneficiario": "Marti Ahmed",
  "tipo_Documento": "KTQ",
  "documento": "1619942496",
  "telefono": "+255 276 441 3758"
}, {
  "id": 36,
  "nombre_Acudiente": "Ettore Hedgeman",
  "beneficiario": "Estella Roser",
  "tipo_Documento": "SUR",
  "documento": "7601619362",
  "telefono": "+351 613 647 0047"
}, {
  "id": 37,
  "nombre_Acudiente": "Danika Bickerdicke",
  "beneficiario": "Pieter Lister",
  "tipo_Documento": "YZU",
  "documento": "9441603155",
  "telefono": "+81 998 130 6308"
}, {
  "id": 38,
  "nombre_Acudiente": "Jaquelyn Rohlfing",
  "beneficiario": "Falito Prattington",
  "tipo_Documento": "ZDY",
  "documento": "6503948611",
  "telefono": "+299 342 561 7160"
}, {
  "id": 39,
  "nombre_Acudiente": "Donica Apps",
  "beneficiario": "Enrica Brogini",
  "tipo_Documento": "CUU",
  "documento": "3223999426",
  "telefono": "+55 252 318 6457"
}, {
  "id": 40,
  "nombre_Acudiente": "Carlina Sarch",
  "beneficiario": "Wenda Winton",
  "tipo_Documento": "ZGL",
  "documento": "6245954908",
  "telefono": "+46 577 134 7491"
}, {
  "id": 41,
  "nombre_Acudiente": "Debby Gamett",
  "beneficiario": "Vinson Cheetham",
  "tipo_Documento": "YGE",
  "documento": "0174013353",
  "telefono": "+234 522 815 7310"
}, {
  "id": 42,
  "nombre_Acudiente": "Steve Neary",
  "beneficiario": "Dugald Gillson",
  "tipo_Documento": "KME",
  "documento": "7533053249",
  "telefono": "+237 456 295 0922"
}, {
  "id": 43,
  "nombre_Acudiente": "Izaak Pascho",
  "beneficiario": "Guthrey Gainsborough",
  "tipo_Documento": "ORL",
  "documento": "7028821668",
  "telefono": "+963 530 871 5216"
}, {
  "id": 44,
  "nombre_Acudiente": "Pepe Yarranton",
  "beneficiario": "Dulcia Chipchase",
  "tipo_Documento": "ADR",
  "documento": "5506242506",
  "telefono": "+216 650 534 9399"
}, {
  "id": 45,
  "nombre_Acudiente": "Rebe Cheers",
  "beneficiario": "Barbette Cockson",
  "tipo_Documento": "YMN",
  "documento": "6808119112",
  "telefono": "+48 832 440 6325"
}, {
  "id": 46,
  "nombre_Acudiente": "Bernetta Haizelden",
  "beneficiario": "Netty Markwelley",
  "tipo_Documento": "PYA",
  "documento": "1794609547",
  "telefono": "+86 721 165 6057"
}, {
  "id": 47,
  "nombre_Acudiente": "Martie Labba",
  "beneficiario": "Putnam McMurty",
  "tipo_Documento": "ARM",
  "documento": "3120541354",
  "telefono": "+60 735 796 4130"
}, {
  "id": 48,
  "nombre_Acudiente": "Glori Hugli",
  "beneficiario": "Winfield Keppe",
  "tipo_Documento": "AXE",
  "documento": "2736810198",
  "telefono": "+62 808 899 4176"
}, {
  "id": 49,
  "nombre_Acudiente": "Ashby Waylett",
  "beneficiario": "Bethina Creffield",
  "tipo_Documento": "KOP",
  "documento": "2347112260",
  "telefono": "+7 972 300 1667"
}, {
  "id": 50,
  "nombre_Acudiente": "Tresa Fitzer",
  "beneficiario": "Tiffany Infante",
  "tipo_Documento": "RNJ",
  "documento": "1972345826",
  "telefono": "+1 727 926 8246"
}, {
  "id": 51,
  "nombre_Acudiente": "Aimee Kuhndel",
  "beneficiario": "Shawnee Gregoretti",
  "tipo_Documento": "JAN",
  "documento": "7552863064",
  "telefono": "+356 588 628 3076"
}, {
  "id": 52,
  "nombre_Acudiente": "Josi Foord",
  "beneficiario": "Sibilla Giovannoni",
  "tipo_Documento": "YLG",
  "documento": "2974237835",
  "telefono": "+351 713 600 0459"
}, {
  "id": 53,
  "nombre_Acudiente": "Madeleine Theml",
  "beneficiario": "Sibelle Conigsby",
  "tipo_Documento": "VIG",
  "documento": "2853767930",
  "telefono": "+33 888 216 8962"
}, {
  "id": 54,
  "nombre_Acudiente": "Irvine Phetteplace",
  "beneficiario": "Maxy Kidgell",
  "tipo_Documento": "OKG",
  "documento": "1114129186",
  "telefono": "+505 612 956 2299"
}, {
  "id": 55,
  "nombre_Acudiente": "Alexia Bellini",
  "beneficiario": "Maryanna Summerbell",
  "tipo_Documento": "PGB",
  "documento": "1550467565",
  "telefono": "+86 709 293 4285"
}, {
  "id": 56,
  "nombre_Acudiente": "Chuck Crosi",
  "beneficiario": "Shanie Bunn",
  "tipo_Documento": "QOJ",
  "documento": "8893680033",
  "telefono": "+502 151 442 7647"
}, {
  "id": 57,
  "nombre_Acudiente": "Blondie Ettritch",
  "beneficiario": "Noll Algeo",
  "tipo_Documento": "KZR",
  "documento": "5588889975",
  "telefono": "+1 299 328 5907"
}, {
  "id": 58,
  "nombre_Acudiente": "Bertine Titterell",
  "beneficiario": "Silvia Labell",
  "tipo_Documento": "MLP",
  "documento": "0330512919",
  "telefono": "+387 250 918 9869"
}, {
  "id": 59,
  "nombre_Acudiente": "Stephani Schistl",
  "beneficiario": "Tommy Merrywether",
  "tipo_Documento": "LDI",
  "documento": "8559434631",
  "telefono": "+256 508 823 0417"
}, {
  "id": 60,
  "nombre_Acudiente": "Franky Niblock",
  "beneficiario": "Viva Sartin",
  "tipo_Documento": "MLX",
  "documento": "0815277555",
  "telefono": "+7 705 530 0801"
}, {
  "id": 61,
  "nombre_Acudiente": "Leeanne Maly",
  "beneficiario": "Mercedes Torns",
  "tipo_Documento": "ATD",
  "documento": "8670133822",
  "telefono": "+86 932 301 7971"
}, {
  "id": 62,
  "nombre_Acudiente": "Klaus Steet",
  "beneficiario": "Eberhard Grisard",
  "tipo_Documento": "LCE",
  "documento": "2421819849",
  "telefono": "+30 162 522 2034"
}, {
  "id": 63,
  "nombre_Acudiente": "Leilah Franc",
  "beneficiario": "Mattheus Ovitts",
  "tipo_Documento": "FMS",
  "documento": "7711971974",
  "telefono": "+63 225 464 8299"
}, {
  "id": 64,
  "nombre_Acudiente": "Devin Phillp",
  "beneficiario": "Lucas Carabine",
  "tipo_Documento": "ELB",
  "documento": "4831139718",
  "telefono": "+675 392 429 9591"
}, {
  "id": 65,
  "nombre_Acudiente": "Gabriello Beernt",
  "beneficiario": "Carolyn Tigner",
  "tipo_Documento": "DSI",
  "documento": "1569748136",
  "telefono": "+55 406 409 8521"
}, {
  "id": 66,
  "nombre_Acudiente": "Erny Struther",
  "beneficiario": "Vaughan Cobbe",
  "tipo_Documento": "SQV",
  "documento": "6704447407",
  "telefono": "+55 234 100 3306"
}, {
  "id": 67,
  "nombre_Acudiente": "Guglielma Auden",
  "beneficiario": "Farleigh Hawlgarth",
  "tipo_Documento": "NBH",
  "documento": "6745692228",
  "telefono": "+86 744 600 5901"
}, {
  "id": 68,
  "nombre_Acudiente": "Nat Duplan",
  "beneficiario": "Olvan Possell",
  "tipo_Documento": "BUT",
  "documento": "2752336489",
  "telefono": "+86 230 441 4791"
}, {
  "id": 69,
  "nombre_Acudiente": "Marlyn Hamshere",
  "beneficiario": "Chrystal Extil",
  "tipo_Documento": "TIL",
  "documento": "5084049159",
  "telefono": "+86 954 283 7445"
}, {
  "id": 70,
  "nombre_Acudiente": "Cal Merioth",
  "beneficiario": "Prent McDougald",
  "tipo_Documento": "KOZ",
  "documento": "8042728107",
  "telefono": "+7 452 524 7623"
}, {
  "id": 71,
  "nombre_Acudiente": "Cristal Ferronel",
  "beneficiario": "Jakie Hammonds",
  "tipo_Documento": "SKX",
  "documento": "8519088066",
  "telefono": "+63 922 413 7943"
}, {
  "id": 72,
  "nombre_Acudiente": "Adrianne O'Geaney",
  "beneficiario": "Giraldo Pavis",
  "tipo_Documento": "WTS",
  "documento": "0030748429",
  "telefono": "+232 370 498 1125"
}, {
  "id": 73,
  "nombre_Acudiente": "Elladine Symons",
  "beneficiario": "Shaylah Bouldon",
  "tipo_Documento": "WTR",
  "documento": "2180884338",
  "telefono": "+86 461 583 9538"
}, {
  "id": 74,
  "nombre_Acudiente": "Immanuel Chilles",
  "beneficiario": "Blakelee Locket",
  "tipo_Documento": "YYM",
  "documento": "4655688750",
  "telefono": "+82 876 596 9986"
}, {
  "id": 75,
  "nombre_Acudiente": "Cheryl Troni",
  "beneficiario": "Hernando Baseke",
  "tipo_Documento": "LKG",
  "documento": "9286525990",
  "telefono": "+57 926 898 0096"
}, {
  "id": 76,
  "nombre_Acudiente": "Devland Bascomb",
  "beneficiario": "Ambrosi Allward",
  "tipo_Documento": "DOM",
  "documento": "8465787638",
  "telefono": "+267 330 502 2704"
}, {
  "id": 77,
  "nombre_Acudiente": "Jefferey Gratland",
  "beneficiario": "Scotty Larkings",
  "tipo_Documento": "HLT",
  "documento": "3987002425",
  "telefono": "+7 562 917 2438"
}, {
  "id": 78,
  "nombre_Acudiente": "Bil Murdoch",
  "beneficiario": "Philip Edinborough",
  "tipo_Documento": "YYJ",
  "documento": "4441553412",
  "telefono": "+51 617 221 1088"
}, {
  "id": 79,
  "nombre_Acudiente": "Birgitta Niezen",
  "beneficiario": "Vitoria Treffrey",
  "tipo_Documento": "KPE",
  "documento": "0502381698",
  "telefono": "+62 809 705 8514"
}, {
  "id": 80,
  "nombre_Acudiente": "Austina Mustarde",
  "beneficiario": "Maryl Cawthry",
  "tipo_Documento": "VXC",
  "documento": "5423890314",
  "telefono": "+507 987 339 1136"
}, {
  "id": 81,
  "nombre_Acudiente": "Carmine Streeter",
  "beneficiario": "Mela Lissandri",
  "tipo_Documento": "ROW",
  "documento": "1851144773",
  "telefono": "+62 568 873 7120"
}, {
  "id": 82,
  "nombre_Acudiente": "Howard Runacres",
  "beneficiario": "Emmerich Meacher",
  "tipo_Documento": "KLG",
  "documento": "1852498269",
  "telefono": "+1 215 746 3587"
}, {
  "id": 83,
  "nombre_Acudiente": "Emelda Baudouin",
  "beneficiario": "Marcela Petruskevich",
  "tipo_Documento": "ZTM",
  "documento": "3321132877",
  "telefono": "+54 583 708 2096"
}, {
  "id": 84,
  "nombre_Acudiente": "Romain Hearsey",
  "beneficiario": "Sioux Baldrick",
  "tipo_Documento": "YIW",
  "documento": "1967442622",
  "telefono": "+595 619 225 7969"
}, {
  "id": 85,
  "nombre_Acudiente": "Trista Zincke",
  "beneficiario": "Pernell Coghlin",
  "tipo_Documento": "QRF",
  "documento": "1250125219",
  "telefono": "+82 714 971 3500"
}, {
  "id": 86,
  "nombre_Acudiente": "Cleo Verdy",
  "beneficiario": "Appolonia Aldin",
  "tipo_Documento": "NAH",
  "documento": "4775754742",
  "telefono": "+62 922 280 1324"
}, {
  "id": 87,
  "nombre_Acudiente": "Leonard Compson",
  "beneficiario": "Lynnelle Bulfield",
  "tipo_Documento": "YVR",
  "documento": "3267307392",
  "telefono": "+93 410 584 4478"
}, {
  "id": 88,
  "nombre_Acudiente": "Lock Edsell",
  "beneficiario": "Linoel Folger",
  "tipo_Documento": "SBW",
  "documento": "7554991582",
  "telefono": "+81 378 736 2865"
}, {
  "id": 89,
  "nombre_Acudiente": "Edmon Pisco",
  "beneficiario": "Goran Haseldine",
  "tipo_Documento": "GSR",
  "documento": "4295371033",
  "telefono": "+62 626 778 3698"
}, {
  "id": 90,
  "nombre_Acudiente": "Hetty Bauer",
  "beneficiario": "Billie Lamp",
  "tipo_Documento": "SDR",
  "documento": "9449350604",
  "telefono": "+66 756 543 5121"
}, {
  "id": 91,
  "nombre_Acudiente": "Salomone Swainson",
  "beneficiario": "Fifine Bittleson",
  "tipo_Documento": "KYO",
  "documento": "8883766504",
  "telefono": "+52 434 160 0558"
}, {
  "id": 92,
  "nombre_Acudiente": "Aldric Statefield",
  "beneficiario": "Helaine Dixie",
  "tipo_Documento": "ITA",
  "documento": "3373813026",
  "telefono": "+387 399 237 8541"
}, {
  "id": 93,
  "nombre_Acudiente": "Mayne Stuckey",
  "beneficiario": "Tanhya Schriren",
  "tipo_Documento": "KLI",
  "documento": "4052393236",
  "telefono": "+53 229 162 7809"
}, {
  "id": 94,
  "nombre_Acudiente": "Ichabod Bodicum",
  "beneficiario": "Felicle Gaudin",
  "tipo_Documento": "MJG",
  "documento": "6847829516",
  "telefono": "+1 584 176 2838"
}, {
  "id": 95,
  "nombre_Acudiente": "Winthrop Theis",
  "beneficiario": "Brewer Jouanet",
  "tipo_Documento": "TMZ",
  "documento": "2457957869",
  "telefono": "+54 934 250 6167"
}, {
  "id": 96,
  "nombre_Acudiente": "Palmer Cicccitti",
  "beneficiario": "Ikey Windus",
  "tipo_Documento": "VRI",
  "documento": "9976834187",
  "telefono": "+27 725 433 3787"
}, {
  "id": 97,
  "nombre_Acudiente": "Arny Elsy",
  "beneficiario": "Duff Stanyland",
  "tipo_Documento": "MUR",
  "documento": "4943450458",
  "telefono": "+1 770 602 0083"
}, {
  "id": 98,
  "nombre_Acudiente": "Marin Kearton",
  "beneficiario": "Jammie Apedaile",
  "tipo_Documento": "TTS",
  "documento": "4372495692",
  "telefono": "+62 602 867 4455"
}, {
  "id": 99,
  "nombre_Acudiente": "Erasmus Sevitt",
  "beneficiario": "Kalinda Tuffin",
  "tipo_Documento": "GBF",
  "documento": "7376203184",
  "telefono": "+380 830 775 6404"
}, {
  "id": 100,
  "nombre_Acudiente": "Florella Humpatch",
  "beneficiario": "Rutherford Kinnard",
  "tipo_Documento": "LZR",
  "documento": "5960324687",
  "telefono": "+62 214 312 3188"
}];

const table = document.getElementById('data-table');
const pagination = document.getElementById('pagination');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const currentPageSpan = document.getElementById('currentPage');

let currentPage = 1;
const itemsPerPage = 5; // Cambia esto para ajustar la cantidad de filas por página

function showData(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  table.tBodies[0].innerHTML = '';

  for (const item of paginatedData) {
    const row = table.tBodies[0].insertRow();
    row.insertCell(0).textContent = item.id;
    row.insertCell(1).textContent = item.tipo_Documento;
    row.insertCell(2).textContent = item.documento;
    row.insertCell(3).textContent = item.nombre_Acudiente;
    row.insertCell(4).textContent = item.beneficiario;
    row.insertCell(5).textContent = item.telefono;

    // Crear una nueva celda para las opciones
    const opcionesCell = row.insertCell(6);
    opcionesCell.className = 'opcion';

    // Agregar los elementos de opciones dentro de la celda
    opcionesCell.innerHTML = `
          <div class="opcion">
           <a href="visualizarAcudiente""><img src="../images/eye-svgrepo-com.svg" alt="icon" class="opc_eyes"onclick="enviarDatos()"></a> 
            <a href="editarAcudiente"><img src="../images/editar.png" alt="icon" class="opc_edit" ></a>         
            <img src="../images/borrar.png" alt="icon" class="opc_delete" onclick="eliminar()" >
          </div>
        `;
  }


  currentPage = page;
  currentPageSpan.textContent = currentPage;
  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = currentPage === Math.ceil(data.length / itemsPerPage);



}
prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    showData(currentPage - 1);
  }
});

nextPageButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(data.length / itemsPerPage)) {
    showData(currentPage + 1);
  }
});

showData(currentPage); //Mostrar la primera página al cargar la página



function enviarDatos(fila) {
  // Obtén los datos de la fila seleccionada
  var tabla = document.getElementById("data-table");
  var dato = tabla.rows[fila].cells[0].innerHTML;

  // Muestra el dato seleccionado en el formulario
  document.getElementById("beneficiario").value = dato;
  document.getElementById("tipo").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("fechaNacimienton").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("Acudiente").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("documento").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("parentesco").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("estado").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("sexoBiologico").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("numeroContacto").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("direccion").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("correo").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("ciudad").value = dato;  // Reemplaza con el valor correcto de la fila
  document.getElementById("observacion").value = dato;  // Reemplaza con el valor correcto de la fila
}



function eliminar() {
  Swal.fire({
    title: "Estas seguro?",
    text: "¡No podrás revertir esto!",
    icon: "advertencia",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Sí, bórralo!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Eliminado!",
        text: "Su archivo ha sido eliminado.",
        icon: "success"
      });
    }
  });

}
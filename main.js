var merc = 0;
var hunt = 0;
var fk = 0;
var levelsKruber = 0;
var levelsKruber2 = 0;

var rv = 0;
var ib = 0;
var slayer = 0;
var levelsBardin = 0;
var levelsBardin2 = 0;

var ws = 0;
var hm = 0;
var shade = 0;
var levelsKerillian = 0;
var levelsKerillian2 = 0;

var whc = 0;
var bh = 0;
var zealot = 0;
var levelsSaltzpyre = 0;
var levelsSaltzpyre2 = 0;

var bw = 0;
var pyro = 0;
var uc = 0;
var levelsSienna = 0;
var levelsSienna2 = 0;

var sum = 0;
var operation = "add";
var multi = 1;
var levelsTotal = 0;

function changeMulti(multiplier) {
  multi = multiplier;
  if (multi == 1) {
    document.getElementById("multi1").style = "border: 3px solid #FFF; left: 407px;";
    document.getElementById("multi10").style = "border: 0px solid #FFF; left: 453px;";
    document.getElementById("multi1-2").style = "border: 3px solid #FFF;";
    document.getElementById("multi10-2").style = "border: 0px solid #FFF;";
  };
  if (multi == 10) {
    document.getElementById("multi10").style = "border: 3px solid #FFF; left: 450px;";
    document.getElementById("multi1").style = "border: 0px solid #FFF; left: 410px;";
    document.getElementById("multi10-2").style = "border: 3px solid #FFF;";
    document.getElementById("multi1-2").style = "border: 0px solid #FFF;";
  };
};

function ops(name) {
  if (name == 'merc') {
    if (operation == "add") {
      merc = merc + multi;
      refresh();
    };
    if (operation == "sub") {
      merc = merc - multi;
      refresh();
    };
  };
  if (name == 'hunt') {
    if (operation == "add") {
      hunt = hunt + multi;
      refresh();
    };
    if (operation == "sub") {
      hunt = hunt - multi;
      refresh();
    };
  };
  if (name == 'fk') {
    if (operation == "add") {
      fk = fk + multi;
      refresh();
    };
    if (operation == "sub") {
      fk = fk - multi;
      refresh();
    };
  };
  if (name == 'rv') {
    if (operation == "add") {
      rv = rv + multi;
      refresh();
    };
    if (operation == "sub") {
      rv = rv - multi;
      refresh();
    };
  };
  if (name == 'ib') {
    if (operation == "add") {
      ib = ib + multi;
      refresh();
    };
    if (operation == "sub") {
      ib = ib - multi;
      refresh();
    };
  };
  if (name == 'slayer') {
    if (operation == "add") {
      slayer = slayer + multi;
      refresh();
    };
    if (operation == "sub") {
      slayer = slayer - multi;
      refresh();
    };
  };
  if (name == 'ws') {
    if (operation == "add") {
      ws = ws + multi;
      refresh();
    };
    if (operation == "sub") {
      ws = ws - multi;
      refresh();
    };
  };
  if (name == 'hm') {
    if (operation == "add") {
      hm = hm + multi;
      refresh();
    };
    if (operation == "sub") {
      hm = hm - multi;
      refresh();
    };
  };
  if (name == 'shade') {
    if (operation == "add") {
      shade = shade + multi;
      refresh();
    };
    if (operation == "sub") {
      shade = shade - multi;
      refresh();
    };
  };
  if (name == 'whc') {
    if (operation == "add") {
      whc = whc + multi;
      refresh();
    };
    if (operation == "sub") {
      whc = whc - multi;
      refresh();
    };
  };
  if (name == 'bh') {
    if (operation == "add") {
      bh = bh + multi;
      refresh();
    };
    if (operation == "sub") {
      bh = bh - multi;
      refresh();
    };
  };
  if (name == 'zealot') {
    if (operation == "add") {
      zealot = zealot + multi;
      refresh();
    };
    if (operation == "sub") {
      zealot = zealot - multi;
      refresh();
    };
  };
  if (name == 'bw') {
    if (operation == "add") {
      bw = bw + multi;
      refresh();
    };
    if (operation == "sub") {
      bw = bw - multi;
      refresh();
    };
  };
  if (name == 'pyro') {
    if (operation == "add") {
      pyro = pyro + multi;
      refresh();
    };
    if (operation == "sub") {
      pyro = pyro - multi;
      refresh();
    };
  };
  if (name == 'uc') {
      if (operation == "add") {
        uc = uc + multi;
        refresh();
      };
      if (operation == "sub") {
        uc = uc - multi;
        refresh();
      };
  }
};

function changeOps(operator) {
  if (operator == 'add') {
    operation = 'add';
    document.getElementById("add").style = "border: 3px solid #FFF; left: 407px;";
    document.getElementById("sub").style = "border: 0px solid #FFF; left: 410px;";
  }
  if (operator == 'sub') {
    operation = 'sub';
    document.getElementById("sub").style = "border: 3px solid #FFF; left: 407px;";
    document.getElementById("add").style = "border: 0px solid #FFF; left: 410px;";
  }
}

function levels(operation2,levelsChar) {
  if (operation2 == 'add') {
    if (levelsChar == 'kruber') {
      levelsKruber = levelsKruber + multi;
      prestige(levelsKruber);
    }
    if (levelsChar == 'bardin') {
      levelsBardin = levelsBardin + multi;
      prestige(levelsBardin);
    }
    if (levelsChar == 'kerillian') {
      levelsKerillian = levelsKerillian + multi;
      prestige(levelsKerillian);
    }
    if (levelsChar == 'saltzpyre') {
      levelsSaltzpyre = levelsSaltzpyre + multi;
      prestige(levelsSaltzpyre);
    }
    if (levelsChar == 'sienna') {
      levelsSienna = levelsSienna + multi;
      prestige(levelsSienna);
    }
    refresh();
  }
  if (operation2 == 'sub') {
    if (levelsChar == 'kruber') {
      levelsKruber = levelsKruber - multi;
      prestige(levelsKruber);
    }
    if (levelsChar == 'bardin') {
      levelsBardin = levelsBardin - multi;
      prestige(levelsBardin);
    }
    if (levelsChar == 'kerillian') {
      levelsKerillian = levelsKerillian - multi;
      prestige(levelsKerillian);
    }
    if (levelsChar == 'saltzpyre') {
      levelsSaltzpyre = levelsSaltzpyre - multi;
      prestige(levelsSaltzpyre);
    }
    if (levelsChar == 'sienna') {
      levelsSienna = levelsSienna - multi;
      prestige(levelsSienna);
    }
    refresh();
  }
  refresh();
}

function prestige() {
  if (levelsKruber >= 30) {
    levelsKruber2 = '30 + ' + (levelsKruber-30);
  }
  if (levelsKruber < 30) {
    levelsKruber2 = levelsKruber;
  }
  if (levelsBardin >= 30) {
    levelsBardin2 = '30 + ' + (levelsBardin-30);
  }
  if (levelsBardin < 30) {
    levelsBardin2 = levelsBardin;
  }
  if (levelsKerillian >= 30) {
    levelsKerillian2 = '30 + ' + (levelsKerillian-30);
  }
  if (levelsKerillian < 30) {
    levelsKerillian2 = levelsKerillian;
  }
  if (levelsSaltzpyre >= 30) {
    levelsSaltzpyre2 = '30 + ' + (levelsSaltzpyre-30);
  }
  if (levelsSaltzpyre < 30) {
    levelsSaltzpyre2 = levelsSaltzpyre;
  }
  if (levelsSienna >= 30) {
    levelsSienna2 = '30 + ' + (levelsSienna-30);
  }
  if (levelsSienna < 30) {
    levelsSienna2 = levelsSienna;
  }
}

function save(){
  var save = {
    merc: merc,
    hunt: hunt,
    fk: fk,
    rv: rv,
    ib: ib,
    slayer: slayer,
    ws: ws,
    hm: hm,
    shade: shade,
    whc: whc,
    bh: bh,
    zealot: zealot,
    bw: bw,
    pyro: pyro,
    uc: uc,

    levelsKruber: levelsKruber,
    levelsBardin: levelsBardin,
    levelsKerillian: levelsKerillian,
    levelsSaltzpyre: levelsSaltzpyre,
    levelsSienna: levelsSienna,

    levelsKruber2: levelsKruber2,
    levelsBardin2: levelsBardin2,
    levelsKerillian2: levelsKerillian2,
    levelsSaltzpyre2: levelsSaltzpyre2,
    levelsSienna2: levelsSienna2
  }
  localStorage.setItem("save",JSON.stringify(save));
}

function refresh(){
  kruber = merc + hunt + fk;
  kruberPer = Math.round((kruber/300)*100) + '%';
  bardin = rv + ib + slayer;
  bardinPer = Math.round((bardin/300)*100) + '%';
  kerillian = ws + hm + shade;
  kerillianPer = Math.round((kerillian/300)*100) + '%';
  saltzpyre = whc + bh + zealot;
  saltzpyrePer = Math.round((saltzpyre/300)*100) + '%';
  sienna = bw + pyro + uc;
  siennaPer = Math.round((sienna/300)*100) + '%';
  totalCount = kruber + bardin + kerillian + saltzpyre + sienna;
  totalCountPer = Math.round((totalCount/1500)*100) + '%';
  levelsTotal2 = levelsKruber + levelsBardin + levelsKerillian + levelsSaltzpyre + levelsSienna;
  document.getElementById("merc").innerHTML = merc;
  document.getElementById("hunt").innerHTML = hunt;
  document.getElementById("fk").innerHTML = fk;
  document.getElementById("kruber").innerHTML = kruber;
  document.getElementById("kruberPer").innerHTML = kruberPer;
  document.getElementById("levelsKruber2").innerHTML = levelsKruber2;
  document.getElementById("rv").innerHTML = rv;
  document.getElementById("ib").innerHTML = ib;
  document.getElementById("slayer").innerHTML = slayer;
  document.getElementById("bardin").innerHTML = bardin;
  document.getElementById("bardinPer").innerHTML = bardinPer;
  document.getElementById("levelsBardin2").innerHTML = levelsBardin2;
  document.getElementById("ws").innerHTML = ws;
  document.getElementById("hm").innerHTML = hm;
  document.getElementById("shade").innerHTML = shade;
  document.getElementById("kerillian").innerHTML = kerillian;
  document.getElementById("kerillianPer").innerHTML = kerillianPer;
  document.getElementById("levelsKerillian2").innerHTML = levelsKerillian2;
  document.getElementById("whc").innerHTML = whc;
  document.getElementById("bh").innerHTML = bh;
  document.getElementById("zealot").innerHTML = zealot;
  document.getElementById("saltzpyre").innerHTML = saltzpyre;
  document.getElementById("saltzpyrePer").innerHTML = saltzpyrePer;
  document.getElementById("levelsSaltzpyre2").innerHTML = levelsSaltzpyre2;
  document.getElementById("bw").innerHTML = bw;
  document.getElementById("pyro").innerHTML = pyro;
  document.getElementById("uc").innerHTML = uc;
  document.getElementById("sienna").innerHTML = sienna;
  document.getElementById("siennaPer").innerHTML = siennaPer;
  document.getElementById("levelsSienna2").innerHTML = levelsSienna2;
  document.getElementById("totalCount").innerHTML = totalCount;
  document.getElementById("totalCountPer").innerHTML = totalCountPer;
  document.getElementById("levelsTotal2").innerHTML = levelsTotal2;
}

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.merc != "undefined") merc = savegame.merc;
  if (typeof savegame.hunt != "undefined") hunt = savegame.hunt;
  if (typeof savegame.fk != "undefined") fk = savegame.fk;

  if (typeof savegame.rv != "undefined") rv = savegame.rv;
  if (typeof savegame.ib != "undefined") ib = savegame.ib;
  if (typeof savegame.slayer != "undefined") slayer = savegame.slayer;

  if (typeof savegame.ws != "undefined") ws = savegame.ws;
  if (typeof savegame.hm != "undefined") hm = savegame.hm;
  if (typeof savegame.shade != "undefined") shade = savegame.shade;

  if (typeof savegame.whc != "undefined") whc = savegame.whc;
  if (typeof savegame.bh != "undefined") bh = savegame.bh;
  if (typeof savegame.zealot != "undefined") zealot = savegame.zealot;

  if (typeof savegame.bw != "undefined") bw = savegame.bw;
  if (typeof savegame.pyro != "undefined") pyro = savegame.pyro;
  if (typeof savegame.uc != "undefined") uc = savegame.uc;

  if (typeof savegame.levelsKruber != "undefined") levelsKruber = savegame.levelsKruber;
  if (typeof savegame.levelsBardin != "undefined") levelsBardin = savegame.levelsBardin;
  if (typeof savegame.levelsKerillian != "undefined") levelsKerillian = savegame.levelsKerillian;
  if (typeof savegame.levelsSaltzpyre != "undefined") levelsSaltzpyre = savegame.levelsSaltzpyre;
  if (typeof savegame.levelsSienna != "undefined") levelsSienna = savegame.levelsSienna;

  if (typeof savegame.levelsKruber2 != "undefined") levelsKruber2 = savegame.levelsKruber2;
  if (typeof savegame.levelsBardin2 != "undefined") levelsBardin2 = savegame.levelsBardin2;
  if (typeof savegame.levelsKerillian2 != "undefined") levelsKerillian2 = savegame.levelsKerillian2;
  if (typeof savegame.levelsSaltzpyre2 != "undefined") levelsSaltzpyre2 = savegame.levelsSaltzpyre2;
  if (typeof savegame.levelsSienna2 != "undefined") levelsSienna2 = savegame.levelsSienna2;

  document.getElementById("100Missions").style.display = "block";
  refresh();
};

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

function saveKill() {
  merc = 0;
  hunt = 0;
  fk = 0;

  rv = 0;
  ib = 0;
  slayer = 0;

  ws = 0;
  hm = 0;
  shade = 0;

  whc = 0;
  bh = 0;
  zealot = 0;

  bw = 0;
  pyro = 0;
  uc = 0;
  sum = 0;
  operation = "add";
  multi = 1;
};

window.onload = function() {
  load();
};

window.setInterval(function(){ save(); }, 1000);

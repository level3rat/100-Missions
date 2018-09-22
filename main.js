var merc = 0;
var hunt = 0;
var fk = 0;

var rv = 0;
var ib = 0;
var slayer = 0;

var ws = 0;
var hm = 0;
var shade = 0;

var whc = 0;
var bh = 0;
var zealot = 0;

var bw = 0;
var pyro = 0;
var uc = 0;
var sum = 0;
var operation = "add";
var multi = 1;

function changeMulti(multiplier) {
  multi = multiplier;
}

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
  }
  if (operator == 'sub') {
    operation = 'sub';
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
  document.getElementById("merc").innerHTML = merc;
  document.getElementById("hunt").innerHTML = hunt;
  document.getElementById("fk").innerHTML = fk;
  document.getElementById("kruber").innerHTML = kruber;
  document.getElementById("kruberPer").innerHTML = kruberPer;
  document.getElementById("rv").innerHTML = rv;
  document.getElementById("ib").innerHTML = ib;
  document.getElementById("slayer").innerHTML = slayer;
  document.getElementById("bardin").innerHTML = bardin;
  document.getElementById("bardinPer").innerHTML = bardinPer;
  document.getElementById("ws").innerHTML = ws;
  document.getElementById("hm").innerHTML = hm;
  document.getElementById("shade").innerHTML = shade;
  document.getElementById("kerillian").innerHTML = kerillian;
  document.getElementById("kerillianPer").innerHTML = kerillianPer;
  document.getElementById("whc").innerHTML = whc;
  document.getElementById("bh").innerHTML = bh;
  document.getElementById("zealot").innerHTML = zealot;
  document.getElementById("saltzpyre").innerHTML = saltzpyre;
  document.getElementById("saltzpyrePer").innerHTML = saltzpyrePer;
  document.getElementById("bw").innerHTML = bw;
  document.getElementById("pyro").innerHTML = pyro;
  document.getElementById("uc").innerHTML = uc;
  document.getElementById("sienna").innerHTML = sienna;
  document.getElementById("siennaPer").innerHTML = siennaPer;
  document.getElementById("totalCount").innerHTML = totalCount;
  document.getElementById("totalCountPer").innerHTML = totalCountPer;
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

  refresh();
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

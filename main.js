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
      document.getElementById("merc").innerHTML = merc;
    };
    if (operation == "sub") {
      merc = merc - multi;
      document.getElementById("merc").innerHTML = merc;
    };
  };
  if (name == 'hunt') {
    if (operation == "add") {
      hunt = hunt + multi;
      document.getElementById("hunt").innerHTML = hunt;
    };
    if (operation == "sub") {
      hunt = hunt - multi;
      document.getElementById("hunt").innerHTML = hunt;
    };
  };
  if (name == 'fk') {
    if (operation == "add") {
      fk = fk + multi;
      document.getElementById("fk").innerHTML = fk;
    };
    if (operation == "sub") {
      fk = fk - multi;
      document.getElementById("fk").innerHTML = fk;
    };
  };
  if (name == 'rv') {
    if (operation == "add") {
      rv = rv + multi;
      document.getElementById("rv").innerHTML = rv;
    };
    if (operation == "sub") {
      rv = rv - multi;
      document.getElementById("rv").innerHTML = rv;
    };
  };
  if (name == 'ib') {
    if (operation == "add") {
      ib = ib + multi;
      document.getElementById("ib").innerHTML = ib;
    };
    if (operation == "sub") {
      ib = ib - multi;
      document.getElementById("ib").innerHTML = ib;
    };
  };
  if (name == 'slayer') {
    if (operation == "add") {
      slayer = slayer + multi;
      document.getElementById("slayer").innerHTML = slayer;
    };
    if (operation == "sub") {
      slayer = slayer - multi;
      document.getElementById("slayer").innerHTML = slayer;
    };
  };
  if (name == 'ws') {
    if (operation == "add") {
      ws = ws + multi;
      document.getElementById("ws").innerHTML = ws;
    };
    if (operation == "sub") {
      ws = ws - multi;
      document.getElementById("ws").innerHTML = ws;
    };
  };
  if (name == 'hm') {
    if (operation == "add") {
      hm = hm + multi;
      document.getElementById("hm").innerHTML = hm;
    };
    if (operation == "sub") {
      hm = hm - multi;
      document.getElementById("hm").innerHTML = hm;
    };
  };
  if (name == 'shade') {
    if (operation == "add") {
      shade = shade + multi;
      document.getElementById("shade").innerHTML = shade;
    };
    if (operation == "sub") {
      shade = shade - multi;
      document.getElementById("shade").innerHTML = shade;
    };
  };
  if (name == 'whc') {
    if (operation == "add") {
      whc = whc + multi;
      document.getElementById("whc").innerHTML = whc;
    };
    if (operation == "sub") {
      whc = whc - multi;
      document.getElementById("whc").innerHTML = whc;
    };
  };
  if (name == 'bh') {
    if (operation == "add") {
      bh = bh + multi;
      document.getElementById("bh").innerHTML = bh;
    };
    if (operation == "sub") {
      bh = bh - multi;
      document.getElementById("bh").innerHTML = bh;
    };
  };
  if (name == 'zealot') {
    if (operation == "add") {
      zealot = zealot + multi;
      document.getElementById("zealot").innerHTML = zealot;
    };
    if (operation == "sub") {
      zealot = zealot - multi;
      document.getElementById("zealot").innerHTML = zealot;
    };
  };
  if (name == 'bw') {
    if (operation == "add") {
      bw = bw + multi;
      document.getElementById("bw").innerHTML = bw;
    };
    if (operation == "sub") {
      bw = bw - multi;
      document.getElementById("bw").innerHTML = bw;
    };
  };
  if (name == 'pyro') {
    if (operation == "add") {
      pyro = pyro + multi;
      document.getElementById("pyro").innerHTML = pyro;
    };
    if (operation == "sub") {
      pyro = pyro - multi;
      document.getElementById("pyro").innerHTML = pyro;
    };
  };
  if (name == 'uc') {
      if (operation == "add") {
        uc = uc + multi;
        document.getElementById("uc").innerHTML = uc;
      };
      if (operation == "sub") {
        uc = uc - multi;
        document.getElementById("uc").innerHTML = uc;
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
  document.getElementById("merc").innerHTML = merc;
  document.getElementById("hunt").innerHTML = hunt;
  document.getElementById("fk").innerHTML = fk;
  document.getElementById("rv").innerHTML = rv;
  document.getElementById("ib").innerHTML = ib;
  document.getElementById("slayer").innerHTML = slayer;
  document.getElementById("ws").innerHTML = ws;
  document.getElementById("hm").innerHTML = hm;
  document.getElementById("shade").innerHTML = shade;
  document.getElementById("whc").innerHTML = whc;
  document.getElementById("bh").innerHTML = bh;
  document.getElementById("zealot").innerHTML = zealot;
  document.getElementById("bw").innerHTML = bw;
  document.getElementById("pyro").innerHTML = pyro;
  document.getElementById("uc").innerHTML = uc;
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
  load()
};

window.setInterval(function(){ save(); }, 1000);

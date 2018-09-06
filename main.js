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



function mercSub(number){
    merc = merc - 1;
    document.getElementById("merc").innerHTML = merc;
};

function mercAdd(number){
    merc = merc + 1;
    document.getElementById("merc").innerHTML = merc;
};

function huntSub(number){
    hunt = hunt - 1;
    document.getElementById("hunt").innerHTML = hunt;
};

function huntAdd(number){
    hunt = hunt + 1;
    document.getElementById("hunt").innerHTML = hunt;
};

function fkSub(number){
    fk = fk - 1;
    document.getElementById("fk").innerHTML = fk;
};

function fkAdd(number){
    fk = fk + 1;
    document.getElementById("fk").innerHTML = fk;
};




function rvSub(number){
    rv = rv - 1;
    document.getElementById("rv").innerHTML = rv;
};

function rvAdd(number){
    rv = rv + 1;
    document.getElementById("rv").innerHTML = rv;
};

function ibSub(number){
    ib = ib - 1;
    document.getElementById("ib").innerHTML = ib;
};

function ibAdd(number){
    ib = ib + 1;
    document.getElementById("ib").innerHTML = ib;
};

function slayerSub(number){
    slayer = slayer - 1;
    document.getElementById("slayer").innerHTML = slayer;
};

function slayerAdd(number){
    slayer = slayer + 1;
    document.getElementById("slayer").innerHTML = slayer;
};



function wsSub(number){
    ws = ws - 1;
    document.getElementById("ws").innerHTML = ws;
};

function wsAdd(number){
    ws = ws + 1;
    document.getElementById("ws").innerHTML = ws;
};

function hmSub(number){
    hm = hm - 1;
    document.getElementById("hm").innerHTML = hm;
};

function hmAdd(number){
    hm = hm + 1;
    document.getElementById("hm").innerHTML = hm;
};

function shadeSub(number){
    shade = shade - 1;
    document.getElementById("shade").innerHTML = shade;
};

function shadeAdd(number){
    shade = shade + 1;
    document.getElementById("shade").innerHTML = shade;
};



function whcSub(number){
    whc = whc - 1;
    document.getElementById("whc").innerHTML = whc;
};

function whcAdd(number){
    whc = whc + 1;
    document.getElementById("whc").innerHTML = whc;
};

function bhSub(number){
    bh = bh - 1;
    document.getElementById("bh").innerHTML = bh;
};

function bhAdd(number){
    bh = bh + 1;
    document.getElementById("bh").innerHTML = bh;
};

function zealotSub(number){
    zealot = zealot - 1;
    document.getElementById("zealot").innerHTML = zealot;
};

function zealotAdd(number){
    zealot = zealot + 1;
    document.getElementById("zealot").innerHTML = zealot;
};



function bwSub(number){
    bw = bw - 1;
    document.getElementById("bw").innerHTML = bw;
};

function bwAdd(number){
    bw = bw + 1;
    document.getElementById("bw").innerHTML = bw;
};

function pyroSub(number){
    pyro = pyro - 1;
    document.getElementById("pyro").innerHTML = pyro;
};

function pyroAdd(number){
    pyro = pyro + 1;
    document.getElementById("pyro").innerHTML = pyro;
};

function ucSub(number){
    uc = uc - 1;
    document.getElementById("uc").innerHTML = uc;
};

function ucAdd(number){
    uc = uc + 1;
    document.getElementById("uc").innerHTML = uc;
};


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
    uc: uc
  }
  localStorage.setItem("save",JSON.stringify(save));
}

function load(){
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

/*function delete(){
  localStorage.removeItem("save")
}*/

window.onload = function() {
  load()
};

window.setInterval(function(){
  save();
}, 1000);

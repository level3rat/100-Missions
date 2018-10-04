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
var operation2 = 1;
var multi = 1;
var levelsTotal = 0;

var commendationVault = 0;
var commendationRed = 0;
var commendationHat = 0;

var peasantVault = 0;
var peasantRed = 0;
var peasantDeed = 0;

var commonerVault = 0;
var commonerRed = 0;
var commonerDeed = 0;

var merchantVault = 0;
var merchantRed = 0;
var merchantDeed = 0;

var soldierVault = 0;
var soldierRed = 0;
var soldierDeed = 0;

var generalVault = 0;
var generalRed = 0;
var generalDeed = 0;

var emperorVault = 0;
var emperorRed = 0;
var emperorDeed = 0;

var tier = '';
var type = '';



function changeMulti(multiplier) {
  multi = multiplier;
  if (multi == 1) {
    document.getElementById("multi1").style = "border: 3px solid #D3D3D3; left: 407px;";
    document.getElementById("multi10").style = "border: 0px solid #D3D3D3; left: 453px;";
    document.getElementById("multi1-2").style = "border: 3px solid #D3D3D3;";
    document.getElementById("multi10-2").style = "border: 0px solid #D3D3D3;";
  };
  if (multi == 10) {
    document.getElementById("multi10").style = "border: 3px solid #D3D3D3; left: 450px;";
    document.getElementById("multi1").style = "border: 0px solid #D3D3D3; left: 410px;";
    document.getElementById("multi10-2").style = "border: 3px solid #D3D3D3;";
    document.getElementById("multi1-2").style = "border: 0px solid #D3D3D3;";
  };
};

function ops(name) {
  window[name]+=operation2*multi;
  //document.getElementById(name).innerHTML = window[name];
  refresh();
};

function changeOps(operator) {
  if (operator == 'add') {
    operation = 'add';
    operation2 = 1;
    document.getElementById("add").style = "border: 3px solid #D3D3D3; left: 407px;";
    document.getElementById("sub").style = "border: 0px solid #D3D3D3; left: 410px;";
  }
  if (operator == 'sub') {
    operation = 'sub';
    operation2 = -1;
    document.getElementById("sub").style = "border: 3px solid #D3D3D3; left: 407px;";
    document.getElementById("add").style = "border: 0px solid #D3D3D3; left: 410px;";
  }
};

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

function vault(tier, type) {
  tiertype = tier.concat(type);
  window[tiertype]+=operation2*multi;
  document.getElementById(tiertype).innerHTML = window[tiertype];
  //window.alert(tiertype)
  refresh();
};

function hideOperatorPanel(hideOP) {
  if (hideOP == 'true') {
    document.getElementById("operatorPanel").style.display = "none";
  }
  if (hideOP == 'false') {
    document.getElementById("operatorPanel").style.display = "block";
  }
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
    levelsSienna2: levelsSienna2,

    sum: sum,
    operation: operation,
    operation2: operation2,
    multi: multi,
    levelsTotal: levelsTotal,

    commendationVault: commendationVault,
    commendationRed: commendationRed,
    commendationHat: commendationHat,

    peasantVault:peasantVault,
    peasantRed:peasantRed,
    peasantDeed:peasantDeed,

    commonerVault:commonerVault,
    commonerRed:commonerRed,
    commonerDeed:commonerDeed,

    merchantVault:merchantVault,
    merchantRed:merchantRed,
    merchantDeed:merchantDeed,

    soldierVault:soldierVault,
    soldierRed:soldierRed,
    soldierDeed:soldierDeed,

    generalVault:generalVault,
    generalRed:generalRed,
    generalDeed:generalDeed,

    emperorVault:emperorVault,
    emperorRed:emperorRed,
    emperorDeed:emperorDeed
  };
  localStorage.setItem("save",JSON.stringify(save));
  //main.js failed to publish so im editing this so i can publish a "change"
};

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

  commendationPercentReds = Math.round((commendationRed / (commendationVault*3))*100) + '%';
  commendationPercentHats = Math.round((commendationHat / (commendationVault*3))*100) + '%';
  peasantPercentReds = Math.round((peasantRed / (peasantVault*3))*100) + '%';
  peasantPercentDeeds = Math.round((peasantDeed / (peasantVault*3))*100) + '%';
  commonerPercentReds = Math.round((commonerRed / (commonerVault*3))*100) + '%';
  commonerPercentDeeds = Math.round((commonerDeed / (commonerVault*3))*100) + '%';
  merchantPercentReds = Math.round((merchantRed / (merchantVault*3))*100) + '%';
  merchantPercentDeeds = Math.round((merchantDeed / (merchantVault*3))*100) + '%';
  soldierPercentReds = Math.round((soldierRed / (soldierVault*3))*100) + '%';
  soldierPercentDeeds = Math.round((soldierDeed / (soldierVault*3))*100) + '%';
  generalPercentReds = Math.round((generalRed / (generalVault*3))*100) + '%';
  generalPercentDeeds = Math.round((generalDeed / (generalVault*3))*100) + '%';
  emperorPercentReds = Math.round((emperorRed / (emperorVault*3))*100) + '%';
  emperorPercentDeeds = Math.round((emperorDeed / (emperorVault*3))*100) + '%';

  document.getElementById("commendationVault").innerHTML = commendationVault;
  document.getElementById("commendationRed").innerHTML = commendationRed;
  document.getElementById("commendationPercentReds").innerHTML = commendationPercentReds;
  document.getElementById("commendationHat").innerHTML = commendationHat;
  document.getElementById("commendationPercentHats").innerHTML = commendationPercentHats;

  document.getElementById("peasantVault").innerHTML = peasantVault;
  document.getElementById("peasantRed").innerHTML = peasantRed;
  document.getElementById("peasantPercentReds").innerHTML = peasantPercentReds;
  document.getElementById("peasantDeed").innerHTML = peasantDeed;
  document.getElementById("peasantPercentDeeds").innerHTML = peasantPercentDeeds;

  document.getElementById("commonerVault").innerHTML = commonerVault;
  document.getElementById("commonerRed").innerHTML = commonerRed;
  document.getElementById("commonerPercentReds").innerHTML = commonerPercentReds;
  document.getElementById("commonerDeed").innerHTML = commonerDeed;
  document.getElementById("commonerPercentDeeds").innerHTML = commonerPercentDeeds;

  document.getElementById("merchantVault").innerHTML = merchantVault;
  document.getElementById("merchantRed").innerHTML = merchantRed;
  document.getElementById("merchantPercentReds").innerHTML = merchantPercentReds;
  document.getElementById("merchantDeed").innerHTML = merchantDeed;
  document.getElementById("merchantPercentDeeds").innerHTML = merchantPercentDeeds;

  document.getElementById("soldierVault").innerHTML = soldierVault;
  document.getElementById("soldierRed").innerHTML = soldierRed;
  document.getElementById("soldierPercentReds").innerHTML = soldierPercentReds;
  document.getElementById("soldierDeed").innerHTML = soldierDeed;
  document.getElementById("soldierPercentDeeds").innerHTML = soldierPercentDeeds;

  document.getElementById("generalVault").innerHTML = generalVault;
  document.getElementById("generalRed").innerHTML = generalRed;
  document.getElementById("generalPercentReds").innerHTML = generalPercentReds;
  document.getElementById("generalDeed").innerHTML = generalDeed;
  document.getElementById("generalPercentDeeds").innerHTML = generalPercentDeeds;

  document.getElementById("emperorVault").innerHTML = emperorVault;
  document.getElementById("emperorRed").innerHTML = emperorRed;
  document.getElementById("emperorPercentReds").innerHTML = emperorPercentReds;
  document.getElementById("emperorDeed").innerHTML = emperorDeed;
  document.getElementById("emperorPercentDeeds").innerHTML = emperorPercentDeeds;

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
};

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

  if (typeof savegame.sum != "undefined") sum = savegame.sum;
  if (typeof savegame.operation != "undefined") operation = savegame.operation;
  if (typeof savegame.multi != "undefined") multi = savegame.multi;
  if (typeof savegame.levelsTotal != "undefined") levelsTotal = savegame.levelsTotal;

  if (typeof savegame.commendationVault != "undefined") commendationVault = savegame.commendationVault;
  if (typeof savegame.commendationRed != "undefined") commendationRed = savegame.commendationRed;
  if (typeof savegame.commendationHat != "undefined") commendationHat = savegame.commendationHat;

  if (typeof savegame.peasantVault != "undefined") peasantVault = savegame.peasantVault;
  if (typeof savegame.peasantRed != "undefined") peasantRed = savegame.peasantRed;
  if (typeof savegame.peasantDeed != "undefined") peasantDeed = savegame.peasantDeed;

  if (typeof savegame.commonerVault != "undefined") commonerVault = savegame.commonerVault;
  if (typeof savegame.commonerRed != "undefined") commonerRed = savegame.commonerRed;
  if (typeof savegame.commonerDeed != "undefined") commonerDeed = savegame.commonerDeed;

  if (typeof savegame.merchantVault != "undefined") merchantVault = savegame.merchantVault;
  if (typeof savegame.merchantRed != "undefined") merchantRed = savegame.merchantRed;
  if (typeof savegame.merchantDeed != "undefined") merchantDeed = savegame.merchantDeed;

  if (typeof savegame.soldierVault != "undefined") soldierVault = savegame.soldierVault;
  if (typeof savegame.soldierRed != "undefined") soldierRed = savegame.soldierRed;
  if (typeof savegame.soldierDeed != "undefined") soldierDeed = savegame.soldierDeed;

  if (typeof savegame.generalVault != "undefined") generalVault = savegame.generalVault;
  if (typeof savegame.generalRed != "undefined") generalRed = savegame.generalRed;
  if (typeof savegame.generalDeed != "undefined") generalDeed = savegame.generalDeed;

  if (typeof savegame.emperorVault != "undefined") emperorVault = savegame.emperorVault;
  if (typeof savegame.emperorRed != "undefined") savegame = savegame.emperorRed;
  if (typeof savegame.emperorDeed != "undefined") emperorDeed = savegame.emperorDeed;

  document.getElementById("100Missions").style.display = "block";
  multiplier = multi;
  changeMulti(multiplier);
  operator = operation;
  changeOps(operator);
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

    if (tabName == "VaultDrops") {
      document.getElementById("operatorPanel").style = "float: left; width: 140px; position: relative; left: 894px; top: 300px;";
    }
    if (tabName == "100Missions") {
      document.getElementById("operatorPanel").style = "float: left; width: 140px; position: relative; left: 450px; top: 300px;";
    }
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

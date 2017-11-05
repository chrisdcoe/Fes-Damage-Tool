
//Functions
function calculateAttackNumValue () {
  let numberOfAttacks = Number($("#numberOfAttacks").val());
  if (numberOfAttacks == 2) {
    return 1.15;
  }
  else if (numberOfAttacks == 3) {
    return 1.20;
  } else {
    return 1.0;
  }
}

function deriveAttackPower () {
  let playerStrength = Number($("#playerStrength").val());
  let weaponAttack = Number($("#weaponAttack").val());
  $("#attackPower").html(playerStrength + weaponAttack);
}

function derivePhysicalDefense () {
  let playerDefense = Number($("#playerDefense").val());
  let armorDefense = Number($("#armorDefense").val());
  $("#physDefense").html(playerDefense + armorDefense);
}

function deriveMagicalDefense () {
  let playerIntelligence = Number($("#playerIntelligence").val());
  let armorMagDef = Number($("#armorMagDef").val());
  $("#magicDefense").html(playerIntelligence + armorMagDef);
}

function calculatePlayerAttack () {
  let damageCalc = (3 * ( Number($("#attackPower").html()) ) - Number($("#monsterDefense").val())) / 4 * calculateAttackNumValue();
  return damageCalc;
}

function refreshAttackCards() {
  var source   = $('#attacks-template').html();
  var template = Handlebars.compile(source);

  if ($("#playerAttack").hasClass("active") ) {
    var result = calculatePlayerAttack();
    var resultLow = result - (result/15);
    var resultHigh = result + (result/15);

    var context = {
      title: "Player: Normal Attack",
      formula: "(3 * Attack - Defense) / 4 * NOH",
      result: result,
      resultLow: resultLow,
      resultHigh: resultHigh
    };
  } else if ($("#playerDeathblow").hasClass("active")) {
    var result = 5;
    var resultLow = result - (result/15);
    var resultHigh = result + (result/15);

    var context = {
      title: "Player: Deathblow",
      formula: "(3 * Attack + 2 * Damage - Defense) / 4 * NOH",
      result: result,
      resultLow: resultLow,
      resultHigh: resultHigh
    };
  } else if ($("#playerMagic").hasClass("active")) {
    var result = 5;
    var resultLow = result - (result/15);
    var resultHigh = result + (result/15);

    var context = {
      title: "Player: Magic",
      formula: "(2 * (Magic + Damage) * MagicMult - MDefense) / 4",
      result: result,
      resultLow: resultLow,
      resultHigh: resultHigh
    };
  } else if ($("#playerHeal").hasClass("active")) {
    var result = 5;
    var resultLow = result - (result/15);
    var resultHigh = result + (result/15);

    var context = {
      title: "Player: Heal",
      formula: "(Effect + Magic / 4) * MagicMult",
      result: result,
      resultLow: result,
      resultHigh: result
    };
  } else if ($("#playerItem").hasClass("active")) {
    var result = 5;
    var resultLow = result - (result/15);
    var resultHigh = result + (result/15);

    var context = {
      title: "Player: Item",
      formula: "(2 * Damage - MDefense) / 4",
      result: result,
      resultLow: resultLow,
      resultHigh: resultHigh
    };
  }
  // }s

  var html = template(context);
  $("#playerActionContent").html(html);
}

function playerTabChange(element) {
  $(element).parent().siblings().children().removeClass("active");
  $(element).addClass("active");
  refreshAttackCards();
}

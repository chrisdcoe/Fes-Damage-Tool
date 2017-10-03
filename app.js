//Player stats
var playerStr = 5;
var playerDef = 0;
var playerMagic = 2;
var playerInt = 2;
var playerSpd = 2;

//Weapon stats
var weaponAttack = 4;
var weaponMagic = 1.00;
var weaponElement = "None";
var numberOfAttacks = 2;
var attackNumValue = 1.0;

//Skill stats
var skillElement = "None";
var isSkill = false;
var skillIsMagic = false;
var skillDamage = 0;

//Monster stats
var monsterAttack = 0;
var monsterDef = 3;
var monsterMagDef = 0;
var monsterInt = 0;
var monsterSpd = 1;

//Functions
function calculateAttackNumValue (numberOfAttacks) {
  if (numberOfAttacks === 1) {
    attackNumValue = 1.0;
  }
  else if (numberOfAttacks === 2) {
    attackNumValue = 1.15;
  }
  else if (numberOfAttacks === 3) {
    attackNumValue = 1.2;
  }
  return attackNumValue;
}

function calculatePlayerAttack (playerStr, weaponAttack, weaponElement, monsterDef, numberOfAttacks) {

  let damageCalc = (3 * ( playerStr + weaponAttack) - monsterDef) / 4 * calculateAttackNumValue(numberOfAttacks);
  console.log(damageCalc);
}

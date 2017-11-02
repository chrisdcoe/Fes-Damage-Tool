
//Functions
function calculateAttackNumValue (numberOfAttacks) {
  if (numberOfAttacks === 1) {
    const attackNumValue = 1.0;
  }
  else if (numberOfAttacks === 2) {
    const attackNumValue = 1.15;
  }
  else if (numberOfAttacks === 3) {
    const attackNumValue = 1.2;
  }
  return attackNumValue;
}

function calculatePlayerAttack (playerStr, weaponAttack, weaponElement, monsterDef, numberOfAttacks) {

  let damageCalc = (3 * ( playerStr + weaponAttack) - monsterDef) / 4 * calculateAttackNumValue(numberOfAttacks);
  console.log(damageCalc);
}

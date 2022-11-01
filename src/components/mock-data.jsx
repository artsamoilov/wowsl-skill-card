export const mockSkills = [
  {
    id: 0,
    icon: "img/unstoppable.svg",
    title: "Unstoppable",
    type: "Survivability",
    rarity: "Legendary",
    isSelected: true,
    description: "Reduce engine repair time. At last mastery level gain reduced mobility with disabled engine.",
    mastery: {
      currentLevel: 1,
      maxLevel: 4,
      bonus: "Engine repair time",
      currentBonusValue: "-2.5 %",
      nextBonusValue: "-5 %",
    }
  },
  {
    id: 1,
    icon: "img/cannoneer.svg",
    title: "Cannoneer",
    type: "Firepower",
    rarity: "Regular",
    isSelected: true,
    description: "Increase damage dealt by main cannons. At last mastery level also increase reload speed by 5%.",
    mastery: {
      currentLevel: 3,
      maxLevel: 4,
      bonus: "Main cannon damage",
      currentBonusValue: "+7.5 %",
      nextBonusValue: "+10 %",
    }
  },
  {
    id: 2,
    icon: "img/engine.svg",
    title: "Engine maintenance",
    type: "Mobility",
    rarity: "Epic",
    isSelected: false,
    description: "Increase maximal speed. At last mastery level decrease repair time by 5%.",
    mastery: {
      currentLevel: 0,
      maxLevel: 4,
      bonus: "Max speed",
      currentBonusValue: "0",
      nextBonusValue: "+2.5 %",
    }
  },
];

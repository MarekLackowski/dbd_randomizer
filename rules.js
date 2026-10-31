const RULES = {
"surv": {
  "oneOf": [
    ["Background Player", "Balanced Landing", "Dead Hard", "Dramaturgy", "Head On", "Lithe", "Overcome", "Smash Hit", "Sprint Burst"]
  ],
  "conflicts": [
    ["No Mither", ["Self-Care", "Strength in Shadows", "Inner Strength", "Resurgence", "Road Life", "Solidarity", "Reactive Healing", "Second Wind", "Moment of Glory", "Clean Break", "Teamwork: Collective Stealth", "For the People", "Duty of Care", "Finesse", "Light-footed", "Dramaturgy", "Iron Will"]]
  ],
  "requires": [
    ["Ghost Notes", ["Background Player", "Balanced Landing", "Dead Hard", "Dramaturgy", "Head On", "Lithe", "Overcome", "Smash Hit", "Sprint Burst", "Rapid Response"]],
    ["Blood Rush", ["Background Player", "Balanced Landing", "Dead Hard", "Dramaturgy", "Head On", "Lithe", "Overcome", "Smash Hit", "Sprint Burst", "Rapid Response"]]
  ]
},
"killer": {
  "oneOf": [],
  "conflicts": [
    ["Lightborn", ["Shadowborn"]],
    ["Rapid Brutality", ["Beast of Prey"]]
  ],
  "requires": []
}
};

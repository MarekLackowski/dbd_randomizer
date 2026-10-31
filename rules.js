const RULES = {
"surv": {
  "oneOf": [],
  "conflicts": [
    ["Sprint Burst", ["Background Player", "Balanced Landing", "Dead Hard", "Dramaturgy", "Head On", "Lithe", "Overcome", "Smash Hit"]],
    ["No Mither", ["Adrenaline", "Self-Care", "Strength in Shadows", "Inner Strength", "Resurgence", "Road Life", "Solidarity", "Reactive Healing", "Second Wind", "Moment of Glory", "Clean Break", "Teamwork: Collective Stealth", "For the People", "Duty of Care", "Finesse", "Light-footed", "Dramaturgy", "Iron Will"]]
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
},
"addons": {
  "The Trapper": [["Padded Jaws", ["Rusted Jaws", "Serrated Jaws"]]],
  "The Wraith": [["Coxcombed Clapper", ["Bone Clapper"]], ["\"The Beast\" - Soot", ["\"The Ghost\" - Soot"]]],
  "The Nurse": [["Matchbox", ["Torn Bookmark", "Campbell's Last Breath", "Catatonic Boy's Treasure", "Heavy Panting"]]],
  "The Hag": [
    ["Scarred Hand", ["Dead Fly Mud", "Dragonfly Wings", "Dried Cicada", "Mint Rag", "Rusty Shackles"]],
    ["Waterlogged Shoe", ["Dead Fly Mud", "Dragonfly Wings", "Dried Cicada", "Mint Rag"]],
    ["Willow Wreath", ["Pussy Willow Catkins"]]
  ],
  "The Shape": [
    ["Scratched Mirror", ["Fragrant Tuft of Hair", "Hair Bow", "Hair Brush", "J.Myers Memorial", "Judith's Tombstone", "Lock of Hair", "Tombstone Piece", "Vanity Mirror", "Reflective Fragment", "Dead Rabbit", "Glass Fragment", "Mirror Shard", "Jewelry", "Jewelry Box", "Judith's Journal"]],
    ["Fragrant Tuft of Hair", ["Glass Fragment", "Mirror Shard", "Reflective Fragment"]],
    ["Judith's Tombstone", ["Hair Bow", "Reflective Fragment"]]
  ],
  "The Doctor": [["Interview Tape", ["Scrapped Tape"]]],
  "The Huntress": [["Begrimed Head", ["Rusty Head"]]],
  "The Cannibal": [["Rusted Chain", ["Grisly Chain"]]],
  "The Nightmare": [["Blue Dress", ["Outdoor Rope"]]],
  "The Legion": [["The Legion Pin", ["Defaced Smiley Pin"]]],
  "The Plague": [["Prayer Tablet Fragment", ["Emetic potion", "Infected Emetic", "Vile Emetic"]]],
  "The Blight": [["Compound Thirty-Three", ["Iridescent Blight Tag", "Adrenaline Vial"]], ["Iridescent Blight Tag", ["Adrenaline Vial"]]],
  "The Onryō": [["Iridescent Videotape", ["Cabin Sign", "Videotape Copy"]]],
  "The Mastermind": [["Unicorn Medallion", ["R.P.D. Shoulder Walkie"]], ["Jewel Beetle", ["Chalice (Gold)"]]],
  "The Good Guy": [["Iridescent Amulet", ["Hair Spray & Candle"]]],
  "The Animatronic": [["Bonnie’s Guitar Strings", ["Security Guard’s Badge"]]],
  "The Judgment": [["Obsidian Feather", ["Holy Winged Icon"]]]
}
};

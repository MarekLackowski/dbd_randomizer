const PATCH = "10.2.2";
const SURV = [
{
"n": "A Place For Us",
"d": "While healing another Survivor, you both gain <span class=k>Elusive</span>.<br><br>Whenever you finish healing the Obsession, you both gain <span class=k>Elusive</span> for <span class=t>30</span>s.<br><br>When the trial starts, you are less likely to be the Obsession.",
"i": "icons/IconsPerks_aPlaceForUs.png"
},
{
"n": "Ace in the Hole",
"d": "Whenever you loot an item from a Chest, it will have:<ul><li>A Visceral or lower rarity add-on.</li><li><span class=t>100</span>% chance for an Uncommon or lower rarity add-on.</li></ul><br><br>When you escape, you keep your add-ons.",
"i": "icons/IconPerks_aceInTheHole.png"
},
{
"n": "Adrenaline",
"d": "When all Generators are completed, if you are downed or injured, heal instantly. Then, ignoring <span class=k>Exhausted</span>:<ul><li>You gain <span class=t>50</span>% <span class=k>Haste</span> for <span class=t>4</span>s.</li><li>You gain <span class=k>Exhausted</span> for <span class=t>40</span>s.</li></ul>",
"i": "icons/IconPerks_adrenaline.png"
},
{
"n": "Aftercare",
"d": "You and up to <span class=t>3</span> Survivors see each other's Auras whenever:<ul><li>You unhook them, or they unhook you.</li><li>You finish healing them, or they finish healing you.</li></ul><br><br>This effect lasts until you are hooked.",
"i": "icons/IconPerks_aftercare.png"
},
{
"n": "Alert",
"d": "Whenever the Killer breaks a Pallet or Breakable Wall, or damages a Generator:<ul><li>You hear a sound cue.</li><li>You see their Aura for <span class=t>5</span>s.</li></ul>",
"i": "icons/IconPerks_alert.png"
},
{
"n": "Any Means Necessary",
"d": "While next to a Dropped Pallet, use the <b>Active Ability 1 button</b> for <span class=t>3</span>s to reset it.<br><br>You see the Auras of Dropped Pallets.",
"i": "icons/IconPerks_anyMeansNecessary.png"
},
{
"n": "Apocalyptic Ingenuity",
"d": "After you rummage or unlock <span class=t>1</span> Chest, while next to a Broken Pallet, use the <b>Active Ability 1 button</b> for <span class=t>3</span>s to create a Fragile Pallet.<br><br>Within <span class=t>32</span>m, you see the Auras of Broken Pallets.",
"i": "icons/IconPerks_apocalypticIngenuity.png"
},
{
"n": "Appraisal",
"d": "When the trial starts, you earn <span class=t>4</span> Tokens.<br><br>Spend <span class=t>1</span> Token to rummage an empty Chest, up to <span class=t>2</span> times per Chest.<br><br>You rummage Chests <span class=t>80</span>% faster.",
"i": "icons/IconPerks_appraisal.png"
},
{
"n": "Autodidact",
"d": "You start the trial with <span class=t>0</span> Tokens, up to <span class=t>5</span>, and your good basic healing Skill Checks give <span class=t>15</span>% less progress.<br><br>While healing another Survivor without a Med-Kit:<ul><li>Whenever you hit a basic Skill Check, you earn <span class=t>1</span> token.</li><li>Whenever you hit a basic Skill Check, for each Token, you gain <span class=t>15</span>% more progress.</li><li>You cannot get great basic Skill Checks.</li></ul>",
"i": "icons/IconPerks_autodidact.png"
},
{
"n": "Babysitter",
"d": "Whenever you unhook a Survivor:<ul><li>They gain <span class=t>10</span>% <span class=k>Haste</span> for <span class=t>30</span>s.</li><li>They leave no Pools of Blood for <span class=t>30</span>s.</li><li>They leave no Scratch Marks for <span class=t>30</span>s.</li><li>You see the Killer's Aura for <span class=t>8</span>s.</li></ul>",
"i": "icons/IconPerks_babysitter.png"
},
{
"n": "Background Player",
"d": "Whenever the Killer picks-up another Survivor, for the next <span class=t>10</span>s, when you start running:<ul><li>Gain <span class=t>50</span>% <span class=k>Haste</span> for <span class=t>5</span>s.</li><li>Gain <span class=k>Exhausted</span> for <span class=t>20</span>s.</li></ul>",
"i": "icons/IconPerks_backgroundPlayer.png"
},
{
"n": "Bada Bada Boom",
"d": "After repairing <span class=t>20</span>% of Generators, while next to a Window, use the <b>Active Ability 2 button</b> to trap it for <span class=t>60</span>s. All Survivors see that Window's Aura for that time.<br><br>When the Killer vaults that Window, the trap explodes and they gain <span class=t>50</span>% <span class=k>Hindered</span> for <span class=t>4</span>s.",
"i": "icons/IconsPerks_BadaBadaBoom.png"
},
{
"n": "Balanced Landing",
"d": "Whenever you fall from at least <span class=t>1.25</span>m:<ul><li>You gain <span class=t>50</span>% <span class=k>Haste</span> for <span class=t>3</span>s.</li><li>You gain <span class=k>Exhausted</span> for <span class=t>40</span>s.</li><li>Your stagger is <span class=t>75</span>% shorter.</li><li>Your Grunts from falling are <span class=t>100</span>% quieter.</li></ul>",
"i": "icons/IconPerks_balancedLanding.png"
},
{
"n": "Bardic Inspiration",
"d": "While idle, use the <b>Active Ability 1 button</b> to perform, empowering all Survivors within <span class=t>16</span>m for up to <span class=t>15</span>s. While you are performing, other Survivors will see your Aura. Roll a d20:<ul><li><b>1</b> | You scream, but nothing happens.</li><li><b>2-10</b> | Basic Skill Checks give +<span class=t>1</span>% progress.</li><li><b>11-19</b> | Basic Skill Checks give +<span class=t>2</span>% progress.</li><li><b>20</b> | Basic Skill Checks give +<span class=t>3</span>% progress.</li></ul><br><br>If you complete the performance, this effect ends after <span class=t>90</span>s. Cooldown: <span class=t>90</span>s.",
"i": "icons/IconPerks_bardicInspiration.png"
},
{
"n": "Better Than New",
"d": "Whenever you finish healing another Survivor, until they take damage:<ul><li>They bless and cleanse Totems <span class=t>50</span>% faster.</li><li>They heal <span class=t>50</span>% faster.</li><li>They unlock Chests <span class=t>50</span>% faster.</li></ul>",
"i": "icons/IconPerks_betterThanNew.png"
},
{
"n": "Better Together",
"d": "While you are repairing a Generator:<li>Other Survivors see that Generator's Aura.</li><li>Whenever the Killer downs a Survivor, you see the Auras of all Survivors for <span class=t>30</span>s.</li>",
"i": "icons/IconPerks_betterTogether.png"
},
{
"n": "Bite the Bullet",
"d": "While healing, you and the healed Survivor make no noises or Grunts of Pain. Whenever you miss a basic Skill Check:<ul><li>You lose only <span class=t>1</span>% progress.</li><li>The Killer is not alerted.</li></ul>",
"i": "icons/IconPerks_biteTheBullet.png"
},
{
"n": "Blast Mine",
"d": "After repairing <span class=t>40</span>% of Generators, while next to a Generator, use the <b>Active Ability 2 button</b> to trap it for <span class=t>120</span>s. All Survivors see that Generator's Aura for that time.<br><br>When the Killer damages that Generator, the trap explodes, then:<ul><li>They are stunned for <span class=t>4</span>s.</li><li>Everyone nearby looking at the detonation is blinded.</li></ul>",
"i": "icons/IconPerks_blastMine.png"
},
{
"n": "Blood Pact",
"d": "While you are not the Obsession:<ul><li>While you or the Obsession are injured, you see each other's Auras.</li><li>Whenever you finish healing the Obsession, or they finish healing you, while within <span class=t>16</span>m of each other, you both gain <span class=t>7</span>% <span class=k>Haste</span>.</li></ul><br><br>While you are the Obsession, if you are hooked, another Survivor becomes the Obsession.<br><br>When the trial starts, you are less likely to be the Obsession.",
"i": "icons/IconPerks_bloodPact.png"
},
{
"n": "Blood Rush",
"d": "Until all Generators are completed, whenever you are unhooked, for the next <span class=t>60</span>s, while <span class=k>Exhausted</span>, use the <b>Active Ability 1 button</b> to lose <span class=k>Exhausted</span> instantly.<br><br>This is disabled by conspicuous actions.",
"i": "icons/IconPerks_bloodRush.png"
},
{
"n": "Boil Over",
"d": "While carried by the Killer:<ul><li>Whenever the Killer falls from at least <span class=t>1.25</span>m, you gain <span class=t>33</span>% of your current wiggle progress.</li><li>Your wiggle is <span class=t>80</span>% stronger.</li><li>Within <span class=t>16</span>m, the Killer cannot see Hook Auras.</li></ul>",
"i": "icons/IconPerks_boilOver.png"
},
{
"n": "Bond",
"d": "Within <span class=t>36</span>m, you see other Survivors' Auras.",
"i": "icons/IconPerks_bond.png"
},
{
"n": "Boon: Circle of Healing",
"d": "While next to a Totem, use the <b>Active Ability 1 button</b> to bless it, creating a unique Boon Totem that combines all your Boons.<br><br>Survivors within the Boon's range:<ul><li>While healing without a Med-Kit, they heal others <span class=t>100</span>% faster.</li><li>While injured, other Survivors see their Aura.</li></ul>",
"i": "icons/IconPerks_boonCircleOfHealing.png"
},
{
"n": "Boon: Dark Theory",
"d": "While next to a Totem, use the <b>Active Ability 1 button</b> to bless it, creating a unique Boon Totem that combines all your Boons.<br><br>Survivors within the Boon's range gain <span class=t>3</span>% <span class=k>Haste</span>. When leaving the range, this ends after <span class=t>4</span>s.",
"i": "icons/IconPerks_boonDarkTheory.png"
},
{
"n": "Boon: Exponential",
"d": "While next to a Totem, use the <b>Active Ability 1 button</b> to bless it, creating a unique Boon Totem that combines all your Boons.<br><br>Downed Survivors within the Boon's range:<ul><li>Recover <span class=t>100</span>% faster.</li><li>Can fully recover.</li></ul>",
"i": "icons/IconPerks_boonExponential.png"
},
{
"n": "Boon: Illumination",
"d": "While next to a Totem, use the <b>Active Ability 1 button</b> to bless it, creating a unique Boon Totem that combines all your Boons.<br><br>Survivors within the Boon's range:<ul><li>See the Auras of Chests.</li><li>See the Auras of Generators.</li></ul><br><br>While you have a Boon Totem, you bless <span class=t>200</span>% faster.",
"i": "icons/IconPerks_boonIllumination.png"
},
{
"n": "Boon: Shadow Step",
"d": "While next to a Totem, use the <b>Active Ability 1 button</b> to bless it, creating a unique Boon Totem that combines all your Boons. Survivors within the Boon's range:<ul><li>Leave no Scratch Marks.</li><li>Their Auras cannot be seen by the Killer.</li></ul><br><br>When leaving the range, this ends after <span class=t>4</span>s.",
"i": "icons/IconPerks_boonShadowStep.png"
},
{
"n": "Boon: Steadfast",
"d": "While next to a Totem, use the <b>Active Ability 1 button</b> to bless it, creating a unique Boon Totem that combines all your Boons.<br><br>Generators within the Boon's range:<ul><li>Regress <span class=t>50</span>% slower.</li><li>Survivors repair them <span class=t>10</span>% faster.</li></ul><br><br>Survivors within the Boon's range see the Auras of affected Generators.",
"i": "icons/T_UI_iconsPerks_BoonSteadfast.png"
},
{
"n": "Borrowed Time",
"d": "Whenever you unhook a Survivor:<ul><li>They retain their unhook <span class=k>Endurance</span> for <span class=t>10</span>s longer.</li><li>They retain their unhook <span class=k>Haste</span> for <span class=t>10</span>s longer.</li></ul>",
"i": "icons/IconPerks_borrowedTime.png"
},
{
"n": "Botany Knowledge",
"d": "You heal <span class=t>50</span>% faster.",
"i": "icons/IconPerks_botanyKnowledge.png"
},
{
"n": "Breakdown",
"d": "Whenever you are unhooked:<ul><li>The Hook breaks, then is repaired after <span class=t>180</span>s.</li><li>You see the Killer's Aura for <span class=t>6</span>s.</li></ul>",
"i": "icons/IconPerks_breakdown.png"
},
{
"n": "Breakout",
"d": "Within <span class=t>5</span>m of a carried Survivor:<ul><li>You gain <span class=t>10</span>% <span class=k>Haste</span>.</li><li>The carried Survivor wiggles <span class=t>25</span>% faster.</li></ul>",
"i": "icons/IconPerks_breakout.png"
},
{
"n": "Buckle Up",
"d": "While healing a downed Survivor, you both see the Killer's Aura.<br><br>Whenever you finish healing a downed Survivor or fully recover:<ul><li>The Survivor gains <span class=t>50</span>% <span class=k>Haste</span> for <span class=t>5</span>s.</li><li>The Survivor leaves no Scratch Marks for <span class=t>5</span>s.</li></ul>",
"i": "icons/IconPerks_buckleUp.png"
},
{
"n": "Built to Last",
"d": "While holding a depleted item, after hiding in a Locker for <span class=t>10</span>s, it is recharged to <span class=t>99</span>%.<br><br>Each time you recharge an item this way, it recharges <span class=t>33</span>% fewer Charges.",
"i": "icons/IconPerks_builtToLast.png"
},
{
"n": "Calm Spirit",
"d": "You do not scare Crows or scream.<br><br>You bless and cleanse Totems, and unlock Chests silently, and <span class=t>10</span>% faster.",
"i": "icons/IconPerks_calmSpirit.png"
},
{
"n": "Camaraderie",
"d": "While you are struggling on Hook, when another Survivor gets within <span class=t>16</span>m, the timer is paused for <span class=t>34</span>s.",
"i": "icons/IconPerks_camaraderie.png"
},
{
"n": "Champion of Light",
"d": "While you are using a Flashlight, you gain <span class=t>50</span>% <span class=k>Haste</span>.<br><br>Whenever you blind the Killer, they gain <span class=t>20</span>% <span class=k>Hindered</span> for <span class=t>6</span>s. Cooldown: <span class=t>40</span>s.",
"i": "icons/IconPerks_championOfLight.png"
},
{
"n": "Change of Plan",
"d": "When the trial starts, you earn <span class=t>2</span> Tokens.<br><br>While hiding in a Locker and holding a non-event Toolbox, use the <b>Active Ability 2 button</b> and spend 1 Token to transform your Toolbox and add-ons into a Med-Kit of the same rarity with <span class=t>100</span>% Charges and random add-ons of the same rarity.",
"i": "icons/IconsPerks_ChangeOfPlan.png"
},
{
"n": "Chemical Trap",
"d": "After repairing <span class=t>20</span>% of Generators, while next to a Dropped Pallet, use the <b>Active Ability 2 button</b> to trap it for <span class=t>60</span>s. All Survivors see that Pallet's Aura for that time.<br><br>When the Killer breaks that Pallet, the trap explodes and they gain <span class=t>50</span>% <span class=k>Hindered</span> for <span class=t>4</span>s.",
"i": "icons/IconPerks_chemicalTrap.png"
},
{
"n": "Clairvoyance",
"d": "Whenever you bless or cleanse a Totem, while not holding an item, use the <b>Use Item button</b> to, for up to <span class=t>12</span>s and within <span class=t>64</span>m:<ul><li>See the Auras of Chests.</li><li>See the Auras of Exit Gate Switches.</li><li>See the Auras of Generators.</li><li>See the Aura of the Hatch.</li><li>See the Auras of Hooks.</li></ul>",
"i": "icons/IconPerks_clairvoyance.png"
},
{
"n": "Clean Break",
"d": "Whenever you finish healing another Survivor, while being healed by another Survivor, use the <b>Active Ability 1 button</b> to gain <span class=k>Broken</span>.<br><br>After <span class=t>45</span>s, if you are not downed, you are instantly healed.",
"i": "icons/IconPerks_cleanBreak.png"
},
{
"n": "Come and Get Me!",
"d": "Whenever you unhook a Survivor, while crouched and idle, use the <b>Active Ability 1 button</b> to have injured and downed Survivors within <span class=t>24</span>m:<ul><li>Make no Grunts of Pain for <span class=t>15</span>s.</li><li>Leave no Pools of Blood for <span class=t>15</span>s.</li><li>Leave no Scratch Marks for <span class=t>15</span>s.</li></ul><br><br>You scream, then the Killer sees your Aura for <span class=t>5</span>s.",
"i": "icons/IconPerks_comeAndGetMe.png"
},
{
"n": "Conviction",
"d": "After you finish healing <span class=t>1</span> other Survivor, while downed with at least <span class=t>25</span>% recovery, use the <b>Active Ability 1 button</b> to recover instantly.<br><br>You gain <span class=k>Broken</span>, then, after <span class=t>30</span>s, you are downed instantly.",
"i": "icons/IconPerks_conviction.png"
},
{
"n": "Corrective Action",
"d": "When the trial starts, you earn <span class=t>3</span> Tokens, up to <span class=t>5</span>.<br><br>Whenever you hit a great basic Skill Check, earn <span class=t>1</span> Token.<br><br>Whenever another Survivor misses a basic Skill Check, spend <span class=t>1</span> Token:<ul><li>The missed Skill Check becomes a good Skill Check.</li><li>You see that Survivor's Aura for <span class=t>6</span>s.</li></ul>",
"i": "icons/IconPerks_correctiveAction.png"
},
{
"n": "Counterforce",
"d": "When the trial starts, you earn <span class=t>1</span> Token.<br><br>Whenever you cleanse a Totem, earn <span class=t>1</span> Token, then, you see the Aura of the farthest Totem for <span class=t>14</span>s.<br><br>For each Token, you cleanse Totems <span class=t>25</span>% faster.",
"i": "icons/IconPerks_counterforce.png"
},
{
"n": "Cross-Examination",
"d": "While in the Killer's Terror Radius and not being chased by the Killer, they leave Light Marks that last for <span class=t>10</span>s that you can see. While on the Killer's Light Marks, you gain <span class=k>Elusive</span>. This ends after <span class=t>5</span>s.",
"i": "icons/T_UI_iconsPerks_CrossExamination.png"
},
{
"n": "Cut Loose",
"d": "While chased by the Killer, whenever you medium or fast-vault:<ul><li>For up to <span class=t>6</span>s, your medium and fast vaults are silent.</li><li>During that time, whenever you medium or fast-vault, the timer is reset.</li></ul><br><br>Cooldown: <span class=t>45</span>s.",
"i": "icons/IconPerks_cutLoose.png"
},
{
"n": "Dance With Me",
"d": "Whenever you fast-exit a Locker, medium-vault, or fast-vault, you leave no Scratch Marks for <span class=t>5</span>s. Cooldown: <span class=t>15</span>s.",
"i": "icons/IconPerks_danceWithMe.png"
},
{
"n": "Dark Sense",
"d": "Whenever a Generator is completed, when the Killer gets within <span class=t>20</span>m of you, for <span class=t>15</span>s:<ul><li>You see the Auras of Pallets and Windows within <span class=t>32</span>m.</li><li>You see the Auras of other Survivors.</li><li>You see the Killer's Aura.</li></ul>",
"i": "icons/IconPerks_darkSense.png"
},
{
"n": "Dead Hard",
"d": "Whenever you are unhooked, while injured and running, use the <b>Active Ability 1 button</b>:<ul><li>You gain <span class=k>Endurance</span> for <span class=t>0.5</span>s.</li><li>You gain <span class=k>Exhausted</span> for <span class=t>40</span>s.</li></ul>",
"i": "icons/IconPerks_deadHard.png"
},
{
"n": "Deadline",
"d": "While injured, basic Skill Checks:<ul><li>Are <span class=t>10</span>% more likely to appear.</li><li>Appear in random places.</li></ul><br><br>Whenever you miss a basic Skill Check, you lose <span class=t>50</span>% less progress.",
"i": "icons/IconPerks_deadline.png"
},
{
"n": "Deception",
"d": "Whenever you attempt to fast-enter a Locker:<ul><li>You do not enter the Locker.</li><li>The Killer is alerted.</li><li>You leave no Pools of Blood for <span class=t>5</span>s.</li><li>You leave no Scratch Marks for <span class=t>5</span>s.</li></ul><br><br>Cooldown: <span class=t>15</span>s.",
"i": "icons/IconPerks_deception.png"
},
{
"n": "Decisive Strike",
"d": "Until all Generators are completed, whenever you are unhooked, for the next <span class=t>60</span>s: when the Killer picks you up, once per trial, hit a Special Skill check:<ul><li>Stun the Killer for <span class=t>4</span>s.</li><li>Become the Obsession.</li></ul><br><br>This is disabled by conspicuous actions. At the start of the trial, you are more likely to be the Obsession.",
"i": "icons/IconPerks_decisiveStrike.png"
},
{
"n": "Deja Vu",
"d": "You see the Auras of the <span class=t>3</span> Generators closest to each other and repair them <span class=t>6</span>% faster.",
"i": "icons/IconPerks_dejaVu.png"
},
{
"n": "Deliverance",
"d": "Once per trial, when you safely unhook another Survivor, you can unhook yourself. When you unhook yourself this way, you gain <span class=k>Broken</span> for <span class=t>120</span>s.",
"i": "icons/IconPerks_deliverance.png"
},
{
"n": "Desperate Measures",
"d": "For each injured, downed, or hooked Survivor:<ul><li>You heal <span class=t>20</span>% faster.</li><li>You unhook <span class=t>20</span>% faster.</li></ul>",
"i": "icons/IconPerks_desperateMeasures.png"
},
{
"n": "Detective's Hunch",
"d": "Whenever a Generator is completed, for <span class=t>20</span>s, within <span class=t>64</span>m of you:<ul><li>You see the Auras of Chests.</li><li>You see the Auras of Generators.</li><li>You see the Auras of Totems.</li></ul>",
"i": "icons/IconPerks_detectivesHunch.png"
},
{
"n": "Distortion",
"d": "When the trial starts, and after being chased for <span class=t>15</span>s, you earn <span class=t>1</span> Token, up to <span class=t>2</span>.<br><br>While not downed, whenever the Killer attempts to see your Aura, spend <span class=t>1</span> Token. Then, for the next <span class=t>12</span>s:<ul><li>The Killer cannot see your Aura.</li><li>You leave no Scratch Marks.</li></ul>",
"i": "icons/IconPerks_distortion.png"
},
{
"n": "Diversion",
"d": "After hiding for <span class=t>20</span>s within the Killer's Terror Radius, while crouched and idle, use the <b>Active Ability 1 button</b> to throw a pebble <span class=t>20</span>m away:<ul><li>The Killer is alerted.</li><li>The pebble leaves Scratch Marks.</li></ul>",
"i": "icons/IconPerks_diversion.png"
},
{
"n": "Do No Harm",
"d": "While healing another Survivor, for each Hook State they have:<ul><li>You heal <span class=t>40</span>% faster.</li><li>Great basic Skill Checks, grant <span class=t>3</span>% more progress.</li><li>Basic Skill Checks are <span class=t>5</span>% more likely to appear.</li></ul>",
"i": "icons/T_UI_iconsPerks_DoNoHarm.png"
},
{
"n": "Dramaturgy",
"d": "While healthy and running, use the <b>Active Ability 1 button</b>:<ul><li>You gain <span class=t>25</span>% <span class=k>Haste</span> for <span class=t>2</span>s.</li><li>You gain <span class=k>Exhausted</span> for <span class=t>40</span>s.</li></ul><br><br>Then, one happens at random:<ul><li>You gain <span class=t>25</span>% <span class=k>Haste</span> for <span class=t>2</span>s.</li><li>You gain <span class=k>Exposed</span> for <span class=t>12</span>s.</li><li>You gain a random rare item with random add-ons.</li><li>You scream, but nothing happens.</li></ul><br><br>The same effect cannot happen twice in a row.",
"i": "icons/IconPerks_dramaturgy.png"
},
{
"n": "Duty of Care",
"d": "While healthy, whenever you take a protection hit, other Survivors within <span class=t>12</span>m gain <span class=t>25</span>% <span class=k>Haste</span> for <span class=t>6</span>s.",
"i": "icons/T_UI_iconsPerks_DutyOfCare.png"
},
{
"n": "Empathic Connection",
"d": "You heal other Survivors <span class=t>40</span>% faster.<br><br>Injured Survivors see your Aura.",
"i": "icons/IconPerks_empathicConnection.png"
},
{
"n": "Empathy",
"d": "Within <span class=t>128</span>m, you see the Auras of injured Survivors.",
"i": "icons/IconPerks_empathy.png"
},
{
"n": "Extrasensory Perception",
"d": "After crouching for <span class=t>4</span>s:<ul><li>You see Auras in an expanding radius up to <span class=t>44</span>m.</li><li>You gain <span class=k>Elusive</span>.</li><li>You gain <span class=k>Oblivious</span>.</li></ul><br><br>When you stop crouching, or after <span class=t>11</span>s, cooldown: <span class=t>40</span>s.",
"i": "icons/IconsPerks_ExtrasensoryPerception.png"
},
{
"n": "Exultation",
"d": "Whenever you Pallet-stun the Killer:<ul><li>Your item rarity is upgraded to the next tier, if possible.</li><li>If the item was upgraded, it recharges <span class=t>75</span>% Charges.</li></ul><br><br>Cooldown: <span class=t>20</span>s.",
"i": "icons/IconPerks_Exultation.png"
},
{
"n": "Eyes of Belmont",
"d": "Whenever a Generator is completed, you see the Killer's Aura for <span class=t>3</span>s.<br><br>Whenever you see the Killer's Aura for a duration, it is <span class=t>2</span>s longer.",
"i": "icons/IconPerks_EyesOfBelmont.png"
},
{
"n": "Fast Track",
"d": "Whenever you unhook another Survivor, you earn <span class=t>1</span> Token, up to <span class=t>3</span>.<br><br>While repairing, whenever you hit a great basic Skill Check, spend all Tokens. For each Token spent, the Generator gains <span class=t>5</span>% permanent progress.",
"i": "icons/IconPerks_fastTrack.png"
},
{
"n": "Finesse",
"d": "While healthy, you fast-vault <span class=t>20</span>% faster.<br><br>Whenever you fast-vault, cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_finesse.png"
},
{
"n": "Five Moves Ahead",
"d": "While you are in the Killer's Terror Radius or chased by the Killer:<ul><li>You see the Auras of the <span class=t>5</span> closest Pallets.</li><li>After you drop a Pallet, you start moving <span class=t>50</span>% earlier.</li><li>Whenever you drop a Pallet, cooldown: <span class=t>30</span>s.</li></ul>",
"i": "icons/IconsPerks_FiveMovesAhead.png"
},
{
"n": "Fixated",
"d": "While walking, you gain <span class=t>20</span>% <span class=k>Haste</span>.<br><br>You see your own Scratch Marks.",
"i": "icons/IconPerks_fixated.png"
},
{
"n": "Flashbang",
"d": "After repairing <span class=t>40</span>% of Generators, while hiding in a Locker, use the <b>Active Ability 1 button</b> to craft a Flashbang.<br><br>When you use the Flashbang:<ul><li>Everyone nearby looking at the detonation is blinded.</li><li>The Killer is alerted.</li></ul>",
"i": "icons/IconPerks_flashbang.png"
},
{
"n": "Flip-Flop",
"d": "While downed, whenever the Killer picks you up, <span class=t>50</span>% of your recovery progress is added to your wiggle progress, up to <span class=t>50</span>%.",
"i": "icons/IconPerks_flip-Flop.png"
},
{
"n": "Flow State",
"d": "Whenever a Generator is completed, earn <span class=t>1</span> Token, up to <span class=t>5</span>.<br><br>For each Token:<ul><li>You bless and cleanse Totems <span class=t>15</span>% faster.</li><li>You heal <span class=t>15</span>% faster.</li><li>You unhook Survivors <span class=t>15</span>% faster.</li></ul>",
"i": "icons/IconsPerks_FlowState.png"
},
{
"n": "Fogwise",
"d": "While repairing, whenever you hit a great basic Skill Check, you see the Killer's Aura for <span class=t>6</span>s.",
"i": "icons/IconPerks_fogwise.png"
},
{
"n": "For the People",
"d": "While healthy and healing another Survivor without a Med-Kit, use the <b>Active Ability 1 button</b> to heal them instantly:<ul><li>You take damage.</li><li>You gain <span class=k>Broken</span> for <span class=t>60</span>s.</li><li>You become the Obsession.</li></ul><br><br>When the trial starts, you are less likely to be the Obsession.",
"i": "icons/IconPerks_forThePeople.png"
},
{
"n": "Friendly Competition",
"d": "Whenever you finish repairing a Generator with at least 1 other Survivor, Survivors who finished repairing it repair <span class=t>10</span>% faster for <span class=t>90</span>s.",
"i": "icons/IconPerks_friendlyCompetition.png"
},
{
"n": "Fruits of Your Labor",
"d": "Whenever a Generator is completed, you earn <span class=t>1</span> Token.<br><br>Whenever you finish repairing a Generator, for each Token:<ul><li>You gain <span class=t>5</span>% <span class=k>Haste</span> for <span class=t>2</span>s.</li><li>You gain <span class=t>20</span>% healing progress.</li></ul>",
"i": "icons/T_UI_iconsPerks_FruitsOfYourLabor.png"
},
{
"n": "Ghost Notes",
"d": "While you have <span class=k>Exhausted</span>, your Scratch Marks disappear <span class=t>50</span>% faster.<br><br>You lose <span class=k>Exhausted</span> <span class=t>10</span>% faster.",
"i": "icons/IconPerks_GhostNotes.png"
},
{
"n": "Hardened",
"d": "When you have blessed or cleansed a Totem and unlocked a Chest, whenever you would scream, you see the Killer's Aura for <span class=t>5</span>s instead.",
"i": "icons/IconPerks_hardened.png"
},
{
"n": "Head On",
"d": "After hiding in a Locker for <span class=t>3</span>s, fast-exit to stun the Killer for <span class=t>3</span>s if they are within <span class=t>2.5</span>m, then gain <span class=k>Exhausted</span> for <span class=t>40</span>s.",
"i": "icons/IconPerks_headOn.png"
},
{
"n": "Hope",
"d": "When all Generators are completed, you gain <span class=t>5</span>% <span class=k>Haste</span>.",
"i": "icons/IconPerks_hope.png"
},
{
"n": "Hyperfocus",
"d": "Whenever you hit a great basic Skill Check, you earn <span class=t>1</span> Token, up to <span class=t>6</span>.<br><br>For each Token, basic Skill Checks:<ul><li>Appear <span class=t>4</span>% more often.</li><li>Spin <span class=t>4</span>% faster.</li><li>Whenever you hit a great, give <span class=t>30</span>% more progress.</li></ul><br><br>Whenever you miss a basic Skill Check, hit a good Skill Check, or stop healing or repairing, lose all Tokens.",
"i": "icons/IconPerks_hyperfocus.png"
},
{
"n": "Inner Focus",
"d": "Whenever the Killer damages another Survivor, you see the Killer's Aura for <span class=t>10</span>s.<br><br>You see other Survivors' Scratch Marks.",
"i": "icons/IconPerks_innerFocus.png"
},
{
"n": "Inner Strength",
"d": "Whenever you cleanse a Totem, while injured and not <span class=k>Broken</span>, after hiding in a Locker for <span class=t>8</span>s, you become healthy instantly.",
"i": "icons/IconPerks_innerStrength.png"
},
{
"n": "Invocation: Treacherous Crows",
"d": "While in the Basement next to the circle, use the <b>Active Ability 2 button</b> to invoke. While invoking, other Survivors see your Aura and can join your Invocation.<br><br>When the Invocation is completed:<ul><li>Whenever the Killer scares a Crow while a Survivor is in their Terror Radius, all Survivors see the Killer's Aura for <span class=t>2</span>s.</li><li>You become injured.</li><li>You gain <span class=k>Broken</span>.</li></ul><br><br>Each Invocation can only be completed once per trial.",
"i": "icons/IconPerks_invocationTreacherousCrows.png"
},
{
"n": "Invocation: Weaving Spiders",
"d": "While in the Basement next to the circle, use the <b>Active Ability 1 button</b> to invoke. While invoking, other Survivors see your Aura and can join your Invocation.<br><br>When the Invocation is completed:<ul><li>All Generators gain <span class=t>10</span> permanent charges.</li><li>You become injured.</li><li>You gain <span class=k>Broken</span>.</li></ul><br><br>Each Invocation can only be completed once per trial.",
"i": "icons/IconPerks_invocationWeavingSpiders.png"
},
{
"n": "Iron Will",
"d": "While injured and not <span class=k>Exhausted</span>, your Grunts of Pain are <span class=t>100</span>% quieter.",
"i": "icons/IconPerks_ironWill.png"
},
{
"n": "Kindred",
"d": "While you are hooked, all Survivors see each others' Auras. While the Killer is within <span class=t>16</span>m, all Survivors sees the Killer's Aura.<br><br>While another Survivor is hooked, you see the Auras of other Survivors. While the Killer is within <span class=t>16</span>m of the hooked Survivor, you see the Killer's Aura.",
"i": "icons/IconPerks_kindred.png"
},
{
"n": "Last Stand",
"d": "After hiding for <span class=t>90</span>s within the Killer's Terror Radius, when you fast-vault, once per trial, stun the Killer for <span class=t>3</span>s if they are within <span class=t>2.5</span>m.",
"i": "icons/IconPerks_lastStand.png"
},
{
"n": "Leader",
"d": "Within <span class=t>10</span>m of you, other Survivors:<ul><li>Cleanse Totems <span class=t>30</span>% faster.</li><li>Heal <span class=t>30</span>% faster.</li><li>Open Exit Gates <span class=t>30</span>% faster.</li><li>Sabotage Hooks <span class=t>30</span>% faster.</li><li>Unhook Survivors <span class=t>30</span>% faster.</li><li>Unlock Chests <span class=t>30</span>% faster.</li></ul><br><br>After they leave your range, this ends after <span class=t>20</span>s.",
"i": "icons/IconPerks_leader.png"
},
{
"n": "Left Behind",
"d": "When all other Survivors are dead, while within <span class=t>32</span>m of the Hatch, you see its Aura.",
"i": "icons/IconPerks_leftBehind.png"
},
{
"n": "Lend a Hand",
"d": "Whenever you bless or cleanse <span class=t>1</span> Totem, while healing another Survivor and only once per Survivor, use the <b>Active Ability 2 button</b> to give them <span class=t>4</span> permanent healing charges.",
"i": "icons/T_UI_iconsPerks_LendaHand.png"
},
{
"n": "Light-footed",
"d": "While healthy and running, your footsteps are silent to the Killer.<br><br>Whenever you do a fast-action, cooldown: <span class=t>10</span>s.",
"i": "icons/IconPerks_light-Footed.png"
},
{
"n": "Lightweight",
"d": "Your Scratch Marks disappear <span class=t>5</span>s faster and appear more spread out.",
"i": "icons/IconPerks_lightweight.png"
},
{
"n": "Lithe",
"d": "Whenever you medium or fast-vault:<ul><li>You gain <span class=t>50</span>% <span class=k>Haste</span> for <span class=t>3</span>s.</li><li>You gain <span class=k>Exhausted</span> for <span class=t>40</span>s.</li></ul>",
"i": "icons/IconPerks_lithe.png"
},
{
"n": "Low Profile",
"d": "When all other Survivors are downed or hooked, for <span class=t>90</span>s:<ul><li>You make no Grunts of Pain.</li><li>You leave no Pools of Blood.</li><li>You leave no Scratch Marks.</li></ul>",
"i": "icons/IconPerks_lowProfile.png"
},
{
"n": "Lucky Break",
"d": "While injured, for up to <span class=t>60</span>s:<ul><li>You leave no Pools of Blood.</li><li>You leave no Scratch Marks.</li></ul><br><br>For each second spent healing another Survivor, recharge the duration by <span class=t>1</span>s.",
"i": "icons/IconPerks_luckyBreak.png"
},
{
"n": "Lucky Star",
"d": "While hiding in a Locker, you make no Grunts of Pain.<br><br>Whenever you exit a Locker, for <span class=t>30</span>s:<ul><li>You see the Aura of the closest Generator.</li><li>You see the Auras of other Survivors.</li><li>You make no Grunts of Pain.</li><li>You leave no Pools of Blood.</li></ul><br><br>Cooldown: <span class=t>25</span>s.",
"i": "icons/IconPerks_luckyStar.png"
},
{
"n": "Made for This",
"d": "While injured, whenever you finish healing another Survivor, you gain <span class=k>Endurance</span> for <span class=t>10</span>s.<br><br>While you are running and have <span class=k>Deep Wound</span>, you gain <span class=t>3</span>% <span class=k>Haste</span>.",
"i": "icons/IconPerks_madeForThis.png"
},
{
"n": "Mettle of Man",
"d": "After taking <span class=t>3</span> protection hits, while injured and until you go down, the next time you would be downed by the Killer, take no damage instead.<br><br>When you become healthy, while you are at least <span class=t>16</span>m from the Killer, they see your Aura.<br><br>When the trial starts, you are more likely to be the Obsession.",
"i": "icons/IconPerks_mettleOfMan.png"
},
{
"n": "Mirrored Illusion",
"d": "After repairing <span class=t>20</span>% of Generators, while next to a Chest, Exit Gate Switch, Generator, or Totem, use the <b>Active Ability 2 button</b> to create a static illusion for <span class=t>60</span>s.",
"i": "icons/IconPerks_mirroredIllusion.png"
},
{
"n": "Moment of Glory",
"d": "After you rummage or unlock <span class=t>1</span> Chest, while not <span class=k>Broken</span>, when you become injured, gain <span class=k>Broken</span>.<br><br>After <span class=t>60</span>s, if you are not downed, you are instantly healed.",
"i": "icons/IconPerks_MomentOfGlory.png"
},
{
"n": "No Mither",
"d": "When the trial starts, you become injured, then:<ul><li>You gain <span class=k>Broken</span>.</li><li>Your Grunts of Pain are <span class=t>100</span>% quieter.</li><li>You leave no Pools of Blood.</li><li>You recover <span class=t>25</span>% faster.</li><li>You can fully recover.</li></ul>",
"i": "icons/IconPerks_noMither.png"
},
{
"n": "No One Left Behind",
"d": "When all Generators are completed:<ul><li>You heal other Survivors <span class=t>100</span>% faster.</li><li>You unhook other Survivors <span class=t>100</span>% faster.</li><li>Whenever you unhook a Survivor, they gain <span class=t>10</span>% more <span class=k>Haste</span>.</li><li>You see the Auras of other Survivors.</li></ul>",
"i": "icons/IconPerks_noOneLeftBehind.png"
},
{
"n": "Object of Obsession",
"d": "While you are the Obsession, every <span class=t>30</span>s, the Killer sees your Aura for <span class=t>4</span>s.<br><br>While the Killer sees your Aura:<ul><li>You see their Aura.</li><li>You bless and cleanse Totems <span class=t>10</span>% faster.</li><li>You heal <span class=t>10</span>% faster.</li><li>You repair <span class=t>10</span>% faster.</li></ul><br><br>When the trial starts, you are more likely to be the Obsession.",
"i": "icons/IconPerks_objectOfObsession.png"
},
{
"n": "Off the Record",
"d": "Until all Generators are completed, whenever you are unhooked, for the next <span class=t>40</span>s:<ul><li>You gain <span class=k>Endurance</span>.</li><li>Your Grunts of Pain are <span class=t>100</span>% quieter.</li><li>The Killer cannot see your Aura.</li></ul>",
"i": "icons/IconPerks_offTheRecord.png"
},
{
"n": "ONE-TWO-THREE-FOUR!",
"d": "While idle, use the <b>Active Ability 2 button</b> to perform, empowering all Survivors within <span class=t>16</span>m for up to <span class=t>15</span>s. While you are performing, other Survivors will see your Aura. You get special Skill Checks during that time: while healing or repairing, basic Skill Checks are <span class=t>20</span>% more likely to appear.<br><br>If you complete the performance, the effect ends after <span class=t>90</span>s. Cooldown: <span class=t>90</span>s.",
"i": "icons/IconPerks_OneTwoThreeFour.png"
},
{
"n": "Open-Handed",
"d": "All Survivors see Auras that have a range from <span class=t>16</span>m farther.",
"i": "icons/IconPerks_open-Handed.png"
},
{
"n": "Overcome",
"d": "Whenever you take damage:<ul><li>You retain your speed boost for <span class=t>2</span>s longer.</li><li>You gain <span class=k>Exhausted</span> for <span class=t>40</span>s.</li></ul>",
"i": "icons/IconPerks_overcome.png"
},
{
"n": "Overzealous",
"d": "Whenever you bless or cleanse a Totem, until you take damage, you repair <span class=t>10</span>% faster. If that Totem was a Hex Totem, the effect is doubled.",
"i": "icons/IconPerks_overzealous.png"
},
{
"n": "Parental Guidance",
"d": "Whenever you stun the Killer, for <span class=t>7</span>s:<ul><li>You make no Grunts of Pain.</li><li>You leave no Pools of Blood.</li><li>You leave no Scratch Marks.</li></ul>",
"i": "icons/IconPerks_parentalGuidance.png"
},
{
"n": "Pharmacy",
"d": "Whenever you unlock a Chest, it will contain a rare Med-Kit.<br><br>You unlock and rummage Chests <span class=t>125</span>% faster.<br><br>You can rummage each Chest 1 time.<br><br><br>The range at which the Killer hears you unlocking Chests is <span class=t>12</span>m shorter.",
"i": "icons/IconPerks_pharmacy.png"
},
{
"n": "Plot Twist",
"d": "While injured, crouched and idle, use the <b>Active Ability 2 button</b> to be downed silently.<br><br>While downed this way, once per trial:<ul><li>You make no Grunts of Pain.</li><li>You leave no Pools of Blood.</li><li>You recover <span class=t>25</span>% faster.</li><li>You can fully recover.</li></ul><br><br>Whenever you recover this way:<ul><li>You gain <span class=t>50</span>% <span class=k>Haste</span> for <span class=t>4</span>s.</li><li>You are healed instantly.</li></ul><br><br>When all Generators are completed, you can use this ability once again.",
"i": "icons/IconPerks_plotTwist.png"
},
{
"n": "Plunderer's Instinct",
"d": "You see the Aura of Chests and items.<br><br><br>You unlock Chests <span class=t>200</span>% faster.<br><br>Whenever you unlock a Chest you are <span class=t>50</span>% more likely to find an Item of higher rarity.",
"i": "icons/IconPerks_plunderersInstinct.png"
},
{
"n": "Poised",
"d": "The first time you start repairing each Generator, you see the Killer's Aura for <span class=t>8</span>s.<br><br><br>Whenever a Generator is completed, you leave no Scratch Marks for <span class=t>30</span>s.",
"i": "icons/IconPerks_poised.png"
},
{
"n": "Potential Energy",
"d": "While repairing, use the <b>Active Ability 2 button</b> to earn Tokens instead of progress, up to <span class=t>20</span> Tokens.<br><br>While you have at least <span class=t>1</span> Token, the <b>Active Ability 2 button</b> to spend all Tokens and gain <span class=t>1</span>% progress for each Token spent.<br><br>Whenever you take damage, lose all Tokens.",
"i": "icons/IconPerks_potentialEnergy.png"
},
{
"n": "Power Struggle",
"d": "While carried by the Killer, while you have at least <span class=t>15</span>% wiggle and next to an Upright Pallet, you can drop it to stun the Killer.<br><br>While downed, you see the Auras of Upright Pallets.",
"i": "icons/IconPerks_powerStruggle.png"
},
{
"n": "Premonition",
"d": "While not chased by the Killer, whenever you look in the Killer’s direction within <span class=t>32</span>m:<ul><li>You are notified.</li><li>You see the Killer's Aura for <span class=t>3</span>s.</li></ul><br><br><br>Cooldown: <span class=t>45</span>s.",
"i": "icons/IconPerks_premonition.png"
},
{
"n": "Prove Thyself",
"d": "For each other Survivor within <span class=t>4</span>m of you, all Survivors repair <span class=t>10</span>% faster.",
"i": "icons/IconPerks_proveThyself.png"
},
{
"n": "Quick & Quiet",
"d": "You hide in Lockers and vault silently. The Killer is not alerted. Cooldown: <span class=t>15</span>s.",
"i": "icons/IconPerks_quickAndQuiet.png"
},
{
"n": "Quick Gambit",
"d": "While chased by the Killer:<ul><li>You see the Auras of other Survivors.</li><li>Other Survivors repair <span class=t>5</span>% faster.</li></ul><br><br>Whenever you take damage, cooldown: <span class=t>40</span>s.",
"i": "icons/IconPerks_quickGambit.png"
},
{
"n": "Rapid Response",
"d": "Whenever you fast-exit a Locker, you gain <span class=k>Exhausted</span> for <span class=t>20</span>s.<br><br>Whenever you gain <span class=k>Exhausted</span>, you see the Killer's Aura for <span class=t>2</span>s.",
"i": "icons/T_UI_iconsPerks_RapidResponse.png"
},
{
"n": "Reactive Healing",
"d": "While injured, whenever another Survivor within <span class=t>32</span>m of you takes damage, you gain <span class=t>50</span>% missing healing progress.",
"i": "icons/IconPerks_reactiveHealing.png"
},
{
"n": "Reassurance",
"d": "Once per Hook State, while within <span class=t>6</span>m of a hooked Survivor, use the <b>Active Ability 2 button</b> to stop the sacrifice progress for <span class=t>30</span>s.",
"i": "icons/IconPerks_reassurance.png"
},
{
"n": "Red Herring",
"d": "After you repair a Generator for at least <span class=t>1</span>s, you see its Aura.<br><br>When you hide in a Locker, the Killer is alerted to the Generator. Cooldown: <span class=t>15</span>s.",
"i": "icons/IconPerks_redHerring.png"
},
{
"n": "Repressed Alliance ",
"d": "After repairing Generators for <span class=t>30</span>s, while repairing a Generator alone, use the <b>Active Ability 1 button</b> to block that generator for <span class=t>15</span>s.",
"i": "icons/IconPerks_repressedAlliance.png"
},
{
"n": "Residual Manifest",
"d": "Whenever you blind the Killer, they gain <span class=k>Blindness</span> for <span class=t>30</span>s.<br><br>You can rummage Chests <span class=t>1</span> time. The first time you rummage a Chest, it will contain an uncommon Flashlight.",
"i": "icons/IconPerks_residualManifest.png"
},
{
"n": "Resilience",
"d": "While injured:<ul><li>You bless and cleanse Totems <span class=t>9</span>% faster.</li><li>You heal <span class=t>9</span>% faster.</li><li>You open Exit Gates <span class=t>9</span>% faster.</li><li>You repair <span class=t>9</span>% faster.</li><li>You sabotage Hooks <span class=t>9</span>% faster.</li><li>You unhook Survivors <span class=t>9</span>% faster.</li><li>You unlock chests <span class=t>9</span>% faster.</li><li>You vault <span class=t>9</span>% faster.</li></ul>",
"i": "icons/IconPerks_resilience.png"
},
{
"n": "Resurgence",
"d": "Whenever you are unhooked, you gain <span class=t>70</span>% healing progress.",
"i": "icons/IconPerks_resurgence.png"
},
{
"n": "Road Life",
"d": "While injured and repairing a Generator:<li>Whenever you hit a great basic Skill Check, you earn <span class=t>1</span> Token.</li><li>Whenever you miss a basic Skill Check, you lose <span class=t>1</span> token.</li><br><br>When you have <span class=t>4</span> Tokens, you can heal yourself. Spend all Tokens to heal yourself <span class=t>10</span>% faster. When you stop healing, this ends after <span class=t>4</span>s.",
"i": "icons/IconPerks_RoadLife.png"
},
{
"n": "Rookie Spirit",
"d": "After you hit <span class=t>3</span> basic repair Skill Checks, while a Generator is regressing, you see its Aura.",
"i": "icons/IconPerks_rookieSpirit.png"
},
{
"n": "Saboteur",
"d": "Within <span class=t>56</span>m of where another Survivor was picked-up by the Killer and is being carried, you see the Auras of Hooks and Scourge Hooks.<br><br>You can sabotage Hooks. Cooldown: <span class=t>60</span>s.",
"i": "icons/IconPerks_saboteur.png"
},
{
"n": "Salvation's Cry",
"d": "Whenever the Killer starts chasing you:<ul><li>You see the Auras of other Survivors for <span class=t>3</span>s.</li><li>Survivors not being chased see your Aura for <span class=t>5</span>s.</li><li>Survivors not being chased see the Killer's Aura for <span class=t>5</span>s.</li></ul>",
"i": "icons/T_UI_iconsPerks_SalvationsCry.png"
},
{
"n": "Scavenger",
"d": "While repairing and while your Toolbox is empty, whenever you hit a great basic Skill Check, you earn <span class=t>1</span> Token.<br><br>When you have <span class=t>5</span> Tokens, spend them all:<ul><li>Your Toolbox is recharged instantly.</li><li>You repair <span class=t>50</span>% slower for <span class=t>30</span>s.</li></ul><br><br>You can rummage Chests <span class=t>1</span> time. The first time you rummage a Chest, it will contain an uncommon Toolbox.",
"i": "icons/IconPerks_scavenger.png"
},
{
"n": "Scene Partner",
"d": "While you are within the Killer's Terror Radius, whenever you look at them:<ul><li>Scream, then see the Killer's Aura for <span class=t>6</span>s.</li><li>There is a <span class=t>50</span>% chance you will scream again. If you do, you see the Killer's Aura for <span class=t>2</span>s more.</li></ul><br><br>Cooldown: <span class=t>40</span>s.",
"i": "icons/IconPerks_scenePartner.png"
},
{
"n": "Second Wind",
"d": "After you heal <span class=t>1</span> Survivor, while not <span class=k>Broken</span>, when you are unhooked, you gain <span class=k>Broken</span>.<br><br>After <span class=t>20</span>s, if you are not downed, you are instantly healed.",
"i": "icons/IconPerks_secondWind.png"
},
{
"n": "Self-Care",
"d": "You can heal yourself, but <span class=t>65</span>% slower.",
"i": "icons/IconPerks_self-Care.png"
},
{
"n": "Self-Preservation",
"d": "Whenever another Survivor is hooked, you gain <span class=k>Elusive</span> for <span class=t>15</span>s.",
"i": "icons/IconPerks_self-Preservation.png"
},
{
"n": "Shoulder the Burden",
"d": "Once per trial, if you have less than <span class=t>2</span> Hook States while you are next to a hooked Survivor, use the <b>Active Ability 2 button</b> to unhook them:<ul><li>They lose 1 Hook State.</li><li>You gain 1 Hook State.</li><li>You scream.</li><li>You become Injured.</li><li>You gain <span class=k>Broken</span> for <span class=t>120</span>s.</li></ul>",
"i": "icons/IconPerks_shoulderTheBurden.png"
},
{
"n": "Slippery Meat",
"d": "Other Survivors unhook you <span class=t>100</span>% faster.<br><br><br>Whenever you are unhooked, you gain <span class=t>5</span>% more Haste.",
"i": "icons/IconPerks_slipperyMeat.png"
},
{
"n": "Small Game",
"d": "Within <span class=t>12</span>m of a Totem, you see its Aura.",
"i": "icons/IconPerks_smallGame.png"
},
{
"n": "Smash Hit",
"d": "Whenever you Pallet-stun the Killer:<ul><li>You gain <span class=t>50</span>% <span class=k>Haste</span> for <span class=t>4</span>s.</li><li>You gain <span class=k>Exhausted</span> for <span class=t>20</span>s.</li></ul>",
"i": "icons/IconPerks_smashHit.png"
},
{
"n": "Sole Survivor",
"d": "Whenever you are hooked or complete a Generator, you earn <span class=t>1</span> Token, up to <span class=t>6</span>.<br><br>For each Token, other Survivors open Exit Gates <span class=t>10</span>% faster.<br><br>When you are the last Survivor, if you have at least <span class=t>3</span> Tokens:<ul><li>You can unlock the Hatch.</li><li>For each Token, the Killer cannot see your Aura for <span class=t>10</span>s.</li></ul>",
"i": "icons/IconPerks_soleSurvivor.png"
},
{
"n": "Solidarity",
"d": "While injured and healing another Survivor, you also gain healing progress at <span class=t>75</span>% speed.",
"i": "icons/IconPerks_solidarity.png"
},
{
"n": "Soul Guard",
"d": "While hexed, you can fully recover.<br><br>Whenever you fully recover, you gain <span class=k>Endurance</span> for <span class=t>8</span>s. Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_soulGuard.png"
},
{
"n": "Specialist",
"d": "Whenever you rummage or unlock a Chest, you earn <span class=t>1</span> Token, up to <span class=t>6</span>.<br><br>While repairing a Generator, whenever you hit a great basic Skill Check, spend all Tokens. For each Token spent, the Generator gains <span class=t>4</span>% permanent progress.",
"i": "icons/IconPerks_specialist.png"
},
{
"n": "Spine Chill",
"d": "Whenever the Killer looks at you within <span class=t>40</span>m:<ul><li>You are notified.</li><li>You cannot scream for <span class=t>12</span>s.</li><li>You vault <span class=t>10</span>% faster for <span class=t>12</span>s.</li></ul><br><br>Cooldown: <span class=t>30</span>s",
"i": "icons/IconPerks_spineChill.png"
},
{
"n": "Sprint Burst",
"d": "Whenever you start running:<ul><li>You gain <span class=t>50</span>% <span class=k>Haste</span> for <span class=t>2</span>s.</li><li>You gain <span class=k>Exhausted</span> for <span class=t>40</span>s.</li></ul>",
"i": "icons/IconPerks_sprintBurst.png"
},
{
"n": "Stake Out",
"d": "After hiding for <span class=t>15</span>s within <span class=t>24</span>m of the Killer, while in their Terror Radius, you earn <span class=t>1</span> Token, up to <span class=t>4</span>.<br><br>While you have at least <span class=t>1</span> Token, basic Skill Checks are replaced by special Skill Checks. Special Skill Checks grant +<span class=t>4</span>% more progress.<br><br><br>Whenever you hit or miss a special Skill Check, spend <span class=t>1</span> Token.",
"i": "icons/IconPerks_stakeOut.png"
},
{
"n": "Still Sight",
"d": "After being idle for <span class=t>2</span>s, within <span class=t>24</span>m, until you start moving:<ul><li>You see the Killer's Aura.</li><li>You see the Auras of Chests.</li><li>You see the Auras of Generators.</li></ul>",
"i": "icons/IconPerks_stillSight.png"
},
{
"n": "Streetwise",
"d": "The first time you deplete an item's Charges, you see the Killer's Aura for <span class=t>8</span>s.<br><br>Whenever you loot an item from a Chest, it has <span class=t>80</span>% more Charges.",
"i": "icons/IconPerks_streetwise.png"
},
{
"n": "Strength in Shadows",
"d": "While in the Basement:<ul><li>You can heal yourself, but <span class=t>30</span>% slower.</li><li>Whenever you finish healing, you see the Killer's Aura for <span class=t>10</span>s.</li></ul>",
"i": "icons/IconPerks_strengthInShadows.png"
},
{
"n": "Teamwork: Collective Stealth",
"d": "Whenever another Survivor finishes healing you, while within <span class=t>16</span>m of each other, you both leave no Scratch Marks. When either of you leaves the range, this ends after <span class=t>4</span>s.",
"i": "icons/IconPerks_teamworkCollectiveStealth.png"
},
{
"n": "Teamwork: Full Circuit",
"d": "For each other Survivor repairing a Generator with you, good basic Skill Check zones are <span class=t>25</span>% bigger.<br><br>While repairing with at least 1 other Survivor, you repair <span class=t>5</span>% faster.",
"i": "icons/IconsPerks_TeamworkFullCircuit.png"
},
{
"n": "Teamwork: Power of Two",
"d": "Whenever you finish healing another Survivor, while you stay within <span class=t>16</span>m of each other, you both gain <span class=t>5</span>% <span class=k>Haste</span>. When either of you leaves the range, this ends after <span class=t>4</span>s.",
"i": "icons/IconPerks_teamworkPowerOfTwo.png"
},
{
"n": "Teamwork: Soft-Spoken",
"d": "For each other Survivor repairing a Generator with you, the range of Generator repair noises is <span class=t>25</span>% smaller.<br><br>While repairing with at least 1 other Survivor, you repair <span class=t>5</span>% faster.",
"i": "icons/IconsPerks_TeamworkSoftSpoken.png"
},
{
"n": "Teamwork: Throw Down",
"d": "Whenever you blind or Pallet-stun the Killer, for <span class=t>10</span>s, other injured Survivors within <span class=t>24</span>m:<ul><li>Gain <span class=k>Endurance</span>.</li><li>See the Killer's Aura.</li></ul>",
"i": "icons/IconPerks_teamworkThrowDown.png"
},
{
"n": "Teamwork: Toughen Up",
"d": "While injured, whenever another Survivor within <span class=t>24</span>m of you blinds or Pallet-stuns the Killer, for <span class=t>30</span>s:<ul><li>You make no Grunts of Pain.</li><li>You leave no Pools of Blood.</li><li>You leave no Scratch Marks.</li></ul>",
"i": "icons/IconPerks_teamworkToughenUp.png"
},
{
"n": "Technician",
"d": "While repairing a Generator:<ul><li>The range of Generator repair noises is <span class=t>16</span>m shorter.</li><li>Whenever you miss a basic Skill Check, the Generator does not explode, but loses <span class=t>2</span>% more progress.</li></ul>",
"i": "icons/IconPerks_technician.png"
},
{
"n": "Tenacity",
"d": "While downed:<ul><li>You gain <span class=t>50</span>% <span class=k>Haste</span>.</li><li>You can crawl and recover at the same time.</li><li>Your Grunts of Pain are <span class=t>75</span>% quieter.</li><li>The Killer cannot see your Aura.</li></ul>",
"i": "icons/IconPerks_tenacity.png"
},
{
"n": "This Is Not Happening",
"d": "Good basic Skill Check zones are <span class=t>200</span>% bigger.",
"i": "icons/IconPerks_thisIsNotHappening.png"
},
{
"n": "Troubleshooter",
"d": "While chased by the Killer:<ul><li>You see the Aura of the Generator with the most progress.</li><li>Whenever you drop a Pallet, you see the Killer's Aura for <span class=t>6</span>s.</li></ul><br><br>When the Killer stops chasing you, this ends after <span class=t>10</span>s.",
"i": "icons/IconPerks_troubleshooter.png"
},
{
"n": "Unbreakable",
"d": "Once per trial, while downed by the Killer, you can fully recover.<br><br>While downed, you recover <span class=t>35</span>% faster.",
"i": "icons/IconPerks_unbreakable.png"
},
{
"n": "Up the Ante",
"d": "For each other Survivor alive, all Survivors are <span class=t>3</span>% luckier.<br><br>All Survivors can attempt to unhook themselves.",
"i": "icons/IconPerks_upTheAnte.png"
},
{
"n": "Urban Evasion",
"d": "While crouched, you gain <span class=t>100</span>% <span class=k>Haste</span>.",
"i": "icons/IconPerks_urbanEvasion.png"
},
{
"n": "Vigil",
"d": "All Survivors within <span class=t>16</span>m of you lose <span class=k>Exhausted</span> <span class=t>30</span>% faster.<br><br>This effect ends <span class=t>15</span>s after they leave your range.",
"i": "icons/IconPerks_vigil.png"
},
{
"n": "Visionary",
"d": "Within <span class=t>32</span>m of you, you see the Auras of Generators.<br><br>Whenever a Generator is completed, cooldown: <span class=t>16</span>s.",
"i": "icons/IconPerks_visionary.png"
},
{
"n": "Wake Up!",
"d": "When all Generators are completed:<ul><li>You see the Auras of Exit Gate Switches.</li><li>While opening an Exit Gate, other Survivors see your Aura.</li><li>You open Exit Gates <span class=t>10</span>% faster, and an additional <span class=t>20</span>% faster for each other Survivor alive.</li></ul>",
"i": "icons/IconPerks_wakeUp.png"
},
{
"n": "We See You",
"d": "Whenever the Killer sees your Aura, you earn <span class=t>1</span> Token. Cooldown: <span class=t>10</span>s.<br><br>When you have <span class=t>4</span> Tokens, spend them all. Then, all Survivors see the Killer's Aura for <span class=t>15</span>s.",
"i": "icons/IconsPerks_WeSeeYou.png"
},
{
"n": "We'll make it",
"d": "Whenever you unhook a Survivor, for <span class=t>90</span>s, you heal other Survivors <span class=t>100</span>% faster.",
"i": "icons/IconPerks_wellMakeIt.png"
},
{
"n": "We're Gonna Live Forever",
"d": "You heal downed Survivors <span class=t>100</span>% faster.<br><br>Whenever you finish healing a downed Survivor, they gain <span class=k>Endurance</span> for <span class=t>10</span>s. Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_wereGonnaLiveForever.png"
},
{
"n": "Wicked",
"d": "While in the Basement, you can unhook yourself.<br><br>Whenever you are unhooked, you see the Killer's Aura for <span class=t>20</span>s.",
"i": "icons/IconPerks_wicked.png"
},
{
"n": "Wide Open Throttle",
"d": "Whenever you fast-vault a Pallet:<ul><li>You gain <span class=t>15</span>% <span class=k>Haste</span> for <span class=t>3</span>s.</li><li>The Pallet is reset, blocked for <span class=t>60</span>s, and all Survivors see its Aura for that time.</li></ul><br><br>Cooldown: <span class=t>60</span>s.",
"i": "icons/T_UI_iconsPerks_WideOpenThrottle.png"
},
{
"n": "Windows of Opportunity",
"d": "Within <span class=t>24</span>m of you see the Auras of Windows.<br><br>You vault Windows <span class=t>10</span>% faster.<br><br>Whenever you vault a Window, cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_windowsOfOpportunity.png"
},
{
"n": "Wiretap",
"d": "After repairing <span class=t>40</span>% of Generators, while next to a Generator, use the <b>Active Ability 2 button</b> to trap it for <span class=t>120</span>s or until the Killer damages that Generator. All Survivors see that Generator's Aura for that time.<br><br>While the Killer is within <span class=t>14</span>m of that Generator, all Survivors see the Killer's Aura.",
"i": "icons/IconPerks_wiretap.png"
}
];
const KILL = [
{
"n": "A Nurse's Calling",
"d": "Within <span class=t>32</span>m of Survivors who are healing or being healed, you see their Auras.",
"i": "icons/IconPerks_aNursesCalling.png"
},
{
"n": "Agitation",
"d": "While carrying a Survivor:<ul><li>You gain <span class=t>18</span>% <span class=k>Haste</span>.</li><li>Your Terror Radius is <span class=t>12</span>m larger.</li></ul>",
"i": "icons/IconPerks_agitation.png"
},
{
"n": "Alien Instinct",
"d": "Whenever you hook a Survivor, the farthest injured Survivor:<ul><li>Gains <span class=k>Oblivious</span> for <span class=t>60</span>s.</li><li>You see their Aura for <span class=t>8</span>s.</li></ul>",
"i": "icons/IconPerks_alienInstinct.png"
},
{
"n": "All-Shaking Thunder",
"d": "Whenever you fall from at least <span class=t>1.25</span>m, your lunge-attacks are <span class=t>75</span>% longer for <span class=t>25</span>s. Cooldown: <span class=t>5</span>s.",
"i": "icons/IconPerks_allShakingThunder.png"
},
{
"n": "Awakened Awareness",
"d": "While carrying a Survivor, within <span class=t>20</span>m of you, you see the Auras of other Survivors.",
"i": "icons/IconPerks_awakenedAwareness.png"
},
{
"n": "Bamboozle",
"d": "Whenever you vault a Window, it is blocked for Survivors for <span class=t>16</span>s.<br><br>You basic-vault Windows <span class=t>15</span>% faster.<br><br>Only 1 Window can be blocked at a time.",
"i": "icons/IconPerks_bamboozle.png"
},
{
"n": "Barbecue & Chili",
"d": "Whenever you hook a Survivor, for <span class=t>5</span>s, you see the Auras of all Survivors who are at least <span class=t>40</span>m away from the hooked Survivor.",
"i": "icons/IconPerks_barbecueAndChilli.png"
},
{
"n": "Batteries Included",
"d": "Within <span class=t>16</span>m of a completed Generator, you gain <span class=t>5</span>% <span class=k>Haste</span>. When you leave the range, this ends after <span class=t>5</span>s.",
"i": "icons/IconPerks_batteriesIncluded.png"
},
{
"n": "Beast of Prey",
"d": "Whenever you gain Bloodlust, gain <span class=k>Undetectable</span> for <span class=t>40</span>s.",
"i": "icons/IconPerks_beastOfPrey.png"
},
{
"n": "Bitter Murmur",
"d": "Whenever a Generator is completed, you see the Auras of Survivors within <span class=t>20</span>m of it for <span class=t>10</span>s.<br><br>When all Generators are completed, you see the Auras of all Survivors for <span class=t>20</span>s.",
"i": "icons/IconPerks_bitterMurmur.png"
},
{
"n": "Blood Echo",
"d": "Whenever you hook a Survivor, for <span class=t>30</span>s, all injured Survivors:<ul><li>Gain <span class=k>Exhausted</span>.</li><li>Gain <span class=k>Hemorrhage</span>.</li></ul>",
"i": "icons/IconPerks_bloodEcho.png"
},
{
"n": "Blood Warden",
"d": "When an Exit Gate is opened, once per trial, when you hook a Survivor, both Exits are blocked for <span class=t>60</span>s.<br><br>You see the Auras of Survivors within Exit Thresholds.",
"i": "icons/IconPerks_bloodWarden.png"
},
{
"n": "Bloodhound",
"d": "Pools of Blood are brighter and last <span class=t>4</span>s longer.",
"i": "icons/IconPerks_bloodhound.png"
},
{
"n": "Brutal Strength",
"d": "You basic-break Pallets and Breakable Walls, and damage Generators <span class=t>20</span>% faster.",
"i": "icons/IconPerks_brutalStrength.png"
},
{
"n": "Call of Brine",
"d": "Whenever you damage a Generator, it regresses <span class=t>50</span>% faster for <span class=t>90</span>s.<br><br>For that time, whenever a Survivor hits a good basic Skill Check while repairing that Generator, you are alerted.",
"i": "icons/IconPerks_callOfBrine.png"
},
{
"n": "Celestial Witness",
"d": "Every <span class=t>30</span>s, if the Obsession is at least <span class=t>40</span>m away from you, you see their Aura for <span class=t>3</span>s. Otherwise, the farthest Survivor becomes the Obsession.",
"i": "icons/T_UI_iconsPerks_CelestialWitness.png"
},
{
"n": "Corrupt Intervention",
"d": "When the trial starts, the <span class=t>3</span> farthest Generators from you are blocked for <span class=t>120</span>s, or until you down a Survivor.",
"i": "icons/IconPerks_corruptIntervention.png"
},
{
"n": "Coulrophobia",
"d": "Survivors within your Terror Radius:<ul><li>Heal <span class=t>30</span>% slower.</li><li>While healing, basic Skill Checks spin <span class=t>50</span>% faster.</li></ul>",
"i": "icons/IconPerks_coulrophobia.png"
},
{
"n": "Coup de Grâce",
"d": "Whenever a Generator is completed, you earn <span class=t>2</span> Tokens, up to <span class=t>5</span>.<br><br>Whenever you lunge-attack, spend <span class=t>1</span> Token to make it <span class=t>80</span>% longer.",
"i": "icons/IconPerks_coupDeGrace.png"
},
{
"n": "Cruel Limits",
"d": "Whenever a Generator is completed:<ul><li>You see the Auras of all Windows for <span class=t>30</span>s.</li><li>All Windows are blocked for Survivors for <span class=t>30</span>s.</li></ul>",
"i": "icons/IconPerks_cruelLimits.png"
},
{
"n": "Dark Arrogance",
"d": "You basic-vault Windows <span class=t>25</span>% faster.<br><br>Your missed basic-attack cooldown is <span class=t>25</span>% shorter.<br><br>Whenever you are blinded or Pallet-stunned, the duration is <span class=t>25</span>% longer.",
"i": "icons/IconPerks_darkArrogance.png"
},
{
"n": "Dark Devotion",
"d": "Whenever the Obsession takes damage, for <span class=t>45</span>s:<ul><li>Your Terror Radius is set to <span class=t>40</span>m.</li><li>The Obsession has your Terror Radius.</li><li>You gain <span class=k>Undetectable</span>.</li></ul>",
"i": "icons/IconPerks_darkDevotion.png"
},
{
"n": "Darkness Revealed",
"d": "Whenever you search a Locker, you see the Auras of Survivors within <span class=t>8</span>m of Lockers for <span class=t>8</span>s. Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_darknessRevealed.png"
},
{
"n": "Dead Man’s Switch",
"d": "Whenever you hook a Survivor, the next time any Survivor stops repairing a Generator for more than <span class=t>2</span>s, it is blocked for <span class=t>40</span>s. Cooldown: <span class=t>40</span>s.",
"i": "icons/IconPerks_deadMansSwitch.png"
},
{
"n": "Deadlock",
"d": "Whenever a Generator is completed, the Generator with the most progress is blocked for <span class=t>25</span>s.",
"i": "icons/IconPerks_deadlock.png"
},
{
"n": "Deathbound",
"d": "Whenever a Survivor finishes healing another, the healer screams. Then, until the healer takes damage, while they are at least <span class=t>4</span>m away from the healed Survivor:<li>The healer gains <span class=k>Oblivious</span>.</li><li>The healer sees the healed Survivor's Aura.</li><br><br>This can only apply to one Survivor at a time.",
"i": "icons/IconPerks_deathbound.png"
},
{
"n": "Deerstalker",
"d": "Every <span class=t>30</span>s, the Survivor with the least time in chase sees your Aura for <span class=t>4</span>s.<br><br>While a Survivor sees your Aura, you see their Aura.",
"i": "icons/IconPerks_deerstalker.png"
},
{
"n": "Discordance",
"d": "Within <span class=t>128</span>m of you, whenever a Generator is being repaired by at least 2 Survivors, you are alerted.<br><br>While that Generator is being repaired by at least 2 Survivors, you see its Aura. When it is no longer being repaired by at least 2 Survivors, this ends after <span class=t>4</span>s.",
"i": "icons/IconPerks_discordance.png"
},
{
"n": "Dissolution",
"d": "<span class=t>3</span>s after a Survivor takes damage from a basic-attack, for <span class=t>15</span>s, the next time a Survivor fast-vaults a Pallet while within your Terror Radius, it is destroyed.",
"i": "icons/IconPerks_dissolution.png"
},
{
"n": "Distressing",
"d": "Survivors within your Terror Radius repair <span class=t>8</span>% slower.<br><br>Your Terror Radius is <span class=t>30</span>% larger.",
"i": "icons/IconPerks_distressing.png"
},
{
"n": "Dominance",
"d": "The first time each Totem is being blessed or cleansed by a Survivor:<li>It is blocked for <span class=t>25</span>s.</li><li>They scream.</li><li>You see their Aura for <span class=t>5</span>s.</li>",
"i": "icons/IconPerks_Dominance.png"
},
{
"n": "Dragon’s Grip",
"d": "Whenever you damage a Generator, for the next <span class=t>30</span>s, the first Survivor that repairs that Generator:<ul><li>They scream, then you are alerted to their position for <span class=t>4</span>s.</li><li>They gain <span class=k>Exposed</span> for <span class=t>60</span>s.</li></ul><br><br>Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_dragonsGrip.png"
},
{
"n": "Dying Light",
"d": "Whenever you hook a Survivor that is not the Obsession, earn <span class=t>1</span> token.<br><br>While the Obsession is alive, for each Token:<ul><li>Other Survivors heal <span class=t>3</span>% slower.</li><li>Other Survivors repair <span class=t>3</span>% slower.</li><li>Other Survivors sabotage Hooks <span class=t>3</span>% slower.</li></ul><br><br>The Obsession:<ul><li>Heals other Survivors <span class=t>33</span>% faster.</li><li>Unhooks other Survivors <span class=t>33</span>% faster.</li></ul>",
"i": "icons/IconPerks_dyingLight.png"
},
{
"n": "Enduring",
"d": "While not carrying a Survivor, Pallet-stuns are <span class=t>50</span>% shorter.",
"i": "icons/IconPerks_enduring.png"
},
{
"n": "Eruption",
"d": "Whenever you damage a Generator, when you down a Survivor, all Generators damaged this way:<ul><li>Explode, lose <span class=t>10</span>% progress and start regressing.</li><li>Survivors repairing them scream, then you see their Auras for <span class=t>12</span>s.</li></ul><br><br>Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_eruption.png"
},
{
"n": "Fire Up",
"d": "Whenever a Generator is completed, earn <span class=t>1</span> Token, up to <span class=t>5</span>.<br><br>For each Token:<ul><li>You basic-break Pallets and Breakable Walls <span class=t>8</span>% faster.</li><li>You damage Generators <span class=t>8</span>% faster.</li><li>You pick-up and drop Survivors <span class=t>8</span>% faster.</li><li>You basic-vault Windows <span class=t>8</span>% faster.</li></ul>",
"i": "icons/IconPerks_fireUp.png"
},
{
"n": "Forced Hesitation",
"d": "Whenever you down a Survivor, other Survivors within <span class=t>16</span>m of the downed Survivor gain <span class=t>20</span>% <span class=k>Hindered</span> for <span class=t>10</span>s. Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_forcedHesitation.png"
},
{
"n": "Forced Penance",
"d": "Whenever a Survivor takes a protection hit, they gain <span class=k>Broken</span> for <span class=t>80</span>s.",
"i": "icons/IconPerks_forcedPenance.png"
},
{
"n": "Forever Entwined",
"d": "Whenever a Survivor takes damage, you earn <span class=t>1</span> Token, up to <span class=t>8</span>.<br><br>For each Token:<ul><li>You hook Survivors <span class=t>4</span>% faster.</li><li>You pick-up and drop Survivors <span class=t>4</span>% faster.</li></ul>",
"i": "icons/IconPerks_ForeverEntwined.png"
},
{
"n": "Franklin's Demise",
"d": "Whenever you damage a Survivor with a basic-attack, they drop their item.<br><br>Within <span class=t>64</span>m, you see the Auras of dropped items.",
"i": "icons/IconPerks_franklinsDemise.png"
},
{
"n": "Friends ‘Til the End",
"d": "Whenever you Hook a Survivor that is not the Obsession:<ul><li>The Obsession gains <span class=k>Exposed</span> for <span class=t>20</span>s.</li><li>You see the Obsession's Aura for <span class=t>10</span>s.</li></ul><br><br>Whenever you Hook the Obsession, another Survivor:<ul><li>Screams, then you are alerted.</li><li>Becomes the Obsession.</li></ul>",
"i": "icons/IconPerks_friendsTilTheEnd.png"
},
{
"n": "Furtive Chase",
"d": "Whenever you hook the Obsession:<ul><li>You gain <span class=t>10</span>% <span class=k>Haste</span> for <span class=t>18</span>s.</li><li>You gain <span class=k>Undetectable</span> for <span class=t>18</span>s.</li></ul><br><br>Whenever the Obsession is unhooked, the Survivor who unhooked them becomes the Obsession.",
"i": "icons/IconPerks_furtiveChase.png"
},
{
"n": "Game Afoot",
"d": "While chasing the Obsession, whenever you basic-break Pallets or Breakable Walls, or damage Generators, you gain <span class=t>10</span>% <span class=k>Haste</span> for <span class=t>10</span>s.<br><br>Whenever you damage the Survivor with the most chase time with a basic-attack, they become the Obsession.",
"i": "icons/IconPerks_gameAfoot.png"
},
{
"n": "Gearhead",
"d": "Whenever a Survivor takes damage, for the next <span class=t>30</span>s, whenever a Survivor repairing a Generator hits a good basic Skill Check, you see their Aura for <span class=t>8</span>s.",
"i": "icons/IconPerks_gearhead.png"
},
{
"n": "Genetic Limits",
"d": "Whenever a Survivor takes damage, they gain <span class=k>Exhausted</span> for <span class=t>8</span>s.",
"i": "icons/IconPerks_geneticLimits.png"
},
{
"n": "Grim Embrace",
"d": "Whenever you Hook a Survivor for the first time, earn <span class=t>1</span> Token.<br><br>When you move <span class=t>16</span>m away from the hooked Survivor, all Generators are blocked for <span class=t>10</span>s.<br><br>When you have <span class=t>4</span> Tokens, when you move <span class=t>16</span>m away from the hooked Survivor:<ul><li>All Generators are blocked for <span class=t>40</span>s.</li><li>You see the Obsession's Aura for <span class=t>10</span>s.</li></ul>",
"i": "icons/IconPerks_grimEmbrace.png"
},
{
"n": "Haywire",
"d": "Exit Gate Switches with at least <span class=t>80</span>% progress regress at <span class=t>100</span>% speed.<br><br>While they are regressing, Survivors see the Exit Gate Lights flicker randomly.",
"i": "icons/IconPerks_Haywire.png"
},
{
"n": "Help Wanted",
"d": "Whenever you damage a Generator, it is compromised.<br><br>When any compromised Generator is completed by Survivors:<li>Your successful basic-attack cooldowns are <span class=t>25</span>% shorter for <span class=t>90</span>s.</li><li>Generators not being repaired regress at <span class=t>150</span>% speed for <span class=t>90</span>s.</li><li>Other Generators lose compromised.</li><br><br>Up to <span class=t>3</span> Generators can be compromised at a time.",
"i": "icons/IconPerks_HelpWanted.png"
},
{
"n": "Hex: Blood Favor",
"d": "When the trial starts, a Dull Totem ignites.<br><br>Whenever a healthy Survivor becomes injured by your basic-attack, Upright Pallets within <span class=t>32</span>m of them are blocked for <span class=t>15</span>s.",
"i": "icons/IconPerks_hexBloodFavour.png"
},
{
"n": "Hex: Crowd Control",
"d": "The first time a Survivor medium or fast-vaults a Window, a Dull Totem ignites.<br><br>The last <span class=t>6</span> Windows Survivors medium or fast-vault are blocked.<br><br>You basic-vault blocked Windows <span class=t>15</span>% faster.<br><br>You see the Auras of blocked Windows within <span class=t>24</span>m.",
"i": "icons/IconPerks_hexCrowdControl.png"
},
{
"n": "Hex: Devour Hope",
"d": "When the trial starts, a Dull Totem ignites.<br><br>Whenever a Survivor is unhooked while you are at least <span class=t>24</span>m away, earn <span class=t>1</span> Token, up to <span class=t>5</span>:<ul><li>2 Tokens | <span class=t>10</span>s after hooking a Survivor, gain <span class=t>5</span>% <span class=k>Haste</span> for <span class=t>10</span>s.</li><li>3 Tokens | Survivors gain <span class=k>Exposed</span>.</li><li>5 Tokens | You can Kill downed Survivors.</li></ul>",
"i": "icons/IconPerks_hexDevourHope.png"
},
{
"n": "Hex: Face the Darkness",
"d": "Whenever you damage a Survivor, they are hexed and a Dull Totem ignites.<br><br>Every <span class=t>25</span>s, other Survivors not within your Terror Radius scream, then you see their Auras for <span class=t>2</span>s.<br><br>When the hexed Survivor is downed or becomes healthy, the Hex Totem is extinguished.",
"i": "icons/IconPerks_hexFaceTheDarkness.png"
},
{
"n": "Hex: Haunted Ground",
"d": "When the trial starts, 2 Dull Totems ignite.<br><br>When either of those Hex Totems is blessed or cleansed:<ul><li>All Survivors gain <span class=k>Exposed</span> for <span class=t>60</span>s.</li><li>The other Totem is extinguished.</li></ul>",
"i": "icons/IconPerks_hexHauntedGround.png"
},
{
"n": "Hex: Hive Mind",
"d": "The first time you hook a Survivor, a Dull Totem ignites.<br><br>The Auras of Generators show their progress.<br><br>When <span class=t>1</span> Generator remains:<ul><li>All Generators explode, lose <span class=t>10</span>% progress and start regressing.</li><li>The Hex Totem is extinguished.</li></ul>",
"i": "icons/IconsPerks_HexHiveMind.png"
},
{
"n": "Hex: Huntress Lullaby",
"d": "When the trial starts, a Dull Totem ignites.<br><br>Whenever you hook a Survivor, earn <span class=t>1</span> Token. For each Token, Basic Skill Check warnings appear later and good success zones are smaller.<br><br>While you have <b>5</b> Tokens, Basic Skill Check warnings don't appear.<br><br>Whenever a Survivor misses a basic Skill Check, they lose <span class=t>6</span>% more progress.",
"i": "icons/IconPerks_hexHuntressLullaby.png"
},
{
"n": "Hex: No One Escapes Death",
"d": "When all Generators are completed, a Dull Totem ignites:<ul><li>Survivors gain <span class=k>Exposed</span>.</li><li>You gain <span class=t>4</span>% <span class=k>Haste</span>.</li></ul><br><br>Within <span class=t>4</span>m, Survivors see the Hex Totem's Aura, expanding to <span class=t>24</span>m over <span class=t>30</span>s.",
"i": "icons/IconPerks_hexNoOneEscapesDeath.png"
},
{
"n": "Hex: Nothing But Misery",
"d": "After you damage Survivors with a basic-attack <span class=t>4</span> times, a Dull Totem ignites.<br><br>Whenever you damage a Survivor with a basic-attack:<ul><li>They gain <span class=t>5</span>% <span class=k>Hindered</span> for <span class=t>15</span>s.</li><li>They vault <span class=t>10</span>% slower for <span class=t>15</span>s.</li></ul>",
"i": "icons/IconPerks_NothingButMisery.png"
},
{
"n": "Hex: Overture of Doom",
"d": "When the trial starts, a Dull Totem ignites and hexes the farthest Generator from it.<br><br>After a Survivor repairs the hexed Generator for <span class=t>5</span> seconds:<ul><li>You gain <span class=k>Undetectable</span> for <span class=t>30</span>s.</li><li>For that time, your Terror Radius is set to that Generator.</li></ul><br><br>When the hexed Generator is repaired, the next farthest Generator is hexed.",
"i": "icons/IconPerks_HexOvertureOfDoom.png"
},
{
"n": "Hex: Pentimento",
"d": "You see the Auras of cleansed Totems, and can rekindle each once.<br><br>Within <span class=t>16</span>m, Survivors see the Auras of Rekindled Totems.<br><br>While a Totem is rekindled, Survivors heal and repair <span class=t>20</span>% slower, plus <span class=t>3</span>% for each additional Rekindled Totem.<br><br>When all <span class=t>5</span> Totems are rekindled at once, they are blocked.",
"i": "icons/IconPerks_hexPentimento.png"
},
{
"n": "Hex: Plaything",
"d": "The first time you hook each Survivor, they are hexed and a Dull Totem ignites.<br><br>For <span class=t>90</span>s, the Hex Totem is blocked to other Survivors.<br><br>The hexed Survivors:<br><br><ul><li>Gain <span class=k>Oblivious</span>.</li><li>Within <span class=t>16</span>m of the Hex Totem, they see its Aura.</li></ul>",
"i": "icons/IconPerks_hexPlaything.png"
},
{
"n": "Hex: Retribution",
"d": "When the trial starts, a Dull Totem ignites.<br><br>Whenever a Survivor starts blessing or cleansing a Totem, they gain <span class=k>Oblivious</span> for <span class=t>60</span>s.<br><br>Whenever a Hex Totem is blessed or cleansed, you see the Auras of all Survivors for <span class=t>20</span>s.",
"i": "icons/IconPerks_hexRetribution.png"
},
{
"n": "Hex: Ruin",
"d": "When the trial starts, a Dull Totem ignites.<br><br>While a Generator is not being repaired, it regresses at <span class=t>150</span>% speed.",
"i": "icons/IconPerks_hexRuin.png"
},
{
"n": "Hex: Scared to Death",
"d": "After you hook <span class=t>3</span> different Survivors, a Dull Totem ignites.<br><br>While chasing a Survivor, whenever you basic-break a Pallet, Survivors within <span class=t>13</span>m:<ul><li>Scream.</li><li>Gain <span class=t>13</span>% <span class=k>Hindered</span> for <span class=t>3</span>s.</li></ul>",
"i": "icons/T_UI_iconsPerks_ScaredToDeath.png"
},
{
"n": "Hex: The Third Seal",
"d": "When the trial starts, a Dull Totem ignites.<br><br>Whenever you damage a Survivor with a basic or special-attack, they gain <span class=k>Blindness</span>.<br><br>This applies for up to <span class=t>4</span> Survivors.",
"i": "icons/IconPerks_hexTheThirdSeal.png"
},
{
"n": "Hex: Thrill of the Hunt",
"d": "The first time you hook a Survivor, a Dull Totem ignites.<br><br><br>When you hook a Survivor, block all Hex Totems for <span class=t>6</span>s for each lit Hex Totem.",
"i": "icons/IconPerks_hexThrillOfTheHunt.png"
},
{
"n": "Hex: Two Can Play",
"d": "While this Hex is dull, each time you are blinded or stunned by a Survivor <span class=t>2</span> times, a Dull Totem ignites.<br><br>Whenever you are blinded or stunned by a Survivor you are not carrying, they are blinded for <span class=t>1.5</span>s.",
"i": "icons/IconPerks_hexTwoCanPlay.png"
},
{
"n": "Hex: Under Your Thumb",
"d": "The first time a Survivor gains a Hook State, a Dull Totem ignites.<br><br>Whenever a running Survivor gains <span class=k>Haste</span> within <span class=t>32</span>m of you, you are alerted.<br><br>Running Survivors cannot gain more than <span class=t>15</span>% <span class=k>Haste</span> at a time.",
"i": "icons/T_UI_iconsPerks_HexUnderYourThumb.png"
},
{
"n": "Hex: Undying",
"d": "When the trial starts, a Dull Totem ignites.<br><br>When another Hex Totem is blessed or cleansed, it replaces this one and keeps any Tokens it had.<br><br>You see the Auras of Survivors within <span class=t>4</span>m of Dull Totems.",
"i": "icons/IconPerks_hexUndying.png"
},
{
"n": "Hex: Wretched Fate",
"d": "The first time a Generator is completed, a Dull Totem ignites.<br><br>The Obsession:<ul><li>Repairs <span class=t>33</span>% slower.</li><li>Sees the Hex Totem's Aura within <span class=t>12</span>m.</li></ul>",
"i": "icons/IconPerks_HexWretchedFate.png"
},
{
"n": "Hoarder",
"d": "When the trial starts, <span class=t>2</span> more Chests appear.<br><br>Whenever a Survivor picks-up an Item or starts unlocking a Chest within <span class=t>64</span>m of you, you are alerted.",
"i": "icons/IconPerks_hoarder.png"
},
{
"n": "Hubris",
"d": "Whenever you are stunned by a Survivor, they gain <span class=k>Exposed</span> for <span class=t>30</span>s. Cooldown: <span class=t>20</span>s.",
"i": "icons/IconPerks_hubris.png"
},
{
"n": "Human Greed",
"d": "Whenever a Survivor gets within <span class=t>8</span>m of a locked Chest, you see their Aura for <span class=t>5</span>s.<br><br>You can lock unlocked Chests. Cooldown: <span class=t>10</span>s.<br><br>You see the Auras of locked Chests.",
"i": "icons/IconPerks_HumanGreed.png"
},
{
"n": "Hysteria",
"d": "Whenever a healthy Survivor becomes injured, all injured Survivors gain <span class=k>Oblivious</span> for <span class=t>40</span>s. Cooldown: <span class=t>20</span>s.",
"i": "icons/IconPerks_hysteria.png"
},
{
"n": "I'm All Ears",
"d": "Whenever a Survivor fast-enters or fast-exits a Locker, or medium or fast-vaults within <span class=t>48</span>m of you, you see their Aura for <span class=t>8</span>s. Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_imAllEars.png"
},
{
"n": "Infectious Fright",
"d": "Whenever a Survivor is downed, Survivors within your Terror Radius scream and you are alerted for <span class=t>6</span>s.",
"i": "icons/IconPerks_infectiousFright.png"
},
{
"n": "Insidious",
"d": "After being idle for <span class=t>2</span>s, gain <span class=k>Undetectable</span>. Whenever you act, this ends after <span class=t>8</span>s.",
"i": "icons/IconPerks_insidious.png"
},
{
"n": "Iron Grasp",
"d": "While carrying a Survivor:<ul><li>They wiggle <span class=t>12</span>% slower.</li><li>Their wiggle is <span class=t>75</span>% weaker.</li></ul>",
"i": "icons/IconPerks_ironGrasp.png"
},
{
"n": "Iron Maiden",
"d": "Whenever a Survivor exits a Locker:<ul><li>They gain <span class=k>Exposed</span> for <span class=t>30</span>s.</li><li>They scream, then you are alerted to their location for <span class=t>4</span>s.</li></ul><br><br>You open Lockers <span class=t>50</span>% faster.",
"i": "icons/IconPerks_ironMaiden.png"
},
{
"n": "Knock Out",
"d": "Whenever a Survivor drops a Pallet, for the next <span class=t>6</span>s, if they move <span class=t>10</span>m away from it, they gain <span class=t>20</span>% <span class=k>Hindered</span> for <span class=t>4</span>s.<br><br><br>This ends early if the Pallet is broken.",
"i": "icons/IconPerks_knockOut.png"
},
{
"n": "Languid Touch",
"d": "Whenever a Survivor within <span class=t>36</span>m of you scares a Crow, they gain <span class=k>Exhausted</span> for <span class=t>10</span>s. Cooldown: <span class=t>5</span>s.",
"i": "icons/IconPerks_languidTouch.png"
},
{
"n": "Lay Waste",
"d": "Whenever you damage a Generator, for each Charge it has, it regresses <span class=t>2</span>% faster. Cooldown: <span class=t>45</span>s.",
"i": "icons/T_UI_iconsPerks_LayWaste.png"
},
{
"n": "Lethal Pursuer",
"d": "When the trial starts, you see the Auras of all Survivors for <span class=t>9</span>s.<br><br>Whenever you see a Survivor's Aura for a duration, it is <span class=t>2</span>s longer.",
"i": "icons/IconPerks_lethalPursuer.png"
},
{
"n": "Leverage",
"d": "Whenever a Survivor unhooks another or themselves, they heal <span class=t>30</span>% slower for <span class=t>60</span>s.",
"i": "icons/IconPerks_leverage.png"
},
{
"n": "Lightborn",
"d": "Whenever a Survivor attempts to blind you, you see their Aura for <span class=t>10</span>s.<br><br>You cannot be blinded.",
"i": "icons/IconPerks_lightborn.png"
},
{
"n": "Machine Learning",
"d": "Whenever you damage a Generator, it becomes compromised.<br><br>When any compromised Generator is completed by Survivors:<ul><li>You gain <span class=t>8</span>% <span class=k>Haste</span> for <span class=t>60</span>s.</li><li>You gain <span class=k>Undetectable</span> for <span class=t>60</span>s.</li><li>Other Generators lose compromised.</li></ul><br><br>Up to <span class=t>3</span> Generators can be compromised at a time.",
"i": "icons/IconPerks_machineLearning.png"
},
{
"n": "Mad Grit",
"d": "While carrying a Survivor:<ul><li>Whenever you miss a basic-attack, your cooldown is <span class=t>100</span>% shorter.</li><li>Whenever you damage a Survivor with a basic attack, the carried Survivor gains no wiggle progress for <span class=t>4</span>s.</li></ul>",
"i": "icons/IconPerks_madGrit.png"
},
{
"n": "Make your Choice",
"d": "Whenever a Survivor unhooks another or themselves while you are at least <span class=t>32</span>m away:<ul><li>They scream.</li><li>They gain <span class=k>Exposed</span> for <span class=t>60</span>s.</li></ul><br><br>Cooldown: <span class=t>60</span>s.",
"i": "icons/IconPerks_makeYourChoice.png"
},
{
"n": "Merciless Storm",
"d": "The first time each Generator has <span class=t>90</span>% progress: Survivors repairing it get special Skill Checks. If they miss one of these or stop repairing, that Generator is blocked for <span class=t>20</span>s.",
"i": "icons/IconPerks_mercilessStorm.png"
},
{
"n": "Mindbreaker",
"d": "While Survivors are repairing a Generator:<ul><li>They gain <span class=k>Blindness</span>.</li><li>They gain <span class=k>Exhausted</span>.</li></ul><br><br>When they stop repairing a Generator, this ends after <span class=t>5</span>s.",
"i": "icons/IconPerks_mindbreaker.png"
},
{
"n": "Monitor & Abuse",
"d": "While chasing a Survivor, your Terror Radius is <span class=t>15</span>% bigger.<br><br>While not chasing a Survivor, your Terror Radius is <span class=t>25</span>% smaller.",
"i": "icons/IconPerks_monitorAndAbuse.png"
},
{
"n": "Nemesis",
"d": "Whenever a Survivor blinds you, Locker-stuns or Pallet-stuns you, they become the Obsession.<br><br>Whenever a Survivor becomes the Obsession:<ul><li>They gain <span class=k>Oblivious</span> for <span class=t>60</span>s.</li><li>You see their Aura for <span class=t>8</span>s.</li></ul>",
"i": "icons/IconPerks_nemesis.png"
},
{
"n": "No Quarter",
"d": "While self-healing, whenever a Survivor has <span class=t>75</span>% progress, they get special Skill Checks. If they miss one of these or stop healing, they gain <span class=k>Broken</span> for <span class=t>30</span>s.",
"i": "icons/IconPerks_noQuarter.png"
},
{
"n": "No Way Out",
"d": "The first time you Hook each Survivor, you earn <span class=t>1</span> Token.<br><br>When all Generators are completed, when a Survivor starts opening an Exit Gate:<ul><li>It is blocked <span class=t>12</span>s, plus <span class=t>12</span>s for each Token.</li><li>You are alerted.</li></ul>",
"i": "icons/IconPerks_noWayOut.png"
},
{
"n": "None Are Free",
"d": "The first time you hook each Survivor, earn <span class=t>1</span> Token.<br><br>When all Generators are completed, for each Token:<ul><li>Upright Pallets are blocked for <span class=t>16</span>s.</li><li>Windows are blocked for <span class=t>16</span>s.</li></ul>",
"i": "icons/IconPerks_NoneAreFree.png"
},
{
"n": "Nowhere to Hide",
"d": "Whenever you damage a Generator, for <span class=t>5</span>s, you see the Auras of Survivors within <span class=t>24</span>m of it.",
"i": "icons/IconPerks_nowhereToHide.png"
},
{
"n": "Oppression",
"d": "Whenever you damage a Generator, up to <span class=t>4</span> other Generators start regressing. Survivors repairing them get a special Skill Check. Cooldown: <span class=t>35</span>s.",
"i": "icons/IconPerks_oppression.png"
},
{
"n": "Overcharge",
"d": "Whenever you damage a Generator:<ul><li>Its regression speed will go from <span class=t>85</span>% to <span class=t>130</span>% over the next <span class=t>30</span>s.</li><li>The next Survivor who starts repairing it gets a special Skill Check. If they miss it, they lose <span class=t>4</span>% more progress.</li></ul>",
"i": "icons/IconPerks_overcharge.png"
},
{
"n": "Overwhelming Presence",
"d": "Whenever a Survivor uses an item within <span class=t>32</span>m of you, they gain <span class=k>Exhausted</span> for <span class=t>15</span>s.<br><br>Whenever a Survivor within <span class=t>32</span>m of you gains <span class=k>Exhausted</span>, you see the closest <span class=k>Exhausted</span> Survivor's Aura for <span class=t>4</span>s. Cooldown: <span class=t>25</span>s.",
"i": "icons/IconPerks_overwhelmingPresence.png"
},
{
"n": "Phantom Fear",
"d": "Whenever a Survivor within your Terror Radius looks at you, they scream, then you see their Aura for <span class=t>2</span>s. Cooldown: <span class=t>60</span>s.",
"i": "icons/IconPerks_PhantomFear.png"
},
{
"n": "Play With Your Food",
"d": "Whenever you stop chasing the Obsession, you earn <span class=t>1</span> Token, up to <span class=t>3</span>. Cooldown: <span class=t>10</span>s.<br><br><br>For each Token, gain <span class=t>5</span>% <span class=k>Haste</span>.<br><br><br>Whenever you attack, lose <span class=t>1</span> Token.",
"i": "icons/IconPerks_playWithYourFood.png"
},
{
"n": "Pop Goes the Weasel",
"d": "Whenever you hook a Survivor, for the next <span class=t>45</span>s, when you damage a Generator, it explodes and loses <span class=t>15</span>% more progress.",
"i": "icons/IconPerks_popGoesTheWeasel.png"
},
{
"n": "Predator",
"d": "When you stop chasing a Survivor, you see their Aura for <span class=t>4</span>s. Cooldown: <span class=t>40</span>s.",
"i": "icons/IconPerks_predator.png"
},
{
"n": "Rampage",
"d": "Whenever you basic-break a Pallet or Breakable Wall, you earn <span class=t>1</span> Token, up to <span class=t>13</span>.<br><br>Whenever you are blinded or Pallet-stunned, for the next <span class=t>13</span>s you gain <span class=t>1</span>% <span class=k>Haste</span> for each Token. Cooldown: <span class=t>20</span>.",
"i": "icons/T_UI_iconsPerks_Rampage.png"
},
{
"n": "Rancor",
"d": "Whenever a Generator is completed:<ul><li>You are alerted to the position of all Survivors for <span class=t>3</span>s.</li><li>The Obsession sees your Aura for <span class=t>3</span>s.</li></ul><br><br>When all Generators are completed:<ul><li>The Obsession gains <span class=k>Exposed</span>.</li><li>You can Kill the Obsession.</li></ul>",
"i": "icons/IconPerks_rancor.png"
},
{
"n": "Rapid Brutality",
"d": "Whenever you damage a Survivor with a basic-attack, you gain <span class=t>5</span>% <span class=k>Haste</span> for <span class=t>10</span>s.<br><br>While chasing a Survivor, you cannot gain Bloodlust.",
"i": "icons/IconPerks_rapidBrutality.png"
},
{
"n": "Ravenous",
"d": "The first time you hook each Survivor, you earn <span class=t>1</span> Token. For each Token:<li>Gain <span class=t>4</span>% <span class=k>Haste</span> while carrying a Survivor.</li><li>Hook Survivors <span class=t>4</span>% faster.</li><br><br>When you have <span class=t>4</span> Tokens, all Survivors:<li>Scream.</li><li>Gain <span class=k>Exposed</span> for <span class=t>90</span>s.</li>",
"i": "icons/IconPerks_Ravenous.png"
},
{
"n": "Remember Me",
"d": "Whenever the Obsession takes damage, you earn 1 Token, up to <span class=t>5</span>.<br><br><br>For each Token, Survivors who are not the Obsession open Exit Gates <span class=t>30</span>% slower.",
"i": "icons/IconPerks_rememberMe.png"
},
{
"n": "Save the best for last",
"d": "Whenever you damage a Survivor who is not the Obsession with a basic-attack, you earn <span class=t>1</span> Token, up to <span class=t>8</span>.<br><br>For each Token, your successful basic-attack cooldown is <span class=t>5</span>% shorter.<br><br>Whenever the Obsession takes damage, lose <span class=t>2</span> Tokens.<br><br>While the Obsession is dead, you cannot earn Tokens.",
"i": "icons/IconPerks_saveTheBestForLast.png"
},
{
"n": "Scourge Hook: Floods of Rage",
"d": "When the trial starts, 4 random Hooks become Scourge Hooks.<br><br>Whenever a Survivor is unhooked from a Scourge Hook, you see the Auras of other Survivors for <span class=t>7</span>s.",
"i": "icons/IconPerks_scourgeHookFloodsOfRage.png"
},
{
"n": "Scourge Hook: Gift of Pain",
"d": "When the trial starts, 4 random Hooks become Scourge Hooks.<br><br>Whenever a Survivor is unhooked from a Scourge Hook:<ul><li>They gain <span class=k>Hemorrhage</span> for <span class=t>90</span>s.</li><li>They gain <span class=k>Mangled</span> for <span class=t>90</span>s.</li><li>When they are healed, until they take damage, they heal and repair <span class=t>16</span>% slower.</li></ul>",
"i": "icons/IconPerks_scourgeHookGiftOfPain.png"
},
{
"n": "Scourge Hook: Hangman's Trick",
"d": "When the trial starts, 4 random Hooks become Scourge Hooks.<br><br>While carrying a Survivor, you see the Auras of Survivors within <span class=t>16</span>m of Scourge Hooks.<br><br>Whenever a Survivor starts sabotaging a Hook, you are alerted.",
"i": "icons/IconPerks_scourgeHookHangmansTrick.png"
},
{
"n": "Scourge Hook: Jagged Compass",
"d": "When the trial starts, 4 random Hooks become Scourge Hooks.<br><br>Whenever a Survivor is unhooked, the Hook becomes a Scourge Hook.<br><br>Whenever you hook a Survivor on a Scourge Hook, for <span class=t>10</span>s, you see the Aura of the Generator with the most progress.",
"i": "icons/IconPerks_scourgeHookJaggedCompass.png"
},
{
"n": "Scourge Hook: Monstrous Shrine",
"d": "When the Trial starts:<ul><li>4 random Hooks become Scourge Hooks.</li><li>The Basement Hooks become Scourge Hooks.</li></ul><br><br><br>While you are at least <span class=t>24</span>m away from a Survivor on a Scourge Hook, any Generator that isn't being repaired regresses at <span class=t>200</span>% speed.",
"i": "icons/IconPerks_scourgeHookMonstrousShrine.png"
},
{
"n": "Scourge Hook: Pain Resonance",
"d": "When the trial starts:<ul><li>4 random Hooks become Scourge Hooks.</li><li>You earn <span class=t>4</span> Tokens.</li></ul><br><br>The first time each Survivor is hooked on a Scourge Hook, spend <span class=t>1</span> Token, then the Generator with the most progress:<ul><li>Explodes, loses <span class=t>20</span>% progress and starts regressing.</li><li>Survivors repairing it scream.</li></ul>",
"i": "icons/IconPerks_scourgeHookPainResonance.png"
},
{
"n": "Secret Project",
"d": "Whenever a Totem is blessed or cleansed, a random unblocked Generator is blocked for <span class=t>30</span>s.<br><br>Whenever 1 or more Generators are blocked, you gain <span class=k>Undetectable</span> for <span class=t>30</span>s.",
"i": "icons/IconsPerks_SecretProject.png"
},
{
"n": "Septic Touch",
"d": "While a Survivor within your Terror Radius is healing:<ul><li>They gain <span class=k>Blindness</span>.</li><li>They gain <span class=k>Exhausted</span>.</li></ul><br><br>When they stop healing, this ends after <span class=t>30</span>s.",
"i": "icons/IconPerks_septicTouch.png"
},
{
"n": "Shadowborn",
"d": "Whenever you are blinded, gain <span class=t>10</span>% <span class=k>Haste</span> for <span class=t>10</span>s.",
"i": "icons/IconPerks_shadowborn.png"
},
{
"n": "Shattered Hope",
"d": "Whenever you snuff a Boon Totem, it is destroyed.<br><br>Whenever a Totem is blessed, cleansed or destroyed:<ul><li>Dull Totems are blocked for <span class=t>20</span>s.</li><li>Hex Totems are blocked for <span class=t>20</span>s.</li><li>See Boon Totems' Auras for <span class=t>20</span>s.</li></ul>",
"i": "icons/IconPerks_shatteredHope.png"
},
{
"n": "Silent Shadow",
"d": "Whenever you hook a Survivor, you gain <span class=k>Undetectable</span> for <span class=t>13</span>s.<br><br>When all Generators are completed, you gain <span class=k>Undetectable</span>.",
"i": "icons/T_UI_iconsPerks_SilentShadow.png"
},
{
"n": "Sloppy Butcher",
"d": "Whenever you damage a Survivor with a basic-attack:<ul><li>They gain <span class=k>Hemorrhage</span> for <span class=t>90</span>s.</li><li>They gain <span class=k>Mangled</span> for <span class=t>90</span>s.</li></ul><br><br>Survivors with <span class=k>Hemorrhage</span> lose healing progress <span class=t>25</span>% faster.",
"i": "icons/IconPerks_sloppyButcher.png"
},
{
"n": "Spies from the Shadows",
"d": "Whenever a Survivor scares a Crow within <span class=t>40</span>m of you, you are alerted. Cooldown: <span class=t>3</span>s.",
"i": "icons/IconPerks_spiesFromTheShadows.png"
},
{
"n": "Spirit Fury",
"d": "After you break <span class=t>2</span> Pallets, when you are Pallet-stunned, the Pallet is destroyed.",
"i": "icons/IconPerks_spiritFury.png"
},
{
"n": "Starstruck",
"d": "While carrying a Survivor, Survivors within your Terror Radius gain <span class=k>Exposed</span>. This ends <span class=t>30</span>s after:<ul><li>They leave your Terror Radius.</li><li>You drop or Hook the carried Survivor.</li></ul><br><br>Cooldown: <span class=t>60</span>s.",
"i": "icons/IconPerks_starstruck.png"
},
{
"n": "Stridor",
"d": "Survivors' breathing noises are <span class=t>25</span>% louder and their Grunts of Pain are <span class=t>50</span>% louder.",
"i": "icons/IconPerks_stridor.png"
},
{
"n": "Superior Anatomy",
"d": "Whenever a Survivor medium or fast-vaults within <span class=t>12</span>m of you, the next time you basic-vault a Window, you basic-vault Windows <span class=t>40</span>% faster for <span class=t>10</span>s. Cooldown: <span class=t>20</span>s.",
"i": "icons/IconPerks_superiorAnatomy.png"
},
{
"n": "Surge",
"d": "Whenever you down a Survivor with a basic-attack, Generators within <span class=t>32</span>m:<ul><li>Explode, lose <span class=t>8</span>% progress and start regressing.</li><li>Survivor repairing them scream.</li></ul>",
"i": "icons/IconPerks_surge.png"
},
{
"n": "Surveillance",
"d": "You see the Auras of regressing Generators.<br><br>Whenever a Generator stops regressing, you see its Aura for <span class=t>16</span>s.<br><br>Generator repair noises can be heard from <span class=t>8</span>m farther away.<br>",
"i": "icons/IconPerks_surveillance.png"
},
{
"n": "Terminus",
"d": "When all Generators are completed: all injured, downed, and hooked Survivors gain <span class=k>Broken</span>.<br><br>When an Exit Gate is opened, this ends after <span class=t>45</span>s.",
"i": "icons/IconPerks_terminus.png"
},
{
"n": "Territorial Imperative",
"d": "Whenever a Survivor enters the Basement while you are <span class=t>24</span>m away from it, you see their Aura for <span class=t>6</span>s. Cooldown: <span class=t>45</span>s.",
"i": "icons/IconPerks_territorialImperative.png"
},
{
"n": "Thanatophobia",
"d": "For each injured, downed, or hooked Survivor, all Survivors:<ul><li>Cleanse Totems <span class=t>2</span>% slower.</li><li>Repair <span class=t>2</span>% slower.</li><li>Sabotage Hooks <span class=t>2</span>% slower.</li></ul><br><br>While 4 Survivors are either injured, downed or hooked, all above actions are additionally <span class=t>12</span>% slower.",
"i": "icons/IconPerks_thanatophobia.png"
},
{
"n": "Thrilling Tremors",
"d": "Whenever you pick-up a Survivor, all Generators not being repaired are blocked for <span class=t>16</span>s. Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_thrillingTremors.png"
},
{
"n": "THWACK!",
"d": "When the trial starts, you earn <span class=t>3</span> Tokens, up to <span class=t>3</span>.<br><br>Whenever you hook a Survivor, you earn <span class=t>1</span> Token.<br><br>Whenever you break a Pallet or Breakable Wall, spend <span class=t>1</span> Token. Then, all Survivors within <span class=t>36</span>m scream and you see their Auras for <span class=t>6</span>s.",
"i": "icons/IconPerks_thwack.png"
},
{
"n": "Tinkerer",
"d": "The first time each Generator has <span class=t>70</span>% progress:<ul><li>You gain <span class=k>Undetectable</span> for <span class=t>16</span>s.</li><li>You are alerted.</li></ul>",
"i": "icons/IconPerks_tinkerer.png"
},
{
"n": "Trail of Torment",
"d": "Whenever you damage a Generator, until it stops regressing:<ul><li>You gain <span class=k>undetectable</span>.</li><li>Survivors see that Generator's Aura.</li></ul><br><br>Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_trailOfTorment.png"
},
{
"n": "Turn Back The Clock",
"d": "After hooking a Survivor, for the next <span class=t>60</span>s, use the <b>Active Ability 1 button</b> to make target Generator you can see within <span class=t>20</span>m explode, lose <span class=t>10</span>% progress and start regressing.",
"i": "icons/IconsPerks_TurnBackTheClock.png"
},
{
"n": "Ultimate Weapon",
"d": "Whenever you search a Locker, Survivors within <span class=t>40</span>m:<ul><li>Gain <span class=k>Blindness</span> for <span class=t>30</span>s.</li><li>Scream.</li></ul><br><br>Cooldown: <span class=t>45</span>s.",
"i": "icons/IconPerks_ultimateWeapon.png"
},
{
"n": "Unbound",
"d": "Whenever a healthy Survivor becomes injured, for the next <span class=t>30</span>s, whenever you basic-vault a window, gain <span class=t>5</span>% <span class=k>Haste</span> for <span class=t>25</span>s.",
"i": "icons/IconPerks_unbound.png"
},
{
"n": "Undone",
"d": "Whenever you hook a Survivor, earn <span class=t>1</span> Token, up to <span class=t>3</span>.<br><br>Whenever you damage a Generator, spend all Tokens. For each Token spent:<ul><li>The Generator loses <span class=t>10</span>% more progress.</li><li>The Generator is blocked for <span class=t>10</span>s.</li></ul>",
"i": "icons/IconPerks_undone.png"
},
{
"n": "Unforeseen",
"d": "Whenever you damage a Generator:<ul><li>Your Terror Radius is set to that Generator for <span class=t>30</span>s and its radius is <span class=t>32</span>m.</li><li>You gain <span class=k>Undetectable</span> for that time.</li></ul><br><br>Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_unforeseen.png"
},
{
"n": "Unnerving Presence",
"d": "Survivors within your Terror Radius get <span class=t>10</span>% more basic Skill Checks.<br><br>The good zone of basic Skill Checks is <span class=t>60</span>% smaller.",
"i": "icons/IconPerks_unnervingPresence.png"
},
{
"n": "Unrelenting",
"d": "Your missed basic-attack cooldown is <span class=t>40</span>% shorter.<br><br><br>Your successful basic-attack cooldown is <span class=t>10</span>% shorter.",
"i": "icons/IconPerks_unrelenting.png"
},
{
"n": "Wandering Eye",
"d": "Whenever you start chasing a Survivor, for the next <span class=t>5</span>s, you see the Auras of all other injured Survivors within <span class=t>20</span>m. Cooldown: <span class=t>30</span>s.",
"i": "icons/IconPerks_WanderingEye.png"
},
{
"n": "Weave Attunement",
"d": "The first time each item is depleted, it is dropped.<br><br>While a Survivor is within <span class=t>12</span>m of a dropped item:<ul><li>You see their Aura.</li><li>They see the item's Aura.</li></ul><br><br>Whenever a Survivor picks-up an item, they gain <span class=k>Oblivious</span> for <span class=t>30</span>s.",
"i": "icons/IconPerks_weaveAttunement.png"
},
{
"n": "Whispers",
"d": "While within <span class=t>24</span>m of a Survivor, you randomly hear whispers.<br><br><br>While more than <span class=t>24</span>m away from a Survivor, gain <span class=t>5</span>% <span class=k>Haste</span>.",
"i": "icons/IconPerks_whispers.png"
},
{
"n": "Zanshin Tactics",
"d": "Within <span class=t>32</span>m, you see the Auras of Pallets and windows.<br><br>Whenever a Survivor drops a Pallet, you see their Aura for <span class=t>5</span>s.",
"i": "icons/IconPerks_zanshinTactics.png"
}
];
const KILLERS = [
{
"n": "The Trapper",
"i": "icons/K01_TheTrapper_Portrait.png",
"a": [
{
"n": "Honing Stone",
"d": "The trapped victim is left dying instead of injured if they free themselves.",
"r": "veryrare",
"i": "icons/IconAddon_honingStone.png"
},
{
"n": "Serrated Jaws",
"d": "<b>Bear Traps</b> inflict <b>Hemorrhage</b> on trapped Survivors until they are healed.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.",
"r": "uncommon",
"i": "icons/IconAddon_serratedJaws.png"
},
{
"n": "Trapper Bag",
"d": "Start with <b>1 extra Bear Trap</b>. Allows the transportation of <b>1 extra Bear Trap</b>.",
"r": "rare",
"i": "icons/IconAddon_trapperBag.png"
},
{
"n": "Wax Brick",
"d": "<b>Increases</b> the time required to rescue a Survivor or attempt escape from a <b>Bear Trap</b> by <b>33%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_waxBrick.png"
},
{
"n": "Lengthened Jaws",
"d": "When Survivors escape <b>Bear Traps</b>, they are inflicted with <b>Deep Wound</b>.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
"r": "uncommon",
"i": "icons/IconAddon_lengthenedJaws.png"
},
{
"n": "Tar Bottle",
"d": "<b>Darkens</b> the appearance of <b>Bear Traps.</b>",
"r": "rare",
"i": "icons/IconAddon_tarBottle.png"
},
{
"n": "Makeshift Wrap",
"d": "<b>The Trapper</b> cannot be caught in his <b>Bear Traps</b>. <b>Bear Traps</b> will be disarmed if <b>The Trapper</b> steps on them.",
"r": "common",
"i": "icons/IconAddon_makeshiftWrap.png"
},
{
"n": "4-Coil Spring Kit",
"d": "<b>Increases</b> time required for Survivors to disarm <b>Bear Traps</b> by <b>33%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_4-coilSpringKit.png"
},
{
"n": "Trapper Sack",
"d": "All <b>Bear Traps</b> are carried at the beginning of the Trial instead of spawning on the map. <b>Bear Traps</b> cannot be picked up.",
"r": "veryrare",
"i": "icons/IconAddon_trapperSack.png"
},
{
"n": "Trapper Gloves",
"d": "<b>Increases Bear Trap</b> setting speed by <b>30%</b>.",
"r": "common",
"i": "icons/IconAddon_trapperGloves.png"
},
{
"n": "Secondary Coil",
"d": "<b>Increases</b> time required for Survivors to disarm <b>Bear Traps</b> by <b>50%</b>.",
"r": "rare",
"i": "icons/IconAddon_secondaryCoil.png"
},
{
"n": "Fastening Tools",
"d": "<b>Increases</b> <b>Bear Trap</b> setting speed by <b>50%</b>. <b>Increases</b> the time required to rescue a Survivor or attempt escape from a <b>Bear Trap</b> by <b>25%</b>.",
"r": "rare",
"i": "icons/IconAddon_fasteningTools.png"
},
{
"n": "Padded Jaws",
"d": "<b>Bear Traps</b> <b>do not inflict damage</b> on trapped Survivors. Equipping this add-on negates the effects of <b>Rusted Jaws</b> and <b>Serrated Jaws</b>. Points awarded for trapping Survivors are increased by <b>100%</b>.",
"r": "common",
"i": "icons/IconAddon_paddedJaws.png"
},
{
"n": "Bear Oil",
"d": "Setting a <b>Bear Trap</b> is silent.",
"r": "common",
"i": "icons/IconAddon_bearOil.png"
},
{
"n": "Bloody Coil",
"d": "When a <b>Bear Trap</b> is disarmed by a healthy Survivor, the bloody coils exact their price and that Survivor becomes injured.",
"r": "visceral",
"i": "icons/IconAddon_bloodyCoil.png"
},
{
"n": "Iridescent Stone",
"d": "Every <b>30 seconds</b>, one closed <b>Bear Trap</b> chosen at random becomes set.",
"r": "visceral",
"i": "icons/IconAddon_iridescentStone.png"
},
{
"n": "Oily Coil",
"d": "When resetting a <b>Bear Trap</b>, reveal the aura of the most recent Survivor to disarm it for <b>5 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_oilyCoil.png"
},
{
"n": "Rusted Jaws",
"d": "<b>Bear Traps</b> inflict <b>Mangled</b> on trapped survivors for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_rustedJaws.png"
},
{
"n": "Tension Spring",
"d": "A <b>Bear Trap</b> resets <b>2 seconds</b> after a Survivor escapes from it.",
"r": "veryrare",
"i": "icons/IconAddon_tensionSpring.png"
},
{
"n": "Coffee Grounds",
"d": "Increases the <b>Haste status effect</b> gained after setting a  <b>Bear Trap</b> by <b>5%</b>.<br><br>Haste increases Killer movement speed.",
"r": "uncommon",
"i": "icons/IconAddon_coffeeGrounds.png"
}
]
},
{
"n": "The Wraith",
"i": "icons/K02_TheWraith_Portrait.png",
"a": [
{
"n": "Bone Clapper",
"d": "A bell clapper made from a highly polished piece of bone. Causes the sounds of the Wailing Bell to echo and warp chaotically. Survivors can no longer discern the <b>Wailing Bell's</b> <b>distance</b> or <b>direction.</b>",
"r": "uncommon",
"i": "icons/IconAddon_boneClapper.png"
},
{
"n": "\"The Ghost\" - Soot",
"d": "After Uncloaking, the Wraith's Terror Radius and Red Stain will remain suppressed for <b>6 seconds.</b>",
"r": "common",
"i": "icons/IconAddon_theGhost-Soot.png"
},
{
"n": "\"The Hound\" - Soot",
"d": "While Cloaked, fresh blood marks are <b>brighter</b> than normal.",
"r": "common",
"i": "icons/IconAddon_theHound-Soot.png"
},
{
"n": "\"Blind Warrior\" - Mud",
"d": "Uncloak <b>surprise attacks</b> inflict Survivors with <b>Blindness</b> for <b>60 seconds.</b> Blindness prevents survivors from seeing auras.",
"r": "uncommon",
"i": "icons/IconAddon_blindWarrior-Mud.png"
},
{
"n": "\"Swift Hunt\" - Mud",
"d": "<b>Increases</b> uncloaking speed by <b>8%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_swiftHunt-Mud.png"
},
{
"n": "\"Swift Hunt\" - Blood",
"d": "<b>Increases</b> uncloaking speed by <b>12%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_swiftHunt-Blood.png"
},
{
"n": "\"The Beast\" - Soot",
"d": "The Wraith's Terror Radius is <b>no longer suppressed</b> while Cloaked. Bloodpoints granted for Stalking and surprise attacks are increased by <b>100%</b>.",
"r": "common",
"i": "icons/IconAddon_theBeast-Soot.png"
},
{
"n": "\"All Seeing\" - Blood",
"d": "Unlocks hidden potential in one's aura reading ability. While Cloaked, the auras of Survivors within <b>8 meters</b> are revealed to you.",
"r": "veryrare",
"i": "icons/IconAddon_allSeeing-Blood.png"
},
{
"n": "\"Windstorm\"- Mud",
"d": "The Ohuwe-Onmnea symbol, representing a howling storm, is finger-drawn in mud on the body of the Bell. <b>Increases</b> the Wraith's movement speed while cloaked by <b>5%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_windstorm-Mud.png"
},
{
"n": "\"Windstorm\" - White",
"d": "The Ohuwe-Onmnea symbol, representing a howling storm, is finger-drawn in white ink on the body of the Bell. <b>Increases</b> the Wraith's movement speed while cloaked by <b>7%</b>.",
"r": "rare",
"i": "icons/IconAddon_windstorm-White.png"
},
{
"n": "\"Blink\" - Mud",
"d": "<b>Increases</b> cloaking speed by <b>40%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_blink-Mud.png"
},
{
"n": "\"Blink\" - White",
"d": "<b>Increases</b> cloaking speed by <b>60%</b>.",
"r": "rare",
"i": "icons/IconAddon_blink-White.png"
},
{
"n": "\"All Seeing\" - Spirit",
"d": "Unlocks awesome potential in one's aura reading ability. While Cloaked, the <b>repair progress of generators</b> can be determined by the <b>intensity of their auras.</b>",
"r": "visceral",
"i": "icons/IconAddon_allSeeing-Spirit.png"
},
{
"n": "\"The Serpent\" - Soot",
"d": "While Cloaked, uncloak whenever you basic-break Pallets or Breakable Walls, and damage or explode Generators.",
"r": "common",
"i": "icons/IconAddon_theSerpent-Soot.png"
},
{
"n": "\"Shadow Dance\" - White",
"d": "While Cloaked, you basic-vault Windows, basic-break Pallets and Breakable Walls, and damage Generators 40% faster.",
"r": "rare",
"i": "icons/IconAddon_shadowDance-White.png"
},
{
"n": "\"Shadow Dance\" - Blood",
"d": "While Cloaked, you basic-vault Windows, basic-break Pallets and Breakable Walls, and damage Generators 60% faster.",
"r": "veryrare",
"i": "icons/IconAddon_shadowDance-Blood.png"
},
{
"n": "\"Blind Warrior\" - White",
"d": "Uncloak <b>surprise attacks</b> inflict <b>Mangled</b> and <b>Hemorrhage</b> for <b>70 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_blindWarrior-White.png"
},
{
"n": "Coxcombed Clapper",
"d": "Renders the <b>Wailing Bell</b> <b>completely silent.</b>",
"r": "visceral",
"i": "icons/IconAddon_coxcombedClapper.png"
},
{
"n": "\"Swift Hunt\" - White",
"d": "<b>Increases</b> uncloaking speed by <b>10%</b>.",
"r": "rare",
"i": "icons/IconAddon_swiftHunt-White.png"
},
{
"n": "\"Windstorm\" - Blood",
"d": "<b>Increases</b> the Wraith's movement speed while cloaked by <b>9%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_windstorm-Blood.png"
}
]
},
{
"n": "The Hillbilly",
"i": "icons/K03_TheHillbilly_Portrait.png",
"a": [
{
"n": "Dad's Boots",
"d": "<b>Increases</b> the Chainsaw Sprint turn rate by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_dadsBoots.png"
},
{
"n": "Counterweight",
"d": "<b>Decreases</b> the Chainsaw Sprints's initial turn rate by <b>70%</b>.",
"r": "common",
"i": "icons/IconAddon_counterweight.png"
},
{
"n": "Greased Throttle",
"d": "<b>Decreases</b> recovery time after using the Chainsaw by <b>5%</b>. This effect does not apply while in <b>Overdrive</b>.",
"r": "uncommon",
"i": "icons/IconAddon_greasedThrottle.png"
},
{
"n": "Thermal Casing",
"d": "<b>Decreases</b> the speed at which the Overdrive meter dissipates when not using the Chainsaw by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_thermalCasing.png"
},
{
"n": "Steel Toe Boots",
"d": "<b>Decreases</b> recovery time after hitting an object with the Chainsaw by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_steelToeBoots.png"
},
{
"n": "The Thompsons' Mix",
"d": "<b>Decreases</b> recovery time after using the Chainsaw by <b>10%</b>. This effect does not apply while in <b>Overdrive</b>.",
"r": "rare",
"i": "icons/IconAddon_theThompsonsMix.png"
},
{
"n": "Begrimed Chains",
"d": "Survivors hit with the Chainsaw suffer from the <b>Mangled</b> and <b>Hemorrhage</b> status effects for <b>70 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_begrimedChains.png"
},
{
"n": "Ragged Engine",
"d": "<b>Decreases</b> the speed at which the Overdrive meter dissipates when not using the Chainsaw by <b>30%</b>.",
"r": "rare",
"i": "icons/IconAddon_raggedEngine.png"
},
{
"n": "Lo Pro Chains",
"d": "Whenever you special-break Pallets or Breakable Walls with the Chainsaw, continue the Chainsaw Sprint. Healthy Survivors hit with the Chainsaw within <b>5 seconds</b> of breaking Pallet or a Wall are damaged for a single Health State. Injured Survivors suffer from the <b>Deep Wound</b> status effect.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
"r": "veryrare",
"i": "icons/IconAddon_loProChains.png"
},
{
"n": "Discarded Air Filter",
"d": "<b>Increases</b> the time it takes before the Overdrive meter starts dissipating by <b>20%</b>.",
"r": "common",
"i": "icons/IconAddon_discardedAirFilter.png"
},
{
"n": "Cracked Primer Bulb",
"d": "Survivors hit with the Chainsaw are damaged for a single health state. Increases Overdrive generation by <b>15%</b>.",
"r": "common",
"i": "icons/IconAddon_crackedPrimerBulb.png"
},
{
"n": "Off-Brand Motor Oil",
"d": "<b>Increases</b> Overdrive generation by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_off-brandMotorOil.png"
},
{
"n": "Tuned Carburetor",
"d": "<b>Increases</b> Chainsaw charge speed by <b>20%</b>. <b>Decreases</b> base movement speed to <b>4.4 m/s</b>.",
"r": "visceral",
"i": "icons/IconAddon_tunedCarburettor.png"
},
{
"n": "Clogged Intake",
"d": "<b>Increases</b> Overdrive duration by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_cloggedIntake.png"
},
{
"n": "Iridescent Engravings",
"d": "<b>Increases</b> Chainsaw Sprint movement speed by <b>20%</b>. <b>Increases</b> time required to charge the Chainsaw by <b>12%</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentEngravings.png"
},
{
"n": "Apex Muffler",
"d": "Chainsaw is silent for Survivors outside the Terror Radius.",
"r": "veryrare",
"i": "icons/IconAddon_apexMuffler.png"
},
{
"n": "Low Kickback Chains",
"d": "<b>Decreases</b> recovery time after hitting an object with the Chainsaw by <b>15%</b>.",
"r": "rare",
"i": "icons/IconAddon_lowKickbackChains.png"
},
{
"n": "High-Speed Idler Screw",
"d": "<b>Increases</b> the time it takes before the Overdrive meter starts dissipating by <b>30%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_highSpeedIdlerScrew.png"
},
{
"n": "Spiked Boots",
"d": "<b>Increases</b> the Chainsaw Sprint turn rate by <b>30%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_spikedBoots.png"
},
{
"n": "Filthy Slippers",
"d": "After maintaining a Chainsaw Sprint for <b>2 seconds</b>, grants <b>Undetectable</b> until the Chainsaw Sprint ends.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_filthySlippers.png"
}
]
},
{
"n": "The Nurse",
"i": "icons/K04_TheNurse_Portrait.png",
"a": [
{
"n": "Plaid Flannel",
"d": "Allows the Nurse to see the Blink target location.",
"r": "common",
"i": "icons/IconAddon_plaidFlannel.png"
},
{
"n": "White Nit Comb",
"d": "<b>Decreases</b> the length of Blink Attack lunges by <b>50%</b>. <b>Increases</b> Bloodpoints for Blink Attack score events by <b>100%</b>.",
"r": "common",
"i": "icons/IconAddon_whiteNitComb.png"
},
{
"n": "Pocket Watch",
"d": "<b>Increases</b> the time before The Nurse succumbs to fatigue after Blinking by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_pocketWatchSpencersLastBreath.png"
},
{
"n": "Anxious Gasp",
"d": "Blinking past a survivor causes them to scream and awards <b>200 Bloodpoints</b> for spooking them.",
"r": "rare",
"i": "icons/IconAddon_anxiousGasp.png"
},
{
"n": "Torn Bookmark",
"d": "Adds <b>1</b> Blink charge. <b>Increases</b> Blink recharge time by <b>30%</b>.",
"r": "visceral",
"i": "icons/IconAddon_tornBookmark.png"
},
{
"n": "Dark Cincture",
"d": "<b>Increases</b> movement speed after a Blink but before the following fatigue by <b>30%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_darkCincture.png"
},
{
"n": "Fragile Wheeze",
"d": "Blink Attacks inflict the <b>Mangled</b> status effect for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_fragileWheeze.png"
},
{
"n": "Campbell's Last Breath",
"d": "After reappearing from a fully charged Blink, The Nurse immediately Blinks at full charge in the direction she is currently facing. This only works if <b>The Nurse</b> has a remaining Blink charge.",
"r": "veryrare",
"i": "icons/IconAddon_campbellsLastBreath.png"
},
{
"n": "Metal Spoon",
"d": "Hitting a survivor with a successful Blink Attack causes their sounds of pain to be <b>50% louder</b> for <b>60 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_metalSpoon.png"
},
{
"n": "Bad Man Keepsake",
"d": "Hitting a survivor with a successful Blink Attack causes their aura to be revealed when healing or being healed within a <b>28 meter</b> range for <b>60 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_badManKeepsake.png"
},
{
"n": "Wooden Horse",
"d": "<b>Decreases</b> extra fatigue from missed Blink Attacks by <b>50%</b>.",
"r": "common",
"i": "icons/IconAddon_woodenHorse.png"
},
{
"n": "Catatonic Boy's Treasure",
"d": "<b>Decreases</b> extra fatigue from chain Blinks by <b>65%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_catatonicBoysTreasure.png"
},
{
"n": "Ataxic Respiration",
"d": "<b>Decreases</b> base Blink fatigue duration by <b>7%</b>.",
"r": "rare",
"i": "icons/IconAddon_ataxicRespiration.png"
},
{
"n": "\"Bad Man's\" Last Breath",
"d": "Hitting a survivor with a successful Blink Attack grants the Nurse <b>Undetectable</b> for <b>25 seconds</b>. This effect may be only triggered once every <b>45 seconds</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_badMansLastBreath.png"
},
{
"n": "Dull Bracelet",
"d": "<b>Decreases</b> maximum Blink distance by <b>20%</b>. <b>Increases</b> Bloodpoints for Precise Blink score events by <b>100%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_dullBracelet.png"
},
{
"n": "Heavy Panting",
"d": "<b>Extends</b> the duration of a lunge after more than one Blink by <b>10%</b>.",
"r": "rare",
"i": "icons/IconAddon_heavyPanting.png"
},
{
"n": "Jenner's Last Breath",
"d": "Once <b>The Nurse</b> has exhausted all of her Blinks, allows <b>The Nurse</b> to immediately Blink back to her original position by pressing the <i>Active Ability Button</i>. Must be triggered before <b>The Nurse</b> succumbs to fatigue. After returning to her original position, <b>The Nurse</b> will have one Blink charge ready.",
"r": "veryrare",
"i": "icons/IconAddon_jennersLastBreath.png"
},
{
"n": "Kavanagh's Last Breath",
"d": "When succumbing to fatigue, any Survivors within <b>8 meters</b> of <b>The Nurse</b> are afflicted with the <b>Blindness</b> status effect for <b>60 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "veryrare",
"i": "icons/IconAddon_kavanaghsLastBreath.png"
},
{
"n": "Matchbox",
"d": "Sets maximum number of Blink charges to <b>1</b>. Increases The Nurse's base movement speed to <b>4.4 m/s</b>.",
"r": "visceral",
"i": "icons/IconAddon_matchbox.png"
},
{
"n": "Spasmodic Breath",
"d": "Hitting a survivor with a successful Blink Attack <b>disables the ability to Blink</b> and increases the Nurse's base movement speed to <b>4.6 m/s</b> for <b>60 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_spasmodicBreath.png"
}
]
},
{
"n": "The Hag",
"i": "icons/K06_TheHag_Portrait.png",
"a": [
{
"n": "Bloodied Mud",
"d": "<b>Decreases Phantasm Trap</b> trigger range by <b>30%</b>.",
"r": "rare",
"i": "icons/IconAddon_bloodiedMud.png"
},
{
"n": "Bloodied Water",
"d": "<b>Decreases Phantasm Trap</b> trigger range by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_bloodiedWater.png"
},
{
"n": "Bog Water",
"d": "<b>Decreases Phantasm Trap</b> trigger range by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_bogWater.png"
},
{
"n": "Cracked Turtle Egg",
"d": "<b>Increases</b> triggered <b>Phantasm Trap</b> duration by <b>30%</b>.",
"r": "rare",
"i": "icons/IconAddon_crackedTurtleEgg.png"
},
{
"n": "Cypress Necklet",
"d": "<b>Increases Phantasm Trap</b> setting speed by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_cypressNecklet.png"
},
{
"n": "Dead Fly Mud",
"d": "<b>Increases</b> teleportation range by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_deadFlyMud.png"
},
{
"n": "Disfigured Ear",
"d": "Survivors who trigger a <b>Phantasm Trap</b> will be deafened for <b>6 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_disfiguredEar.png"
},
{
"n": "Dragonfly Wings",
"d": "<b>Increases</b> teleportation range by <b>12.5%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_dragonflyWings.png"
},
{
"n": "Dried Cicada",
"d": "<b>Increases</b> teleportation range by <b>15%</b>.",
"r": "rare",
"i": "icons/IconAddon_driedCicada.png"
},
{
"n": "Grandma's Heart",
"d": "<b>Decreases</b> Terror Radius to <b>0 meters</b> when a Survivor triggers a <b>Phantasm Trap</b>. <b>Increases</b> Mud Phantasms' Terror Radius by <b>16 meters</b>.",
"r": "veryrare",
"i": "icons/IconAddon_granmasHeart.png"
},
{
"n": "Half Eggshell",
"d": "<b>Increases</b> triggered <b>Phantasm Trap</b> duration by <b>25%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_halfEggshell.png"
},
{
"n": "Mint Rag",
"d": "<b>The Hag</b> can teleport to any <b>Phantasm Trap</b> in the level. <b>Phantasm Trap</b> teleport gains a cooldown of <b>10 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_mintRag.png"
},
{
"n": "Powdered Eggshell",
"d": "<b>Increases</b> triggered <b>Phantasm Trap</b> duration by <b>20%</b>.",
"r": "common",
"i": "icons/IconAddon_powderedEggshell.png"
},
{
"n": "Pussy Willow Catkins",
"d": "Reveals the Survivor's aura for <b>3 seconds</b> when they trigger a <b>Phantasm Trap</b>.",
"r": "uncommon",
"i": "icons/IconAddon_pussyWillowCatkins.png"
},
{
"n": "Rope Necklet",
"d": "<b>Increases Phantasm Trap</b> setting speed by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_ropeNecklet.png"
},
{
"n": "Rusty Shackles",
"d": "Triggered <b>Phantasm Traps</b> give no indication of being triggered to Survivors and do not spawn a Mud Phantasm.",
"r": "veryrare",
"i": "icons/IconAddon_rustyShackles.png"
},
{
"n": "Scarred Hand",
"d": "Mud Phantasms become solid and will block Survivors. Removes the ability to teleport to traps. Grants <b>300%</b> bonus Deviousness Bloodpoints.",
"r": "veryrare",
"i": "icons/IconAddon_scarredHand.png"
},
{
"n": "Swamp Orchid Necklet",
"d": "<b>Increases Phantasm Trap</b> setting speed by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_swampOrchidNecklet.png"
},
{
"n": "Waterlogged Shoe",
"d": "Survivors in the trigger zone of a triggered <b>Phantasm Trap</b> are <b>Hindered</b> by <b>9%</b>. <b>Increases</b> movement speed by <b>7.5%</b>. Removes the ability to teleport to traps.<br><br><b>Hindered</b> reduces Survivor movement speed.",
"r": "visceral",
"i": "icons/IconAddon_waterloggedShoe.png"
},
{
"n": "Willow Wreath",
"d": "Reveals the Survivor's aura for <b>5 seconds</b> when they trigger a <b>Phantasm Trap</b>.",
"r": "rare",
"i": "icons/IconAddon_willowWreath.png"
}
]
},
{
"n": "The Shape",
"i": "icons/K05_TheShape_Portrait.png",
"a": [
{
"n": "Blonde Hair",
"d": "Scratch marks and pools of blood last <b>100%</b> longer in <b>Stalker Mode</b>.",
"r": "common",
"i": "icons/IconAddon_blondHair.png"
},
{
"n": "Boyfriend's Memo",
"d": "<b>Increases</b> <b>Stalk</b> range by 8 meters.",
"r": "common",
"i": "icons/IconAddon_boyfriendsMemo.png"
},
{
"n": "Dead Rabbit",
"d": "<b>Decreases</b> Terror Radius in <b>Pursuer Mode</b> by <b>25%</b>. <b>Increases</b> Terror Radius in <b>Evil Incarnate</b> mode by <b>25%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_deadRabbit.png"
},
{
"n": "Fragrant Tuft of Hair",
"d": "In <b>Evil Incarnate Mode</b>:<br><br>Survivors are <b>Exposed</b>. Lunge range is increased by <b>50%</b>. <b>Slaughtering Strike</b> cannot be used.<br><br>Exposed survivors will be downed by basic attacks even if uninjured.",
"r": "uncommon",
"i": "icons/IconAddon_fragrantTuftOfHair.png"
},
{
"n": "Glass Fragment",
"d": "<b>Increases</b> the movement speed of <b>Slaughtering Strike</b> by <b>5%</b>. <b>Decreases</b> the charge speed of <b>Slaughtering Strike</b> by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_glassFragment.png"
},
{
"n": "Hair Bow",
"d": "<b>Increases</b> the duration of <b>Evil Incarnate</b> by <b>20 seconds</b>. <b>Decreases</b> the <b>Stalk Meter</b> fill rate by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_hairBow.png"
},
{
"n": "Hair Brush",
"d": "When <b>Evil Incarnate</b> activates, the next pallet break is <b>50%</b> faster.",
"r": "uncommon",
"i": "icons/IconAddon_hairBrush.png"
},
{
"n": "Jewelry",
"d": "<b>Increases</b> the <b>Stalk Meter</b> fill rate on stationary Survivors by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_jewellery.png"
},
{
"n": "Jewelry Box",
"d": "<b>Increases</b> the <b>Stalk Meter</b> fill rate by <b>30%</b>. <b>Decreases</b> stalk range by <b>16 meters</b>.",
"r": "rare",
"i": "icons/IconAddon_jewelleryBox.png"
},
{
"n": "J.Myers Memorial",
"d": "<b>Increases</b> pickup and hook speeds by <b>40%</b> in <b>Evil Incarnate Mode</b>.",
"r": "rare",
"i": "icons/IconAddon_jMyersMemorial.png"
},
{
"n": "Judith's Journal",
"d": "<b>Increases</b> the <b>Stalk Meter</b> fill rate on the Obsession by <b>40%</b>.",
"r": "rare",
"i": "icons/IconAddon_judithsJournal.png"
},
{
"n": "Judith's Tombstone",
"d": "Hooking a Survivor during <b>Evil Incarnate</b> refreshes its duration. Limits the duration of <b>Evil Incarnate</b> to <b>40 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_judithsTombstone.png"
},
{
"n": "Lock of Hair",
"d": "While <b>Evil Incarnate</b> is active, hold the <i>Ability button</i> to end it prematurely and retain <b>50%</b> of the remaining duration as <b>Stalk</b> progress.",
"r": "veryrare",
"i": "icons/IconAddon_lockOfHair.png"
},
{
"n": "Memorial Flower",
"d": "<b>Increases</b> movement speed in <b>Stalker Mode</b> to <b>4.4 m/s</b>.",
"r": "common",
"i": "icons/IconAddon_memorialFlower.png"
},
{
"n": "Mirror Shard",
"d": "<b>Increases</b> the base duration of <b>Slaughtering Strike</b> by <b>0.25 seconds</b>. <b>Decreases</b> the charge speed of <b>Slaughtering Strike</b> by <b>25%</b>.",
"r": "rare",
"i": "icons/IconAddon_mirrorShard.png"
},
{
"n": "Reflective Fragment",
"d": "Hitting a Survivor with <b>Slaughtering Strike</b> adds <b>20 seconds</b> to <b>Evil Incarnate</b>'s duration. <b>Slaughtering Strike</b> only deals a single health state of damage.",
"r": "veryrare",
"i": "icons/IconAddon_reflectiveFragment.png"
},
{
"n": "Scratched Mirror",
"d": "Reveal the auras of Survivors within <b>32 meters</b> while stalking. Cannot leave <b>Stalker Mode</b>. Score events for hits grant <b>100%</b> more Brutality and <b>200%</b> more Deviousness Bloodpoints.",
"r": "visceral",
"i": "icons/IconAddon_scratchedMirror.png"
},
{
"n": "Tacky Earrings",
"d": "<b>Increases</b> movement speed while stalking by <b>20%</b>.",
"r": "common",
"i": "icons/IconAddon_tackyEarrings.png"
},
{
"n": "Tombstone Piece",
"d": "When <b>Evil Incarnate</b> activates, you become <b>Undetectable</b> for <b>20 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_tombstonePiece.png"
},
{
"n": "Vanity Mirror",
"d": "When <b>Evil Incarnate</b> ends, you see the auras of all Survivors for <b>4 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_vanityMirror.png"
}
]
},
{
"n": "The Doctor",
"i": "icons/K07_TheDoctor_Portrait.png",
"a": [
{
"n": "\"Calm\" - Class I",
"d": "<b>Increases Terror Radius</b> by <b>4 meters</b> while <b>Static Blast</b> is ready. <b>Decreases Terror Radius</b> by <b>4 meters</b> while <b>Static Blast</b> is on cooldown.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Calm</i>:<br><br><b>Madness II</b>: Intermittently causes Survivors to hear a distant <i>illusionary Terror Radius</i>. <b>Madness III</b>: Constantly causes Survivors to hear a distant <i>illusionary Terror Radius</i>.",
"r": "common",
"i": "icons/IconAddon_calmClassI.png"
},
{
"n": "\"Calm\" - Class II",
"d": "<b>Increases Terror Radius</b> by <b>6 meters</b> while <b>Static Blast</b> is ready. <b>Decreases Terror Radius</b> by <b>6 meters</b> while <b>Static Blast</b> is on cooldown.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Calm</i>:<br><br><b>Madness II</b>: Intermittently causes Survivors to hear a distant <i>illusionary Terror Radius</i>. <b>Madness III</b>: Constantly causes Survivors to hear a distant <i>illusionary Terror Radius</i>.",
"r": "uncommon",
"i": "icons/IconAddon_calmClassII.png"
},
{
"n": "\"Calm\" - Carter's Notes",
"d": "<b>Increases Terror Radius</b> by <b>8 meters</b> while <b>Static Blast</b> is ready. <b>Decreases Terror Radius</b> by <b>8 meters</b> while <b>Static Blast</b> is on cooldown.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Calm</i>:<br><br><b>Madness II</b>: Intermittently causes Survivors to hear a distant <i>illusionary Terror Radius</i>. <b>Madness III</b>: Constantly causes Survivors to hear a distant <i>illusionary Terror Radius</i>.",
"r": "veryrare",
"i": "icons/IconAddon_calmCartersNotes.png"
},
{
"n": "\"Discipline\" - Class II",
"d": "<b>Decreases</b> the detonation delay of <b>Shock Therapy</b> by <b>0.06 seconds</b>.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Discipline</i>:<br><br><b>Madness II</b>: While in a chase, Survivors perceive an <i>illusionary Red Stain</i> and <i>Terror Radius</i> as though <b>The Doctor</b> were directly behind them. This effect persists for <b>6 seconds</b> after the chase ends. <b>Madness III</b>: <i>Illusionary Red Stain</i> and <i>Terror Radius</i> are constantly active. <b>The Doctor</b> also sees the <i>illusionary Red Stain</i>.",
"r": "uncommon",
"i": "icons/IconAddon_disciplineClassII.png"
},
{
"n": "\"Discipline\" - Class III",
"d": "<b>Decreases</b> the detonation delay of <b>Shock Therapy</b> by <b>0.08 seconds</b>.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Discipline</i>:<br><br><b>Madness II</b>: While in a chase, Survivors perceive an <i>illusionary Red Stain</i> and <i>Terror Radius</i> as though <b>The Doctor</b> were directly behind them. This effect persists for <b>6 seconds</b> after the chase ends. <b>Madness III</b>: <i>Illusionary Red Stain</i> and <i>Terror Radius</i> are constantly active. <b>The Doctor</b> also sees the <i>illusionary Red Stain</i>.",
"r": "rare",
"i": "icons/IconAddon_disciplineClassIII.png"
},
{
"n": "\"Discipline\" - Carter's Notes",
"d": "<b>Decreases</b> the detonation delay of <b>Shock Therapy</b> by <b>0.1 seconds</b>.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Discipline</i>:<br><br><b>Madness II</b>: While in a chase, Survivors perceive an <i>illusionary Red Stain</i> and <i>Terror Radius</i> as though <b>The Doctor</b> were directly behind them. This effect persists for <b>6 seconds</b> after the chase ends. <b>Madness III</b>: <i>Illusionary Red Stain</i> and <i>Terror Radius</i> are constantly active. <b>The Doctor</b> also sees the <i>illusionary Red Stain</i>.",
"r": "veryrare",
"i": "icons/IconAddon_disciplineCartersNotes.png"
},
{
"n": "High Stimulus Electrode",
"d": "<b>Increases</b> the range of <b>Shock Therapy</b> by <b>4 meters</b>.",
"r": "rare",
"i": "icons/IconAddon_highStimulusElectrode.png"
},
{
"n": "Iridescent King",
"d": "Survivors with <b>Madness</b> status effect suffer from the following <i>Afflictions: Calm, Discipline, Order,</i> and <i>Restraint</i>. Causes Survivors to hear a distant <i>illusionary Terror Radius</i>. The effect is intermittent in <b>Madness II</b> and constant in <b>Madness III</b>. While in a chase, Survivors perceive an <i>illusionary Red Stain</i> and <i>Terror Radiu</i>s as though <b>The Doctor</b> were directly behind them. This effect persists for <b>6 seconds</b> after the chase ends in <b>Madness II</b> and is constantly active in <b>Madness III</b>. Broken pallets may appear to be replaced with <i>illusionary pallets</i> that persist until approached. A new <i>illusionary pallets</i> is generated at the location of a random broken pallet every <b>20 seconds</b>. <b>Increases</b> the duration of <i>illusionary Doctor hallucinations</i> by <b>6 seconds</b>. <b>The Doctor</b> sees <i>illusionary Red Stains</i> as well as the auras of <i>illusionary Doctors and illusionary pallets</i>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentKing.png"
},
{
"n": "Iridescent Queen",
"d": "All Survivors struck by <b>Shock Therapy</b> or <b>Static Blast</b> acquire a lingering Static Charge. The Static Charge remains with The Survivor(s) until <i>discharged</i>. Multiple Survivors struck by the same <b>Shock Therapy</b> or <b>Static Blast</b> that are within <b>4 meters</b> of each other do not acquire a Static Charge. Any time a Survivor is within <b>4 meters</b> of another Survivor carrying a Static Charge, the Survivor receives a shock identical to Shock Therapy and the Static Charge is discharged immediately.",
"r": "visceral",
"i": "icons/IconAddon_iridescentQueen.png"
},
{
"n": "Moldy Electrode",
"d": "<b>Increases</b> the range of <b>Shock Therapy</b> by <b>2 meters</b>.",
"r": "common",
"i": "icons/IconAddon_mouldyElectrode.png"
},
{
"n": "Maple Knight",
"d": "Reveals the area of effect of <b>Shock Therapy</b>.",
"r": "common",
"i": "icons/IconAddon_mapleKnight.png"
},
{
"n": "Scrapped Tape",
"d": "Changes the shape of <b>Shock Therapy</b> to a ring with a range of <b>8 meters</b>, a radius of <b>4 meters</b>, and a thickness of <b>1 meter</b>.",
"r": "rare",
"i": "icons/IconAddon_scrappedTape.png"
},
{
"n": "\"Order\" - Class I",
"d": "<b>Decreases Static Blast</b> cooldown by <b>2 seconds</b>.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Order</i>:<br><br>Broken pallets may appear to be replaced with illusionary pallets that persist until approached. A new illusionary pallet is generated at the location of a random broken pallet every <b>20 seconds</b>. <b>The Doctor</b> sees the auras of illusionary pallets.",
"r": "common",
"i": "icons/IconAddon_orderClassI.png"
},
{
"n": "\"Order\" - Class II",
"d": "<b>Decreases Static Blast</b> cooldown by <b>2.5 seconds</b>.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Order</i>:<br><br>Broken pallets may appear to be replaced with illusionary pallets that persist until approached. A new illusionary pallet is generated at the location of a random broken pallet every <b>20 seconds</b>. <b>The Doctor</b> sees the auras of illusionary pallets.",
"r": "uncommon",
"i": "icons/IconAddon_orderClassII.png"
},
{
"n": "\"Order\" - Carter's Notes",
"d": "<b>Decreases Static Blast</b> cooldown by <b>3 seconds</b>.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Order</i>:<br><br>Broken pallets may appear to be replaced with illusionary pallets that persist until approached. A new illusionary pallet is generated at the location of a random broken pallet every <b>20 seconds</b>. <b>The Doctor</b> sees the auras of illusionary pallets.",
"r": "veryrare",
"i": "icons/IconAddon_orderCartersNotes.png"
},
{
"n": "Polished Electrode",
"d": "<b>Increases</b> the range of <b>Shock Therapy</b> by <b>3 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_polishedElectrode.png"
},
{
"n": "\"Restraint\" - Class II",
"d": "Reveals Survivors' auras for <b>1 second</b> when their <b>Madness</b> level increases.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Restraint</i>:<br><br><b>Increases</b> the duration of <i>illusionary Doctor hallucinations</i> by <b>6 seconds</b>. Allows <b>The Doctor</b> to see the auras of hallucinations at any level of <b>Madness</b>.",
"r": "uncommon",
"i": "icons/IconAddon_restraintClassII.png"
},
{
"n": "\"Restraint\" - Class III",
"d": "Reveals Survivors' auras for <b>2 seconds</b> when their <b>Madness</b> level increases.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Restraint</i>:<br><br><b>Increases</b> the duration of <i>illusionary Doctor hallucinations</i> by <b>6 seconds</b>. Allows <b>The Doctor</b> to see the auras of hallucinations at any level of <b>Madness</b>.",
"r": "rare",
"i": "icons/IconAddon_restraintClassIII.png"
},
{
"n": "\"Restraint\" - Carter's Notes",
"d": "Reveals Survivors' auras for <b>3 seconds</b> when their <b>Madness</b> level increases.<br><br>Survivors with <b>Madness</b> suffer from the <i>Affliction of Restraint</i>:<br><br><b>Increases</b> the duration of <i>illusionary Doctor hallucinations</i> by <b>6 seconds</b>. Allows <b>The Doctor</b> to see the auras of hallucinations at any level of <b>Madness</b>.",
"r": "veryrare",
"i": "icons/IconAddon_restraintCartersNotes.png"
},
{
"n": "Interview Tape",
"d": "<b>Shock Therapy</b> <i>special ability</i> changes from a cone to a beam with a <b>24 meter</b> range and a <b>2 meter</b> width.",
"r": "rare",
"i": "icons/IconAddon_interviewTape.png"
}
]
},
{
"n": "The Huntress",
"i": "icons/K08_TheHuntress_Portrait.png",
"a": [
{
"n": "Amanita Toxin",
"d": "Hatchets inflict <b>Blindness</b> for <b>60 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "common",
"i": "icons/IconAddon_amanitaToxin.png"
},
{
"n": "Bandaged Haft",
"d": "<b>Decreases</b> Hatchet throw cooldown by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_bandagedHaft.png"
},
{
"n": "Begrimed Head",
"d": "Hit target suffers from the <b>Mangled</b> and <b>Hemorrhage</b> status effects for <b>80 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "veryrare",
"i": "icons/IconAddon_begrimedHead.png"
},
{
"n": "Yellowed Cloth",
"d": "<b>Increases</b> thrown hatchet speed by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_yellowedCloth.png"
},
{
"n": "Coarse Stone",
"d": "Hitting a target increases the volume of their grunts of pain by <b>50%</b> until healed.",
"r": "common",
"i": "icons/IconAddon_coarseStone.png"
},
{
"n": "Deerskin Gloves",
"d": "<b>Decreases</b> time required to reload Hatchets at a locker by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_deerskinGloves.png"
},
{
"n": "Weighted Head",
"d": "Hatchets inflict <b>Incapacitated</b> for <b>10 seconds</b>.<br><br>Incapacitated prevents Survivors from healing, repairing, sabotaging, cleansing, blessing, mending, or using items.",
"r": "uncommon",
"i": "icons/IconAddon_weightedHead.png"
},
{
"n": "Flower Babushka",
"d": "<b>Decreases</b> time required to wind up a Hatchet throw by <b>10%</b>.",
"r": "rare",
"i": "icons/IconAddon_flowerBabushka.png"
},
{
"n": "Glowing Concoction",
"d": "Reveals the auras of Survivors hit by Hatchets for <b>5 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_glowingConcoction.png"
},
{
"n": "Infantry Belt",
"d": "Hatchet hits grant <b>3% Haste</b> for <b>5 seconds</b>.<br><br>Haste increases Killer movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_infantryBelt.png"
},
{
"n": "Iridescent Head",
"d": "Successful Hatchet hits immediately put healthy Survivors into the dying state. Sets maximum number of carried Hatchets to <b>1</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentHead.png"
},
{
"n": "Leather Loop",
"d": "Hatchet hits grant <b>2% Haste</b> for <b>5 seconds</b>.<br><br>Haste increases Killer movement speed.",
"r": "uncommon",
"i": "icons/IconAddon_leatherLoop.png"
},
{
"n": "Manna Grass Braid",
"d": "<b>Decreases</b> time required to wind up a Hatchet throw by <b>5%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_mannaGrassBraid.png"
},
{
"n": "Oak Haft",
"d": "<b>Decreases</b> Hatchet throw cooldown by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_oakHaft.png"
},
{
"n": "Soldier's Puttee",
"d": "The Huntress moves <b>4.6 m/s</b> when she has no Hatchets.",
"r": "visceral",
"i": "icons/IconAddon_soldiersPuttee.png"
},
{
"n": "Rusty Head",
"d": "Hatchets inflict <b>Mangled</b> for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_rustyHead.png"
},
{
"n": "Shiny Pin",
"d": "<b>Increases The Huntress'</b> movement speed by <b>5%</b> while aiming or throwing a Hatchet.",
"r": "uncommon",
"i": "icons/IconAddon_shinyPin.png"
},
{
"n": "Venomous Concoction",
"d": "<b>Hatchets</b> inflict <b>Exhausted</b> for <b>5 seconds</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/IconAddon_venomousConcoction.png"
},
{
"n": "Wooden Fox",
"d": "Grants <b>Undetectable</b> for <b>30 seconds</b> after reloading.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_woodenFox.png"
},
{
"n": "Rose Root",
"d": "<b>Increases</b> thrown Hatchet speed by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_roseRoot.png"
}
]
},
{
"n": "The Cannibal",
"i": "icons/K09_TheCannibal_Portrait.png",
"a": [
{
"n": "Award-Winning Chili",
"d": "<b>Increases</b> maximum <b>Chainsaw Sweep</b> duration by <b>0.2 seconds</b> per charge spent.",
"r": "veryrare",
"i": "icons/IconAddon_award-winningChilli.png"
},
{
"n": "The Beast's Marks",
"d": "<b>Increases Chainsaw Sweep</b> movement speed by <b>2%</b>. <b>Increases</b> time required to charge the Chainsaw by <b>12%</b>.",
"r": "rare",
"i": "icons/IconAddon_theBeastsMarks.png"
},
{
"n": "Begrimed Chains",
"d": "Chainsaw hits cause Survivors to drop their items.",
"r": "rare",
"i": "icons/IconAddon_begrimedChains.png"
},
{
"n": "Carburetor Tuning Guide",
"d": "Automatically consume all charges when triggering a <b>Chainsaw Sweep</b>. <b>Increases Chainsaw Sweep</b> duration by <b>0.5 seconds</b>. <b>Decreases Chainsaw Sweep</b> movement speed by <b>2%</b>.",
"r": "visceral",
"i": "icons/IconAddon_carburettorTuningGuide.png"
},
{
"n": "Chainsaw File",
"d": "<b>Decreases</b> tantrum duration by <b>0.25 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_chainsawFile.png"
},
{
"n": "Chili",
"d": "<b>Increases</b> maximum <b>Chainsaw Sweep</b> duration by <b>0.15 seconds</b> per charge spent.",
"r": "uncommon",
"i": "icons/IconAddon_chilli.png"
},
{
"n": "Depth Gauge Rake",
"d": "Grants <b>1</b> additional Chainsaw charge. <b>Increases</b> time required to charge the Chainsaw by <b>22%</b>. <b>Decreases</b> <b>Chainsaw Sweep</b> movement speed by <b>2%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_depthGaugeRake.png"
},
{
"n": "Grisly Chain",
"d": "Chainsaw hits inflict <b>Mangled</b> for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_grislyChains.png"
},
{
"n": "Homemade Muffler",
"d": "<b>Decreases</b> tantrum duration by <b>0.5 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_homemadeMuffler.png"
},
{
"n": "Iridescent Flesh",
"d": "Hitting a Survivor with the Chainsaw replenishes its charges. Limits the maximum tantrum duration to <b>3 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentFlesh.png"
},
{
"n": "Knife Scratches",
"d": "<b>Increases Chainsaw Sweep</b> movement speed by <b>1.5%</b>. <b>Increases</b> time required to charge the Chainsaw by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_knifeScratches.png"
},
{
"n": "Light Chassis",
"d": "While revving, see the auras of Survivors within <b>8 meters</b>.",
"r": "veryrare",
"i": "icons/IconAddon_lightChassis.png"
},
{
"n": "Long Guide Bar",
"d": "<b>Increases</b> the time the Chainsaw can be revved before triggering a tantrum by <b>2 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_longGuideBar.png"
},
{
"n": "Primer Bulb",
"d": "<b>Decreases</b> time required to replenish a charge by <b>1 second</b>.",
"r": "uncommon",
"i": "icons/IconAddon_primerBulb.png"
},
{
"n": "Rusted Chain",
"d": "Chainsaw hits inflict <b>Broken</b> for <b>90 seconds</b>.<br><br>Broken prevents Survivors from being healed.",
"r": "veryrare",
"i": "icons/IconAddon_rustedChains.png"
},
{
"n": "Shop Lubricant",
"d": "Downing a Survivor with the Chainsaw while no other Survivors are in your Terror Radius will hide the Survivor's aura for <b>20 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_shopLubricant.png"
},
{
"n": "Spark Plug",
"d": "<b>Decreases</b> time required to replenish a charge by <b>0.5 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_sparkPlug.png"
},
{
"n": "Speed Limiter",
"d": "Chainsaw does not automatically trigger dying state. Get <b>100%</b> more Bloodpoints for Chainsaw Hit score events.",
"r": "common",
"i": "icons/IconAddon_speedLimiter.png"
},
{
"n": "The Grease",
"d": "<b>Increases</b> the time the Chainsaw can be revved before triggering a tantrum by <b>3 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_theGrease.png"
},
{
"n": "Vegetable Oil",
"d": "<b>Decreases</b> Chainsaw cooldown by <b>0.3 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_vegetableOil.png"
}
]
},
{
"n": "The Nightmare",
"i": "icons/K10_TheNightmare_Portrait.png",
"a": [
{
"n": "Black Box",
"d": "When an Exit Gate is opened, it is blocked for Sleeping Survivors for <b>15 seconds</b>. This lingers for <b>3 seconds</b> after they are woken up by any means.",
"r": "visceral",
"i": "icons/IconAddon_blackBox.png"
},
{
"n": "Blue Dress",
"d": "Dream Snare no longer moves. Dream Snare remains active for <b>8 seconds</b>. Only <b>1</b> Dream Snare can be placed at a time.",
"r": "rare",
"i": "icons/IconAddon_blueDress.png"
},
{
"n": "Cat Block",
"d": "<b>Decreases</b> Dream Projection's cooldown by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_catBlock.png"
},
{
"n": "Class Photo",
"d": "Survivors in the Dream World are revealed with Killer Instinct while opening Exit Gates. Grants the ability to teleport to Exit Gates.",
"r": "veryrare",
"i": "icons/IconAddon_classPhoto.png"
},
{
"n": "Garden Rake",
"d": "<b>Increases</b> the size of the Dream Snare by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_gardenRake.png"
},
{
"n": "Green Dress",
"d": "<b>Increases</b> the time it takes for Survivors to perform the Wake Up action by <b>2 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_greenDress.png"
},
{
"n": "Jump Rope",
"d": "<b>Increases</b> duration of <b>Hindered</b> when a Survivor is hit with a Dream Snare by <b>11%</b>.<br><br>Hindered reduces Survivor movement speed.",
"r": "rare",
"i": "icons/IconAddon_jumpRopeDreamDemon.png"
},
{
"n": "Kid's Drawing",
"d": "An unattributed drawing clearly crafted by a young child. <b>Increases</b> the amount of Sleep gained from attacking with Dream Abilities by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_kidsDrawing.png"
},
{
"n": "Nancy's Masterpiece",
"d": "<b>Decreases</b> Dream Projection's total cooldown by <b>10%</b> after hitting a Survivor with a Dream Snare or Dream Pallet.",
"r": "rare",
"i": "icons/IconAddon_nancysMasterpiece.png"
},
{
"n": "Nancy's Sketch",
"d": "<b>Decreases</b> Sleep immunity after a Survivor uses an alarm clock by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_nancysSketch.png"
},
{
"n": "Paint Thinner",
"d": "When a Survivor drops a Dream Pallet, they are revealed with Killer Instinct for <b>6 seconds</b>. Unlocks the ability to use Dream Projection on that Survivor while they are revealed. Increases this Dream Projection's charge speed by 100%.",
"r": "rare",
"i": "icons/IconAddon_paintThinner.png"
},
{
"n": "Pill Bottle",
"d": "Each time a Survivor wakes up, their Sleep Meter fills <b>10%</b> faster, up to a maximum of 50%.",
"r": "veryrare",
"i": "icons/IconAddon_pillBottle.png"
},
{
"n": "Prototype Claws",
"d": "<b>Decreases</b> the charge time to release a Dream Snare by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_prototypeClaws.png"
},
{
"n": "Red Paint Brush",
"d": "Reveals the aura of Survivors in the Dream World when they are further than 32 meters away. Increases each Survivor's Sleep Meter by 50%.",
"r": "visceral",
"i": "icons/IconAddon_redPaintBrush.png"
},
{
"n": "Outdoor Rope",
"d": "While Survivors are in the Dream World:<br><br><b>Increases</b> the speed at which the Dream Snare travels by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_outdoorRope.png"
},
{
"n": "Sheep Block",
"d": "A white and blue wooden block depicting two wooly lamb grazing and the letter \"S\". <b>Increases</b> the Alarm Clocks' cooldown by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_sheepBlock.png"
},
{
"n": "Swing Chains",
"d": "After using Dream Projection, block all window vaults within <b>16 meters</b> for <b>6 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_swingChains.png"
},
{
"n": "Unicorn Block",
"d": "<b>Increases</b> the Dream Pallets' rupture radius by <b>14%</b>.",
"r": "rare",
"i": "icons/IconAddon_unicornBlock.png"
},
{
"n": "Wool Shirt",
"d": "<b>Decreases</b> the delay before Dream Pallets rupture by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_woolShirt.png"
},
{
"n": "\"Z\" Block",
"d": "Survivors hit with a Dream Snare or Dream Pallet are revealed for <b>3 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_zBlock.png"
}
]
},
{
"n": "The Pig",
"i": "icons/K11_ThePig_Portrait.png",
"a": [
{
"n": "Amanda's Letter",
"d": "While crouched, reveals auras of Survivors within <b>16 meters</b>. <b>Decreases</b> available Reverse Bear Traps by <b>2</b>.",
"r": "visceral",
"i": "icons/IconAddon_amandasLetter.png"
},
{
"n": "Amanda's Secret",
"d": "Gain a notification when a Survivor removes a Reverse Bear Trap. Auras of Survivors removing a Reverse Bear Trap are revealed to you for <b>6 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_amandasSecret.png"
},
{
"n": "Bag of Gears",
"d": "<b>Increases</b> Reverse Bear Trap setting speed by <b>50%</b>. <b>Increases</b> time required to search a Jigsaw Box by <b>17%</b>.",
"r": "rare",
"i": "icons/IconAddon_bagOfGears.png"
},
{
"n": "Combat Straps",
"d": "<b>Increases</b> crouching and uncrouching speed by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_combatStraps.png"
},
{
"n": "Crate of Gears",
"d": "<b>Increases</b> Reverse Bear Trap setting speed by <b>50%</b>. <b>Increases</b> time required to search a Jigsaw Box by <b>33%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_crateOfGears.png"
},
{
"n": "Face Mask",
"d": "Reverse Bear Traps inflict <b>Blindness</b> until removed. Does not affect the Jigsaw Box aura.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "uncommon",
"i": "icons/IconAddon_faceMask.png"
},
{
"n": "Interlocking Razor",
"d": "Failing a Jigsaw Box skill check while injured will inflict <b>Deep Wound</b> on Survivor.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
"r": "common",
"i": "icons/IconAddon_interlockingRazor.png"
},
{
"n": "Jigsaw's Annotated Plan",
"d": "<b>Increases</b> available Reverse Bear Traps by <b>1</b>. <b>Increases</b> Reverse Bear Trap death timer by <b>10 seconds</b>. Whenever a generator is completed, <b>10 seconds</b> is removed from the death timer of all active Reverse Bear Traps.",
"r": "rare",
"i": "icons/IconAddon_jigsawsAnnotatedPlan.png"
},
{
"n": "Jigsaw's Sketch",
"d": "<b>Increases</b> available Reverse Bear Traps by <b>1</b>. When a Survivor with a Reverse Bear Trap is working on a Generator, that Generator's Aura is revealed to you.",
"r": "veryrare",
"i": "icons/IconAddon_jigsawsSketch.png"
},
{
"n": "John's Medical File",
"d": "<b>Increases</b> crouched move speed by <b>5%</b>.",
"r": "common",
"i": "icons/IconAddon_johnsMedicalFile.png"
},
{
"n": "Last Will",
"d": "<b>Increases Ambush</b> attack movement speed by <b>5%</b>. <b>Increases</b> time to charge <b>Ambush</b> attack by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_lastWill.png"
},
{
"n": "Razor Wires",
"d": "Jigsaw Box skill check success zones are smaller. Failing a Jigsaw Box skill check while uninjured will injure the Survivor.",
"r": "uncommon",
"i": "icons/IconAddon_razorWires.png"
},
{
"n": "Rule Set No.2",
"d": "<b>Disables</b> the Survivors' ability to see Jigsaw Boxes highlighted until their Trap is activated.",
"r": "rare",
"i": "icons/IconAddon_rulesSetNo.2.png"
},
{
"n": "Rusty Attachments",
"d": "Reverse Bear Traps inflict <b>Mangled</b> for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_rustyAttachments.png"
},
{
"n": "Shattered Syringe",
"d": "<b>Decreases Ambush</b> attack miss cooldown by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_shatteredSyringe.png"
},
{
"n": "Slow-Release Toxin",
"d": "Reverse Bear Traps inflict <b>Exhausted</b> until removed.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/IconAddon_slow-ReleaseToxin.png"
},
{
"n": "Tampered Timer",
"d": "<b>Decreases</b> the Reverse Bear Trap death timer by <b>20 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_tamperedTimer.png"
},
{
"n": "Utility Blades",
"d": "Reverse Bear Traps inflict <b>Hemorrhage</b> every time the Survivor is injured by any means.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until healed.",
"r": "uncommon",
"i": "icons/IconAddon_utilityBlades.png"
},
{
"n": "Video Tape",
"d": "Survivors begin the trial with Reverse Bear Traps installed.",
"r": "visceral",
"i": "icons/IconAddon_videoTape.png"
},
{
"n": "Workshop Grease",
"d": "<b>Increases Ambush</b> attack charge speed by <b>50%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_workshopGrease.png"
}
]
},
{
"n": "The Clown",
"i": "icons/K12_TheClown_Portrait.png",
"a": [
{
"n": "Robin Feather",
"d": "<b>Decreases</b> bottle throw cooldown by <b>40%</b>.",
"r": "common",
"i": "icons/IconAddon_robinFeather.png"
},
{
"n": "Party Bottle",
"d": "<b>Party Bottles</b> emit confetti when they break, in addition to their usual gas effect. Hitting a Survivor directly with a <b>Party Bottle</b> interrupts actions as usual, and awards <b>100 Devious Bloodpoints</b>.",
"r": "common",
"i": "icons/IconAddon_partyBottle.png"
},
{
"n": "Smelly Inner Soles",
"d": "<b>Increases</b> movement speed while reloading bottles by <b>15%</b>.",
"r": "rare",
"i": "icons/IconAddon_smellyInnerSoles.png"
},
{
"n": "Fingerless Parade Gloves",
"d": "<b>Increases</b> bottle throw speed by <b>25%</b>. <b>Decreases</b> bottle throw angle by <b>15 degrees</b>.",
"r": "common",
"i": "icons/IconAddon_fingerlessParadeGloves.png"
},
{
"n": "Thick Cork Stopper",
"d": "<b>Decreases</b> reload time by <b>0.5 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_thickCorkStopper.png"
},
{
"n": "Solvent Jug",
"d": "<b>Increases</b> duration of Invigoration by <b>1 second</b>.",
"r": "uncommon",
"i": "icons/IconAddon_solventJug.png"
},
{
"n": "Kerosene Can",
"d": "Intoxication inflicts <b>Blindness</b> for <b>30 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "uncommon",
"i": "icons/IconAddon_keroseneCan.png"
},
{
"n": "Sticky Soda Bottle",
"d": "<b>Increases</b> The Clown's Invigoration by <b>2%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_stickySodaBottle.png"
},
{
"n": "Starling Feather",
"d": "<b>Decreases</b> bottle throw cooldown by <b>50%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_starlingFeather.png"
},
{
"n": "VHS Porn",
"d": "<b>Increases</b> the size and spread of <b>Afterpiece Tonic</b> gas clouds by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_vhsPorn.png"
},
{
"n": "Spirit of Hartshorn",
"d": "<b>Increases</b> the size and spread of <b>Afterpiece Antidote</b> gas clouds by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_spiritOfHartshorn.png"
},
{
"n": "Sulfuric Acid Vial",
"d": "Intoxication inflicts <b>Mangled</b> on injured Survivors for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_sulphuricAcidVial.png"
},
{
"n": "Flask of Bleach",
"d": "<b>Increases</b> the <b>Hindered</b> penalty from Intoxication by an additional <b>2%</b>.<br><br>Hindered reduces Survivor movement speed.",
"r": "rare",
"i": "icons/IconAddon_flaskOfBleach.png"
},
{
"n": "Bottle of Chloroform",
"d": "<b>Increases</b> the size and spread of <b>Afterpiece Tonic</b> gas clouds by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_bottleOfChloroform.png"
},
{
"n": "Garish Makeup Kit",
"d": "<b>Increases</b> the duration of Invigoration by <b>2 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_garishMake-UpKit.png"
},
{
"n": "Cheap Gin Bottle",
"d": "<b>Increases</b> The Clown's Invigoration by <b>3%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_cheapGinBottle.png"
},
{
"n": "Ether 15 vol%",
"d": "<b>Increases</b> the duration of Intoxication by <b>0.5 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_ether15Vol.png"
},
{
"n": "Cigar Box",
"d": "While <b>The Clown</b> or a Survivor is Invigorated, they see all other Survivor and Killer auras within 6 meters.",
"r": "veryrare",
"i": "icons/IconAddon_cigarBox.png"
},
{
"n": "Tattoo's Middle Finger",
"d": "Auras of Intoxicated or Invigorated Survivors are revealed to you for <b>6 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_tattoosMiddleFinger.png"
},
{
"n": "Redhead's Pinky Finger",
"d": "Direct hits by a bottle of <b>Afterpiece Tonic</b> inflict <b>Exposed</b> until Intoxication ends. Sets maximum number of carried bottles to <b>1</b>.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
"r": "visceral",
"i": "icons/IconAddon_redheadsPinkieFinger.png"
}
]
},
{
"n": "The Spirit",
"i": "icons/K13_TheSpirit_Portrait.png",
"a": [
{
"n": "Mother's Glasses",
"d": "Survivors trigger Killer Instinct when they come within <b>2 meters</b> of the husk.",
"r": "rare",
"i": "icons/IconAddon_mothersGlasses.png"
},
{
"n": "Uchiwa",
"d": "Instantly recharges <b>Yamaoka's Haunting</b> when stunned by a pallet.",
"r": "rare",
"i": "icons/IconAddon_uchiwa.png"
},
{
"n": "Dried Cherry Blossom",
"d": "Survivors trigger Killer Instinct when they come within <b>3 meters</b> of <b>The Spirit</b> while she is phasing. Scratch marks are no longer visible while using <b>Yamaoka’s Haunting</b>.",
"r": "veryrare",
"i": "icons/IconAddon_driedCherryBlossom.png"
},
{
"n": "Kintsugi Teacup",
"d": "Whenever you basic-break Pallets or Breakable Walls, instantly recharge <b>Yamaoka's Haunting</b>.",
"r": "visceral",
"i": "icons/IconAddon_kintsugiTeacup.png"
},
{
"n": "Gifted Bamboo Comb",
"d": "<b>Increases Yamaoka's Haunting</b> charge speed by <b>15%</b>.",
"r": "common",
"i": "icons/IconAddon_giftedBambooComb.png"
},
{
"n": "Juniper Bonsai",
"d": "<b>Increases</b> Passive Phasing frequency by <b>20%</b>. <b>Increases</b> Passive Phasing duration by <b>50%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_juniperBonsai.png"
},
{
"n": "Kaiun Talisman",
"d": "<b>Increases Yamaoka's Haunting</b> duration by <b>25%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_kaiunTalisman.png"
},
{
"n": "Katana Tsuba",
"d": "<b>Increases Yamaoka's Haunting</b> reappearance duration by <b>20%</b>. <b>Increases Yamaoka's Haunting</b> reappearance movement speed by <b>5%</b>.",
"r": "rare",
"i": "icons/IconAddon_katanaTsuba.png"
},
{
"n": "Senko Hanabi",
"d": "When <b>Yamaoka's Haunting</b> ends, <b>The Spirit</b>'s husk explodes and any vault locations within <b>4 meters</b> are blocked for <b>5 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_senkoHanabi.png"
},
{
"n": "Mother-Daughter Ring",
"d": "<b>Increases Yamaoka's Haunting</b> movement speed by <b>25%</b>. Scratch marks are no longer visible while using <b>Yamaoka’s Haunting</b>.",
"r": "visceral",
"i": "icons/IconAddon_mother-DaughterRing.png"
},
{
"n": "Muddy Sports Day Cap",
"d": "<b>Increases Yamaoka's Haunting</b> movement speed by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_muddySportsDayCap.png"
},
{
"n": "Origami Crane",
"d": "<b>Increases Yamaoka's Haunting</b> recharge rate by <b>20%</b>.",
"r": "common",
"i": "icons/IconAddon_origamiCrane.png"
},
{
"n": "Furin",
"d": "The phasing sound is heard by all Survivors.",
"r": "veryrare",
"i": "icons/IconAddon_furin.png"
},
{
"n": "Rin's Broken Watch",
"d": "<b>Increases Yamaoka's Haunting</b> recharge rate by <b>30%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_rinsBrokenWatch.png"
},
{
"n": "Rusty Flute",
"d": "<b>Increases Yamaoka's Haunting</b> recharge rate by <b>40%</b>.",
"r": "rare",
"i": "icons/IconAddon_rustyFlute.png"
},
{
"n": "Shiawase Amulet",
"d": "<b>Increases Yamaoka's Haunting</b> duration by <b>15%</b>.",
"r": "common",
"i": "icons/IconAddon_shiawaseAmulet.png"
},
{
"n": "Wakizashi Saya",
"d": "<b>During Yamaoka's Haunting</b>, use the <i>Active Ability Button</i> to return to the husk and end the haunting.",
"r": "veryrare",
"i": "icons/IconAddon_wakizashiSaya.png"
},
{
"n": "White Hair Ribbon",
"d": "<b>Increases Yamaoka's Haunting</b> charge speed by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_whiteHairRibbon.png"
},
{
"n": "Yakuyoke Amulet",
"d": "<b>Increases Yamaoka's Haunting</b> duration by <b>70%</b>. <b>Decreases Yamaoka's Haunting</b> movement speed by <b>15%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_yakuyokeAmulet.png"
},
{
"n": "Zōri",
"d": "<b>Increases Yamaoka's Haunting</b> movement speed by <b>5%</b>.",
"r": "common",
"i": "icons/IconAddon_zori.png"
}
]
},
{
"n": "The Legion",
"i": "icons/K14_TheLegion_Portrait.png",
"a": [
{
"n": "BFFs",
"d": "Earn tokens for hitting Survivors during <b>Feral Frenzy</b>:Second chained hit: <b>2 tokens</b>Third chained hit: <b>3 tokens</b>Fourth chained hit: <b>4 tokens</b>Fifth chained hit: <b>5 tokens</b><br><br>Once the gates are powered, if <b>15 or more tokens</b> have been collected, gain <b>6% Haste</b> when not using <b>Feral Frenzy</b>.<br><br>Haste increases Killer movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_bffs.png"
},
{
"n": "Defaced Smiley Pin",
"d": "Survivors who self-mend a Deep Wound from <b>Feral Frenzy</b> are inflicted with <b>Mangled</b> for <b>60 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "uncommon",
"i": "icons/IconAddon_defacedSmileyPin.png"
},
{
"n": "Etched Ruler",
"d": "Survivors hit by a <i>Feral Slash</i> are inflicted with <b>Oblivious</b> for <b>60 seconds</b>.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/IconAddon_etchedRuler.png"
},
{
"n": "Filthy Blade",
"d": "<b>Increases</b> time required for Survivors to mend by <b>4 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_filthyBlade.png"
},
{
"n": "Frank's Mix Tape",
"d": "While using <b>Feral Frenzy</b>:Damaging generators is <b>20% faster</b>. Breaking walls is <b>30% faster</b>. The Power gauge pauses while damaging a generator or breaking a wall.",
"r": "veryrare",
"i": "icons/IconAddon_franksMixTape.png"
},
{
"n": "Friendship Bracelet",
"d": "<b>Increases</b> duration of lunges during <b>Feral Frenzy</b> by <b>0.3 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_friendshipBracelet.png"
},
{
"n": "Fuming Mix Tape",
"d": "While using <b>Feral Frenzy</b>:The repair progress of Generators can be determined by the intensity of their Auras. Generators not being repaired regress at <b>100%</b> speed.",
"r": "visceral",
"i": "icons/IconAddon_fumingMixTape.png"
},
{
"n": "Iridescent Button",
"d": "While in <b>Feral Frenzy</b>, whenever you special-vault Pallets, the Pallets special-break. While in <b>Feral Frenzy</b>, during a special-vault you cannot be blinded.",
"r": "visceral",
"i": "icons/IconAddon_iridescentButton.png"
},
{
"n": "Joey's Mix Tape",
"d": "Survivors who self-mend a Deep Wound from <b>Feral Frenzy</b> are inflicted with <b>Hemorrhage</b> until fully healed.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_joeysMixTape.png"
},
{
"n": "Julie's Mix Tape",
"d": "A dark mix tape made out from mainly power ballads and gloomy rock. If <b>The Legion</b> is stunned while in <b>Feral Frenzy</b>, the power gauge refills once the duration of the stun ends.",
"r": "uncommon",
"i": "icons/IconAddon_juliesMixTape.png"
},
{
"n": "Mischief List",
"d": "<b>Increases</b> the duration of <b>Feral Frenzy</b> by <b>1 second</b>.",
"r": "common",
"i": "icons/IconAddon_mischiefList.png"
},
{
"n": "Mural Sketch",
"d": "<b>Increases</b> speed bonus per hit during <b>Feral Frenzy</b> to <b>0.32 m/s</b>.",
"r": "uncommon",
"i": "icons/IconAddon_muralSketch.png"
},
{
"n": "Stylish Sunglasses",
"d": "Shows the auras of Survivors who are mending within a <b>24-meter radius</b>.",
"r": "rare",
"i": "icons/IconAddon_stylishSunglasses.png"
},
{
"n": "Never-Sleep Pills",
"d": "The Legion's base move speed during <b>Feral Frenzy</b> is <b>4.6 m/s</b>. <b>Increases</b> the duration of <b>Feral Frenzy</b> by <b>10 seconds</b>. Gain <b>100</b> to <b>500 bonus Bloodpoints</b> for each successive hit on a Survivor during <b>Feral Frenzy</b>.",
"r": "uncommon",
"i": "icons/IconAddon_never-SleepPills.png"
},
{
"n": "Scratched Ruler",
"d": "<b>Decreases Feral Frenzy</b> recharge time by <b>5 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_scratchedRuler.png"
},
{
"n": "Smiley Face Pin",
"d": "Survivors who self-mend a Deep Wound from <b>Feral Frenzy</b> are inflicted with <b>Blindness</b> for <b>60 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "common",
"i": "icons/IconAddon_smileyFacePin.png"
},
{
"n": "Stab Wounds Study",
"d": "The auras of Survivors who self-mend a Deep Wound from <b>Feral Frenzy</b> are shown for <b>4 seconds</b> afterward.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
"r": "veryrare",
"i": "icons/IconAddon_stabWoundsStudy.png"
},
{
"n": "Stolen Sketch Book",
"d": "During <b>Feral Frenzy</b>, from the second chained hit onward, hit survivors drop their item.",
"r": "rare",
"i": "icons/IconAddon_stolenSketchBook.png"
},
{
"n": "Susie's Mix Tape",
"d": "A thrilling mix tape with energizing songs and intricate guitar riffs. <b>Increases</b> Killer Instinct detection range by <b>20 meters</b>.",
"r": "rare",
"i": "icons/IconAddon_susiesMixTape.png"
},
{
"n": "The Legion Pin",
"d": "Survivors who self-mend a Deep Wound from <b>Feral Frenzy</b> are inflicted with <b>Broken</b> for <b>60 seconds</b>.<br><br>Broken prevents Survivors from being healed.",
"r": "rare",
"i": "icons/IconAddon_theLegionPin.png"
}
]
},
{
"n": "The Plague",
"i": "icons/K15_ThePlague_Portrait.png",
"a": [
{
"n": "Ashen Apple",
"d": "Start the Trial with <b>1 additional</b> Pool of Devotion already corrupted. <b>Increases</b> the number of Pools of Devotion in the trial by <b>1</b>.",
"r": "rare",
"i": "icons/IconAddon_ashenApple.png"
},
{
"n": "Black Incense",
"d": "Survivors' auras are revealed to you for <b>3 seconds</b> when they vomit.",
"r": "visceral",
"i": "icons/IconAddon_blackIncense.png"
},
{
"n": "Devotee's Amulet",
"d": "<b>Increases</b> duration of <b>Corrupt Purge</b> by <b>20 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_devoteesAmulet.png"
},
{
"n": "Emetic potion",
"d": "<b>Increases</b> the effectiveness of <b>Vile Purge</b> by <b>30%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_emeticPotion.png"
},
{
"n": "Exorcism Amulet",
"d": "<b>Increases</b> the duration of <b>Corrupt Purge</b> by <b>10 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_exorcismAmulet.png"
},
{
"n": "Healing Salve",
"d": "<b>Decreases</b> cooldown of <b>Vile Purge</b> and <b>Corrupt Purge</b> by <b>0.25 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_healingSalve.png"
},
{
"n": "Hematite Seal",
"d": "<b>Increases</b> object infection duration by <b>30 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_haematiteSeal.png"
},
{
"n": "Incensed Ointment",
"d": "Ingesting the corruption at a Pool of Devotion causes all Survivors within <b>The Plague's</b> Terror Radius to scream and reveal their locations.",
"r": "rare",
"i": "icons/IconAddon_incensedOintment.png"
},
{
"n": "Infected Emetic",
"d": "<b>Increases</b> the effectiveness of <b>Vile Purge</b> by <b>40%</b>.",
"r": "rare",
"i": "icons/IconAddon_infectedEmetic.png"
},
{
"n": "Iridescent Seal",
"d": "<b>Corrupt Purge</b> activates every time a generator is completed. <b>Decreases</b> duration of <b>Corrupt Purge</b> by <b>20 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentSeal.png"
},
{
"n": "Limestone Seal",
"d": "<b>Increases</b> object infection duration by <b>20 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_limestoneSeal.png"
},
{
"n": "Olibanum Incense",
"d": "Survivors who cleanse at fountains have their auras revealed for <b>4 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_olibanumIncense.png"
},
{
"n": "Potent Tincture",
"d": "<b>Decreases</b> cooldown of <b>Vile Purge</b> and <b>Corrupt Purge</b> by <b>0.4 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_potentTincture.png"
},
{
"n": "Blessed Apple",
"d": "Start the Trial with <b>1 additional</b> Pool of Devotion already corrupted.",
"r": "uncommon",
"i": "icons/IconAddon_blessedApple.png"
},
{
"n": "Prayer Tablet Fragment",
"d": "<b>Vile Purge</b> no longer affects Survivors. <b>Increases</b> object infection duration by <b>40 seconds</b>. <b>Increases</b> infection from infected objects by <b>100%</b>. <b>Increases</b> Devious Bloodpoints by <b>100%</b>.",
"r": "common",
"i": "icons/IconAddon_prayerTabletFragment.png"
},
{
"n": "Prophylactic Amulet",
"d": "<b>Decreases</b> the number of Pools of Devotion in the Trial by <b>2</b>.",
"r": "uncommon",
"i": "icons/IconAddon_prophylacticAmulet.png"
},
{
"n": "Rubbing Oil",
"d": "<b>Increases</b> the charge rate of <b>Vile Purge</b> and <b>Corrupt Purge</b> by <b>50%</b>.",
"r": "rare",
"i": "icons/IconAddon_rubbingOil.png"
},
{
"n": "Severed Toe",
"d": "<b>Increases</b> infection rate for Survivors who are performing interactions by <b>50%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_severedToe.png"
},
{
"n": "Vile Emetic",
"d": "<b>Increases</b> velocity of vomit projectiles by <b>10%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_vileEmetic.png"
},
{
"n": "Worship Tablet",
"d": "<b>Increases</b> speed of ingesting corruption at a Pool of Devotion by <b>100%</b>. <b>Increases</b> movement speed while holding <b>Corrupt Purge</b> by <b>4.5%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_worshipTablet.png"
}
]
},
{
"n": "The Ghost Face",
"i": "icons/K16_TheGhostFace_Portrait.png",
"a": [
{
"n": "Cheap Cologne",
"d": "<b>Increases</b> Marked duration by <b>10 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_cheapCologne.png"
},
{
"n": "Chewed Pen",
"d": "Survivors that are in the dying state take <b>3 seconds</b> to reveal <b>The Ghost Face</b>.",
"r": "rare",
"i": "icons/IconAddon_chewedPen.png"
},
{
"n": "Driver's License",
"d": "When Marking a Survivor repairing a Generator, the Generator explodes and loses <b>20% progress</b>. The affected Generator becomes blocked for <b>15 seconds</b>. When Marking multiple Survivors at the same time, the loss of progress only applies once.",
"r": "veryrare",
"i": "icons/IconAddon_driversLicense.png"
},
{
"n": "Drop-Leg Knife Sheath",
"d": "<b>The Ghost Face</b> gains <b>10% movement speed</b> for <b>5 seconds</b> after Marking a Survivor.",
"r": "veryrare",
"i": "icons/IconAddon_drop-LegKnifeSheath.png"
},
{
"n": "Headline Cutouts",
"d": "Compiling your success makes you proud and boosts your confidence.<br><br><b>Increases</b> movement speed while stalking by <b>40%</b>.",
"r": "common",
"i": "icons/IconAddon_headlineCut-Outs.png"
},
{
"n": "Knife Belt Clip",
"d": "<b>Reduces</b> the Terror Radius by <b>12 meters</b> while crouching.",
"r": "rare",
"i": "icons/IconAddon_knifeBeltClip.png"
},
{
"n": "Lasting Perfume",
"d": "Survivors that are on a hook take <b>3 seconds</b> to reveal <b>The Ghost Face</b>.",
"r": "rare",
"i": "icons/IconAddon_lastingPerfume.png"
},
{
"n": "Leather Knife Sheath",
"d": "<b>Increases</b> crouched movement speed by <b>10%</b>.",
"r": "rare",
"i": "icons/IconAddon_leatherKnifeSheath.png"
},
{
"n": "Marked Map",
"d": "<b>Increases</b> duration of Killer Instinct after being revealed by <b>2 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_markedMap.png"
},
{
"n": "Night Vision Monocular",
"d": "A Survivor that reveals <b>The Ghost Face</b> is inflicted with <b>Exhausted</b> for <b>10 seconds</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "veryrare",
"i": "icons/IconAddon_nightVisionMonocular.png"
},
{
"n": "Olsen's Address Book",
"d": "Survivors that are Marked reveal their auras for <b>5 seconds</b> when performing rushed actions.",
"r": "uncommon",
"i": "icons/IconAddon_olsensAddressBook.png"
},
{
"n": "Olsen’s Journal",
"d": "A Survivor that is Marked is inflicted with <b>Oblivious</b> until the Mark expires.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/IconAddon_olsensJournal.png"
},
{
"n": "Olsen’s Wallet",
"d": "Whenever you basic-break Pallets or Breakable Walls, instantly recharge <b>Night Shroud</b>.",
"r": "rare",
"i": "icons/IconAddon_olsensWallet.png"
},
{
"n": "Outdoor Security Camera",
"d": "The auras of all Survivors are revealed for <b>7 seconds</b> when a Marked Survivor is put into the dying state.",
"r": "visceral",
"i": "icons/IconAddon_outdoorSecurityCamera.png"
},
{
"n": "“Philly”",
"d": "<b>Decreases</b> time required to Mark a Survivor by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_philly.png"
},
{
"n": "Cinch Straps",
"d": "<b>Night Shroud</b> remains active after a failed basic attack.",
"r": "uncommon",
"i": "icons/IconAddon_cinchStraps.png"
},
{
"n": "Telephoto Lens",
"d": "A Survivor that reveals <b>The Ghost Face</b> is inflicted with <b>Oblivious</b> for <b>60 seconds</b>.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/IconAddon_telephotoLens.png"
},
{
"n": "“Ghost Face Caught on Tape”",
"d": "Instantly recharges <b>Night Shroud</b> after a successful basic attack that puts a Survivor into the dying state.",
"r": "visceral",
"i": "icons/IconAddon_caughtOnTape.png"
},
{
"n": "Victim’s Detailed Routine",
"d": "After being Marked, Survivors are inflicted with <b>Exhausted</b> for <b>5 seconds</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "veryrare",
"i": "icons/IconAddon_victimsDetailedRoutine.png"
},
{
"n": "Walleye's Matchbook",
"d": "<b>Decreases Night Shroud</b> recovery time by <b>2 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_walleyesMatchbook.png"
}
]
},
{
"n": "The Demogorgon",
"i": "icons/K17_TheDemogorgon_Portrait.png",
"a": [
{
"n": "Barb's Glasses",
"d": "Whenever you special-break Pallets or Breakable Walls with <b>Shred</b>, the cooldown is 10% shorter",
"r": "uncommon",
"i": "icons/IconAddon_barbsGlasses.png"
},
{
"n": "Black Heart",
"d": "<b>Decreases Shred</b> hit cooldown by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_blackHeart.png"
},
{
"n": "Brass Case Lighter",
"d": "Proximity to Portals inflicts Survivors with <b>Blindness</b>. Once out of contact with the Portal, this effect persists for <b>60 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "rare",
"i": "icons/IconAddon_brassCaseLighter.png"
},
{
"n": "Deer Lung",
"d": "<b>Increases</b> Upside Down movement speed by <b>30%</b>. <b>Decreases</b> the number of available Portals by <b>2</b>.",
"r": "rare",
"i": "icons/IconAddon_deerLung.png"
},
{
"n": "Eleven's Soda",
"d": "Shows Auras for Generators being repaired while traversing the Upside Down.",
"r": "rare",
"i": "icons/IconAddon_elevensSoda.png"
},
{
"n": "Leprose Lichen",
"d": "Reveals the auras of all Survivors while traversing the Upside Down. After emerging from a Portal, the auras of all Survivors within <b>16 meters</b> of an active Portal are revealed for <b>3 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_leproseLichen.png"
},
{
"n": "Lifeguard Whistle",
"d": "Increases the number of available Portals by <b>2</b>.",
"r": "veryrare",
"i": "icons/IconAddon_lifeguardWhistle.png"
},
{
"n": "Mew's Guts",
"d": "<b>Increases</b> the total number of available Portals by <b>1</b>. <b>Decreases Shred</b> miss cooldown by <b>11%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_mewsGuts.png"
},
{
"n": "Rat Liver",
"d": "A soggy pile of salty, soft liver. <b>Increases</b> movement speed while charging <b>Of The Abyss</b> by <b>3.5%</b>.",
"r": "common",
"i": "icons/IconAddon_ratLiver.png"
},
{
"n": "Rat Tail",
"d": "A chewy rat tail for The Demogorgon to consume. <b>Increases</b> speed of opening a Portal by <b>50%</b>.",
"r": "common",
"i": "icons/IconAddon_ratTail.png"
},
{
"n": "Red Moss",
"d": "<b>Increases</b> time required to emerge from a Portal by <b>15%</b>. <b>Increases</b> the duration of the <b>Undetectable</b> effect gained when emerging from a Portal by <b>8 seconds</b>. Emerging from Portals becomes silent.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "visceral",
"i": "icons/IconAddon_redMoss.png"
},
{
"n": "Rotten Green Tripe",
"d": "Rotten tripe that fuels The Demogorgon. <b>Increases</b> Upside Down movement speed by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_rottenGreenTripe.png"
},
{
"n": "Rotten Pumpkin",
"d": "When traversing the Upside Down, the Portal you enter is destroyed. Gain an additional <b>200 Bloodpoints</b> for the traversal.",
"r": "common",
"i": "icons/IconAddon_rottenPumpkin.png"
},
{
"n": "Sticky Lining",
"d": "<b>Increases</b> the distance from Portals at which Survivors can be detected by <b>Of The Abyss</b> by <b>2.5 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_stickyLining.png"
},
{
"n": "Thorny Vines",
"d": "<b>Increases</b> time required for Survivors to seal Portals by <b>8%</b><b>Increases</b> the distance from Portals at which Survivors can be detected by <b>Of The Abyss</b> by <b>1 meter</b>.",
"r": "rare",
"i": "icons/IconAddon_thornyVines.png"
},
{
"n": "Unknown Egg",
"d": "<b>Decreases</b> the cooldown after traversing the Upside Down by <b>2.5 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_unknownEgg.png"
},
{
"n": "Upside Down Resin",
"d": "A sticky, flammable sap that fortifies the gateway to the interdimensional tunnels. <b>Increases</b> time required for Survivors to seal Portals by <b>20%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_upsideDownResin.png"
},
{
"n": "Vermillion Webcap",
"d": "<b>Increases</b> the duration of the <b>Undetectable</b> effect gained when emerging from a Portal by <b>3 seconds</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_vermilionWebcap.png"
},
{
"n": "Violet Waxcap",
"d": "<b>Increases</b> the duration of the <b>Undetectable</b> effect gained when emerging from a Portal by <b>1 second</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius and Red Stain.",
"r": "rare",
"i": "icons/IconAddon_violetWaxcap.png"
},
{
"n": "Viscous Webbing",
"d": "Wet, elastic webs that broaden the interdimensional tunnels. <b>Increases</b> time required for Survivors to seal Portals by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_viscousWebbing.png"
}
]
},
{
"n": "The Oni",
"i": "icons/K18_TheOni_Portrait.png",
"a": [
{
"n": "Akito's Crutch",
"d": "<b>Increases</b> movement speed of <b>Demon Dash</b> by <b>13%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_akitosCrutch.png"
},
{
"n": "Blackened Toenail",
"d": "<b>Increases</b> movement speed while absorbing Blood Orbs by <b>0.4 m/s</b>.",
"r": "common",
"i": "icons/IconAddon_blackenedToenail.png"
},
{
"n": "Bloody Sash",
"d": "<b>Increases</b> movement speed while absorbing Blood Orbs by <b>0.7 m/s</b>.",
"r": "uncommon",
"i": "icons/IconAddon_bloodySash.png"
},
{
"n": "Child's Wooden Sword",
"d": "<b>Increases</b> Blood Orb aura reading range by <b>3 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_childsWoodenSword.png"
},
{
"n": "Chipped Saihai",
"d": "<b>Increases Blood Fury</b> duration by <b>6 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_chippedSaihai.png"
},
{
"n": "Cracked Sakazuki",
"d": "<b>Decreases Blood Fury</b> activation time by <b>0.5 seconds</b>. <b>Decreases Blood Fury</b> cooldown by <b>0.5 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_crackedSakazuki.png"
},
{
"n": "Ink Lion",
"d": "<b>Decreases Blood Fury</b> activation time by <b>0.5 seconds</b>. <b>Decreases Blood Fury</b> cooldown by <b>0.5 seconds</b>. <b>Decreases Blood Fury</b> consumption when downing a Survivor by <b>2 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_inkLion.png"
},
{
"n": "Kanai-anzen Talisman",
"d": "A trinket given to Kazan at birth, its powers are meant to protect his family from harm. <b>Increases</b> movement speed of <b>Demon Dash</b> by <b>8%</b>.",
"r": "rare",
"i": "icons/IconAddon_kanai-AnzenTalisman.png"
},
{
"n": "Lion Fang",
"d": "A tooth sold from an exotic vendor, it symbolizes power and nobility. <b>Increases Blood Fury</b> duration by <b>10 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_lionFang.png"
},
{
"n": "Paper Lantern",
"d": "<b>Increases</b> Blood Orb absorption speed by <b>4 m/s</b>.",
"r": "common",
"i": "icons/IconAddon_paperLantern.png"
},
{
"n": "Polished Maedate",
"d": "<b>Increases Yamaoka's Wrath</b> passive charge rate by <b>50%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_polishedMaedate.png"
},
{
"n": "Renjiro’s Bloody Glove",
"d": "All Survivors can see Blood Orbs at the same distance as you. A Survivor's aura is revealed for <b>2 seconds</b> when coming into contact with a Blood Orb.",
"r": "visceral",
"i": "icons/IconAddon_renjirosBloodyGlove.png"
},
{
"n": "Rotting Rope",
"d": "<b>Increases</b> Blood Orb aura reading range by <b>2 meters</b>.",
"r": "common",
"i": "icons/IconAddon_rottingRope.png"
},
{
"n": "Scalped Topknot",
"d": "<b>Decreases</b> time to activate <b>Demon Dash</b> by <b>0.5 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_scalpedTopknot.png"
},
{
"n": "Shattered Wakizashi",
"d": "The fragments of an ancestral blade, destroyed by Kazan in a fit of rage. <b>Increases Yamaoka's Wrath</b> passive charge rate by <b>100%</b>.",
"r": "rare",
"i": "icons/IconAddon_shatteredWakizashi.png"
},
{
"n": "Splintered Hull",
"d": "<b>Increases</b> the frequency of Blood Orbs dropped by Survivors by <b>33%</b>. Survivors drop an additional Blood Orb when they vault, throw pallets, exit lockers, crouch, or fail a skill check.",
"r": "veryrare",
"i": "icons/IconAddon_splinteredHull.png"
},
{
"n": "Tear Soaked Tenugui",
"d": "<b>Decreases Blood Fury</b> consumption when downing a Survivor by <b>4 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_tearSoakedTenugui.png"
},
{
"n": "Wooden Oni Mask",
"d": "<b>Increases</b> the frequency of Blood Orbs dropped by Survivors by <b>14%</b>. Survivors drop an additional Blood Orb when they vault, throw pallets, exit lockers, crouch, or fail a skill check.",
"r": "rare",
"i": "icons/IconAddon_woodenOniMask.png"
},
{
"n": "Iridescent Family Crest",
"d": "Miss a charged attack during <b>Blood Fury</b> to smash the ground and create a shock wave. Any Survivors within <b>24 meters</b> will scream and reveal their current location to you for <b>4 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentFamilyCrest.png"
},
{
"n": "Yamaoka Sashimono",
"d": "<b>Increases Blood Fury</b> duration by <b>8 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_yamaokaSashimono.png"
}
]
},
{
"n": "The Deathslinger",
"i": "icons/K19_TheDeathslinger_Portrait.png",
"a": [
{
"n": "Barbed Wire",
"d": "<b>Increases</b> Survivor mend time by <b>3.5 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_barbedWire.png"
},
{
"n": "Bayshore’s Cigar",
"d": "<b>Decreases</b> the stun duration when Survivors break free by <b>0.75 second</b>.",
"r": "veryrare",
"i": "icons/IconAddon_bayshoresCigar.png"
},
{
"n": "Bayshore’s Gold Tooth",
"d": "<b>Increases</b> <b>The Redeemer's</b> reeling speed by <b>5%</b>.",
"r": "rare",
"i": "icons/IconAddon_bayshoresGoldTooth.png"
},
{
"n": "Chewing Tobacco",
"d": "<b>Decreases</b> the stun duration when Survivors break free by <b>0.25 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_chewingTobacco.png"
},
{
"n": "Gold Creek Whiskey",
"d": "<b>Decreases</b> Terror Radius by <b>8 meters</b> while aiming down <b>The Redeemer's</b> sights.",
"r": "veryrare",
"i": "icons/IconAddon_goldCreekWhiskey.png"
},
{
"n": "Hellshire Iron",
"d": "When a Survivor is speared, gain <b>Undetectable</b>. The effect persists for <b>10 seconds</b> after the Survivor is no longer speared.<br><br>Undetectable hides the Killer's aura, Terror Radius and Red Stain.",
"r": "visceral",
"i": "icons/IconAddon_hellshireIron.png"
},
{
"n": "Honey Locust Thorns",
"d": "Breaking free from the spear inflicts <b>Mangled</b> for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_honeyLocustThorn.png"
},
{
"n": "Iridescent Coin",
"d": "Survivors speared from at least <b>12 meters</b> away are inflicted with <b>Exposed</b> for as long as they remain speared.<br><br>Exposed survivors will be downed by basic attacks even if uninjured.",
"r": "visceral",
"i": "icons/IconAddon_iridescentCoin.png"
},
{
"n": "Jaw Smasher",
"d": "<b>Increases</b> movement speed by <b>1.5%</b> while aiming down <b>The Redeemer's</b> sights.",
"r": "uncommon",
"i": "icons/IconAddon_jawSmasher.png"
},
{
"n": "Marshal's Badge",
"d": "<b>Decreases</b> Terror Radius by <b>4 meters</b> while aiming down <b>The Redeemer's</b> sights.",
"r": "uncommon",
"i": "icons/IconAddon_marshalsBadge.png"
},
{
"n": "Modified Ammo Belt",
"d": "<b>Decreases</b> <b>The Redeemer's</b> reload time by <b>0.25 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_modifiedAmmoBelt.png"
},
{
"n": "Poison Oak Leaves",
"d": "<b>Increases</b> Survivor mend time by <b>1.5 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_poisonOakLeaves.png"
},
{
"n": "Prison Chain",
"d": "<b>Increases</b> time required for a Survivor to break free from a spear by <b>10%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_prisonChain.png"
},
{
"n": "Rickety Chain",
"d": "Grants <b>50% bonus Bloodpoints</b> for <i>Speared</i> score events. Survivors break free <b>33%</b> faster.",
"r": "common",
"i": "icons/IconAddon_ricketyChain.png"
},
{
"n": "Rusted Spike",
"d": "Hitting a Survivor with <b>The Redeemer</b> while they are being reeled in inflicts <b>Mangled</b> for <b>60 seconds</b>.<br><br>Mangled increases time required to heal by 25% for a set duration or until fully healed.",
"r": "uncommon",
"i": "icons/IconAddon_rustedSpike.png"
},
{
"n": "Snake Oil",
"d": "<b>Increases</b> <b>The Redeemer's</b> reeling speed by <b>2.5%</b>.",
"r": "common",
"i": "icons/IconAddon_snakeOil.png"
},
{
"n": "Spit Polish Rag",
"d": "<b>Decreases</b> <b>The Redeemer's</b> miss cooldown by <b>0.25 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_spitPolishRag.png"
},
{
"n": "Tin Oil Can",
"d": "<b>Decreases</b> <b>The Redeemer's</b> miss cooldown by <b>0.5 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_tinOilCan.png"
},
{
"n": "Wanted Poster",
"d": "<b>Increases</b> movement speed by <b>3%</b> while aiming down <b>The Redeemer's</b> sights.",
"r": "rare",
"i": "icons/IconAddon_wantedPoster.png"
},
{
"n": "Warden’s Keys",
"d": "<b>Decreases</b> <b>The Redeemer's</b> reload time by <b>0.35 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_wardensKeys.png"
}
]
},
{
"n": "The Executioner",
"i": "icons/K20_TheExecutioner_Portrait.png",
"a": [
{
"n": "Black Strap",
"d": "A nylon strap that was used to restrain a victim to a metal frame. The color makes it difficult to see the blood soaked into it. <b>Decreases</b> the range of <b>Punishment of the Damned</b> by <b>25%</b>. <b>Increases</b> the width of <b>Punishment of the Damned</b> by <b>25%</b>.",
"r": "common",
"i": "icons/IconAddon_blackStrap.png"
},
{
"n": "Burning Man Painting",
"d": "A diagram of the Lakeview Hotel. Red flames are painted over this place of guilt. When missing <b>Punishment of the Damned</b>, see the auras of Survivors within <b>3 meters</b> for <b>6 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_burningManPainting.png"
},
{
"n": "Cinderella Music Box",
"d": "A music box with a figure from the fairy tale Cinderella. Found inside a suitcase adorned with stickers from multiple destinations. <b>Decreases Punishment of the Damned's</b> cooldown by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_cinderellaMusicBox.png"
},
{
"n": "Copper Ring",
"d": "Found in the basement of Brookhaven Hospital. It’s engraved with a picture of a spider. <b>Increases</b> maximum duration of <b>Rites of Judgment</b> by <b>5 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_copperRing.png"
},
{
"n": "Crimson Ceremony Book",
"d": "Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "veryrare",
"i": "icons/IconAddon_crimsonCeremonyBook.png"
},
{
"n": "Dead Butterfly",
"d": "A butterfly found on a bed at Wood Side Apartments. It’s frail and nearly falls apart when touched. <b>Increases Rites of Judgment's</b> recharge rate by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_deadButterfly.png"
},
{
"n": "Forgotten Videotape",
"d": "A videotape of two lovers vacationing in Silent Hill. Despite its sentimental value, it was left behind in the Lakeview Hotel. <b>Increases</b> the speed at which <b>Punishment of the Damned</b> travels by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_forgottenVideotape.png"
},
{
"n": "Iridescent Seal of Metatron",
"d": "A talisman with an odd design inscribed on it. The Entity’s influence seems to have altered it. <b>Decreases</b> the range of <b>Punishment of the Damned</b> by <b>50%</b>. <b>Punishment of the Damned's</b> range increases by creating <b>Rites of Judgment</b> trails, up to a maximum of <b>200%</b>. This resets when <b>Punishment of the Damned</b> hits a Survivor.",
"r": "visceral",
"i": "icons/IconAddon_iridescentSealOfMetatron.png"
},
{
"n": "Lead Ring",
"d": "Found in a refrigerator. It’s engraved with a disgusting, bloated face. <b>Increases</b> the range of <b>Punishment of the Damned</b> by <b>25%</b>. <b>Decreases</b> the width of <b>Punishment of the Damned</b> by <b>25%</b>.",
"r": "common",
"i": "icons/IconAddon_leadRing.png"
},
{
"n": "Leopard-Print Fabric",
"d": "A shred of pink, leopard print fabric. It’s difficult to tell what it was used for. <b>Decreases</b> the duration of stuns by <b>15%</b> while using <b>Rites of Judgment</b>.",
"r": "uncommon",
"i": "icons/IconAddon_leopardprintFabric.png"
},
{
"n": "Lost Memories Book",
"d": "Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "veryrare",
"i": "icons/IconAddon_lostMemoriesBook.png"
},
{
"n": "Mannequin Foot",
"d": "The smooth grey foot of a mannequin, brutally torn from its leg. <b>Rites of Judgment</b> trails inflict <b>Exhausted</b> for <b>10 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_mannequinFoot.png"
},
{
"n": "Misty Day, Remains of Judgment",
"d": "A painting of an imposing figure wearing a steel pyramid atop his head. Victims are caged in the background. Injuring a Survivor with <b>Punishment of the Damned</b> reveals their aura for <b>8 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_mistyDay.png"
},
{
"n": "Obsidian Goblet",
"d": "An ancient looking goblet carved from pure obsidian. You can special-break Pallets and Breakable walls with <b>Punishment of the Damned</b>. Increases <b>Punishment of the Damned's</b> cooldown by <b>20%</b>.",
"r": "visceral",
"i": "icons/IconAddon_obsidianGoblet.png"
},
{
"n": "Rust-colored Egg",
"d": "An old-looking egg, colored reddish orange. About the size of a quail’s egg. Injuring a Survivor with <b>Punishment of the Damned</b> increases <b>Rites of Judgment's</b> charge by <b>30%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_rustColoredEgg.png"
},
{
"n": "Scarlet Egg",
"d": "A fresh egg, strikingly red in color. About the size of a quail’s egg. Survivors afflicted with <i>Torment</i> spawn <b>Rites of Judgment</b> trails when sprinting. These trails last <b>5 seconds</b>. You no longer see the auras of <b>Rites of Judgment</b> trails.",
"r": "veryrare",
"i": "icons/IconAddon_scarletEgg.png"
},
{
"n": "Spearhead",
"d": "The sharp, rusted tip of a spear. It’s flaked with blood from its last victim. When a Survivor is saved from a <b>Cage of Atonement</b>, you see their rescuer's aura for <b>8 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_spearhead.png"
},
{
"n": "Tablet of the Oppressor",
"d": "A metal tablet engraved with Aztec figures. While using <b>Rites of Judgment</b>, gain the <b>Undetectable</b> Status Effect.",
"r": "rare",
"i": "icons/IconAddon_tabletOfTheOppressor.png"
},
{
"n": "Valtiel Sect Photograph",
"d": "A photograph of two figures in red hoods. Entitled Crimson and White Banquet for the Gods. <b>Decreases</b> your Terror Radius by <b>2 meters</b> for each Survivor affected by <i>Torment</i>.",
"r": "rare",
"i": "icons/IconAddon_valtielSectPhotograph.png"
},
{
"n": "Wax Doll",
"d": "A doll carved from wax, handcrafted by a prisoner who would soon face their judgment. <b>Increases</b> the range of <b>Punishment of the Damned</b> by <b>5%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_waxDoll.png"
}
]
},
{
"n": "The Blight",
"i": "icons/K21_TheBlight_Portrait.png",
"a": [
{
"n": "Adrenaline Vial",
"d": "<b>Increases</b> maximum <b>Rush</b> tokens by <b>2</b>. <b>Increases</b> maximum look angle while Rushing by <b>20 degrees</b>. <b>Decreases</b> Rush turn rate by <b>55%</b>. <b>Increases</b> Rush speed by <b>5%</b>.",
"r": "rare",
"i": "icons/IconAddon_adrenalineVial.png"
},
{
"n": "Alchemist’s Ring",
"d": "<b>Increases Rush</b> duration by <b>20%</b> for each consecutive <b>Rush</b>.",
"r": "veryrare",
"i": "icons/IconAddon_alchemistsRing.png"
},
{
"n": "Blighted Crow",
"d": "<b>Increases</b> speed while Rushing by <b>3%</b> for each consecutive <b>Rush</b>.",
"r": "rare",
"i": "icons/IconAddon_blightedCrow.png"
},
{
"n": "Blighted Rat",
"d": "<b>Increases</b> speed while Rushing by <b>2%</b> for each consecutive <b>Rush</b>.",
"r": "uncommon",
"i": "icons/IconAddon_blightedRat.png"
},
{
"n": "Canker Thorn",
"d": "<b>Decreases</b> recovery time after Rushing by <b>0.5 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_cankerThorn.png"
},
{
"n": "Chipped Monocle",
"d": "Displays the target location of a Slam.",
"r": "common",
"i": "icons/IconAddon_chippedMonocle.png"
},
{
"n": "Compound Seven",
"d": "Automatically face the nearest Survivor within <b>16 meters</b> after a Slam.",
"r": "common",
"i": "icons/IconAddon_compoundSeven.png"
},
{
"n": "Compound Thirty-Three",
"d": "<b>Rush</b> cannot be performed more than <b>5</b> times. <b>Increases</b> Rush turn rate by <b>11%</b>. <b>Increases</b> Rush duration by <b>11%</b>.",
"r": "visceral",
"i": "icons/IconAddon_compoundThirtyThree.png"
},
{
"n": "Compound Twenty-One",
"d": "Reveals the auras of all Survivors within <b>8 meters</b> for <b>3 seconds</b> after a Slam.",
"r": "rare",
"i": "icons/IconAddon_compoundTwentyOne.png"
},
{
"n": "Foxglove",
"d": "<b>Decreases</b> <b>Rush</b> recovery time by <b>0.25 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_foxglove.png"
},
{
"n": "Iridescent Blight Tag",
"d": "<b>Rush</b> cannot be performed more than <b>3</b> times. <b>Increases</b> maximum <b>Rush</b> look angle by <b>20 degrees</b>. <b>Increases</b> Rush speed by <b>10%</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentBlightTag.png"
},
{
"n": "Placebo Tablet",
"d": "<b>Decreases</b> movement speed while Rushing by <b>15%</b>. Gain <b>100% bonus Bloodpoints</b> on <b>Rush</b> score events.",
"r": "common",
"i": "icons/IconAddon_placeboTablet.png"
},
{
"n": "Plague Bile",
"d": "<b>Increases</b> turn rate while Rushing by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_plagueBile.png"
},
{
"n": "Pustula Dust",
"d": "<b>Increases</b> maximum Slam duration by <b>0.75 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_pustulaDust.png"
},
{
"n": "Rose Tonic",
"d": "<b>Increases</b> maximum Slam duration by <b>1 second</b>. ",
"r": "rare",
"i": "icons/IconAddon_roseTonic.png"
},
{
"n": "Shredded Notes",
"d": "<b>Decreases</b> time to recharge a <b>Rush</b> token by <b>0.33 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_shreddedNotes.png"
},
{
"n": "Soul Chemical",
"d": "<b>Increases</b> the initial <b>Rush</b> speed by <b>5%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_soulChemical.png"
},
{
"n": "Summoning Stone",
"d": "<b>Increases</b> the initial <b>Rush</b> duration by <b>0.5 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_summoningStone.png"
},
{
"n": "Umbra Salts",
"d": "<b>Increases</b> turn rate while Rushing by <b>15%</b>.",
"r": "rare",
"i": "icons/IconAddon_umbraSalts.png"
},
{
"n": "Vigo's Journal",
"d": "Grants <b>Undetectable</b> while Rushing.<br><br>Undetectable hides the Killer's aura, terror radius and red stain.",
"r": "veryrare",
"i": "icons/IconAddon_vigosJournal.png"
}
]
},
{
"n": "The Twins",
"i": "icons/K22_TheTwins_Portrait.png",
"a": [
{
"n": "Cat Figurine",
"d": "Displays the target location of a <b>Pounce</b>.",
"r": "common",
"i": "icons/IconAddon_catFigurine.png"
},
{
"n": "Rusted Needle",
"d": "Crushing <b>Victor</b> when attached inflicts <b>Hemorrhage</b> until healed.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_rustedNeedle.png"
},
{
"n": "Sewer Sludge",
"d": "<b>Increases</b> time to crush <b>Victor</b> when attached by <b>2 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_sewerSludge.png"
},
{
"n": "Madeleine’s Scarf",
"d": "<b>Increases</b> <b>Victor's</b> movement speed by <b>0.3 m/s</b>.",
"r": "rare",
"i": "icons/IconAddon_madeleinesScarf.png"
},
{
"n": "Stale Biscuit",
"d": "<b>Decreases</b> <b>Pounce</b> cooldown by <b>0.4 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_staleBiscuit.png"
},
{
"n": "Weighty Rattle",
"d": "Crushing <b>Victor</b> when attached inflicts <b>Broken</b> for <b>20 seconds</b>.<br><br>Broken prevents Survivors from being healed.",
"r": "rare",
"i": "icons/IconAddon_weightyRattle.png"
},
{
"n": "Forest Stew",
"d": "<b>Increases</b> <b>Victor's</b> movement speed by <b>0.6 m/s</b>.",
"r": "veryrare",
"i": "icons/IconAddon_forestStew.png"
},
{
"n": "Spinning Top",
"d": "<b>Victor's</b> <b>Pounce</b> causes Survivors to drop their carried Survivor items.",
"r": "veryrare",
"i": "icons/IconAddon_spinningTop.png"
},
{
"n": "Drop of Perfume",
"d": "Survivors in <b>Victor's</b> alert range while he is dormant are inflicted with <b>Oblivious</b>.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "veryrare",
"i": "icons/IconAddon_dropOfPerfume.png"
},
{
"n": "Victor’s Soldier",
"d": "Crushing <b>Victor</b> while he is dormant reveals the Survivor's aura for <b>6 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_victorsSoldier.png"
},
{
"n": "Silencing Cloth",
"d": "<b>Charlotte</b> gains <b>Undetectable</b> for <b>20 seconds</b> after waking from her dormant state.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "visceral",
"i": "icons/IconAddon_silencingCloth.png"
},
{
"n": "Tiny Fingernail",
"d": "<b>Decreases Victor's</b> <b>Unbind</b> time by <b>33%</b>.",
"r": "common",
"i": "icons/IconAddon_tinyFingernail.png"
},
{
"n": "Iridescent Pendant",
"d": "Crushing <b>Victor</b> while he is dormant inflicts <b>Exposed</b> for <b>45 seconds</b>.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.",
"r": "visceral",
"i": "icons/IconAddon_iridescentPendant.png"
},
{
"n": "Soured Milk",
"d": "<b>Increases Victor's</b> alert range by <b>2 meters</b>.",
"r": "common",
"i": "icons/IconAddon_souredMilk.png"
},
{
"n": "Toy Sword",
"d": "<b>Decreases Pounce</b> charge time by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_toySword.png"
},
{
"n": "Cat’s Eye",
"d": "<b>Victor</b> becomes silent while <b>Pounce</b> is fully charged.",
"r": "uncommon",
"i": "icons/IconAddon_catsEye.png"
},
{
"n": "Madeleine’s Glove",
"d": "<b>Increases Victor's</b> alert range by <b>4 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_madeleinesGlove.png"
},
{
"n": "Bloody Black Hood",
"d": "<b>Decreases Charlotte</b>'s waking time by <b>0.5 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_bloodyBlackHood.png"
},
{
"n": "Ceremonial Candelabrum",
"d": "<b>Increases</b> time to crush <b>Victor</b> when he is dormant by <b>0.2 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_ceremonialCandelabrum.png"
},
{
"n": "Baby Teeth",
"d": "Crushing <b>Victor</b> when attached inflicts <b>Blindness</b> for <b>30 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "uncommon",
"i": "icons/IconAddon_babyTeeth.png"
}
]
},
{
"n": "The Trickster",
"i": "icons/K23_TheTrickster_Portrait.png",
"a": [
{
"n": "Memento Blades",
"d": "<b>Displays</b> a reticle while aiming with Blades.",
"r": "common",
"i": "icons/IconAddon_mementoBlades.png"
},
{
"n": "Trick Pouch",
"d": "<b>Increases</b> maximum carried Blades by <b>8</b>. Start the Trial with <b>8 additional Blades</b>.",
"r": "common",
"i": "icons/IconAddon_trickPouch.png"
},
{
"n": "Killing Part Chords",
"d": "<b>Increases</b> time before Style Ranks from D to A decay by <b>50%</b>.",
"r": "common",
"i": "icons/IconAddon_killingPartChords.png"
},
{
"n": "Inferno Wires",
"d": "<b>Increases</b> the Style Rank timer of S-Rank by <b>20%</b>.",
"r": "common",
"i": "icons/IconAddon_infernoWires.png"
},
{
"n": "Ji-woon's Autograph",
"d": "<b>Increases</b> the duration of Main Event by <b>44%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_ji-WoonsAutograph.png"
},
{
"n": "On Target Single",
"d": "<b>Increases</b> the duration of Main Event by <b>0.5 seconds</b> for each Blade hit while in S-Rank, up to a maximum of <b>20 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_onTargetSingle.png"
},
{
"n": "Lucky Blade",
"d": "<br>On every eighth Blade Hit, an additional bonus is assigned at random:<br><br><b>Increases</b> Throw Speed by <b>5%</b> for <b>5 seconds</b>. <b>Gain 3%</b> Haste for <b>6 seconds</b>. <b>Gain</b> an additional Style Point.",
"r": "uncommon",
"i": "icons/IconAddon_luckyBlade.png"
},
{
"n": "Caged Heart Shoes",
"d": "When you basic-break Pallets and Breakable Walls or damage Generators, the next time you enter the Throw State, increase movement speed while in the Throw State by <b>5%</b> for <b>10 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_cagedHeartShoes.png"
},
{
"n": "Tequila Moonrock",
"d": "<b>Increases</b> Throw Speed by <b>8%</b> for <b>10 seconds</b> after gaining a Style Rank.",
"r": "uncommon",
"i": "icons/IconAddon_tequilaMoonrock.png"
},
{
"n": "Bloody Boa",
"d": "<b>Decreases</b> the speed at which Laceration decays by <b>75%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_bloodyBoa.png"
},
{
"n": "Fizz-Spin Soda",
"d": "<b>Decreases</b> the number of Blade Throws required to increase Throw Speed by <b>2</b>.",
"r": "rare",
"i": "icons/IconAddon_fizz-SpinSoda.png"
},
{
"n": "Waiting for You Watch",
"d": "Survivors whose Laceration Meter fully decays are revealed for <b>10 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_waitingForYouWatch.png"
},
{
"n": "Ripper Brace",
"d": "For each Style Rank, you basic-vault Windows, basic-break Pallets or Breakable Walls, and damage Generators <b>6%</b> faster.",
"r": "rare",
"i": "icons/IconAddon_ripperBrace.png"
},
{
"n": "Melodious Murder",
"d": "<b>Increases Blade</b> reload speed at lockers by <b>25%</b>.",
"r": "rare",
"i": "icons/IconAddon_melodiousMurder.png"
},
{
"n": "Diamond Cufflinks",
"d": "Reveals Survivor auras for <b>6 seconds</b> when their Laceration reaches one Blade hit from maximum.",
"r": "veryrare",
"i": "icons/IconAddon_diamondCufflinks.png"
},
{
"n": "Edge of Revival Album",
"d": "Blade Hits from more than <b>20 meters</b> away deal <b>100%</b> more Laceration.",
"r": "veryrare",
"i": "icons/IconAddon_edgeOfRevivalAlbum.png"
},
{
"n": "Trick Blades",
"d": "Blades can <b>ricochet</b> off of the environment once. On every eighth Blade Hit after a ricochet, an additional bonus is assigned at random:Increases Laceration by <b>100%</b>. Reveal Survivor auras within <b>12 meters</b> for <b>4.4 seconds</b>. Gain an additional <b>Style Point</b>.",
"r": "veryrare",
"i": "icons/IconAddon_trickBlades.png"
},
{
"n": "Cut Thru U Single",
"d": "When reaching <b>A-Rank</b>, Survivors within <b>32 meters</b> are revealed with Killer Instinct for <b>4.4 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_cutThruUSingle.png"
},
{
"n": "Death Throes Compilation",
"d": "<b>Refills</b> Blades by <b>75%</b> of the maximum when Main Event ends.",
"r": "visceral",
"i": "icons/IconAddon_deathThroesCompilation.png"
},
{
"n": "Iridescent Photocard",
"d": "<b>Increases</b> the duration of Main Event by <b>100%</b>. When Main Event is activated: reveal your aura to all Survivors, all Survivors’ auras are revealed, and block all Generators for <b>6 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentPhotocard.png"
}
]
},
{
"n": "The Nemesis",
"i": "icons/K24_TheNemesis_Portrait.png",
"a": [
{
"n": "Damaged Syringe",
"d": "Medical equipment that fared poorly during the chaos that overwhelmed Raccoon City. <b>Increases</b> time it takes Survivors to use a Vaccine by <b>5 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_damagedSyringe.png"
},
{
"n": "Tyrant Gore",
"d": "A damaged sample from a T-002 Tyrant that died in combat. There are signs of severe burns. <b>Increases</b> mutation rate when destroying zombies with <b>Tentacle Strike</b> by <b>75%</b>. <b>Decreases</b> zombie respawn time by <b>7.5 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_tyrantGore.png"
},
{
"n": "Serotonin Injector",
"d": "Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "rare",
"i": "icons/IconAddon_serotoninInjector.png"
},
{
"n": "T-Virus Sample",
"d": "A sample of the T-Virus developed by Umbrella Corporation, it causes extreme mutations and brain damage in its subjects. <b>Increases</b> mutation rate when destroying zombies with <b>Tentacle Strike</b> by <b>100%</b>.",
"r": "rare",
"i": "icons/IconAddon_t-VirusSample.png"
},
{
"n": "Plant 43 Vines",
"d": "The tangled remnants of a plant infected with the T-Virus, it killed one of the researchers who developed it. <b>Increases</b> time required for Survivors to open Supply Cases by <b>4 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_plant43Vines.png"
},
{
"n": "Licker Tongue",
"d": "Hindered reduces Survivor movement speed.",
"r": "rare",
"i": "icons/IconAddon_lickerTongue.png"
},
{
"n": "NE-α Parasite",
"d": "Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "veryrare",
"i": "icons/IconAddon_ne-AParasite.png"
},
{
"n": "Jill’s Sandwich",
"d": "It’s tragically squished and dripping with blood from a recent battle. Despite that, it has a delicious aroma that can’t be missed. Reveals a Survivor's aura for <b>12 seconds</b> after they unlock a Supply Case.",
"r": "veryrare",
"i": "icons/IconAddon_jillsSandwich.png"
},
{
"n": "Broken Recovery Coin",
"d": "A coin depicting a bird framed by a laurel wreath. It’s broken in half. Removes <b>1</b> Supply Case from the trial.",
"r": "veryrare",
"i": "icons/IconAddon_brokenRecoveryCoin.png"
},
{
"n": "Depleted Ink Ribbon",
"d": "Who will save them now? There’s something about this ink ribbon being dry that energizes zombies. <b>Decreases</b> zombie respawn time by <b>5 seconds</b>. <b>Increases</b> zombie movement speed by <b>50%</b>. Any zombies destroyed after all generators are repaired will respawn in an exit area.",
"r": "veryrare",
"i": "icons/IconAddon_depletedInkRibbon.png"
},
{
"n": "Shattered S.T.A.R.S. Badge",
"d": "A symbol of hope for Raccoon City, utterly destroyed. <b>Increases</b> Zombie movement speed by <b>150%</b> for <b>60 seconds</b> after a generator is repaired.",
"r": "visceral",
"i": "icons/IconAddon_shatteredSTARSBadge.png"
},
{
"n": "Brian’s Intestine",
"d": "The small intestine of Brian Irons, chief of the RPD. It's an appetizing sight for zombies. <b>Increases</b> zombie movement speed by <b>25%</b>.",
"r": "common",
"i": "icons/IconAddon_briansIntestine.png"
},
{
"n": "Iridescent Umbrella Badge",
"d": "Exposed Survivors will be downed by basic attacks even if uninjured.",
"r": "visceral",
"i": "icons/IconAddon_iridescentUmbrellaBadge.png"
},
{
"n": "Visitor Wristband",
"d": "An electronic Umbrella wristband for visitors to the facility. It also doubles as a tracking device. <b>Increases</b> zombie detection range by <b>2 meters</b> and field of view by <b>10 degrees</b>.",
"r": "common",
"i": "icons/IconAddon_visitorWristband.png"
},
{
"n": "S.T.A.R.S. Field Combat Manual",
"d": "A manual of compiled S. T. A. R. S. close-range combat knowledge. Edited by Chris Redfield. Zombies’ auras turn yellow for <b>6 seconds</b> after hitting a Survivor.",
"r": "common",
"i": "icons/IconAddon_starsFieldCombatManual.png"
},
{
"n": "Marvin’s Blood",
"d": "The contaminated blood of a Raccoon City police officer. <b>Increases</b> mutation rate when hitting Survivors with <b>Tentacle Strike</b> by <b>16%</b> for uncontaminated Survivors and by <b>50%</b> for contaminated Survivors.",
"r": "uncommon",
"i": "icons/IconAddon_marvinsBlood.png"
},
{
"n": "Adrenaline Injector",
"d": "A hormone that heightens senses and prepares the body to fight. <b>Increases</b> length of Killer Instinct when Survivors use a Vaccine by <b>3 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_adrenalineInjector.png"
},
{
"n": "Mikhail’s Eye",
"d": "While little was left of Mikhail, his left eyeball survived the blast that killed him. It remains a tasty treat for zombies. <b>Increases</b> zombie movement speed by <b>35%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_mikhailsEye.png"
},
{
"n": "Zombie Heart",
"d": "The heart of an eviscerated zombie. It’s considered hazardous waste as it’s certainly teeming with viruses. <b>Increases</b> mutation rate when destroying zombies with <b>Tentacle Strike</b> by <b>75%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_zombieHeart.png"
},
{
"n": "Admin Wristband",
"d": "An electronic Umbrella wristband for administrators of the facility. While allowing access to secure areas, it also doubles as a tracking device. <b>Increases</b> zombie detection range by <b>4 meters</b> and field of view by <b>18 degrees</b>.",
"r": "uncommon",
"i": "icons/IconAddon_adminWristband.png"
}
]
},
{
"n": "The Cenobite",
"i": "icons/K25_TheCenobite_Portrait.png",
"a": [
{
"n": "Bent Nail",
"d": "Gain <b>100%</b> bonus Bloodpoints when binding a Survivor with a possessed chain. When hitting a Survivor with a possessed chain, only <b>1</b> additional chain will spawn.",
"r": "common",
"i": "icons/IconAddon_bentNail.png"
},
{
"n": "Lively Crickets",
"d": "<b>Increases</b> turn rate of possessed chains by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_livelyCrickets.png"
},
{
"n": "Burning Candle",
"d": "<b>Decreases</b> the time for Chain Hunts to activate by <b>3 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_burningCandle.png"
},
{
"n": "Leather Strip",
"d": "<b>Decreases Summons of Pain</b>’s cooldown time after possessing a chain by <b>3%</b>.",
"r": "common",
"i": "icons/IconAddon_leatherStrip.png"
},
{
"n": "Wriggling Maggots",
"d": "<b>Increases</b> turn rate of possessed chains by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_wrigglingMaggots.png"
},
{
"n": "Spoiled Meal",
"d": "<b>Increases</b> the possessed chain’s maximum travel distance by <b>2 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_spoiledMeal.png"
},
{
"n": "Skewered Rat",
"d": "<b>Decreases Summons of Pain</b>’s cooldown time after possessing a chain by <b>9%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_skeweredRat.png"
},
{
"n": "Flickering Television",
"d": "<b>Increases</b> the maximum casting range of the gateway by <b>4 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_flickeringTelevision.png"
},
{
"n": "Liquified Gore",
"d": "<b>Increases</b> the time it takes Survivors to solve the Lament Configuration by <b>1 second</b>.",
"r": "uncommon",
"i": "icons/IconAddon_liquifiedGore.png"
},
{
"n": "Larry’s Blood",
"d": "<b>Increases</b> the possessed chain's maximum travel distance by <b>4 meters</b>.",
"r": "rare",
"i": "icons/IconAddon_larrysBlood.png"
},
{
"n": "Torture Pillar",
"d": "<b>Decreases</b> the time for Chain Hunts to activate by <b>6 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_torturePillar.png"
},
{
"n": "Frank’s Heart",
"d": "<b>Increases</b> the maximum casting range of the gateway by <b>8 meters</b>.",
"r": "rare",
"i": "icons/IconAddon_franksHeart.png"
},
{
"n": "Larry’s Remains",
"d": "<b>Increases</b> the time it takes Survivors to solve the Lament Configuration by <b>2 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_larrysRemains.png"
},
{
"n": "Slice of Frank",
"d": "Survivors carrying the Lament Configuration are inflicted with <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/IconAddon_sliceOfFrank.png"
},
{
"n": "Greasy Black Lens",
"d": "Survivors hit by a possessed chain are revealed for <b>6 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_greasyBlackLens.png"
},
{
"n": "Original Pain",
"d": "When a Survivor breaks free from a possessed chain, reveal their aura for <b>8 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_originalPain.png"
},
{
"n": "Impaling Wire",
"d": "When a Survivor uses the environment to break a chain, an additional chain will target them.",
"r": "veryrare",
"i": "icons/IconAddon_impalingWire.png"
},
{
"n": "Chatterer’s Tooth",
"d": "Reveal the Lament Configuration. Picking up the Lament Configuration deactivates Chain Hunts. Gain the <b>Undetectable</b> status effect for <b>25 seconds</b> after picking up the Lament Configuration.<br><br>Undetectable hides the Killer's aura, Terror Radius and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_chatterersTooth.png"
},
{
"n": "Engineer’s Fang",
"d": "Possessed chains injure healthy Survivors, but do not bind them or spawn additional chains. <b>Increases</b> the time to close the gateway after hitting a healthy Survivor with a possessed chain by <b>50%</b>. When hitting an injured Survivor with a possessed chain, only 1 additional chain will spawn.",
"r": "visceral",
"i": "icons/IconAddon_engineersFang.png"
},
{
"n": "Iridescent Lament Configuration",
"d": "When a Chain Hunt is inactive, Survivors beyond <b>24 meters</b> of the Lament Configuration cannot see its aura.",
"r": "visceral",
"i": "icons/IconAddon_iridescentLamentConfiguration.png"
}
]
},
{
"n": "The Artist",
"i": "icons/K26_TheArtist_Portrait.png",
"a": [
{
"n": "Oil Paints",
"d": "<b>Increases</b> the <b>Dire Crow's</b> Killer Instinct detection range by <b>1.5 meters</b>.<br><br>Killer Instinct intermittently reveals the location of Survivors.",
"r": "common",
"i": "icons/IconAddon_oilPaints.png"
},
{
"n": "Vibrant Obituary",
"d": "<b>Increases</b> the length of time a <b>Dire Crow's</b> Killer Instinct reveals Survivors by <b>3 seconds</b>.<br><br>Killer Instinct intermittently reveals the location of Survivors.",
"r": "common",
"i": "icons/IconAddon_vibrantObituary.png"
},
{
"n": "Thick Tar",
"d": "<b>Increases</b> the time for Survivors to repel a <b>Dire Crow</b> swarm by <b>0.5 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_thickTar.png"
},
{
"n": "Choclo Corn",
"d": "<b>Increases</b> the time <b>Dire Crows</b> stay idle for before disintegrating by <b>2 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_chocloCorn.png"
},
{
"n": "Automatic Drawing",
"d": "<b>Decreases Birds of Torment</b> cooldown time by <b>1.5 seconds</b> after a <b>Dire Crow</b> disintegrates from inactivity.",
"r": "uncommon",
"i": "icons/IconAddon_automaticDrawing.png"
},
{
"n": "Festering Carrion",
"d": "<b>Decreases Birds of Torment</b> cooldown time by <b>0.5 seconds</b> after a <b>Dire Crow</b> takes flight.",
"r": "uncommon",
"i": "icons/IconAddon_festeringCarrion.png"
},
{
"n": "Velvet Fabric",
"d": "When a Survivor attempts to repel a <b>Dire Crow</b> swarm, the swarm's aura remains visible for an additional <b>1.5 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_velvetFabric.png"
},
{
"n": "Still Life Crow",
"d": "<b>Increases</b> the time <b>Dire Crows</b> stay idle before disintegrating by <b>4 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_stillLifeCrow.png"
},
{
"n": "Untitled Agony",
"d": "Hindered reduces Survivor movement speed.",
"r": "uncommon",
"i": "icons/IconAddon_untitledAgony.png"
},
{
"n": "Charcoal Stick",
"d": "The <b>Dire Crow's</b> aura is no longer visible when in flight. The <b>Dire Crow's</b> aura is visible for <b>0.5 seconds</b> when summoned.",
"r": "rare",
"i": "icons/IconAddon_charcoalStick.png"
},
{
"n": "Darkest Ink",
"d": "When <b>Dire Crows</b> swarm a Survivor, it afflicts them with the <b>Blindness</b> status effect. The effect persists for <b>15 seconds</b> after <b>Dire Crows</b> are repelled from a Survivor.<br><br>Blindness prevents survivors from seeing auras.",
"r": "rare",
"i": "icons/IconAddon_darkestInk.png"
},
{
"n": "O Grief, O Lover",
"d": "When <b>Dire Crows</b> swarm a Survivor, it afflicts them with the <b>Exhausted</b> status effect.<br><br>Exhausted prevents Survivors from activating certain perks.",
"r": "rare",
"i": "icons/IconAddon_oGriefOLover.png"
},
{
"n": "Thorny Nest",
"d": "Survivors damaged by a <b>Dire Crow</b> are afflicted with the <b>Hemorrhage</b> and <b>Mangled</b> status effects for <b>70 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_thornyNest.png"
},
{
"n": "Silver Bell",
"d": "When <b>Dire Crows</b> swarm a Survivor it afflicts them with the <b>Oblivious</b> status effect.<br><br>Oblivious prevents Survivors from hearing and being affected by the Killer's Terror Radius.",
"r": "rare",
"i": "icons/IconAddon_silverBell.png"
},
{
"n": "Matias' Baby Shoes",
"d": "Survivors within <b>5 meters</b> of an idle <b>Dire Crow</b> have their auras revealed for <b>3 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_matiasBabyShoes.png"
},
{
"n": "Severed Tongue",
"d": "<b>Decreases</b> the length of time <b>The Artist's</b> movement slows when <b>Dire Crows</b> take flight by <b>0.5 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_severedTongue.png"
},
{
"n": "Garden of Rot",
"d": "When a Survivor affected by <b>Dire Crows</b> completes the repel action, they are afflicted by the <b>Exposed</b> status effect for <b>4 seconds</b>.<br><br>Exposed Survivors are downed by basic attacks, even if uninjured.",
"r": "visceral",
"i": "icons/IconAddon_gardenOfRot.png"
},
{
"n": "Ink Egg",
"d": "<b>Increases</b> the maximum capacity of <b>Dire Crows</b> by <b>1</b>. <b>Decreases</b> the time <b>Dire Crows</b> stay idle before disintegrating by <b>2 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_inkEgg.png"
},
{
"n": "Severed Hands",
"d": "Any Survivors within <b>3 meters</b> of a Survivor being swarmed by <b>Dire Crows</b> will also be swarmed.",
"r": "veryrare",
"i": "icons/IconAddon_severedHands.png"
},
{
"n": "Iridescent Feather",
"d": "<b>The Artist</b> gains the <b>Undetectable</b> status effect when <b>Birds of Torment</b> is in cooldown and she holds no <b>Dire Crows</b>. <b>Decreases</b> the maximum capacity of <b>Dire Crows</b> by <b>1</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "visceral",
"i": "icons/IconAddon_iridescentFeather.png"
}
]
},
{
"n": "The Onryō",
"i": "icons/K27_TheOnryo_Portrait.png",
"a": [
{
"n": "Videotape Copy",
"d": "<b>Increases</b> the range at which Survivors gain <b>Condemned</b> from <b>Projection</b> by <b>2 meters</b>",
"r": "common",
"i": "icons/IconAddon_videotapeCopy.png"
},
{
"n": "Old Newspaper",
"d": "<b>Increases</b> the <b>Manifestation</b> invisibility duration by <b>33%</b>.",
"r": "common",
"i": "icons/IconAddon_oldNewspaper.png"
},
{
"n": "Cabin Sign",
"d": "<b>Decreases</b> the time it takes for a TV to turn on after <b>Projection</b> by <b>4.5 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_cabinSign.png"
},
{
"n": "Mother's Mirror",
"d": "<b>Increases</b> the <b>Manifestation</b> intermittent visibility duration by <b>2 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_mothersMirror.png"
},
{
"n": "Reiko's Watch",
"d": "<b>Increases</b> the invisibility duration while <b>Demanifested</b> by <b>25%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_reikosWatch.png"
},
{
"n": "Sea-Soaked Cloth",
"d": "While Survivors are within <b>8 meters</b> of a powered TV, they are afflicted with the <b>Blindness</b> status effect. This effect lingers for <b>7 seconds</b> after the TV is turned off.<br><br><b>Blindness</b> prevents Survivors from seeing auras.",
"r": "uncommon",
"i": "icons/IconAddon_seaSoakedCloth.png"
},
{
"n": "Clump of Hair",
"d": "<b>Decreases</b> the range at which The Onryō is visible while <b>Demanifested</b> by <b>6 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_clumpOfHair.png"
},
{
"n": "Well Stone",
"d": "<b>Decreases</b> the time it takes for a TV to turn on after being turned off by a Survivor by <b>7 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_wellStone.png"
},
{
"n": "Yoichi's Fishing Net",
"d": "Survivors with at least <b>4 stacks</b> of <b>Condemned</b> suffer from <b>Blindness</b>.<br><br><b>Blindness</b> prevents Survivors from seeing auras.",
"r": "uncommon",
"i": "icons/IconAddon_yoichisFishingNet.png"
},
{
"n": "Rickety Pinwheel",
"d": "While Survivors are within <b>8 meters</b> of a powered TV, they are afflicted with the <b>Oblivious</b> status effect. This effect lingers for <b>7 seconds</b> after the TV is turned off.<br><br><b>Oblivious</b> prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "rare",
"i": "icons/IconAddon_ricketyPinwheel.png"
},
{
"n": "Well Water",
"d": "<b>Increases</b> the duration of the <b>Undetectable</b> status effect by <b>2 seconds</b> when <b>Manifesting</b> by any means.<br><br><b>Undetectable</b> hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "rare",
"i": "icons/IconAddon_wellWater.png"
},
{
"n": "Ring Drawing",
"d": "When hooking a Survivor carrying a tape, other Survivors gain <b>1</b> <b>Condemned</b> stack.",
"r": "rare",
"i": "icons/IconAddon_ringDrawing.png"
},
{
"n": "Bloody Fingernails",
"d": "<b>Increases</b> the duration of <b>Projection</b>’s bonus movement speed by <b>50%</b>.",
"r": "rare",
"i": "icons/IconAddon_bloodyFingernails.png"
},
{
"n": "Mother's Comb",
"d": "Turning off a TV will trigger a loud noise notification. Reveals the Aura of any TV that is turned off by any means.",
"r": "rare",
"i": "icons/IconAddon_mothersComb.png"
},
{
"n": "VCR",
"d": "All TVs play the <b>Projection</b> effects when The Onryō <b>Projects</b> to a TV.",
"r": "veryrare",
"i": "icons/IconAddon_vcr.png"
},
{
"n": "Distorted Photo",
"d": "Survivors witnessing a Manifestation from within <b>16 meters</b> will scream, and then their auras are shown for <b>4 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_distortedPhoto.png"
},
{
"n": "Telephone",
"d": "<b>Manifestation</b> afflicts Survivors within <b>7 meters</b> with a <b>3% Hindered</b> status effect for <b>3 seconds</b>.<br><br><b>Hindered</b> reduces survivor movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_telephone.png"
},
{
"n": "Tape Editing Deck",
"d": "Each Survivor starts the trial with a Tape in their possession, and their target TV is the furthest from their location. Anytime a Survivor inserts a tape in their target TV, reveal their aura for <b>6 seconds</b>",
"r": "veryrare",
"i": "icons/IconAddon_tapeEditingDeck.png"
},
{
"n": "Remote Control",
"d": "After using <b>Projection</b>, the Auras of Survivors who are within <b>12 meters</b> of a powered TV are revealed to you for <b>7 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_remoteControl.png"
},
{
"n": "Iridescent Videotape",
"d": "<b>Projection</b> does not turn off TVs, and does not apply <b>Condemned</b>. <b>Increases</b> the time it takes for a TV to turn on after being turned off by Survivors by <b>20%</b>",
"r": "visceral",
"i": "icons/IconAddon_iridescentVideotape.png"
}
]
},
{
"n": "The Dredge",
"i": "icons/K28_TheDredge_Portrait.png",
"a": [
{
"n": "Wooden Plank",
"d": "<b>Increases</b> the amount <b>Nightfall</b> charges when a Survivor is hooked by <b>25%</b>.",
"r": "common",
"i": "icons/IconAddon_woodenPlank.png"
},
{
"n": "Caffeine Tablets",
"d": "Auras of locked lockers are visible while charging <b>The Gloaming</b> and Teleporting.",
"r": "common",
"i": "icons/IconAddon_caffeineTablets.png"
},
{
"n": "Mortar and Pestle",
"d": "<b>The Dredge</b> will emerge from its Remnant facing the same direction as when Teleport is activated instead of the direction facing when the Remnant was placed.",
"r": "common",
"i": "icons/IconAddon_mortarAndPestle.png"
},
{
"n": "Follower’s Cowl",
"d": "Teleporting to the Remnant will activate Killer Instinct even when not in <b>Nightfall</b>.",
"r": "common",
"i": "icons/IconAddon_followersCowl.png"
},
{
"n": "Burnt Letters",
"d": "<b>Increases</b> the amount <b>Nightfall</b> charges when injuring a Survivor by <b>25%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_burntLetters.png"
},
{
"n": "Air Freshener",
"d": "<b>Adds</b> <b>1 additional Power Token</b> for Teleporting.",
"r": "uncommon",
"i": "icons/IconAddon_airFreshener.png"
},
{
"n": "Haddie’s Calendar",
"d": "<b>Decreases</b> the time to exit a locked locker by <b>0.4 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_haddiesCalendar.png"
},
{
"n": "Fallen Shingle",
"d": "Using <b>Reign of Darkness</b> increases <b>Nightfall</b> charge speed by an additional <b>15% per second</b>.",
"r": "uncommon",
"i": "icons/IconAddon_fallenShingle.png"
},
{
"n": "Malthinker’s Skull",
"d": "<b>Increases</b> <b>Nightfall</b> charge speed by <b>25%</b> while any Survivor is injured.",
"r": "uncommon",
"i": "icons/IconAddon_malthinkersSkull.png"
},
{
"n": "Worry Stone",
"d": "Reveals the aura of a Survivor for <b>6 seconds</b> when they lock a locker.",
"r": "rare",
"i": "icons/IconAddon_worryStone.png"
},
{
"n": "Ottomarian Writing",
"d": "<b>Decreases</b> <b>Teleport</b> cooldown by <b>2 seconds</b> while not in <b>Nightfall</b>.",
"r": "rare",
"i": "icons/IconAddon_ottomarianWriting.png"
},
{
"n": "Broken Doll",
"d": "<b>Increases</b> the duration of <b>Nightfall</b> by <b>20 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_brokenDoll.png"
},
{
"n": "War Helmet",
"d": "<b>Increases</b> <b>Killer Instinct</b> duration by <b>1.5 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_warHelmet.png"
},
{
"n": "Destroyed Pillow",
"d": "<b>Decreases</b> <b>Teleport</b> cooldown by <b>2.5 seconds</b> during <b>Nightfall</b>.",
"r": "rare",
"i": "icons/IconAddon_destroyedPillow.png"
},
{
"n": "Tilling Blade",
"d": "When a Survivor is injured from full health during <b>Nightfall</b>, they are afflicted with the <b>Blindness, Hemorrhage,</b> and <b>Mangled</b> status effects for <b>80 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "veryrare",
"i": "icons/IconAddon_tillingBlade.png"
},
{
"n": "Boat Key",
"d": "<b>Increases</b> <b>Teleport</b> speed by <b>16%</b> while not in <b>Nightfall</b>. When the exit gates are powered, all active locks are instantly broken.",
"r": "veryrare",
"i": "icons/IconAddon_boatKey.png"
},
{
"n": "Field Recorder",
"d": "<b>Nightfall</b> is active at the start of the trial. <b>Nightfall</b> is automatically triggered when the last generator is repaired. Any Survivor that comes into contact with a Remnant is afflicted with the <b>Exhausted</b> status effect for <b>15 seconds</b>.<br><br>Exhausted prevents Survivors from activating certain perks.",
"r": "veryrare",
"i": "icons/IconAddon_fieldRecorder.png"
},
{
"n": "Lavalier Microphone",
"d": "Survivor auras are revealed for <b>3 seconds</b> when using the last <b>Teleport</b> token. When entering a locker using <b>Teleport</b>, other lockers within <b>6 meters</b> of Survivors open and slam their doors.",
"r": "veryrare",
"i": "icons/IconAddon_lavalierMicrophone.png"
},
{
"n": "Sacrificial Knife",
"d": "Exiting a locker during <b>Nightfall</b> blocks all vault locations within <b>16 meters</b> for <b>5 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_sacrificialKnife.png"
},
{
"n": "Iridescent Wooden Plank",
"d": "Survivors are afflicted with the <b>Exposed</b> status effect for the last <b>12 seconds</b> of <b>Nightfall</b>.<br><br>Exposed Survivors are downed by basic attacks, even if uninjured.",
"r": "visceral",
"i": "icons/IconAddon_iridescentWoodenPlank.png"
}
]
},
{
"n": "The Mastermind",
"i": "icons/K29_TheMastermind_Portrait.png",
"a": [
{
"n": "Jewel Beetle",
"d": "<b>Decreases</b> the <b>Virulent Bound</b> extension when grabbing a Survivor mid-Bound by <b>50%</b>. Gain <b>100%</b> bonus Bloodpoints for <b>Virulent Bound</b> score events.",
"r": "common",
"i": "icons/IconAddon_jewelBeetle.png"
},
{
"n": "Green Herb",
"d": "<b>Increases</b> the rate of Infection when grabbing a Survivor during a <b>Virulent Bound</b> by <b>30%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_greenHerb.png"
},
{
"n": "Unicorn Medallion",
"d": "<b>Increases</b> the initial <b>Virulent Bound</b> distance by <b>20%</b>. <b>Decreases</b> the subsequent <b>Virulent Bound</b> distance by <b>20%</b>.",
"r": "common",
"i": "icons/IconAddon_unicornMedallion.png"
},
{
"n": "R.P.D. Shoulder Walkie",
"d": "<b>Decreases</b> the initial <b>Virulent Bound</b> distance by <b>20%</b>. <b>Increases</b> the subsequent <b>Virulent Bound</b> distance by <b>20%</b>.",
"r": "common",
"i": "icons/IconAddon_RPDShoulderWalkie.png"
},
{
"n": "Loose Crank",
"d": "To the person whose only tool is a crank, the whole world looks like a crank-shaped hole. <b>Increases</b> movement speed between the first and second <b>Virulent Bounds</b> by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_looseCrank.png"
},
{
"n": "Leather Gloves",
"d": "Gloves of a cold, calculating schemer. They impart an air of icy professionalism. <b>Decreases</b> the time to recharge <b>Virulent Bound</b> by <b>8%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_leatherGloves.png"
},
{
"n": "Lion Medallion",
"d": "An old medallion depicting a brave lion. It was made when the Raccoon Police Station was still an art museum. <b>Increases</b> the distance at which Survivors are thrown by <b>30%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_lionMedallion.png"
},
{
"n": "Chalice (Gold)",
"d": "A chalice of pure gold used to celebrate the summer solstice. <b>Increases</b> the <b>Virulent Bound</b> extension when grabbing a Survivor mid-Bound by <b>50%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_chaliceGold.png"
},
{
"n": "Bullhorn",
"d": "<b>Oblivious</b> prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/IconAddon_bullhorn.png"
},
{
"n": "Portable Safe",
"d": "Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_portableSafe.png"
},
{
"n": "Red Herb",
"d": "Acts as a reagent that strengthens the effect of that with which it is combined. <b>Increases</b> the time it takes for Survivors to use a <b>First Aid Spray</b> by <b>2 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_redHerb.png"
},
{
"n": "Maiden Medallion",
"d": "<b>Blindness</b> prevents Survivors from seeing auras.",
"r": "rare",
"i": "icons/IconAddon_maidenMedallion.png"
},
{
"n": "Video Conference Device",
"d": "Many intricate conspiracies were orchestrated on devices just like this one. <b>Increases</b> the <b>Infection</b> passive gain rate by <b>30%</b>.",
"r": "rare",
"i": "icons/IconAddon_videoConferenceDevice.png"
},
{
"n": "Egg (Gold)",
"d": "A highly coveted foodstuff. The cash worth is second only to its regenerative effects. <b>Increases</b> the duration of the additional <b>Virulent Bound</b> window by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_eggGold.png"
},
{
"n": "Dark Sunglasses",
"d": "<b>Undetectable</b> hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_darkSunglasses.png"
},
{
"n": "Helicopter Stick",
"d": "Debris from a helicopter crash. Few jobs are more dangerous than a helicopter pilot’s when Wesker is involved. When a Survivor uses a <b>First Aid Spray</b>, reveal their aura for <b>8 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_helicopterStick.png"
},
{
"n": "Uroboros Tendril",
"d": "The result of decades of Bio Organic Weapon research. It will not rest until it has swallowed the entire world. <b>Increases</b> movement speed while charging <b>Virulent Bound</b> by <b>5%</b>.",
"r": "common",
"i": "icons/IconAddon_uroborosTendril.png"
},
{
"n": "Uroboros Virus",
"d": "For some, the strength and resistance was worth the trade-off. When a Survivor reaches full infection, reveal their aura for <b>4 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_uroborosVirus.png"
},
{
"n": "Lab Photo",
"d": "Wesker was as much a researcher as he was a guinea pig for Umbrella's bio-weapons. You can special-break Pallets and Breakable Walls with <b>Virulent Bound</b>. Removes the ability to special-vault pallets while using <b>Virulent Bound</b>.",
"r": "visceral",
"i": "icons/IconAddon_labPhoto.png"
},
{
"n": "Iridescent Uroboros Vial",
"d": "<b>Exposed</b> Survivors will be downed by basic attacks even if uninjured.",
"r": "visceral",
"i": "icons/IconAddon_iridescentUroborosVial.png"
}
]
},
{
"n": "The Knight",
"i": "icons/K30_TheKnight_Portrait.png",
"a": [
{
"n": "Gritty Lump",
"d": "<b>Increases</b> Guards' movement Speed while on Patrol by <b>9%</b>.",
"r": "common",
"i": "icons/IconAddon_grittyLump.png"
},
{
"n": "Map of the Realm",
"d": "<b>Increases</b> the detection Range for Guards on Patrol by <b>2 meters</b>.",
"r": "common",
"i": "icons/IconAddon_mapOfTheRealm.png"
},
{
"n": "Tattered Tabard",
"d": "<b>Increases</b> Patrol time for all Guards by <b>8 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_tatteredTabard.png"
},
{
"n": "Pillaged Mead",
"d": "Guards special-break Pallets and Breakable walls, and damage Generators <b>10%</b> faster.",
"r": "common",
"i": "icons/IconAddon_pillagedMead.png"
},
{
"n": "Dried Horsemeat",
"d": "<b>Increases</b> the amount of time a Guard will Hunt a Survivor by <b>4 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_driedHorsemeat.png"
},
{
"n": "Battleaxe Head",
"d": "<b>Decreases</b> the cooldown after summoning The Carnifex by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_battleAxeHead.png"
},
{
"n": "Treated Blade",
"d": "<b>Decreases</b> the cooldown after summoning The Assassin by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_treatedBlade.png"
},
{
"n": "Cold Steel Manacles",
"d": "<b>Decreases</b> the cooldown after summoning The Jailer by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_coldSteelManacles.png"
},
{
"n": "Call To Arms",
"d": "<b>Increases</b> the length of a Patrol Path by <b>4 meters</b>, and, while creating the path, movement speed is <b>increased</b> by <b>7%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_callToArms.png"
},
{
"n": "Sharpened Mount",
"d": "<b>Increases</b> the time it takes for the Standard to spawn by <b>15%</b>.",
"r": "rare",
"i": "icons/IconAddon_sharpenedMount.png"
},
{
"n": "Grim Iron Mask",
"d": "When a Survivor is Detected by a Guard, the Survivor suffers from <b>Blindness</b> for <b>75 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "rare",
"i": "icons/IconAddon_grimIronMask.png"
},
{
"n": "Broken Hilt",
"d": "Guards inflict the <b>Hemorrhage</b> and <b>Mangled</b> status effects for <b>70 seconds</b> when damaging a Survivor.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_brokenHilt.png"
},
{
"n": "Ironworker’s Tongs",
"d": "When a Survivor escapes a Guard Hunt successfully, they suffer from the <b>Oblivious</b> status effect for <b>60 seconds</b>.<br><br>Oblivious prevents survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "rare",
"i": "icons/IconAddon_ironworkersTongs.png"
},
{
"n": "Town Watch’s Torch",
"d": "While a Guard is actively Hunting a Survivor, gain the <b>Undetectable</b> status effect.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "rare",
"i": "icons/IconAddon_townWatchsTorch.png"
},
{
"n": "Blacksmith’s Hammer",
"d": "Guards inflict the <b>Broken</b> status effect for <b>60 seconds</b> when damaging a Survivor.<br><br>Broken prevents Survivors from being healed.",
"r": "veryrare",
"i": "icons/IconAddon_blacksmithsHammer.png"
},
{
"n": "Flint and Steel",
"d": "After summoning The Carnifex, The Knight can see the auras of Survivors within <b>24 meters</b> of downed pallets for <b>8 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_flintAndSteel.png"
},
{
"n": "Healing Poultice",
"d": "After summoning The Assassin, all Survivors within <b>8 meters</b> from the Guard's initial position have their aura revealed for <b>8 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_healingPoultice.png"
},
{
"n": "Jailer's Chimes",
"d": "After summoning The Jailer, Survivors that cross his Patrol Path have their aura revealed for <b>8 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_jailersChimes.png"
},
{
"n": "Knight’s Contract",
"d": "After giving an Order, the Guard will remain for an extra <b>8 seconds</b>, triggering a Hunt if they detect a Survivor.",
"r": "visceral",
"i": "icons/IconAddon_knightsContract.png"
},
{
"n": "Iridescent Company Banner",
"d": "While a Survivor is Hunted by a Guard, spikes block the exit for the Hunted Survivor. When they vault, that vault location is blocked for all Survivors for the duration of the Hunt. While creating a Patrol Path, passing through vault locations will block these locations for <b>25 seconds</b> after summoning a Guard.",
"r": "visceral",
"i": "icons/IconAddon_iridescentCompanyBanner.png"
}
]
},
{
"n": "The Skull Merchant",
"i": "icons/K31_TheSkullMerchant_Portrait.png",
"a": [
{
"n": "Adi Valente #1",
"d": "Survivors with a Claw Trap suffer from <b>20% smaller</b> skill checks. This effect lasts until the Claw Trap is removed.",
"r": "common",
"i": "icons/IconAddon_adiValenteIssue1.png"
},
{
"n": "High-Power Floodlight",
"d": "Survivors with a Claw Trap suffer from the <b>Blindness</b> status effect. This effect lasts until the Claw Trap is removed. Blindness prevents Survivors from seeing auras.",
"r": "common",
"i": "icons/IconAddon_high-PowerFloodlight.png"
},
{
"n": "Geographical Readout",
"d": "The drones generate and communicate a detailed three-dimensional map of the terrain, making traversal easier. Whenever you deploy a Drone, for <b>8 seconds</b>, you basic-vault Windows, basic-break Pallets or Breakable Walls, and damage Generators <b>20%</b> faster.",
"r": "veryrare",
"i": "icons/IconAddon_geographicalReadout.png"
},
{
"n": "High Current Upgrade",
"d": "<b>Increases</b> the time Survivors appear on the radar when detected by <b>1 second</b>.",
"r": "common",
"i": "icons/IconAddon_high-CurrentUpgrade.png"
},
{
"n": "Adaptive Lighting",
"d": "<b>Increases</b> the duration of the <b>Undetectable</b> status effect by <b>20%</b>. Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "uncommon",
"i": "icons/IconAddon_adaptiveLighting.png"
},
{
"n": "Stereo Remote Mic",
"d": "<b>Decreases</b> the Disabled state duration of Drones by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_stereoRemoteMic.png"
},
{
"n": "Supercharge",
"d": "<b>Increases</b> the battery life of Claw Traps by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_supercharge.png"
},
{
"n": "Shotgun Speakers",
"d": "Survivors with a Claw Trap have no skill check warning. This effect lasts until the Claw Trap is removed.",
"r": "uncommon",
"i": "icons/IconAddon_shotgunSpeakers.png"
},
{
"n": "Low-Power Mode",
"d": "<b>Decreases</b> Drone Rotation speed by <b>100%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_low-PowerMode.png"
},
{
"n": "Powdered Glass",
"d": "Claw Trapped Survivors you hit suffer from the <b>Hemorrhage</b> and <b>Mangled</b> status effects for <b>70 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_powderedGlass.png"
},
{
"n": "Vital Targeting Processor",
"d": "<b>Increases</b> the <b>Hindered</b> status effect gained by Claw Trapped Survivors when detected by a Drone by <b>2%</b>. Hindered reduces Survivor movement speed.",
"r": "rare",
"i": "icons/IconAddon_vitalTargetingProcessor.png"
},
{
"n": "Brown Noise Generator",
"d": "Survivors with a Claw Trap suffer from the <b>Oblivious</b> status effect. This lasts until the Claw Trap is removed. Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "rare",
"i": "icons/IconAddon_brownNoiseGenerator.png"
},
{
"n": "Loose Screw",
"d": "Survivors with a Claw Trap suffer from the <b>Exhausted</b> status effect for <b>6 seconds</b>. Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/IconAddon_looseScrew.png"
},
{
"n": "Infrared Upgrade",
"d": "Anytime a <b>Claw Trap</b> is removed, the Survivor's aura is revealed for <b>4 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_infraredUpgrade.png"
},
{
"n": "Randomized Strobes",
"d": "<b>Increases</b> the duration of the <b>Hindered</b> status effect Claw Trapped Survivors suffer from when detected by a Drone by <b>1 second</b>.<br><br>Hindered reduces Survivor movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_randomisedStrobes.png"
},
{
"n": "Advanced Movement Prediction",
"d": "When a Survivor receives a Claw Trap, reveal their aura for <b>6 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_advancedMovementPrediction.png"
},
{
"n": "Ultrasonic Speaker",
"d": "<b>Decreases</b> Survivors' scan line immunity duration by <b>10%</b>.<br>",
"r": "common",
"i": "icons/IconAddon_ultrasonicSpeaker.png"
},
{
"n": "Expired Batteries",
"d": "All Survivors start the trial with a Claw Trap, which has <b>50%</b> less battery life. Claw Trap battery life increases by <b>10%</b> for each Claw Trap received, up to <b>150%</b>.",
"r": "visceral",
"i": "icons/IconAddon_expiredBatteries.png"
},
{
"n": "Prototype Rotor",
"d": "<b>Increases</b> Drones' rotation speed by <b>10%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_prototypeRotor.png"
},
{
"n": "Iridescent Unpublished Manuscript",
"d": "When a Drone is disabled, it gains a <b>32-meter</b> Terror Radius for <b>15 seconds</b>. During this time, gain the <b>Undetectable</b> status effect.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "visceral",
"i": "icons/IconAddon_iridescentUnpublishedManuscript.png"
}
]
},
{
"n": "The Singularity",
"i": "icons/K32_TheSingularity_Portrait.png",
"a": [
{
"n": "Broken Security Key",
"d": "The reboot timer when the EMP affects the Biopods is reduced by <b>15%</b>.",
"r": "common",
"i": "icons/IconAddon_brokenSecurityKey.png"
},
{
"n": "Heavy Water",
"d": "Supply cases' aura distance is reduced by <b>8 meters</b>.",
"r": "common",
"i": "icons/IconAddon_heavyWater.png"
},
{
"n": "Kid’s Ball Glove",
"d": "Overclock Mode duration is increased by <b>8%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_kidsBallGlove.png"
},
{
"n": "Nutritional Slurry",
"d": "Get <b>2</b> extra Biopods.",
"r": "common",
"i": "icons/IconAddon_nutritionalSlurry.png"
},
{
"n": "Diagnostic Tool (Construction)",
"d": "Reveals the auras of Survivors who pick up an EMP for <b>8 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_diagnosticToolConstruction.png"
},
{
"n": "Diagnostic Tool (Repair)",
"d": "<b>Increases</b> targeting range while in a Biopod by <b>4 meters</b>.",
"r": "common",
"i": "icons/IconAddon_diagnosticToolRepair.png"
},
{
"n": "Android Arm",
"d": "Slipstream infection range between Survivors is <b>increased</b> by <b>2 meters</b> and spreads <b>25%</b> faster.",
"r": "uncommon",
"i": "icons/IconAddon_androidArm.png"
},
{
"n": "Cremated Remains",
"d": "Survivors afflicted with Temporal Slipstream suffer from <b>Blindness</b>.<br><br>Blindness prevents survivors from seeing auras.",
"r": "uncommon",
"i": "icons/IconAddon_crematedRemains.png"
},
{
"n": "Foreign Plant Fibers",
"d": "<b>Decreases</b> the duration of the <b>Hindered</b> status effect after being stunned by a pallet while in Overclock mode by <b>20%</b>.<br><br>Hindered reduces Killer movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_foreignPlantFibres.png"
},
{
"n": "Live Wires",
"d": "A Survivor who is cleansed of Slipstream screams, interrupting their current action.",
"r": "rare",
"i": "icons/IconAddon_liveWires.png"
},
{
"n": "Cryo Gel",
"d": "Slipstreamed Survivors suffer from the <b>Hemorrhage</b> status effect for <b>60 seconds</b> when hit with a basic attack.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors.",
"r": "uncommon",
"i": "icons/IconAddon_cryoGel.png"
},
{
"n": "Denied Requisition Form",
"d": "At the start of the trial, EMPs take <b>30 seconds</b> longer to generate. All survivors start the match Slipstreamed.",
"r": "visceral",
"i": "icons/IconAddon_deniedRequisitionForm.png"
},
{
"n": "Iridescent Crystal Shard",
"d": "When a Biopod is created, the auras of all Survivors within <b>10 meters</b> of that Biopod are revealed to you for <b>6 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentCrystalShard.png"
},
{
"n": "Ultrasonic Sensor",
"d": "Exiting a Biopod within <b>2 seconds</b> of Slipstreaming a Survivor decreases your Terror Radius by <b>12 meters</b> for <b>12 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_ultrasonicSensor.png"
},
{
"n": "Spent Oxygen Tank",
"d": "When a survivor becomes Slipstreamed, they are <b>Exhausted</b> for <b>6 seconds</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/IconAddon_spentOxygenTank.png"
},
{
"n": "Nanomachine Gel",
"d": "<b>Decreases</b> Biopod cooldown by <b>15%</b> after Slipstreaming a Survivor.",
"r": "rare",
"i": "icons/IconAddon_nanomachineGel.png"
},
{
"n": "Hyperawareness Spray",
"d": "While a Survivor is Slipstreamed, they hear the Terror Radius as if you were nearby.",
"r": "rare",
"i": "icons/IconAddon_hyperawarenessSpray.png"
},
{
"n": "Hologram Generator",
"d": "After a successful Slipstream teleport from a Biopod, the target Survivor suffers from the <b>Oblivious</b> status effect for <b>60 seconds</b>.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "rare",
"i": "icons/IconAddon_hologramGenerator.png"
},
{
"n": "Soma Family Photo",
"d": "Slipstreaming a Survivor using a Biopod inflicts a <b>3% Hindered</b> status effect for <b>6 seconds</b>.<br><br>Hindered reduces Survivor movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_somaFamilyPhoto.png"
},
{
"n": "Crew Manifest",
"d": "Reveals a Slipstreamed Survivor's aura for <b>8 seconds</b> when they infect another Survivor. <b>Increases</b> the Slipstream infection range between Survivors by <b>2 meters</b>.",
"r": "veryrare",
"i": "icons/IconAddon_crewManifest.png"
}
]
},
{
"n": "The Xenomorph",
"i": "icons/K33_TheXenomorph_Portrait.png",
"a": [
{
"n": "Lambert’s Star Map",
"d": "Decreases the flame distance of <b>Turrets</b> by <b>2 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_lambertsStarMap.png"
},
{
"n": "Cereal Rations",
"d": "<b>Turret</b> auras are visible while in tunnels and when coming out of vents for <b>3 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_cerealRations.png"
},
{
"n": "Ripley's Watch",
"d": "When a <b>Turret</b> removes <b>Crawler Mode</b>, it is <b>destroyed</b> automatically.",
"r": "common",
"i": "icons/IconAddon_ripleysWatch.png"
},
{
"n": "Ovomorph",
"d": "The cooldown of <b>Crawler Mode</b> is <b>25%</b> faster while outside of tunnels.",
"r": "common",
"i": "icons/IconAddon_ovomorph.png"
},
{
"n": "Drinking Bird",
"d": "After exiting a tunnel, Killer Instinct duration is increased by <b>3 seconds</b>.<br><br>Killer Instinct intermittently reveals the location of Survivors.",
"r": "common",
"i": "icons/IconAddon_drinkingBird.png"
},
{
"n": "Crew Headset",
"d": "While in tunnels, footstep detection is increased by <b>6 meters.</b>",
"r": "uncommon",
"i": "icons/IconAddon_crewHeadset.png"
},
{
"n": "Emergency Helmet",
"d": "<b>Increases</b> resistance to staggering from <b>Turrets</b> by <b>15%</b>.",
"r": "rare",
"i": "icons/IconAddon_emergencyHelmet.png"
},
{
"n": "Ash’s Innards",
"d": "<b>Turrets</b> take <b>15 seconds</b> longer to respawn after they are destroyed.",
"r": "uncommon",
"i": "icons/IconAddon_ashsInnards.png"
},
{
"n": "Light Wand",
"d": "<b>Increases</b> downtime of <b>Turrets</b> by <b>3 second</b> after exiting a tunnel.",
"r": "uncommon",
"i": "icons/IconAddon_lightWand.png"
},
{
"n": "Kane’s Helmet",
"d": "Survivors hit with a <b>Tail Attack</b> are <b>Mangled</b> for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_kanesHelmet.png"
},
{
"n": "Multipurpose Hatchet",
"d": "Survivors hit by a <b>Tail Attack</b> suffer from <b>Hemorrhage</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_multipurposeHatchet.png"
},
{
"n": "Parker’s Headband",
"d": "After exiting a tunnel, gain <b>5% Haste</b> for <b>3 seconds</b>.<br><br>Haste increases Killer movement speed.",
"r": "rare",
"i": "icons/IconAddon_parkersHeadband.png"
},
{
"n": "Molted Skin",
"d": "After deploying a <b>Turret</b>, the deploying Survivor suffers from the <b>Exhausted</b> status effect for <b>30 seconds</b>.<br><br>Exhausted prevents Survivors from activating certain perks.",
"r": "rare",
"i": "icons/IconAddon_moultedSkin.png"
},
{
"n": "Brett’s Cap",
"d": "Destroying a <b>Turret</b> causes all Survivors within <b>16 meters</b> to suffer from <b>Blindness</b> for <b>25 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "uncommon",
"i": "icons/IconAddon_brettsCap.png"
},
{
"n": "Semiotic Keyboard",
"d": "Generators within <b>16 meters</b> of a <b>Turret</b> have the intensity of their auras determined by their repair progression.",
"r": "veryrare",
"i": "icons/IconAddon_semioticKeyboard.png"
},
{
"n": "Harpoon Gun",
"d": "Exiting a tunnel and hitting a Survivor within <b>30 seconds</b> causes all Survivors further than <b>16 meters</b> from you to scream and reveal their locations.",
"r": "veryrare",
"i": "icons/IconAddon_harpoonGun.png"
},
{
"n": "Cat Carrier",
"d": "Exiting <b>Crawler Mode</b> due to a <b>Turret attack</b> makes you <b>Undetectable</b> for <b>30 seconds</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_catCarrier.png"
},
{
"n": "Self-Destruct Bolt",
"d": "While in <b>Crawler Mode</b>, you basic-vault Windows <b>30%</b> faster.",
"r": "veryrare",
"i": "icons/IconAddon_selfDestructBolt.png"
},
{
"n": "Improvised Cattle Prod",
"d": "Each time a generator is completed, a <b>15-second</b> timer starts. Any Survivor who comes within 10 meters of a Control Station during that time has their aura revealed for the remainder of the timer.",
"r": "visceral",
"i": "icons/IconAddon_improvisedCattleProd.png"
},
{
"n": "Acidic Blood",
"d": "While exiting a tunnel in <b>Crawler Mode</b>, any Survivor who stuns you with a pallet in the next <b>20 seconds</b> takes damage. If that Survivor is already injured, they suffer from <b>Deep Wound</b>.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
"r": "visceral",
"i": "icons/IconAddon_acidicBlood.png"
}
]
},
{
"n": "The Good Guy",
"i": "icons/K34_TheGoodGuy_Portrait.png",
"a": [
{
"n": "Strobing Light",
"d": "<b>Decreases</b> the Terror Radius by <b>8 meters</b> when <b>Hidey-Ho Mode</b> is in cooldown.",
"r": "common",
"i": "icons/IconAddon_strobingLight.png"
},
{
"n": "Doll Eyes",
"d": "While in <b>Hidey-Ho Mode</b>, reveals auras of all windows and downed pallets within <b>20 meters</b>.",
"r": "common",
"i": "icons/IconAddon_dollEyes.png"
},
{
"n": "Tiny Scalpel",
"d": "While in <b>Hidey-Ho Mode</b>, pools of blood are brighter.",
"r": "common",
"i": "icons/IconAddon_tinyScalpel.png"
},
{
"n": "Good Guy Box",
"d": "<b>Decreases Slice & Dice</b> hit cooldown by <b>7%</b>.",
"r": "common",
"i": "icons/IconAddon_goodGuyBox.png"
},
{
"n": "Power Drill",
"d": "<b>Reduces Hidey-Ho Mode</b> cooldown by <b>10%</b> after hitting a Survivor with <b>Slice & Dice</b>.",
"r": "uncommon",
"i": "icons/IconAddon_powerDrill.png"
},
{
"n": "Electric Carving Knife",
"d": "<b>Decreases Slice & Dice</b> miss cooldown by <b>5%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_electricCarvingKnife.png"
},
{
"n": "Jump Rope",
"d": "<b>Increases</b> duration of <b>Slice & Dice</b> by <b>8%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_jumpRopePlaytimesOver.png"
},
{
"n": "Hair Spray & Candle",
"d": "<b>Decreases</b> the time that basic attacks remove from <b>Hidey-Ho Mode</b> by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_hairSprayCandle.png"
},
{
"n": "Automatic Screwdriver",
"d": "Missing a <b>Slice & Dice reduces Hidey-Ho Mode</b> cooldown by <b>8%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_automaticScrewdriver.png"
},
{
"n": "Portable TV",
"d": "<b>Slice & Dice</b> duration <b>increased</b> by <b>70%</b> once the Exit Gates have been powered.",
"r": "rare",
"i": "icons/IconAddon_portableTv.png"
},
{
"n": "Silk Pillow",
"d": "Terror Radius is <b>reduced</b> by <b>6 meters</b>, but <b>Slice & Dice</b> charge time is <b>increased</b> by <b>50%</b>.",
"r": "rare",
"i": "icons/IconAddon_silkPillow.png"
},
{
"n": "Iridescent Amulet",
"d": "<b>Increases</b> duration of <b>Hidey-Ho Mode</b> by <b>50%</b>. Basic attacks immediately <b>end</b> <b>Hidey-Ho Mode</b>.",
"r": "visceral",
"i": "icons/IconAddon_iridescentAmulet.png"
},
{
"n": "Plastic Bag",
"d": "If a Survivor walks through an illusory Footfall, they suffer from <b>Exhausted</b> for <b>15 seconds</b>.<br><br>Exhausted prevents Survivors from activating other perks that cause Exhausted.",
"r": "veryrare",
"i": "icons/IconAddon_plasticBag.png"
},
{
"n": "Pile of Nails",
"d": "Upon manually exiting <b>Hidey-Ho Mode</b>, The Good Guy remains <b>Undetectable</b> for <b>3 seconds</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_pileOfNails.png"
},
{
"n": "Yardstick",
"d": "A <b>Scamper</b> reveals Survivor auras within <b>16 meters</b> of you for <b>3 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_yardstick.png"
},
{
"n": "Running Shoes",
"d": "<b>Gain 2%</b> movement speed after a <b>Scamper</b> for <b>5 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_runningShoes.png"
},
{
"n": "Rat Poison",
"d": "While performing a <b>Slice & Dice</b>, the auras of Survivors within <b>6 meters</b> of you are revealed for <b>2.5 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_ratPoison.png"
},
{
"n": "Straight Razor",
"d": "<b>Slice & Dice</b> attacks inflict the <b>Hemorrhage</b> and <b>Mangled</b>  status effects for <b>80 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "veryrare",
"i": "icons/IconAddon_straightRazor.png"
},
{
"n": "Hard Hat",
"d": "Whenever you <b>Scamper</b> under Pallets, they special-break immediately.",
"r": "visceral",
"i": "icons/IconAddon_hardHat.png"
},
{
"n": "Mirror Shards",
"d": "The Good Guy can see the illusory Footfalls around Survivors.",
"r": "veryrare",
"i": "icons/IconAddon_mirrorShards.png"
}
]
},
{
"n": "The Unknown",
"i": "icons/K35_TheUnknown_Portrait.png",
"a": [
{
"n": "Rabbit's Foot",
"d": "Pools of blood are brighter when charging <b>UVX</b>.<br><br>Survivors injured by <b>UVX</b> suffer from the <b>Hemorrhage</b> status effect for <b>45 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors.",
"r": "common",
"i": "icons/IconAddon_rabbitsFoot.png"
},
{
"n": "Footprint Cast",
"d": "<b>Decreases</b> the time until the next <b>Hallucination</b> spawns by <b>15 seconds</b> when a Survivor becomes <b>Weakened</b>.<br><br>Weakened Survivors lose health states when hit by UVX’s Blast Area.",
"r": "rare",
"i": "icons/IconAddon_footprintCast.png"
},
{
"n": "Blurry Photo",
"d": "After Teleporting, regain full movement speed <b>7%</b> faster.",
"r": "common",
"i": "icons/IconAddon_blurryPhoto.png"
},
{
"n": "Slashed Backpack",
"d": "<b>UVX</b> triggers a Blast Area upon contact with <b>Hallucinations</b>. <b>Hallucinations</b> can be destroyed by <b>UVX</b>. Doing so <b>decreases</b> the time until the next <b>Hallucination</b> spawns by <b>65%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_slashedBackpack.png"
},
{
"n": "Punctured Eyeball",
"d": "Survivors who are both <b>Weakened</b> and injured suffer from the <b>Deep Wound</b> status effect when they Dispel a <b>Hallucination</b>.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.<br><br>Weakened Survivors lose health states when hit by UVX’s Blast Area.",
"r": "common",
"i": "icons/IconAddon_puncturedEyeball.png"
},
{
"n": "Notebook of Theories",
"d": "Survivors hit by <b>UVX</b> while it is airborne suffer from the <b>Hindered</b> status effect for an additional <b>2 seconds</b>.<br><br>Hindered reduces Survivor movement speed.",
"r": "uncommon",
"i": "icons/IconAddon_notebookOfTheories.png"
},
{
"n": "Last Known Recording",
"d": "<b>Decreases</b> your <b>Hallucinations’</b> Aura Range that is visible to Survivors by <b>35%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_lastKnownRecording.png"
},
{
"n": "Sketch Attempt",
"d": "Survivors hit by <b>UVX's</b> Blast Area suffer from the <b>Oblivious</b> status effect for <b>20 seconds</b>.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "common",
"i": "icons/IconAddon_sketchAttempt.png"
},
{
"n": "Victim’s Map",
"d": "When a Survivor successfully Stares Down The Unknown, The Unknown gains <b>Killer Instinct</b> for <b>3 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_victimsMap.png"
},
{
"n": "Vanishing Box",
"d": "Survivors who complete generators become <b>Weakened</b> against <b>UVX</b>. <b>Increases</b> Hallucination spawn time by <b>120%</b>.<br><br>Weakened Survivors lose health states when hit by the UVX's Blast Area.",
"r": "rare",
"i": "icons/IconAddon_vanishingBox.png"
},
{
"n": "Front-Page Article",
"d": "Performing the break interaction on a pallet or breakable wall <b>decreases</b> the time until the next <b>Hallucination</b> spawns by <b>50%</b>.",
"r": "rare",
"i": "icons/IconAddon_frontPageArticle.png"
},
{
"n": "Hypnotist’s Watch",
"d": "Survivors hit by <b>UVX</b> while it is airborne suffer from the <b>Exhausted</b> status effect for <b>15 seconds</b>.<br><br>Exhausted prevents Survivors from activating certain perks.",
"r": "rare",
"i": "icons/IconAddon_hypnotistsWatch.png"
},
{
"n": "B-Movie Poster",
"d": "Survivors damaged by <b>UVX's</b> Blast Area suffer from the <b>Broken</b> status effect for <b>30 seconds</b>.<br><br>Broken prevents Survivors from being healed.",
"r": "rare",
"i": "icons/IconAddon_b-moviePoster.png"
},
{
"n": "Device of Undisclosed Origin",
"d": "Survivors entering the Aura Range of a <b>Hallucination</b> suffer from the <b>Oblivious</b> status effect.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/IconAddon_deviceOfUndisclosedOrigin.png"
},
{
"n": "Homemade Mask",
"d": "Survivors who Dispel <b>Hallucinations</b> suffer from the <b>Blindness</b> status effect for <b>60 seconds</b>.<br><br>Blindness prevents Survivors from seeing auras.",
"r": "veryrare",
"i": "icons/IconAddon_homemadeMask.png"
},
{
"n": "Obscure Game Cartridge",
"d": "Triggers for <b>20 seconds</b> following a Teleport. <b>Increases</b> the action speed for breaking downed pallets, breakable walls, damaging generators, and vaulting windows by <b>30%</b>.",
"r": "veryrare",
"i": "icons/IconAddon_obscureGameCartridge.png"
},
{
"n": "Discarded Milk Carton",
"d": "Doubles the <b>UVX</b> projectile's bounce strength.",
"r": "veryrare",
"i": "icons/IconAddon_discardedMilkCarton.png"
},
{
"n": "Serum Vial",
"d": "Survivors within a <b>Hallucination’s</b> Aura Range suffer from the <b>Exhausted</b> status effect for <b>15 seconds</b>.<br><br>Exhausted prevents Survivors from activating certain perks.",
"r": "veryrare",
"i": "icons/IconAddon_serumVial.png"
},
{
"n": "Captured by the Dark",
"d": "Survivors begin the trial <b>Weakened</b>. <b>Decreases</b> the maximum number of <b>Hallucinations</b> that can be spawned by 1.<br><br>Weakened Survivors lose health states when hit by UVX’s Blast Area.",
"r": "visceral",
"i": "icons/IconAddon_capturedByTheDark.png"
},
{
"n": "Iridescent OSS Report",
"d": "<b>Decreases</b> Teleport cooldown by <b>5 seconds</b>. The Decoy left behind after The Unknown teleports takes <b>10 seconds</b> longer to disappear. When created, the Decoy has the same Terror Radius and Red Stain as The Unknown.",
"r": "visceral",
"i": "icons/IconAddon_iridescentOSSReport.png"
}
]
},
{
"n": "The Lich",
"i": "icons/K36_TheLich_Portrait.png",
"a": [
{
"n": "Tattered Headband",
"d": "<b>Increases</b> the distance of Flight of the Damned’s spectral entities by <b>4 meters</b>.",
"r": "common",
"i": "icons/IconAddon_TatteredHeadband.png"
},
{
"n": "Raven's Feather",
"d": "<b>Increases</b> duration of the Fly spell by <b>0.5 second</b>.",
"r": "common",
"i": "icons/IconAddon_RavensFeather.png"
},
{
"n": "Trickster's Glove",
"d": "<b>Increases</b> the time Mage Hand holds a pallet up by <b>0.3 second</b>.",
"r": "common",
"i": "icons/IconAddon_TrickstersGlove.png"
},
{
"n": "Crystal Ball",
"d": "When a Survivor is revealed by Dispelling Sphere, the Killer Instinct effect lasts for an additional <b>1 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_CrystalBall.png"
},
{
"n": "Lantern of Revealing",
"d": "Reveals the aura of Survivors narrowly missed by Flight of the Damned for <b>3 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_LanternOfRevealing.png"
},
{
"n": "Potion of Speed",
"d": "<b>Decreases</b> the period where you cannot attack after casting Fly by <b>0.1 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_PotionOfSpeed.png"
},
{
"n": "Ring of Telekinesis",
"d": "Whenever you cast Mage Hand on an upright Pallet, for <b>10 seconds</b>, you basic-vault Windows <b>10%</b> faster.",
"r": "uncommon",
"i": "icons/IconAddon_RingOfTelekinesis.png"
},
{
"n": "Glass Eye",
"d": "<b>Increases</b> the size of Dispelling Sphere by <b>2 meters</b> and its movement speed by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_GlassEye.png"
},
{
"n": "Ring of Spell Storing",
"d": "<b>Decreases</b> the cooldown of all spells by <b>1 second</b>.",
"r": "uncommon",
"i": "icons/IconAddon_RingOfSpellStoring.png"
},
{
"n": "Ornate Horn",
"d": "<b>Increases</b> the number of entities created by Flight of the Damned by <b>1</b>.",
"r": "rare",
"i": "icons/IconAddon_OrnateHorn.png"
},
{
"n": "Cloak of Elvenkind",
"d": "<b>Reduces</b> Terror Radius by <b>22 meters</b> while the Fly spell is active.",
"r": "rare",
"i": "icons/IconAddon_CloakOfElvenkind.png"
},
{
"n": "Boots of Speed",
"d": "Casting Mage Hand grants you <b>3% Haste</b> for <b>2 seconds</b>.<br><br>Haste increases Killer movement speed.",
"r": "rare",
"i": "icons/IconAddon_BootsOfSpeed.png"
},
{
"n": "Staff of Withering",
"d": "Dispelling Sphere causes the <b>Exhausted</b> status effect for <b>30 seconds</b> to Survivors who enter its radius.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/IconAddon_StaffOfWithering.png"
},
{
"n": "Pearl of Power",
"d": "<b>Reduces</b> the remaining cooldown for your spells by <b>2 seconds</b> each time you land a basic attack.",
"r": "rare",
"i": "icons/IconAddon_PearlOfPower.png"
},
{
"n": "Robe of Eyes",
"d": "Reveals the auras of Survivors within <b>6 meters</b> of a Treasure Chest for <b>4 seconds</b> each time you cast a spell.",
"r": "veryrare",
"i": "icons/IconAddon_RobeOfEyes.png"
},
{
"n": "Dragontooth Dagger",
"d": "Applies <b>Hemorrhage</b> and <b>Mangled</b> status effects to Survivors hit with a basic attack while holding a Magic Item for <b>60 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "veryrare",
"i": "icons/IconAddon_DragontoothDagger.png"
},
{
"n": "Cloak of Invisibility",
"d": "Gain <b>Undetectable</b> for <b>20 seconds</b> each time all of your spells are on cooldown at the same time.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/IconAddon_CloakOfInvisibility.png"
},
{
"n": "Bag of Holding",
"d": "Two Treasure Chests are guaranteed to roll <b>1</b> on the dice roll. Opening Treasure Chests grants the <b>Oblivious</b> status effect to Survivors for <b>15 seconds</b>.<br><br>Oblivious prevents Survivors from hearing and being affected by the Killer's Terror Radius.",
"r": "veryrare",
"i": "icons/IconAddon_BagOfHolding.png"
},
{
"n": "Vorpal Sword",
"d": "Any injured Survivor that enters a Dispelling Sphere screams and gains <b>Broken</b> for <b>30 seconds</b>. Whenever you cast Mage Hand on a dropped Pallet, after <b>4 seconds</b>, it special-breaks.<br><br>Broken prevents Survivors from being healed.",
"r": "visceral",
"i": "icons/IconAddon_SwordOfKass.png"
},
{
"n": "Iridescent Book of Vile Darkness",
"d": "Using the Fly spell to pass through any vault location blocks that location for Survivors for <b>45 seconds</b>. <b>Lowers</b> the number of spectral entities created by Flight of the Damned by <b>3</b> and makes them fly lower to the ground.",
"r": "visceral",
"i": "icons/IconAddon_IridescentBookOfVileDarkness.png"
}
]
},
{
"n": "The Dark Lord",
"i": "icons/K37_TheDarkLord_Portrait.png",
"a": [
{
"n": "Sylph Feather",
"d": "Whenever you break a Pallet, earn 1 Token, up to 5. For each Token, <b>Hellfire's</b> cooldown is <b>5%</b> shorter.",
"r": "rare",
"i": "icons/IconAddon_SylphFeather.png"
},
{
"n": "Ruby Circlet",
"d": "<b>Decreases</b> the cooldown of Hellfire by <b>5%</b>.",
"r": "common",
"i": "icons/IconAddon_RubyCirclet.png"
},
{
"n": "Cerberus Talon",
"d": "<b>Increases</b> the reveal distance of Scent Orb by <b>100%</b>.",
"r": "common",
"i": "icons/IconAddon_CerberusTalon.png"
},
{
"n": "Clock Tower Gear",
"d": "<b>Reduces</b> the cooldown of Shapeshift by <b>5%</b>.",
"r": "common",
"i": "icons/IconAddon_ClockTowerGear.png"
},
{
"n": "Magical Ticket",
"d": "<b>Increases</b> the maximum speed of Teleport by <b>10%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_MagicalTicket.png"
},
{
"n": "Moonstone Necklace",
"d": "<b>Reduces</b> the size of the Terror Radius in Vampire and Wolf Forms by <b>8 meters</b>.",
"r": "uncommon",
"i": "icons/IconAddon_MoonstoneNecklace.png"
},
{
"n": "Blood-Filled Goblet",
"d": "<b>Increases</b> the duration of Scent Orbs by <b>60%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_BloodFilledGoblet.png"
},
{
"n": "Traveler’s Hat",
"d": "<b>Increases</b> Shapeshift speed by <b>5%</b>.",
"r": "common",
"i": "icons/IconAddon_TravelersHat.png"
},
{
"n": "Winged Boots",
"d": "<b>Increases</b> maximum distance of Teleport by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_WingedBoots.png"
},
{
"n": "White Wolf Medallion",
"d": "<b>Increases</b> Killer Instinct duration by <b>1 second</b> while in Wolf Form after Survivors complete rushed actions.",
"r": "uncommon",
"i": "icons/IconAddon_WhiteWolfMedallion.png"
},
{
"n": "Killer Doll",
"d": "<b>Increases</b> the cooldown reduction of Pounce Attacks from Scent Orbs by <b>30%</b>.",
"r": "rare",
"i": "icons/IconAddon_KillerDoll.png"
},
{
"n": "Sunglasses",
"d": "Hellfire has <b>1 extra pillar</b>. <b>Increases</b> Hellfire charging time by <b>25%</b>.",
"r": "rare",
"i": "icons/IconAddon_Sunglasses.png"
},
{
"n": "Force of Echo",
"d": "<b>Increases</b> the spawn rate of Scent Orbs by <b>10%</b>.",
"r": "rare",
"i": "icons/IconAddon_ForceOfEcho.png"
},
{
"n": "Pocket Watch",
"d": "Whenever you break Pallets or Breakable Walls, instantly recharge <b>Teleport</b>.",
"r": "rare",
"i": "icons/IconAddon_PocketWatchVampiricShift.png"
},
{
"n": "Medusa’s Hair",
"d": "All Survivors within <b>8 meters</b> of your teleport destination suffer from an <b>8% Hindered</b> status effect for <b>4 seconds</b>.<br><br>Hindered reduces Survivor movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_MedusasHair.png"
},
{
"n": "Warg’s Fang",
"d": "<b>Reveals</b> the auras of all Survivors whose Scent Orbs you have collected whenever Pounce Attack becomes available for <b>5 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_WargsFang.png"
},
{
"n": "Cube of Zoe",
"d": "When a generator is completed, <b>creates</b> pillars of Hellfire around The Dark Lord for <b>10 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_CubeOfZoe.png"
},
{
"n": "Lapis Lazuli",
"d": "After Teleporting to a window vault, the Entity <b>blocks</b> that window for Survivors for <b>8 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_LapisLazuli.png"
},
{
"n": "Alucard’s Shield",
"d": "When the gates are opened, pillars of Hellfire <b>continuously spawn</b> within the exit gates.",
"r": "visceral",
"i": "icons/IconAddon_AlucardsShield.png"
},
{
"n": "Iridescent Ring of Vlad",
"d": "Hellfire pillars <b>home in</b> on nearby Survivors.",
"r": "visceral",
"i": "icons/IconAddon_IridescentRingOfVlad.png"
}
]
},
{
"n": "The Houndmaster",
"i": "icons/K38_TheHoundmaster_Portrait.png",
"a": [
{
"n": "Young Coconut",
"d": "<b>Increases</b> the Dog's Chase speed by <b>5%</b>.",
"r": "common",
"i": "icons/IconAddon_youngCoconut.png"
},
{
"n": "Sticky Pitch",
"d": "<b>Increases</b> The Houndmaster's bonus movement speed gained while running on the Search Path by <b>2%</b>.",
"r": "common",
"i": "icons/IconAddon_stickyPitch.png"
},
{
"n": "Creature's Bone",
"d": "The Dog's stun duration is <b>reduced</b> by <b>50%</b>.",
"r": "common",
"i": "icons/IconAddon_creaturesBone.png"
},
{
"n": "Trainer's Book",
"d": "<b>Increases</b> Houndsense duration by <b>35%</b>.",
"r": "common",
"i": "icons/IconAddon_trainersBook.png"
},
{
"n": "Barley Meal",
"d": "<b>Increases</b> the Dog's initial Chase distance by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_barleyMeal.png"
},
{
"n": "Belaying Pins",
"d": "Survivors revealed by Killer Instinct when entering the Houndsense Radius also become <b>Oblivious</b> for <b>20 seconds</b>.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/IconAddon_belayingPins.png"
},
{
"n": "Smoked Snapper",
"d": "Power cooldown is <b>reduced</b> by <b>5%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_smokedSnapper.png"
},
{
"n": "Knotted Rope",
"d": "<b>Reduces</b> the cooldown of basic attacks against Survivors injured while in the Dog's Grab by <b>2%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_knottedRope.png"
},
{
"n": "Spyglass",
"d": "When Houndsense duration ends, the Survivor's aura is <b>revealed</b> for <b>3 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_spyglass.png"
},
{
"n": "Waterskin",
"d": "<b>Increases</b> the Dog's Chase redirect distance by <b>20%</b>.",
"r": "rare",
"i": "icons/IconAddon_waterskin.png"
},
{
"n": "Unfinished Map",
"d": "Survivors revealed by Killer Instinct when entering the Houndsense Radius also become <b>Exhausted</b> for <b>15 seconds</b>.<br><br>Exhausted prevents Survivors from activating certain perks.",
"r": "rare",
"i": "icons/IconAddon_unfinishedMap.png"
},
{
"n": "Training Bell",
"d": "When the Dog is stunned, the responsible Survivor's aura is revealed for <b>8 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_trainingBell.png"
},
{
"n": "Spiked Collar",
"d": "Survivors injured while in the Dog's grab suffer from <b>Mangled</b> and <b>Hemorrhage</b> for <b>60 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_spikedCollar.png"
},
{
"n": "Fatty Meat",
"d": "Survivors who are affected by Houndsense periodically scream without notifying The Houndmaster every <b>15 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_fattyMeat.png"
},
{
"n": "Leather Harness",
"d": "<b>Increases</b> the Dog's Chase speed by <b>20%</b> for <b>30 seconds</b> after a generator is repaired. This bonus becomes permanent once all generators are repaired.",
"r": "veryrare",
"i": "icons/IconAddon_leatherHarness.png"
},
{
"n": "Gunpowder Tin",
"d": "Whenever at least one Survivor becomes affected by Houndsense, for <b>20 seconds</b>, you basic-break Pallets or Breakable walls, and damage Generators <b>30%</b> faster.",
"r": "veryrare",
"i": "icons/IconAddon_gunpowderTin.png"
},
{
"n": "Marlinspike",
"d": "Survivors within <b>20 meters</b> of a Survivor who is Grabbed by the Dog become afflicted with Houndsense.",
"r": "veryrare",
"i": "icons/IconAddon_marlinspike.png"
},
{
"n": "Ship Figurehead",
"d": "While the Dog is following The Houndmaster, Terror Radius is <b>increased</b> by <b>8 meters</b>. While the Dog is away from The Houndmaster, Terror Radius is <b>reduced</b> by <b>8 meters</b>.",
"r": "veryrare",
"i": "icons/IconAddon_shipFigurehead.png"
},
{
"n": "Torn Novel",
"d": "While aiming the Chase Redirect, auras of Survivors within <b>10 meters</b> of the Dog are revealed. Upon reassuming control of The Houndmaster, Survivors' auras revealed this way are shown for an additional <b>2 seconds</b>.<br>",
"r": "visceral",
"i": "icons/IconAddon_tornNovel.png"
},
{
"n": "Iridescent Wheel Handle",
"d": "<b>Increases</b> the time the Dog lingers at a Search destination by <b>20%</b>. While the Dog is running to and from the Search destination, The Houndmaster gains the <b>Undetectable</b> status effect. Standing on the Search Path removes the <b>Undetectable</b> status effect.<br><br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "visceral",
"i": "icons/IconAddon_iridescentWheelHandle.png"
}
]
},
{
"n": "The Ghoul",
"i": "icons/K39_TheGhoul_Portrait.png",
"a": [
{
"n": "Kaneki’s Wallet",
"d": "<b>Increases</b> the window to perform consecutive Kagune Leaps by <b>3 second</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_KanekisWallet.png"
},
{
"n": "The Black Goat’s Egg",
"d": "Perfectly timed grab-attacks grant a <b>100%</b> Bloodpoints bonus.",
"r": "common",
"i": "icons/T_UI_iconAddon_TheBlackGoatsEgg.png"
},
{
"n": "Anteiku Apron",
"d": "<b>Decrease</b> the slide after a Kagune Leap by <b>50%</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_AnteikuApron.png"
},
{
"n": "Fresh Coffee",
"d": "<b>Increases</b> Kagune Leap speed by <b>14%</b>.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_freshCoffee.png"
},
{
"n": "Broken Chain",
"d": "<b>Decreases</b> Kagune Leap cooldown by <b>35%</b> when not Enraged.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_brokenChain.png"
},
{
"n": "Kaneki's Satchel",
"d": "<b>Increases</b> the speed of the third consecutive Kagune Leap by <b>30%</b>.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_satchel.png"
},
{
"n": "Hide’s Headphones",
"d": "Survivors affected by Kagune Mark are afflicted with the <b>Oblivious</b> status effect.<br><br>Oblivious prevents Survivors from hearing and being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_HidesHeadphones.png"
},
{
"n": "Taiyaki",
"d": "Increases the Enraged Mode countdown by <b>5 seconds</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_taiyaki.png"
},
{
"n": "Blood-Stained Handkerchief",
"d": "<b>Increases</b> the Kagune's reach by <b>1 meter</b>.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_bloodStainedHandkerchief.png"
},
{
"n": "Mado’s Glove",
"d": "Upon removing Kagune Mark, Survivors suffer from the <b>Exhausted</b> status effect for <b>15 seconds</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/T_UI_iconAddon_MadosGlove.png"
},
{
"n": "Hinami’s Umbrella",
"d": "<b>Increases</b> the amount of time added to the Enraged countdown for each perfectly timed grab-attack by <b>10 seconds</b>.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_HinamisUmbrella.png"
},
{
"n": "Rize's Glasses",
"d": "Upon entering Enraged Mode, reveals the auras of any healthy Survivors repairing generators for <b>8 seconds</b>.",
"r": "rare",
"i": "icons/T_UI_iconAddon_RizesGlasses.png"
},
{
"n": "Aogiri Tree Robe",
"d": "If a generator is completed while The Ghoul is in Enraged Mode, gain the <b>Undetectable</b> status effect for <b>20 seconds</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "rare",
"i": "icons/T_UI_iconAddon_AogiriTreeRobe.png"
},
{
"n": "Amon’s Necktie",
"d": "While aiming mid-Leap, reveals the auras of pallets and windows within <b>32 meters</b>.",
"r": "rare",
"i": "icons/T_UI_iconAddon_AmonsNecktie.png"
},
{
"n": "Red Spider Lily",
"d": "While in Enraged Mode, base attacks afflict Survivors with the <b>Hemorrhage</b> status effect for <b>60 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/T_UI_iconAddon_redSpiderLily.png"
},
{
"n": "CCG ID Card",
"d": "Whenever you special-vault with Kagune Leap, for <b>3 seconds</b>, you see the auras of all Kagune Marked Survivors within <b>24 meters</b>.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_CCGIDCard.png"
},
{
"n": "Red-Headed Centipede",
"d": "While in Enraged Mode, whenever you vault a Window, it is blocked for <b>10 seconds</b>.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_redHeadedCentipede.png"
},
{
"n": "Torture Apparatus",
"d": "When Enraged Mode ends, The Ghoul gains <b>5% Haste</b> for <b>6 seconds</b>.<br><br>Haste increases Killer movement speed.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_medicalApparatus.png"
},
{
"n": "Yamori’s Mask",
"d": "Upon hooking a Survivor while in Enraged Mode, all Survivors further than <b>40 meters</b> scream and reveal their location for <b>3 seconds</b>.",
"r": "visceral",
"i": "icons/T_UI_iconAddon_YamorisMask.png"
},
{
"n": "Iridescent Eye Patch",
"d": "While in Enraged Mode, whenever you special-vault a Pallet on your third consecutive Kagune Leap, it special-breaks.",
"r": "visceral",
"i": "icons/T_UI_iconAddon_iridescentEyePatch.png"
}
]
},
{
"n": "The Animatronic",
"i": "icons/K40_TheAnimatronic_Portrait.png",
"a": [
{
"n": "Help Wanted Ad",
"d": "While winding up an axe throw, see a preview of the starting trajectory.",
"r": "common",
"i": "icons/IconAddon_HelpWantedAd.png"
},
{
"n": "Security Guard’s Badge",
"d": "When exiting a Security Door after a teleport, gain the <b>Undetectable</b> status effect for <b>25%</b> longer.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "uncommon",
"i": "icons/IconAddon_SecurityGuardsBadge.png"
},
{
"n": "Restaurant Menu",
"d": "<b>Decreases</b> the minimum time required to retrieve an axe embedded in the environment by <b>10%</b>.",
"r": "common",
"i": "icons/IconAddon_RestaurantMenu.png"
},
{
"n": "Rotten Pizza",
"d": "<b>Increases</b> the duration of Killer Instinct from the Axe's area of effect by <b>100%</b>.",
"r": "common",
"i": "icons/IconAddon_RottenPizza.png"
},
{
"n": "Ripped Curtain",
"d": "When an Axe hits a Survivor, they gain the <b>Hemorrhage</b> and <b>Mangled</b> status effects for <b>60 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "uncommon",
"i": "icons/IconAddon_RippedCurtain.png"
},
{
"n": "Greasy Paper Plate",
"d": "<b>Increases</b> the time required for Survivors to remove the Axe by <b>15%</b>.",
"r": "common",
"i": "icons/IconAddon_GreasyPaperPlate.png"
},
{
"n": "Streamers",
"d": "<b>Increases</b> the speed at which you travel through Security Doors by <b>15%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_Streamers.png"
},
{
"n": "Party Hat",
"d": "When an Axe is embedded in the environment:<b>Increases</b> its area of effect radius to <b>250%</b> over <b>3 seconds</b>. <b>Decreases</b> the duration of the area of effect by <b>20%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_PartyHat.png"
},
{
"n": "Office Phone",
"d": "Survivors within <b>24 meters</b> of a Survivor with an embedded Axe gain the <b>Oblivious</b> and - if injured - <b>Broken</b> status effects. Reveals the aura of the Axe to Survivors within this range.<br><br><b>Decreases</b> the time required to remove the Axe from another Survivor by <b>50%</b>.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.<br><br>Broken prevents Survivors from being healed.",
"r": "uncommon",
"i": "icons/IconAddon_OfficePhone.png"
},
{
"n": "Chica’s Bib",
"d": "Survivors within the Axe's area of effect gain the <b>Exhausted</b> status effect for <b>5 seconds</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/IconAddon_ChicasBib.png"
},
{
"n": "Bonnie’s Guitar Strings",
"d": "Unlocks potential in one’s aura reading ability.<br><br>While moving between Security Doors, the repair progress of generators can be determined by the intensity of their auras.<br><br><b>Decreases</b> the duration of the <b>Undetectable</b> status effect upon exiting the Security Door by <b>100%</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "rare",
"i": "icons/IconAddon_BonniesGuitarStrings.png"
},
{
"n": "Foxy’s Hook",
"d": "Players within range of the Axe's area of effect gain <b>7% Haste</b> for <b>6 seconds</b>.<br><br>Haste increases Killer movement speed.",
"r": "rare",
"i": "icons/IconAddon_FoxyHook.png"
},
{
"n": "Purple Guy Drawing",
"d": "While a Survivor has an Axe embedded in them, any rushed interactions they perform reveal their aura to you for <b>3 seconds</b>.<br><br>Removing the Axe from themselves reveals their aura to you for <b>6 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_PurpleGuyDrawing.png"
},
{
"n": "Freddy’s Hat",
"d": "<b>Increases</b> the Axe's weight while throwing by <b>100%</b>.",
"r": "rare",
"i": "icons/IconAddon_FreddysHat.png"
},
{
"n": "Loot Bag",
"d": "While a Survivor has an Axe embedded in them: Exit gates will be blocked for them and any Survivors within <b>12 meters</b>.",
"r": "veryrare",
"i": "icons/IconAddon_LootBag.png"
},
{
"n": "Access Panel",
"d": "Your Axe gains the ability to travel through Security Doors, and will exit straight through the connected Security Door.<br><br>When aiming your Axe:Gain Killer Instinct on Survivors within <b>6 meters</b> of any Security Door. Reveals the auras of all Security Door numbers.",
"r": "veryrare",
"i": "icons/IconAddon_AccessPanel.png"
},
{
"n": "Celebrate! Poster",
"d": "While the Axe is embedded in a Survivor, all players within <b>32 meters</b> gain <b>12% Haste</b> and vault <b>20%</b> faster.<br><br>Haste increases Killer movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_CelebratePoster.png"
},
{
"n": "Faz-Coin",
"d": "Upon throwing the Axe, it gains a Terror Radius of <b>24 meters</b> until it is reclaimed. You gain the <b>Undetectable</b> status effect for <b>10 seconds</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "visceral",
"i": "icons/IconAddon_FazCoin.png"
},
{
"n": "Endo CPU",
"d": "Within the Axe's area of effect, you basic-break Pallets or Breakable Walls, and damage Generators <b>40%</b> faster. This effect lingers for <b>5 seconds</b> after leaving the area of effect.",
"r": "veryrare",
"i": "icons/IconAddon_EndoCPU.png"
},
{
"n": "Iridescent Remnant",
"d": "When you start moving to a Security Door, upright pallets within <b>32 meters</b> of the destination Door are blocked for <b>12 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_IridescentRemnant.png"
}
]
},
{
"n": "The Krasue",
"i": "icons/T_UI_K41_TheKrasue_Portrait.png",
"a": [
{
"n": "Sticky Lozenge",
"d": "When charging <b>Regurgitate</b>, see a preview of the impact zone.",
"r": "common",
"i": "icons/IconAddon_stickyLozenge.png"
},
{
"n": "Broken Tiara",
"d": "Survivors are <b>Oblivious</b> under the <b>Glowing Fungus</b>' effect.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "common",
"i": "icons/IconAddon_brokenTiara.png"
},
{
"n": "Luckless Mouse",
"d": "<b>Increases</b> <b>Headlong Flight</b>'s charges by <b>2</b>.",
"r": "common",
"i": "icons/IconAddon_lucklessMouse.png"
},
{
"n": "First Libretto",
"d": "<b>Decreases</b> <b>Headlong Flight</b>'s consumption rate by <b>30%</b> for <b>15 seconds</b> any time you hook a <b>Leeched</b> Survivor.",
"r": "common",
"i": "icons/IconAddon_firstLibretto.png"
},
{
"n": "Wriggling Parasite",
"d": "<b>Increases</b> the passive growth rate to <b>Leeched II</b> by <b>16%</b>.",
"r": "uncommon",
"i": "icons/IconAddon_wrigglingParasite.png"
},
{
"n": "Chunk of Malai",
"d": "<b>Decreases</b> the <b>Glowing Fungus</b>' cleanse rate by <b>8%</b> for each <b>Leeched</b> Survivor.",
"r": "uncommon",
"i": "icons/IconAddon_chunkOfMalai.png"
},
{
"n": "Crumpled Sheet Music",
"d": "Gain <b>12 charges</b> to <b>Headlong Flight</b> when a Survivor is hit by a <b>Leeching Gland</b>.",
"r": "uncommon",
"i": "icons/IconAddon_crumpledSheetMusic.png"
},
{
"n": "Defective Metronome",
"d": "Survivors under the <b>Glowing Fungus</b>' effect are <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating certain perks.",
"r": "uncommon",
"i": "icons/IconAddon_defectiveMetronome.png"
},
{
"n": "Pig's Eye",
"d": "When a Survivor eats a <b>Glowing Fungus</b> from further than <b>40 meters</b> away, their aura is revealed to you for <b>6 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_pigsEye.png"
},
{
"n": "Chicken Head",
"d": "All Survivors start afflicted with <b>Leeched I</b>. <b>2</b> additional <b>Glowing Fungi</b> are spawned at the start of the trial.",
"r": "visceral",
"i": "icons/IconAddon_chickenHead.png"
},
{
"n": "Janjira's Hand",
"d": "<b>Gain</b> <b>2 Headlong Flight</b> charges whenever a generator is repaired. <b>Headlong Flight</b>'s recharge rate is increased by <b>25%</b> for <b>15 seconds</b>. When <b>5 generators</b> are repaired, <b>Headlong Flight</b> is fully charged and the recharge rate is permanently increased by <b>25%</b>.",
"r": "rare",
"i": "icons/IconAddon_janjirasHand.png"
},
{
"n": "Dulled Knife",
"d": "<b>Decreases</b> <b>Headlong Flight</b>'s charge consumption by <b>25%</b>. <b>Glowing Fungus</b> grants Survivors <b>10% Haste</b> for <b>5 seconds</b> while preventing scratch marks, pools of blood, grunts of pain, and aura reveals.<br><br>Haste increases Survivor's movement speed.",
"r": "rare",
"i": "icons/IconAddon_dulledKnife.png"
},
{
"n": "Spattered Handkerchief",
"d": "When the exit gates are powered, all Survivors are afflicted with <b>Leeched I</b>. <b>Glowing Fungi</b> begin to decay and activating <b>Corporeal Weave</b> no longer creates new <b>Glowing Fungi</b>.",
"r": "rare",
"i": "icons/IconAddon_spottedHandkerchief.png"
},
{
"n": "Framed Newspaper",
"d": "<b>Increases</b> <b>Headlong Flight</b>'s charges by <b>6</b> and its recharge rate by <b>15%</b>. <b>Headlong Flight</b> must be at least half-charged to activate.",
"r": "rare",
"i": "icons/IconAddon_framedNewspaper.png"
},
{
"n": "Lorenza's Remains",
"d": "<b>Leeched I</b> applies <b>Blindness</b>. <b>Leeched II</b> applies <b>4% Hindered</b>.<br><br>Blindness prevents Survivors from seeing auras.<br><br>Hindered reduces Survivor movement speed.",
"r": "veryrare",
"i": "icons/IconAddon_lorenzasRemains.png"
},
{
"n": "Shredded Gown",
"d": "<b>Corporeal Weave</b> reveals the auras of all Survivors who are within <b>8 meters</b> of <b>Glowing Fungus</b> or holding <b>Glowing Fungus</b> of their own for <b>5 seconds</b>.",
"r": "visceral",
"i": "icons/IconAddon_shreddedGown.png"
},
{
"n": "Rotten Swine",
"d": "Whenever you hit a Generator, dropped Pallet, or Breakable Wall with <b>Leeching Gland</b>, it is marked. You damage or basic-break the marked object <b>15%</b> faster, then the mark is removed. Only one object can be marked at a time.",
"r": "veryrare",
"i": "icons/IconAddon_rottenSwine.png"
},
{
"n": "Theater Binoculars",
"d": "Hitting a non-<b>Leeched</b> Survivor with <b>Intestinal Whip</b> reveals the auras of other Survivors within <b>24 meters</b> for <b>5 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_theaterBinoculars.png"
},
{
"n": "Queen's Scepter",
"d": "Successful <b>Intestinal Whip</b> hits cause a <b>Leeching Gland</b> to spatter near the Survivor.",
"r": "veryrare",
"i": "icons/IconAddon_queensScepter.png"
},
{
"n": "Mysterious Elixir",
"d": "Whenever you hit a Window with <b>Leeching Gland</b>, it is markedWhenever you vault the marked Window, it is blocked for <b>10 seconds</b>, then the mark is removed. Only one Window can be marked at a time.",
"r": "veryrare",
"i": "icons/IconAddon_iridescentElixir.png"
}
]
},
{
"n": "The First",
"i": "icons/T_UI_K42_TheFirst_Portrait.png",
"a": [
{
"n": "Orderly ID",
"d": "While out of Worldbreaker Mode, the Vine Attack's aiming range is increased by <b>2 meters</b>.",
"r": "common",
"i": "icons/IconAddon_OrderlyID.png"
},
{
"n": "Bead Maze",
"d": "The second phase of the Worldbreaker Timer is increased by <b>2.5 seconds</b> for each living Survivor.",
"r": "common",
"i": "icons/IconAddon_BeadMaze.png"
},
{
"n": "Shattered Wrist Rocket",
"d": "Whenever you Undergate attack, dropped Pallets and Generators caught in the blast special-break and explode.",
"r": "uncommon",
"i": "icons/IconAddon_ShatteredWristRocket.png"
},
{
"n": "Stained Glass Mural",
"d": "While Upside Down traversal is on cooldown, whenever you basic-break Pallets or Breakable Walls, the cooldown <b>decreases</b> by <b>12 seconds</b>.",
"r": "common",
"i": "icons/IconAddon_StainedGlassMural.png"
},
{
"n": "Smashed Cassette Deck",
"d": "At the start of the match, all Survivors scream.<br><br>All Survivors start with one Worldbreaker token. When Worldbreaker is activated for the first time, all Survivors lose their Worldbreaker Tokens. <br><br><b>1 less Grandfather Clock</b> appears on the map.",
"r": "uncommon",
"i": "icons/IconAddon_SmashedCassetteDeck.png"
},
{
"n": "Bloody Roller Skate",
"d": "When activating the Undergate Attack, the Killer gains a <b>20% Haste</b> status effect for <b>1.5 seconds</b> upon exiting.<br><br>Haste increases Killer movement speed.",
"r": "uncommon",
"i": "icons/IconAddon_BloodyRollerSkate.png"
},
{
"n": "Gutted Supercom",
"d": "While out of Worldbreaker Mode, Survivors hit by Vine Attacks have their aura shown for <b>1.5 seconds</b>.",
"r": "uncommon",
"i": "icons/IconAddon_GuttedSupercom.png"
},
{
"n": "Mid-Century Radio",
"d": "While in Worldbreaker Mode, Grandfather Clocks more than <b>32 meters</b> away being worked on by Survivors have their auras revealed.",
"r": "common",
"i": "icons/IconAddon_Mid-CenturyRadio.png"
},
{
"n": "Clock Hands",
"d": "Survivors gain the <b>Oblivious</b> status effect when interacting with Grandfather Clocks, and for <b>12 seconds</b> after.<br><br>Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/IconAddon_ClockHands.png"
},
{
"n": "Electrode Cap",
"d": "At the start of the second phase of Worldbreaker Mode (or when Survivors complete the Grandfather Clock interactions), Survivors more than <b>26 meters</b> away from the Killer have their aura revealed for <b>6 seconds</b>.",
"r": "rare",
"i": "icons/IconAddon_ElectrodeCap.png"
},
{
"n": "Forged Death Certificate",
"d": "Whenever you successfully place a Worldbreaker Token on a Survivor via Vine Attack, you gain <b>Undetectable Status Effect</b> until the next Worldbreaker Mode activation.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "rare",
"i": "icons/IconAddon_ForgedDeathCertificate.png"
},
{
"n": "Rabbit Remains",
"d": "Survivors gain the <b>Exhausted</b> status effect when standing in or entering the Undergate's attack radius, and for <b>10 seconds</b> after.<br><br>Increases the cooldown of Upside Down traversal by <b>5 seconds</b><br><br>Exhausted prevents Survivors from activating certain perks.",
"r": "veryrare",
"i": "icons/IconAddon_RabbitRemains.png"
},
{
"n": "Neck Tendril",
"d": "Survivors hit by the Vine Attack while in Worldbreaker Mode receive <b>Hemorrhage</b> and <b>Mangled</b> status effects for <b>70 seconds</b>.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured Survivors. This lasts for a set duration or until fully healed.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/IconAddon_NeckTendril.png"
},
{
"n": "Victor's Razor Blade",
"d": "When Worldbreaker Mode ends, injured Survivors become afflicted with the <b>Broken</b> status effect for the next <b>20 seconds</b>.<br><br>Broken prevents Survivors from being healed.",
"r": "rare",
"i": "icons/IconAddon_VictorsRazorBlade.png"
},
{
"n": "Broken Skateboard",
"d": "When Worldbreaker Mode starts, you basic-vault Windows <b>30%</b> faster and auras of Pallets and Windows are revealed to you within 32 meters for the next <b>65 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_BrokenSkateboard.png"
},
{
"n": "Black Widow Spider",
"d": "Entering the Upside Down while in Worldbreaker Mode makes the furthest Survivor, more than <b>36 meters</b> away reveal their location for <b>3 seconds</b>.",
"r": "veryrare",
"i": "icons/IconAddon_BlackWidowSpider.png"
},
{
"n": "Pizza Goggles",
"d": "The Undergate Attack's area of effect range is reduced by <b>90%</b>, and its cooldown time is shortened by <b>25 seconds</b>.<br><br>Your exit cooldown time after executing the Undergate Attack is reduced by <b>80%</b>.",
"r": "rare",
"i": "icons/IconAddon_PizzaGoggles.png"
},
{
"n": "Electroshock Collar",
"d": "When coming out of the Upside Down, for <b>12 seconds</b>, all Windows within <b>32</b> meters are blocked.",
"r": "veryrare",
"i": "icons/IconAddon_ElectroshockCollar.png"
},
{
"n": "Chess Piece",
"d": "The Vine Attack has two charges, and its attack radius is diminished by <b>40%</b>.",
"r": "visceral",
"i": "icons/IconAddon_ChessPiece.png"
},
{
"n": "Iridescent Soteria Chip",
"d": "When Worldbreaker activates, the Killer gains <b>Undetectable</b>, and Survivors with at least one Worldbreaker Token have their aura revealed when coming within <b>12 meters</b> of the Killer.<br><br>This lasts until the Killer performs a Vine Attack, enters the Upside Down, or Worldbreaker ends.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "visceral",
"i": "icons/IconAddon_IridescentSoteriaChip.png"
}
]
},
{
"n": "The Slasher",
"i": "icons/K43_TheSlasher_Portrait.png",
"a": [
{
"n": "Garden Claw",
"d": "<b>Increases</b> the duration of <b>Killer Instinct</b> after a <b>Jump Scare</b> by <b>2 seconds</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_GardenClaw.png"
},
{
"n": "Bent Wheel",
"d": "<b>Increases</b> the range at which you can trigger <b>Jump Scare</b> by <b>4 meters</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_BentWheel.png"
},
{
"n": "Knitting Needle",
"d": "<b>Increases</b> the time it takes for injured Impaled Survivors to extract the <b>Spike</b> from themselves by <b>20%</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_KnittingNeedle.png"
},
{
"n": "Orderly's Shoe",
"d": "<b>Increases</b> the duration of <b>Haste</b> after a <b>Jump Scare</b> by <b>5 seconds</b>.<br><br>Haste increases Killer movement speed.",
"r": "common",
"i": "icons/T_UI_iconAddon_OrderlysShoe.png"
},
{
"n": "Sleeping Bag",
"d": "After grabbing a <b>Hook Spike</b> while in <b>Omnipresent Evil</b> mode, see the locations of Survivors within <b>10 meters</b> of hooks.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_SleepingBag.png"
},
{
"n": "Bloody Smile",
"d": "<b>Increases</b> <b>Jump Scare</b> and <b>Omnipresent Evil</b>'s detection range of Survivors by <b>4 meters</b>.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_BloodySmile.png"
},
{
"n": "Toxic Waste",
"d": "After a <b>Jump Scare</b>, Survivors within <b>10 meters</b> of a hook or <b>Scrap Pile</b> gain <b>Oblivious</b> for <b>13 seconds.</b><br><br>Oblivious prevents Survivors from hearing and being affected by the Killer's Terror Radius.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_ToxicWaste.png"
},
{
"n": "Party Noisemaker",
"d": "Breaking a Pallet or Breakable Wall with <b>Jump Scare</b> reveals the Auras of Survivors further than <b>28 meters</b> for <b>6 seconds</b>.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_PartyNoisemaker.png"
},
{
"n": "Coroner's Coffee",
"d": "<b>Increases</b> the distance Survivors are pushed by <b>Spikes</b> by <b>25%</b>.<br><br>Gain <b>13%</b> <b>Haste</b> for <b>3 seconds</b> after injuring a Survivor with a <b>Spike</b> if they do not collide with the environment.<br><br>Haste increases Killer movement speed.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_CoronersCoffee.png"
},
{
"n": "Sauna Rock",
"d": "After a <b>Jump Scare</b>, inflict all Survivors within <b>Killer Instinct</b>'s detection range with <b>Exhausted</b> for <b>3 seconds</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
"r": "rare",
"i": "icons/T_UI_iconAddon_SaunaRock.png"
},
{
"n": "Mirror Shards",
"d": "<b>Impaled</b> Survivors become <b>Broken</b> for <b>40 seconds</b> after extracting the <b>Spike</b>.<br><br>Broken prevents Survivors from being healed.",
"r": "rare",
"i": "icons/T_UI_iconAddon_MirrorShards.png"
},
{
"n": "Imprinted Aluminum",
"d": "Injuring a healthy Survivor with a <b>Spike</b> inflicts the <b>Mangled</b> and <b>Hemorrhage</b> status effects for <b>70 seconds</b>.<br><br>Mangled increases time required to heal by 25% and lasts for a set duration or until fully healed.<br><br>Hemorrhage regresses healing progress when not healing, and increases blood trails left by injured survivors. This lasts for a set duration or until fully healed.",
"r": "rare",
"i": "icons/T_UI_iconAddon_ImprintedAluminum.png"
},
{
"n": "Two Nails",
"d": "<b>Spikes</b> that come within <b>1 meter</b> of a Survivor reveal their Aura for <b>5 seconds</b>.",
"r": "rare",
"i": "icons/T_UI_iconAddon_TwoNails.png"
},
{
"n": "Eye Goop",
"d": "Gain <b>Undetectable</b> for <b>13 seconds</b> after grabbing a <b>Hook Spike</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "rare",
"i": "icons/T_UI_iconAddon_EyeGoop.png"
},
{
"n": "Bloody Magazine",
"d": "When a <b>Hook Spike</b> misses, all Survivors within <b>8 meters</b> of the impact scream and reveal their Auras for <b>3 seconds</b>.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_BloodyMagazine.png"
},
{
"n": "Burnt Fuse",
"d": "While a Survivor is <b>Impaled</b> and for <b>5 seconds</b> after they extract the <b>Spike</b>, the <b>Exit Gates</b> are blocked for them and any Survivors within <b>13 meters</b>.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_BurntFuse.png"
},
{
"n": "Missing Corkscrew",
"d": "<b>Impaled</b> Survivors emit a <b>32 meter</b> Terror Radius until the <b>Spike</b> is extracted.<br><br>Gain <b>Undetectable</b> from the time a Survivor is <b>Impaled</b> to <b>13 seconds</b> after they extract the <b>Spike</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_MissingCorkscrew.png"
},
{
"n": "Deputy's Badge",
"d": "While in <b>Omnipresent Evil</b>, passing within <b>2 meters</b> of a generator will cause it to explode, losing <b>5%</b> progress and begin regressing. If any survivors are repairing the generator, it doesn't explode, but they get a special Skill Check.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_DeputysBadge.png"
},
{
"n": "Dirty Money",
"d": "Gain <b>2 Tokens</b> whenever a Generator is completed.<br><br>If you are not holding a <b>Spike</b> when vaulting a Window or breaking a Pallet or Breakable Wall, immediately spend a Token and gain a <b>Spike</b>.",
"r": "visceral",
"i": "icons/T_UI_iconAddon_DirtyMoney.png"
},
{
"n": "Iridescent Boat Motor",
"d": "Passing through Windows while in <b>Omnipresent Evil</b> mode marks them for <b>13 seconds</b>. When you perform a <b>Jump Scare</b>, all marked Windows become blocked for <b>13 seconds</b>.",
"r": "visceral",
"i": "icons/T_UI_iconAddon_IridescentBoatMotor.png"
}
]
},
{
"n": "The Judgment",
"i": "icons/K44_TheJudgment_Portrait.png",
"a": [
{
"n": "Koenrad's Gauntlet",
"d": "<b>Increases</b> the max time that could be spent controlling Divine Light before it's Cast by <b>25%</b>.<br><br><b>Decreases</b> the max speed of controlled Divine Light by <b>10%</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_KoenradsGauntlet.png"
},
{
"n": "Heretic's Mark",
"d": "When Cast Divine Light passes a Survivor within <b>1 meter</b> without hitting them, reveal them with Killer Instinct for <b>2 seconds</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_HereticsMark.png"
},
{
"n": "Holy Winged Icon",
"d": "While controlling Divine Light, gain the ability to press the <i>Killer Ability button</i> to Cast it back towards yourself.<br><br>When Cast in this way,The minimum delay before it is lethal is set to <b>0.4 seconds</b>. <b>Increase</b> its max speed by <b>10%</b>. It only damages Heretics.",
"r": "rare",
"i": "icons/T_UI_iconAddon_HolyWingedIcon.png"
},
{
"n": "Prayer Kneeler",
"d": "While controlling Divine Light that is slowed down by a tall obstruction, further <b>decreases</b> its max speed by <b>99%</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_PrayerKneeler.png"
},
{
"n": "Electric Torch",
"d": "<b>Increases</b> the max speed of controlled Divine Light by <b>25%</b>.<br><br>You move <b>10%</b> faster while controlling Divine Light.",
"r": "rare",
"i": "icons/T_UI_iconAddon_ElectricTorch.png"
},
{
"n": "Undying Flame",
"d": "While Zealous,<b>Increases</b> the maximum lifetime of the Cast Divine Light by <b>200%</b>. <b>Decreases</b> the radius of Divine Light by <b>20%</b>. The range that Survivors can observe Divine Light's Aura is <b>extended</b> by <b>200%</b>.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_UndyingFlame.png"
},
{
"n": "Aurora's Telereceptor",
"d": "Whenever a Survivor gains Heresy, for <b>4 seconds</b>,Their Aura is <b>revealed</b> to you. Your Aura is revealed to them.<br><br>Whenever a Heretic sees your aura for a duration, they see it for <b>2 seconds</b> longer.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_AurorasTelereceptor.png"
},
{
"n": "Magnetized Manacles",
"d": "Whenever you Exile a survivor with the lowest amount of Hook States, gain a Token, up to a max of <b>5</b>.<br><br>Whenever you become Zealous, you become Zealous for <b>10% longer</b> per Token.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_MagnetisedManacles.png"
},
{
"n": "Order of Inquisition",
"d": "Whenever Divine Light is Cast, its radius starts <b>25%</b> smaller, but grows until it is <b>50%</b> larger over <b>1 second</b>.",
"r": "rare",
"i": "icons/T_UI_iconAddon_OrderOfInquisition.png"
},
{
"n": "Blindfold of the Devoted",
"d": "Whenever you Exile a Survivor with the lowest amount of Hook States, reveal the Auras of all other Survivors with the lowest amount of Hook States outside <b>32 meters</b> for <b>5 seconds</b>.",
"r": "rare",
"i": "icons/T_UI_iconAddon_BlindfoldOfTheDevoted.png"
},
{
"n": "Superheated Glass",
"d": "You are Zealous for <b>20%</b> shorter.<br><br>While you are Zealous, a Cast Divine Light breaks all Breakable Walls and Dropped Pallets it passes through.<br><br>Whenever you break an object this way, survivors within <b>12 meters</b> of it gain Heresy and scream.",
"r": "rare",
"i": "icons/T_UI_iconAddon_SuperheatedGlass.png"
},
{
"n": "Mark of the Adherent",
"d": "While not Zealous, <b>increases</b> the radius of Divine Light by <b>10%</b>.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_MarkOfTheAdherent.png"
},
{
"n": "Confessor's War Horn",
"d": "Survivors gaining Heresy additionally gain <b>Exhausted</b> for <b>10 seconds</b>.<br><br>Exhausted prevents Survivors from activating other perks that cause Exhausted.",
"r": "uncommon",
"i": "icons/T_UI_iconAddon_ConfessorsWarHorn.png"
},
{
"n": "Searcher's Skull",
"d": "When a Survivor blinds you, they gain Heresy. Additionally, If they were already a Heretic, they become blinded themselves for <b>2.5 seconds</b>.",
"r": "common",
"i": "icons/T_UI_iconAddon_SearchersSkull.png"
},
{
"n": "Chains of the Heretic",
"d": "While Zealous,The minimum delay before Divine Light is lethal is set to <b>0.35 seconds</b>. <b>Increases</b> the max speed of Controlled Divine Light by <b>100%</b>. <b>Increases</b> the max speed of Cast Divine Light by <b>50%</b>. Cast Divine Light will always be directed towards you.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_ChainsOfTheHeretic.png"
},
{
"n": "Improvised Detonators",
"d": "Whenever you Exile a Survivor with the lowest amount of Hook States, if no Survivors are dead, gain a Token.<br><br>Then if you have <b>4</b> or more Tokens,The generator with the most progression explodes and instantly regresses by <b>20%</b> of its total progression.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_ImprovisedDetonators.png"
},
{
"n": "Eyes of Gerhardt",
"d": "Whenever a Heretic completes a Generator, opens an Exit Gate, or exits a Locker, the aura of all Heretics are revealed to you for <b>5 seconds</b>.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_EyesOfGerhardt.png"
},
{
"n": "Obsidian Feather",
"d": "You can no longer manually Cast or cancel controlled Divine Light, and it is automatically Cast when it would instead time out.<br><br>You move <b>100%</b> faster while controlling Divine Light, and <b>decreases</b> the max time that could be spent controlling it by <b>25%</b>.<br><br>You recover <b>10%</b> slower and move <b>30%</b> slower while Casting Divine Light.<br><br>Equipping this add-on negates the effects of <b>Holy Winged Icon</b>.",
"r": "visceral",
"i": "icons/T_UI_iconAddon_ObsidianFeather.png"
},
{
"n": "Crown of the Destroyer",
"d": "Whenever a Survivor Liberates another Survivor from Exile, for <b>20 seconds</b>,Your Terror Radius is <b>reduced</b> by <b>70%</b>. Your Terror Radius is copied to every Shrine of Judgment. You gain <b>Undetectable</b>.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.",
"r": "veryrare",
"i": "icons/T_UI_iconAddon_CrownOfTheDestroyer.png"
},
{
"n": "Mirror of the Creators",
"d": "A Cast Divine Light now Reflects off the first <b>2</b> tall obstructions it would otherwise pass through.<br><br>When Reflecting, it pauses for <b>0.4 seconds</b> before being Cast again.",
"r": "visceral",
"i": "icons/T_UI_iconAddon_MirrorOfTheCreators.png"
}
]
}
];

'use strict';

/**
 * @ngdoc function
 * @name fourthgruntApp.controller:DatabaseCtrl
 * @description
 * # DatabaseCtrl
 * Controller of the fourthgruntApp
 */
angular.module('fourthgruntApp')
  .controller('DatabaseCtrl', function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
    this.json = {
        "Dungeon": [
            {
                "name": "Temple of Snow",
                "dungeontype": "Temple",
                "alignment": "Neutral Good",
                "size": "Small",
                "agedescriptor": "Millenniums Old",
                "hex": "00000",
                "realm": "Ernst Chase",
                "description": "Temple to the god of Snow. These ancient temples were built long ago by the explorers of the Far Wield when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year."
            },
            {
                "name": "Temple of Memory",
                "dungeontype": "Temple",
                "alignment": "Neutral Good",
                "size": "Meduim",
                "agedescriptor": "Millenniums Old",
                "hex": "08000",
                "realm": "Ernst Chase",
                "description": "Temple to the god of Memory. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. Upon entering the temple, it's said that one can recall information previously thought to be lost. With enough meditation, some priests of Memory have claimed to be able to tap into the memory of others while in the temple."
            },
            {
                "name": "Temple of Sky",
                "dungeontype": "Temple",
                "alignment": "Neutral Good",
                "size": "Diminutive",
                "agedescriptor": "Millenniums Old",
                "hex": "20000",
                "realm": "Karmswald",
                "description": "Temple to the god of Sky. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. ",
                "notes": "1. There is a rock near the altar with an engraving that reads “Bow before the holder of the blessed sun, kneel in the glory of the clouds that are carried in it’s arms.”  2. If you commune with the altar here you gain 10 ft of movement speed for 2 days.\n"
            },
            {
                "name": "Dungeon of One Thousand Teeth",
                "dungeontype": "Portal",
                "alignment": "Chaotic Evil",
                "size": "Large",
                "agedescriptor": "Millenniums Old",
                "hex": "03001",
                "realm": "Ernst Chase",
                "description": "Deep within the Faykeep Forest is a horrific landmark known as the Dungeon of a Thousand Teeth. None have known to enter, yet it is rumored that many treasures lie within."
            },
            {
                "name": "The Wise Old Tree",
                "dungeontype": "Ruin",
                "alignment": "Neutral Good",
                "size": "Large",
                "agedescriptor": "Millenniums Old",
                "hex": "12001",
                "realm": "Ernst Chase",
                "description": "Along the edge of the Faykeep Forest in a beautiful clearing, there lies a wide tree with a face intricately carved into its bark. It is known as The Wise Old Tree. It is said that the tree is covered in ancient magical runes.",
                "notes": "When someone is to put their palm against the tree's ancient bark, they may ask one question. The question is answered with complete truth (Questions of the future cannot be answered by The Wise Old Tree and each person only gets one question in their lifetime).\nThere is a small group of deer that lives near the tree and flee whenever people approach.\n"
            },
            {
                "name": "Dragon Skull Cave",
                "dungeontype": "Cavern",
                "alignment": "Neutral Evil",
                "size": "Meduim",
                "agedescriptor": "Centuries Old",
                "hex": "26001",
                "realm": "Karmswald",
                "description": "The entrance to this mysterious cave is an enormous dragon skull. An eerie yellow light pulses from the dragon's throat and a putrid smell fills the air. Little else is known about this mysterious place."
            },
            {
                "name": "Warren's Clearing",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Tiny",
                "agedescriptor": "Centuries Old",
                "hex": "13002",
                "realm": "Ernst Chase",
                "description": "Warren's Clearing is a small valley in northern Faykeep. It is fabled to be the home of sprites, dryads, and other benevolent forest faeries. The clearing is known for its serenity and its calming, soothing nature. Several natural cold-water springs bubble up out of the surface and produce amazing and refreshing water. This place almost would seem to allow one to rest just a short time and feel as if they had gotten a full night's rest.",
                "notes": "Home of Sprites, Dryads and Fairies\nIf you drink from the water, you gain 1d10 of temporary hit points that go away once damage is taken.\nTaking a short rest here is equivalent to taking a long rest, and provides all the same results as a long rest.\n"
            },
            {
                "name": "Temple of Death",
                "dungeontype": "Temple",
                "alignment": "Lawful Evil",
                "size": "Meduim",
                "agedescriptor": "Millenniums Old",
                "hex": "03003",
                "realm": "Ernst Chase",
                "description": "Temple to the god of Death. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. The Temple of Death is hidden deep in the ground. Only those who are true followers of the god of death know the exact whereabouts of the cave that contains the temple to their deity.\n"
            },
            {
                "name": "Emerald Glow Cavern",
                "dungeontype": "Cavern",
                "alignment": "Neutral Neutral",
                "size": "Meduim",
                "agedescriptor": "Centuries Old",
                "hex": "10003",
                "realm": "Ernst Chase",
                "description": "Surrounded by the thicket of the Faykeep Forest on all sides, the Emerald Glow Cavern is part of a massive twisting and winding mineral deposit that is beneath the forest. The caverns are said to produce a magical aura that can morph the surrounding wildlife into magical forms of their former selves."
            },
            {
                "name": "Peckswin's Sanctuary",
                "dungeontype": "Cavern",
                "alignment": "Neutral Good",
                "size": "Diminutive",
                "agedescriptor": "Centuries Old",
                "hex": "15003",
                "realm": "Ernst Chase",
                "description": "A tomb dug into the ground on the outskirts of Gloomwood. The tomb seems to have a magical aura of protection around it, and when entered it seems to put you at ease. The decor is made out of mundane stone and other common minerals, but the craftsmanship is stunning. Peckswin seems the only one to be buried here."
            },
            {
                "name": "Shrine to the Serpent",
                "dungeontype": "Temple",
                "alignment": "Neutral Evil",
                "size": "Diminutive",
                "agedescriptor": "Centuries Old",
                "hex": "12005",
                "realm": "Ernst Chase",
                "description": "The Skraelings are known in civilization for their worship of the demigods known as ascendants. This worship can be very mild and harmless, or escalate into violent and horrific rituals. On either side, the worshipers of these beings have made idols as representation of the ascendants for hundreds, of years. The Shrine to the Serpent is one of the last known standing of these ancient shrines to the ascendants.",
                "notes": "Those that wish to speak to the Serpent of Terror must first commune with this shrine. Once communed they may understand and be understood by the Serpent of Terror for 3 days."
            },
            {
                "name": "Castle of the Titans",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Large",
                "agedescriptor": "Millenniums Old",
                "hex": "24005",
                "realm": "Karmswald",
                "description": "An enormous castle that sits in the plains by the Southaven River. Rumors say that it was built by Giants thousands of years ago, and that the halls still hold their wondrous treasures."
            },
            {
                "name": "Dragon Graveyard",
                "dungeontype": "Ruin",
                "alignment": "Neutral Evil",
                "size": "Huge",
                "agedescriptor": "Centuries Old",
                "hex": "16006",
                "realm": "Ernst Chase",
                "description": "For whatever reason there are dragon bones here. There are dozens of enormous piles of bone. Many call this the Dragon Graveyard. It is a mystery how and why these dragons died here. Who or what could have been powerful enough to do this.",
                "notes": "In the graveyard, players cannot sleep well. They only get the benefits of a short rest from a long rest, and a short rest provides no benefits."
            },
            {
                "name": "Drachward",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Gargantuan",
                "agedescriptor": "Millenniums Old",
                "hex": "20006",
                "realm": "Oakburn Hills",
                "description": "Drachward is an ancient underground city believed to have been built by the Giants of Old. It's halls are said to be filled with ancient and forbidden knowledge. The residents of the Oakburn Hills steer clear of Drachward and say it gives off \"bad omens\". Drachward was abandoned after an earthquake collapsed many of the halls and rooms in the underground city."
            },
            {
                "name": "Temple of Flame",
                "dungeontype": "Temple",
                "alignment": "Chaotic Neutral",
                "size": "Diminutive",
                "agedescriptor": "Millenniums Old",
                "hex": "00007",
                "realm": "Western Reich",
                "description": "Temple to the god of Flame. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. There is a time that only once per year that the temple can be seen in its full completion. On the day of Flame, the sun shines through the large amber crystal. On this day, the followers of the god of Flame congregate to the temple."
            },
            {
                "name": "Light's Crevice",
                "dungeontype": "Temple",
                "alignment": "Neutral Good",
                "size": "Meduim",
                "agedescriptor": "Centuries Old",
                "hex": "06007",
                "realm": "Western Reich",
                "description": "A rupture in the ground where light peers miles into the earth. Many see this as an \"eye\" for the angels to see what is going on in Estaria. Some go on pilgrimages to the crevice to worship their deities. Many harmless beasts flock around the area because of the unnatural amount of greenery. The crevice is known to have bats that swarm in and out during the night.",
                "notes": "Bats swarm here during the night. Taking a long rest here allows for the party to have access to the “detect good/evil” spell for 1 day."
            },
            {
                "name": "Shambler's Grove",
                "dungeontype": "Lair",
                "alignment": "Neutral Evil",
                "size": "Small",
                "agedescriptor": "Decades Old",
                "hex": "23007",
                "realm": "Karmswald",
                "description": "A small grove of trees that always remain as if it is fall. The leaves are a bright orange and yellow and the forest floor is covered in reds and maroons. This is a place that many travel to for it's beauty, but beware. It is said that the plant life isn't so friendly here.",
                "notes": "\n1\nThorns burst up from the ground and attempt to snare and constrict you. Each turn DC 17 on a fail, immobilized, and take 1d6 damage until freed. Once freed, the thorns retract.\n2\nA nearby tree reveals its enormous gaping mouth filled with razor sharp splintered teeth. The tree tries to ensnare randomly DC 18, on a fail, take 2d10 bludgeoning damage. Reach of the tree is 10 feet. 50 hp\n3\nA pack of 3 fungi infested wolves attack. 30 hp, take half damage, Bite - 1d20+3 2d6+2.\n4\nThe roots of nearby trees burst out of the ground. DC 18, on a fail, take 2d10 piercing damage.\n5\nAcorns begin to pelt powerfully from above. Diameter 50 ft, 1d20+2, 3d4\n6\nSpores fly into the air nearby. DC 18 WIS, on a fail fall asleep for 1d4 hours.\n"
            },
            {
                "name": "Pryrt Rise Highlands",
                "dungeontype": "Temple",
                "alignment": "Neutral Neutral",
                "size": "Large",
                "agedescriptor": "Millenniums Old",
                "hex": "26007",
                "realm": "Karmswald",
                "description": "Along the mouth of the Northmelt river in the heart of the Karmswald Mountains, there is a stretch of land known as the Pryrt Rise Highlands. These highlands are known for their strong attunement to archaic forms of rune magics. The stones here are hewn with deep runic indentations that glow and pulse with a powerful teal light. Because of these bizarre stones, there are many Skraelings who consider these highlands to be a holy sight, making travel through here from outsiders is frowned upon.",
                "notes": "Attuning to a magical artifact at this site can be done without problem. All but the most rare items can be identified here.\nIf a long rest is taken here, for the next day, all INT and WIS saving throws have advantage.\nClearly seen in the highlands are a row of misshapen humanoid heads carved out of ancient stone. The heads depicts horrific and disturbing faces.\n"
            },
            {
                "name": "Temple of Annihilation",
                "dungeontype": "Temple",
                "alignment": "Chaotic Evil",
                "size": "Small",
                "agedescriptor": "Millenniums Old",
                "hex": "28007",
                "realm": "Karmswald",
                "description": "Temple to the god of Annihilation. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year."
            },
            {
                "name": "Peace's Rest",
                "dungeontype": "Temple",
                "alignment": "Neutral Good",
                "size": "Diminutive",
                "agedescriptor": "Centuries Old",
                "hex": "02009",
                "realm": "Western Reich",
                "description": "Peace's Rest is a popular pilgrimage site to those who live in the Reichs. The location is known for the sense of peace it instills in the worshipers there and is famous for its supposed miraculous healing abilities.",
                "notes": "Once per session, when you travel to Peace’s Rest, you instantly gain 1 hit die back.\nPeace’s Rest is inhabited by peaceful spirits. The are in the form of glowing spheres and cannot speak or communicate.\nInside the tower at Peace’s Rest there is a small box with a coin slot in the top. If more than 1gp is dropped in, the donator gains +1 WIS for 2 days (does not stack).\n"
            },
            {
                "name": "Statue of St. Kor",
                "dungeontype": "Ruin",
                "alignment": "Lawful Good",
                "size": "Meduim",
                "agedescriptor": "Millenniums Old",
                "hex": "05009",
                "realm": "Ernst Chase",
                "description": "The Statue that can be found in the eastern wolf castle woods known as the statue of St. Kor is an ancient location of religious significance to those who follow the gods of Divination, Memory, Silence, Sky, Snow, Song, or Water. He was born in southern Estaria is known for bringing the religion of the south into the northern realms, essentially singly-handedly creating the major religion of today. St. Kor was known as a calm, caring, and compassionate person who was genuine in his beliefs, making him one of the most effective priests at spreading the word of the gods known as the Seven Angels.",
                "notes": "Nearby there is a small 1 room cavern that leads under the statue. Inside there are 2 small shrines that have been desecrated."
            },
            {
                "name": "Sunken Shrine",
                "dungeontype": "Temple",
                "alignment": "Neutral Neutral",
                "size": "Large",
                "agedescriptor": "Millenniums Old",
                "hex": "09009",
                "realm": "Western Reich",
                "description": "The oldest known shrine to all of the Angels in The Far Weald. The temple sunk into the ground hundreds of years ago. Many still make pilgrimages here to pay homage to their deity, despite the dangers that lie within the shrine."
            },
            {
                "name": "The Roost",
                "dungeontype": "Lair",
                "alignment": "Chaotic Evil",
                "size": "Huge",
                "agedescriptor": "Decades Old",
                "hex": "13009",
                "realm": "Oakburn Hills",
                "description": "A filthy tower that peaks over the western hills of Oakburn. The tower swarms with birdfolk of all kind and can be smelled from over 15 miles away. Inside is covered in bird excrement. If approached, clouds of black birds burst out of the sides of the tower into the sky and squawk angrily."
            },
            {
                "name": "Nuzem Tower",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Huge",
                "agedescriptor": "Centuries Old",
                "hex": "20009",
                "realm": "Oakburn Hills",
                "description": "Also known as Nuzem Castle, the tower that pierces the Oakburn sky is one of the tallest ruins left in the Far Weald. Historically, the tower was an important location for the Blue Heart Clan at its peak popularity. Although it was once claimed by the Blue Hearts, the tower is much older and has dozens of halls packed with lost artifacts. The tower resembles the craftsmanship of D'Kai, but many would contest."
            },
            {
                "name": "Stormstrider Plains",
                "dungeontype": "Lair",
                "alignment": "Chaotic Neutral",
                "size": "Huge",
                "agedescriptor": "Decades Old",
                "hex": "19010",
                "realm": "Oakburn Hills",
                "description": "The Stormstrider Plains is a 12 mile section in the Oakburn Hills that has an eternal storm that swirls above it. Storm elementals congregate here and pound around the landscape tearing up the earth and destroying all those who enter. It's said that there is an orb in the middle of the storm that is causing all of the chaos, but it seems to be near impossible to retrieve it.",
                "notes": "For every day in the Stormstrider Plains, roll 1d100\n\n1-60\nMinor rain - Nothing happens\n61-70\nLightning strikes someone randomly for 3d10 lightning damage.\n71-80\nStorm Elemental: 250 hp, Passive - 1d10 lightning damage dealt each turn to a random opponent, Fist Smash - 1d20+4 on hit 4d8 lightning damage.\n81-90\nBurning Rainfall: Everyone’s maximum hit points are reduced by 10 until a long rest is taken outside the Stormstrider Plains.\n91-99\nHealing Rainfall: Party is healed for 2d10 hp.\n100\nThe Storm Orb: Orb that is charged with the magics of the storms in the plains. Wielding this causes a passive lightening bolt to fire out at a random enemy for 1d6 damage every turn while in combat.\n"
            },
            {
                "name": "Shards of Ascendance",
                "dungeontype": "Portal",
                "alignment": "Chaotic Evil",
                "size": "Huge",
                "agedescriptor": "Millenniums Old",
                "hex": "24010",
                "realm": "Oakburn Hills",
                "description": "The Shards of Ascendance float in the eastern Oakburn Hills.These ruin covered pillars have been around as long as anyone in the hills can remember. Some say that when it storms that lightning arcs from one pillar to another and whispers can be heard when they are approach. Others talk of an ancient race creating the pillars as a message to the future. If only it was still readable... When approached, the shards can be entered if a lightning spell is cast on the pillar.",
                "notes": "Entry is only available if a lightning spell is cast upon the pillar."
            },
            {
                "name": "Temple of Vengeance",
                "dungeontype": "Temple",
                "alignment": "Chaotic Evil",
                "size": "Small",
                "agedescriptor": "Millenniums Old",
                "hex": "30010",
                "realm": "Karmswald",
                "description": "Temple to the god of Vengeance. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year."
            },
            {
                "name": "Temple of Books",
                "dungeontype": "Temple",
                "alignment": "Lawful Neutral",
                "size": "Large",
                "agedescriptor": "Centuries Old",
                "hex": "16011",
                "realm": "Oakburn Hills",
                "description": "The Temple of Books is a great stone cylinder that pierces the sky in the Oakburn Hills. All that have approached the temple have not been able to enter. Many have tried to break in, but the large and thick stone door has prevented many for entering for hundred of years. Inside, the Temple is filled to the top with crammed bookshelves, and is watched and taken care of by the Librarian of Chaos. An ancient being whose soul has been bound to the Temple.",
                "notes": "While in the Temple of Books, you have every book known to exist at your access. Players may exchange unknown literature with the librarian for books in the library of equal value.\n"
            },
            {
                "name": "Statue of the World Builder",
                "dungeontype": "Temple",
                "alignment": "Neutral Neutral",
                "size": "Large",
                "agedescriptor": "Millenniums Old",
                "hex": "01012",
                "realm": "Western Reich",
                "description": "As many things in the Far Weald, this statue's origin is mysterious and unknown. The statue is a depiction of what seems to be an echo of humanity. Perhaps a human that once was. In his hand he appears to be holding a glob of dirt, and suspended around him in almost a magnetic fashion, there are orbs that resemble the moons of the night sky. There are none alive who truly know who this is a statue of, but there are many theories."
            },
            {
                "name": "Temple of Woad",
                "dungeontype": "Temple",
                "alignment": "Neutral Evil",
                "size": "Diminutive",
                "agedescriptor": "Decades Old",
                "hex": "20012",
                "realm": "Villmar",
                "description": "The Temple of Woad resides in the Bruin Marshes of Villmar. The Temple was once visited by pilgrims as a sacred location. Over the years, the corruption of the marshes has twisted the once holy relics into artifacts of evil. Evil spirits, creatures, and beings have flocked to the temple making it a place of fear and terror.",
                "notes": "A warped idol sits in the center of the temple. It appears to be a humanoid form that is squished and distorted in a disturbing manner. The idol is fused to the stone pedestal it sits on.\r\nIf a player touches the idol, they get a mark on their forehead in the shape of a triangle that matches the color and effect rolled on the table below. \r\n1\r\nBlood Mark (Red): Your blood begins to boil in your veins. No matter how delicious you thought it was before, all foods make you wretch at the thought. Your only option for eating is now raw, bloodied meat. \r\n2\r\nRot Mark (Black): You feel a loss of sensation in your face. Your jaw begins to rot and hang open. Your jaw is now visible and you tongue hangs out. You are more vulnerable to diseases, and roll with disadvantage against them.\r\n3\r\nPestilence Mark (Yellow): You develop a hacking cough, and your torso becomes weaker. You have disadvantage on exhaustion rolls. \r\n4\r\nInfestation Mark (Green): You feel things moving under your skin, in your gut and in your chest. You require 2 rations to stay healthy.\r\n5\r\nDepths Mark (Blue): If they weren't already, your eyes turn a deep, dark blue. You no longer need water to survive, but salt. If you drink water, it turns to salt in your mouth and you have an unquenchable thirst. If in water you can no longer float, instead you sink immediately.\r\n6\r\nArcane Mark (Purple): Your veins bulge and become a dark purple throughout your body. You have violent spontaneous magical seizures that cause all nearby to take 2d6 arcane damage.\r\n7\r\nLife Mark (White): Your skin lightens to a bright pale color and your eyes become solid white. You have disadvantage against all forms of undead, and necromancy.\r\n8\r\nGlutton Mark (Orange): You become morbidly fat. You have disadvantage on DEX saving throws.\r\n"
            },
            {
                "name": "Marta Gottfried's Old House",
                "dungeontype": "Ruin",
                "alignment": "Chaotic Evil",
                "size": "Diminutive",
                "agedescriptor": "Decades Old",
                "hex": "22012",
                "realm": "Oakburn Hills",
                "description": "This old farmstead lies on the outskirts of the Bruin Marshes in the Oakburn Hills. The Gottfried's were once an active family in the Kesward community that provided crops to the populace. When an expected shipment of crops never came in, people were sent to investigate. They found the family strung up in trees by their feet. The only one who was still alive was Marta, the 7 year old daughter. She came running out and wasn't able to speak. That was 53 years ago, and she still hasn't said a word. Now if you pass the house, you can see old and new corpses swaying from ropes in the trees. Ever since that day, no one from Kesward has returned.\r\n",
                "notes": "The rats around the house carry vampirism. If you are bitten you must make a DC 15 CON or be infected with vampirism."
            },
            {
                "name": "Waterwash Cave",
                "dungeontype": "Cavern",
                "alignment": "Neutral Neutral",
                "size": "Meduim",
                "agedescriptor": "Centuries Old",
                "hex": "26012",
                "realm": "Karmswald",
                "description": "This cave was and is still being formed by the Southaven River rising up the nearby cliffs in the spring and filling the cave with it's rapid waters. The cave is known to have deep pools, and large waterfalls within.",
                "notes": "The cave is known for leading deep into the world, but is hindered by being filled with majority water. If one could gain the ability to breathe water with either a special herb called Udian Sprouts, or a spell, they could plunge into the depths. Deep within, there are small glowing waterbug-like creatures that illuminate the paths. Once deep enough, the paths lead into a huge underground well, filled with water. Small dwellings can be seen at the bottom filled with awful serpentine aquatic humanoids. Like most of the life in the well, the beings have bioluminescence that runs down their bodies. "
            },
            {
                "name": "Temple of Silence",
                "dungeontype": "Temple",
                "alignment": "Neutral Neutral",
                "size": "Diminutive",
                "agedescriptor": "Millenniums Old",
                "hex": "27013",
                "realm": "Villmar",
                "description": "Temple to the god of Silence. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. The area surrounding the Temple of Silence is said to feel heavy and to speak is difficult. Inside the temple, no noise can be heard. Many priests that consider themselves devoted have gone mad in the sheer silence of the temple. "
            },
            {
                "name": "Tower of Auld",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Large",
                "agedescriptor": "Centuries Old",
                "hex": "30013",
                "realm": "Villmar",
                "description": "A near-complete ancient tower in the far eastern reaches of Villmar. The tower's vast and twisting halls cause for much confusion while trying to delve inside for the secrets within. The tower has an enormous bell at the top that was said to have been rung for the gathering of the Wasted Harvesters, an ancient and traditional militia group. Now the tower has been abandoned by civilized and skraelings and is infested with dark creatures of the wilds, making it difficult to traverse.",
                "notes": "Every night at 12 a.m. the bell rings with 3 loud reverberations."
            },
            {
                "name": "The Black Tower",
                "dungeontype": "Lair",
                "alignment": "Neutral Evil",
                "size": "Huge",
                "agedescriptor": "Millenniums Old",
                "hex": "11015",
                "realm": "Alenfel Barrows",
                "description": "The Black Tower is a little known underground tower in the northern Alenfel Barrows. Many think the builders were around long before the creation of Humans. Typically it's agreed that the Dwargar were the original builders, and passed it on to the Duergar ancestors who still reside inside the menacing tower.",
                "notes": "The entrance into the caverns that contain the Black Tower is in a large boulder that sits alone in the plains. \nOnce inside, there is a small 3x4 shaft that goes on for 30 yards into a rock wall. The end opens up into a huge cavern that reveals The Black Tower. \nThe Duergar of the Black Tower are hesitant, but allow travelers entry if they are not aggressive.\nKing - Garag [Duergar, Male]\r\nGarag is an enormous duergar who is said to be of a direct bloodline to the original ancestors of the dwarves and duergar alike.\r\nLibrarian - Agila of Westerheim [Dwarf, Male]\r\n"
            },
            {
                "name": "Tahatan Hut",
                "dungeontype": "Temple",
                "alignment": "Chaotic Evil",
                "size": "Diminutive",
                "agedescriptor": "Centuries Old",
                "hex": "23015",
                "realm": "Villmar",
                "description": "A small wooden hut that is deep within the swamps. Inside there is said to be a goat that grants wishes to the worthy, and curses those who are not. Many of the skraelings fear this hut and stay far away talking about a terrible monster that only brings death and other atrocities. ",
                "notes": "Flesh will suffice is written on a sign posted above the doorframe of the hut.\r\nInside there is a black and white, large-horned goat. In front of the goat there is a bowl filled with bloody residue. Bone piles can be seen around the goat.\r\nIf meat of any kind is put into the bowl roll a WIS saving throw.\r\nOnly 1 roll can be made per visit.\r\n\r\n1-9\r\nThe goat begins to bleat angrily as the meat offering turns to ash. The goat’s eyes fill with blackness, and he begins to melt into a dark black pool of sludge. You are instantly struck with debilitating horror and knocked unconscious. Upon awakening in 1d4 hours, you have sprouted horns and begin to have sudden bleating mid speech. In 2d6 days, you will fully transform into a female goat.\r\n10-15\r\nThe goat rises and feasts on the offering, bleating in acceptance.\r\n16-19\r\nThe goat’s body begins to pulse. Bones begin to crack as the goat begins to slowly mutate into a dark shadowy being that stands in its place. It grants the offerer with The Horn of Sphrax\r\n20+\r\nThe goat and the offering begin to smoke, eventually becoming a cloud of darkness that pushes itself down the offerers throat. The offeror gains the Blessing of Sphrax\r\nThe Horn of Sphrax - When blown, the horn releases a weak and chilling scream (counts as an attack action). All enemies in a 30ft radius must make a WIS saving throw of 14 or more, or take 1d6 necrotic damage. If someone is killed by the horn, they are instead turned into a black goat and are unconscious for 1d4 hours.\r\nThe Blessing of Sphrax - The offeror's eyes fill with shadowy blackness permanently as small black horns sprout on their head. The offeror may level up either DEX, CHA, or WIS by 1 point. You may now make intimidation checks with WIS.\r\n"
            },
            {
                "name": "Star Map",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Diminutive",
                "agedescriptor": "Millenniums Old",
                "hex": "02016",
                "realm": "Western Reich",
                "description": "A map that was not created by any mortal or even ascendant. Surely a deity but have crafted such an intricate and bizarre item. With the right knowledge a user can use the device to peer into the cosmos and read about the stars.",
                "notes": "There is a burn streak across one of the nearby stone walls and an empty steel cannister lodged deep into the ground nearby.\r\nThis location is very quiet. All that can be heard is the whistling of the wind through the crags that surround the map.\r\nThis location is completely safe. There will be no encounters while here.\r\n"
            },
            {
                "name": "The Husk",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Colossal",
                "agedescriptor": "Millenniums Old",
                "hex": "25016",
                "realm": "Villmar",
                "description": "The Husk in the calcified body of an enormous insectoid creature in the plains of Villmar. According to the locals, the husk has been around as long as anyone can remember. The Husk is filled with hundreds of tunnels burrowed by various swamp creatures, and holds within it plenty of hiding spots for those wishing to plot or partake in malicious deeds.\r\n"
            },
            {
                "name": "Wyrm's Path",
                "dungeontype": "Lair",
                "alignment": "Neutral Evil",
                "size": "Small",
                "agedescriptor": "Years Old",
                "hex": "22017",
                "realm": "Swincrest",
                "description": "The mouth of the Southaven River into Lake Westerheim is not easily traversed. The most notable pitfall to a sailor on the river is the Path of the Wyrm. This overgrowth along the banks is well known for its association with lesser wyrms. Many travelers are either eaten, or taken by the wyrms in these woods.",
                "notes": "A DC 12 must be succeeded by everyone or else the drakes are alerted of the passing adventurers. \r\nDrake: 50 hp, 2 attacks/turn, Claws - 4d6 slashing, Bite - 3d8 piercing.\r\nDrakes will let people go if they pay the fee of 500 gold.\r\nDrakes will make a deal on a successful DC 20 persuasion. \r\n"
            },
            {
                "name": "Skulk Springs",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Huge",
                "agedescriptor": "Centuries Old",
                "hex": "23017",
                "realm": "Villmar",
                "description": "The Skulk Springs are a flatland of hot steam geysers that stretch across a 12 mile section of Villmar to the south of the marshes. The mud in the springs is known for having healing properties and causing rapid skin regeneration. The springs are treacherous to cross because of the occasional explosion of 350 degree steam from the ground. Because of the steam geysers, bodies can be found occasionally with all of the skin and part of the flesh melted off.",
                "notes": "Roll 4 times on the geyser table every time there is travel through the springs. \r\n\r\n1-15\r\nNothing Happens\r\n16-20\r\nSteam blasts out of the ground - DC 18, on a fail take 2d10 burning damage.\r\n"
            },
            {
                "name": "Mines of the First Expedition",
                "dungeontype": "Cavern",
                "alignment": "Neutral Evil",
                "size": "Colossal",
                "agedescriptor": "Millenniums Old",
                "hex": "10018",
                "realm": "Alenfel Barrows",
                "description": "These mines were the first attempt to harvesting minerals from the grounds of the Far Weald. They have been long abandoned and are host to all sorts of creatures and beings from around the Alenfel Barrows. Word has been spread recently that the mines hold devilish secrets and a terrifying ancient wizard that seeks to destroy explorers."
            },
            {
                "name": "Blasted Throne",
                "dungeontype": "Temple",
                "alignment": "Neutral Evil",
                "size": "Meduim",
                "agedescriptor": "Millenniums Old",
                "hex": "15019",
                "realm": "Alenfel Barrows",
                "description": "A barren, grey, shale bed that dips down into a small valley. In the center lies the Blasted Throne. Little is known of the throne, many think it was an ancient throne for one of the 12 before their separation from this realm.",
                "notes": "If a player seats themselves upon the throne they must make a DC 18 WIS saving throw or suffer the consequences and roll 1d6.\r\n\r\n1\r\nA crown of small, white horns sprout around the head. The perpetrator can now be sensed by detect evil spells.\r\n2\r\nThe trespasser's skin begins to bubble and writhe dealing 50% of their total HP in damage as they begin to split in half from the head down. A bleeding, red, slimy copy emerges as the trespasser's body is quickly rebuilt. The clone immediately runs away and into the wilds.\r\n3\r\nA loud splash is heard. A green, chunky pus slides out of the trespasser's right ear onto the ground and continues to for 1d4 days. Each day the trespasser must make an INT saving throw of 16 or loose 1 INT.\r\n4\r\nThe trespasser's bones begin to wobble as they turn into a malleable rubbery substance. Their movement speed is halved until a remove curse spell is cast on them.\r\n5\r\nA tremor passes through the ground and shakes everyone to their core. Over the next 1d6 days, the trespasser begins to have joint pain. On the last day, they wake up with large crystallized protrusions bursting out of their skin at their elbows, knees and ankles. All athletics and acrobatics checks are rolled with disadvantage.\r\n6\r\nThe trespasser's jaw unhinges as a wispy black cloud bursts out of their mouth. The trespasser's soul is sundered from their body inflicting 3d10 damage. The soul haunts the empty shell of the trespasser making them unable to take long rests outside of towns, villages, and settlements.\r\n"
            },
            {
                "name": "Halls of the Tormented",
                "dungeontype": "Ruin",
                "alignment": "Chaotic Evil",
                "size": "Meduim",
                "agedescriptor": "Decades Old",
                "hex": "20019",
                "realm": "Swincrest",
                "description": "The Halls of Torment can be found in a deep overhang beside a small dried lake. The Halls were once a place that dozens of Grey-kin lived long ago, but has since been abandoned and infested with who-knows-what. The Halls are surrounded by deep cervaces that plunge into the depths of the world, one wrong step could end in imminent death. "
            },
            {
                "name": "Temple of Divination",
                "dungeontype": "Temple",
                "alignment": "Lawful Good",
                "size": "Tiny",
                "agedescriptor": "Millenniums Old",
                "hex": "06020",
                "realm": "Alenfel Barrows",
                "description": "Temple to the god of Divination. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. ",
                "notes": "In the center of the temple platform there is a large glowing crystalline formation. Touching it prompts the seeker to decide if they wish to peer into the future, warning them of the consequences. If they accept, roll 1d6 on the divination table.\r\n\r\n1\r\nYou peer into your future. Gain an oracular vision.\r\n2\r\nYou peer into the future, but it is clouded by darkness. You see a figure that resembles you, flinging into a endless depth. Screams of agony and torment can be heard as the figure descends into the depths. Take 2d8 psychic damage, and get knocked unconscious for 1d4 hours.\r\n3\r\nYou peer into the future. You see a figure that resembles you with glowing eyes and a fiery halo ascending into the heavens. Bright glowing tendrils lower down and carry them into the clouds. You learn the detect evil/good spell and gain 10 temporary hit points.\r\n4\r\nYou are sent into a shady memory of your past. It is something that was horrible (explain what it is). Throughout the whole memory, you notice a dark shadowy figure with a sinister smile observing. You feel him peer into your mind's eye as a loud crack rumbles through the air. The figure appears before you in real life and attacks. Void Terror: 85 hp, 1d20+5, 2d6+2 two attacks/turn, takes ½ damage.\r\n5\r\nYou are blinded with a powerful light before you. You are able to see anything. You are now blind for 1d4 days.\r\n6\r\nYou see yourself touching the crystal from outside your body. You feel an enlightening glory fill you. Your heart begins to beat fast and your lungs fill with the fresh air of the plains. You are energized by the divine. Gain a permanent 2 hp. \r\n"
            },
            {
                "name": "Wickbar Cells",
                "dungeontype": "Lair",
                "alignment": "Lawful Neutral",
                "size": "Large",
                "agedescriptor": "Centuries Old",
                "hex": "17020",
                "realm": "Alenfel Barrows",
                "description": "Wickbar Cells is the last place many want to go. The Cells are the destination for beings who can not be merely killed. Beings that have perhaps bound their soul to an object, or maybe have a regenerative ability. Wickbar is highly watched over by one watchmen who has never once failed in containing those inside.",
                "notes": "Due to the lack of functioning prisons in the Far Weald and the increase in magical offenders, the Wickbar Cells have become a place of heavy population. Many petty criminals are sent here and are executed because of lack of room.\r\n"
            },
            {
                "name": "Temple of Deception",
                "dungeontype": "Temple",
                "alignment": "Lawful Evil",
                "size": "Tiny",
                "agedescriptor": "Millenniums Old",
                "hex": "26020",
                "realm": "Villmar",
                "description": "Temple to the god of Deception. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. The Temple of Deception is known to only be visible to those who follow him as their deity. Those that find themselves near the supposed location have reported floating monoliths that cause a sense of confusion. ",
                "notes": "When approached, the monoliths pull each person into their own reality of the Temple. They can not see, hear, or feel their friends while near this temple. \r\nIn the center of the 3 monoliths, there is a small pedestal with a pool of water. Around the edge of the pedestal is written “Those who drink gain my knowledge.”\r\nIf the water is drunk from the pedestal, the drinker must take a CHA saving throw. On a 15 or less, the target instantly looses 1 point of INT. The water does not work if transported out of the temple. \r\n"
            },
            {
                "name": "Bruin Tower",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Large",
                "agedescriptor": "Millenniums Old",
                "hex": "27021",
                "realm": "Villmar",
                "description": "Little is known about the Bruin Tower. It lies in ruin along the shore of the Westerheim lake. The original builders of the tower were suspected to be Elves of an ancient dynasty. Legend has it that these elves were rulers of a large village nearby the tower that thrived off of the lake. It's been said that the tower was abandoned during a conflict with the villagers and their rulers. Those who are brave enough to venture into the tower now, tell of eerie noises made in the dark, and shadows moving of their own accord.",
                "notes": "In a hovel a few miles from the tower, there is a being called Silicus"
            },
            {
                "name": "Heathersage Keep",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Meduim",
                "agedescriptor": "Centuries Old",
                "hex": "07022",
                "realm": "Alenfel Barrows",
                "description": "Hearthsage Keep was created by a great king of the ancient times, and was passed down through his family line for many generations. The halls were once laden with gold trimmings and ruby inlays, but have been reduced to dusty, abandoned, hazards. The keep was well known for its hounds that the king bred for hunting and tracking, and became a location where many hunters and warlords would travel. Some say that though the keep has been long abandoned, that there are still ancient and powerful packs of hounds that roam the courtyards and corridors.",
                "notes": "Roll 1d20 in each room. On a 12 or more, there are 1d6 dogs in the room.\r\nA large stone room with a statue in the corner of a man wearing plate armor and a helmet shaped to look like a hounds head. There is a set of stairs that lead to the next floor.\r\nIdentical to room #1\r\nAn entry way on the second floor. There are two doors and an entrance that leads to the balcony.\r\nIdentical to room #3\r\nA room with an old stone bed frame, and a cow skeleton piled in the center of the room. Buried in the cow skeleton there is a small black egg (Imp egg).\r\nThis room is filled with rusty hooks hanging from the ceiling. Some hooks have bones hanging from them. With a DC 14, a player can navigate through the hooks to find a large brass container on the other side filled with 652 silver pieces.\r\nThis room has several slats in the walls that appear to be used for shelving. In the slats, there are dozens of ancient books, all written in a foreign tongue. A DC 14 reveals a book that can teach 1 party member the ability to speak with animals.\r\nThe door to this room is locked. It can be broken or picked with a DC 16. Inside is a room filled with 3 peices of art worth 50gp each, a copper crown with ruby gem stones worth 25 gp, and a silver decorated steel hammer.\r\n1-handed weapon: 1d8 radiant damage. When a creature is at death's door, as an action,  once per day, the hammer may be placed on them to restore 1d8 hp.\r\nOpen courtyard with a fountain placed in the middle. The fountain no longer runs, but has collected rainwater in its pools. Above a balcony can be seen leading into two different rooms.\r\n"
            },
            {
                "name": "S. S. Lenten",
                "dungeontype": "Ruin",
                "alignment": "Neutral Neutral",
                "size": "Tiny",
                "agedescriptor": "Decades Old",
                "hex": "24022",
                "realm": "Swincrest",
                "description": "Supposed to be a wrecked pirate ship, the S. S. Lenten is a petrified lake vessel that has been grounded for many years. The vessel is enormous and many suspect that it may still be full of the treasures that the lake pirates stole. ",
                "notes": "The ship haunted by a Ghost(SRD) that must be dealt with to get the treasure.\r\nRoll on the treasure table 5 times to generate loot for the ship.\r\n"
            },
            {
                "name": "Nootau's Demise",
                "dungeontype": "Ruin",
                "alignment": "Neutral Evil",
                "size": "Meduim",
                "agedescriptor": "Centuries Old",
                "hex": "05023",
                "realm": "Alenfel Barrows",
                "description": "A large dragon skeleton that lies outside an abandoned city. The skeleton is known to give off magical essence, and is widely researched by magic users. The nearby city is picked clean of all of its treasures and the majority of the buildings have collapsed. Most of what remains is the wall and the castle.\r\n",
                "notes": "The bones of the creature have hundreds of plague runes engraved all along them.\r\nA sulphurous odor hangs in the air surrounding the site.\r\nA DC 20 check tells the party that the skeleton was once almost raised from the dead, but the ritual did not get performed properly.\r\n"
            },
            {
                "name": "Donama's Nest",
                "dungeontype": "Lair",
                "alignment": "Chaotic Evil",
                "size": "Large",
                "agedescriptor": "Centuries Old",
                "hex": "10023",
                "realm": "Alenfel Barrows",
                "description": "Donama's Nest is a large silky mound that covers an enormous crevice in the Alenfel Barrows. Inside can be found various mining shafts, and mining supplies. In the center of the dome there is a large arachnid named Donama. She lays eggs that hatch into the spiders that roam all of the Far Weald. Many parties have been sent to exterminate her, but none have been successful."
            },
            {
                "name": "Temple of Water",
                "dungeontype": "Temple",
                "alignment": "Neutral Neutral",
                "size": "Tiny",
                "agedescriptor": "Millenniums Old",
                "hex": "26023",
                "realm": "Swincrest",
                "description": "Temple to the god of Water. These ancient temples were built long ago by the explorers of the Far Weald when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. The location of the Temple of Water is known to be in the Westerheim Lake, but only few know of the exact location. It is said that the temple was hidden by the God of Water after it being defaced by priests of Flame. ",
                "notes": "Water collected from the temple sparkles with a bright sheen. When drunk in large quantities, can have restorative abilities. 1 waterskin worth heals for 1d6 hp.\r\n"
            },
            {
                "name": "Chapel to the Fourth Blight",
                "dungeontype": "Temple",
                "alignment": "Chaotic Evil",
                "size": "Small",
                "agedescriptor": "Years Old",
                "hex": "24024",
                "realm": "Swincrest",
                "description": "The Chapel of the Fourth Blight is a cultic temple in the Fellbach Thicket. The cultists worship The Fourth Blight. They perform sick rituals where they offer parts of their own bodies, such as tongues, ears, and limbs. In return for these pledges of devotion, The Fourth Blight grants the cultists with a weaponizable plague known as Verden Vomit in which the cultists spew a green corrosive paste from their mouths. The paste can cause boils, burning, organ degeneration and eventually death if not properly treated. The cultists are generally neutral and stay to themselves, but will attack without question if their chapel is approached without warning.",
                "notes": "Minimum of 6 cultists(SRD) at any given time are at the chapel.\r\nCultists spew a green corrosive paste from their mouths that does 3d6 acid damage.\r\nInside is a Idol to the Fourth Blight. It is made of jade and is worth 500 gp. If the Fourth Blight is approached with the idol, he may be communicated with.\r\n"
            },
            {
                "name": "Gregor's Graveyard",
                "dungeontype": "Ruin",
                "alignment": "Chaotic Evil",
                "size": "Large",
                "agedescriptor": "Centuries Old",
                "hex": "27024",
                "realm": "Swincrest",
                "description": "Gregor's Graveyard is a site of bad omen. the people of Swincrest call the place The Traveler's Death. The location got it's name as Gregor's Graveyard because of the dark activity that goes on around there. Many people think it is a demon named Gregor. If approached, the graveyard is littered with bones and has a large mausoleum that is supposed to house Gregor. The graveyard has no demon, but rather a rather powerful death cult run by a necromancer.",
                "notes": "Cultists swarm around the area. They are not kind to intruders."
            },
            {
                "name": "Temple of Song",
                "dungeontype": "Temple",
                "alignment": "Neutral Good",
                "size": "Small",
                "agedescriptor": "Millenniums Old",
                "hex": "18026",
                "realm": "Swincrest",
                "description": "Temple to the god of Song. These ancient temples were built long ago by the explorers of the Far Weild when they made their towns and villages. Followers of the gods make pilgrimages to these temples throughout the year. The temple of song is the oldest of the temples to be built in The Far Weild.",
                "notes": "When an instrument is played, or a song is sung in the temple, it is amplified as the wind itself beings to harmonize with the music.\r\nIf your party has a bard an song of rest is cast here, treat it as a long rest, and gain 2d10 temporary hit points.\r\n"
            }
        ],
        "Steading": [
            {
                "name": "Tak'Var Tribe",
                "size": "Tiny",
                "alignment": "Neutral Evil",
                "hex": "07001",
                "realm": "Ernst Chase",
                "description": "In the deep woods of the Faykeep Forest, there is a small tribe of Feral Orcs, known as the Tak'Var tribe. They are said to have come from the descendants of the orcish slaves brought into the Far Weald by the early explorers. The surrounding several miles are stripped of all plant life and is barren thanks to their constant building and need for fire.",
                "notes": "Not initially hostile, but require the relinquishment of weapons and armor before having a conversation.\nIf you insult their patron god, Bogtillac, the god of combat, you are required to fight against the strongest of Bogtillac’s acolytes.\nMany of the tribesmen have goblin slaves.\n",
                "notablePeople": "Cheif - Jregh the Blue [Orc, Male]\nPitmaster (Houndmaster) - Gorgo [Orc, Male]\nShaman - Healer Gashnak [Orc, Female]\nOracle - Mor the Blind [Half-Orc, Female]\n"
            },
            {
                "name": "Hooftheim",
                "size": "Meduim",
                "alignment": "Neutral Neutral",
                "hex": "22001",
                "realm": "Karmswald",
                "description": "Hooftheim is a civilized village of fisherman in northern Karmswald. The people their are open and friendly because of the lack of visitors. The only option for food is fish and mollusks. Generally nothing happens in Hooftheim except for the occasional run ins with The River's Hunger. Most of the buildings are constructed from massive stone blocks. It is governed by a court of aristocrats, led by a female dwarf named Rune.",
                "notablePeople": "Nashobites\nWorship Nashoba, and provide sacrifices to him monthly. They are secretive and are shunned by society.\nIdentified by a fish-shaped brand on their backs.\nMembers: 120\nFishmonger’s Guild\nA guild for the protection of fishermen. They have set up tariffs to make it extremely difficult for outside food sources to enter Hooftheim.\nMembers: 326\nFollowers of Cruelyew\nThe largest religion of Hooftheim is in worship to an ancient and fabled being known as Cruelyew, even though he has been unseen for hundreds of years. Cruelyew was a large ent-like creature who protected the town from the harassment of Nashoba. In return, the villagers allowed him to draw nutrients from their fertile soil.\n",
                "buildings": "Inn - Floater’s Friend\nInn Keeper - Luca Krampitz [Tiefling, Male]\nBlacksmith - Baumer’s Steel & Sundry\nOwner - Josef Baumer [Halfling, Male]\nFishmonger - Feast of Fish\nOwner - Arne Schumann [Human, Male]\nTemple - Sanctum Of Cruelyew\nHead Priest/Governor - Rune [Dwarf, Female]\n"
            },
            {
                "name": "Castle of the North",
                "size": "Small",
                "alignment": "Neutral Good",
                "hex": "29001",
                "realm": "Karmswald",
                "description": "Lords of old times resided in castles before the creations of the towns and villages. Many of these castles have been abandoned and are now home to monsters and creatures. The Castle of the North is one of the few exceptions. The Knights of the Red Branch are a group of heros that train in the castle. They train in the art of sword and board without a known reason. The knights don't leave the mountainous region of Karmswald and consider themselves above the other orders of The Far Weild.",
                "notablePeople": "Reverend/Leader - Alex Krause [Human, Male]\nBlacksmith - Marwin Kühne [Human, Male]\nQuartermaster - Alwin Seger [Human, Male]\n"
            },
            {
                "name": "House of the Northern Reaches",
                "size": "Diminutive",
                "alignment": "Neutral Evil",
                "hex": "20002",
                "realm": "Karmswald",
                "description": "A wooden cabin built in a perilous mountain range of Karmswald. The cabin is not known to have inhabitants, but the people of Hooftheim complain of loud explosions echoing from the mountains in the direction of the house. Inside there are dozens of extremely rare alchemical ingredients, and the house is lived in by a green hag that steals wondering children from the nearby village and eats them. Underneath the house is a basement with several children."
            },
            {
                "name": "Skraeling Waterfall Village",
                "size": "Small",
                "alignment": "Chaotic Good",
                "hex": "19003",
                "realm": "Ernst Chase",
                "description": "This Skraeling village is strategically hidden behind a waterfall that pours over one of the northern cliffs. The skraelings here aren't aggressive, but are very suspicious and don't hesitate to defend themselves. At night they tell stories of a best that lives nearby.",
                "notablePeople": "Chief - Monapow [Skraeling, Male]\nGreat Hunter - Millro [Skraeling, Male]\nShaman - Mikuna [Skraeling, Female]"
            },
            {
                "name": "Skraeling Grotto Village",
                "size": "Small",
                "alignment": "Neutral Good",
                "hex": "27003",
                "realm": "Karmswald",
                "description": "This village is built next to a bubbling spring and a shimmering grotto. The skraelings here wear painted masks to hide their faces, but otherwise are friendly and helpful. They provide shelter to any who need their help. The skraelings here are plagued with Jaw Rot. If a player is in contact with a skraeling's saliva in anyway, they must make a DC 18 CON saving throw or contract Jaw Rot.",
                "notablePeople": "Chief - Ahuli [Skraeling, Male]\nGreat Hunter - Muata [Skraeling, Male]\nShaman - Chogan [Skraeling, Female]\n"
            },
            {
                "name": "Westerock Mill",
                "size": "Meduim",
                "alignment": "Neutral Neutral",
                "hex": "29004",
                "realm": "Karmswald",
                "description": "Westerock Mill is the last standing of what used to be dozens of mills in the northern Karmswald woods. The uniqueness of this mill is in its dual production. It is both a lumber mill and a grains mill. Westerock flour is some of the highest quality flour in all of Estaria. Gourmet Chefs from all over the world use the flour that comes from the millstone of Westerock.",
                "notes": "The Mill is run by Dominik Flemming\nWesterock Mill sells rations\nThe mill can be used to create timbers good for building large buildings.\n",
                "notablePeople": "Green Shirts\nMill Operators\nPayed the most\nThink of themselves more highly than the other workers\nBlue Shirts\nWheat & Flour Gruntmen\nJealous of the green shirts\nWant the mill to stop lumber production and focus on wheat.\nTan Shirts\nLumbermen\nOften sent into the wilds to cut lumber at high risk of attack by creatures \nThink they deserve highest pay because of the danger in their work\n"
            },
            {
                "name": "Blackhill Manor",
                "size": "Meduim",
                "alignment": "Neutral Evil",
                "hex": "15006",
                "realm": "Ernst Chase",
                "description": "Blackhill Manor is a mansion that is falling apart in the depths of the Gloomwood. Some adventurers say that they have traveled to the manor and have retrieved the ancient treasures that lie within, while others say that the manor is still ripe for the plunder. Either way, the enormous black skull that is carved into the entrance of the manor scares most away."
            },
            {
                "name": "Mucker's Inn",
                "size": "Diminutive",
                "alignment": "Neutral Evil",
                "hex": "12007",
                "realm": "Ernst Chase",
                "description": "There is an Inn on the path to Gloomwood. The Inn is known for its unique collection of taxidermied beasts and customers. The Inn is said to be a haunted location that is feared by those who are nervous around the dark magics.",
                "notablePeople": "Innkeeper - Kimberly Gottfried [Elf-Vampire, Female]\nCook - Ol’ Sammy [Human, Male]\nBard - Bistrus the Great [Halfling, Male]\n"
            },
            {
                "name": "Kesward",
                "size": "Large",
                "alignment": "Neutral Neutral",
                "hex": "18008",
                "realm": "Oakburn Hills",
                "description": "Another city said to have been built by the Giants of Old. Kesward has been inhabited by settlers from Marriwald. The city is split into two sections. It is suspected that the two parts were once connected by a land bridge, but some sort of natural disaster broke the bridge. Now the inhabitants use a large balloon to get from one half of the city to the other, so they can avoid leaving the safety of the walls. Kesward was separated into two sections by an earthquake that had a similar drastic effect to it's sister city to the north, Drachward.",
                "notes": "Town Crest - A green horse on a white background\nThe left side of town has been partially burned down. There have been several witnesses that claim they saw a crazed mage shooting flames from his hands into people's homes along the edge of the cliffs. Others blame it on the work of the Labor Party.\n",
                "notablePeople": "Kesward Labor Party\nMembers: 4,432\nPolitical party that runs the west(left) side of Kesward. Bullying, fear tactics, and terror attacks are common for this party. \nTries to push and persuade people to vote in officials the benefit West Kesward. \nSovereign Rite\nMembers: 2,436\nPolitical party that runs the east(right) side of Kesward. Bribery and being above the law is common for this party. \nPushes for a further separation of the two sides of the city. Wants to make it more and more difficult for someone living in West Kesward to move to East Kesward.\n",
                "buildings": "Inn - The Bear’s Head\nInn Keeper - Maxx Blucher [Human, Male]\nBlacksmith - Steelman’s\nOwner - Clemens Hannig [Human, Male]\nAlchemist - The Smoking Cauldron\nOwner - Daniel the Warm [Halfling, Male]\nBarber - Wolf Barbering\nEberwolf Scheck [Teifling, Male]\nRepublic Meeting Hall\nGeneral Otebon [Human, Male]\n"
            },
            {
                "name": "Oftburg",
                "size": "Small",
                "alignment": "Neutral Neutral",
                "hex": "01010",
                "realm": "Western Reich",
                "description": "Most of the buildings are constructed from ancient marble bricks. It is governed by the elder and a voting system. The Sanctuary of the Silver Sky is a common destination for religious pilgrims. A small town to the West of Marriwald. They farm various vegetables. The villagers are suspicious of outsiders, but with enough warming up, they are happy to open their homes to adventurers.",
                "notes": "Several miles from Oftburg there is an abandoned gold mine that has been closed off. In town, people speak of the riches that lie within, but complain about the terrible “thing” that was the cause of the mines closing.",
                "notablePeople": "Inn - The Bear’s Head\nInn Keeper - Leon Harper [Dwarf, Male]\nCook - Chef Russell the Brute [Orc, Male]\nBlacksmith - Relk’s Iron & Steel\nOwner - Relk the Bold [Human, Male]\nAlchemist - The Home Brewery\nOwner - Simon Middleton [Human, Male]\nElder’s House\nElder - Matthias Wadsworth [Human, Male]\nMilitia Leader - Heinrich Tarson [Human, Male]\nTemple - The Sanctuary of the Silver Sky\nHead Priest - Sister Brellas [Half-Elf, Female]\n"
            },
            {
                "name": "The Witch's Hut",
                "size": "Diminutive",
                "alignment": "Chaotic Evil",
                "hex": "22010",
                "realm": "Oakburn Hills",
                "description": "Witches are unlike the Wizards and Clerics of society. Instead of harnessing the power of magic in a structured and careful way, they chose to access the dark magic recklessly, many times putting others around them at risk. Because of this, many witches are expelled from their communities and are forced to live in the wilds in solitude, typically using their dark magics to construct large unusual shaped huts to keep all of their magical apparatus.",
                "notes": "The house is full of clutter, magical charms are on everything, 4 dogs and 3 cats seem to somehow live in this one room home with its owner.\nOutside is littered with dozens of uncooped chickens. Many of their feathers can be seen attached to various parts of the inside and outside of the house.\n"
            },
            {
                "name": "Fearn",
                "size": "Meduim",
                "alignment": "Neutral Neutral",
                "hex": "29011",
                "realm": "Karmswald",
                "description": "Fearn is a settlement built on a large jutting spiraled craig in the Southaven Mountains. The people who established the settlement, are said to be a unique. Their skin is very pale, and they have long golden hair. The men stand no shorter than 6 feet, and are quite muscular. It has been speculated that these people are the closest living relatives to the extinct giants. The people are friendly and welcoming. They celebrate the rare arrival of visitors with a hearty and wild feast in honor of the visitors. Though they have their own language, they speak the common tongue quite well.",
                "notes": "Beneath Fearn is an ancient burial site. It was closed off long ago, but if it were to be opened, it would reveal a horrible black sludge of a creature that consumes everything It can touch.",
                "notablePeople": "Sons of Fearn\r\nMembers: 1,036\r\nA group that wishes to align themselves back with the heroes of old.\r\nWelcoming to outsiders, but aggressive or violent to people that try to wed or court one of the Fearnians.\r\nIdentifiable by dark blue tattoos that line their arms and faces. \r\nParticipate in ancestor worship, but don’t go to a temple.\r\nWolf’s Watch\r\nMembers: 143\r\nA group that holds true the old ways. They worship Ragnosk the Bear, a great and powerful nature spirit who was fabled to have lived in the mountains where Fearn was built.  \r\nThey value respect for the earth and its ways. \r\nThey can be identified by large deer skulls mounted above their doors into their houses.\r\n",
                "buildings": "Inn - The Wandering Hydra\r\nInn Keeper - Alfon Fossum [Fearnian, Male]\r\nGeneral Goods - The Empty Saddle\r\nOwner - Phillip Bergo [Fearnian, Male]\r\nEarl’s House - The Serpent's Spine\r\nEarl - Rory Saltvik[Fearnian, Male]\r\nEarless - Leonie Saltvik[Fearnian, Female]\r\nLibrarian - Tilo Nesset[Fearnian, Male]\r\nHuscarl - Idrup Thon[Fearnian, Male]\r\nTemple of the Bear\r\nDruid - Vigfus [Fearnian, Male]\r\n"
            },
            {
                "name": "Courageous Wolf Inn",
                "size": "Tiny",
                "alignment": "Neutral Neutral",
                "hex": "18012",
                "realm": "Oakburn Hills",
                "description": "The Courageous Wolf is a small cluster of buildings in the southern Oakburn Hills. The inn is of non standard format. It consists of three separate buildings: The Innkeeper's, the bunk house, and the pub. The innkeeper is known to be very secretive which causes some to feel unwelcome.",
                "notablePeople": "Innkeeper - Tolando Kelfir [Male, Elf]"
            },
            {
                "name": "Burgstein",
                "size": "Small",
                "alignment": "Neutral Neutral",
                "hex": "21012",
                "realm": "Villmar",
                "description": "The people of Burgstein are reclusive and hesitant to trust visitors. The town consists of towers build along and in the lake. The towers contain several families. The villagers use canoes to get from one tower to the other. Many of the villagers are stricken with the horrible disease known as Bog Blight. ",
                "buildings": "Inn - The Half-Full Tankard\r\nInn Keeper - Aaron Steinberg [Human, Male]\r\nTailor - The Twine & Needle\r\nHead Tailor - Katja Blatt [Human, Female]\r\nTemple - Temple of Moon\r\nHead Priestess - Nola Villeth [Elf, Female]\r\n"
            },
            {
                "name": "Marriwald",
                "size": "Gargantuan",
                "alignment": "Neutral Neutral",
                "hex": "10013",
                "realm": "Western Reich",
                "description": "Marriwald is the capital of the Far Wield. This is a location where adventurers travel to find fame and fortune. For whatever reason, even though it is surrounded by dangers abounding, Marriwald is safe from all of the strife of the wilds. Many have come to Marriwald, and many have not returned.",
                "notes": "Town Crest - A Silver Owl with a Purple Backdrop\r\nBecause of Marriwald’s design, it is built as a tiered city. This results in several layers of abandoned and covered building that were used in the old times. This area has been used for the running of the city's sewer system, and has in turn been the home of some undesirable creatures known as Sporelings. Thankfully clean air is deadly to the sporelings, but that doesn't mean they don't cause trouble with those who work in the sewers.\r\n",
                "notablePeople": "Adventurer’s Guild\r\nMembers: 330\r\nA guild of adventurers that journey into the wilderness for fame, glory, wealth, and knowledge. \r\nProvide starting items for adventurers willing to bear the crest of the guild and recruit new members into its ranks.\r\n",
                "buildings": "Inn - The Grey Flagon\r\nInn Keeper - Armand Fahr[Dwarf, Male]\r\nGuild Hall - Adventurer’s Home\r\nQuartermaster - Carloman Hertzfeld [Human, Male]\r\nWeaponsmith - The Hewn Ingot\r\nSmith - Laudus Bronstein [Dwarf, Male]\r\nArmorsmith - Rye Clan Smithing\r\nSmith - Nevelung Rye [Human, Male]\r\nAlchemist - The Runic Pestle\r\nAlchemist - Erard Maisel [Tiefling, Male]\r\nJeweler - The Cryptic Ring\r\nJeweler - Godalinda Werdin [Halfling, Female]\r\nLeatherworker - The Fox’s Bazaar\r\nLeatherworker - Richer Einhorn [Dragonborn, Male]\r\nCarpenter - Crate & Barrel\r\nCarpenter - Dietrich Heck [Half-Orc, Male]\r\nMason - Stoneman’s\r\nMason - Leudast Krier [Halfling, Male]\r\nStable - The Hoof & Saddle\r\nStable Master - Addela Helbig [Gnome, Female]\r\nTailor - The Wooden Needle\r\nTailor - Waldrada Schur [Human, Female]\r\nGlass Blower - Three Air Glasses\r\nGlass Blower - Lambert Dreyfuss [Half-Elf, Male]\r\nCouncil Hall - High Hill Manor\r\nCouncil Head - Medard Lorenz [Human, Male]\r\n"
            },
            {
                "name": "Tothar's Ancient Tower",
                "size": "Diminutive",
                "alignment": "Neutral Good",
                "hex": "13013",
                "realm": "Western Reich",
                "description": "An ancient tower built by an old wizard names Tothar. Now it is the home of Heidi von Strier, a skilled wizard who claims that Tothar was her great great great grandfather. The tower holds a special stone in the top that wards off magical creatures.",
                "notes": "othar’s Tower is a landmark known well to those who live in Marriwald. \r\nThe tower is famous for it’s resident wizard Heidi von Strier.\r\nThe tower is pivotal in the protection of Marriwald.\r\nBecause of the tower’s powerful protection crystal, creatures do not roam in the nearby woods.\r\n"
            },
            {
                "name": "The Fullglow Estate",
                "size": "Tiny",
                "alignment": "Neutral Neutral",
                "hex": "07014",
                "realm": "Western Reich",
                "description": "The Fullglow Estate is run by Petrus Ketzen. It is the leading provider of sweetmead to Marriwald and is very famous for it's superior mead. The estate is built right next to a pond, which reflects the setting sun's light, giving the estate its name. Inside the estate, there are dozens of huge barrels full of Petrus’ famous mead."
            },
            {
                "name": "Darmholder",
                "size": "Small",
                "alignment": "Neutral Evil",
                "hex": "25014",
                "realm": "Karmswald",
                "description": "Darmholder is a town in the eastern Bruin Marshes. The people are especially filthy and are passive aggressive to visitors. Darmholder has an especially strict government where most of the penalties for crimes lead to death. With these intrusive laws, many citizens try not to leave their homes and are rarely seen on the street. Bog blight is a constant problem for the people in Darmholder. Many of the inhabitants wear bandages that cover their face and hands to prevent the spreading of the disease.",
                "notes": "Town Crest - A black ‘X’ surrounded by 3 black circles.",
                "buildings": "Inn - The Grey Flagon\r\nInnkeeper - Mrs. Merrimore [Human, Female]\r\nBaker - Candle & Wheat\r\nBaker - George Scheck [Human, Male]\r\nJeweler - The Priestess, Jewelry\r\nJeweler - Hagny Hagel of Westerheim [Tiefling, Female]\r\nShoemaker - The Leather Sole\r\nCobbler - Leuthard Drossel [Dragonborn, Male]\r\nLord’s Manor - High Hill Manor\r\nLord - The Lord [???, Male]\r\n"
            },
            {
                "name": "Mohe Village",
                "size": "Small",
                "alignment": "Chaotic Evil",
                "hex": "29014",
                "realm": "Karmswald",
                "description": "Mohe is a skraeling village in the northern Villmar forests. Mohe is a village that many of the skraelings get their bad reputation for. The skraelings of Mohe are known to be ruthless cannibals that consume the civilized as part of their rituals to their old gods. The Mohe people put human parts and organs on display around their village in order to cause fear for their enemies. No one who has tried to make contact with the Mohe people have ever returned.",
                "notes": "The skraelings in this village worship an old and powerful demon that they call Muata(Muxxom).",
                "notablePeople": "Chief - Lapu [Skraeling, Male]"
            },
            {
                "name": "Mechmar Village",
                "size": "Tiny",
                "alignment": "Neutral Neutral",
                "hex": "15015",
                "realm": "Western Reich",
                "description": "There is a small settlement in the Western Reichs made from bizarre metals not known by even the finest blacksmiths. They posses items that are not understood by most. Items that are able to produce magical results without actually harnessing the flows of magical energy.",
                "buildings": "1 - A magically locked door provides initial entry. Inside there are hundreds of canisters. Inside the canisters there are tiny, rice-sized pills. When eaten the pills replace 1 ration for 24 hours.\r\n2 - A house of sorts locked by a normal latch lock. Inside there are two floors. The first contains normal living items, and the top floor has walls lined in odd and incomprehensible writing.\r\n3. A one room building that contains supplies such as rope, saddles, several rusty iron pieces of armor and a handful of small weapons such as dagger, caltrops, and spikes.\r\n"
            },
            {
                "name": "Third Flute Inn",
                "size": "Tiny",
                "alignment": "Neutral Neutral",
                "hex": "27015",
                "realm": "Villmar",
                "description": "The Third Flute is a small inn deep in the West Bruin forest of northern Villmar. The inn is a place where fishermen of the marshes commonly stayed on their way back home, before the Plague Mother sanctioned off the marshes. Today, the inn is a location of low use. The old innkeeper, Ray, still keeps the place in good condition and welcomes any visitors with open arms. The inn is also a popular trading post for those brave enough to explore the marshes. Many skraelings use the inn to sell their furs and treasures, and have made friends with the innkeeper.",
                "notes": "In the forests that surround the inn, there is told to be a terrible, stricken man known as Gipen.",
                "notablePeople": "Innkeeper - Ray Danielsen [Gnome, Male]\r\nTrader - Bilmore Hopfer [Human, Male]\r\nBard - Tihomir Silvers [Dwarf, Male]\r\n"
            },
            {
                "name": "Windrend",
                "size": "Meduim",
                "alignment": "Neutral Evil",
                "hex": "17017",
                "realm": "Swincrest",
                "description": "Winrend is the larger of the two civilized holdings in Swincrest. Winrend is a dark and inhospitable town that is known for its overbearing and dangerous government. The people of Windrend are untrusting of outsiders and typically lock their doors and close their windows to those they do not know. Although Windrend lacks hospitality, it is well known for it's delicious fish that it produces from Westerheim Lake.\r\n",
                "notes": "There is a 50gp toll for each person entering Winrend. Once you pay the toll you get a pass that lasts until you are accepted as a merchant, or submit residence papers.",
                "notablePeople": "Red Brotherhood\r\nMembers: 50\r\nA group of loyal secret police and elite guards that work for Lorvab, the Lord of Windrend. \r\nHave no law that applies to them. They each receive orders directly from Lorvab and carry them out fervently, using trickery, force, and violence.\r\nWhen in uniform, they are identified by red tabards with a symbol of chains down the center. Typically they are seen in chainmail or hide armor.\r\nOutlaws of the House\r\nMembers: 336\r\nRebellion group that seeks to assassinate the leader of Windrend.\r\nHave a meeting place in the inn, The Scoundrel’s Alehouse. The entrance to the meeting location is a trapdoor below shelving full of barrels in the cellar. \r\nTearians\r\nMembers: 5,122\r\nWorshipers of the Angel of Water. Feel a connection to the Angel through their laments and their tears.\r\nVery dry and impersonal religious group. Much of their teachings is typically about selfish ambitions. \r\n",
                "buildings": "Inn - The Scoundrel's Alehouse\r\nInn Keeper - Favald Steinberg[Human, Male]\r\nBlacksmith - The Cracked Helm\r\nOwner - Leston Garamin[Human, Male]\r\nBaker - Will’s Wheats\r\nOwner - Vether Will  [Human, Male]\r\nLord’s House - The Red Corridor\r\nLord - Lorvab [Human, Male]\r\nListener - Voza Wall [Human, Female]\r\nTemple - Temple of Tears\r\nHead Priest - Devald Bravill [Half-Elf, Female]\r\n"
            },
            {
                "name": "Barrowtern",
                "size": "Small",
                "alignment": "Neutral Neutral",
                "hex": "13018",
                "realm": "Alenfel Barrows",
                "description": "Barrowtern is a mysterious cluster of buildings in the Alenfel Barrows. The architecture is nothing like anything else seen in the Far Weald. Inside there are dozens of stone panels and plaques covered in mysterious runes and scribbles. When in the town, electric shocks happen often between adventurers, and  hair stands on end.",
                "notes": "Barrowtern has an immense amount of power emanating from it. While in Barrowtern, all INT based skills are rolled with advantage."
            },
            {
                "name": "Vulgar Shack",
                "size": "Diminutive",
                "alignment": "Neutral Neutral",
                "hex": "25018",
                "realm": "Villmar",
                "description": "Along the dark eastern shore of the Westernheim lake, there is a small round shack. Smoke puffs up from its center and light beams from its windows into the wee hours of the night. Many people stay away, because of the rumors that the owner of the shack will capture you and eat you alive. Most are unsure who the person that owns the shack truly is, but there is one thing for certain, they are practicing dark witchcraft and no one wants anything to do with it.",
                "notes": "A Half-Elf man lives in the shack named Rikar the Blind. He will be hesitant or hostile to let the party into his shack, but once they gain entry, he will perform an Oracular Vision for them.\r\nIf the party chooses to have a vision, he requires 1 ruby, sapphire, or emerald worth 250 or more and 1 feather.\r\n"
            },
            {
                "name": "Bellagin Village",
                "size": "Small",
                "alignment": "Neutral Evil",
                "hex": "03019",
                "realm": "Alenfel Barrows",
                "description": "The village is built around the statue of a demonic goddess known as Kzreka. It is ruled by a fire elemental that is harsh but fair. Bellagin Village is the first known established town in the Far Weald. It was used as a home base for the explorers who ventured into the Weald and who eventually founded Marriwald. Now, Bellagin is different. A spell was cast on the town long ago that causes it to burn eternally. There are a few districts that are still livable. The people that live their are welcoming despite that rather odd circumstances that they live in. The majority of Bellagin is inhabited by creatures that are born of flame, such as fire elementals. ",
                "notablePeople": "Cinderlings\r\nMembers: 332\r\nFollowers and worshipers of Lord Cindarius, the Fire Elemental Emperor of Bellagin.\r\nBelieve that Lord Cindarius is a strict but fair leader who has brought them out of the wilderness and who has protected them with the fiery inferno that plagues the town. \r\nAshlings\r\nMembers: 46\r\nMembers of society that do not appreciate the harshness of their Elemental Emperor and who wish to see him extinguished. \r\nAshlings claim that in order for the curse of Bellagin to be lifted, the Firelord must be slain.\r\n",
                "buildings": "Inn - Winter’s Rest Inn\r\nInn Keeper - Jon Rexius [Human, Male]\r\nBlacksmith - Liquid Gold Smithing Co\r\nOwner - Remno Welder [Half-Orc, Male]\r\nPalace\r\nEmporer - Lord Cindarius [Fire Elemental]\r\nGeneral - Incindius the Torch [Fire Elemental]\r\n"
            },
            {
                "name": "Port Thurderry",
                "size": "Meduim",
                "alignment": "Neutral Neutral",
                "hex": "09019",
                "realm": "Alenfel Barrows",
                "description": "Port Thurderry is a small town in the northern Alenfel Barrows. The town is known for it's elaborate zeppelin port which holds over 3 functional zeppelins. The people of the town are friendly and welcome in adventurers. The zeppelins are owned by the 3 elders of the town and are off limits for public use. Most people claim that they aren't even pilotable. Thurderry is primarily human, some dwarf and gnome. The town is defended by a wooden palisade and a non traditional spiked moat. It is governed by a consortium of wealthy merchants, known as the Black Parliament.",
                "notes": "Town Crest - A orange burning torch",
                "buildings": "Inn - The Maiden and Cask\r\nInn Keeper - Matthias Rexius [Dwarf, Male]\r\nButcher - Wes’ Butchering\r\nOwner - Wes Marno[Human, Male]\r\nParliment - The Black Halls\r\nElder - Harris Stromguard[Dwarf, Male]\r\nElder - Melethil Coldblossom[Elf, Female]\r\nElder - Arno Gerson[Human, Male]"
            },
            {
                "name": "Athbet",
                "size": "Huge",
                "alignment": "Lawful Evil",
                "hex": "29019",
                "realm": "Villmar",
                "description": "Athbet is the southernmost town in Villmar. It is suspected to be ground zero for Bog Blight, the disease that plagues Villmar and many of its inhabitants. The town is completely blocked off and to enter you must have permission from either the Prime Minister of Athbet, the Governor of Darmholder, or the Elder of Burgstein. Typically to acquire this permission, you must be afflicted with the blight. Athbet is a safe haven for those with the blight and although it offers no cure, it does give the afflicted the ability to live their lives without being shunned for their disease.",
                "notes": "Athbet’s sewers are older than the city itself and are known for their volatility and filth. The sewer keepers talk of a serpentine being that breathes fire and captures workers by stinging them with a poisonous barb. ",
                "notablePeople": "Plagueaters\r\nMembers: 1,043\r\nSelf appointed ‘militia’ of Athbet.\r\nWish to infect everyone who is not afflicted with Bog Blight in order to keep power over the city. Fill villagers heads with propaganda talking about the power that the Blight bestows upon the faithful to Athbet.  \r\nAll children born within Athbet must be taken to Pestelheim, to be inoculated with the disease. \r\nFree Life Clan\r\nMembers: 654\r\nGroup of Athbetians that seek to cure themselves and escape Athbet.\r\nHeavily opposed by the Plagueaters. \r\n",
                "buildings": "Inn - The Thirsty Beggar\r\nInn Keeper - Rainer Baumer [Elf, Male]\r\nChurch - Temple of the Great Void\r\nPriest - Suneld\r\nParliment - Pestelheim\r\nPrime Minister - Jan Flemming[Human, Male]\r\n"
            },
            {
                "name": "The Inn of Red Flame",
                "size": "Diminutive",
                "alignment": "Neutral Neutral",
                "hex": "13020",
                "realm": "Alenfel Barrows",
                "description": "The Inn of Red Flame is known throughout the Barrows as a unwelcoming and bizarre business. Most who have stayed find themselves nervous and restless throughout their stay. Travelers who have had to stay at the inn multiple times claim that the innkeeper is different every time they go. Not only does the inn have an odd reputation for it's treatment of customers and it's employees, but it also lights braziers at night that burn a bright red flame that is unnatural to normal fire. Even the candles inside the inn burn with this odd light.",
                "notes": "When players take a long rest at the inn, a random player wakes up with the hiccups and a heavy sense of paranoia for the next 1d4 days. Whenever the player touches silver, they must make a INT saving throw of 12, or hear whispers saying terrible things about them dealing 1d4 damage.",
                "notablePeople": "Innkeeper - Masha Shultz [Doppleganger, Female]\r\nGroundskeeper - Petyr Nystrom [Human, Male]\r\nAlchemist - Hubert Hamar the Blasphemer [Human, Male]\r\n"
            },
            {
                "name": "Middle Magpie Pub",
                "size": "Diminutive",
                "alignment": "Neutral Neutral",
                "hex": "19020",
                "realm": "Swincrest",
                "description": "The Middle Magpie is the most welcoming looking pub in all of Swincrest. It is run by a dwarf known as Telrok Ulrich, who claims to be the great, great, great, great, grandson of the famous adventurer and historian, Manfred Ulrich. Telrok runs his inn strictly and protects it from those that wish to do no good. The inn is one of the few places left in all of the Western Weald that still has a warmness to it.",
                "notablePeople": "Innkeeper - Telrok Ulrich [Dwarf, Male]\r\nGuard - Nultad Wernz.\r\n"
            },
            {
                "name": "Odd-Lot Shack",
                "size": "Diminutive",
                "alignment": "Neutral Neutral",
                "hex": "22020",
                "realm": "Swincrest",
                "description": "A shack that is teetering on the edge of a natural bridge. The outside of the shack is covered in small ornaments and wind chimes made from various metals. The house is white, but not because it has been painted. The wood used to construct the house gives it the color. On the second story of the house, a round observatory with a telescope can be seen. The owner of the shack is rarely home, but when he is, he shoos visitors away. Some say he makes the most delicious herbal tea. ",
                "notes": "When arriving at the shack, the group must roll 1d20.\r\n1-5: Someone is home.\r\n6-20: No one is home.\r\nIf no one is home \r\nThe players are not able to enter the house, It is magically protected. If the lock on the door is picked and the door is opened, the other side opens to a vast and unending sea. If the windows are looked into, there is nothing but blackness. If the window locks are picked, the other side reveals the same as the door - a vast and endless ocean.\r\nIf someone is home\r\nBustling movement can be heard inside. If the windows are looked into, it is obvious that there have been curtains placed to obscure vision. If the door is knocked on, there is a pause in activity, and their is a voice telling them to leave.\r\nOn a persuasion check of 16 or more, he will let them in if they can answer his riddle. “In plate and honor they draw their name, yet no king knows them. They worship the mighty arms of the forest in their blood stained cloaks.” [Answer: Knights of the Red Branch]\r\nIf the correct answer is not supplied, he tells them to come back tomorrow.\r\nIf the adventurers supply the correct answer, he opens the door and is revealed as an old halfling with a long white beard named Einson. He welcomes the adventurers in and supplies them each with 1 cup of his famous herbal tea.\r\nTea immediately heals all who drink it 5HP. The tea also grants the imbiber inspiration.\r\n"
            },
            {
                "name": "Winterselt",
                "size": "Small",
                "alignment": "Neutral Evil",
                "hex": "19022",
                "realm": "Swincrest",
                "description": "Winterselt is a small village in southwestern Swincrest. Most of the other civilized people of Swincrest steer away from Winterselt because they claim it is where the witches and cultists come from. The people of Winterselt of very superstitious and ritualistic. They wear specific clothes and build their houses in specific ways. Weekly the people of Winterselt will have what they call \"Opfer\". The people of the town will bring an armful of their crops and burn them beneath a stone statue of a large serpentine creature with vines and branches growing from its body. If questioned about the gods, Winterseltians deny their existence and claim that the most powerful beings are the Ascended. They will try to convert adventurers to the Brotherhood of the Vine while they stay in town. ",
                "notes": "Opfer - Weekly produce sacrifice to the Ascendants.",
                "notablePeople": "Brotherhood of the Vine\r\nMembers: 212\r\nLocal prevailing cult that worship Ascendants and practice dark and ancient magics.\r\n",
                "buildings": "Inn - The Broken Hammer\r\nInnkeeper - Caspar Altman [Elf, Male]\r\nButcher - Watcher’s Butchery\r\nOwner - Roland Watcher [Human, Male]\r\nTemple - The Vineyard\r\nPriest/Town Leader - Joce the Black [Human, Male]\r\n"
            },
            {
                "name": "Bellman's Farm",
                "size": "Diminutive",
                "alignment": "Neutral Evil",
                "hex": "29022",
                "realm": "Villmar",
                "description": "The Bellman Farm has been passed down in the Bellman family for many generations. In the old days, Athbet threw a harvest festival with a pumpkin growing competition. Every year the festival was held, the Bellman's won with pumpkins weighing well over 3000 lbs. Many said that they farm was built on a magical lay-line and others thought that there was a family tradition of witchcraft.",
                "notes": "While on the farm, a DC 12 reveals that there is a strong magical energy that passes through here.\r\nThe Bellmans refuse visitors inside their house, but allow them to stay in the barn. At night a DC 18 reveals strange noises coming from inside the house. Upon further investigation, there can be chanting heard.\r\nIf confronted, the family attacks the party.\r\n",
                "notablePeople": "The Bellmans are a friendly, but nervous family. They consist of 5 members.\r\nFather - Suneld Bellman [Human, Male]\r\nMother - Noora Bellman [Human, Female]\r\nElder Daughter - Esa Bellman [Human, Female]\r\nYounger Daughter - Inga Bellman [Human, Female]\r\nGrandmother - Zoya Bellman [Human, Female]\r\n"
            },
            {
                "name": "Mistdragon Village",
                "size": "Small",
                "alignment": "Neutral Neutral",
                "hex": "17023",
                "realm": "Swincrest",
                "description": "There is an abandoned village that is said to come to life at night. The lights in the inn can be seen in the darkness, and bustling sound can be heard inside. Those who approach at night quickly learn to not approach. When those who wish to investigate get too close, an ethereal being forms out of the consistent shroud of mist that floats around the city. The formation is easily recognizable as a dragon. The dragon protects the tiny village relentlessly, and fights off invaders with the threat of death.",
                "buildings": "Abandoned Alchemy Shop - Inside there can be found useless shattered retorts and alembics. Some rotted herbs still sit on one of the shelves.\r\nAbandoned Blacksmith’s Shop - Old rusted swords are resting in the ashes of a once-burning fire.\r\nAbandoned Inn - Inside there are ruined, rotting bar stools and tables. In the back there is a small bed that lies in shambles on the floor. DC 16 reveals a small loose brick in the ground. Underneath the brick is a bone ring is the shape of an elongated rat biting its own tail. \r\nThe wearer gains a bite attack as a primary natural attack. This attack deals 1d6 points of piercing damage. After 1d4 days of wearing the ring, the wearer’s appearance becomes more rat like, even after removing the ring.\r\n"
            }
        ],
        "Ascendant": [
            {
                "name": "Vine Beist",
                "alignment": "Neutral Evil",
                "size": "Gargantuan",
                "creaturetype": "Plant",
                "hex": "09004",
                "realm": "Ernst Chase",
                "description": "The Vine Beast is an Archfey that burrows throughout the earth around the Emerald Caverns. The Beist is known for its ability to shred enormous trees into mulch in mere seconds. There are no skraeling villages to the north of the Far Weald because of the Beist. Many say that the creature grows eternally and will one day devour all of Estaria."
            },
            {
                "name": "Serpent of Terror",
                "alignment": "Neutral Evil",
                "size": "Huge",
                "creaturetype": "Beast",
                "hex": "14004",
                "realm": "Ernst Chase",
                "description": "Despite the safe and calming aura that Peckwin's Sancuary exudes, it is the home of a large ancient creature that has been in fables that your great grandparents told you. The Serpent of Terror is an enormous snake that has absorbed magical energy over thousands of years. Many say that he started life as a harmless garden snake and grew after an incident with a wizard. Others think that he was birthed from a Deity and was sent to guard Gloomwood."
            },
            {
                "name": "Skin Walker",
                "alignment": "Chaotic Evil",
                "size": "Large",
                "creaturetype": "Aberration",
                "hex": "02005",
                "realm": "Ernst Chase",
                "description": "The Skin Walker is a Fiend that skulks around the Faykeep Forest in the darkness of the night. It is said that the Walker consumes its victims through a gruesome digestion process in which it removes the skin and leaves the fleshy bleeding body to writhe in tortuous pain."
            },
            {
                "name": "Great Drifter",
                "alignment": "Neutral Neutral",
                "size": "Huge",
                "creaturetype": "Monstrosity",
                "hex": "20007",
                "realm": "Oakburn Hills",
                "description": "This ancient creature has no living relatives. He is the last one of his kind. Once hundreds of drifters floated peacefully across the sky. Now he remains, drifting throughout the Oakburn Hills. He hides in clouds to prevent being seen by the skraelings. The Great Drifter is known for his peaceful and helpful nature, granting people with trips on his back and taking people in dire need to safety."
            },
            {
                "name": "Earth Father",
                "alignment": "Neutral Neutral",
                "size": "Huge",
                "creaturetype": "Beast",
                "hex": "25007",
                "realm": "Karmswald",
                "description": "The Earth Father sits in the jagged shores in the valley of the Southaven River. He consumes enormous boulders and is said to cause earthquakes that can be felt from miles away."
            },
            {
                "name": "Great Bloodling",
                "alignment": "Chaotic Evil",
                "size": "Huge",
                "creaturetype": "Humanoid",
                "hex": "14009",
                "realm": "Oakburn Hills",
                "description": "Every blood moon, she makes her way out of the shard to feed on the blood of the living. She has been blinded and has acute hearing and smell. She constantly bleeds from her wound and smells of fresh warm blood. The Great Bloodling was an ancient explorer of The Far Weald, one of that same that built the Star Map. She was left on the planet by her best friend. She was literally stabbed in the back and left to bleed while inside the Shards of Ascendance. As she lay in her own pool of blood, she was blasted with the shards engergy keeping her alive, but in the same state as when she was dying. She no longer remembers her ancient past, but only thinks about when she will next feed."
            },
            {
                "name": "Chaos Librarian",
                "alignment": "Chaotic Neutral",
                "size": "Huge",
                "creaturetype": "Aberration",
                "hex": "16011",
                "realm": "Oakburn Hills",
                "description": "The Chaos Librarian is a being that's soul has been bound to the Temple of Books. He takes care of the temple with unimaginable focus. He defends it with an even more impressive focus. Occasionally he can be seen around the Oakburn Hills searching for more books to add to his collection. The Librarian was once a man that worked for a wizard. He didn't care much for the spell learning, but found reading the books much more interesting. He tried to make sure to be reading every waking hour of his life. On his deathbed, he asked his patron, Knowledge to grant him with an eternity with books. His wish was granted. After hundreds of years reading the powerful texts in the Temple of Books, he has grown to 12 feet tall and become pure magical energy."
            },
            {
                "name": "Nashoba",
                "alignment": "Neutral Evil",
                "size": "Gargantuan",
                "creaturetype": "Beast",
                "hex": "26010",
                "realm": "Karmswald",
                "description": "The River's Hunger, known as Nashoba by the skraelings, is an enormous ancient fish that lurks in the deepest parts of the Southaven River. Skraelings claim he can swallow river vessels whole. He is able to send psychic waves to lure mass amounts of animals and humans and skraelings into the water to feast upon."
            },
            {
                "name": "Tears of the Night Sky",
                "alignment": "Neutral Good",
                "size": "Gargantuan",
                "creaturetype": "Celestial",
                "hex": "13011",
                "realm": "Western Reich",
                "description": "The Tears of the Night Sky is a Fey being of the Western Reichs. It appears in the sky of the Wolfcastle woods and weeps silently. All those who approach it feel an overwhelming sense of safety. The Fey is kind and offers help to those who seek its guidance."
            },
            {
                "name": "Flesh Feaster",
                "alignment": "Chaotic Evil",
                "size": "Large",
                "creaturetype": "Monstrosity",
                "hex": "27011",
                "realm": "Karmswald",
                "description": "The Flesh Feaster is a fiend that resides in Waterwash Cave. The Feaster was once an adventurer driven mad with power. He looked for a way to use corpses to enhance his own abilities and did something horribly wrong, mutilating himself in the process. As a result of his mistake, he created a magic well and was able to feed on it to remain alive. Feeding on the magic allowed him to grow stronger, but transformed him even further in the process. Now, the magic no longer sustains him, and living flesh is all that can keep him alive."
            },
            {
                "name": "The Hive",
                "alignment": "Chaotic Neutral",
                "size": "Huge",
                "creaturetype": "Fey",
                "hex": "04012",
                "realm": "Western Reich",
                "description": "The Hive is a mass of tentacles the resides in the storm clouds that float across the plains of the Western Reichs. The Hive is rarely ever mentioned by most folk tales, but recently there have been several sightings of the Fey creature. The Hive is said to have been the being that opened the door that allowed the many Archfey into Estaria. Having no visible mouth, The Hive speaks directly into the minds of those he wishes to speak. Many claim he feeds on small villages by consuming them whole, while others think he doesn't even eat at all."
            },
            {
                "name": "Plague Maiden",
                "alignment": "Chaotic Evil",
                "size": "Meduim",
                "creaturetype": "Fey",
                "hex": "19013",
                "realm": "Villmar",
                "description": "The Plague Maiden stalks through the marshes in Villmar. She uses the marshes to mask her hideousness. Those that show fear when in her presence, are splashed with a corrosive ooze that explodes from one of her pus globules. The maiden eats the sickly mudfish that leap throughout the marsh. She is blamed heavily by the inhabitants of Villmar for the rampant disease that permeates the marshes. ",
                "notes": "The Plague Maiden wants to keep people in the marshes, because she saps their energy as long as they live in the region she is bound to."
            },
            {
                "name": "Fourth Blight",
                "alignment": "Chaotic Evil",
                "size": "Gargantuan",
                "creaturetype": "Aberration",
                "hex": "17014",
                "realm": "Western Reich",
                "description": "The Fourth Blight is a Fiendish creature of the Western Reichs and Bruin Marshes. The Blight Floats above the ground in the wilds and exudes a putrid cloud of acid and poisons. The blight was once a man that heavily dabbled into necromancy. He was widely known and very powerful, quickly reaching lichdom. When he made the transformation, he tried to bind a part of his soul to a sacred stone of The Angel of Silence. As punishment, Silence granted The Blight the power he wanted but cursed him with everlasting pain and no way to communicate, silent for all eternity.",
                "notes": "The Cult of the Fourth Blight has begun to gain traction as of recently, and is causing more and more problems with the citizens of The Far Weald."
            },
            {
                "name": "Mother in the Water",
                "alignment": "Chaotic Evil",
                "size": "Huge",
                "creaturetype": "Aberration",
                "hex": "24016",
                "realm": "Villmar",
                "description": "The Mother in the water, lurks underneath the waters of the Southaven River that runs through the Bruin Mashes. She harvests the unfortunate fishermen who drift too far from their village. The Mother is known to be very benevolent towards pregnant women, and is said to grant them with a blessing for their children. On the other hand, The Mother is known to be especially ruthless to men. She is said to remove their skeleton with her claws leaving behind a limp fleshy pod that floats further down the river."
            },
            {
                "name": "Jaw of the Depths",
                "alignment": "Neutral Evil",
                "size": "Colossal",
                "creaturetype": "Beast",
                "hex": "19017",
                "realm": "Swincrest",
                "description": "The Jaw of the Depths is a terror of the Westerheim Lake. He has been reported swallowing entire passenger ships whole leaving no survivors. It is assumed that The Jaw must be one of the oldest creatures in all of Estaria because of his enormous size. That all being said, The Jaw hasn't been seen in nearly 100 years and many believe that he may have finally died of old age. Even with the lack of sightings, The Cult of the Depths still continues worshipping and sacrificing to The Jaw."
            },
            {
                "name": "Hunger of the Marshes",
                "alignment": "Chaotic Evil",
                "size": "Huge",
                "creaturetype": "Fiend",
                "hex": "27018",
                "realm": "Villmar",
                "description": "The Hunger of the Marshes is a monstrosity that slithers across the path from the Bruin Marshes to Athbet. Many don't ever make their trek to Athbet because of his hunger. The Hunger eats every form of life he can find, leaving a wake of emptiness and lifelessness. The Hunger is slow, but is able to sneak up on unsuspecting travelers with ease."
            },
            {
                "name": "Wisp of the Lake",
                "alignment": "Neutral Good",
                "size": "Gargantuan",
                "creaturetype": "Beast",
                "hex": "25020",
                "realm": "Swincrest",
                "description": "The Wisp of the Lake is the second known ancient being that resides in Westerheim Lake. Also known as Savior of the Crest, The Wisp is reported to having saved drowning sailors and even transporting people from one end of the lake to the other. The Wisp has only ever been spotted at dawn or twilight."
            },
            {
                "name": "Great One of the Earth",
                "alignment": "Neutral Good",
                "size": "Huge",
                "creaturetype": "Elemental",
                "hex": "01021",
                "realm": "Alenfel Barrows",
                "description": "The Great One of the Earth is a elemental being that resides in the Alenfel Barrows. It is believed to be brought to life through magic and continues to search for wells of magic throughout the hills of the Barrows."
            },
            {
                "name": "Arachnid Queen",
                "alignment": "Chaotic Evil",
                "size": "Huge",
                "creaturetype": "Fey",
                "hex": "10022",
                "realm": "Alenfel Barrows",
                "description": "The Arachnid Queen is an ancient being that roams the plains of the Alenfel Barrows. She is said to be the mother of Donama and the origin of the arachnids in Estaria. She is typically is peaceful and can be seen skittering across the plains doing who-knows-what. Many claim she is very welcoming and enjoys visitors, while others say that she draws people in with her charm and then consumes them whole.\r\n"
            },
            {
                "name": "Tree of Blood",
                "alignment": "Lawful Evil",
                "size": "Large",
                "creaturetype": "Plant",
                "hex": "15024",
                "realm": "Alenfel Barrows",
                "description": "The Tree of Blood is said to be the origin of fleshly life. The tree is a hybrid. Instead of bark, the tree has a thick fleshy hide. The tree has a gaping mouth that pours out blood. Instead of fruit, the tree grows and produces skulls and bones of various creatures. If watched closely, one can see the tree breathing slowly. Many groups of cultists worship the tree as their mother and sacrifice to it."
            },
            {
                "name": "Bone Wielder",
                "alignment": "Chaotic Evil",
                "size": "Colossal",
                "creaturetype": "Undead",
                "hex": "19024",
                "realm": "Swincrest",
                "description": "The Bone Wielder is an ancient being that lies in southern Swincrest. He sits there silently and unmoving. Most that pass nearby are uneasy when around the Bone Wielder, but no reports have been given about the Wielder ever moving. The Wielder is petrified and is waiting to find a vassal to do his bidding in order to unpetrify him."
            }
        ],
        "NPC": [
            {
                "name": "Mikuna",
                "race": "Skraeling",
                "gender": "Female",
                "alignment": "Neutral Neutral",
                "hex": "19002",
                "realm": "Ernst Chase",
                "faction": "Waterfall Skraeling",
                "description": "Mikuna is a Shaman that lives in the Waterfall Skraeling Village. She specializes in healing and exorcism of \"evil spirits\". Only one of her parents is alive. She is the 3rd child out of 5. Her family emigrated here recently from another skraeling camp across the Weald. She is the first generation born in this area. Her family is the subject of dark tales due to her role as the Shaman. She has a pet crow that sits quietly on her shoulder and seems to alert her of danger by squawking in a bizarre language. Mikuna has learned that her once beloved sister, Tiva has left the village and dedicated herself to the service of the horrors of the wilds. She knows that though she wants to do good, even if her sister disagrees. But, she still has a strong bond with her family and continues to support them."
            },
            {
                "name": "Doctor Anna Rinder",
                "race": "Elf",
                "gender": "Female",
                "alignment": "Neutral Good",
                "hex": "17003",
                "realm": "Ernst Chase",
                "description": "One of the few non-magical doctors that lives in The Far Weald. Jaded by the atrocities in the Far Weald, Anna isn't fazed by injuries, curses, or diseases. Frequently travels with adventurers in order to discover and document various disease and curses. Anna has an uncle that lives in Marriwald named Stefan Rinder who makes homemade soaps and remedies of sorts. She makes trips to Marriwald occasionally to visit with him and make sure he is doing well, often times leaving a pouch of coins to help him."
            },
            {
                "name": "Bogmex",
                "race": "Elf",
                "gender": "Male",
                "alignment": "Chaotic Evil",
                "hex": "30003",
                "realm": "Karmswald",
                "faction": "Earth Maggots",
                "description": "Leader of the Earth Maggots, a group of wild cannibals who roam the wilds in search of unsuspecting travelers. They are rarely seen. Very few know of their existence, but of those who do, there is a burning hatred. Bogmex started his group years ago and has begun to grow it in power. He seeks to overthrow the ascendants and take control of The Far Weald. Bogmex and Rilethil were partners in their studies at the college many years ago. They both shared interests in necromancy, but varied in belief too much to make a lasting partnership."
            },
            {
                "name": "Witch of the Wastes",
                "race": "Human",
                "gender": "Female",
                "alignment": "Neutral Evil",
                "hex": "06004",
                "realm": "Ernst Chase",
                "description": "The Witch of the Wastes, known as Nukpana by the skraelings is known to help adventurers through their journeys in the Faykeep Forest. Little is known about her, but she can perform powerful warding magic and is known to be an excellent healer by the skraelings."
            },
            {
                "name": "Skura the Envenomed",
                "race": "Human",
                "gender": "Female",
                "alignment": "Neutral Evil",
                "hex": "15004",
                "realm": "Ernst Chase",
                "faction": "Serpent of Terror",
                "description": "Some speak of talking with a mysterious woman in Gloomwood. They say she speaks like a snake and wreaks of acrid poison. She is said to warn the adventurers to steer clear of northern Gloomwood. She is sometimes described as having scaly skin. Others say that she has a 3 headed serpent that follows her and devours all who do not heed her advice. Skura has pledged her life to the service of her patron, The Serpent of Terror. She instills fear in those she sees and knows many forms of illusion magic. She wields two poisonous daggers that have the appearance of snake fangs. She is not initially aggressive, but will quickly attack if she is ignored, or irritated."
            },
            {
                "name": "Maik the Red",
                "race": "Human",
                "gender": "Male",
                "alignment": "Lawful Good",
                "hex": "05005",
                "realm": "Ernst Chase",
                "description": "A paladin dressed in Ivory armor with a bright red tabard. His armour is adorned with imagery of a sun. He is in search of a demon who he claims &lsquo;ended his family line&rsquo;."
            },
            {
                "name": "Hans Helgrub",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Evil",
                "hex": "16006",
                "realm": "Ernst Chase",
                "description": "There is a man that lives in the graveyard named Hans Helgrub. He is an old man that performs necromancy on the bones that were left by the dragons and lives in a small cave to the north of the Graveyard. Inside the lair, he has a massive system of pulleys and levers that control various buckets filled with bone. There are a dozen skeletal constructs running the pulleys and levers while moving buckets of bones across the upper outcrops in the cavern. Hans is friendly, and will pay travelers 2 silver coins for each large dragon bone they bring to him. He is very picky though and will only accept the finest bones. It takes 1 day to search for bones, and he will only take 1d10 of the bones brought to him."
            },
            {
                "name": "Ahyoka the Hedge Witch",
                "race": "Skraeling",
                "gender": "Female",
                "alignment": "Chaotic Neutral",
                "hex": "20006",
                "realm": "Oakburn Hills",
                "description": "Ahyoka is a skraeling witch that lives in Drachward. She runs around the Hills collecting herbs and finding magical artifacts. Many Kesward villagers come to her for medical help and she is able to help them as long as they do something for her in return. She is known to summon up storms. Many claim that she is the one who created the orb in the center of the Stromstrider Plains."
            },
            {
                "name": "Pierre Lotz",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Neutral",
                "hex": "04008",
                "realm": "Oakburn Hills",
                "description": "Wears a tiny kettle on the top of his hat to collect rainwater - a drink he finds superior to all else. Spends hours at a time staring longingly up at the sky before hastily scrawling out inaccurate weather predictions. Has been seen prancing in lightning storms with large metal poles."
            },
            {
                "name": "Professor Brel'Tak",
                "race": "Half-Orc",
                "gender": "Male",
                "alignment": "Neutral Evil",
                "hex": "10008",
                "realm": "Western Reich",
                "faction": "Chaos Librarian",
                "description": "Half-Orc sorcerer who was well known for is assistance in the Wolfsong clan. He later moved on to help Fearn collect their ancient historical tablets. Now he is a devout worshiper of the Chaos Librarian. During his travels he was assaulted by a band of violent adventurers and only lived because of help from a powerful fire elemental, that now shares his body with him."
            },
            {
                "name": "Burkhardt Olenschlauger",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Neutral",
                "hex": "21008",
                "realm": "Karmswald",
                "description": "Burkhardt's father figure and mentor, Meek Frosch left for a long journey when Burkhardt was 16. When he came back, on Burkhardt's 20th birthday, he had changed profoundly. Not only had his mentor become a cleric, also seemed to have found a deep inner peace. Before, Meek thought Burkhardt how to channel his rage to fight. After he returned, he only spoke of pacifism and peacefulness. Burkhardt tried to change, but couldn't find it within himself to release his rage. Because of this, Meek told Burkhardt that he must leave him and they can never see each other again. In a fit of rage, Burkhardt slew his mentor and took what little food and money and ran, knowing that Meek's screams easily alerted the guard. Ever since that night, Burkhardt has been roaming the wilds living as a nomad."
            },
            {
                "name": "Kor'Nar",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Good",
                "hex": "02009",
                "realm": "Western Reich",
                "description": "Nearby the plains there is an old man called Kor’nar. He is a druid that lives in a small thicket of woods and visits Peace’s Rest frequently. He often talks about his adventures when he was young exploring the woods to the north. He offers to sell the adventurers potions at 25% off their normal prices, but only has a total of 4 per session because his stock is small. He has two pets: a raven named Ruin and a wolf named Kreshka. If in danger, Kor’nar will shapeshift into a pigeon and fly away. He hates violence."
            },
            {
                "name": "Wolf Korsch",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Good",
                "hex": "16009",
                "realm": "Oakburn Hills",
                "description": "Wolf and Luca grew up in Kesward. As they grew older they began to realize the fear that people had for the wilds. Being from a family with just a single mother to take care of them, it was up to them to find food when they became old enough. Hunting became their favorite method which gave them exposure to the wilds. They began to question the fear of society of the wilds and actually ended up preferring it. After their mother died they left Kesward with the intent of living in the wilderness and continuing to hunt. Now they are known for more than being mere hunters, the brothers track and hunt down the largest beings in the plains. Giants."
            },
            {
                "name": "Luca Korsch",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Good",
                "hex": "16009",
                "realm": "Oakburn Hills",
                "description": "Wolf and Luca grew up in Kesward. As they grew older they began to realize the fear that people had for the wilds. Being from a family with just a single mother to take care of them, it was up to them to find food when they became old enough. Hunting became their favorite method which gave them exposure to the wilds. They began to question the fear of society of the wilds and actually ended up preferring it. After their mother died they left Kesward with the intent of living in the wilderness and continuing to hunt. Now they are known for more than being mere hunters, the brothers track and hunt down the largest beings in the plains. Giants."
            },
            {
                "name": "Nuzem Brickfury",
                "race": "Dwarf",
                "gender": "Male",
                "alignment": "Neutral Neutral",
                "hex": "29009",
                "realm": "Karmswald",
                "description": "Nuzem was born as a skraeling. He was raised in the skraeling culture and worshiped their so called \"gods\". He followed the skraeling commandments and revered nature. When Nuzem was 33 moons old, a plague struck his village, and killed all but him and his best friend, Tapco, a badger. After he recovered he blamed the skraeling gods and set course for Mariwald. On arrival he discovered that society wasn't evil like he had been taught. He quickly fit in and earned his name, Brickfury because of his strength. When hunting one night, he spotted a large doe and sent Tapco after it. In a twisted turn of events, Tapco fell in a pit and snapped his neck. Nuzem became enraged and swore to find and destroy the god that his tribe worshipped. He wears Tapco's hide as a reminder of his best friend. He claims that Tapco sometimes talks to him through the hide."
            },
            {
                "name": "Noga",
                "race": "Human",
                "gender": "Female",
                "alignment": "Chaotic Evil",
                "hex": "22010",
                "realm": "Oakburn Hills",
                "description": "An ancient witch who is known for her vast and powerful knowledge. She is very mysterious and little know more about her than her name. Though witchcraft is highly frowned upon, many of the locals in the area frequent her shack for remedies and potions for illness and sickness. She is friendly, but typically requires help before she will assist you in your needs.\n"
            },
            {
                "name": "Chef Russell the Brute",
                "race": "Half-Orc",
                "gender": "Male",
                "alignment": "Neutral Neutral",
                "hex": "01010",
                "realm": "Western Reich",
                "description": "Contrary to his large, grey half-orc physique, Russell's ambitions lie solidly in the kitchen. Russell is better than most at what he tries, but does not care to do anything but cook. Known for his especially delicious Owlbear-Pie."
            },
            {
                "name": "Ankia Bodmer",
                "race": "Human",
                "gender": "Female",
                "alignment": "Chaotic Evil",
                "hex": "26011",
                "realm": "Karmswald",
                "faction": "Flesh Feaster",
                "description": "Anika patrols up and down the Southaven River in search of those unfortunate enough to become her next target. She has pledged herself to her patron, The Flesh Feaster, and serves him by providing him with living victims for him to feed upon. In return for her help she was granted with the gift of necromancy, vampirism and with vampirism, immortality. She listens to no one and is completely ruthless in her combat tactics."
            },
            {
                "name": "Leon Korsch",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Good",
                "hex": "10013",
                "realm": "Western Reich",
                "description": "Once a well known and wanted marauder, Leon is now a resident in a small town. He is still quite capable of widespread destruction, but he has a family and wants to stay out of trouble."
            },
            {
                "name": "Akin the Crimson",
                "race": "Human",
                "gender": "Male",
                "alignment": "Lawful Neutral",
                "hex": "10013",
                "realm": "Western Reich",
                "faction": "Marriwald Guard",
                "description": "Akin the Crimson is a town commander in Marriwald, and the reason Rilethil was caught and thrown into the Wickbar Cells. He personally escorted Rilethil there and told Rilethil that he will never again see the light of day. Because of this, Rilethil has a vendetta against Akin and is always trying to find a way to slay him."
            },
            {
                "name": "Leopold Lotz",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Good",
                "hex": "23013",
                "realm": "Villmar",
                "description": "Leopold is a villager in Darmholder. He is one of the few brave enough to venture out into the wild. He collects special herbs and reagents to make his Darmholder famous Swamp Wine. He may appear to just be an herbalist, but Leopold has mastered the arts of nature magic. Some say he can even shift form into a wolf that resembles the wolf skin he wears on his head."
            },
            {
                "name": "Rudi the Powerful",
                "race": "Teifling",
                "gender": "Male",
                "alignment": "Neutral Good",
                "hex": "25014",
                "realm": "Villmar",
                "description": "Adopted, Tiefling son of Sir Grimm and Lady Grimm. Is known for his overly powerful magic even though he is very young. He got his powers from a powerful, sinister being in the forest behind his home without his parents knowledge. His powers cause him to remain a child for eternity. He doesn’t seem to mind and fares well on his own."
            },
            {
                "name": "Henry the Reckless",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Neutral",
                "hex": "03014",
                "realm": "Western Reich",
                "description": "Known millionaire, Henry cares little for his inheritance and prefers running around the wilderness and exploring ruins. He prefers not to mention his wealth and are annoyed by people who want to talk about it."
            },
            {
                "name": "Petrus Ketzen",
                "race": "Human",
                "gender": "Male",
                "alignment": "Lawful Good",
                "hex": "07014",
                "realm": "Western Reich",
                "description": "A retired paladin who began making mead in his free time. Soon he became famous for it and built Fullglow Estate to make his mead full time. He tells stories of outlandish adventures he went on as a young man and has a pet dog he calls Susan."
            },
            {
                "name": "Heidi von Strier",
                "race": "Human",
                "gender": "Female",
                "alignment": "Neutral Good",
                "hex": "13013",
                "realm": "Western Reich",
                "faction": "Marriwald Guard",
                "description": "Heidi is a wizard who lives in Tothar's Ancient Tower. She claims to be his great great great granddaughter, but does have the magic ability to make it plausible. She is contracted by Marriwald to provide a magic barrier perimeter around the city, but most of the time the device she uses doesn't seem to work. She is happy to help adventurers and is glad to seem them and if need be can communicate with them long distance with her owl familiar named Charles."
            },
            {
                "name": "Lady Grimm",
                "race": "Human",
                "gender": "Female",
                "alignment": "Neutral Evil",
                "hex": "25014",
                "realm": "Villmar",
                "description": "Lady of the Grimm Manor. Married into the family when she was 16 to Sir Grimm who was many years older than her. Wants nothing more in life than to take care and spoil her child"
            },
            {
                "name": "Sir Grimm",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Evil",
                "hex": "26014",
                "realm": "Villmar",
                "description": "Lord of the Grimm Manor. Afflicted with a bizarre crippling disease that has plagued his family for generations that causes each progressive generation to become more and more sickly. Though he grows weaker physically, his mind has grown with each generation in his family, allowing him to possess powerful necromancy magic. He is married to Lady Grimm."
            },
            {
                "name": "Hachi Moonshadow",
                "race": "Skraeling",
                "gender": "Female",
                "alignment": "Chaotic Neutral",
                "hex": "19015",
                "realm": "Swincrest",
                "description": "Hachi is a druid that lives alone on the western side of Westerheim Lake. She is a skraeling, but highly respected by the people of Swincrest. Hachi travels around the plains and shores near westerheim helping creatures in need with her pet direwolf, Hento. Hachi may seem nice and helpful, but her ultimate goal is to bring down the established cities in Swincrest. She may send adventurers out on quests that seem helpful, but are actually quite harmful to the civilized people of Swincrest."
            },
            {
                "name": "Sybelle Shulhoff",
                "race": "Skraeling",
                "gender": "Female",
                "alignment": "Neutral Neutral",
                "hex": "29017",
                "realm": "Villmar",
                "description": "Sybelle is a ranger that roams the northern forests of Villmar. She is known for her keen sense of smell and ability to track animals with unbelievable accuracy. Sybelle typically steers clear of adventuring parties and tends to stay to herself, although if confronted, she would offer help. She is intentionally quiet about her past and speaks with a bizarre and interesting accent. Sybelle was born as a Mohe tribe member, but when she was a teenager, her parents took her and her brother Hessow to Darmholder. They gave them new names and told them not to speak. Slowly, her family learned the language and became adapted to the civilized life. Ever since then, Sybelle has seen herself as one of the civilized. To this day she does not know why her parents left Mohe. She keeps her past to herself for fear of being shunned or even put to death for being a Mohe tribes member. "
            },
            {
                "name": "Carl the Butcher",
                "race": "Human",
                "gender": "Male",
                "alignment": "Neutral Neutral",
                "hex": "01018",
                "realm": "Alenfel Barrows",
                "description": "Traveling exotic meat seller. Carl frequently adventures out in the wilds in search of various beasts he can slay to harvest their meat. His most popular meats are Owlbear, Blinkdog, and Harpy."
            },
            {
                "name": "Rikar the Blind",
                "race": "Half-Elf",
                "gender": "Male",
                "alignment": "Neutral Neutral",
                "hex": "25018",
                "realm": "Villmar",
                "description": "A Half-Elf man lives in the shack named Rikar the Blind. He will be hesitant or hostile to let the party into his shack, but once they gain entry, he will perform an Oracular Vision for them.\r\nIf the party chooses to have a vision, he requires 1 ruby, sapphire, or emerald worth 250 or more and 1 feather.\r\n"
            },
            {
                "name": "Arno Gerson",
                "race": "Half-Elf",
                "gender": "Male",
                "alignment": "Neutral Neutral",
                "hex": "09019",
                "realm": "Alenfel Barrows",
                "faction": "Port Thurderry Eldership",
                "description": "Arno GersonArno is the head elder in Thurderry. He is known as a proficient warrior and a great leader. Through the years he has been able to lead militias of just a few men to successfully defend Thurderry from all that would seek to harm the town. Arno is open to adventurers and loves exchanging stories with them. He hasn't adventured himself and is curious what lies beyond Thurderry."
            },
            {
                "name": "Monk of the Eight Fists",
                "race": "Elf",
                "gender": "Male",
                "alignment": "Lawful Neutral",
                "hex": "17020",
                "realm": "Alenfel Barrows",
                "faction": "Wickbar Cells Guard",
                "description": "The Monk of the 8 Fists, also known as Nicholas of Iron is the appointed watcher over the Wickbar Cells. Under his 65 year watch, there has never once been a prison break or riot. Nicholas is an advanced fighter in hand to hand combat and is sought by monks from all over for training. Nicholas wears a mask because of his maimed face that was caused by an owlbear attack when he was only 10 years old. Since the attack he swore to never be weak enough to not be able to defend himself."
            },
            {
                "name": "Freya of the Claw",
                "race": "Human",
                "gender": "Female",
                "alignment": "Chaotic Neutral",
                "hex": "04022",
                "realm": "Alenfel Barrows",
                "description": "A young woman who is known for her wild and destructive transformation into a bear. She made a deal with a witch that ended badly, causing her to be exiled from her home town. Since her exile, she has become and excellent apothecary. Many still stay clear from her home due to her unpredictable and violent transformations."
            },
            {
                "name": "Gunter the Man",
                "race": "Teifling",
                "gender": "Male",
                "alignment": "Chaotic Neutral",
                "hex": "14022",
                "realm": "Alenfel Barrows",
                "description": "He is hated for his appearance, yet he retains a paragon of honor, virtue and piety. Through great pain he has removed his horns, over years cut away his tail. A man wounded in mind, some pity him above all others. Leads a cult of non-humans called ‘Brothers of Supremacy’ that mutilate themselves in order to ‘become human’.\r\n"
            },
            {
                "name": "Palmyre",
                "race": "Elf",
                "gender": "Female",
                "alignment": "Lawful Good",
                "hex": "01023",
                "realm": "Alenfel Barrows",
                "description": "A martial elven \"Repo-Woman\" who follows her contracts very strongly, and cannot be easily convinced to do otherwise."
            },
            {
                "name": "Teetonka",
                "race": "Skraeling",
                "gender": "Female",
                "alignment": "Chaotic Evil",
                "hex": "22024",
                "realm": "Swincrest",
                "description": "Teetonka is a barbarian of southern Swincrest. She is known for ambushing adventurers and leaving them all on the ground in a pool of their own blood. She is fueled completely off rage and instinct and is not known to speak any discernable language. Many people suspect that she is a member of the Mohe tribe, but was too violent for even them, so she was exiled"
            },
            {
                "name": "Margot of Therin",
                "race": "Elf",
                "gender": "Female",
                "alignment": "Neutral Good",
                "hex": "11025",
                "realm": "Alenfel Barrows",
                "description": "A greenhorn elven historian that has just recently arrived to The Far Weald. She seeks to capture as much information on the ruins, treasures, and people as she can find and frequently tags along with adventurers groups in order to travel with more safety."
            },
            {
                "name": "Reilthil",
                "race": "Elf",
                "gender": "Male",
                "alignment": "Chaotic Evil",
                "hex": "27024",
                "realm": "Swincrest",
                "description": "The Necromancer known to start the most infamous school of necromancy. Rilethil began necromancy in order to help his society by reducing the amount of manual labor, leaving time for living humans to work on other tasks. Unfortunately, he was still young and needed more practice. His binding crystal method ended up failing and his undead minions began to attack innocent people. After dealing with the abominations for the next 3 days, Rilethil was arrested and sentenced to 25 lashes, and banishment."
            }
        ],
        "Monster": [
            {
                "name": "Furian the White",
                "alignment": "Chaotic Good",
                "creaturetype": "Giant",
                "size": "Huge",
                "hex": "00000",
                "realm": "Ernst Chase",
                "description": "On the coldest nights of winter, an ancient giant awakes from his slumber beneath the temple. He is initially hostile, but can be calmed down if offered food (20 rations). He offers the party a story if they wish to hear it, and tells them one of the tablets of history."
            },
            {
                "name": "Formok the Grey",
                "alignment": "Chaotic Evil",
                "creaturetype": "Giant",
                "size": "Huge",
                "hex": "24000",
                "realm": "Karmswald",
                "description": "Formok is one of the few remaining giants of Estaria. Though one of the largest giants still in existence, Formok hides within the mountains and is nearly never sighted by travelers. Formok hates the &ldquo;manlings&rdquo; with a passion, but knows better than to reveal himself in order to kill them."
            },
            {
                "name": "White Devils",
                "alignment": "Chaotic Evil",
                "creaturetype": "Celestial",
                "size": "Meduim",
                "hex": "30000",
                "realm": "Karmswald",
                "description": "In the far north, there are stories told by trappers of a pack of unique creatures that they call the \"White Devils\". The creatures fly through the air with pearl white skin. The beings produce a ear shattering screech and seem to hunt exclusively humans."
            },
            {
                "name": "Ivory Crow",
                "alignment": "Chaotic Good",
                "creaturetype": "Beast",
                "size": "Large",
                "hex": "17001",
                "realm": "Ernst Chase",
                "description": "The Ivory Crow is regarded as a wise and respectable being. The native of the forests consider it a good omen to see the avian being through the trees. It is said that those who posses a ivory feather form the crow gain the ability to sense the motives of evil people and have an unnatural magnetism towards the forests.",
                "notes": "The crow’s feathers can be ground into a powder used for healing purposes. Each feather collected may create a potion that heals 2d4 hp."
            },
            {
                "name": "Bogtilack Creeper",
                "alignment": "Chaotic Evil",
                "creaturetype": "Fiend",
                "size": "Huge",
                "hex": "26001",
                "realm": "Karmswald",
                "description": "Deep in the bowels of the Dragon Skull cave, the Bogtilack Creeper lurks. It seeks to feast on the creatures that it can find in the darkness. Though it is blind, it finds its prey through a sense of movement and smell. It resides in a large cavern in the deepest depths of the cave. Some say that the creature is a god worshiped by the mind-flayers."
            },
            {
                "name": "Bel'Lire",
                "alignment": "Chaotic Evil",
                "creaturetype": "Fiend",
                "size": "Huge",
                "hex": "29001",
                "realm": "Karmswald",
                "description": "There is a large creature kept in a huge prison-like dungeon underneath the castle. According to the Knights, the creature was in the dungeon when it was claimed, and besides opening the dungeon once, it has never been seen."
            },
            {
                "name": "Ol' Matti",
                "alignment": "Chaotic Evil",
                "creaturetype": "Undead",
                "size": "Meduim",
                "hex": "13002",
                "realm": "Ernst Chase",
                "description": "In the lowest point of the clearing, there is a small uninteresting gravestone. It sits beneath a moss covered tree and has a well-carved image of a symbol known to be associated with peace. The inscription reads, &ldquo;Matti Bivins - Though rich in life with gold and jewels, she was never happy or content. Now buried with her treasures, we hope she doesn&rsquo;t lament.&rdquo; If tampered with a horrible creature arises from the ground and tries to drag the graverobber beneath the surface."
            },
            {
                "name": "Lia Barlow",
                "alignment": "Chaotic Evil",
                "creaturetype": "Fiend",
                "size": "Meduim",
                "hex": "20002",
                "realm": "Karmswald",
                "description": "A hag that lives in the House of the Northern Reaches"
            },
            {
                "name": "Death Temple Stalker",
                "alignment": "Lawful Evil",
                "creaturetype": "Beast",
                "size": "Large",
                "hex": "03003",
                "realm": "Ernst Chase",
                "description": "A creature of unknown origin lurks in the halls of the temple. Legends say that the creature was made by Death himself and placed in the temple to bring souls to his creator. The creature can be heard with its distinct &ldquo;skree-chug-chug-chug&rdquo; cry that echoes through the corridors."
            },
            {
                "name": "Stag's Spirit of Vengeance",
                "alignment": "Lawful Neutral",
                "creaturetype": "Aberration",
                "size": "Meduim",
                "hex": "19003",
                "realm": "Ernst Chase",
                "description": "The Skraelings from the villages often tell stories of a monster that lives in the depths of the woods. They say there is a spirit that inhabits a suit of armor. As the story goes, many years ago they slayed a great horned stag and prepared it for a feast. On the night of the feast, a great armored man approached the village and began to slaughter Skraelings claiming he was the spirit of vengeance, sent by the stag."
            },
            {
                "name": "Relthazz",
                "alignment": "Chaotic Neutral",
                "creaturetype": "Monstrosity",
                "size": "Huge",
                "hex": "22003",
                "realm": "Karmswald",
                "description": "Relthazz is an enormous multi-headed hydra that skulks along the northern Southaven River. Long ago hydra were common along the Southaven banks, but after many years of frequent ritual hunts from the skraelings many of them died out. Due to his unusually enormous size, Relthazz was able to defend himself from the ritual skraeling hunts, and grew larger and larger. There are many skraeling stories of brave warriors who have gone to vanquish the beast, but all have never returned.",
                "notes": "If a head is cut from the Hydra, a blast of fire erupts and a small glowing orb gently falls out of the explosion. If consumed, the Ember Soul, will restore a dead character to life.\n"
            },
            {
                "name": "Trendau",
                "alignment": "Chaotic Evil",
                "creaturetype": "Plant",
                "size": "Large",
                "hex": "27003",
                "realm": "Karmswald",
                "description": "The Skraelings offer tribute to their god out of fear. The call the being Trendau, or the God of Rot. It frequently attacks and consumes villagers that wander out at night and piles their bodies in a shallow bog a several miles from the village. Trendau is known to be dangerous because of the sleepiness it inflicts it&rsquo;s prey with, rendering them helpless to its devices. The being resides in an abandoned stone tower that overlooks the bog."
            },
            {
                "name": "Rekka",
                "alignment": "Chaotic Evil",
                "creaturetype": "Dragon",
                "size": "Large",
                "hex": "24005",
                "realm": "Karmswald",
                "description": "An Elder White Dragon known as Rekka has taken up residence in the entry hall. She cannot be reasoned with. She has a hoard of nearly 1,000 pounds of treasure (50,000 gold pieces, 50gp = 1 lb)."
            },
            {
                "name": "The Restrained",
                "alignment": "Chaotic Evil",
                "creaturetype": "Aberration",
                "size": "Meduim",
                "hex": "15006",
                "realm": "Ernst Chase",
                "description": "Inside the Blackhill Manor, there is a large wretched beast known as The Restrained. Is drags its chains around the floors mindlessly seeking out beings to tear the soul from and feast on. They say the sound of soul rending is revolting."
            },
            {
                "name": "Warbeasts",
                "alignment": "Chaotic Neutral",
                "creaturetype": "Humanoid",
                "size": "Meduim",
                "hex": "00007",
                "realm": "Western Reich",
                "description": "Creatures called Warbeasts swarm around the temple on the full moon. The creatures have little intelligence, but are able to don armor and use weapons. Its theorized that the beings congregate to establish territory and compete for alpha status."
            },
            {
                "name": "St. Mellian",
                "alignment": "Lawful Good",
                "creaturetype": "Undead",
                "size": "Meduim",
                "hex": "06007",
                "realm": "Western Reich",
                "description": "In the deepest parts of the crevice, there is an undead being skeletal being named St. Mellian. St. Mellian was a widely known religious leader in his days as a living creature. He lives in wretchedness and pain, but he accepts his fate because he is thankful for the opportunity to worship his divines for eternity. He is overjoyed by those he meets, and whispers tales from long ago, to those who wish to listen."
            },
            {
                "name": "Kimberly Gottfried",
                "alignment": "Chaotic Evil",
                "creaturetype": "Undead",
                "size": "Meduim",
                "hex": "12007",
                "realm": "Ernst Chase",
                "description": "A young pale, vampire, woman who runs a tavern that is constantly full, despite its secluded location. Even with such a full tavern, it seems to be quite docile and quiet. Everyone in the pub wears a robe of some sort that covers their shoulders. Kimberly is never seen without her bright red scarf and her gnarled oak cane. She is in love with a non vampire man known as Ebberwulf Haas, the son of Hubert Haas. Hubert owns a farm 3 miles north of the tavern that Kimberly runs and his son works for him there. Kimberly has not told her lover about her condition, and is looking for a way to do so."
            },
            {
                "name": "Lamplighter",
                "alignment": "Chaotic Evil",
                "creaturetype": "Undead",
                "size": "Meduim",
                "hex": "28007",
                "realm": "Karmswald",
                "description": "Though the angel of annihilation goes unworshipped by most, the temple of Annihilation still seem to be taken care of - candles are always burning and debris is cleaned from outside. Many say that it is a creature responsible called the Lamplighter. Legends tells of a truly evil man that once lived near the temple. He would do as he pleased to those who stumbled onto his land. After years of vile deeds, he made the mistake of murdering a holy man whose god cursed him when he killed his servant. The curse left Menia half blind, eternally hungry, and transformed into a hideous many armed creature."
            },
            {
                "name": "Helmut the Tongue",
                "alignment": "Chaotic Evil",
                "creaturetype": "Humanoid",
                "size": "Small",
                "hex": "30008",
                "realm": "Karmswald",
                "description": "A goblin who is known for his ability to speak perfect Common, Dwarven, Elvish, and Giant. All of his tribe claim he is hundreds of years old, but no one has true proof."
            },
            {
                "name": "Knight of the Crystaline Step",
                "alignment": "Lawful Evil",
                "creaturetype": "Elemental",
                "size": "Meduim",
                "hex": "05009",
                "realm": "Ernst Chase",
                "description": "Nearby in a grotto there is a small pool with a waterfall that trickles into it. Within the pool a white crystal can be seen. If the crystal is handled by a follower of one of the 12, it bursts into a cloud of dust. Once the dust settles, a humanoid form stands in view. He calls himself The Knight of the Crystaline Step. He is from an ancient order of constructs created by the Dwarves of old. He insists that he aid the one who released him.\n\nUltimately his goal is more sinister. In reality, he is a terrible being that was trapped in a crystalline form by St. Kor, the ancient warden. When he has a chance, he will slaughter an unarmed innocent and assume their form. He will seem to disappear, but in reality will be in total control of his victim. "
            },
            {
                "name": "Heinkurr",
                "alignment": "Neutral Evil",
                "creaturetype": "Monstrosity",
                "size": "Large",
                "hex": "09009",
                "realm": "Western Reich",
                "description": "Near the sunken shrine there is a graveyard surrounded by a 4ft tall stone wall, that looks older than the shrine itself. Inside the graveyard there are ancient headstones, many of which are unlegible due to the wearing away of the inscriptions. There is a large mound in the center of the graveyard. If disturbed the mound rises to reveal itself as a large bird-like humanoid, named Heinkurr, the Groundskeeper."
            },
            {
                "name": "The Moorian",
                "alignment": "Neutral Neutral",
                "creaturetype": "Fey",
                "size": "Large",
                "hex": "13009",
                "realm": "Oakburn Hills",
                "description": "At the foot of The Roost, there is a being that resides in the shrubs and brush that surround the spire that rises into the sky. He sits nearly perfectly still and appears to resemble the brush and trees that he abides in. He never rises from his seated position, but it could be assumed if he were to stand, he would tower at nearly 20 feet tall. When he speaks, he uses an archaic dialect nearly lost to the ears of many. He calls himself The Moorian and welcomes people who wish to speak to him. To those he likes, he grants The Boon of the Currian Moore. Those enriched with the boon are able to use their action to scry up to 20 feet in front of them for 24 hours. This works through doors and walls. The Moorian may only bestow this boon on someone once every session."
            },
            {
                "name": "Emberhooves",
                "alignment": "Chaotic Evil",
                "creaturetype": "Elemental",
                "size": "Tiny",
                "hex": "20009",
                "realm": "Oakburn Hills",
                "description": "In and around the tower, there can be smouldering footprints of creatures called Emberhooves. They have infested the tower, and are passing in and out of a black writhing portal that lies in the top of the tower."
            },
            {
                "name": "Vile Belcher",
                "alignment": "Neutral Evil",
                "creaturetype": "Ooze",
                "size": "Meduim",
                "hex": "01010",
                "realm": "Western Reich",
                "description": "A slimey instect-like creature that feeds on minerals around and in the mine in which it lives."
            },
            {
                "name": "Midnight Sludge",
                "alignment": "Neutral Evil",
                "creaturetype": "Ooze",
                "size": "Large",
                "hex": "29011",
                "realm": "Karmswald",
                "description": "Beneath Fearn is an ancient burial site. It was closed off long ago, but if it were to be opened, it would reveal a horrible black sludge of a creature that consumes everything It can touch."
            },
            {
                "name": "Xyen",
                "alignment": "Chaotic Evil",
                "creaturetype": "Fiend",
                "size": "Large",
                "hex": "01012",
                "realm": "Western Reich",
                "description": "A terrible creature unknown to most stalks the lands that surround the great Worldbuilder Statue. If the night is spent at the foot of the statue, screeching can be heard within a mile. The creature is known as Xyen the Blackheart. Xyan is a towering devil that seeks out souled beings that can do his will. He requests that those who set eyes on him bring him a soul, a living being, from Oftburg, which lies to the north of the statue. If they do his task, he will award them with the Blackhearted Obedience. Those gifted with the boon may use misty step once after every short rest for the next 48 hours."
            },
            {
                "name": "Molnar the Runeforger",
                "alignment": "Neutral Good",
                "creaturetype": "Celestial",
                "size": "Meduim",
                "hex": "24012",
                "realm": "Oakburn Hills",
                "description": "Those that wish to obtain weapons of unworldly quality search out the Runeforge. The forge draws its power from the ancient magics that well up from within the earth, and harness those powers to brand magic symbols into the forged items. No living beings are still alive that remember this ancient art, except for one - Molnar."
            },
            {
                "name": "Waterwash Merfolk",
                "alignment": "Neutral Evil",
                "creaturetype": "Elemental",
                "size": "Large",
                "hex": "26012",
                "realm": "Karmswald",
                "description": "In the depths of Waterwash Cave, nestled in deep pools of black water, the Waterwash Merfolk reside. Humanoid in nature and beastial in aggression, few have retured to tell their tale."
            },
            {
                "name": "Sporelings",
                "alignment": "Neutral Neutral",
                "creaturetype": "Plant",
                "size": "Tiny",
                "hex": "10013",
                "realm": "Western Reich",
                "description": " The sewer area has been used for the running of the city's sewer system, and has in turn been the home of some undesirable creatures known as Sporelings. Thankfully clean air is deadly to the sporelings, but that doesn't mean they don't cause trouble with those who work in the sewers."
            },
            {
                "name": "Kono the Reborn",
                "alignment": "Chaotic Evil",
                "creaturetype": "Undead",
                "size": "Meduim",
                "hex": "21013",
                "realm": "Villmar",
                "description": "Kono is said to be the offspring of the Plague Maiden and an unfortunate mare. Kono sloshes through the marshes attacking any he see claiming it is in the name of the Plague Maiden. Kono wreaks of pestilence and it is easy to tell when he is approaching just by his stench. It appears as if he is able to breathe freely while submerged in the marshes, making him especially hard to kill."
            },
            {
                "name": "Gein'nal",
                "alignment": "Chaotic Evil",
                "creaturetype": "Fiend",
                "size": "Large",
                "hex": "27013",
                "realm": "Villmar",
                "description": "A foul creature known as Gein’nal inhabits the surrounding area of the Temple of Silence, and dismembers travelers and pilgrims alike. He resembles a centaur, but has a skull head with large bat wings protruding from his back."
            },
            {
                "name": "Hedri of the Coldwish",
                "alignment": "Neutral Good",
                "creaturetype": "Celestial",
                "size": "Meduim",
                "hex": "30013",
                "realm": "Villmar",
                "description": "At night in the Tower of Auld, a being called Hedri of the Coldwish rings the bell 3 chimes. He tells that he was created by the Wasted Harvesters, an ancient and traditional militia group. His creation and purpose was to keep watch at night and when there was trouble, to ring the bell 3 times. Since the Harvesters stopped showing up, he started ringing the bell every night in hopes they would hear it and return. He cannot be convinced they will never come back, and will always stay and ring the bell. He will gift the party with a small magic enchantment to someone who is willing. If accepted, he applies an enchantment he calls Boon of the Nightwatch. During the nighttime, the weapon that was enchanted will let out a booming chime to alert all nearby beings if there is ill intent to the owner."
            },
            {
                "name": "The Wolf's Daughter",
                "alignment": "Chaotic Evil",
                "creaturetype": "Humanoid",
                "size": "Meduim",
                "hex": "25014",
                "realm": "Villmar",
                "description": "The town has a legend of a woman who claimed to be in love with a wolf. Many were disgusted by her and she was shunned. One day she was found outside the walls with the wolf and she was arrested to be tried for bestiality. While awaiting her fate in prison, she gave birth to a horrible creature that both resembled a woman and a wolf. The guards detained the child and planned to smash it against the rocks in the morning, but upon awaking, the child had been stolen. That morning, the woman was executed and with her last words cursed the town to be tormented by her daughter for what they did."
            },
            {
                "name": "Muata",
                "alignment": "Chaotic Evil",
                "creaturetype": "Fiend",
                "size": "Large",
                "hex": "29014",
                "realm": "Villmar",
                "description": "The skraelings in this village worship an old and powerful demon that they call Muata(Muxxom).\r\nMuata lives in a small cave near the village and accepts live human offerings as payment for his power that he bestows upon the skraelings.\r\n"
            },
            {
                "name": "Verdant Dragon",
                "alignment": "Neutral Good",
                "creaturetype": "Fey",
                "size": "Huge",
                "hex": "05015",
                "realm": "Western Reich",
                "description": "A true dragon is a being of extreme intelligence and large stature that lives for hundred of years. The Verdant Dragon is not a true dragon. The druids of the skraeling tribes describe it as a type of forest sprite or spirit. The sprite takes on the form of a dragon and patrols the Western Reichs. Only some of the most powerful skraeling druids have claimed to have communed with the being. Most others say that if approached, the dragon dissipates into an enormous mixed cloud of birds, leaves, insects, seeds, and spores.  "
            },
            {
                "name": "Derun",
                "alignment": "Chaotic Evil",
                "creaturetype": "Aberration",
                "size": "Meduim",
                "hex": "11015",
                "realm": "Alenfel Barrows",
                "description": "The Duergar tell ghost stories of a ghost that roams the old monument cavern deeper within the caves. They call her Derun and she is said to be the ghost of the wife of the first king of the Black Tower. Some seem to actually believe the ghost exists, but most blow it off as a children's tale. "
            },
            {
                "name": "Gipen",
                "alignment": "Neutral Evil",
                "creaturetype": "Monstrosity",
                "size": "Meduim",
                "hex": "27015",
                "realm": "Villmar",
                "description": "Legend has it that he was once a man, but something went horribly wrong, when he went back on a deal with a witch and he was turned into a wereswine"
            },
            {
                "name": "Aderfahl",
                "alignment": "Neutral Neutral",
                "creaturetype": "Elemental",
                "size": "Meduim",
                "hex": "17017",
                "realm": "Swincrest",
                "description": "Beneath the blacksmith's house there is a fiery humanoid called the Aderfahl. It lives in a stone furnace and produces enough heat to melt even the most resilient metals. Few know of his presence but of those that do, there is a legend that says he was a Duergar that sacrificed himself to become an eternal flame.\r\n"
            },
            {
                "name": "Fangermann",
                "alignment": "Neutral Evil",
                "creaturetype": "Humanoid",
                "size": "Meduim",
                "hex": "23017",
                "realm": "Villmar",
                "description": "The Fangermann stalks the springs gathering vials of the mineral-rich waters. He is feared for his obsession with collecting the heads of tiefling males and commonly displays his most recent victims on his belt. Because he wears a skull mask over his face and slathers his skin with mud and grass, little is known about him. Many claim he is a rogue wildling that was kicked out for his odd behavior."
            },
            {
                "name": "Welcoase",
                "alignment": "Chaotic Evil",
                "creaturetype": "Fey",
                "size": "Meduim",
                "hex": "10018",
                "realm": "Alenfel Barrows",
                "description": "An ancient wizard from an unknown world. He resides in the bowels of the Mines of the First Expedition in a circular room. His magic uses black sludge that corrodes the skin of the victims it touches. "
            },
            {
                "name": "Ghost of the Blasted Throne",
                "alignment": "Chaotic Evil",
                "creaturetype": "Celestial",
                "size": "Meduim",
                "hex": "15019",
                "realm": "Alenfel Barrows",
                "description": "In the Blasted Valley, there is a being that scream across the slate outcroppings. It is unnamed, but well known to the locals. Many people say it is a ghost that is wearing the traditional burial garments of an ancient and obscure sect of religious followers of the twelve. It’s said that they garments it dons were specifically reserved for mothers who gave birth to deformed children, who were typically ceremonially slain for shaming the gods with their offspring.\r\n"
            },
            {
                "name": "Maiden of the Sea",
                "alignment": "Neutral Evil",
                "creaturetype": "Aberration",
                "size": "Meduim",
                "hex": "18019",
                "realm": "Swincrest",
                "description": "A ghost that has wandered the shores of Westerheim Lake. Believes that her Fisherman husband is going to return from his fishing trip.She is distressed because she says that &lsquo;there was just a storm.&rsquo; and worries her husband, Matthias, might be in danger."
            },
            {
                "name": "Council of the Bone King",
                "alignment": "Lawful Evil",
                "creaturetype": "Celestial",
                "size": "Huge",
                "hex": "20019",
                "realm": "Swincrest",
                "description": "Below the halls, in the deep dark crevices that surround it, there 3 beings that call themselves the Council of the Bone King. These beings live wretchedly off of the poor beasts and creatures that fall into the pits. They bicker for who deserves the next morsel, and often times leave it up to a competition to decide who gets to eat. With the bones of their meals, they make piles that they stain black with the creeping cave moss the covers the walls. They seem to have once had a purpose, but their tattered and ancient garb shows that they have long forgotten it and gone mad."
            },
            {
                "name": "Flame Maiden",
                "alignment": "Chaotic Evil",
                "creaturetype": "Elemental",
                "size": "Large",
                "hex": "29019",
                "realm": "Villmar",
                "description": "Athbet’s sewers are older than the city itself and are known for their volatility and filth. The sewer keepers talk of a serpentine being that breathes fire and captures workers by stinging them with a poisonous barb. They say she drags them into a room and shoves them into an iron pot with a large lid that latches. She then is said to produce a flame from beneath her hood and boil her victims alive, consuming them soon after. Bones from her victims can be found scattered all over the sewers."
            },
            {
                "name": "Tenris the Keeper",
                "alignment": "Neutral Neutral",
                "creaturetype": "Humanoid",
                "size": "Large",
                "hex": "21020",
                "realm": "Swincrest",
                "description": "Though the Keepers are said to be extinct, there are some who talk of one who still roams the treelines of the Westerheim forests. Many woodsmen say that this keeper is not like the keepers in the stories of old. They say somthing is malformed and twisted by magical energy.\n"
            },
            {
                "name": "Silicus",
                "alignment": "Neutral Evil",
                "creaturetype": "Humanoid",
                "size": "Meduim",
                "hex": "27021",
                "realm": "Villmar",
                "description": "In a hovel a few miles from the tower, there is a being called Silicus who is known for his interest in the ongoings of the “civilized” He pays well for information on day to day life and welcomes parties of adventurers in exchange for rumors and stories.\r\n"
            },
            {
                "name": "Bel'Tun",
                "alignment": "Chaotic Evil",
                "creaturetype": "Elemental",
                "size": "Meduim",
                "hex": "05023",
                "realm": "Alenfel Barrows",
                "description": "In the ruins of the abandoned city, there is a single black charred building. If entered, there is a staircase that leads down into the ancient “old town”. The old town is illuminated by large black iron braziers. There are hanging oil pans illuminating the ceiling. Red symbols have been painted on the walls of the stone buildings, that represent hammers. Upon further investigation, it is discovered that a race called the Bel’Tun inhabit the area, and they are not friendly."
            },
            {
                "name": "Temple Merfolk",
                "alignment": "Chaotic Evil",
                "creaturetype": "Monstrosity",
                "size": "Meduim",
                "hex": "26023",
                "realm": "Swincrest",
                "description": "Merfolk are exceedingly common out on the oceans of Estaria, but in the landlocked places, they are almost unknown in the local tales and stories. Within the temple of water, there are a terrible and inbred version of what seafarers call &ldquo;merfolk&rdquo;. The key difference is their desire to consume red flesh rather than that of fish."
            },
            {
                "name": "Baalk",
                "alignment": "Neutral Evil",
                "creaturetype": "Humanoid",
                "size": "Small",
                "hex": "27024",
                "realm": "Swincrest",
                "description": "A small goblin by the name of Baalk has managed to skulk around the shadows for a very long time. He has taken up residence in one of the abandoned sarcophagus and welcomes anyone who is willing to help him kill cultists."
            },
            {
                "name": "General Bodo",
                "alignment": "Chaotic Evil",
                "creaturetype": "Aberration",
                "size": "Meduim",
                "hex": "29024",
                "realm": "Villmar",
                "description": "General Bodo was a once great and well known general to one of the Skraeling warlords of the old days. He was in control of armies consisting of hundreds of men and won many wars against the civilized invaders. He died while in search of an ancient relic thought to have been buried deep in an ancient tomb built by his ancestors. Legends say that many years later, his skeletal corpse was recovered by an ambitious skraeling leader who hoped to resurrect the fabled general of Skraeling lore."
            },
            {
                "name": "The Silver Harpy",
                "alignment": "Neutral Evil",
                "creaturetype": "Beast",
                "size": "Large",
                "hex": "02025",
                "realm": "Alenfel Barrows",
                "description": "There is a legend of a girl named, Harpella, who thought herself better than her sister. Harpella's sister lived her entire life being tormented by her older sister. Even her parents thought Harpella to be the favorite child. Both children quickly grew up quickly and left their homes. Harpella married a landed man and was very happy. Harpella's sister did not marry, and became jealous of her sister. She soon got involved with an old woman who claimed to teach her magic. Many years passed and one day Harpella's sister came to visit her. Upon arrival, Harpella's sister cast a powerful curse upon Harpella transforming her into a terrible monster with silver feathers and talons. Little did Harpella's sister know, that Harpella was carrying a child. This is said to be the story of the Silver Harpy. Many think that the silver harpy birthed the child and thus created the race of sky terrors known as Harpies. "
            },
            {
                "name": "The Earth Heart",
                "alignment": "Neutral Neutral",
                "creaturetype": "Elemental",
                "size": "Colossal",
                "hex": "08025",
                "realm": "Alenfel Barrows",
                "description": "In the Alenfel Barrows if you listen very closely on a silent night, you can hear a dull pulsing. It comes from deep beneath the earth. The source of the pulse is a deep crater in the Barrows. Little is known and understood about the source.",
                "notes": "This magical being is the oldest in all of Estaria. He is the heart that pumps the magical essence through the earth itself. He does not speak but he is able to understand. \r\nIf the Earth Heart is stabbed poked, or casted upon, he begins to stop beating. Upon this happening, plants instantly start to wither, living beings start to suffocate, and metal begins to super-heat.\r\n"
            },
            {
                "name": "Vex the Grey Queen",
                "alignment": "Chaotic Evil",
                "creaturetype": "Aberration",
                "size": "Meduim",
                "hex": "23025",
                "realm": "Swincrest",
                "description": "Vex was a Queen in the ancient days in the lands that are now known today as Swincrest. It is said that she still roams the forest of the location of her ancient castle. None are really sure why she still roams the Fellbach Thicket, but there are rumors that she was bound to the Thicket by a curse bestowed upon her by her husband, who died a violent death at her hands."
            },
            {
                "name": "Brimkar",
                "alignment": "Neutral Neutral",
                "creaturetype": "Beast",
                "size": "Huge",
                "hex": "30026",
                "realm": "Villmar",
                "description": "In the southeastern forests of Villmar there is a beast that flies above the trees. Brimkar was named by the ancient explorers of the Far Weald. Brim meaning \"To Fly\" and Kar meaning \"The Death of\" translating to \"The Death of the Fliers\". The beast consumes large quantities of migrating birds flying south from the Westerheim Lake during the winter seasons. Brimkar is harmless to humans and flies high enough in the sky to be unreachable by arrows and projectiles."
            }
        ]
    }

  });

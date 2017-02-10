'use strict';

/**
 * @ngdoc function
 * @name fourthgruntApp.controller:LootGeneratorCtrl
 * @description
 * # LootGeneratorCtrl
 * Controller of the fourthgruntApp
 */
angular.module('fourthgruntApp')
  .controller('LootGeneratorCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(document).ready(function(){
  //Creates a male name on press
  $(".inputButton").click(function(){
        $(".randomLootInfo").html(function(){
          var itemInfo = [
            "A small hourglass filled with fine grey ash",
            "A wooden walking stick inlaid with sylvan designs in brass",
            "A bronze collar crafted in the form of a winged serpent",
            "A small leather pouch of goblin teeth",
            "A pendant of silver stone carved in the form of a rabbit",
            "A glass lens etched with sylvan designs",
            "A knot of goblin hair",
            "A brooch crafted from the pommel of a legendary sword",
            "A scarred pewter figurine of a sahuagin warrior",
            "A key carved from the black bone of a displacer beast",
            "A brass ring engraved with dark symbols, which was supposedly buried with a legendary lich long ago",
            "A small wooden box crafted in the form of a slumbering dragon",
            "A small pewter box crafted in the form of a slumbering dragon",
            "A small book of columns of strange glyphs",
            "A block of red wax which bears the impression of a strange key",
            "A petrified rose",
            "A loosely-bound folio filled with draconic lore and mythology",
            "An amulet crafted from the tooth of a giant shark on a silk cord",
            "An iron candlestick inscribed with the word 'Gate'",
            "A bronze gauntlet torn from a clockwork suit of armor",
            "A bronze key engraved with the symbol of a legendary alchemist",
            "A leather bracer with three matching rings attached by fine silver chains",
            "A leather quiver engraved with the image of the sun beneath five stars",
            "A broken dagger engraved with the symbol of a fell demon",
            "An ivory pawn engraved with the symbol of a powerful archmage",
            "A brass bell inscribed with the name of a fell demon",
            "A small book of recipies for preparing dragon",
            "A folded page of parchment which invites you to a castle in a distant kingdom",
            "A wooden figurine which looks like you but of opposite gender",
            "A small box crafted from an amethyst geode",
            "A glass bottle filled with wisps of bronze smoke",
            "A steel mirror set in a fanged maw of iron",
            "A leaf-shaped brooch which changes color with the seasons",
            "An iron amulet bearing the holy symbol of a fire god on one side, and of a god of law on the other",
            "A lodestone chess piece engraved with an alien symbol",
            "A steel tuning fork which seems to make no sound when struck",
            "A bronze ring inscribed with one-half of a prophecy",
            "A tiny hydra preserved in amber",
            "An ancient book of strange pressed flowers",
            "A monocle crafted from then lens of a devil's eye",
            "A rock to wind a piece of string around",
            "A lodestone pawn carved in the form of a werewolf",
            "A crumpled piece of parchment which names you heir to a ship docked in a distant city",
            "A small leather pouch of agate marbles",
            "A monstrous eye floating in a bottle of clear amber fluid",
            "A green scale from an unknown creature",
            "A wooden puzzle box which seems to be missing a piece",
            "A puzzle box crafted in glass, which contains a moonstone marble",
            "A wooden walking stick inlaid with geometric patterns in bronze",
            "A 'lucky' six-sided die",
            "A bronze collar set with bloodstone",
            "A wooden sphere painted with dozens of eyes",
            "A petrified violet",
            "A fan that, when unfolded, shows a sleeping cat",
            "A book that tells the story of a legendary hero's rise and fall, with the last chapter missing",
            "An old key",
            "A mummified goblin hand",
            "An ornate scabbard that fits no blade you have found so far",
            "A scrap of cloth from an old banner",
            "A rectangular metal device with two tiny metal cups on one end that throws sparks when wet",
            "A pyramid of sticky black incense that smells very bad",
            "A fragment of a beautiful song, written as musical notes on two pieces of parchement",
            "A glass eye",
            "A diary written in a language you don't know",
            "A multicolored stone disk",
            "A glass orb filled with water in which swims a clockwork goldfish",
            "A dragon's bony talon hanging from a plain leather necklace",
            "A dead scarab beetle the size of your hand",
            "A tiny chest carved to look like it has numerous feet on the bottom",
            "A nightcap that, when worn, gives you pleasant dreams",
            "A tiny sketch portrait of a goblin",
            "A mosaic tile with a multicolored, glazed surface",
            "A gold coin minted in an unknown land",
            "A purple handkerchief embroidered with the name of a powerful archmage",
            "A squat, strikingly put-together knitting needle.",
            "A perfectly dented rod. It is made of mottled zinc and calls out to you once in a while. It might be lucky.",
            "An onion-sized, relatively scraped-up baton in a pouch. It is of off-white wood and is unusually light. It has obviously been through a lot.",
            "A small, strikingly creased horn. It is carved from violet-tinted crystal and reminds you of the swamp.",
            "A small, chewed up paper weight of a grapefruit. It is of red gold and glitters. It stirs a distant memory in you when wet.",
            "A sanded disc etched with Gnomic symbols. It is made of tin and is probably harmless.",
            "A tainted teapot. It is made of rubber and calls out to you just a tad.",
            "A strikingly dented paper weight of an eagle. It is made primarily out of tarnished copper and is definitely harmless.",
            "A pinky-sized, chewed up plate. It is made of tortoise shell and tastes like nothing even though it smells kinda gross.",
            "A beautifully scuffed statue of a chicken. It is carved from green-stained clay and tastes a little bland.",
            "A greased-up spear with light scrapes. It is composed of crimson oak and stirs a distant memory in you when you think about it. It was well cared-for in a previous life and calls out to you.",
            "A chipped statue of a horse with pivots. It is carved from bamboo and is unusually light.",
            "A small, freshly scored statue of a grapefruit with two scratches. It is made of ivory and seems unlucky.",
            "A dainty, completely tarnished four leaf clover from Port Signorr. It is made primarily out of dark-painted buffalo horn and wobbles.",
            "An oddly scorched mask in a bottle. It is made primarily out of bamboo and seems unlucky.",
            "A strikingly stained goblet. It is of metal and seems holy.",
            "A plainly smooth sea shell. It is made of zinc and reminds you of adventure.",
            "A quite tiny, strikingly dusty statue of a Dwarven king. It is made of black-tinted pewter and smells very fresh.",
            "A plainly creased hatchet. It is made primarily out of purple electrum and jangles when sang to.",
            "A plainly wax-dipped statue of an Orcish woman with exposed breast etched with Port Signorrian symbols. It is made of oak and reminds you of something...but you're unsure what.",
            "An unusually dusty nail file. It is composed of zinc and stirs a distant memory in you when spun.",
            "Recipe for scones.",
            "Elephant’s tusk knife.",
            "Draft of new law forbidding beer, dancing, and/or public-speaking among the lower classes throughout Estaria, not yet signed.",
            "d10 x 100 living snails with specially-made shells cast from pure silver worth 1 sp. Snails are sentient, communicate telepathically, and will beg PCs not to trade them away.",
            "Seed of a species of sentient, mobile tree.",
            "Skull of gnoll in silver and ebony— actually a reliquary designed to mount and display the tooth of a gnollish saint.",
            "A broken lobster pot. It looks like it could be easily repaired.",
            "A small copper idol. When looked at in the eyes, the idol imitates your facial expression.",
            "A tattered canvas cape. Changes color based on the wearer's mood.",
            "A small empty botte. Produces the scent of smoke when smelled."
          ];

          var randomSelection = Math.floor(Math.random() * itemInfo.length);
          return itemInfo[randomSelection];
        });
    });
  });

  });

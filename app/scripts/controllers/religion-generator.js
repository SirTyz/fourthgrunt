'use strict';

/**
 * @ngdoc function
 * @name fourthgruntApp.controller:ReligionGeneratorCtrl
 * @description
 * # ReligionGeneratorCtrl
 * Controller of the fourthgruntApp
 */
angular.module('fourthgruntApp')
  .controller('ReligionGeneratorCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(document).ready(function(){
  //Creates a male name on press
  $("#inputButton").click(function(){
        $(".randomReligionInfo").html(function(){
          var communityName = [
              "Communion of ",
              "Chosen of",
              "Oracles of",
              "Order of",
              "Followers of",
              "Church of",
              "Sect of",
              "Cult of",
              "Gathering of",
              "Servants of",
              "Children of",
              "Paragons of",
              "Creed of",
              "Pact of",
              "Speakers of",
              "Mouths of",
              "Wanderers of",
              "Creed of",
              "Gathering of",
              "Faith of",
              "Pure Ones of",
              "Enlightened of",
              "Army of",
              "Brotherhood of",
              "Clan of",
              "Tribe of",
              "Men of",
              "Final of",
              "Blessed of"
            ];

          var deityName = [
              "the Ashen",
              "the Great Hound",
              "the Beast",
              "Bul'Thelos",
              "Bara'Kaul",
              "Mexnia'Dul",
              "the Three Lords",
              "the Ancient King",
              "the Mountain Lords",
              "the Great Harper",
              "the Huntsman",
              "Mellian, God of the Road",
              "Rexius, God of the Forge",
              "Trillian, God of Beauty",
              "the Fel Being",
              "the Dark Council",
              "the Old Path",
              "the New Kingdom",
              "the Old Ways",
              "the Champion, Rexus",
              "Byvaas, God of Economy",
              "the Oakwell",
              "the Great Blood Feast",
              "the Table of Plenty",
              "the Final Breath",
              "the Sky Bretheren",
              "the Council of Madness",
              "Windamere, God of Addiction",
              "Braga, God of the Lake",
              "Salla, God the the North Winds",
              "Ola, Goddess of Sleep",
              "Owher, Goddess of Destiny",
              "Temdar, God of Harvest",
              "Etarr, God of Youth",
              "Aagi, God of Tricks",
              "Segrus, Goddess of Weddings",
              "Anena, Goddess of Sadness",
              "Bebdes, Goddess of Helplessness",
              "Reius, Goddess of Filth",
              "the Ash Hill Pack",
              "the Dawnfall Pact",
              "the Bloodmoon Family",
              "the Ancient Pledge",
              "the New Rebirth",
              "the Great Teara",
              "the Oakburn Man-Swine",
              "the First-Born",
              "the True Ones",
              "the Great Void",
              "the Nothingness",
              "the Star Master",
              "the Voidling",
              "the Void Father",
              "the Reaper",
              "the Full Moon",
              "the Silver Blood",
              "the Black Blood",
              "the Spirit Conjurer",
              "the Elements",
              "Craten, God of Spices",
              "the Winter Flower",
              "the Melted Skull",
              "the Black Skull",
              "the Blind Eye",
              "the Cracked Jaw",
              "the Consumed",
              "Brell the Silver",
              "the Gold Piece",
              "the Pierced Chest",
              "the Wounded King",
              "the Fire Keeper",
              "the Final Duel",
              "the Red Branch",
              "Westerheim",
              "the Oakburn Hills",
              "the Western Reich",
              "the Faykeep Forest",
              "Karmswald",
              "the Stormstrider",
              "the Verdant Drake",
              "the Ivory Crow",
              "the White Devils",
              "the Runeforge",
              "the Wilds",
              "the Wild Hunt",
              "the Eighth Knife",
              "the Everlasting Dawn",
              "the Great Toad",
              "the Shunned Star",
              "the Great Hive",
              "the Crimson Palm",
              "the Third Eye",
              "the Crooked Hag",
              "the Unbowelled Coven",
              "the Wolf of Exile",
              "the Endless Chasm",
              "the Unseen Dancer",
              "the Myriad",
              "the Light Verrotten",
              "the Low Charm",
              "the Dark Priestess",
              "the Giant Lords",
              "the Giant's Blood",
              "the Elder Speech",
              "the Baleful Ones",
              "the Caustic Oppressor",
              "the Noxious Flame",
              "the Withering Beast",
              "the Wretched Corruptor",
              "the White North",
              "the Depth Walker",
              "the Spirit of the Field",
              "the Great Protector",
              "the Hidden Soul",
              "the Mortal Fate",
              "the Blood Moon",
              "the Crier",
              "the Putrid Cat",
              "the Boar Hearth",
              "the Hunt of Seasons",
              "the Man-Eater",
              "Vobeyus, God of Night",
              "Ciborh, God of the Sea",
              "the Last Poem",
              "the Last Song",
              "the First Words",
              "the Creator's Mouth",
              "the Shattered Worlds",
              "the Broken Ox",
              "the Oil",
              "the Red Hillock"
            ];


          //Finds community name for a male
          var randomSelection = Math.floor(Math.random() * communityName.length);
          var names = communityName[randomSelection];

          //Finds deity name
          randomSelection = Math.floor(Math.random() * deityName.length);
          names = (names + " " + deityName[randomSelection]);

          return names;

        });
    });
    });

  });

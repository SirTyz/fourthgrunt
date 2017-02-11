'use strict';

/**
 * @ngdoc function
 * @name fourthgruntApp.controller:InnGeneratorCtrl
 * @description
 * # InnGeneratorCtrl
 * Controller of the fourthgruntApp
 */
angular.module('fourthgruntApp')
  .controller('InnGeneratorCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(document).ready(function(){
  //Creates a male name on press
  $(".inputButton").click(function(){
        $(".randomInnInfo").html(function(){
          var innVerb = [
            "Moping","Drowning","Hanging","Belching","Running","Walking","Hunting","Fighting","Swinging","Breaking","Working","Fermenting","Flowering","Worrying","Following","Flowing","Complaining","Standing","Joking","Laughing","Panting","Boarding","Lounging","Cutting","Singing","Staring","Goading","Disappointing","Faltering","Binding","Winding","Sundering","Longing","Fumbling","Bumbling","Stumbling","Pining","Whining","Flying","Hoarding","Whoring","Warring","Winking","Skittering","Slithering","Snoring","Snorting","Playing","Practicing","Grappling","Burning","Flaming","Freezing","Poisoning","Burying","Throwing","Sparking","Steaming","Smiting","Chittering","Chattering","Mumbling","Grating","Plowing","Biting","Howling","Roaring","Shouting","Pouring","Squeaking","Stinging","Charging","Bleating","Stabbing","Goring","Poking","Swallowing","Sucking","Drinking","Sneaking","Hiding","Slashing","Limping","Tripping","Shifting","Sliding","Blinding","Piercing","Bludgeoning","Crushing","Hopping","Thundering","Hushing","Crying","Wailing","Mourning","Darkening","Piling","Digging","Flinging"
          ];

          var innAdjective = [
            "Wayward","Quiet","Jolly","Good","Crooked","White","Gray","Blackened","Harried","Crimson","Silver","Golden","Disturbed","Filthy","Ugly","Bastard","Faltering","Glorious","Beautiful","Handsome","Wrinkled","Unhappy","Intelligent","Lovely","Ignorant","Senile","Sour","Sweet","Lonely","Green","Blind","Hungry","Worried","Educated","Stupid","Emboldened","Honorary","Stinky","Bottomless","Greasy","Sloppy","Stylish","Distressed","Harrowed","Tormented","Mortified","Lopsided","Broken","Moldy","Gooey","Fermented","Blighted","Ornate","Drowned","Murdered","Widowed","Hanged","Angry","Lusty","Haunted","Strong","Withered","Comely","Pious","Penitent","Patient","Drunk","Worthy","Wealthy","Loathsome","Weak","Miniscule","Miniature","Enormous","Enlarged","Engorged","Lecherous","Despicable","Lewd","Portly","Violent","Bumbling","Faulty","Pristine","Cleanly","Cracked","Splintered","Jeweled","Superior","Flawless","Common","Exquisite","Elegant","Fine","Dull","Brittle","Fragile","Effeminate","Masculine","Supine"
          ];

          var innNoun1a = [
            "Warhorse","Horseman","Maiden","Mage","Bachelor","King","Magistrate","Warchief","Warrior","Mare","Wolf","Fox","Lion","Lamb","Warden","Mule","Assassin","Swordsman","Lady","Knight","Soldier","Wizard","Warlock","Ranger","Bard","Druid","Monk","Paladin","Sorcerer","Rogue","Cleric","Bear","Goblin","Kobold","Gnome","Halfling","Dwarf","Fool","Virgin","Horde","Squire","Eagle","Rooster","Piglet","Thief","Priest","Friar","Blacksmith","Guard","Stag","Hag","Devil","Angel","Serpent","Snake","Rat","Mouse","Bandit","Chieftain","Griffon","Dragon","Lizard","Pony","Baron","Heifer","Bull","Hound","Goat","Toad","Stallion","Monster","Vermin","Beholder","Monkey","Elephant","Boar","Beagle","Bat","Demon","Imp","Sprite","Fey","Spirit","Bitch","Starling","Minotaur","Barbarian","Prophet","Merchant","Cobbler","Unicorn","Ogre","Nymph","Butcher","Captain","Angler","Lover","Mason","Tinker","Whale"
          ];

          var innNoun1b = [
            "Warhorse","Horseman","Maiden","Mage","Bachelor","King","Magistrate","Warchief","Warrior","Mare","Wolf","Fox","Lion","Lamb","Warden","Mule","Assassin","Swordsman","Lady","Knight","Soldier","Wizard","Warlock","Ranger","Bard","Druid","Monk","Paladin","Sorcerer","Rogue","Cleric","Bear","Goblin","Kobold","Gnome","Halfling","Dwarf","Fool","Virgin","Horde","Squire","Eagle","Rooster","Piglet","Thief","Priest","Friar","Blacksmith","Guard","Stag","Hag","Devil","Angel","Serpent","Snake","Rat","Mouse","Bandit","Chieftain","Griffon","Dragon","Lizard","Pony","Baron","Heifer","Bull","Hound","Goat","Toad","Stallion","Monster","Vermin","Beholder","Monkey","Elephant","Boar","Beagle","Bat","Demon","Imp","Sprite","Fey","Spirit","Bitch","Starling","Minotaur","Barbarian","Prophet","Merchant","Cobbler","Unicorn","Ogre","Nymph","Butcher","Captain","Angler","Lover","Mason","Tinker","Whale"
          ];

          var innNoun2 = [
            "Mount","Saddle","Guild","Fangs","Man","Pardon","Pleasure","Belt","Staff","Shield","Prince","Master","Servant","Meal","Favor","Love","Word","Scribe","Apprentice","Acolyte","Dress","Goddess","God","Gold","Purse","Trap","King","Son","Sister","Mother","Daughter","Cry","Shout","Cupboard","Pantry","Queen","Wealth","Star","Void","Woman","Whore","Butcher","Anvil","Tome","Sacrifice","Armor","Cup","Pot","Stove","Stool","Princess","Chain","Sword","Pork","Grain","Tooth","Lance","Axe","Scabbard","Knife","Dagger","Spear","Bow","Crossbow","Quarterstaff","Fire","Ice","Wind","Earth","Water","Stone","Ladle","Monastery","Chalice","Goblet","Dungeon","Lust","Lantern","Bone","Life","Mistress","Mind","Treasure","Barter","Armorer","Butler","Page","Feather","Shadow","Friend","Labyrinth","Mountain","Hope","Boot","Gauntlet"
          ];

          var randomSelection = Math.floor(Math.random() * 4)+1;
          var ResultString = "";
          if(randomSelection == 1) {
            randomSelection = Math.floor(Math.random() * innAdjective.length)
            ResultString = "The";
            ResultString += " " + innAdjective[randomSelection];
            randomSelection = Math.floor(Math.random() * innNoun1a.length)
            ResultString += " " + innNoun1a[randomSelection];
          }
          else if(randomSelection == 2) {
            randomSelection=Math.floor(Math.random() * 2)+1;

            if(randomSelection == 1) {
              randomSelection = Math.floor(Math.random() * innNoun1a.length)
              ResultString = "The";
              ResultString += " " + innNoun1a[randomSelection];
              randomSelection = Math.floor(Math.random() * innNoun1b.length)
              ResultString += " and the " + innNoun1b[randomSelection];
            }
            else {
              randomSelection = Math.floor(Math.random() * innNoun1a.length)
              ResultString = "The";
              ResultString += " " + innNoun1a[randomSelection];
              randomSelection = Math.floor(Math.random() * innNoun1b.length)
              ResultString += " and " + innNoun1b[randomSelection];
            }
          }
          else if(randomSelection == 3) {
            randomSelection=Math.floor(Math.random() * 2)+1;
            if(randomSelection == 1) {
              randomSelection = Math.floor(Math.random() * innNoun1a.length)
              ResultString = "The";
              ResultString += " " + innNoun1a[randomSelection] + "\'s";
              randomSelection = Math.floor(Math.random() * innNoun2.length)
              ResultString += " " + innNoun2[randomSelection];
            }
            else {
              randomSelection = Math.floor(Math.random() * innNoun1a.length)
              ResultString = "The";
              ResultString += " " + innNoun1a[randomSelection];
              randomSelection = Math.floor(Math.random() * innNoun2.length)
              ResultString += " and the " + innNoun2[randomSelection];
            }
          }
          else if(randomSelection == 4) {
            randomSelection = Math.floor(Math.random() * innVerb.length)
            ResultString = "The";
            ResultString += " " + innVerb[randomSelection];
            randomSelection = Math.floor(Math.random() * innNoun1a.length)
            ResultString += " " + innNoun2[randomSelection];
          }
          return ResultString;


        });
    });
  });
  });

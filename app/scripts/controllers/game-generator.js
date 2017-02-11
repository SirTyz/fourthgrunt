'use strict';

/**
 * @ngdoc function
 * @name fourthgruntApp.controller:GameGeneratorCtrl
 * @description
 * # GameGeneratorCtrl
 * Controller of the fourthgruntApp
 */
angular.module('fourthgruntApp')
  .controller('GameGeneratorCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(document).ready(function(){
  //Creates a male name on press
  $(".inputButton").click(function(){
        $(".randomGameInfo").html(function(){
          //Main rolls
          var gamePlayedWith = [
            "A deck of over 100 cards.","A deck of 53 cards.","A deck of 52 cards.","A deck of 24 cards.","A deck of 22 cards.","A deck with a variable number of cards.","A pair of dice.","Several dice.","Several dice, pencils, and paper.","One or two dice and a board with pieces.","A board with sets of matching pieces.","A board with sets of individual pieces."
          ];
          var gameRules = [
            "Players have the opportunity to bet once on each player's turn.","Players have several opportunities to bet on each player's turn.","Players have several opportunities to bet each round.","Players must bet before the round is played.","Players must bet before the game begins.","Spectators bet as often as players do.","Spectators typically place bets before the game begins.","Spectators often place bets while the game is in progress.","Cheating is extremely rare or impossible.","Cheating is difficult, and often occurs with the help of someone else in the room.","Cheating is common.","Cheating is encouraged."
          ];
          var gameKnownFor = [
            "High stakes gambling.","Low stakes, social gambling.","Its simple set of rules.","Its complicated set of rules.","The ease with which anyone can learn to play.","Its class of expert players and their elaborate strategies.","A celebrated instance of cheating that launched a war.","A celebrated instance of cheating that prevented a war.","A legendary match involving a king or queen.","A legendary match involving a witch or wizard."
          ];
          var gamePopularity = [
            "Sailors and pirates.","Fishermen and dockworkers.","Thieves and knaves.","Knights and lords.","Peasants.","Dwarves.","Miners and smiths.","Goblins and hobgoblins.","Elves.","Noblewomen.","Masons and stonecutters.","Mages and priests."
          ];
          var gameOrigin = [
            "Long ago in this region.","Long ago in a foreign land.","Long ago in an unknown location.","In the recent past in this region.","In the recent past in this very room.","In the recent past in a foreign land.","Down along the docks of a bustling port city.","In a quaint country inn.","In rough-and-tumble urban tavern.","Along a trade route to an exotic land.","In the court of a mighty king or queen.","In the mind of a half-mad wizard."
          ];
          //If the game is a card game
          var cardTurn = [
            "Plays a card from his or her hand face up or face down on the table.","Draws one or more cards from a personal deck.","Draws one card from a community deck.","Draws a card from a community deck if he or she has no other plays.","Places a card from his or her hand into the discard pile.","Lays down a pair, a three or four of a kind, or a straight on the table.","Lays down a card to build threes and fours of a kind or straights on the table."
          ];
          var cardWin = [
            "Play all the cards in his or her hand.","Be holding the highest score at the end of the hand.","Be holding the score closest to a target score.","Hold all the cards in the deck.","Win the most tricks over the course of a round.","Be holding the lowest score at the end of the hand.","Bluff and bet their way to having the lowest scoring hand.","Bluff and bet there way to being the highest scoring hand."
          ];
          var cardHighest = [
            "The dragon.","The lord.","The crown.","The queen.","The alchemist.","The knight.","The champion.","The eagle."
          ];
          var cardLowest = [
            "The worm.","The beggar.","The rat.","The fool.","The crone.","The devil.","The villain.","The pigeon."
          ];
          //If the game is a dice game
          var dieTurn = [
            "Rolls once.","Rolls twice, keeping the better results.","Rolls once or twice, keeping the second result on a reroll.","Rolls at the same time as other players.","Rolls and hides the results from other players.","Rolls and hides the results from him- or herself and from other players.","Rolls and hides the results from him- or herself but not from the other players.","Rolls and waits for an arbiter to make a ruling."
          ];
          var dieWin = [
            "Have rolled the highest score in play.","Roll the highest possible score.","Roll the lowest possible score.","Have rolled the lowest score in play.","Achieve a target score over the succession of many rolls.","Outscore his or her opponents over the succession of many rolls.","Bluff and bet their way to having the lowest remaining score.","Bluff and bet there way to being the highest remaining score."
          ];
          var dieHighest = [
            "The dragon.","The keep.","The warship.","The maiden.","The thunder.","The shark.","The tower.","The sorcerer."
          ];
          var dieLowest = [
            "The snake.","The thief.","The dinghy.","The hag.","The ghost ship.","The tuna.","The pits.","The demon."
          ];
          //If the game is a board game
          var boardTurn = [
            "Moves one of his or her pieces on the board.","Places a piece on the board.","Moves two or more of his or her pieces on the board.","Places two or more pieces on the board.","Removes one or more of his or her opponent's pieces by encircling it or flanking it.","Halts his or her opponent's progress by encircling or flanking one or more of the opponent's pieces.","Converts one or more of his or her opponent's pieces by encircling it or flanking it.","Moves his or her piece closer to a destination space on the board."
          ];
          var boardWin = [
            "Capture all of his or her opponents pieces.","Kill all of his or her opponents pieces.","Race his or her opponent's pieces through a labyrinth of obstacles.","Maneuver pieces to the far side of his or her opponent's territory.","Capture his or her opponent's headquarters.","Kill his or her opponent's commanding piece.","Score points while navigating pieces through a labyrinth.","Claim territorial positions with pieces before his or her opponent does."
          ];
          var boardHighest = [
            "The dragon.","The warhorse.","The warlord.","The mastermind.","The queen.","The dark lord.","The treasure chest.","The sword."
          ];
          var boardLowest = [
            "The minion.","The foot soldier.","The goblin.","The goon.","The guard.","The skeleton.","The trap.","The club."
          ];


          var randomSelection = Math.floor(Math.random() * gamePlayedWith.length);
          var result = "";
          if(randomSelection == 0 || randomSelection == 1 || randomSelection == 2 || randomSelection == 3 || randomSelection == 4 || randomSelection == 5) {
            result += "The game is played with " + gamePlayedWith[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameRules.length);
            result += "In the game " + gameRules[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameKnownFor.length);
            result += "The game is known for " + gameKnownFor[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gamePopularity.length);
            result += "The game is popular among " + gamePopularity[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameOrigin.length);
            result += "The game originated " + gameOrigin[randomSelection] + "<br>";

            //game specific information
            var randomSelection = Math.floor(Math.random() * cardTurn.length);
            result += "On each turn the player " + cardTurn[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * cardWin.length);
            result += "To win the game, a player must " + cardWin[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * cardHighest.length);
            result += "The highest card or hand is called " + cardHighest[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * cardLowest.length);
            result += "The lowest card or hand is called " + cardLowest[randomSelection] + "<br>";
          }
          else if(randomSelection == 6 || randomSelection == 7 || randomSelection == 8) {
            result += "The game is played with " + gamePlayedWith[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameRules.length);
            result += "In the game " + gameRules[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameKnownFor.length);
            result += "The game is known for " + gameKnownFor[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gamePopularity.length);
            result += "The game is popular among " + gamePopularity[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameOrigin.length);
            result += "The game originated " + gameOrigin[randomSelection] + "<br>";

            //game specific information
            var randomSelection = Math.floor(Math.random() * dieTurn.length);
            result += "On each turn the player " + dieTurn[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * dieWin.length);
            result += "To win the game, a player must " + dieWin[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * dieHighest.length);
            result += "The highest roll is called " + dieHighest[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * dieLowest.length);
            result += "The lowest roll is called " + dieLowest[randomSelection] + "<br>";
          }
          else {
            result += "The game is played with " + gamePlayedWith[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameRules.length);
            result += "In the game " + gameRules[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameKnownFor.length);
            result += "The game is known for " + gameKnownFor[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gamePopularity.length);
            result += "The game is popular among " + gamePopularity[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * gameOrigin.length);
            result += "The game originated " + gameOrigin[randomSelection] + "<br>";

            //game specific information
            var randomSelection = Math.floor(Math.random() * boardTurn.length);
            result += "On each turn the player " + boardTurn[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * boardWin.length);
            result += "To win the game, a player must " + boardWin[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * boardHighest.length);
            result += "The most powerful piece or winning maneuver is called " + boardHighest[randomSelection] + "<br>";
            var randomSelection = Math.floor(Math.random() * boardLowest.length);
            result += "The weakest piece or biggest blunder is called " + boardLowest[randomSelection] + "<br>";
          }
          return result;
  });
});
});
});

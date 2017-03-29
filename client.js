window.onload = function() {

  var socket = io.connect();

  var app = new Vue({
    el: "#app",
    data: {
      Usernames : [],
      PlayerUser : '',
      EnemyPlayerUser : '',
      TicTacToeM : new TicTacToe(),
      Chatmessages : [],
      enemyFound : false,
      playerWon : false,
      isTie : false,
      WonPlayername : ''
      /*
      Chatmessage = {
      user : 'Fritz',
      message : 'Penis'},
      */
    },
    methods: {
      sendMessage : function( message ) {
        //PlayerUser sendet die Nachricht "message" an EnemyPlayerUser
        //Rückgabe : Keine Parameter

      },
      sendMove : function ( fieldNr ) {
        //PlayerUser sendet seinen Zug an EnemyPlayerUser

      },
      fieldPressed : function ( fieldNr ) {
        //Zug prüfen -> Spielfeld aktualisieren -> Zug senden
      }
    }
  })
};

class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
static updatecarAtEnd(rank){
    database.ref('/').update({
      carAtEnd: rank
    });

}
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getcarAtEnd(){
  var carAtEndRef = database.ref('carAtEnd');
  carAtEndRef.on("value",(data)=>{
    this.rank = data.val();
    console.log(this.rank)
  }

  )}
}

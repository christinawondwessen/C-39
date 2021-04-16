class Player{
 constructor(){
    // addition 1
   this.index = null;
   this.distance = 0;
   this.name = null;
 }

 getCount(){
 var playerCountRef=database.ref('playerCount');
 playerCountRef.on("value",(data)=>{
 playerCount=data.val();
  }) 
}

updateCount(count){
database.ref('/').update({
playerCount:count
});
 }

update() {
var playerIndex="players/player" + this.index;
//console.log(playerIndex);

database.ref(playerIndex).set({
 name:this.name,
 distance:this.distance  
});
}


static getPlayerInfo(){
var playerInfoRef = database.ref('players');
playerInfoRef.on("value",(data)=>{
   allPlayers=data.val(); 
})
}
}

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
   }
   

// SOLUTION
Ship.prototype.isWorthIt = function(){
   return this.draft-(this.crew*1.5) > 20;
}
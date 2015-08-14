var catFactory = function (age, furColor, favoriteFood) {
  return {
    age: age,
    furColor: furColor,
    favoriteFood: favoriteFood,
    indulge: function () {
      this.eat(this.favoriteFood)
    },
    meow: function() {
      console.log('meowww');
    },
    eat: function(food) {
      console.log('Yum, I love ' + food);  
    },
    sleep: function(numMinutes) {
      for (var i = 0; i < numMinutes; i++) {
        console.log('z');
      }
    }
  }
};


var lizzieTheCat = catFactory(18 ,'grey');
var daemon = catFactory(1 ,'orange', 'liver');

daemon.indulge(); //yum, I ove Liver


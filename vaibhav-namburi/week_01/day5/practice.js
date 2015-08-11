function Dog(name,color,breed){
	this.breed=breed;
};

function Cat(name,color){};

function Animal(name,color){

	this.name=name;
	this.color=color;
	this.logger = function(){
		console.log("inherited");
	}


};

Dog.prototype = new Animal();

Dog.prototype.constructor = Dog;

var alex = new Dog("alex", "golden", "golden retriever");

alex={



}
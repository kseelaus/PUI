
var pics = ["animal-animal-portrait-close-up-260143.jpg", "animal-animal-world-blur-209246.jpg","animal-animal-world-close-up-356173.jpg","animal-autumn-close-up-134061.jpg","animal-bristle-close-up-207016.jpg","animal-cute-hedgehog-50577.jpg"]
var names = ["Bruce","Mr. Pickles", "Gandalf", "Josephine", "Benedict", "Chewbacca"]
var ages = [1, 6, 2, 45, 3, 17]

class Hedgehog{
    constructor(pic, name, age){
        this.pic = pic
        this.name = name
        this.age = age
    }
}

function getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));

}

$(document).ready(()=>{
    console.log("ready")

    var animal = new Hedgehog(pics[getRandomInt(pics.length)], names[getRandomInt(names.length)], ages[getRandomInt(ages.length)])
    console.log(animal)
    $("#animal-img").attr("src", animal.pic);
    $("#animal-age").text(animal.age+" years old");
    $("#animal-name").text(animal.name);
});
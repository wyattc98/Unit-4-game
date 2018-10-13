//Global Variables
var givenNumber = Math.floor((Math.random() * 100) + 30);
var addedSum = ' ';
var crystalValues = [];
var wins = '';
var losses = '';
console.log(givenNumber);

$(document).ready(function() {
  var crystalValues = [];

    //Function to set a generated number
    $("#generated-number").on('click', function(){
     $('#generated-number').html(givenNumber);
    });
    
    //Function to set crystal values
    $("#crystal1").on('click', function() {
      var firstCrystal = Math.floor(Math.random() * Math.floor(10));
      var value = firstCrystal
      crystalValues.push(value);

    });

    $('#crystal2').on('click', function() {
        var secondCrystal = Math.floor(Math.random() * Math.floor(10));
        var value = secondCrystal;
        crystalValues.push(value);

      });

    $('#crystal3').on('click', function() {
      var thirdCrystal = Math.floor(Math.random() * Math.floor(10));
      var value = thirdCrystal
      crystalValues.push(value);
    });

    $('#crystal4').on('click', function() {
      var fourthCrystal = Math.floor(Math.random() * Math.floor(10));
      var value = fourthCrystal;
      crystalValues.push(value);
    });

    $('#added-value').text(addedSum);

    //Add Crystal Values up
    var crystalSum = function (){
       for (var i = 0; i < crystalValues.length;i++) {
          function addValues() {
          var total = crystalValues[0] + crystalValues[1] + crystalValues[2] + crystalValues[3];
          var returnValue = ' '
          returnValue = total;
          $('#added-value').innerHTML(returnValue)
          
        }
      }
    } 
    console.log(crystalValues);


   

    
    


    

    
    //Increment Wins and Losses
    if(addedSum === givenNumber) {
      wins++;
      alert('You Win!')
    }

    if(addedSum > givenNumber) {
        losses++;
        alert('You Lose!')
    }
  
    //Game reset


});

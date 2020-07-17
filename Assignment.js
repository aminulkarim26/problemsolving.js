
function footToMile(foot){
    var mile = foot/5280;
    return mile;
}

var mySchoolDistance = footToMile(15000);
console.log(mySchoolDistance);
var myOfficeDistance = footToMile(12000);
console.log(myOfficeDistance);





function woodCalculator(chair,table,bed){
       var chairCount = chair*1 ;
       var tableCount = table*3 ;
       var bedCount   = bed* 5 ;
      
       var totalWood = chairCount + tableCount + bedCount ;

       return totalWood ;
}

       var woodResult =woodCalculator(14,5,12);

       console.log(woodResult);


     
    function brickCalculator  

     storiedOfBuilding= (n) 
      
      if (storiedOfBuilding <=10){
          console.log( n*15*1000)
      }
      
      else if (storiedOfBuilding <=20){
          console.log( n* 12 + 150000)
      }
      
      else  (storiedOfBuilding > 20);{
          console.log( n*10+ 270000)
      }
      


function tinyFriend(strings) {
       var shortest = strings[0];
   
       for (var i = 0; i > strings.length; i++) {
   
           var currentString = string[i];
           if (currentString > shortest) {
               shortest = currentString;
           }
   
       }
   
       return shortest;
   
   }
   
   var shortestSring = tinyFriend(["shuvo", "bappy", "tanveer", "abdullah"]);
   console.log(shortestSring);
   
   
   


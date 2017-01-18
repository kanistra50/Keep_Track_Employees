// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope) {

  $scope.currentPage = 1;
  $scope.pageSize = 4;
  $scope.cards = [];
  var resource = [
            {       id: 1001, 
                  name: "Ivanov Ivan Ivanovich", 
                gender: "male",
                contacts: "+380665553322",
                 dateRec: "10-05-2014",
                     day: "Monday",
               timeBegin: "09-00",
                 timeEnd: "18-00",
             departament: ["Legal", "chief"]},
                     
              {       id: 1002, 
                  name: "Andreyev Andrey Andreyevich", 
                gender: "male",
                contacts: "+380551113322",
                 dateRec: "10-05-2014",
                     day: "Monday",
               timeBegin: "08-00",
                 timeEnd: "17-00",
            departament: ["Marketing", "chief"]},

              {       id: 1003, 
                  name: "Petrov Petr Petrovich", 
                gender: "male",
                contacts: "+380665553322",
                 dateRec: "10-05-2014",
                     day: "Monday",
               timeBegin: "08-30",
                 timeEnd: "17-30",
            departament: ["Logistic", "chief"]},
            
              {       id: 1004, 
                  name: "Nikolayev Nikolay Nikolayevich", 
                gender: "male",
                contacts: "+380665553322",
                 dateRec: "10-05-2014",
                     day: "Monday",
               timeBegin: "09-30",
                 timeEnd: "18-30",
             departament: ["Logistic", "employee"]},    
              
              {       id: 1005, 
                  name: "Aleksandrov Aleksandr Aleksandrovich", 
                gender: "male",
                contacts: "+380665553322",
                 dateRec: "10-05-2014",
                     day: "Monday",
               timeBegin: "14-00",
                 timeEnd: "22-00",
             departament: ["Head", "Director"]},     

              {       id: 1006, 
                  name: "Popova Irina Fedorovna", 
                gender: "female",
                contacts: "+380665553322",
                 dateRec: "10-05-2014",
                     day: "Monday",
               timeBegin: "10-00",
                 timeEnd: "19-00", 
             departament: ["HR", "employee"]},   

              {       id: 1007, 
                  name: "Ahuzarova Janna Khasanovna", 
                gender: "female",
                contacts: "+380118883322",
                 dateRec: "10-05-2014",
                     day: "Monday",
               timeBegin: "09-00",
                 timeEnd: "18-00",
             departament: ["PR", "employee"]},         
          ];
  $scope.main = true;

  for (var i = 1; i <= resource.length; i++) {
          console.log(resource[i-1].name);
      $scope.cards.push([i, resource[i-1].name, resource[i-1].timeBegin+' - '+ resource[i-1].timeEnd]);
  };
  
  $scope.newRecord = function () {
     $scope.id_Num= 1001 + resource.length;
     console.log(unique($scope.id_Num));
  };

  function unique (id_name) {
    for (var i=0; i < resource.length; i++ )  
        if (id_name != resource[i].id) 
           return true
         else return false
  };
  
  $scope.editCard = function (card) { 
      //////////////////////
      var j = $scope.cards.indexOf(card);   
      $scope.id_Num= resource[j].id;
      console.log(unique($scope.id_Num));
      $scope.tempCard = resource[j];
          console.log(tempCard);
          $scope.tempCard.name; 
          $scope.tempCard.gender;
          $scope.tempCard.contacts;
          $scope.tempCard.day;
          $scope.tempCard.timeBegin;
          $scope.tempCard.timeEnd;
      
      
  };

  $scope.save = function () {
    var j = resource.length;

    if (unique($scope.id_Num)) {
                resource.push({id: 1001 + j, 
                          name: $scope.tempCard.name, 
                        gender: $scope.tempCard.gender,
                      contacts: $scope.tempCard.contacts,
                      dateRec: new Date(), 
                          day: $scope.tempCard.day,
                    timeBegin: $scope.newTimeBegin,
                      timeEnd: $scope.newTimeEnd,
                  departament: ["default", "employee"]})
        
        console.log($scope.resource[j]);

        $scope.cards.push([j+1, resource[j].name, resource[j].timeBegin+' - '+resource[j].timeEnd]);
        $scope.tempCard.name = ''; 
        $scope.tempCard.gender = '';
        $scope.tempCard.contacts = '';
        $scope.tempCard.day = '';
        $scope.newTimeBegin = '';
        $scope.newTimeEnd = '';

    } else {
      ///////////////////
        var ind = resource.indexOf(card)
        resource[$scope.cards.indexOf(card)] = $scope.tempCard;
          console.log($scope.tempCard);
          console.log(resource);
        /*  $scope.c.push([j+1, resource[j].name, resource[j].timeBegin+' - '+resource[j].timeEnd]);
          $scope.tempCard.name, 
                        gender: $scope.tempCard.gender,
                      contacts: $scope.tempCard.contacts,
                      dateRec: new Date(), 
                          day: $scope.tempCard.day,
                    timeBegin: $scope.newTimeBegin,
                      timeEnd: $scope.newTimeEnd,  */
    }
    
  };    
  
  $scope.removeCard = function(card) {
      $scope.cards.splice($scope.cards.indexOf(card), 1);
  };
  
  $scope.pageChangeHandler = function(num) {
  };
};

function OtherController($scope) {
    $scope.pageChangeHandler = function(num) {
    };
};

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);

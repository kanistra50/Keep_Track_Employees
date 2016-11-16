
var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

   //myApp.factory('getData', function($http) {
   //return $http.get("Backend.json");
   //});
function MyController($scope) {

    $scope.currentPage = 1;
    $scope.pageSize = 4;
    $scope.cards = [];
    var index, 
     // Initial config
    //var config = {
    //pkg: grunt.file.readJSON('package.json')
    //}
    resource = [{       
        id: 1001, 
        name: "Ivanov Ivan Ivanovich", 
        gender: "male",
        contacts: "+380665553322",
        dateRec: "2014-05-10",
        day: "Monday",
        timeBegin: "09-00",
        timeEnd: "18-00",
        departament: ["Legal", "chief"]
      },{       
        id: 1002, 
        name: "Andreyev Andrey Andreyevich", 
        gender: "male",
        contacts: "+380551113322",
        dateRec: "2014-05-10",
        day: "Monday",
        timeBegin: "08-00",
        timeEnd: "17-00",
        departament: ["Marketing", "chief"]
      },{       
        id: 1003, 
        name: "Petrov Petr Petrovich", 
        gender: "male",
        contacts: "+380665553322",
        dateRec: "2014-05-10",
        day: "Monday",
        timeBegin: "08-30",
        timeEnd: "17-30",
        departament: ["Logistic", "chief"]
      },{    
        id: 1004, 
        name: "Nikolayev Nikolay Nikolayevich", 
        gender: "male",
        contacts: "+380665553322",
        dateRec: "2014-05-10",
        day: "Monday",
        timeBegin: "09-30",
        timeEnd: "18-30",
        departament: ["Logistic", "employee"]
      },{       
        id: 1005, 
        name: "Aleksandrov Aleksandr Aleksandrovich", 
        gender: "male",
        contacts: "+380665553322",
        dateRec: "2014-05-10",
        day: "Monday",
        timeBegin: "14-00",
        timeEnd: "22-00",
        departament: ["Head", "Director"]
      }, {
        id: 1006, 
        name: "Popova Irina Fedorovna", 
        gender: "female",
        contacts: "+380665553322",
        dateRec: "2014-05-10",
        day: "Monday",
        timeBegin: "10-00",
        timeEnd: "19-00", 
        departament: ["HR", "employee"]
      },{       
        id: 1007, 
        name: "Ahuzarova Janna Khasanovna", 
        gender: "female",
        contacts: "+380118883322",
        dateRec: "2014-05-10",
        day: "Monday",
        timeBegin: "09-00",
        timeEnd: "18-00",
        departament: ["PR", "employee"]
      }];

    for (var i = 0; i < resource.length; i++) {
        //console.log(resource[i-1].name);
        $scope.cards.push([
          resource[i].name, 
          resource[i].timeBegin+' - '+ resource[i].timeEnd
          ]);
    };

    $scope.newRecord = function () {

        if ($scope.tempCard !== undefined) {
           clearing();
        };
          
        index = resource.length;
        $scope.id_Num = 1001 + index;
        
        console.log("START ADD. Total NUMBER of ELEMENTS - "+index);
    };

    $scope.editCard = function (card) { 

        index = $scope.cards.indexOf(card);  
        console.log("SELECTED  for EDIT 'card' "+(index+1)+":  cards["+index+"] = [" + card+"];");
        $scope.tempCard = resource[index];
        $scope.id_Num = resource[index].id;
        console.log($scope.tempCard);
        console.log("START EDIT. NUMBER of ELEMENTS - "+resource.length);
    };

    $scope.save = function () {
        if ( unique(index) ) {

                Object.assign(resource[index], $scope.tempCard);
                
                $scope.cards[index] = [
                    resource[index].name, 
                    resource[index].timeBegin+' - '+ resource[index].timeEnd
                    ];
                console.log("SAVE EDIT CELL of resource["+index+"];");
                console.log(resource[index]);
                console.log("END EDIT. NUMBER of ELEMENTS - "+resource.length);

            } else {
                var j = resource.length;
                resource.push({id: 1001 + j, 
                            name: $scope.tempCard.name, 
                          gender: $scope.tempCard.gender,
                        contacts: $scope.tempCard.contacts,
                        dateRec: new Date().toISOString().slice(0,10), 
                            day: $scope.tempCard.day,
                      timeBegin: $scope.tempCard.timeBegin,
                        timeEnd: $scope.tempCard.timeEnd,
                    departament: ["default", "employee"]
                });
                $scope.cards.push([
                    resource[j].name, 
                    resource[j].timeBegin+' - '+resource[j].timeEnd
                    ]);
                console.log("SAVE ADDED as NEW CELL to resource["+j+"];");
                console.log("END ADD. NUMBER of ELEMENTS - "+resource.length);
            };
        //console.log($scope.cards);
    }; 
    
    $scope.cancelRecord = function () {

        clearing ();
    };

    function unique (id_name) {

        if (resource[id_name] !== undefined){
            console.log("CHECKING if resource[] has Index " + id_name+": "+true);
            return true;
        } else {
            console.log("CHECKING if resource[] has Index " + id_name+": "+false);
            return false;}
    };

    function clearing () {
        //Clear the cells in tempCard for new record
        $scope.tempCard.name = ''; 
        $scope.tempCard.gender = '';
        $scope.tempCard.contacts = '';
        $scope.tempCard.day = '';
        $scope.tempCard.timeBegin = '';
        $scope.tempCard.timeEnd = '';
    };

    $scope.removeCard = function(card) {
        //console.log(resource);
        //console.log($scope.cards);
        resource.splice($scope.cards.indexOf(card), 1);
        //console.log(resource);
        //console.log($scope.cards);
        $scope.cards.splice($scope.cards.indexOf(card), 1);
        //console.log(resource);
        //console.log($scope.cards);
    };
    
    $scope.pageChangeHandler = function(num) {
    };

};

function OtherController($scope) {
    $scope.pageChangeHandler = function(num) {
    }
};

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);

console.log("APP LOADED");

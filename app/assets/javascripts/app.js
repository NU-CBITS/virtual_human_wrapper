window.App = angular.module('VirtualHuman', ['ngResource']).filter('orderObjectBy', [function(){
 return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return array;
 }
}]).factory("shareLesson", function(){

  return {shared:{name: null, lesson_finished: false, sim_coach_finished: true, display: false}}
});

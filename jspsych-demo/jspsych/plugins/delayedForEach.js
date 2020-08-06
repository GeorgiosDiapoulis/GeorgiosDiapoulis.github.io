/**
 * An array forEach with a delay between steps.
 *
 * @param {Function} callback Function to execute for each element. It receives three arguments, the element value, the element index and the array being traversed, respectivily.
 * @param {Number} timeout Number of milliseconds that the function call should be delayed by.
 * @param {Object} thisArg Object to use as this when executing callback.
 * @this {Array}
 * @return {undefined}
 */
Array.prototype.delayedForEach = function(callback, timeout, thisArg){
  var i = 0,
    l = this.length,
    self = this,
    caller = function(){
      callback.call(thisArg || self, self[i], i, self);
      (++i < l) && setTimeout(caller, timeout);
    };
  caller();
};

/*
>>>  https://gist.github.com/fernandosavio/6011834
=== Usage ===
var numbers = [100, 2,"abc", 4, true];
numbers.delayedForEach(function(elem, index, array){
  console.log("this = " + this);
  console.log("elem = " + elem);
  console.log("index = " + index);
  console.log("array = " + array);
}, 1000);
var myScope = {foo: "bar"};
numbers.delayedForEach(function(){ console.log(this); }, 1000, myScope);
*/

// let testArray = [1,2,3,4];

// testArray.delayedForEach(function(num) {
//     console.log(num);
// }, 1000, null, function() {
//     console.log("done!");
// });

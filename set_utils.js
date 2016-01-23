var setUtils = (function(){
    var intersection = function(setA, setB){
	return new Set([x for (x of setA) if (setB.has(x))]);
    }
    var difference = function(setA, setB){
	return new Set([x for (x of setA) if (!setB.has(x))]);
    }

    return { intersection : intersection, 
	     difference : difference }
})();
'use strict';

function collect_all_even(collection) {
    var put=[];

    for(var i=0;i<collection.length;i++){

        if(collection[i]%2===0){
            put.push(collection[i]);
        }
    }

    return put;
}

module.exports = collect_all_even;

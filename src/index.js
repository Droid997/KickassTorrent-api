'use strict';
const rp = require('request-promise');

class getAJAX{
    static getData(url){
        return new Promise(function(_resolve,_reject){
            rp(url).then(data=>{
                _resolve(data);
            }).catch(error=>{
                _reject(error);
            })
        })
        
    }
}

module.exports.getData=getAJAX.getData;



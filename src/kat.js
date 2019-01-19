'use strict';
const parser = require('./parser');
const rp=require('./index');
const qStringfy = require('query-string');

class kickass{
   
static getCategories()
{
   return kickass.Categories;
}

static getOptions()
{
    return kickass.Options;
}
static setURL(uri)
{
    return kickass.baseURL+uri;
}

static getMovies(options=undefined)
{
    var uri;
    var category=kickass.Categories.Movies;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
   
}

static getTvTorrents(options=undefined)
{
    var uri;
    var category=kickass.Categories.TV;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}

static getGames(options=undefined)
{
    var uri;
    var category=kickass.Categories.GAMES;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}

static getMusic(options=undefined)
{
    var uri;
    var category=kickass.Categories.MUSIC;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}

static getLatest(options=undefined)
{
    var uri;
    var category=kickass.Categories.Latest;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}

static getApps(options=undefined)
{
    var uri;
    var category=kickass.Categories.Apps;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}

static getXXX(options=undefined)
{
    var uri;
    var category=kickass.Categories.XXX;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}


static getBooks(options=undefined)
{
    var uri;
    var category=kickass.Categories.Books;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}

static getOthers(options=undefined)
{
    var uri;
    var category=kickass.Categories.Other;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}

static getTop100(options=undefined)
{
    var uri;
    var category=kickass.Categories.Top100;
    if(options!==undefined)
    {
        let page=options.page===undefined?1:options.page;
        var options={
        field:options.field===undefined?undefined:options.field,
        order:options.order===undefined?'desc':options.order
        }
        let query=qStringfy.stringify(options);
        uri=kickass.baseURL+category+"/"+page+"?"+query;
    }else
        uri=kickass.baseURL+category+"/";

    return new Promise(function(resolve,reject){
        console.log(uri);
       kickass.getRequest(uri).then(html=>{
            let parsedData=parser.getParsedData(html);
            parsedData['category']=category;
            console.log(parsedData);
            resolve(parsedData);
        }).catch(error=>{
             reject(error);
            
        })
    })
}

static getRequest(url)
{
    return rp.getData(url);
}

}


kickass.Categories={
    Movies:"movies",
    TV:"tv",
    GAMES:"games",
    MUSIC:"music",
    Latest:"new",
    Apps:"applications",
    XXX:"xxx",
    Books:"books",
    Other:"other",
    BROWSE:"full",//not yet implemented
    Top100:"top100"
};

kickass.Options={
    Fields:{
        Size:"size",
        Age:"time_add",
        Seed:"seeders",
        Leech:"leechers"
    },
    Order:{
        Ascending:"asc",
        Descending:"desc"
    },
    
};

kickass.baseURL='https://kat2.biz/';


console.log(kickass.getTop100());
//console.log(kickass.getMovies({page:1,field:kickass.Options.Fields.Size,order:kickass.Options.Order.Ascending}));
//console.log(kickass.getMovies());


module.exports.getCategories=kickass.getCategories();
module.exports.baseURL=kickass.baseURL;


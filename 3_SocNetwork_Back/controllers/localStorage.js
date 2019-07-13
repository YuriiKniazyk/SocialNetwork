if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

localStorage.setObjItem = (key, obj) =>{
    let str = JSON.stringify(obj);
    localStorage.setItem(key, str);  
}

localStorage.getObjItem = (key) =>{
    let str = localStorage.getItem(key);
    return JSON.parse(str);
}

module.exports = localStorage;
'use strict';
/*
 * AJaX object
 * @author NML 
 * @Date Nov 2019
 * With a twist from Nadia + 2xMorten
 */
let Ajax = {
    init() {
        this.ajaxobj = false;
        try {
            this.ajaxobj = new XMLHttpRequest();
        } catch(err) {
            window.alert(err.message + " Get yourself a browser ;)");
        }
    },
    
/*
 * method: getFile
 * @param filename: url of wanted file
 * @param callback: function to handle response
 */
    getFile(filename, callback) {
        try {
            this.ajaxobj.addEventListener('load', function(ev) {    
                callback(ev);
            });
            this.ajaxobj.open("GET", filename);
            this.ajaxobj.send("");
        } catch(err) {
            window.alert(err.message + 'WTF');
        } 
    }
}

let getNewContent = function(filename, handler) {
    let req = Object.create(Ajax);
    req.init();
    req.getFile(filename, handler);
}


export {Ajax, getNewContent};

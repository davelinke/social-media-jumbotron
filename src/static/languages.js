import store from '../store';
let defaultLang = store.getState().defaults.lang;

let lang = {
    'en-us':{
        terms:{
            'main_title':'Juventus FC'
        }
    }
};
export const write = function(string){
    return lang[defaultLang].terms[string];
};

export const appDefaults = {
    lang:'en-us', // what language to use for the UI
    dataService:'tint' // what data service to use
};

// default value for social feed

export const socialDataDefaults = {
    posts:[]
};

// default values for UI components
export const uiDefaults = {
    appClassName:'loading', // the initial classname of the application
    showHeadingText:false, // should the h1 text be seen?
    intervalLength:8000, //milliseconds
    maxMessageLength:17 //words
};

// constants and methods for data services (just TINT for now)
export const feed = {
    dataService:'tint',
    dataServices:{
        tint:{
            baseUrl:'https://api.tintup.com/v1', // the base api url
            dataType:'jsonp', // the feed data type
            apiToken:'97727f79a88d1c992b1f17e6e709520293e671ae', // the api token for the feed
            feedPath:'feed', // the path for the posts feed
            feedName:'juventusfc', // the name of the posts feed
            backupFeedURL:'./mockup-json-data.js',
            getFeedUrl:function(){ // how to compose the complete feed url
                let feedUrl = this.backupFeedURL;
                // if you have a tint api then uncomment the following line
                // feedUrl = this.baseUrl + '/' + this.feedPath + '/' + this.feedName + '?api_token=' + this.apiToken;
                return feedUrl;
            },
            parseFeed:function(json){ // how should the output of the feed be parsed to return the poper cycling structure
                let returnArray = [];
                for (let i=0; i<json.data.length;i++){
                    let post = json.data[i];
                    let authorObject = JSON.parse(post.author);
                    returnArray.push({
                        state:(i===0?'active':''),
                        image:post.original_image,
                        title:post.title,
                        author:authorObject.name,
                        service:post.social_id.split('_')[0]
                    });
                }
                return returnArray;
            }
        }
    }
};

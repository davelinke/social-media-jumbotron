export const appDefaults = {
    lang:'en-us',
    dataService:'tint'
}

export const feed = {
    dataService:'tint',
    dataServices:{
        tint:{
            baseUrl:'https://api.tintup.com/v1',
            dataType:'jsonp',
            apiToken:'97727f79a88d1c992b1f17e6e709520293e671ae',
            feedPath:'feed',
            feedName:'juventusfc',
            getFeedUrl:function(){
                return this.baseUrl + '/' + this.feedPath + '/' + this.feedName + '?api_token=' + this.apiToken;
            },
            parseFeed:function(json){
                let returnArray = [];
                for (var i=0; i<json.data.length;i++){
                    let post = json.data[i];
                    let authorObject = JSON.parse(post.author);
                    returnArray.push({
                        image:post.image,
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

export const socialDataDefaults = {posts:[]};

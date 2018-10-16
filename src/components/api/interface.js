import store from '../../store';
import fetchJsonp from 'fetch-jsonp';
import {feed} from '../../static/constants';

export const getData = function(backup=false) {
    // get the endopoint URL
    let servConsts = feed.dataServices[feed.dataService];

    // use diverse methods depending on the data type to be fetched
    switch (servConsts.dataType) {
        // lets default to jsonp which is the one we are going to use in the exercise
        default:
            let feedUrl = servConsts.getFeedUrl(backup);
            fetchJsonp(feedUrl, {
                jsonpCallbackFunction: 'callback',
              })
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    // parse the data with the service specific function
                    let parsedData = servConsts.parseFeed(json);
                    // send the data to the store
                    store.dispatch({
                        type: 'SOCIAL_DATA_SET',
                        value: parsedData
                    });
                    // exit loading screen
                    store.dispatch({
                        type:'UI_SET',
                        value:{appClassName:'run'}
                    });
                })
                .catch((ex)=>{
                    // if there's an error, implement error handling here
                    console.log(ex);
                    // go for the backup feed
                    getData(true);
                });
        ;
    }
}

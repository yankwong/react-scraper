import axios from "axios";

const BASEURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const APIKEY  = '?api-key=6da9749f50504b4dbb5a54c1588695fc';

export default {
  // get articles
  getArticles: function(query = '') {
    return axios.get(BASEURL + APIKEY + query);
  },

  saveArticle: function(articleObj) {
    console.log('API: axios doing POST', articleObj);
    return axios.post('/api/articles', articleObj);
  },

  getSavedArticles: function() {
    console.log('API: getting saved articles');
    return axios.get('/api/articles');
  },

  deleteSavedArticle: function(id) {
    return axios.post(`/api/delete-article/${id}`);
  }

};

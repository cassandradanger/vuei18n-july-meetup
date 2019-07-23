import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n)

// var language = (window.navigator.userLanguage || window.navigator.language).substring(0,2);
var language = 'de';
var selection = '';

// if a browser language is detected, import (require) that specific JSON file. If no language is detected, default to english
if(language){
  selection = require('../components/languages/' + language + '.lang')
} else {
  selection = require('../components/languages/en.lang')
}

// we are able to access the imported json file by using the object that was assigned to var selectedCountry in the for loop
const messages = {
  locale: {
    message: selection
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'locale',
  messages, 
})

export default i18n;
import Ember from 'ember';
var sites = [{
      headline: "Girl found with stolen goods in Moringa",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6jR0u7iEFebwsNeAPlSuA87bHg3qMH7NIP9ZykrhRiSYZ8axAw",
      author: "Kelvin Munene"
    }, {
      headline: "Who killed Tom Mboya? Suspect confesses",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHK2fXH0khCCw3JKJOfMsvumiNqf3_K6E5OlAjn2sD7HbSigdMw",
      author: "Betty Mutai"
    }, {
      headline: "Will the government allow same sex marriages",
      photo: "http://i2.cdn.turner.com/cnnnext/dam/assets/131211233904-gay-marriage-australia-story-top.jpg",
      author: "Samwel Kinuthia"
}];
export default Ember.Route.extend({
  model() {
    return this.store.findAll('site');
  },
});

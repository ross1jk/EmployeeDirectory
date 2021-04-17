import axios from "axios";
const URL = "https://randomuser.me/api/?results=50?format=PrettyJSON";
// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomUser: function() {
    return axios.get(URL);
  }
}

//[Random User API](https://randomuser.me/),
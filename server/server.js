Meteor.methods({
    fetchFromService: function() {
      var url = "http://store.steampowered.com/api/featuredcategories/?cc=tr";
      //synchronous GET
      var result = Meteor.http.get(url, {timeout:30000});
      if(result.statusCode==200) {
        var respJson = JSON.parse(result.content);
        console.log("response received.");
        return respJson;
      } else {
        console.log("Response issue: ", result.statusCode);
        var errorJson = JSON.parse(result.content);
        throw new Meteor.Error(result.statusCode, errorJson.error);
      }
    },

    fetchFromService2: function() {
      var url2 = "http://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=570";
      //synchronous GET
      var result2 = Meteor.http.get(url2, {timeout:30000});
      if(result2.statusCode==200) {
        var respJson2 = JSON.parse(result2.content);
        console.log("response received.");
        return respJson2;
      } else {
        console.log("Response issue: ", result2.statusCode);
        var errorJson2 = JSON.parse(result2.content);
        throw new Meteor.Error(result2.statusCode, errorJson2.error);
      }
    },

    fetchFromService3: function(userData) {
      var url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=90DA0C94A93355F904C350B4B411DD4F&steamids=" + userData;
      //synchronous GET
      var result = Meteor.http.get(url, {timeout:30000});
      if(result.statusCode==200) {
        var respJson = JSON.parse(result.content);
        console.log("response received.");
        return respJson;
      } else {
        console.log("Response issue: ", result.statusCode);
        var errorJson = JSON.parse(result.content);
        throw new Meteor.Error(result.statusCode, errorJson.error);
      }
    },

    fetchFromService4: function() {
      var url = "http://store.steampowered.com/api/featuredcategories/?cc=tr";
      //synchronous GET
      var result = Meteor.http.get(url, {timeout:30000});
      if(result.statusCode==200) {
        var respJson = JSON.parse(result.content);
        console.log("response received.");
        return respJson;
      } else {
        console.log("Response issue: ", result.statusCode);
        var errorJson = JSON.parse(result.content);
        throw new Meteor.Error(result.statusCode, errorJson.error);
      }
    },

    fetchFromService5: function(userData) {
      var url = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=90DA0C94A93355F904C350B4B411DD4F&format=json&count=3&steamid=" + userData;
      //synchronous GET
      var result = Meteor.http.get(url, {timeout:30000});
      if(result.statusCode==200) {
        var respJson = JSON.parse(result.content);
        console.log("response received.");
        return respJson;
      } else {
        console.log("Response issue: ", result.statusCode);
        var errorJson = JSON.parse(result.content);
        throw new Meteor.Error(result.statusCode, errorJson.error);
      }
    }
});
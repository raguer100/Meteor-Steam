Meteor.subscribe('userStatus');

Meteor.startup(function () {

    Meteor.call('fetchFromService', function(err, respJson) {

		if(err) {

			window.alert("Error: " + err.reason);
			console.log("error occured on receiving data on server. ", err );
		} else {

			var table = document.createElement('tr'), td, row, cell;

			for (row = 0; row < 10; row++) {
				
    			tr = document.createElement('tr');
        			td = document.createElement('td');
        			td.id = "image"+row;
        			tr.appendChild(td);

        			td = document.createElement('td');
        			td.id = "text"+row;
        			tr.appendChild(td);

        			td = document.createElement('td');
        			td.id = "appidList"+row;
        			tr.appendChild(td);
    			document.getElementById('tableLoop').appendChild(tr);

    			var x = respJson.top_sellers.items[row].small_capsule_image;
				var y = respJson.top_sellers.items[row].name;
				var z = respJson.top_sellers.items[row].final_price;
				z = z / 100;

				$("#image" + row).prepend("<img class='img-responsive' src=  "+ x +" />");
				$("#text" + row).prepend(y);
				$("#appidList" + row).prepend(z + "TL");
			}
		}
	});

	Meteor.call('fetchFromService4', function(err, respJson) {

		if(err) {

			window.alert("Error: " + err.reason);
			console.log("error occured on receiving data on server. ", err );
		} else {

			var table = document.createElement('tr'), td, row, cell;

			for (row = 0; row < 10; row++) {
				
    			tr = document.createElement('tr');
        			td = document.createElement('td');
        			td.id = "imagee"+row;
        			tr.appendChild(td);

        			td = document.createElement('td');
        			td.id = "textt"+row;
        			tr.appendChild(td);

        			td = document.createElement('td');
        			td.id = "appidListt"+row;
        			tr.appendChild(td);
    			document.getElementById('tableLoopp').appendChild(tr);

    			var x = respJson.specials.items[row].small_capsule_image;
				var y = respJson.specials.items[row].name;
				var z = respJson.specials.items[row].discount_percent;
				var xz = respJson.specials.items[row].final_price;

				xz = xz / 100;

				$("#imagee" + row).prepend("<img class='img-responsive' src=  "+ x +" />");
				$("#textt" + row).prepend(y);
				$("#appidListt" + row).prepend("%" + z + "("+ xz + "TL)");
			}
		}
	});
});



Template.index.events({
    "submit .userInfo": function(event){
     //userData = $('#userName').val();
     var userData = event.target.title.value;
      if(userData != "") {
        Meteor.call('fetchFromService3', userData, function(err, respJson) {
        	if(err) {

			window.alert("Error: " + err.reason);
			console.log("error occured on receiving data on server. ", err );
			} else {

				var x = respJson.response.players[0].realname;
				var y = respJson.response.players[0].personaname;
				var z = respJson.response.players[0].avatarmedium;
				var u = respJson.response.players[0].personastate;
				var o = respJson.response.players[0].loccountrycode;

				$( "#nameId0" ).replaceWith("<td id='nameId0'>" + x + "</td>");
				$("#nameId1").replaceWith("<td id='nameId1'>" + y + "</td>");
				$("#nameId2").replaceWith("<td id='nameId2'><img class='img-responsive' src=  "+ z +" /></td>");
				if(u == 0) {
					$("#nameId3").replaceWith("<td id='nameId3'>Offline</td>");
				} else {
					$("#nameId3").replaceWith("<td id='nameId3'>Online</td>");
				}
				$("#nameId4").replaceWith("<td id='nameId4'>" + o + "</td>");
			}
      	});

      	Meteor.call('fetchFromService5', userData, function(err, respJson) {
        	if(err) {

			window.alert("Error: " + err.reason);
			console.log("error occured on receiving data on server. ", err );
			} else {

				var x = respJson.response.games[0].name;

				$("#nameId5").replaceWith("<td id='nameId5'>" + x + "</td>");
			}
      	});
      }

      event.target.title.value = "";
      return false;
    },
  });
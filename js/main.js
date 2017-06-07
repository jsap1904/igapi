function instaSearch(){
	var search =  document.getElementById('search').value
	document.getElementById('results').innerHTML = ""

	$.ajax({
	    url: "https://api.instagram.com/v1/tags/" + search + "/media/recent?access_token=ACCESS-TOKEN",
	    jsonp: "callback",
	    dataType: "jsonp",
	    success: function(response) {
	    	var $instagram = $( '#instragram' );
	    	$instagram.html('');
	    	//var results = document.getElementById("results")
	    	for(var i = 0; i < response.data.length; i++) {
	    		imageUrl = response.data[i].images.low_resolution.url;
	    		$instagram.append('<img src="' + imageUrl + '" />');
	    		//var newA = document.createElement('a')
	    		//newA.setAttribute('href', response.data[i].link)
	    		//newA.setAttribute('target', "_blank")

	    		//var newDiv = document.createElement('div')
	    		//newDiv.className = "col-sm-3 col-sm-offset-1 con animated flipInY"

	    		//var newImg = document.createElement('img')
	    		//newImg.setAttribute('src', response.data[i].images.thumbnail.url)
	    		//newDiv.appendChild(newImg)

	    		//var newLike = document.createElement('h5')
	    		//var likes = document.createTextNode('Likes: ' + response.data[i].likes.count)
	    		//newLike.appendChild(likes)
	    		//newDiv.appendChild(newLike)

	    		//var creator = document.createElement('h5')
	    		//var createdBy = document.createTextNode('From: ' + response.data[i].caption.from.username)
	    		//creator.appendChild(createdBy)
	    		//newDiv.appendChild(creator)
	    		//newA.appendChild(newDiv)

	    		//document.getElementById('results').appendChild(newA)
	    	}
	    },
	    type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', instaSearch, false)
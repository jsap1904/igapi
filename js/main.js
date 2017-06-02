function instaSearch(){
	var search =  document.getElementById('search').value
	document.getElementById('results').innerHTML = ""

	$.ajax({
	    url: "https://api.instagram.com/v1/tags/" + search + "/media/recent?access_token=1193616676.1677ed0.c2a52736eb714db3bef6b8671b485be2",
	    jsonp: "callback",
	    dataType: "jsonp",
	    success: function(data) {
	    	for(i = 0; i < data.data.length; i++) {
	    		var newA = document.createElement('a')
	    		newA.setAttribute('href', data.data[i].link)
	    		newA.setAttribute('target', "_blank")

	    		var newDiv = document.createElement('div')
	    		newDiv.className = "col-sm-3 col-sm-offset-1 con animated flipInY"

	    		var newImg = document.createElement('img')
	    		newImg.setAttribute('src', data.data[i].images.thumbnail.url)
	    		newDiv.appendChild(newImg)

	    		var newLike = document.createElement('h5')
	    		var likes = document.createTextNode('Likes: ' + data.data[i].likes.count)
	    		newLike.appendChild(likes)
	    		newDiv.appendChild(newLike)

	    		var creator = document.createElement('h5')
	    		var createdBy = document.createTextNode('From: ' + data.data[i].caption.from.username)
	    		creator.appendChild(createdBy)
	    		newDiv.appendChild(creator)
	    		newA.appendChild(newDiv)

	    		document.getElementById('results').appendChild(newA)
	    	}
	    },
	    type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', instaSearch, false)
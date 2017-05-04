$(document).ready(function(){

  console.log("Connected to api.js")
// Delete an API (if admin, as index api view page specifies) functionality
  $('.delBtn').on('click', function(){
    var api = $(this)
    var apiDiv = api.parent()
    var id = api.attr('id')
    $.ajax({
      method: "DELETE",
      url: `/${id}`
    }).done(function(){
      apiDiv.remove()
    })
  })
  // Favorites button functionality
  $('.favoriteButton').one('click', function(){
    var api = $(this)

    var id = api.data('target')
    console.log(id)
    $.ajax({
      type: "POST",
      url: "/favorite",
      data: {id: id}
    }).then(
      function(data){
        console.log(data)
      }
    )

  })





})

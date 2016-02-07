searchBox=document.getElementById('search');

$('#go').click(function(){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBox.value + "&format=json&callback=?", function(data) {
    console.log(data);
  });
});

$('#go').click(function(){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBox.value + "&format=json&callback=?", function(data) {
    console.log(data);
  });
});

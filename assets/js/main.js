searchBox=document.getElementById('search');
var str = "";

$('#go').click(function(){
  str = "";
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBox.value + "&format=json&callback=?", function(data) {
    console.log(data);
    for (var i = 0; i < data[1].length; i++)
    {
      str  += "<a href='" + data[3][i] + "' target='_blank' class='wiki'>";
      str += "<div class='option'><h3>" + data[1][i] + "</h3><h5>" + data[2][i] + "</h5></div></a>";
    }
    $(".result").html(str);
  });
});

$('#search').keyup(function(){
  console.log(event.keyCode);
  if(event.keyCode == 13){
        $("#go").click();
    }
});

var organization_token = '';
var icon_color = 'null';
var init_minimal = 'true';
var show_chat_icon = 'true';
var script = document.createElement('script');

$("#chat").click(function () {
  $(".chat__clearfix").trigger('click');
});

const testinterval = () => {
  const safe = setInterval(() => {
  if($(".chat__clearfix").length) {
    setTimeout(() => {
      $(".chat__clearfix").trigger('click');
    },100)
    clearInterval(safe)
  }
  }, 100); 
}
testinterval()

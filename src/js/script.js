var organization_token = '';
var icon_color = 'null';
var init_minimal = 'true';
var show_chat_icon = 'true';
var script = document.createElement('script');
$(function () {
  $("#chat").click(function () {
    $(".chat__clearfix").trigger('click');
  });
});
setTimeout(()=> {
  const btn = document.querySelector('.chat__clearfix')
  btn.click()
  console.log(btn)
},100)
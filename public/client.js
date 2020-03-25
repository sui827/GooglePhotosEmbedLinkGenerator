$(".copy-btn").click(function(e) {
  const url = $(this).parent('div').parent('div').parent('div').attr('id');
})

function copy(link) {
  const text =document.getElementById(link);
  text.select()
  document.execCommand("copy")
}
function copy(link) {
  const text =document.getElementById(link);
  text.select();
  document.execCommand("copy");
}

$("#width").change(function(e) {
  formChange();
})

$("#md").change(function(e) {
  formChange();
})

function formChange() {
  $(".copy-val").each(function(i) {
    let text = $(this).attr('id');
    if ($("#width").val()) {
      text += `=w${$("#width").val()}`
    }
    if ($("#md").prop('checked')) {
      text = `![](${text})`
    }
    $(this).val(text)
  })
}
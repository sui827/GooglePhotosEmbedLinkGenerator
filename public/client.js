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
  setValues();
  let width = $("#width").val();
  let md = $("#md").prop('checked');
  let query
  if (width) {
    query = `?width=${width}`
    if (!md) {
      query += `&md=false`
    }
  } else if (!md) {
    query = `?md=false`
  }
  history.pushState(null, null, query);
}

function setValues() {
  let width = $("#width").val();
  let md = $("#md").prop('checked');
  $(".copy-val").each(function(i) {
    let text = $(this).attr('id');
    if (width) {
      text += `=w${width}`;
    }
    if (md) {
      text = `![](${text})`
    }
    $(this).val(text)
  })
  
}
// formChange()
setValues()
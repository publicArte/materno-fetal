//
// Gets ID buttons add event listner and excutes based on id
document.getElementById('buttons').addEventListener('click', function(evt) {
  var target = evt.target;

  if (target.id === 'doc-1') {
    document.getElementById('docCv-1').style.display = 'block';
  }
  else if (target.id === 'doc-2') {
    document.getElementById('docCv-2').style.display = 'block';
  }
  else if (target.id === 'doc-3') {
    document.getElementById('docCv-3').style.display = 'block';
  }
  else if (target.id === 'doc-4') {
    document.getElementById('docCv-4').style.display = 'block';
  }
  else {
    document.getElementById('docCv-1').style.display = 'none';
    document.getElementById('docCv-2').style.display = 'none';
    document.getElementById('docCv-3').style.display = 'none';
    document.getElementById('docCv-4').style.display = 'none';
  }
}, false);

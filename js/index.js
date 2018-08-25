(function() {
  $('#cikart').on('click', function() {
    console.log('exporting');
    //$('#preview-table').tableExport({type:'png',escape:'false'});
    html2canvas($('#div'), {
      onrendered: function(canvas) {
        var img, saveAs, uri;
        img = canvas.toDataURL('image/png');
        uri = img.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        //window.open(url);
        //var img = canvas.toDataURL("application/octet-stream");
        saveAs = function(uri, filename) {
          var link;
          link = document.createElement('a');
          if (typeof link.download === 'string') {
            document.body.appendChild(link);
            // Firefox requires the link to be in the body
            link.download = filename;
            link.href = uri;
            link.click();
            document.body.removeChild(link);
          } else {
            // remove the link when done
            location.replace(uri);
          }
        };
        saveAs(uri, 'sonucdiv.png');
      }
    });
  });

}).call(this);

$(document).ready(function() {
   $('#videoss a').each(function() {
      var data = $(this).attr('data');
      $(this).append('<img src="images/'+data+'.png" />');
   });

   $('#videoss a').click(function() {
      var data = $(this).attr('data');
      $('#loaderr').append('<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSaludMaternoFetalni%2Fvideos%2F'+data+'%2F&width=320&show_text=false&height=320&appId" width="520" height="700" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>');
      $('#overlayy').fadeIn(250);
   });

   $('#closee').click(function() {
      $('#overlayy').fadeOut(250,function() {
         $('#loaderr').html('');
      });
   });
});

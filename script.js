const messages = [
    "Yakin masih marah? 🥺",
    "Beneran nih? 😢",
    "Ely jangan marah terus dong, Abang nyesel... 😭",
    "Plis deh, masa nggak luluh juga? ",
    "Oke, Abang bakal nunggu Ely baikan...",
    "Tapi yakin nih marah terus? 😢",
    "Terakhir nih, maafin Abang ya...",
    "Canda! Ayok baikan ya sayang ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page/yes_page.html";
}


$(document).ready(function(){
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');
  
    $('.valentines-day').click(function(){
      $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
      $('.envelope').fadeOut(800, function() {
        $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
  
        $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
        $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
          var scale = 1 + Math.sin(now * Math.PI) * 0.1; 
          $(this).css('transform', 'scale(' + scale + ')');
        }});
      });
    });
  
   
  
    $(window).on('load', function(){
      window.location.href = './kartu_ucapan_valentine.html';
    });
  });
  

  $(document).ready(function(){
    $('.valentines-day').click(function(){
        $('.envelope').fadeOut(800, function() {
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
        });

        // Menunggu 10 detik sebelum menampilkan tombol
        setTimeout(function(){
            $('.next-page').fadeIn();
        }, 10000); // 10000 milidetik = 10 detik
    });
});

function goToNextPage() {
    window.location.href = "Valentine.html";
}

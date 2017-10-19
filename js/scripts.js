$(function(){
  $('#survey').submit(function(event){
    event.preventDefault();

    var questionOne = $("input:radio[name=q1]:checked").val();
    var questionTwo = $("input:radio[name=q2]:checked").val();
    var questionThree = $("input:radio[name=q3]:checked").val();
    $('#result').removeClass("show");
    if(questionOne + questionTwo + questionThree === 'aaa').delay( 800 ){
      $('#result').addClass("show");
      $('img').attr("src","img/wonder-woman.jpg");
      $('.card-title').text("you are wonder woman");
      $('p').text('description of wonder-woman');
      $('#quote').text("quote");
    } else if(questionOne + questionTwo + questionThree === 'aab'){
      $('#result').addClass("show");
      $('img').attr("src","img/batman.jpg");
      $('.card-title').text("you are batman");
      $('p').text('description of batman');
      $('#quote').text("quote");
    } else if(questionOne + questionTwo + questionThree === 'aba'){
      $('#result').addClass("show");
      $('img').attr("src","img/superman.jpg");
      $('.card-title').text("you are superman");
      $('p').text('description of superman');
      $('#quote').text("quote");
    } else if(questionOne + questionTwo + questionThree === 'abb'){
      $('#result').addClass("show");
      $('img').attr("src","img/green-arrow.jpg");
      $('.card-title').text("you are green arrow");
      $('p').text('description of green-arrow');
      $('#quote').text("quote");
    } else if(questionOne + questionTwo + questionThree === 'baa'){
      $('#result').addClass("show");
      $('img').attr("src","img/ras-algol.jpg");
      $('.card-title').text("you are Ras Algol");
      $('p').text('description of Ras Algol');
      $('#quote').text("quote");
    } else if(questionOne + questionTwo + questionThree === 'bab'){
      $('#result').addClass("show");
      $('img').attr("src","img/cat-woman.jpg");
      $('.card-title').text("you are catwoman");
      $('p').text('description of catwoman');
      $('#quote').text("quote");
    } else if(questionOne + questionTwo + questionThree === 'bba'){
      $('#result').addClass("show");
      $('img').attr("src","img/harley-quin.jpg");
      $('.card-title').text("you are harley quin");
      $('p').text('description of harley-quin');
      $('#quote').text("quote");
    } else if(questionOne + questionTwo + questionThree === 'bbb'){
      $('#result').addClass("show");
      $('img').attr("src","img/joker.jpg");
      $('.card-title').text("you are joker");
      $('p').text('description of joker');
      $('#quote').text("quote");
    } else {
      alert("You failed, it was 3 questions, c-mon...");
    };
  });
});

$(function(){
  $('#survey').submit(function(event){
    event.preventDefault();

    var questionOne = $("input:radio[name=q1]:checked").val();
    var questionTwo = $("input:radio[name=q2]:checked").val();
    var questionThree = $("input:radio[name=q3]:checked").val();

    if(questionOne + questionTwo + questionThree === 'aaa'){
      $('#result').show();
      $('img').attr("src","img/wonder-woman.jpg");
      $('.card-title').text("you are wonder woman");
      $('p').text('description of wonder-woman');
    } else if(questionOne + questionTwo + questionThree === 'aab'){
      $('#result').show();
      $('img').attr("src","img/batman.jpg");
      $('.card-title').text("you are batman");
      $('p').text('description of batman');
    } else if(questionOne + questionTwo + questionThree === 'aba'){
      $('#result').show();
      $('img').attr("src","img/superman.jpg");
      $('.card-title').text("you are superman");
      $('p').text('description of superman');
    } else if(questionOne + questionTwo + questionThree === 'abb'){
      $('#result').show();
      $('img').attr("src","img/green-arrow.jpg");
      $('.card-title').text("you are green arrow");
      $('p').text('description of green-arrow');
    } else if(questionOne + questionTwo + questionThree === 'baa'){
      $('#result').show();
      $('img').attr("src","img/Ras Algol.jpg");
      $('.card-title').text("you are Ras Algol");
      $('p').text('description of Ras Algol');
    } else if(questionOne + questionTwo + questionThree === 'bab'){
      $('#result').show();
      $('img').attr("src","img/catwoman.jpg");
      $('.card-title').text("you are catwoman");
      $('p').text('description of catwoman');
    } else if(questionOne + questionTwo + questionThree === 'bba'){
      $('#result').show();
      $('img').attr("src","img/harley-quin.jpg");
      $('.card-title').text("you are harley quin");
      $('p').text('description of harley-quin');
    } else if(questionOne + questionTwo + questionThree === 'bbb'){
      $('#result').show();
      $('img').attr("src","img/joker.jpg");
      $('.card-title').text("you are joker");
      $('p').text('description of joker');
    } else {
      alert("You failed, it was 3 questions, c-mon...");
    };
  });
});

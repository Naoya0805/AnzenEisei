//問題文をオリジナルに書き換え
const quiz = [
    {
      question: '4SのSは【整理】【整頓】【清掃】あとひとつは？',
      answers: [ '掃除', '正常', '躾', '清潔'],
      correct: '清潔'
    }, {
      question: '本日紹介した災害事例は何件？',
      answers: [ '3件', '4件', '5件', '6件'],
      correct: '5件'
    }, {
      question: 'ホースリール分解の事例が発生した工場はどこ？',
      answers: [ '元町工場', '明知工場', '堤工場', '高岡工場'],
      correct: '堤工場'
    }
    , {
      question: '8月度の安全衛生点検　今回の指摘事項であがっていない事例は？',
      answers: [ 'コードの処置', 'カーペット無し', '机上の４S不良', 'ロッカーの付箋'],
      correct: '机上の４S不良'
    }
    , {
      question: 'もうすぐ実施をお願いする安全運転診断　その名称は？',
      answers: [ 'DOCCS', 'DOGS', 'DOCKS', 'DOCS'],
      correct: 'DOCCS'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    
  //while文をforループ文に変更
    for(let i = 0 ; i < buttonLen ; i++ ){
      $buttons[i].textContent = quiz[quizCount].answers[i];
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解でっせ!');
      score++;
    } else {
      $window.alert('ちゃいますよ!');
    }
    goToNext();
  };
  
  //全問正解したら合格、1問でも間違えたら不合格にする
  //点数表記
  const showEnd = () => {
    if (score === quizLen) {
    $question.textContent = '来月の安全担当はみなさんひとりひとりです！スコアは' + Math.round( score / quizLen * 100 ) + '点です';
    } else {
    $question.textContent = '来月の安全担当はみなさんひとりひとりです！ あなたのスコアは' + Math.round( score / quizLen * 100) + '点です';
      }
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }

$(window).on("load", function () {
    $(".js_trigger_sample").on("click", function () {
      var elm = $($(this).parent()).find(".default"), tmp = $(this).attr("src");
      elm.addClass("active");
      elm.removeClass("default");
      elm.find("img").attr("src", tmp)
    });
});
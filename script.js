//問題文をオリジナルに書き換え
const quiz = [
    {
      question: '救急・消防が発生した際、ワンタップで通報が出来るアプリ。その名前は？',
      answers: [ '簡単通報アプリ', '拠点通報アプリ', '緊急通報アプリ', '保安通報アプリ'],
      correct: '保安通報アプリ'
    }, {
      question: '全社災害、9月25日時点での累計件数は？',
      answers: [ '8件', '18件', '26件', '36件'],
      correct: '26件'
    }, {
      question: '歩行災害撲滅 10月度のこだわり宣言は？',
      answers: [ '周囲に優しく、思いやりを持って気を配った歩行をします！', '周囲に注意し、安全な歩行を心がけます！', '一歩踏み出す前の安全確認よし！', '時間にゆとりをもって行動しよう！'],
      correct: '周囲に優しく、思いやりを持って気を配った歩行をします！'
    }
    , {
      question: '本社工場での踏み台での災害、受傷者が左手に持っていたものは？',
      answers: [ 'ホース', '採液カップ', '手動ポンプ', 'ドライバー'],
      correct: '手動ポンプ'
    }
    , {
      question: 'テレワークを行う際の最適な机上の照度は？',
      answers: [ '50ルクス', '100ルクス', '200ルクス', '400ルクス'],
      correct: '400ルクス'
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
    $question.textContent = '最初からもう一回！！スコアは' + Math.round( score / quizLen * 100 ) + '点です';
    } else {
    $question.textContent = '完璧！今月もご安全に！ あなたのスコアは' + Math.round( score / quizLen * 100) + '点です';
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

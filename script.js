//問題文をオリジナルに書き換え
const quiz = [
    {
      question: '10月23日現在、全社災害の累計件数は？',
      answers: [ '39件', '31件', '28件', '23件'],
      correct: '31件'
    }, {
      question: '元町工場での段差見誤りによる捻挫、職場で把握したのは発生からどれくらいたっていたか？',
      answers: [ '10日', '2週間', '2ヶ月', '1年'],
      correct: '2ヶ月'
    }, {
      question: '部内DOCCS診断の平均Cとなった項目は？',
      answers: [ '車の特性', '車の構造', '他車等の行動特性', '運転者の認知特性'],
      correct: '運転者の認知特性'
    }
    , {
      question: 'BRプロ進のDOCCS診断、疲労度の平均は？',
      answers: [ 'A', 'B', 'C', 'D'],
      correct: 'B'
    }
    , {
      question: '冬はノロウィルスに注意！潜伏期間はどれくらい？',
      answers: [ '4時間～10時間', '10時間～24時間', '24時間～48時間', '48時間～72時間'],
      correct: '24時間～48時間'
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
    $question.textContent = '全問正解！スコアは' + Math.round( score / quizLen * 100 ) + '点です';
    } else {
    $question.textContent = '最初からもう一回！ あなたのスコアは' + Math.round( score / quizLen * 100) + '点です';
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

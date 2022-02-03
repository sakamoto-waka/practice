const quiz = [
  { 
    question: '競馬で走っている馬の種類は何？',
    answers: [
    'ウェスタンホース',
    'サラブレッド',
    'クリオージョ',
    'ブルトン'
    ],
    correct: 'サラブレッド'
  }, {
    question: '走るのが速い犬種は何？',
    answers: [
    'シーズー',
    'ケルピー',
    'ジャーマンシェパード',
    'イタリアングレーハウンド'
    ],
    correct: 'イタリアングレーハウンド'

  }, {
    question: '100メートル走の世界記録保持者は誰？',
    answers: [
    'ねこひろし',
    'Qちゃん',
    'ウサインボルト',
    'オニャンコポン'
    ],
    correct: 'ウサインボルト'
  }
]
let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let index = 0
  while(index < buttonLength){
    $button[index].textContent = quiz[quizIndex].answers[index];
    index++;
  }
}
setupQuiz();

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

    quizIndex++;

    if(quizIndex < quizLength){
      setupQuiz();
    } else {
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }

}

let handleIndex = 0;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  })
  handleIndex++;
}
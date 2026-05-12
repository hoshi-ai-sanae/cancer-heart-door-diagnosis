const questions = [
  {
    text: "傷ついたとき、あなたはどうなりやすいですか？",
    choices: [
      { text: "何もなかったふりをする", type: "typeA" },
      { text: "心を閉じて距離を置く", type: "typeB" },
      { text: "相手にも事情があったのか考える", type: "typeC" },
      { text: "安心できる人にそばにいてほしくなる", type: "typeD" }
    ]
  },
  {
    text: "大切な人とすれ違ったとき、心の奥に残りやすい感情は？",
    choices: [
      { text: "寂しさ", type: "typeA" },
      { text: "もう傷つきたくない気持ち", type: "typeB" },
      { text: "本当は何を感じていたのだろうという問い", type: "typeC" },
      { text: "また安心して話せる場所がほしい気持ち", type: "typeD" }
    ]
  },
  {
    text: "あなたにとって「帰る場所」とは？",
    choices: [
      { text: "ひとりで泣ける場所", type: "typeA" },
      { text: "大切なものを守れる場所", type: "typeB" },
      { text: "本当の気持ちに気づける場所", type: "typeC" },
      { text: "そのままの自分でいられる場所", type: "typeD" }
    ]
  },
  {
    text: "泣きたくなったとき、あなたは？",
    choices: [
      { text: "できるだけ我慢する", type: "typeA" },
      { text: "人に見られない場所に隠れる", type: "typeB" },
      { text: "なぜこんなに苦しいのか考える", type: "typeC" },
      { text: "誰かにそっと受け止めてほしい", type: "typeD" }
    ]
  },
  {
    text: "誰かの言葉に傷ついたとき、最初に出やすい反応は？",
    choices: [
      { text: "自分の中でぐるぐる考える", type: "typeA" },
      { text: "もう近づかないようにする", type: "typeB" },
      { text: "その人の背景を考えてみる", type: "typeC" },
      { text: "信頼できる人に話して整理する", type: "typeD" }
    ]
  },
  {
    text: "あなたが大切にしたいものは？",
    choices: [
      { text: "心の奥にある本音", type: "typeA" },
      { text: "家族や仲間や思い出", type: "typeB" },
      { text: "相手を理解しようとする姿勢", type: "typeC" },
      { text: "安心できるつながり", type: "typeD" }
    ]
  },
  {
    text: "「許す」という言葉を聞いたとき、近い感覚は？",
    choices: [
      { text: "まだ無理だと思う", type: "typeA" },
      { text: "簡単に許したくないと思う", type: "typeB" },
      { text: "許す前に、まず理解したいと思う", type: "typeC" },
      { text: "安心できる関係に戻れたらいいと思う", type: "typeD" }
    ]
  },
  {
    text: "あなたが誰かにしてもらえるとうれしいことは？",
    choices: [
      { text: "泣いても責めずにいてくれる", type: "typeA" },
      { text: "大切なものを否定しないでくれる", type: "typeB" },
      { text: "気持ちを決めつけずに聞いてくれる", type: "typeC" },
      { text: "何も聞かずに隣にいてくれる", type: "typeD" }
    ]
  },
  {
    text: "心が疲れたとき、あなたに必要なものは？",
    choices: [
      { text: "感情を出せる時間", type: "typeA" },
      { text: "安全だと思える境界線", type: "typeB" },
      { text: "気持ちを見つめる静かな時間", type: "typeC" },
      { text: "あたたかい居場所や人の存在", type: "typeD" }
    ]
  },
  {
    text: "今のあなたに一番近い言葉は？",
    choices: [
      { text: "本当は寂しかった", type: "typeA" },
      { text: "大切だから守りたかった", type: "typeB" },
      { text: "あの人にも心があったのかもしれない", type: "typeC" },
      { text: "安心できる場所に帰りたい", type: "typeD" }
    ]
  }
];

const results = {
  typeA: {
    title: "涙をしまいこむ月の子",
    catch: "あなたの涙は 弱さではなく 大切に思ってきた証です",
    description: "本当は寂しいのに\n平気なふりをしてしまうタイプ。\n\n傷ついたとき\nすぐに泣くのではなく\n心の奥に感情をしまいこみやすい。\n\n怒っているように見えても\n本当は\n「わかってほしかった」\n「そばにいてほしかった」\nという気持ちを抱えている。",
    cancer: "泣いていい。\n寂しくていい。\nあなたの感情は\nあなたが誰かを大切に思ってきた証です。",
    moonstone: "ムーンストーンは\nあなたの胸の奥にある感情を\n月の光のようにやさしく照らしてくれます。\n\n今日は無理に強くならなくて大丈夫。\nまずは\n「本当は寂しかった」\nと認めるところから始めてください。",
    work: "今、本当は誰に\nどんな気持ちをわかってほしいですか？"
  },
  typeB: {
    title: "大切なものを守る白い蟹",
    catch: "守る力は あなたの愛です",
    description: "大切な人や思い出を\n深く守ろうとするタイプ。\n\n一度傷つくと\n心の扉を閉めてしまうことがある。\n\nでもそれは冷たいからではなく\n自分の心と\n大切なものを守ろうとしているから。",
    cancer: "あなたは\n大切なものを大切にできる人です。\n\nただし\n誰かを守るように\n自分の心も守っていいのです。",
    moonstone: "ムーンストーンは\n守りすぎて固くなった心を\nやさしくゆるめてくれる石です。\n\n今のあなたに必要なのは\n全部を背負うことではなく\n安心できる場所で\n少し力を抜くことです。",
    work: "あなたが今\n守りたいものは何ですか？\n\nそして\n自分のために守ってあげたい気持ちは何ですか？"
  },
  typeC: {
    title: "相手の心を想像するランプの子",
    catch: "許せなくてもいい 想像できたことが 心の扉を開く一歩です",
    description: "自分の気持ちだけではなく\n相手の心にも\nそっと光を向けられるタイプ。\n\nすぐに許せなくても\n相手にも傷や事情があったのかもしれないと\n想像する力がある。\n\n物語のノアが\nお父さんの気持ちに気づいていく流れに近いタイプ。",
    cancer: "あなたは\n人の心の奥にあるものを\n静かに感じ取る力があります。\n\nただし\n相手の気持ちを想像することと\n自分の痛みをなかったことにすることは\n違います。\n\nあなたの感情も\n同じくらい大切にしてください。",
    moonstone: "ムーンストーンは\n自分の感情と相手への想像力の間に\nやさしい灯りをともしてくれます。\n\n今は答えを急がなくて大丈夫。\n「そうだったのかもしれない」\nと思えたことが\nすでに大切な一歩です。",
    work: "まだ許せないけれど\n少しだけ想像してみるなら\n\nあの人は\nどんな気持ちだったのかもしれませんか？"
  },
  typeD: {
    title: "心の居場所をつくるエミール",
    catch: "あなたは 誰かの心に あたたかな灯りをともせる人です",
    description: "自分だけでなく\n誰かが安心できる場所をつくれるタイプ。\n\n急かさず\n答えを押しつけず\nそっと隣にいることができる人。\n\n蟹座の案内人エミールのように\n人の心をランプで照らすような役割を持つ。",
    cancer: "あなたのやさしさは\n誰かの心が帰ってこられる場所になります。\n\nでも\n誰かのための灯りでいる前に\nあなた自身の灯りも\n消えないように大切にしてください。",
    moonstone: "ムーンストーンは\n人に寄り添いすぎたあなたの心を\n静かに満たしてくれます。\n\n今日は\n誰かのためではなく\nあなた自身が安心できる場所を\n思い出してください。",
    work: "あなた自身が\nほっとできる場所はどこですか？\n\nそこには\n誰がいて\nどんな光がありますか？"
  }
};

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");
const restartButton = document.getElementById("restart-button");
const questionCount = document.getElementById("question-count");
const questionText = document.getElementById("question-text");
const choicesElement = document.getElementById("choices");
const progressBar = document.getElementById("progress-bar");
const coverImage = document.getElementById("cover-image");

let currentQuestionIndex = 0;
let answers = [];

coverImage.addEventListener("error", () => {
  coverImage.parentElement.remove();
});

startButton.addEventListener("click", startDiagnosis);
backButton.addEventListener("click", goBack);
restartButton.addEventListener("click", resetDiagnosis);

function startDiagnosis() {
  currentQuestionIndex = 0;
  answers = [];
  showScreen(questionScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  questionCount.textContent = `質問 ${currentQuestionIndex + 1} / ${questions.length}`;
  questionText.textContent = question.text;
  progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  backButton.disabled = currentQuestionIndex === 0;

  choicesElement.innerHTML = "";
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => selectChoice(choice.type));
    choicesElement.appendChild(button);
  });
}

function selectChoice(type) {
  answers[currentQuestionIndex] = type;

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  showResult();
}

function goBack() {
  if (currentQuestionIndex === 0) {
    return;
  }

  currentQuestionIndex -= 1;
  renderQuestion();
}

function showResult() {
  const scores = {
    typeA: 0,
    typeB: 0,
    typeC: 0,
    typeD: 0
  };

  answers.forEach((type) => {
    scores[type] += 1;
  });

  const priority = ["typeD", "typeC", "typeB", "typeA"];
  const winningType = priority.reduce((bestType, type) => {
    return scores[type] > scores[bestType] ? type : bestType;
  }, "typeD");

  const result = results[winningType];
  document.getElementById("result-title").textContent = result.title;
  document.getElementById("result-catch").textContent = result.catch;
  document.getElementById("result-description").textContent = result.description;
  document.getElementById("result-cancer").textContent = result.cancer;
  document.getElementById("result-moonstone").textContent = result.moonstone;
  document.getElementById("result-work").textContent = result.work;
  showScreen(resultScreen);
}

function resetDiagnosis() {
  currentQuestionIndex = 0;
  answers = [];
  showScreen(startScreen);
}

function showScreen(activeScreen) {
  [startScreen, questionScreen, resultScreen].forEach((screen) => {
    const isActive = screen === activeScreen;
    screen.hidden = !isActive;
    screen.classList.toggle("is-active", isActive);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

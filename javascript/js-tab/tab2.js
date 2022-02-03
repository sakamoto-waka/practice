(()=>{


  //DOM要素を取りまくってる
  const $doc = document;
  const $tab = document.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length;
  
  //初期化　１つ目のタブだけ表示されるようにする
  const init = () => {
    //１個めの$contentだけstyle（css）のdisplay(noneになっている)をblock（無視）する
    $content[0].style.display = 'block';

  };
  init();

  //クリックイベント
  const handleClick = (e) => {
    e.preventDefault();
    
    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav,content,classすべて一度リセット
    let index = 0;
    while(index < navLen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }


  //対象のコンテンツをアクティブ化する
    //targetValが０の場合はhtml内の<div class="tab-contents-item" data-content="0">をすべて持ってくる
    //といった動的にコンテンツの取得が可能になる
     //後ろがないとdata-content（３つ共）のDOMすべてを取得してきてしまうためNG　欲しいのは１つずつのコンテンツ
     //クリックされたらdata-navに応じて対応するコンテンツエリアのDOMを取得して表示させる　ってことをしたい
    $tab.querySelectorAll('[data-content="' + targetVal + '"] ')[0].style.display = 'block'
  //tab-1を押せば、tab-1のDOM属性が持っているclassすべてをリスト化する。
  //更に.addでclassListに（）内の文字列を追加する。
  //今回はis-activeを追加したため押したら色変わるクラスを追加できた。見た目が変わる。
    $nav[targetVal].classList.add(ACTIVE_CLASS);

  };

  //全nav要素に対して関数を適用・発火
  let index = 0;
while(index < navLen){
  $nav[index].addEventListener('click', (e) => handleClick(e));
  index++;
}

UI
})();
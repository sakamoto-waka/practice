(()=>{

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    const init = () => {
        $content[0].style.display = 'block';
    };
    init();
    
    const handleClick = (e) => {
        e.preventDefault();
        const $this = e.target;
        //[クリックされた]DOMのnavの中にあるdata要素
        const targetVal = $this.dataset.nav;

        let index = 0;
        while(index < navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        //targetVal自体が「クリックされた〜」だからdata-contentの３つ中でも自動的にクリックされた部分のDOMを取得する。
        //で一旦終わるから[0]が後ろに必要になる
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };

    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();
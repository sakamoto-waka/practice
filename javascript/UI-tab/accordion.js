(() => {

    class Accordion {
        //初期化　一番最初に実行される　
        //今回は　エレメント取得して変数に入れる・クリックイベント実行　→
        constructor(obj) {

            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
                
            const triggerLen = $trigger.length;
            let index = 0;
            while(index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }
            //クリックしたら実行される処理
            clickHandler(e){
                e.preventDefault();

                const $target = e.currentTarget;
                const $content = $target.nextElementSibling;
                //A1のstyle.display = 'none';がblock（表示）されてたらnone（コンテンツを閉める）にする。表示されてなければblock（表示）する。
                if($content.style.display === 'block'){
                    $content.style.display = 'none';
                } else {
                    $content.style.display = 'block';
                }
            };
        
    }
    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    });
    const dummyAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a'
    });
    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName: 'dt'
    });
    
    
})();
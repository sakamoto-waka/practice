let unko = 'Hello World!';

//unko = 'Hello World!2';

let inoki = ['いーち','にーい','さん','ダー！']

const bigUnko = 'He..Hello!'

// console.log(bigUnko);

// let index = 0;
// while(index < inoki.length){

//     console.log(inoki[index]);
//     index++;

// }

// if(inoki.length > 5){
// console.log('ボンバイエ！');
// } else {
// console.log('ぼんば・・！');
// }

const test = (arg) => {
    if(inoki.length > arg){
    console.log('ボンバイエ！');
    } else {
    console.log('ぼんば・・！');
    }
};



const unko2 = {
    color: 'pink',
    size: 'large',
    perfume: 'mint',
    goToilet: () => {
        console.log('Hello Wolrd!');
    }
};

// console.log(unko2);

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    window.alert('Hello World!');
});
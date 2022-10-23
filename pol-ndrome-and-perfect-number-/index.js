let res = document.getElementById('result');
let res2 = document.getElementById('result2');
let lowEntry = document.getElementById('low_entry');
let entry = document.getElementById('entry');
let btn = document.getElementById('btn');
let perfect = document.getElementById('perfect');


btn.addEventListener('click',function(){
    let num = +entry.value;
    let low = +lowEntry.value;
    res.innerHTML = ''
    for (; num > low ; num--) {
        let num1 = num;
    let num2 = 0;
    while(num1>0){
        let rem = num1%10;
        num2 = num2*10+rem;
        num1 = parseInt(num1/10);
    }
    if(num2 == num){
        res.innerHTML += num+'\n';
    }
}
});

perfect.addEventListener('click',function(){
    let numpr = +entry.value;
    let lowpr = +lowEntry.value;

    res2.innerHTML = ''
    let sum = 0;

    //check if the number is perfect or not
    for (; numpr > lowpr ; numpr--) {
        for (let i = 1; i < numpr; i++) {
            if(numpr%i == 0){
                sum = sum + i;
            }
        }
        if(sum == numpr){
            res2.innerHTML += numpr+'\n';
        }
        sum = 0;
    }

});
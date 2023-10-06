var inp = document.getElementsByTagName('input')[0]
// console.log(inp);
var btn = document.querySelectorAll('button')
console.log(btn);
btn.forEach((ele) => {
    console.log(ele);
    ele.addEventListener('click', (e) => {
        var val = e.target.innerText;
        console.log(val);
        if (val != '=' && val != 'C' && val != 'x') {
            inp.value += val;
        }
        else if (val === 'C') {
            inp.value = '';
        }
        else if (val === 'x') {
            inp.value = inp.value.slice(0, -1)
        }
        else {
            inp.value = eval(inp.value);
        }
    });
})

/*========================================1 задача===========================================*/



obj = {
    copy: function(buffer){
        obj.buffer = "";
        return this;
    },
    doFunction: function(func, x, y) {
        switch (func) {
            case '+':
                return x + y;
                break;
            case '-':
                return x - y;
                break;
            case '*':
                return x * y;
                break;
            case '/':
                return x / y;
                break;
            case '%':
                return x % y;
                break;
            case '^':
                return x ^ y;
                break;

        }
        return this;
    },
    clear: function() {
        obj.result = 0;
        return this;
    }
};
var a = copy('aee');
console.log(a);



/*========================================2 задача===========================================*/

/*
var str = 'var_text_hello';

function toText(str) {
    var arr = str.split("_");

    for (var i = 1; i < arr.length; i++) {
        function upCase(string) {
            if (!string) return string;
            return (string[0].toUpperCase() + string.slice(1));
        }

        arr[i] = upCase(arr[i]);
    }

    return arr.join("");
}

console.log(toText(str));
*/


/*========================================3 задача===========================================*/

/*
function inArray(str, arr) {
    var a = false;

    for (var i = 0; i < arr.length; i++){
        if (arr[i].indexOf(str) !== -1){
            a = true;
        }
    }

    return a;
}

console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']));*/


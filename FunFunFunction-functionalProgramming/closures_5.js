//1.Clousers - functions are clousers, functions body has access to variables outside the function

let me = 'Mamuba';

function greetMe() {
    console.log('Hello ' + me + '!');
}

me = 'Batman';

greetMe();

//2. Usecase 

function sendRequest() {
    const requestID = '123';
    $.ajax({
        url: '/myUrl',
        success: function(response) {
            alert('Request ' + requestID + ' returned')
        }
    });
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
//A closure is the combination of a function and the lexical environment within which that function was declared.
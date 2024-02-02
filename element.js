// greater than equal
function gte(a, b){
    return a>=b ? true : false;
}

function sus(name){
    return `hello ${name}`;
}

function list(){
    return [
        'nazi pigs',
        'gnome',
        'pony'
    ]
}

function user(){
    return { id: 1, name: 'Psyon' };
}

function login(pass){
    if (pass !== '123')
        throw new Error('password is wrong');
    return {jwt: 'owubvmRdFhee3'}
}

module.exports = {gte, sus, list, user, login}
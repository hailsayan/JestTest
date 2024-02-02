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

module.exports = {gte, sus, list, user}
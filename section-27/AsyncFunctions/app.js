const sing = async () => {
    throw new Error('Oh no, error!');
    return 'La La La'
}

// sing()
//     .then(data => {
//         console.log('Promise returned with: ', data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'password') return 'Welcome'
    throw 'Invalid Password'
}

login('firstmound','password')
    .then(msg => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })
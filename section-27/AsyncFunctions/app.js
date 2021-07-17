const sing = async () => {
    throw new Error('Oh no, error!');
    return 'La La La'
}

sing()
    .then(data => {
        console.log('Promise returned with: ', data);
    })
    .catch(err => {
        console.log(err);
    })
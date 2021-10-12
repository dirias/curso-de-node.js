function otraFunction(){
    return serompe();
}
function serompe(){
    return 3 + z;
}
function seRompeAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            cb(error);
        }

    })
}
//------------------------------main
try {
    seRompeAsync((err) => console.error(err.message))
}
catch (err) {
    console.error(err.message);
}


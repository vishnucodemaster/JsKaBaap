const myObject = {
    'game1':'NFS',
    'game2':'EA SPORT',
    'game3':'SPORT'
}

for (const key in myObject) {
    console.log(`${key} types of ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming){
    console.log(programming[key])
}
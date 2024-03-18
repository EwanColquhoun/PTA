console.log("ready!")

// get the new location and replaces href in for backbutton
let anchors = Array.from(document.getElementsByClassName('cat'))
// console.log(anchinit)
// let anchors = anchinit.filter(.hash == '#bid-form')
console.log(anchors)
let previous = document.getElementById('previous')

anchors.forEach(anchor => {
    anchor.addEventListener('click', function(){
        // console.log(this.hash, 'from funct')
        previous.setAttribute('href', this.hash)
        // console.log(previous.getAttribute('href'))

    })
});
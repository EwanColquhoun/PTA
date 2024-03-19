
// get the new location and replaces href in for backbutton
let anchors = Array.from(document.getElementsByClassName('cat'))
let previous = document.getElementById('previous')
let pre = anchors.forEach(anchor => {
    anchor.addEventListener('click', function(){
        let prev = this.hash
        previous.setAttribute('href', this.hash)
        console.log(prev)
        return prev

    })
});


// submit, feedback then reset form
let form = document.getElementById('bid-form')
let subBut = document.getElementById('submit')
subBut.addEventListener('click', function(){
    let pName = document.forms["bid-form"]["name"].value
    alert(`Hi ${pName}, thank you for your bid. Good luck!`)
    form.reset();
})

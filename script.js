
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

// Form handlers
let form = document.getElementById('bid-form')
let subBut = document.getElementById('submit')

// Sets the time for page load re bid.
window.onload = function(){
    console.log('focus')
    let timeInput = document.getElementById('timeInput')
    let d = new Date()
    let dateGroup = d.toTimeString('en-UK')
    let timeBlock = dateGroup.split(' ')[0].slice(0, 5)
    timeInput.value = timeBlock
}

// submit, feedback then reset form
subBut.addEventListener('click', function(){
    let pName = document.forms["bid-form"]["name"].value
    alert(`Hi ${pName}, thank you for your bid. Good luck!`);
    setTimeout(() => {
        form.reset(), 2000});
});
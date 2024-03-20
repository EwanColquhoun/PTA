// Back to top button
let btt = document.getElementById('btt-link');

btt.addEventListener('click', function(){
    window.scrollTo(0,0);
});



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

// Bid link handlers
let bidLink = Array.from(document.getElementsByClassName('bid-link'))
let prizeTitle = Array.from(document.getElementsByClassName('p-title'))
let prizeInput = document.getElementById('p-search')

// on link click it sends the prize data title to the prize input
bidLink.forEach(bl => {
    bl.addEventListener('click', function(e){
        let biddingFor = bl.getAttribute('data-prize-name');
        prizeInput.value = biddingFor
        })
    })





// prizeTitle.forEach(prize => {
//     console.log(prize.textContent)
// })


// Form handlers
let form = document.getElementById('bid-form')
let subBut = document.getElementById('submit')

// Sets the time for page load re bid.
window.onload = function(){
    let timeInput = document.getElementById('timeInput')
    let d = new Date()
    let dateGroup = d.toTimeString('en-UK')
    let timeBlock = dateGroup.split(' ')[0].slice(0, 5)
    timeInput.value = timeBlock
}

// returns the checkbox state
function dataConsent(){
    let consentState = document.getElementById('consent').checked
    if (consentState){
        return consentState
    } else {
        return consentState
    }
}



// checks form validation
function validateForm() {
    let x = document.forms["bid-form"]["name"].value;
    let y = document.forms["bid-form"]["email"].value;
    let z = document.forms["bid-form"]["p-search"].value;
    let a = document.forms["bid-form"]["amount"].value;
    
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } else if (y =="") {
        alert("Email must be filled out");
        return false;
    } else if (z =="") {
        alert("Prize must be selected");
        return false;
    } else if (a =="") {
        alert("Amount to bid must be filled out");
        return false;
    }
};

// submit, feedback then reset form
subBut.addEventListener('click', function(){
    let pName = document.forms["bid-form"]["name"].value
    let state = dataConsent();
    while (!validateForm){
        return 
    }
    if (state){
        alert(`Hi ${pName}, thank you for your bid. Good luck!`);
        setTimeout(() => {
            form.reset(), 2000});
    } else {
        alert(`You must consent if you would like to win!`)
    }
});
// Back to top button
let btt = document.getElementById('btt-link');

btt.addEventListener('click', function(){
    window.scrollTo(0,0);
});

// get the new location and replaces href in backbutton
let anchors = Array.from(document.getElementsByClassName('cat'))
let previous = document.getElementById('previous')
let pre = anchors.forEach(anchor => {
    anchor.addEventListener('click', function(){
        let prev = this.hash
        previous.setAttribute('href', this.hash)
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

// Form handlers
let form = document.getElementById('bid-form')
let subBut = document.getElementById('submit')

// fills in the bid time when the checkbox is checked
let box = document.getElementById('consent')
let timeInput = document.getElementById('timeInput')
function addTime(){
    let d = new Date()
    let dateGroup = d.toTimeString('en-UK')
    let timeBlock = dateGroup.split(' ')[0].slice(0, 5)
    timeInput.value = timeBlock
}
box.addEventListener('click', function(){
    if (box.checked ==  true){
        addTime()
    } else {
        timeInput.value = "00:00"
    };
})

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
      return false;
    } else if (y == "") {
        return false;
    } else if (a == "") {
        return false;
    } else {
        return true;
    }
};

// submit, feedback.
subBut.addEventListener('click', function(){
    let pName = document.forms["bid-form"]["name"].value
    let valid = validateForm();
    let state = dataConsent();

    if (valid == true){
        if (state){
            alert(`Hi ${pName}, thank you for your bid. Good luck!`);
            setTimeout(() => {
                form.reset(), 2000});
            } else {
                alert(`You must consent if you would like to win!`)
            }
    } 
});

// disables submit button after the deadline
function finishAuction() {
    subBut.setAttribute('disabled', true);
    alert("The PTA silent auction has finished. Thank you.")
    console.log('ended')
  }
// not 24hr!
var timeAtFinish = new Date("5/11/2024 11:59:59 PM").getTime()
let timeNow = new Date().getTime()
let offsetMillis = timeAtFinish - timeNow;
setTimeout(finishAuction, offsetMillis);
// Back to top button
let btt = document.getElementById('back-to-top');

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
    } else if (z == "") {
        return false;
    } else {
        return true;
    }
};

// Prevents submit and shows modal for confirmation
let modal = document.getElementById('form-modal')
let modalBody = document.getElementById('modal-body')
function preventSubmit(event){

    let names = document.forms["bid-form"]["name"].value;
    let prize = document.forms["bid-form"]["p-search"].value;
    let bid = document.forms["bid-form"]["amount"].value;

    let valid = validateForm();
    let state = dataConsent();

    if (valid == true){
        if (state){
            modal.style.display = "block"

            let content = `
                Hi ${names}, <br> 
                    You are bidding £${bid} for ${prize}.  
            `
            modalBody.innerHTML = content
            event.preventDefault();
        } else {
            alert(`You must consent if you would like to win!`)
        }
    }
}

// Allows modal to send form
function modalSend(){
    let form = document.forms["bid-form"]
    form.requestSubmit();
    console.log('sent')
    modal.style.display = 'none'
    setTimeout(() => {form.reset(), 2000});
}

// hides modal with cancel button
function modalHide() {
    modal.style.display = "none"
}

let mSubmit = document.getElementById('modal-submit')
let mCancel = document.getElementById('modal-cancel')
subBut.addEventListener('click', preventSubmit)
mSubmit.addEventListener('click', modalSend)
mCancel.addEventListener('click', modalHide)

// submit, feedback.
// subBut.addEventListener('click', function(){
//     let pName = document.forms["bid-form"]["name"].value
//     let valid = validateForm();
//     let state = dataConsent();

//     if (valid == true){
//         if (state){
//             alert(`Hi ${pName}, thank you for your bid. Good luck!`);
//             setTimeout(() => {
//                 form.reset(), 2000});
//             } else {
//                 alert(`You must consent if you would like to win!`)
//             }
//     } 
// });

// disables submit button after the deadline
function finishAuction() {
    subBut.setAttribute('disabled', true);
    alert("The PTA silent auction has finished. Thank you.")
}

// not 24hr! NOT wORKING IN USA
var timeAtFinish = new Date("5/11/2024 11:59:59 PM").getTime()
let timeNow = new Date().getTime()
let offsetMillis = timeAtFinish - timeNow;
if (Math.sign(offsetMillis) == '-1'){
    setTimeout(finishAuction, offsetMillis);
} else {
    console.log(timeAtFinish, timeNow, offsetMillis)
    console.log('timing error')
}

// Search Bar
let list = document.getElementById('list');
let bar = document.getElementById('searchbar')
let prizes = document.getElementsByClassName('prizes');

function update_list(){
    let pri = Array.from(document.getElementsByClassName('p-title'))

    for (i = 0; i < pri.length; i++){
        let el = pri[i].innerHTML
        let inner = el.replace('<h3>', '').replace('</h3>', '')
        // below gets the id ready for list attribute target.
        let pId = pri[i].getAttribute('id')
        let node = document.createElement("li")
        let att = document.createAttribute('class')
        att.value = 'prizes'
        let child = document.createElement('a')
        let cAtt = document.createAttribute('href')
        let styleAtt = document.createAttribute('style')
        styleAtt.value = 'display: none'
        cAtt.value = `#${pId}`
        child.setAttributeNode(cAtt)
        child.innerText = inner
        node.setAttributeNode(att)
        node.setAttributeNode(styleAtt)
        node.appendChild(child)
        list.appendChild(node)
    }
}

function search_prizes() {
    if (list.style.display == 'none'){
        list.style.display = 'list-item'
    }
    let input = document.getElementById('searchbar').value 
    input = input.toLowerCase();
    let x = document.getElementsByClassName('prizes');
    
    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "list-item";
        }
        else {
            x[i].style.display = "none";
        }
    }
    let div = document.getElementsByTagName('body')[0];
    // let div = document.getElementById('maincont');
    div.onclick = remove_list;
}

bar.onchange = search_prizes;

function remove_list(){
    list.style.display = 'none'
}

window.DOMContentLoaded = update_list()

// Back to top button
let btt = document.getElementById('back-to-top');
let main = document.getElementById('maincont');


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
    } else if (!y.includes('@')) {
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
            <div>
                Hi <span class="info">${names}</span>, <br> 
                    You are bidding <span class="info">£${bid}</span> for <span class="info">${prize}</span>.  
            </div>
                    `
            // modalBody.classList.add('slant')
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
    modal.style.display = 'none',
    setTimeout(() => {form.reset(), 2000});
}

let overlayEl = document.getElementById('overlay')
let spinner = document.getElementById('spin')
let check = document.getElementById('check')
// hides modal with cancel button
function modalReset() {
    modal.style.display = "none"
    spinner.classList.replace('show', 'hide')
    check.classList.replace('show', 'hide')
    overlayEl.classList.replace('show', 'hide')
}

function overlay(){
    if (overlayEl.classList.contains('hide')){
        overlayEl.classList.replace('hide', 'show')
    } else {
        overlayEl.classList.add('show')
    }
    if (spinner.classList.contains('hide')){
        spinner.classList.replace('hide', 'show')
    } else {
        spinner.classList.add('show')
    }
    setTimeout(() => {
        spinner.classList.replace('show', 'hide')
        if (check.classList.contains('hide')){
            check.classList.replace('hide', 'show')
        } else {
            check.classList.add('show')
        }    }, 1000)
    console.log('sending...')
    setTimeout(modalSend, 4000);
    setTimeout(modalReset, 4500);
}

let mSubmit = document.getElementById('modal-submit')
let mCancel = document.getElementById('modal-cancel')
subBut.addEventListener('click', preventSubmit)
mSubmit.addEventListener('click', overlay)
// mSubmit.addEventListener('click', () => {
//     setTimeout(modalSend, 4000)})
mCancel.addEventListener('click', modalReset)
main.addEventListener('click', modalReset) //needs to be body

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
    div.onclick = remove_list;
}

function remove_list(){
    list.style.display = 'none'
}

function remove_nav(){
    if (miniNav.classList.contains('show')){
        miniNav.classList.remove('show')
    }
}

// Activates the mobile nav links
// let main = document.getElementById('maincont');
let burger = document.getElementById('burger')
let miniNav = document.getElementById('mini-nav')
burger.addEventListener('click', function(){
    miniNav.classList.toggle('show')
})

main.onclick = remove_nav;
main.onclick = modalReset; //not sure this works
bar.onchange = search_prizes;
bar.onclick = remove_nav;
miniNav.onclick = remove_nav;
window.DOMContentLoaded = update_list();

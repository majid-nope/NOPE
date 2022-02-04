// for sliding sections
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});


// For typed
var data = document.getElementById('typed')
var strings = data.getAttribute('data_typed_values')
strings = strings.split(',')
console.log(strings)
var typed = new Typed('.typed', {

  stringsElement: 'typed',
  strings: strings,
  typeSpeed: 300,
  loop: true,
  loopCount: Infinity,
  smartBackspace: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000
});

// For scrollbarAnimation
function progress() {
  var mainDivision = document.getElementById('main')
  var totalHeight = mainDivision.scrollHeight - window.innerHeight
  var progressBar = document.getElementById('progress')
  var currentProgress = mainDivision.scrollTop / totalHeight * 100
  progressBar.style.height = currentProgress + '%'

}

// For showcase section
function inputCh() {
  var gearSound = document.getElementById("gear")
  var gearSoundC = document.getElementById("gearClose")
  var container = document.createElement("BUTTON")
  container.setAttribute("onclick", "javascript:location.href='/showcase.html'")
  var text = document.createTextNode("Click To Show")
  var mainContainer = document.getElementById("show")


  var checker = document.getElementById('input')
  if (checker.checked) {
    container.appendChild(text)
    container.id = "shower"
    mainContainer.appendChild(container);
    gearSound.play()
    gearSoundC.pause()






  } else if (checker.checked == false) {

    var kids = mainContainer.children
    kids.shower.remove()
    mainContainer.style.display = "hidden"
    gearSound.pause()
    gearSoundC.play();

  }


}

// Email.js API integration
(function () {
  emailjs.init('user_K84b93w68ridY3RN0kRDY');
})();

var myForm = document.querySelectorAll('#contact-form')



const btn = document.getElementById('sendBtn');


document.getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var details = new FormData(myForm[0])
    var user_name = details.get('name')
    console.log(user_name)
    btn.value = 'Sending...';

    const serviceID = 'service_8fsekwa';
    const templateID = 'template_cdpvf4w';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert(`Thank you for your feed back ${user_name}`);
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));

      });
  });




// Copying to Clipboard


const phone =  ()=> {
  
  var copyBoxElement = document.getElementById('phone_no');
    copyBoxElement.contentEditable = true;
    copyBoxElement.focus();
    document.execCommand('selectAll');
    document.execCommand("copy");
    navigator.clipboard.writeText(copyBoxElement.textContent)
    copyBoxElement.contentEditable = false;
    alert("Number has been copied, now you can use Whatsapp to chat")

}
 const emailCopy = ()=>{
  var copyBoxElement = document.getElementById('email_');
  copyBoxElement.contentEditable = true;
  copyBoxElement.focus();
  document.execCommand('selectAll');
  document.execCommand("copy");
  navigator.clipboard.writeText(copyBoxElement.textContent)
  copyBoxElement.contentEditable = false;
  alert("Mail has been copied, now you can use Gmail to chat")

 }





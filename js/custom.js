// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/






function myMap() {
    const loc = { lat: 22.56105263009042, lng:88.41566638286007 };    
    const myMap= new google.maps.Map(document.getElementById("googleMap"),{center:loc,zoom: 15});  
    const myMarker = new google.maps.Marker({
            position: loc,
            map: myMap,
          });
    var map = new google.maps.Map(myMap);
}


// $("#btnSubmit").click(function () {
//     Email.send({
//       Host: "smtp.gmail.com",
//       //Username: "sender@email_address.com",
//       //Password: "Enter your password",
//       To: 'bazaar4283@gmail.com',
//       From: $("#email"),
//       Subject: "Customer Query",
//       Body: `<p> <span>Full Name: ${$("#firstName")} ${$("#lastname")} </span><br/>
//                  <span> Phone: ${$("#phone")} </span> <br/> 
//                  <span> Email : ${$("#email")}<span><br/> 
//                  <span> Message: ${$("#message")}`,
//     //   Attachments: [
//     //     {
//     //       name: "File_Name_with_Extension",
//     //       path: "Full Path of the file"
//     //     }]
//     })
//       .then(function (message) {
//         alert("Your Query has been sent successfully. We will contact you soon")
//       });
//     });

function sendEmail() {
   
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sujeet",
     // Password: "Enter your password",
      To: 'bazaar4283@gmail.com',
      //From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }
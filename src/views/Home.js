import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import clevertap from 'clevertap-web-sdk'


import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';

clevertap.init('TEST-654-Z9R-646Z'); 
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: true});


function createUser() {
 
  clevertap.onUserLogin.push({
   "Site": {
     "Name": "Deven React",            // String
     "Identity": "DevenReact",              // String or number
     "Email": "devenreact@reactweb.com",         // Email address of the user
     "Phone": "+918779636312",           // Phone (with the country code)
     "Gender": "M",                     // Can be either M or F
     "DOB": new Date(),                 // Date of Birth. Date object
  // optional fields. controls whether the user will be sent email, push etc.
     "MSG-email": true,                // Disable email notifications
     "MSG-push": true,                  // Enable push notifications
     "MSG-sms": true,                   // Enable sms notifications
     "MSG-whatsapp": true,              // Enable WhatsApp notifications
   
    }
  })
  console.log("user created");
}

function pushEvent(){
  clevertap.event.push("ReactWeb");
  console.log("event pushed");
}

function eventwithProps(){
  clevertap.event.push("Product Viewed", {
    "Product name":"Casio Chronograph Watch",
    "Category":"Mens Accessories",
    "Price":59.99,
  });
  console.log("Event with Prop pushed")
}
function notifyme(){
  clevertap.notifications.push({
    "titleText":'Would you like to receive Push Notifications?',
    "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
    "okButtonText":'Sign me up!',
    "rejectButtonText":'No thanks',
    "okButtonColor":'#778046'});
    console.log("permission asked");
  
}
function webPopup(){
  clevertap.event.push("ReactPopup");
}
const Home = () => {

  return (
    <>
      <div>
      <div className="container-xs">
      <h2 className="mt-10 mb-20 reveal-from-bottom" data-reveal-delay="200">
             Clevertap    <span className="text-color-primary">React Integration</span>
            </h2>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              CleverTap is a customer engagement and retention platform that provides the functionality to integrate app analytics and marketing !! 
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" onClick={createUser} wideMobile >
                      Login
                    </Button>
                    <Button tag="a" color="primary" wideMobile onClick={pushEvent}>
                   Push Event
                    </Button>
                    <Button tag="a" color="primary" wideMobile onClick={eventwithProps}>
                   Event with Properties
                    </Button>
                    <Button tag="a" color="primary" wideMobile onClick={notifyme}>
                    Push permission
                    </Button>
                    <Button tag="a" color="primary" wideMobile onClick={webPopup} >
                    Web Popuop
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/devennazareCT/devennazareCT.github.io">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
        </div>
    </>
  );
}

export default Home;
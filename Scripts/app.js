// /* main JavaScript file */
// // IIFE - Immediately Invoked Function Expression
// (function(){
//     "use strict";
//    var ParagraphOne=document.getElementById(ParagraphOne);
//      console.log("ParagraphTwo exists");
//     var ParagraphTwo=document.getElementById(ParagraphTwo);
//      var ParagraphThree=document.getElementById(ParagraphThree);
//      // common ways to be used
//      var paragraphs=[];
//      paragraphs[0]="This is my first paragraph. It will be present on the respective page.(first page)"
//       paragraphs[1]="This is my first paragraph. It will be present on the respective page.(second page)"
//        paragraphs[2]="This is my first paragraph. It will be present on the respective page.(third page)"
     
//      //second way
//      //var paragraphs=new Array();
//      if (ParagraphOne) {
//          ParagraphOne.textContent=paragraphs[0];
//      }
//      if (ParagraphTwo) {
//          console.log("ParagraphTwo exists");
//           ParagraphTwo.textContent=paragraphs[1];
//      }
//      if (ParagraphThree) {
//          console.log("ParagraphThree exists");
//           ParagraphThree.textContent=paragraphs[2];
//      }
     
// })();
/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("ParagraphOne");
    paragraphElements[1] = document.getElementById("ParagraphTwo");
    paragraphElements[2] = document.getElementById("ParagraphThree");
     paragraphElements[3] = document.getElementById("ParagraphFour");
     paragraphElements[4] = document.getElementById("ParagraphFive");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "What is the client side?"
+"The majority of the processing will be done at the server and not on the client's internet browser. "+
"When a database needs to be accessed on a server, the web application will post the page back to the web server and server-side code will process the request";
    paragraphs[1] = "Project simply means an individual or collaborative enterprise that is carefully planned and designed to achieve a particular aim."+ 
     "Group projects can help students develop skills specific to collaborative efforts, allowing students to..."

    paragraphs[2] = "I am an international student and I am currently enrolled in the Software Engineering Tech. program at Centennial College. I am a person with a positive attitude, strong determination and good analytical skills."+
    " I have good verbal as well as written skills. I have completed my Secondary Education from India. Through the program I have learned  HTML/CSS,Microsoft-Office and Basics of C# language"+
    "I have lot of curiosity to learn JavaScript,Lnux and Database Management.";
    paragraphs[3]="All websites run on three components: the server, the database, and the client."+
    " The client is simply the browser a person is using to view a site, and it’s where client-side technology is unpacked and processed."+
    " The server is at a remote location anywhere in the world—housing data, running a site’s back-end architecture, processing requests, and sending pages to the browser."+
    " The client is anywhere your users are viewing your site: mobile devices, laptops, or desktop computers. Server-side scripting is executed by a web server; client-side scripting is executed by a browser.";
    paragraphs[4]="Tackle more complex problems than they could on their own."
+"Delegate roles and responsibilities."
+"Share diverse perspectives."
+"Pool knowledge and skills."
+"Hold one another (and be held) accountable."
+"Receive social support and encouragement to take risks."
+"Develop new approaches to resolving differences. "
+"Establish a shared identity with other group members."
+"Find effective peers to emulate."
+"Develop their own voice and perspectives in relation to peers.";
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
        }
    }
    
    
    

    
    
})();
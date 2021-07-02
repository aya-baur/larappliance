//will write html code in linked HTML files
//Header converted into javascript code using: 
// https://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
document.write("<!--mobile sticky phone button-->");
document.write("        <div class=\"spacer-top\"><\/div>");
document.write("        <section class=\"phone-top\">");
document.write("            <a class=\"phonebtn top\" href=\"tel:4164180309\">");
document.write("                <span><\/span>");
document.write("                <span><\/span>");
document.write("                <span><\/span>");
document.write("                <span><\/span>");
document.write("                <p style=\"font-weight: 900;\">&#9742; call: 416-418-0309<\/p>");
document.write("            <\/a>");
document.write("        <\/section>");
document.write("");
document.write("        <!--Header-->");
document.write("        <header>");
document.write("        <nav class=\"header\" id=\"myHeader\">");
document.write("            <!--Logo-->");
document.write("            <a href=\"home\" class=\"image\">");
document.write("                <img src=\"..\/images\/logo.png\" alt=\"logo\">");
document.write("            <\/a>");
document.write("");
document.write("            <!--Hamburger button-->");
document.write("            <div class=\"toggle-menu\">");
document.write("                <div class=\"line line1\"><\/div>");
document.write("                <div class=\"line line2\"><\/div>");
document.write("                <div class=\"line line3\"><\/div>");
document.write("            <\/div>");
document.write("            ");
document.write("            <!--Putting all header links (except for icon and logo) into one div-->");
document.write("            <div class=\"headerLinks\">");
document.write("                <!--Only shown in mobile menu-->");
document.write("                <a class=\"mobileHome\" href=\"home\">Home<\/a>");
document.write("                <!--Dropdown for Services-->");
document.write("                <div class=\"accordion\">");
document.write("                    <div class=\"dropdown\">");
document.write("                        <div class=\"dropbtn\">Services");
document.write("                            <i class=\"arrow up\"><\/i>");
document.write("                        <\/div>");
document.write("                        <div class=\"dropItems\" id=\"itemsList\">");
document.write("                            <a href=\"fridge\">");
document.write("                                <img src=\"..\/images\/icons\/Refrigerator_.png\">");
document.write("                                Fridge Repairs");
document.write("                            <\/a>");
document.write("                            <a href=\"washing-machine\">");
document.write("                                <img src=\"..\/images\/icons\/Washing-machine_.png\">");
document.write("                                Washer Repairs");
document.write("                            <\/a>");
document.write("                            <a href=\"dryer\">");
document.write("                                <img src=\"..\/images\/icons\/Dryer.png\">");
document.write("                                Dryer Repairs");
document.write("                            <\/a>");
document.write("                            <a href=\"dishwasher\">");
document.write("                                <img src=\"..\/images\/icons\/Dishwasher_.png\">");
document.write("                                Dishwasher Repairs");
document.write("                            <\/a>");
document.write("                            <a href=\"oven\">");
document.write("                                <img src=\"..\/images\/icons\/Oven.png\">");
document.write("                                Oven Repairs");
document.write("                            <\/a>");
document.write("                            <a href=\"stove\">");
document.write("                                <img src=\"..\/images\/icons\/Stove.png\">");
document.write("                                Stove Repairs");
document.write("                            <\/a>");
document.write("                            <a href=\"microwave\">");
document.write("                                <img src=\"..\/images\/icons\/Microwave_.png\">");
document.write("                                Microwave Repairs");
document.write("                            <\/a>");
document.write("                            <a href=\"installation\">");
document.write("                                <img src=\"..\/images\/icons\/Kitchen.png\">");
document.write("                                Installation");
document.write("                            <\/a>");
document.write("                        <\/div>");
document.write("                    <\/div>");
document.write("                <\/div>");
document.write("            ");
document.write("                <!--Other Header elements-->");
document.write("                <!-- <a href=\"reviews\">Reviews<\/a> --> <!--might contain fake reviews AND later become a link to genuine Google Reviews page-->");
document.write("                <a href=\"contact\">Contact Us<\/a>");
document.write("                ");
document.write("                ");
document.write("                <a class=\"phonebtn\" href=\"tel:4164180309\">");
document.write("                    <span><\/span>");
document.write("                    <span><\/span>");
document.write("                    <span><\/span>");
document.write("                    <span><\/span>");
document.write("                    416-418-0309");
document.write("                <\/a>");
document.write("                <!--<a class=\"bookbtn\" href=\"book\">Book Now<\/a>-->");
document.write("            <\/div>");
document.write("            ");
document.write("        <\/nav>");
document.write("        <\/header>");
document.write("        <!--End of Header-->");





//header burger working condition
const burger = document.querySelector('.toggle-menu');
const nav = document.querySelector(".headerLinks");

const navLinks = document.querySelectorAll(".headerLinks a");

burger.addEventListener('click', ()=>{
    //Toggle Nav
    nav.classList.toggle('header-active');
});

const header = document.querySelector(".header");
burger.addEventListener('click', ()=>{
    //toggle button changing to x
    header.classList.toggle('toggle');
});

//accordion (Services) close/open function on mobile
const dropbtn = document.querySelector(".dropbtn"); 
const dropItems = document.querySelector(".dropItems");
dropbtn.addEventListener('click', ()=>{
    dropbtn.classList.toggle('arrow');
    dropItems.classList.toggle('arrow');
});

//creating a variable to change phone number in the entire website
// document.querySelectorAll(".phonebtn").innerHTML = 4164180309;
// const phone=4164180309;
// const phonebtn=document.getElementsByClassName(".phonebtn");
// phonebtn.appendChild(phone);



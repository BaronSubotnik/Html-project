import PageHandler from "./PageHandler.js";

document.addEventListener('DOMContentLoaded', () => 
{
    const navBar = document.getElementById("id_navBar")
    const  footer = document.getElementById("id_footer")
    
    const page = new PageHandler(document)
    page.fillNavBar(navBar)
    page.fillFooter(footer)
})
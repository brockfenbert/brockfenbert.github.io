/**
 * Created by bf840r on 4/12/19.
 */

/* Function to hold the text for skills icons */
function showText(info) {
    if (info === 'java') {
        document.getElementById("skill-text").innerHTML =
            "I first learned java in AP computer science, but have continued to develop my skills through both class" +
            " and work. While working at Wayfair, I spent a lot of time with the Wicket framework to develop a " +
            "web app to ineract with Apache Solr. Sadly, I have lost the code for my first project in java, a text-based rpg I made during " +
            "APCS. I've searched my old flash drives many times to find it, but it appears to only have existed " +
            "on school computers (not a mistake I will make again)."
    } else if (info === 'cplusplus') {
        document.getElementById("skill-text").innerHTML =
            "C++ was used in many of the engineering classes I have taken. I learned the basics in Cornerstone of " +
            "Engineering where I made small programs that did tasks such as solve the Tower of Hanoi in the least " +
            "number of steps. In Embedded Design, I used C++ in combination with Simulink to program a robotic arm.<br><br><br><br>";
    } else if (info === 'puppet') {
        document.getElementById("skill-text").innerHTML =
            "I learned to use Puppet at Wayfair. Working with puppet gave me the opportunity to" +
            " interact with and troubleshoot on a linux machine while learning some new programming tricks at the " +
            "same time. I learned to use the CLI to do things from a simple grep command to tracing the contents" +
            " of packages sent to and from specific ports in addition to the role/profile structure of " +
            "puppet development.<br><br>";
    } else if (info === 'csharp') {
        document.getElementById("skill-text").innerHTML =
            "The C# I know is purely self-taught for game development in Unity. My " +
            "first time using C#/Unity was during the NASA SpaceApps Hackathon creating Planet Polluter, and since I have" +
            " been working on making some games on my own. My first goal was a 2D platformer (I've played a fair " +
            "amount of flash games so my mind went right there), but have scaled back my initial plans to making " +
            "clones of games like snake to get the basics down.";
    } else if (info === 'html') {
        document.getElementById("skill-text").innerHTML =
            "I'm lumping HTML/CSS/JavaScript all under the same category of skills. My exposure to these languages " +
            "comes from creating this website and working with Wicket. A lot of this website uses Bootstrap for the " +
            "CSS/JavaScript, but it's done custom by me where necessary (like this sweet hover-to-reveal-text " +
            "function). At Wayfair, one of my teammates spent more time on the style while I worked on the backend for the Wicket" +
            " web app, but I still got to add in the occasional div.";
    }
}

/* Navbar fucntion */
$.get("nav.html", function (data) {
    $("#nav-placeholder").replaceWith(data);
});
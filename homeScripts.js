/**
 * Created by bf840r on 4/12/19.
 */

/* Function to hold the text for skills icons */
function showText(info) {
    if (info === 'java') {
        document.getElementById("skill-text").innerHTML =
            "I first learned Java in AP computer science, but have continued to develop my skills through both class" +
            " and work. While working at Wayfair and Poloniex, I worked on Java web apps created using two different frameworks." +
            " In class, using Java was the main focus of classes such as Object Oriented Design and was my language of " +
            "choice for programming challenges for other classes."
    } else if (info === 'cplusplus') {
        document.getElementById("skill-text").innerHTML =
            "C++ was used in many of the engineering classes I have taken. I learned the basics in Cornerstone of " +
            "Engineering where I made small programs that did tasks such as solve the Tower of Hanoi in the least " +
            "number of steps. In Embedded Design, I used C++ in combination with Simulink to program a robotic arm.<br><br><br><br>";
    } else if (info === 'puppet') {
        document.getElementById("skill-text").innerHTML =
            "I learned to use Puppet at Wayfair. Working with Puppet gave me the opportunity to" +
            " interact with and troubleshoot on a Linux machine while learning some new programming tricks at the " +
            "same time. I learned to use the CLI to do things from a simple grep command to tracing the contents" +
            " of packages sent to and from specific ports in addition to the role/profile structure of " +
            "Puppet development.<br><br>";
    } else if (info === 'csharp') {
        document.getElementById("skill-text").innerHTML =
            "I learned C# in order to make games in Unity. This started as a purely self-taught language." +
            " This summer, I took a course through Udemy on 2D development and later a class on 3D game" +
            " development through Northeastern both focused on C#/Unity. Random Unity projects is where I spend " +
            "most of my personal project time.";
    } else if (info === 'html') {
        document.getElementById("skill-text").innerHTML =
            "I'm lumping all web development languages under the same category of skills. My exposure to these languages " +
            "started with working on this website and was expanded during my time at Poloniex. A lot of this website uses Bootstrap for the " +
            "CSS/JavaScript, but it's done custom by me where necessary (like this sweet hover-to-reveal-text " +
            "function). At Poloniex, a lot of my time was spent working with legacy PHP code and transferring that to VUE.";
    }
}

/* Navbar fucntion */
$.get("nav.html", function (data) {
    $("#nav-placeholder").replaceWith(data);
});

/* 
 * jQuery SHEETS CHEAT
 * https://quickref.me/jquery
*/

// jQuery is a fast, small, and feature-rich JavaScript library. 
// It simplifies things like HTML document traversal, manipulation, event handling, and animations.

// jQuery Syntax: $(selector).action()

/* ============================= SELECTORS ============================= */

// Basic Selectors
$("*");            // Select all elements
$("tag");          // Select all elements with a specific tag
$(".class");       // Select all elements with a specific class
$("#id");          // Select a single element with a specific ID

// Positional Selectors
$("tag:even");             // Select even-indexed elements (starting from 0)
$("tag:odd");              // Select odd-indexed elements
$("tag:first");            // Select the first element
$("tag:last");             // Select the last element
$("tag:first-child");      // Select the first child of its parent
$("tag:last-child");       // Select the last child of its parent
$("tag:first-of-type");    // Select the first element of its type
$("tag:last-of-type");     // Select the last element of its type

// Special Selectors
$(":header");       // Select all header elements (h1, h2, ..., h6)
$(":animated");     // Select all animated elements
$(":focus");        // Select the currently focused element
$(":empty");        // Select all empty elements
$(":parent");       // Select elements that have children
$(":hidden");       // Select all hidden elements
$(":visible");      // Select all visible elements
$("[attribute]");   // Select elements with a specific attribute

// Attribute Selectors Examples
$("tag[attribute='value']");      // Attribute equals value
$("tag[attribute!='value']");     // Attribute does not equal value
$("tag[attribute*='value']");     // Attribute contains value
$("tag[attribute^='value']");     // Attribute starts with value

// Input Selectors
$(":input");           // Select all input elements
$(":text");            // Select all text inputs
$(":password");        // Select all password inputs
$(":file");            // Select all file inputs
$(":submit");          // Select all submit buttons
$(":enabled");         // Select all enabled elements
$(":disabled");        // Select all disabled elements
$(":checked");         // Select all checked elements
$(":selected");        // Select all selected elements

/* ============================= TRAVERSING ============================= */

// Traversing Parent/Child Relationships
$(".child").parent();           // Get the direct parent
$(".child").parents();          // Get all ancestors
$(".child").parentsUntil("#id");// Get ancestors up to a specific element
$(".parent").children();        // Get all direct children
$(".parent").find(".class");    // Find descendants with a specific class
$(".element").siblings();       // Get all siblings
$(".element").next();           // Get the immediate next sibling
$(".element").nextAll();        // Get all subsequent siblings
$(".element").nextUntil(".stop");// Get all siblings up to a specific element
$(".element").prev();           // Get the immediate previous sibling
$(".element").prevAll();        // Get all preceding siblings
$(".element").prevUntil(".stop");// Get preceding siblings up to a specific element

// Filtering
$(".element").first();          // Get the first element
$(".element").last();           // Get the last element
$(".element").eq(index);        // Get the element at a specific index
$(".element").not(".class");    // Get all elements except those with a specific class
$("p:contains('text')");        // Select elements containing specific text

/* ============================= CLASS OPERATIONS ============================= */

$(".element").addClass("new-class");      // Add a class
$(".element").removeClass("old-class");  // Remove a class
$(".element").toggleClass("class");      // Toggle a class on/off
$(".element").hasClass("class");         // Check if an element has a specific class

/* ============================= CSS MANIPULATION ============================= */

$(".element").css("property", "value");  // Set a single CSS property
$(".element").css({                     // Set multiple CSS properties
    "color": "red",
    "font-size": "16px"
});

/* ============================= EFFECTS ============================= */

// Fading
$(".element").fadeIn("slow");            // Fade in
$(".element").fadeOut("fast");           // Fade out
$(".element").fadeToggle("400");         // Toggle fade in/out
$(".element").fadeTo("slow", 0.5);       // Fade to specific opacity

// Animations
$(".element").animate({                  // Custom animation
    left: "250px",
    opacity: 0.5,
    height: "150px"
}, "slow");

/* ============================= DOM MANIPULATION ============================= */

// Text/HTML Manipulation
$(".element").text("New Text");          // Set text content
$(".element").html("<b>New HTML</b>");   // Set HTML content
$(".element").val("new-value");          // Set value of an input field

// Append/Prepend
$(".parent").append("<div>Child</div>"); // Append to end
$(".parent").prepend("<div>Child</div>");// Prepend to start

// Insert Before/After
$("<div>Before</div>").insertBefore(".element");
$("<div>After</div>").insertAfter(".element");

// Remove/Clear Content
$(".element").remove();                  // Remove element completely
$(".element").empty();                   // Remove content inside an element

// Attributes
$(".link").attr("href", "https://example.com"); // Get/Set attributes

/* ============================= EVENTS ============================= */

$(".element").bind("click", function() { // Bind multiple events
    $(this).hide();
});

$(".element").on("click dblclick", function() { // Bind multiple events with `on`
    console.log("Event triggered");
});

$(".element").one("click", function() { // Event fires once
    alert("Clicked once");
});

/* ============================= UTILITIES ============================= */

// Iterate over elements
$(".elements").each(function(index) {
    console.log(index, $(this).text());
});

// Prevent Default Action
$("form").on("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
});

// Dimensions
$(".element").width();       // Get width
$(".element").height();      // Get height

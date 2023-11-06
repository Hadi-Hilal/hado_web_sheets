                                      /*  global jQuery Api  */

  //jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation,

  //jQuery Sayantx: $(selector).action() => jQuery object = $ + selector = ('')

                                      /*  selectors  */

  $("*")                           // this select all the elemnt
  $("tag")                        // this select any tag html we need in the page
  $(".class")                    // this select any class in the page
  $('#id')                      // this select any id in the page
  $('tag:even')                // this select the 1,3,5,7,9..etc of the element
  $('tag:odd')                // this select the 2,4,6,8...etc of the element
  // note if we need to  select many tag or many id or ...etc we just put the comma (,) ex: 
  $('p,div,aside')

  $('tag:first')                // this select the first element
  $('tag:last')                // this select the last element
  $('tag:first-child')        // this select first of every element have father 
  $('tag:last-child')        // this select the last of every element have father 
  $('tag:first-of-type')    // this select first of the type element 
  $('tag:last-of-type')    // this select the last of the type element
  $(':header')            // this select all the headings(h1,h2,h3,h4,h5,h6) in html page
  $(':animated')         // this select all the animated in html page
  $(':focus')           // this select the focus input html page
  $('element:has('element')')         // this select the element has element
  $(':empty')                        // this select all the empty element in html page
  $(':parent')                      // this select all the element have parent in html page
  $(':hidden')                     // this select all the hidden element in html page
  $(':visible')                   // this select all the visible elemnt in html page
  $(':lang')                     // this select all the element has attributes lang in html page
  $('[attributes here]')        // this select all the element has this attributes in html this below some ex about it
						  /* [attribute]
						element[attribute]
						element[attribute='value']
						element[attribute!='value']
						element[attribute*='value']
						element[attribute~='value']
						element[attribute^='value']
						*/

  $(':input')                     // this select all the input in html page this below some ex about it
								/* to select any input
								:text
								:password
								:file
								:image
								:submit
								:enabled
								:disabled
								:checked
								:Selected
					         	*/









   // A function passed into the jQuery object runs on document.ready, which occurs after the DOM has been loaded.


                                      /*  trasvering  */
      // to more info about selectors this link will be help us --http://api.jquery.com/category/selectors/--
  //to define element
  .parent()                            //this to choose father the element ; 1 element
  .parents()                          //this to Choose  all father the element ; many element
  .parentsUntil()                    //this to Choos efather until the element ; many element
  .children()                       //this to Choose child the element   ; 1 element
  .find()                          //this to find any the element   ; many  element
  .find('*') ;                    //we this ('*') to find all the element   ; all  element
  .siblings();                   //this to Choose brothers to same fathers
  .next( [selector ] );         //Get the immediately following sibling of each element in the set of matched elements.
                               //If a selector is provided,  it retrieves the next sibling only if it matches that selector.
  .nextAll();                 // this Choose all the next element
  .nextUntil();              // this Choose all the next element until element we chose 
  .prev();                  // this Choose the previous element 
  .prevAll();              // this Choose all the previous element
  .nextUntil();           // this Choose all the previous element until element we chose  
  .first()               // this code to Choose the first child
  .last()               // this code to Choose the last child
  .eq(number)          // this code to select the any element we know his number
  .not()              // this code select all the element except what we dont want


                                     /*  filters  */
      // we use filter to search to word founded in any element html 
	   // this design to understand more
	/* 
	   <body>
	   <div

        <p> he we are magenta </p>
	   	   </div>
	   </body>
	*/

    // filter
    $("p:contains('magenta')")
  // to more info about Category: Filtering this link will be help us --http://api.jquery.com/category/traversing/filtering/--

  // dealing with classes
  .addClass();                 //Adds the specified class(es) to each element in the set of matched elementsThis method
  // is often used with .removeClass() to switch elements' classes from one to another, like so:

  $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

  .toggleClass();             //  Add or remove one or more classes from each element in the set of matched elements,
                             // depending on either the class's presence or the value of the state argument like so ;

         // <div class="tumble">Some text.</div>
        // The first time we apply $( "div.tumble" ).toggleClass( "bounce" )
       // we get the following:
      // <div class="tumble bounce">Some text.</div>

   .css();              //Get the value of a computed style property for the first element in the set of matched elements
	                      // or set one or more CSS properties for every matched element.


    /* jQuery Fading Methods
     With jQuery you can fade an element in and out of visibility.

     jQuery has the following fade methods: */

     fadeIn();
     fadeOut();
     fadeToggle();
     fadeTo();
     // Syntax:    // $(selector).fadeIn(speed,callback);


   /* he optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.

    The optional callback parameter is a function to be executed after the fading completes.

    The following example demonstrates the fadeIn() method with different parameters:

    jQuery fadeTo() Method:

    The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1). */

      Syntax:
          $(selector).fadeTo(speed,opacity,callback);


    // jQuery Animations - The animate() Method
     // The jQuery animate() method is used to create custom animations.

       Syntax:

       $(selector).animate({params},speed,callback);

       ex;  $("button").click(function(){
              $("div").animate({
              left: '250px',
              opacity: '0.5',
              height: '150px',
              width: '150px'
                });
               });

       // css({"propertyname":"value","propertyname":"value",...});

       $("p").css({"background-color": "yellow", "font-size": "200%"});


       // html element 

       .text()    // this code just to show text in the elemnt
       .html()    // this code to show the text and html elemnt
       .val()     // this get the value from input html
       .remove()  // this code to remove any element html completely
       .empty()   // this code make the element empty
       .attr()    // this to get attribute from html element
       //note: if we want change attribute any element we should the old attr and the new attr 
       // ex:
        $("a").attr({
            "target" : "zc",
            "href"   : "https://www.jguery.com"
        })

	  :checked;       // Matches all elements that are checked or selected.

	  .append();    //Insert content, specified by the parameter, to the end of each element in the set of matched elements.

	  //ex
	   $( ".inner" ).append( "<p>Test</p>" );

	   .prepend(); // Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
	   .after();
	   .before();
	   // this design to understand more
	/* 
	   <body>
	   <!--- here well goes before --->
	   <div>
		<!--- here well goes prepend --->
		normal text here
		<!--- here well goes append --->
	   </div>
	   <!--- here well goes after --->
	   </body>
	*/

    // difrence between the append and appendTo
	/* 
	 child  => appendTo => parent 
	 parent => append   => child
	*/


   .insertBefore();  //  Insert every element in the set of matched elements before the target like so .
    $( "<p>Test</p>" ).insertBefore( ".inner" );

    .insertAfter();  // Insert every element in the set of matched elements after the target.

    .each();        //Iterate over a jQuery object, executing a function for each matched element.

    monitorEvents(); //Listen to events of a certain type like so;
    monitorEvents(document.body, "click"); //Listen to click events on the body of the page:


    unmonitorEvents(); //to stop listening.

    evt.preventDefault();     // line instructs the browser not to perform the default action.
    .isDefaultPrevented()    // this check if default prevented
    .trigger();         // Execute all handlers and behaviors attached to the matched elements for the given event type

   // Demintions
   .width()       // calculate the width of the element


                                                      /* events */
.bind()                                      // we use the bind to use multi events ex

$('div').bind('click' , function(){
  
  $(this).hide();
});

.on()                                      // we use the on to use multi events ex

  // custom event
   $("p").on("mycustom" , function(event , mheight , mwidth){
        $(this).css("background-color" , "#00f").height(mheight).width(mwidth);
    })

    $("button").on("click" , function(){
        $("p").trigger("mycustom" , ["100", "300"]);
    })
    // map event
 $("p").on({
        click: function(){ $(this).text("you click 1");} ,
        dblclick: function(){ $(this).text("you click 2");} ,
    })

 .one()                            // this like the on evet but we do the event just once time 
 .focus()                          // this event to focus on element 
 .blur()                           // this event when we blur from the element
 .select()                         // this select the element
 .resize()                         // this when we resize our website
 .scroll()                         // this event to check if we scroll
 .scrolltop()                      // this event to chec if we scrool the page to top
 .pageX()                          // this event to know x axisx
 .pageY()                          // this event to know y axisx
 .offset()                         // this to set place the element
 .submit()                         // this if we want submit 
 .delay()                          // this delay the any thing we need 
 .clone()                          // this to clone element 
 .detach()                         // this to remove element
 .hasClass()                       // this check if the element has class
 .offset()                         // this to know to top and right the element from the document 
 .postition()                      // this to know postiton the element from the parent
 .prop()                           // this set the property
 .replaceWith()                    // this to replace any element in html


                                                     /* oop js */
// to extend any element 
$.extend($.expr[':'],{});
// ex
$.extend($.expr[':'],{
        more100p : function(element){
            if ($(element).height() > 100) {
                return $(element);
            }
        },
        getred : function(element){
            if ($(element).css('color') === "rgb(165, 42, 42)") {
                return $(element);
                console.log("yes");
            }
        }
    });

    $("ul li:more100p").css("color","#00f");
    $("ul li:getred").css("border" , "#00f");




   




































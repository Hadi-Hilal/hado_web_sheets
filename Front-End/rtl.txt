

===========================================================
-----IMPORTANT NOTES TO BUILD MULTI LANGUAGE WEBSITE-------
===========================================================


// proplems and solve it:

---- dont start with arabic design;
---- dont use words direct in temeplate;
---- margin and padding for parent better than child;
---- margin and padding left + right than one direction;
---- dont forget page dir attripute in html tag , all the block elements in page depend on it;
---- highlight or put comment what at every element you edit it in rtl ;
---- use inline-block instead of float (if) you dont need use float ;
---- rtl file it just for direction ;
---- rtl file after main css file ;
---- consider word length when specify element width;
---- dont destroy nesting when creating rtl file ;
---- dont use element you need to change it , use pesudo element ;


// amazing feauters 

---- <bdi></bdi> this tag help you to isolate text but not supported 
---- attr [dir =" auto"] this attr html5 this attr make dir the element with dir page ;
---- text-align :start; & text-align : end ; -> this property css3 this a power property but not supported in ie and edge browsers ;

// helper classes

---- use frame works like [bootstrao or foundation];
---- if you use your frame work build a special classes like :
* float classes [pul-right & pul-left].
* text  classes [text-right & text-left].
* direction classes [ltr-dir & rtl-dir].

// what we should put in rtl ?

---- margin
---- padding
---- border-radius
---- pesudo elements
---- border
---- box-shadow
---- float
---- transform
---- text-align
---- postition

























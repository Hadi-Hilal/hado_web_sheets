/**
 * Created by hadi on 8/23/2018.
 */
// my code

tybeof()                                                     //تحديد نوع الdata
get                                                         //معطيات الكمبيوتر
set                                                        //معنى أعادة تعيين
nodes                                                     // وتعني تعليق اونص او عنصر


// Function syantx

new Date()
.insertBefore()

//--------------------------------------------------------------------------------

// Array syantx

.length();                                              //عد حروف المصفوفة أو السلسلة
array.toString()                                       //تحويل المصفوفة لسلسلة
array.join("- . $")                                   //تحويل المصفوفة لسلسلة وأختيار أداة الربط بين السلسلة
unshift                                              //أضافة عنصر أول المصفوفة
shift                                               //حذف  عنصر أول المصفوفة
.splice(number , optiona)                          //حذف وأضافة عنصر المصفوفة
.sort( )                                          // ترتيب عناصر المصفوفة بترتيب أبجدية
.reverse( )                                      // عكس ترتيب عناصر المصفوفة بترتيب أبجدية
.slice(start, end)                              // أحذ شريحة من المصفوفة
.concat()                                      // دمج مصفوفة
.indexOf( "index")                            // أيجاد رقم عنصر مصفوفة
.lastindexOf( "index")                       // أيجاد رقم عنصر مصفوفةمن الأخر

//--------------------------------------------------------------------------------
//ITERATORS

//Iteration methods                  // عدة طرق تأخذ كوسائط الدالات ليتم استدعاؤها مرة أخرى أثناء معالجة المصفوفة
.forEach();                         //يستخدم لتنفيذ نفس الكود على كل عنصر في المصفوفة ولكن لا يغير المصفوفة ويعيد undefined
.map();                            // تنفيذ نفس التعليمة البرمجية على كل عنصر في المصفوفة وإرجاع مصفوفة جديدة مع العناصر المحدثة
.filter();                        //يتحقق كل عنصر في مصفوفة لمعرفة ما إذا كان يستوفي معايير معينة ويعيد مصفوفة جديدة مع العناصر التي ترجع الحقيقة للمعايير.
.findIndex();                    // إرجاع فهرس العنصر الأول من المصفوفة يفي بشرط في وظيفة رد الاتصال. تقوم بإرجاع -1 إذا كان أي من العناصر في المصفوفة يفي الشرط.
.reduce();                      // يتكرر من خلال صفيف ويأخذ قيم العناصر ويعيد قيمة واحدة.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

//------------------------------------------------------------------------------
// String syantx

.toString(string)                                               //تحول العنصر إلى سلسلة
.split(sperator, limit)                                        //تحول السلسلة إلى مصفوفة
.substr(start{require}, length{optiona})                      // أحذ شريحة  من السلسلة
.substring(start{require}, end{optiona})                     // أحذ شريحة  من السلسلة
.charArt("number of index")                                 //معرفة العنصر في السلسة بكتابة رقمه
.charCodeAt("number of index")                             //معرفة كود العنصر في السلسة بكتابة رقمه
.fromcharCode("number of unicode")                        //;كتابة العنصر في السلسة بكتابة كود ترميذه
.replace("value , new value")                            //تغيير العنصر في السلسة إلى عنصر جديد
.concat()                                               // جمع سلسلتين
.toLowerCase()                                         //لتحويل حروف السلسلة إلى أحرف صغيرة
.toUpperCase()                                        //لتحويل حروف السلسلة إلى أحرف صغيرة
.trim()                                              //أزالة المسافات من السلسلة

//--------------------------------------------------------------------------------


// For syantx

var i ; for (i=x; i<x; ++i) {};
var i=x ; while (i<x) { ++i; };
var i=x ; do { ++i; } while (i<=x);
continue                                                  // تستبعد العنصر في الشرط ثم تكمل
break                                                    // توقف الشرط

// Math syantx

Math.ceil(number) ;                                            // تحدد سقف أو أعلى الرقم للرقم ذاته
Math.floor(number);                                           //تحدد أدنى الرقم للرقم ذاته
Math.round(number) ;                                         //تحدد تقريب الرقم
Math.min(number, number,number );                           //تحدد أقل رقم بين الأرقام
Math.max(number, number,number ) ;                         //تحدد أعلى رقم بين الأرقام
Math.random() ;                                           //تعطي رقم عشوائي

//--------------------------------------------------------------------------------

// Regular expression syntax

/*i                                                          // وتعني لافرق بين الأحرف الكبيرة والصغيرة
g                                                           // وتعني التعميم
m                                                          // وتعني البحث في أكثر من سطر
[element]                                                 //لتحديد العنصر
[^element]                                               // تحديد كل شيئ ماعدا العنصر
letter +                                                // تحديد حرف واحد
letter {number}                                        // تحديد أكثر من حرف
letter {number,}                                      // تحديد على الأقل أكثر من حرف
*/
//Date syantx

new Date();                                              //كتابة التاريخ المحلي
new Date(millesecond);                                  //كتابة التاريخ من أول بدء النظام 1970
.getDate();                                            // تستخدم لكتابة اليوم
.getDay() ;                                           // يكتب ترتيب اليوم في الاسبوع
.getFullYear() ;                                     // يكتب كم يوم تبقى في السنة
.setDate()  ;                                       // أعادة تعيين التاريخ
now()   ;                                          // تكتب لنا التاريح من 1970 إلى وقتنا الحالي
parse();
.toIsoString()  ;                                 //تحول كتابة الوقت ألى شكل ايزو
.toDateString()  ;                               // تكتب الوقت بشكل سلسلة
.toTimeString()   ;                             // تكتب التاريخ بشكل زمن

//--------------------------------------------------------------------------------

//numbers

.parseInt() ;                                                         // تحول السلسلة إلى رقم

//dom.events


document.getElementById();                                          // وتعني منادة العنصر عن طريق اي دي
document.getElementsByTagName() ;                                  // مناداة جميع العناصر التي تحمل نفس التاغ مثل div or p ....
document.getElementsByClassName() ;                               // مناداة جميع العناصر التي تحمل نفس اسم الكلاس
.textContent                                                    //  أظهار النص الموجود في العنصر
.querySelector ()                                              // تحدد عنصر من html
element.className =                                           // يغير أسم الكلاس
element.id  =                                                // يغير الفيمة
element.Attribute                                           // يغير Attribute
.setAttribute('src', 'http://placehold.it/100/0000')       // تعين قيمة جديدة ل attribute مثل المثال التالي ->
.hasAttribute()                                           // تستخدم في الشرط if
.removeAttribute()                                       //تستحدم لأزالة attribute
.add()                                                  // تستخدم للأضافة
.remove()                                              // تستحدم لأزالة كلاس
.toggle()                                             // تستخدم لأزالة أو أضافة كلاس
.childElementCount                                   // تقوم بحساب عدد أطفال لأب
.children                                           // تقوم ب أظهار الأطفال في عنصر لأب
.ChildNodes                                        // تقوم بحساب عدد العنصر في الأب مع أعتبار النص والتعليق عنصر
.firstChild = childNodes[0]                       // تقوم بأظهار أول طفل من العناصر مع أعتبار التعليق والنص عنصر
.firstElementChild                               // تقوم بأظهار أول طفل من العناصر
.lastChild = childNodes[0]                      // تقوم بأظهار أخر طفل من العناصر مع أعتبار التعليق والنص عنصر
.lastElementChild                              // تقوم بأظهار أخر طفل من العناصر
.appendChild()                                // تستخدم لأضافة طفل للأب
.removeChild()                               //أزالة طفل من الأب
.nodeName                                   //مع أعتبار النص والتعليق عنصر أسم العنصر
.tagName                                   // اسم العنصر
.cloneNode(true)                          // نسح اي عنصر


//--------------------------------------------------------------------------------

    //Events

/* .clientHeight                                   // تحسب أرتفاع  العنصر المرئي
.clientWidth                                      // تحسب عرض  العنصر المرئي
.scrollHeight                                    //  تحسب أرتفاع العنصر المرئي والغير مرئي
.scrollWidth                                    // تحسب عرض العنصر المرئي والغير مرئي
.offsetHeight                                  //  تحسب أرتفاع العنصر المرئي والغير مرئي بلأضاغة ل paddin & border
.offsetWidth                                  // تحسب عرض العنصر المرئي والغير مرئي بلأضاغة ل paddin & border
.preventDefault                              // تمنع أكمال الكود


// document

.inputEncoding                                     //معرفة لغة ترميز الصفحة
.lastModified                                     // يعطينا أخر تعديل في الصفحة
.url                                             // تعطينا رابط الصفحة
.createElement                                  // لأنشاء عنصر في html
.createTextNode()                              //لأنشاء نص في html
.createTextNode()                             //لأنشاء تعليق في html
.createComment                               // أنشاء تعليق
*/
//مراحل أضافة class أو أي Attribute لصفحة html ب أستخدام js

// أولا بناء class
var myAttr = document.createAttribute('class');

// ثانيا تغيير value
myAttr.value = 'custom';

// أخيرا أضافة attributes للعنصر
myElement.setAttributeNode('myAttr');

//------------------------------------------------------------------------------

// important Events

window.onload;                                            //أنتظار تحميل الصفخة
window.onscroll ;                                        //عند القيام ب scroll للفأرة
window.onresize                                         // عند القيام بتكبير وتصغيرالشاشة
.onfocus                                               // عند القيام يتركيز على الغنصر
.onblur                                               // عند الأبتعاد عن العنصر
.blur()                                              // لأزالة التركيز على العنصر
.focus()                                            //للتركيز على العنصر
.onclick                                           // للضغط يدويا باستخدام الماوس
.ondblclick                                       // للضغط يدويا مرتين باستخدام الماوس
.click()                                         // للضغط أليا باستخدام الماوس
.oncontextmenu                                  // تستخدم عند الضغط بزر اليمين للفأرة
.onmouseleave                                  // تستخدم عند ب أبعاد الماوس
.onkeyup                                      // عند مغادرة الضغط على الكيبورد
.onkeydown                                   // عند القيام بالكتابة
.onkeypress                                 // عند الضغط على الكيبورد
eval;                                      // تقوم يعمليات حسابية


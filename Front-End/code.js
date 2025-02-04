/**
 * JS SHEETS CHEAT
 * Created by Hadi on 8/23/2018.
 * for more details https://quickref.me/javascript.html
 */

// Data Type Functions
typeof("hi"); // تحديد نوع الdata

// Get and Set
get; // معطيات الكمبيوتر
set; // إعادة تعيين

// DOM Nodes
nodes; // وتعني تعليق عنصر أو وحدة


// Array Syntax
array.length; // عد العناصر في المصفوفة أو السلسلة
array.toString(); // تحويل المصفوفة إلى سلسلة
array.join("- . $"); // تحويل المصفوفة إلى سلسلة مع تحديد أداة الربط
array.unshift(); // إضافة عنصر في بداية المصفوفة
array.shift(); // حذف العنصر الأول من المصفوفة
array.splice(number, optional); // حذف أو إضافة عنصر في المصفوفة
array.sort(); // ترتيب عناصر المصفوفة بترتيب أبجدي
array.reverse(); // عكس ترتيب عناصر المصفوفة
array.slice(start, end); // أخذ شريحة من المصفوفة
array.concat(); // دمج مصفوفات
array.indexOf("index"); // إيجاد رقم العنصر في المصفوفة
array.lastIndexOf("index"); // إيجاد رقم العنصر في المصفوفة من آخرها


// Iterators (Array Iteration Methods)
array.forEach(); // تنفيذ نفس الكود على كل عنصر في المصفوفة بدون تغيير المصفوفة
array.map(); // تنفيذ نفس الكود على كل عنصر في المصفوفة وإرجاع مصفوفة جديدة
array.filter(); // فحص كل عنصر في المصفوفة لإيجاد العناصر التي تحقق شروط معينة
array.findIndex(); // إرجاع فهرس أول عنصر يفي بالشرط
array.reduce(); // تقليص المصفوفة إلى قيمة واحدة


// String Syntax
string.toString(); // تحويل العنصر إلى سلسلة
string.split(separator, limit); // تحويل السلسلة إلى مصفوفة
string.substr(start, length); // أخذ جزء من السلسلة
string.substring(start, end); // أخذ جزء من السلسلة
string.charAt(index); // معرفة العنصر في السلسلة بناءً على الرقم
string.charCodeAt(index); // معرفة كود العنصر في السلسلة بناءً على الرقم
String.fromCharCode(code); // كتابة العنصر بناءً على كود Unicode
string.replace("oldValue", "newValue"); // استبدال جزء من السلسلة بقيمة جديدة
string.concat(); // دمج سلسلتين
string.toLowerCase(); // تحويل السلسلة إلى أحرف صغيرة
string.toUpperCase(); // تحويل السلسلة إلى أحرف كبيرة
string.trim(); // إزالة المسافات من السلسلة


// Loop Syntax
for (let i = x; i < x; ++i) {}; // استخدام الحلقة for
while (i < x) { ++i; } // استخدام الحلقة while
do { ++i; } while (i <= x); // استخدام الحلقة do-while
// continue;  الاستمرار في الدورة مع تخطي العنصر الحالي
// break; // الخروج من الحلقة


// Math Syntax
Math.ceil(number); // التقريب للأعلى
Math.floor(number); // التقريب للأسفل
Math.round(number); // تقريب الرقم لأقرب عدد صحيح
Math.min(num1, num2, num3); // إيجاد أصغر رقم بين الأرقام
Math.max(num1, num2, num3); // إيجاد أكبر رقم بين الأرقام
Math.random(); // توليد رقم عشوائي


// Regular Expressions Syntax
/* 
i     // عدم التمييز بين الحروف الكبيرة والصغيرة
g     // التعميم (البحث في كل النصوص)
m     // البحث في عدة أسطر
[element] // تحديد العنصر
[^element] // تحديد كل شيء ما عدا العنصر
letter+ // تحديد حرف واحد أو أكثر
letter{number} // تحديد عدد الحروف
letter{number,} // تحديد على الأقل عدد الحروف
*/


// Date Syntax
new Date(); // كتابة التاريخ المحلي
var date = new Date(milliseconds); // كتابة التاريخ من تاريخ بدء النظام (1970)
date.getDate(); // الحصول على اليوم من الشهر
date.getDay(); // الحصول على يوم الأسبوع
date.getFullYear(); // الحصول على السنة
date.setDate(); // إعادة تعيين اليوم
date.now(); // الحصول على التاريخ والوقت من بداية النظام
date.parse(); // تحليل التاريخ
date.toISOString(); // تحويل التاريخ إلى صيغة ISO
date.toDateString(); // تحويل التاريخ إلى سلسلة
date.toTimeString(); // تحويل الوقت إلى سلسلة


// Numbers Syntax
parseInt(); // تحويل السلسلة إلى عدد صحيح


// DOM Events
document.getElementById("id"); // الحصول على العنصر بواسطة الـ id
document.getElementsByTagName("tag"); // الحصول على العناصر بواسطة التاج
document.getElementsByClassName("class"); // الحصول على العناصر بواسطة الكلاس
element.textContent; // إظهار النص داخل العنصر
document.querySelector(); // تحديد عنصر باستخدام CSS selector
element.className = "className"; // تغيير اسم الكلاس
element.id = "id"; // تغيير الـ id
element.setAttribute("attribute", "value"); // تعيين قيمة لـ attribute
element.hasAttribute("attribute"); // التحقق إذا كان العنصر يحتوي على attribute
element.removeAttribute("attribute"); // إزالة attribute
element.addEventListener("event", function(){}); // إضافة حدث إلى العنصر


// Important Events
window.onload; // عند تحميل الصفحة
window.onscroll; // عند القيام بالتمرير
window.onresize; // عند تغيير حجم الشاشة
element.onfocus; // عندما يتم التركيز على العنصر
element.onblur; // عندما يتم فقدان التركيز على العنصر
element.focus(); // تركيز على العنصر
element.blur(); // إلغاء التركيز عن العنصر
element.onclick; // عند الضغط على العنصر باستخدام الماوس
element.ondblclick; // عند الضغط مرتين على العنصر باستخدام الماوس
element.click(); // تنفيذ click على العنصر برمجيًا
element.oncontextmenu; // عند الضغط بزر الفأرة الأيمن
element.onmouseleave; // عند مغادرة الماوس للعنصر
element.onkeyup; // عند مغادرة المفتاح
element.onkeydown; // عند الضغط على مفتاح
element.onkeypress; // عند الضغط على مفتاح
eval(); // تنفيذ العمليات الحسابية

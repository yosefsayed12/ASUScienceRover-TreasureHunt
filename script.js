/* =========================================
   QR TREASURE HUNT
========================================= */


/* =========================================
   Stations Data
========================================= */

const stations = {

    1: {
        type: "outside",

        typeName: "البداية",

        title: "أول خيط",

        intro: `الجوالة فيها ناس بتحب توثق اللحظة
وناس بتحب تخلقها
وناس بتحب تخدم
وناس بتحب تنظم
وناس إيدها شاطرة

لكن قبل ما نعرف كل ده عندك أول خيط:`,

        riddle: `أنا لا أشرب، لكن من يأتيني يشرب...
لا أتكلم لكن أسمع كثيرًا:
"الماية متلجة ولا إيه"

المار من جانبي يتجه لصاحب اللون الأصفر.`
    },


    2: {
        type: "inside",

        typeName: "التصوير",

        title: "ورا كل صورة حكاية",

        intro: `ورا كل صورة حكاية،
وورا كل حكاية حد بيحاول يوصلها للناس.`,

        riddle: `أنا بشوف اللي غيري مش واخد باله منه،
وأحوّل اللحظة لحكاية تتشاف.

هتلاقيني دايمًا وسط الزحمة.

?تفتكر هتلاقيني فين`
    },


    3: {
        type: "inside",

        typeName: "نص المسافة",

        title: "النشاط الفني",

        intro:` الجوالة مش بس مهارات وأنشطة كشفية،
لكنها كمان مساحة للتعبير والإبداع،
وبتدي كل شخص فرصة يكتشف موهبته
ويحوّل أفكاره لحاجة ملموسة.

ومن الأنشطة اللي ممكن تكون موجودة داخل العشيرة:
النشاط الفني`,

        riddle: `حباتٌ صغيرة لا قيمة لها وحدها،
لكن حين تجتمع بألوانها تصبح شيئًا مختلفًا.

أحيانًا أُزيّن بها،
وأحيانًا أرتديها في يدي.`
    },


    4: {
        type: "inside",

        typeName: "هانت!",

        title: "الخدمة العامة",

        intro: `في الجوالة أحيانًا أهم حاجة بنعملها
هي حاجة يستفيد منها شخص تاني.

وعشان كده الخدمة العامة من اللجان المهمة؛
لأنها بتخلينا نشارك في أعمال يكون ليها أثر
على المكان والمجتمع اللي حوالينا.`,

        riddle: `مش بخدم شخص واحد،
ومش لازم أكون مستني مقابل.

أسيب أثر يفضل موجود حتى بعد ما أمشي،
وأحيانًا الأثر ده على حائط
يشوفه كل اللي يعدي.

ابحث عن الأثر الذي يصنع أمام عينك.`
    },


    5: {
        type: "outside",

        typeName: "الكشف الطبي",

        title: "الإسعافات الأولية",

        intro: `في الجوالة، مش كفاية إنك تعرف تعمل نشاط ممتع...
لازم كمان تعرف تتصرف لما تحصل حاجة غير متوقعة.

معرفة الإسعافات الأولية ممكن تخليك الشخص
اللي يعرف يتصرف في اللحظة الصح.`,

        riddle:` مش دكتور،
لكن أعرف أساعد.

مش مستشفى،
لكن عندي أول خطوة.

لو حصلت إصابة...
فين هتدور عليّ؟`
    },


    6: {
        type: "mosque",

        typeName: "السكينة والهدوء",

        title: "قيم وأنشطة",

        intro: `الجوالة مش بس نشاط منفصل عن حياة الإنسان؛
فيها جوانب بتجمع بين النشاط،
الأخلاق، وخدمة الناس.

ومن الأنشطة اللي ممكن تكون موجودة داخل العشيرة:
الأنشطة الدينية والتثقيفية.`,

        riddle:` لا أحتاج إلى خيمة،
ولا إلى أدوات.

ويجتمع عندي الناس في أوقات النداء.

ادخل إليه بخطوات،
وأخرج منه بقلب أهدأ.

أين أنا?`
    },


    7: {
        type: "final",

        typeName: "النهاية",

        title: "المكان الذي يجمع كل الحكايات",

        intro:` طوال الطريق قابلت أجزاء قليلة مختلفة من عالم الجوالة:

إبداع وتوثيق
مهارات وخدمة
فن
قيم وأنشطة

لكن كل جزء من دول له مكان يجتمع فيه.
`,
        riddle:` آخر خطوة مش هتحتاج فيها تحل لغز.

اتبع الأثر الأخير
إلى المكان الذي يجمع كل الحكايات ⚜️`
    }

};


/* =========================================
   Get Station From URL
========================================= */

const params = new URLSearchParams(window.location.search);

const stationParameter = params.get("station");

const stationId = Number(stationParameter);


/* =========================================
   HTML Elements
========================================= */

const stationNumber =
    document.getElementById("stationNumber");

const stationTitle =
    document.getElementById("stationTitle");

const stationIntro =
    document.getElementById("stationIntro");

const riddle =
    document.getElementById("riddle");

const riddleBox =
    document.getElementById("riddleBox");

const finalBox =
    document.getElementById("finalBox");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const stationType =
    document.getElementById("stationType");

    /* =========================================
   Invalid Station
========================================= */

if (!stations[stationId]) {

    stationNumber.textContent = "QR Treasure Hunt";

    stationTitle.textContent = "أهلاً بيك 👋";

    stationIntro.textContent =
        `امسح QR Code الخاص بإحدى المحطات
        عشان تبدأ رحلة البحث عن الكنز.`;

    riddleBox.style.display = "none";

    progressText.textContent = "ابدأ الرحلة";

    stationType.textContent = "QR Treasure Hunt";

    progressFill.style.width = "0%";

}


/* =========================================
   Display Station
========================================= */

else {

    const station = stations[stationId];


    /* Station Number */

    stationNumber.textContent =
       `المحطة ${stationId}`;


    /* Title */

    stationTitle.textContent =
        station.title;


    /* Introduction */

    stationIntro.textContent =
        station.intro;


    /* Type */

    stationType.textContent =
        station.typeName;


    /* Progress */

    progressText.textContent =
        `المحطة ${stationId} من 7`;

    const progress =
        (stationId / 7) * 100;

    progressFill.style.width =
        `${progress}%`;


    /* Riddle */

    riddle.textContent =
        station.riddle;


    /* Final Station */

    if (station.type === "final") {

        riddleBox.style.display = "none";

        finalBox.style.display = "block";

        progressFill.style.width = "100%";

    }

}
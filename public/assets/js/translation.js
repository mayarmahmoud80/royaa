const translation = {

    en: {
                /*header*/
        Roya: "Roya",

        home:"home",
        about:"about",
        Services:"services",
        projects:"projects",
        Branding:"Branding",
        Web_development:"Web Development",
        SEO:"SEO",
        Social_media_management:"Social Media Management",
        Media_production:"Media Production",
        Event_management:"Event Management",
        ContentCreation:"Content Creation",
        PerformanceMarketing:"Performance Marketing",
        Photography:"Photography",
        CreativeCampaigns:"Creative Campaigns",
        PortfolioCarousel:"Portfolio Carousel",
        Pages:"Pages",
        portfolio:"portfolio",
        service_pages:"service pages",
        service_details:"service details",
        project_pages:"project pages",
        project_details:"project details",
        team_pages:"team pages",
        team:"team",
        team_details:"team details",
        career_pages:"career pages",
        career:"career",
        career_details:"career details",
        faq:"faq",
        blog:"blog",
        blog_details:"blog details",
        Contact:"Contact",
        Get_started:"Get started",
        web_development:"Web Development",
        Marketing:"Marketing Consulting",
        Offline_Campaigns:"Offline Campaigns",
        Company:"Company",
        Agency:"Agency",
        Achievement:"Achievement",
        Newsletter:"Newsletter",
        newsletter_text:"Feel free to reach out if you want to collaborate with us, or simply have a chat.",
        footer_location:"Kingdom of Saudi Arabia",
        footer_location1:"Riyadh",
        Follow:"Follow Us",
        /* *********************************** */

        View_project:"View project",
        alHigaz_power:"Al Higaz Power",
        atqen:"Atqen",
        juthor:"Juthoor",
        osos:"Osos Najd",
        Sadaf:"Sadaf",
        Zalilah:"Zalilah",
        View_works:"View all works",


    },
    ar: {

        Roya: "رويا",

        home:"الرئيسية",
        about:"من نحن",
        Services:"الخدمات",
        projects:"المشاريع",
        Branding:"تصميم الهوية التجارية",
        Web_development:"تطوير الويب",
        SEO:"تحسين محركات البحث",
        Social_media_management:"إدارة وسائل التواصل الاجتماعي",
        Media_production:"إنتاج الوسائط",
        Event_management:"إدارة الفعاليات",
        ContentCreation:"إنشاء المحتوى",
        PerformanceMarketing:"التسويق بالأداء",
        Photography:"التصوير الفوتوغرافي",
        CreativeCampaigns:"الحملات الإبداعية",
        PortfolioCarousel:"معرض الأعمال",
        Pages:"الصفحات",
        portfolio:" أعمالنا",
        service_pages:"صفحات الخدمة",
        service_details:"تفاصيل الخدمة",
        project_pages:"صفحات المشروع",
        project_details:"تفاصيل المشروع",
        team_pages:"صفحات الفريق",
        team:"الفريق",
        team_details:"تفاصيل الفريق",
        career_pages:"صفحات المهنة",
        career:"المهنة",
        career_details:"تفاصيل المهنة",
        faq:"الأسئلة الشائعة",
        blog:"مدونة",
        blog_details:"تفاصيل المدونة",
        Contact:"التواصل ",
        Get_started: "ابدأ الآن",
        web_development:"تطوير المواقع الإلكترونية ",
        Marketing: "الاستشارات التسويقية",
        Offline_Campaigns:"الحملات الإعلانية التقليدية ",
        Company:"الشركة",
        Agency:"عن الوكالة",
        Achievement:"الإنجازات",
        Newsletter:"أحدث الأخبار",
        newsletter_text:"لا تتردد في التواصل معنا في أي وقت إذا كنت تود التعاون معنا أو فقط للحديث.. ",
        footer_location:"المملكة العربية السعودية",
        footer_location1:"الرياض",
        Follow:"تابعنا",

        /************************************************************** */

        View_project:"عرض المشروع",
        alHigaz_power:"قوة الحجاز",
        atqen:"اتقن",
        juthor:"جُذُور",
        osos:"أسس نجد",
        Sadaf:"صدف",
        Zalilah:"ظليلا",
        View_works:"عرض جميع الأعمال",
        


    },
};



document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("language") == 'en') {
        setLanguage('en');
    } else {
        setLanguage('ar' || localStorage.getItem("language"));
    }
});
function setLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach((element) => {
        const translationId = element.getAttribute("data-lang");
        element.textContent = translation[language][translationId];
    });

    //////////////////////////////
    set_change();

};

function set_change(){
    const elements = document.querySelectorAll(".a");
    elements.forEach((el) => {
        if(currentLang === 'ar'){
            el.classList.add('a_rtl');
            el.classList.remove('a_ltr');
        } else {
            el.classList.add('a_ltr');
            el.classList.remove('a_rtl');
        }
    });
}


var currentLang = localStorage.getItem('language') || 'en';
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
updateLanguageDisplay();

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    //////////////////////////////////////
    set_change();

    updateLanguageDisplay();
    translatePage();
}

function updateLanguageDisplay() {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    }
}

function translatePage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translation[currentLang] && translation[currentLang][key]) {
            const translated = translation[currentLang][key];
            ///////////////////////////////////
            element.textContent = translated;
            if (element.hasAttribute('data-text')) {
                element.setAttribute('data-text', translated);
            }
        }
    });
}


// Initial translation
document.addEventListener('DOMContentLoaded', () => {
    translatePage();
});

//export default translation;
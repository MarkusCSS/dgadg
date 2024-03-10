/*############                     OFFERS                 ###########*/
const languageSelect = document.getElementById("languageSelect");

const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');
const li4 = document.getElementById('li4');

const btnPage=document.querySelectorAll('.islands__button');

const heading11 = document.getElementById("heading1-1");
const heading21 = document.getElementById("heading2-1");
const paragraph11 = document.getElementById("paragraph1-1");     // the second number is the page indicator 

const heading12 = document.getElementById("heading1-2");
const heading22 = document.getElementById("heading2-2");
const paragraph12 = document.getElementById("paragraph1-2");

const heading13 = document.getElementById("heading1-3");
const heading23 = document.getElementById("heading2-3");
const paragraph13 = document.getElementById("paragraph1-3");

    /*#############       HOME PAGE      #############*/
    const generalText1 = document.getElementById('homeText1');
    const generalText12 = document.getElementById('homeText1-2');
    const generalText2 = document.getElementById('homeText2');
    const generalText22 = document.getElementById('homeText2-2');
    const generalText3 = document.getElementById('homeText3');
    const generalText32 = document.getElementById('homeText3-2');
    const msgP1 = document.getElementById('paragraphImg1');
    const msgP12 = document.getElementById('paragraphImg1-2');
    const msgP2 = document.getElementById('paragraphImg2');
    const msgP22 = document.getElementById('paragraphImg2-2');
    const welcome = document.getElementById('welcomeMsg');
    const welcome2 = document.getElementById('msgWelcome');



        /*#########    PROJECTS     ########*/
//const buildingPageMsg = document.getElementById('building');
       const projectParagrafScroll = document.getElementById('projectParagraph');
       const animWord1 = document.getElementById('animWord1');
       const animWord2 = document.getElementById('animWord2');
       const animWord3 = document.getElementById('animWord3');
       const animWord4 = document.getElementById('animWord4');
       const animWord5 = document.getElementById('animWord5');
       const animWord6 = document.getElementById('animWord6');
       const titleDescription =document.getElementById('titleDescription');
       const videoDescription =document.getElementById('videoDescription');


        /*#########    CONTACT    ##########*/
        const contactCountry = document.getElementById('contact-country');
       /* const contactBoss = document.getElementById('contact-boss'); */
        const contactMobile = document.getElementById('contact-mobile');

    /*#######         TRANSLATE.JS       ########*/
languageSelect.addEventListener("change", function() {
    const selectedLanguage = languageSelect.value;

    if (selectedLanguage === "de") {
        document.documentElement.lang = "de";
                                    /*NAVIGATION-de*/
        li1.textContent ="Startseite"; 
        li2.textContent ="Leistungen";
        li3.textContent ="Projekt";
        li4.textContent ="Kontakt";
        btnPage.forEach(e=>e.innerHTML = `Erkunden<i class='bx bx-right-arrow-alt islands__button-icon' ></i>`);
                                    /*THE FIRST PAGE-de*/                                  
        heading11.textContent = "Automatisierung und Installation.";
        heading21.textContent = "Prozessoptimierung.";
        paragraph11.textContent = "Prozessanpassung für alle Situationen.";
                                             /*THE SECOND PAGE-de*/                               
        heading12.textContent = "Pneumatische Installationen.";
        heading22.textContent = "Mit Luft geht alles.";
        paragraph12.textContent = "Alles für Bewegungen und Klemmungen.";
                                              /*THE THIRD PAGE-de*/ 
        heading13.textContent = "Baugruppen zusammenbau.";
        heading23.textContent = "Es ist eine sichere Sache.";
        paragraph13.textContent = "Mehrere Wege führen zum Ziel.";


                       /*      HOME      */
        generalText1.textContent ='Seit der Gründung von DGA GmbH ist unser Ziel herausragender Service. Wir gehen jedes Projekt mit größter Hingabe an und stellen Ergebnisse an vorderster Stelle. Wir halten uns an die Prinzipien von Präzision und Effizienz, um Qualität zu gewährleisten. Wir sind stets bereit für neue Herausforderungen und Projekte. Wir sind stolz auf jahrelange Erfahrung in der Prozessoptimierung und Automatisierung und unterstützen unsere Kunden bei der Erreichung einer schnellen Entwicklung. Wir verfolgen kontinuierlich technologische Trends, um das Beste zu liefern. Unser Team besteht aus über 50 Experten und legt Wert auf eine positive Atmosphäre und Zusammenarbeit. Jedes Projekt wird einem Projektleiter zugeteilt, der engen Kontakt zu den Kunden pflegt. Unsere Verpflichtung zur Qualität und Effizienz hebt uns auf dem Markt hervor. Wir passen uns immer den Bedürfnissen unserer Kunden an, unabhängig vom Umfang des Projekts. Unsere Expertise in der Prozessoptimierung und die Anwendung modernster technologischer Lösungen ermöglichen es unseren Kunden, schneller zu wachsen. Wir verbessern uns ständig und bleiben auf dem neuesten Stand der Branchentrends, um sicherzustellen, dass wir immer einen Schritt voraus sind. Wir haben eine stolze Tradition in der Bereitstellung erstklassiger Lösungen und Dienstleistungen.';               
        generalText2.textContent ='Wir sind zertifizierte Inhaber verschiedener SIQ- und ISO-Zertifikate, die unsere Hingabe zur Qualität und Professionalität bestätigen. Die Zufriedenheit unserer Mitarbeiter liegt uns am Herzen, denn wir glauben, dass nur zufriedene und motivierte Mitarbeiter herausragende Dienstleistungen erbringen können.';               
        generalText3.textContent ='Weitere spezifische Informationen auf anderen Seiten der Website. Sie können uns jederzeit kontaktieren, alle Daten auf der KONTAKT-Seite. Arbeitszeiten: Montag bis Freitag, von 08:00 bis 18:00 Uhr.';
        msgP1.innerHTML =`Suchen Sie nach <br> Professionalität?`;
        msgP2.textContent ='Sie sind am richtigen Ort!'; 
        welcome.textContent='Willkommen';
        generalText12.textContent ='Seit der Gründung von DGA GmbH ist unser Ziel herausragender Service. Wir gehen jedes Projekt mit größter Hingabe an und stellen Ergebnisse an vorderster Stelle. Wir halten uns an die Prinzipien von Präzision und Effizienz, um Qualität zu gewährleisten. Wir sind stets bereit für neue Herausforderungen und Projekte. Wir sind stolz auf jahrelange Erfahrung in der Prozessoptimierung und Automatisierung und unterstützen unsere Kunden bei der Erreichung einer schnellen Entwicklung. Wir verfolgen kontinuierlich technologische Trends, um das Beste zu liefern. Unser Team besteht aus über 50 Experten und legt Wert auf eine positive Atmosphäre und Zusammenarbeit. Jedes Projekt wird einem Projektleiter zugeteilt, der engen Kontakt zu den Kunden pflegt. Unsere Verpflichtung zur Qualität und Effizienz hebt uns auf dem Markt hervor. Wir passen uns immer den Bedürfnissen unserer Kunden an, unabhängig vom Umfang des Projekts. Unsere Expertise in der Prozessoptimierung und die Anwendung modernster technologischer Lösungen ermöglichen es unseren Kunden, schneller zu wachsen. Wir verbessern uns ständig und bleiben auf dem neuesten Stand der Branchentrends, um sicherzustellen, dass wir immer einen Schritt voraus sind. Wir haben eine stolze Tradition in der Bereitstellung erstklassiger Lösungen und Dienstleistungen.';               
        generalText22.textContent ='Wir sind zertifizierte Inhaber verschiedener SIQ- und ISO-Zertifikate, die unsere Hingabe zur Qualität und Professionalität bestätigen. Die Zufriedenheit unserer Mitarbeiter liegt uns am Herzen, denn wir glauben, dass nur zufriedene und motivierte Mitarbeiter herausragende Dienstleistungen erbringen können.';               
        generalText32.textContent ='Weitere spezifische Informationen auf anderen Seiten der Website. Sie können uns jederzeit kontaktieren, alle Daten auf der KONTAKT-Seite. Arbeitszeiten: Montag bis Freitag, von 08:00 bis 18:00 Uhr.';
        msgP12.innerHTML =`Suchen Sie nach <br> Professionalität?`;
        msgP22.textContent ='Sie sind am richtigen Ort!'; 
        welcome2.textContent='Willkommen';
       
                         /*   PROJECTS    */
        projectParagrafScroll.textContent='Scrollen Sie für die Beschreibung!';
        titleDescription.textContent='VERTRAUEN AUF ZUVERLÄSSIGKEIT BAUEN!';
        videoDescription.textContent='Willkommen zu unserer Video-Präsentation! In der Welt der Maschinenautomatisierung ist ein Bild mehr als tausend Worte wert. Unser Unternehmen widmet sich der Automatisierung von Prozessen, um die Effizienz und Leistung Ihrer industriellen Ausrüstung zu steigern. Dieses Video bietet Ihnen einen tieferen Einblick in unsere Dienstleistungen und Lösungen. Lassen Sie sich durch unsere Projekte führen und Wir zeigen Ihnen, wie unser Team von Experten Ihre Produktion transformiert. Wir glauben, unsere Arbeit spricht für uns, denn jeder Frame ist eine Geschichte unserer Hingabe und Qualität. Gemeinsam gestalten wir die Zukunft der Automatisierung. Vielen Dank, dass Sie Teil unserer Geschichte sind.'; 
                         /*    CONTACT    */
        contactCountry.textContent='ÖSTERREICH'; 
       /* contactBoss.textContent='Dejvid Horvat- Geschäftsführer'; */
        contactMobile.textContent='Kontakt: +43 0677-614-380-23';                
                                             
    } else if (selectedLanguage === "en") {
      document.documentElement.lang = "en";
                                  /*NAVIGATION-en*/
        li1.textContent ="Home";
        li2.textContent ="Services";
        li3.textContent ="Project";
        li4.textContent ="Contact";
        btnPage.forEach(e=>e.innerHTML =` Explore<i class='bx bx-right-arrow-alt islands__button-icon' ></i>`);
                                        /*THE FIRST PAGE-en*/
        heading11.textContent = "Automation and Installation.";
        heading21.textContent = "Optimization processes.";
        paragraph11.textContent = "Process adaptation for all situations.";
                                                    /*THE SECOND PAGE-en*/  
        heading12.textContent = "Pneumatic installations.";
        heading22.textContent = "Everything works with air.";
        paragraph12.textContent = "Everything for movements and clamping.";
                                                    /*THE THIRD PAGE-en*/  
        heading13.textContent = "Assembly of components.";
        heading23.textContent = "It's a surefire thing.";
        paragraph13.textContent = "Several paths lead to the goal.";

                                      /*      HOME      */
        generalText1.textContent ='Since the establishment of DGA GmbH  , our goal has been exceptional service. We approach every project with utmost dedication, placing results at the forefront. We adhere to the principles of precision and efficiency to ensure quality. We are always ready for new challenges and projects. We take pride in years of experience in process optimization and automation, assisting our clients in achieving rapid development. We continuously monitor technological trends to deliver the best. Our team comprises over 50 experts, with a focus on a positive atmosphere and collaboration. Each project is assigned its project leader who maintains close communication with clients. Our commitment to quality and efficiency sets us apart in the market. We always adapt to the needs of our clients, regardless of the project' +'s scope. Our expertise in process optimization and the application of cutting-edge technological solutions enables our clients to achieve faster growth. We continuously improve and stay up-to-date with the latest industry trends to ensure that we are always one step ahead. We have a proud tradition of delivering top-notch solutions and services. ';               
        generalText2.textContent ='We are certified holders of various SIQ and ISO certificates, confirming our dedication to quality and professionalism. Employee satisfaction is essential to us, as we believe that only satisfied and motivated employees can provide exceptional services.';               
        generalText3.textContent ='More specific information on other pages of the website. You can always contact us, all data on the CONTACT page. Working hours: Monday to Friday, from 08:00 to 18:00 hours.';
        msgP1.innerHTML= `Are you looking for <br> professionalism?`;
        msgP2.textContent ='You are in the right place!'; 
        welcome.textContent='Welcome';
        generalText12.textContent ='Since the establishment of DGA GmbH  , our goal has been exceptional service. We approach every project with utmost dedication, placing results at the forefront. We adhere to the principles of precision and efficiency to ensure quality. We are always ready for new challenges and projects. We take pride in years of experience in process optimization and automation, assisting our clients in achieving rapid development. We continuously monitor technological trends to deliver the best. Our team comprises over 50 experts, with a focus on a positive atmosphere and collaboration. Each project is assigned its project leader who maintains close communication with clients. Our commitment to quality and efficiency sets us apart in the market. We always adapt to the needs of our clients, regardless of the project' +'s scope. Our expertise in process optimization and the application of cutting-edge technological solutions enables our clients to achieve faster growth. We continuously improve and stay up-to-date with the latest industry trends to ensure that we are always one step ahead. We have a proud tradition of delivering top-notch solutions and services. ';               
        generalText22.textContent ='We are certified holders of various SIQ and ISO certificates, confirming our dedication to quality and professionalism. Employee satisfaction is essential to us, as we believe that only satisfied and motivated employees can provide exceptional services.';               
        generalText32.textContent ='More specific information on other pages of the website. You can always contact us, all data on the CONTACT page. Working hours: Monday to Friday, from 08:00 to 18:00 hours.';
        msgP12.innerHTML= `Are you looking for <br> professionalism?`;
        msgP22.textContent ='You are in the right place!'; 
        welcome2.textContent='Welcome';
        
                                /*   PROJECTS    */
        projectParagrafScroll.textContent='Scroll for description!';
        titleDescription.textContent='WE BUILD TRUST ON RELIABILITY.';
        videoDescription.textContent='Welcome to our video presentation! In the world of machine automation, a picture is worth more than a thousand words. Our company is dedicated to automating processes to enhance the efficiency and performance of your industrial equipment. This video will provide you with a deeper insight into our services and solutions. Let it guide you through our projects and show you how our team of experts transforms your production. We believe our work speaks for us, as every frame is a story of our dedication and quality. Together, we are shaping the future of automation. Thank you for being part of our story.';                       
                                /*    CONTACT    */
        contactCountry.textContent='AUSTRIA';
       /* contactBoss.textContent='Dejvid Horvat- Executive Director';*/
        contactMobile.textContent='Contact: +43 0677-614-380-23';

     } else if (selectedLanguage === "sr") {
      document.documentElement.lang = "sr";
                                  /*NAVIGATION-sr*/
        li1.textContent ="Početna";
        li2.textContent ="Delatnosti";
        li3.textContent ="Projekat";
        li4.textContent ="Kontakt";
        btnPage.forEach(e=>e.innerHTML = `Istraži<i class='bx bx-right-arrow-alt islands__button-icon' ></i>`);
                                        /*THE FIRST PAGE-sr*/
        heading11.textContent = "Automatizacija i instalacija";
        heading21.textContent = "Optimizacija procesa.";
        paragraph11.textContent = "Prilagođavanje procesa za sve situacije";
                                                    /*THE SECOND PAGE-sr*/  
        heading12.textContent = "Pneumatske instalacije.";
        heading22.textContent = "Sve radi sa vazduhom.";
        paragraph12.textContent = "Sve za pokrete i stezanje.";
                                                    /*THE THIRD PAGE-sr*/  
        heading13.textContent = "Montaža komponenata.";
        heading23.textContent = "Nema da ne može.";
        paragraph13.textContent = "Mnogo puteva vodi ka cilju.";

                      /*      HOME      */
        generalText1.textContent ='Od osnivanja DGA GmbH , naš cilj je izuzetna usluga. Svakom projektu pristupamo s potpunom predanošću i rezultate stavljamo ispred svega. Vodimo se principima preciznosti i efikasnosti, čime garantujemo kvalitet. Uvek smo spremni za nove izazove i projekte. Ponosimo se dugogodišnjim iskustvom u optimizaciji i automatizaciji procesa, pomažući klijentima da ostvare brz razvoj. Neprestano pratimo tehnološke trendove kako bismo isporučivali najbolje. Naš tim broji preko 50 stručnjaka, s fokusom na pozitivnu atmosferu i saradnju. Svaki projekat ima svog lidera koji održava blisku komunikaciju s klijentima.Naša posvećenost kvalitetu i efikasnosti omogućava nam da se izdvojimo na tržištu. Uvek se prilagođavamo potrebama klijenata, bez obzira na obim projekta. Naša stručnost u optimizaciji procesa i primeni najsavremenijih tehnoloških rešenja omogućava našim klijentima da postignu brži rast. Neprestano se usavršavamo i pratimo najnovije trendove u industriji kako bismo bili sigurni da smo uvek korak ispred.Imamo ponosnu tradiciju isporučivanja vrhunskih rešenja i usluga. ';               
        generalText2.textContent =' Sertifikovani smo nosioci različitih SIQ i ISO sertifikata, što potvrđuje našu predanost kvalitetu i profesionalizmu. Zadovoljstvo naših zaposlenih je od suštinskog značaja, jer verujemo da samo zadovoljni i motivisani zaposleni mogu pružiti izvanredne usluge.';               
        generalText3.textContent ='Više konkretnih  informacija na ostalim stranicama sajta. Uvek nas možete kontaktirati, svi podaci na stranici KONTAKT . Radno vreme: ponedeljak-petak, od 08:00 do 18:00 časova.';
        msgP1.innerHTML =`Tražite li <br> profesionalizam?`;
        msgP2.textContent ='Na pravom Ste mestu! '; 
        welcome.textContent='Dobrodošli';
        generalText12.textContent ='Od osnivanja DGA GmbH , naš cilj je izuzetna usluga. Svaki projekt pristupamo s potpunom predanošću i rezultate stavljamo ispred svega. Vodimo se principima preciznosti i efikasnosti, čime garantujemo kvalitet. Uvek smo spremni za nove izazove i projekte. Ponosimo se dugogodišnjim iskustvom u optimizaciji i automatizaciji procesa, pomažući klijentima da ostvare brz razvoj. Neprestano pratimo tehnološke trendove kako bismo isporučivali najbolje. Naš tim broji preko 50 stručnjaka, s fokusom na pozitivnu atmosferu i saradnju. Svaki projekat ima svog lidera koji održava blisku komunikaciju s klijentima.Naša posvećenost kvalitetu i efikasnosti omogućava nam da se izdvojimo na tržištu. Uvek se prilagođavamo potrebama klijenata, bez obzira na obim projekta. Naša stručnost u optimizaciji procesa i primeni najsavremenijih tehnoloških rešenja omogućava našim klijentima da postignu brži rast. Neprestano se usavršavamo i pratimo najnovije trendove u industriji kako bismo bili sigurni da smo uvek korak ispred.Imamo ponosnu tradiciju isporučivanja vrhunskih rešenja i usluga. ';               
        generalText22.textContent =' Sertifikovani smo nosioci različitih SIQ i ISO sertifikata, što potvrđuje našu predanost kvalitetu i profesionalizmu. Zadovoljstvo naših zaposlenih je od suštinskog značaja, jer verujemo da samo zadovoljni i motivisani zaposleni mogu pružiti izvanredne usluge.';               
        generalText32.textContent ='Više konkretnih  informacija na ostalim stranicama sajta. Uvek nas možete kontaktirati, svi podaci na stranici KONTAKT . Radno vreme: ponedeljak-petak, od 08:00 do 18:00 časova.';
        msgP12.innerHTML =`Tražite li <br> profesionalizam?`;
        msgP22.textContent ='Na pravom Ste mestu! '; 
        welcome2.textContent='Dobrodošli';
        
                       /*   PROJECTS    */
        projectParagrafScroll.textContent='Skrolujte za opis!';
        titleDescription.textContent='GRADIMO POVERENJE NA POUZDANOSTI!';
        videoDescription.textContent='Dobrodošli u našu video prezentaciju! U svetu automatizacije mašina, slika vredi više od hiljadu reči. Naša firma je posvećena automatizaciji procesa kako bismo unapredili efikasnost i performanse vaše industrijske opreme. Ovaj video će vam pružiti dublji uvid u naše usluge i rešenja. Pustite da vas vodi kroz naše projekte i pokaže vam kako naš tim stručnjaka transformiše vašu proizvodnju. Verujemo da će naši radovi govoriti za nas, jer svaki kadar je priča o našem posvećenju i kvalitetu. Zajedno, kreiramo budućnost automatizacije. Hvala vam što ste deo naše priče.';                 
                      /*    CONTACT    */
        contactCountry.textContent='AUSTRIJA';
       /* contactBoss.textContent='Dejvid Horvat- Izvršni direktor'; */
        contactMobile.textContent='Kontakt: +43 0677-614-380-23'; 

     } else if (selectedLanguage === "sl") {
      document.documentElement.lang = "sl";
                                  /*NAVIGATION-sl*/
        li1.textContent ="Domov";
        li2.textContent ="Storitve";
        li3.textContent ="Projekt";
        li4.textContent ="Kontakt";
        btnPage.forEach(e=>e.innerHTML = `Raziščite<i class='bx bx-right-arrow-alt islands__button-icon' ></i>`);
                                        /*THE FIRST PAGE-sl*/
        heading11.textContent = "Avtomatizacija in namestitev.";
        heading21.textContent = "Procesi optimizacije.";
        paragraph11.textContent = "Prilagajanje procesov za vse situacije.";
                                                    /*THE SECOND PAGE-sl*/  
        heading12.textContent = "Pnevmatske namestitve.";
        heading22.textContent = "Vse deluje s pomočjo zraka.";
        paragraph12.textContent = "Vse za premike in stiskanje.";
                                                    /*THE THIRD PAGE-sl*/  
        heading13.textContent = "Sestavljanje komponent.";
        heading23.textContent = "Ne more zavrniti.";
        paragraph13.textContent = "Več poti vodi k cilju.";

                         /*      HOME      */
             generalText1.textContent ='Od ustanovitve podjetja DGA GmbH je naš cilj izjemna storitev. Vsakemu projektu pristopamo z največjo predanostjo in rezultate postavljamo na prvo mesto. Vodimo se načeli natančnosti in učinkovitosti, da zagotovimo kakovost. Vedno smo pripravljeni na nove izzive in projekte. Ponosni smo na večletne izkušnje v optimizaciji procesov in avtomatizaciji ter pomagamo našim strankam pri hitrem razvoju. Neprestano spremljamo tehnološke trende, da lahko dostavimo najboljše. Naša ekipa šteje več kot 50 strokovnjakov in si prizadeva za pozitivno vzdušje in sodelovanje. Vsakemu projektu je dodeljen projektni vodja, ki vzdržuje tesen stik s strankami. Naša zaveza kakovosti in učinkovitosti nas postavlja v ospredje na trgu. Vedno se prilagajamo potrebam naših strank, ne glede na obseg projekta. Naše strokovno znanje v optimizaciji procesov in uporabi najnovejših tehnoloških rešitev omogoča našim strankam hitro rast. Neprestano se izboljšujemo in ostajamo v koraku s trendi v panogi, da zagotovimo, da smo vedno korak pred konkurenco. Ponosni smo na tradicijo dostavljanja vrhunskih rešitev in storitev. ';               
             generalText2.textContent ='Smo certificirani nosilci različnih SIQ in ISO certifikatov, kar potrjuje našo zavezanost kakovosti in profesionalizmu. Zadovoljstvo naših zaposlenih nam veliko pomeni, saj verjamemo, da samo zadovoljni in motivirani zaposleni lahko zagotovijo izjemne storitve.';               
             generalText3.textContent ='Več konkretnih informacij na drugih straneh spletnega mesta. Vedno nas lahko kontaktirate, vse podatke najdete na strani KONTAKT. Delovni čas: od ponedeljka do petka, od 08:00 do 18:00 ure.';
             msgP1.innerHTML =`Iščete <br> profesionalnost?`;
             msgP2.textContent ='Ste na pravem mestu!'; 
             welcome.textContent='Dobrodošli';
             generalText12.textContent ='Od ustanovitve podjetja DGA GmbH je naš cilj izjemna storitev. Vsakemu projektu pristopamo z največjo predanostjo in rezultate postavljamo na prvo mesto. Vodimo se načeli natančnosti in učinkovitosti, da zagotovimo kakovost. Vedno smo pripravljeni na nove izzive in projekte. Ponosni smo na večletne izkušnje v optimizaciji procesov in avtomatizaciji ter pomagamo našim strankam pri hitrem razvoju. Neprestano spremljamo tehnološke trende, da lahko dostavimo najboljše. Naša ekipa šteje več kot 50 strokovnjakov in si prizadeva za pozitivno vzdušje in sodelovanje. Vsakemu projektu je dodeljen projekt vodja, ki vzdržuje tesen stik s strankami. Naša zaveza kakovosti in učinkovitosti nas postavlja v ospredje na trgu. Vedno se prilagajamo potrebam naših strank, ne glede na obseg projekta. Naše strokovno znanje v optimizaciji procesov in uporabi najnovejših tehnoloških rešitev omogoča našim strankam hitro rast. Neprestano se izboljšujemo in ostajamo v koraku s trendi v panogi, da zagotovimo, da smo vedno korak pred konkurenco. Ponosni smo na tradicijo dostavljanja vrhunskih rešitev in storitev. ';               
             generalText22.textContent ='Smo certificirani nosilci različnih SIQ in ISO certifikatov, kar potrjuje našo zavezanost kakovosti in profesionalizmu. Zadovoljstvo naših zaposlenih nam veliko pomeni, saj verjamemo, da samo zadovoljni in motivirani zaposleni lahko zagotovijo izjemne storitve.';               
             generalText32.textContent ='Več konkretnih informacij na drugih straneh spletnega mesta. Vedno nas lahko kontaktirate, vse podatke najdete na strani KONTAKT. Delovni čas: od ponedeljka do petka, od 08:00 do 18:00 ure.';
             msgP12.innerHTML =`Iščete <br> profesionalnost?`;
             msgP22.textContent ='Ste na pravem mestu!'; 
             welcome2.textContent='Dobrodošli';
              
                          /*   PROJECTS    */
            projectParagrafScroll.textContent=' Skrolujte za opis!';
            titleDescription.textContent='GRADIMO ZAUPANJE NA ZANESLJIVOSTI!';
            videoDescription.textContent='Dobrodošli v našo video predstavitev! V svetu avtomatizacije strojev je slika vredna več kot tisoč besed. Naše podjetje se posveča avtomatizaciji procesov, da bi izboljšalo učinkovitost in zmogljivost vaše industrijske opreme. Ta video vam bo podrobneje predstavil naše storitve in rešitve. Pustite, da vas vodi skozi naše projekte in vam pokaže, kako naša ekipa strokovnjakov preoblikuje vašo proizvodnjo. Verjamemo, da bodo naša dela govorila namesto nas, saj je vsak posnetek zgodba o naši predanosti in kakovosti. Skupaj ustvarjamo prihodnost avtomatizacije. Hvala, ker ste del naše zgodbe.';  

                          /*    CONTACT    */
            contactCountry.textContent='AVSTRIJA';
           /* contactBoss.textContent='Dejvid Horvat- Izvršni direktor';*/
            contactMobile.textContent='Kontakt: +43 0677-614-380-23';
     }
});
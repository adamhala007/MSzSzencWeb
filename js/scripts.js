const candidates = {
    1: {
        distHU: "1. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 1 • Krúžkujte: #",
        district: 1,
        nameHU: "Mgr. Galambos Rudolf",
        nameSK: "Mgr. Rudolf Galambos",
        profHU: "Pedagógus, elektrotechnikus",
        profSK: "Pedagóg, elektrotechnik",
        bioHU: "1971-ben születtem, egész életemben Szencen éltem. Itt jártam óvodába és alapiskolába, majd Pozsonyban elektrotechnikai szakon érettségiztem. 1994-ben szereztem tanári diplomát a nyitrai Konstantin Filozófus Egyetem matematika tanszékén. Azóta több szenci iskolában is oktattam matematikát és elektrotechnikát. Pedagógiai pályám mellett hosszú évek óta aktívan zenészként is tevékenykedem itthon és külföldön egyaránt, emellett elektrotechnikusként is folyamatosan dolgozom.\n" +
            "\n" +
            "Az elmúlt választási ciklusokban kapott megtisztelő bizalomnak köszönhetően alázattal képviselhettem a szenci magyarságot és városunk minden lakosát. Megválasztásom óta folyamatosan az Oktatási és Kulturális Bizottság elnökeként dolgozom, amely közösségünk számára kiemelten fontos terület. Emellett immár több mint húsz éve vagyok a Szlovákiai Magyar Szülők Szövetsége országos elnökségének tagja, ahol Pozsony megye képviseletét látom el.\n" +
            "\n" +
            "Pályafutásom során mindvégig az egyetlen szlovákiai magyar párt tagja voltam. Végzettségemből és tapasztalatomból adódóan továbbra is az oktatás és a kultúra fellendítésén szeretnék dolgozni. Kiemelten fontos számomra a keresztény értékek megőrzése, valamint a fiatal családok és a szépkorúak támogatása. Szeretnék közreműködni a városban megkezdett jelentős beruházások (új egészségügyi központ, alapiskola bővítése, parkok és játszóterek) sikeres befejezésében, valamint új, hiánypótló fejlesztések elindításában.\n" +
            "\n" +
            "A jelenlegi időszak egyik legnagyobb kihívása a városi parkolási szabályozás. Bár a bevezetése elkerülhetetlen volt, a tapasztalatokból tanulva a lakosok valós igényeihez és elvárásaihoz kell azt igazítanunk. Ugyancsak finomhangolásra szorul a Napfényes Tavak működése, hogy az egyaránt szolgálja a turisták kényelmét és a helyi vállalkozások érdekeit.\n" +
            "\n" +
            "Az eddig elvégzett munkám alapján tisztelettel kérem, hogy támogassa személyemet és a Magyar Szövetség képviselőjelöltjeit, hogy továbbra is erős és hatékony magyar képviselet legyen városunkban. Küldetésünket becsületesen, odaadóan és alázattal fogjuk végezni a szenci lakosság javára!",
        bioSK: "Narodil som sa v roku 1971 a celý svoj život som prežil v Senci. Tu som navštevoval základnú školu a neskôr zmaturoval v odbore elektrotechniky na Zochovej ulici v Bratislave. Vysokoškolský diplom som získal v roku 1994 na Univerzite Konštantína Filozofa v Nitre (UKF), na Katedre matematiky. Ako učiteľ som pôsobil na viacerých školách v Senci. Popri pedagogickej práci sa doma i v zahraničí aktívne venujem hre na akordeón, no elektrotechniku ako svoje remeslo a záľubu som nikdy neopustil.\n" +
            "\n" +
            "Už počas niekoľkých volebných období som vďaka vašej dôvere mohol s pokorou a hrdosťou zastupovať záujmy Senčanov. Od začiatku môjho pôsobenia v komunálnej politike zastávam funkciu predsedu komisie školstva a kultúry, pracoval som v radách viacerých škôl a som tiež členom republikového predsedníctva Združenia  maďarských rodičov na Slovensku.\n" +
            "\n" +
            "Politicky som pôsobil ako člen SMK a následne Aliancie. Som umelecky, technicky a pravicovo-konzervatívne orientovaný človek, ktorý vyznáva tradičné kresťanské hodnoty. Svoje bohaté skúsenosti z oblasti školstva a kultúry chcem aj naďalej zúročovať, podporovať odkaz našich predkov a podávať pomocnú ruku mladým rodinám i seniorom.\n" +
            "\n" +
            "Rád by som pokračoval v rozrobených mestských projektoch a úspešne ich dotiahol do konca – či už ide o polikliniku, novú základnú školu, obnovu parkov, detských ihrísk a ďalšej infraštruktúry –, no chcem iniciovať aj nové zámery. Našou najväčšou aktuálnou výzvou je parkovacia politika. Jej zavedenie bolo potrebné, no poučili sme sa z doterajšej praxe, momentálne ju meníme a prispôsobujeme reálnym potrebám obyvateľov. Rovnako dôležité je pre mňa nové nastavenie podmienok na Slnečných jazerách, ktoré citlivo zohľadní požiadavky miestnych podnikateľov aj turistov.\n" +
            "\n" +
            "Na základe doterajšej poctivo odvedenej poslaneckej práce vás úctivo žiadam o dôveru v samosprávnych voľbách. Svoj mandát budem aj naďalej vykonávať svedomite, s pokorou a plným nasadením pre blaho všetkých obyvateľov mesta Senec!",
        goalsHU: ["A szenci magyar oktatási és kulturális élet kiemelt támogatása és fejlesztése.",
            "Az új egészségügyi központ, az alapiskola bővítése, valamint a parkok és játszóterek sikeres megvalósítása.",
            "A városi parkolás igazítása a szenci lakosok valós igényeihez és tapasztalataihoz.", "A tavak működésének rendezése a helyi vállalkozók és a látogatók közös érdekei szerint.",
            "A fiatal családok és az idősebb generáció megsegítése, a keresztény értékek megőrzése.", "Becsületes, alázatos és hatékony érdekvédelem a városházán."
        ],
        goalsSK: ["Rozvoj vzdelávania a kultúrneho života v Senci, podpora a zachovávanie tradičných hodnôt.", "Úspešné dokončenie novej polikliniky, rozširovania základnej školy, obnovy parkov a detských ihrísk.",
            "Prispôsobenie mestskej parkovacej politiky reálnym potrebám a skúsenostiam Senčanov.", "Nové nastavenie fungovania jazier, ktoré vyváži pohodlie turistov a záujmy miestnych podnikateľov.",
            "Pomoc pre mladé rodiny, starostlivosť o seniorov a ochrana kresťanských hodnôt.", "Svedomitá, poctivá a pokorná práca v mestskom zastupiteľstve pre všetkých obyvateľov Senca."
        ],
        email: "mail@mail.sk",
        img: "GR.jpg"
    },
    2: {
        distHU: "1. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 1 • Krúžkujte: #",
        district: 1,
        nameHU: "Mgr. Halász Ádám",
        nameSK: "Mgr. Adam Halász",
        profHU: "Szoftverfejlesztő",
        profSK: "Softvérový vývojár",
        bioHU: "Hatéves korom óta Szencen élek, anyai ágon pedig valamennyi felmenőm Szencről származik. Nagyapám Tóth Endre, aki a szenci magyar gimnázium köztiszteletben álló tanára volt. Ide jártam magyar óvodába, alapiskolába és gimnáziumba. Ezt követően elvégeztem a pozsonyi Comenius Egyetem alkalmazott informatika szakát. Azóta programozóként dolgozom. Közben elvégeztem az Esterházy Akadémiát, ami egy kétéves képzés, aminek a célja, hogy közéleti utánpótlást biztosítson közösségünknek.\n" +
            "\n" +
            "Néhány éve kapcsolódtam be aktívabban a közéletbe, amikor beléptem a Csemadok és a Magyar Szövetség szenci alapszervezeteibe. Azóta mindkét szervezet elnökségi tagjává választottak, ezen kívül a Csemadokban én lettem az ifjúságért felelős alelnök. Hozzám kötődik az egyre népszerűbb szenci társasjáték-estek elindítása, valamint a Mathias Corvinus Collegium (MCC) előadásainak Szencre hozatala. Tudásommal próbálom elősegíteni, hogy a mai kor követelményeinek megfelelően a szenci Csemadok és Magyar Szövetség a digitális térben is láthatóbbá váljon.\n" +
            "\n" +
            "Önkormányzati képviselői tapasztalattal ugyan még nem rendelkezem, viszont a Környezetvédelmi és Közrendvédelmi Bizottság tagjaként egy rövid ideje már belekóstolhattam az önkormányzati munkába. Fontos célom egy magyar közösségi terem (és idővel akár egy „magyar ház”) létrehozása, amely méltó és önálló otthont biztosítana közösségi rendezvényeink számára. Emellett kiemelten fontosnak tartom oktatásunk és kulturális életünk további fejlődését, valamint a Szencen áthaladó tranzitforgalom okozta problémák kezelését – például egy elkerülőút megépítésével.\n" +
            "\n" +
            "Képviselővé választásom esetén semmilyen olyan javaslatot nem fogok támogatni, amely a felelőtlen beépítést szorgalmazza – legyen szó új lakótelepek építéséről, valamint a logisztikai központ további bővítéséről. Szorgalmazni fogom, hogy Szenc városa vegye fel a kapcsolatot Pozsony megyével a város és a logisztikai központ közötti kerékpárút kiépítése érdekében, ami jelentősen megkönnyítené az ott dolgozók mindennapi munkába járását.\n" +
            "\n" +
            "E célok megvalósításához tisztelettel kérem az Önök támogatását.",
        bioSK: "Od svojich šiestich rokov žijem v Senci a z matkinej strany práve odtiaľto pochádzajú všetci moji predkovia. Môj starý otec Andrej Tóth bol známym stredoškolským profesorom na maďarskom gymnáziu v Senci. Tu som navštevoval materskú školu s vyučovacím jazykom maďarským, základnú školu a aj gymnázium. Vyštudoval som aplikovanú informatiku na Univerzite Komenského v Bratislave. Po skončení školy som sa zamestnal ako programátor. Počas práce som absolvoval aj Esterházy Akadémiu, dvojročný vzdelávací program, ktorého cieľom je pripravovať novú generáciu verejne aktívnych osobností pre našu komunitu.\n" +
            "\n" +
            "Pred niekoľkými rokmi som sa začal aktívnejšie zapájať do verejného života. Som členom miestnych organizácií Csemadoku a Maďarskej aliancie v Senci, kde som bol zvolený do predsedníctva oboch organizácií, v rámci Csemadoku zastávam funkciu podpredsedu zodpovedného pre mládež. Podarilo sa mi zorganizovať čoraz populárnejšie večerné aktivity so spoločenskými hrami v Senci, ako aj organizovanie prednášok Mathias Corvinus Collegium (MCC) v našom meste. Svojimi vedomosťami sa snažím prispieť k tomu, aby boli Csemadok a Maďarská aliancia v Senci viditeľnejšie aj v digitálnom priestore a dokázali držať krok s požiadavkami dnešnej doby.\n" +
            "\n" +
            "Hoci zatiaľ nemám skúsenosti s výkonom mandátu poslanca, mám možnosť nahliadnuť do fungovania samosprávy ako člen Komisie životného prostredia a verejného poriadku. Jedným z mojich dôležitých cieľov je vytvorenie maďarskej komunitnej miestnosti (a časom aj tzv. „maďarský dom“), ktorá by poskytla dôstojný a samostatný priestor pre naše spoločenské a kultúrne podujatia. Rovnako považujem za mimoriadne dôležitý ďalší rozvoj nášho školstva a kultúrneho života, ako aj riešenie problémov spôsobených tranzitnou dopravou prechádzajúcou cez Senec – napríklad vybudovaním obchvatu mesta.\n" +
            "\n" +
            "V prípade zvolenia za poslanca, nepodporím žiaden návrh na bezhlavú výstavbu. Či už pôjde o nové sídliská, alebo o ďalšie rozširovania logistických centier, takéto projekty môj hlas nedostanú. Budem presadzovať, aby mesto Senec nadviazalo spoluprácu s Bratislavským samosprávnym krajom s cieľom vybudovať cyklotrasu medzi mestom a logistickými centrami, čo by výrazne uľahčilo každodenné dochádzanie tamojších zamestnancov do práce.\n" +
            "\n" +
            "Na naplnenie týchto cieľov Vás úctivo žiadam o podporu.",
        goalsHU: ["Magyar közösségi terem létrehozása", "Elkerülőút megépítése", "Oktatás és kultúra fejlesztése", "Új lakótelepek építésének megakadályozása", "Logisztikai központ további bővítésének megakadályozása", "Kerékpárút kiépítése a logisztikai központ és a város között"],
        goalsSK: ["Vytvorenie maďarskej komunitnej miestnosti", "Vybudovanie obchvatu mesta", "Rozvoj školstva a kultúry", "Zamedzenie výstavby nových sídlisk", "Zamedzenie ďalšieho rozširovania logistického centra", "Vybudovanie cyklotrasy medzi logistickým centrom a mestom"],
        email: "halaszadam.sk@gmail.com",
        img: "HA.jpg"
    },
    3: {
        distHU: "1. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 1 • Krúžkujte: #",
        district: 1,
        nameHU: "Ing. Klenovics Gábor",
        nameSK: "Ing. Gábor Klenovics",
        profHU: "Polgármesteri megbízott, közgazdász",
        profSK: "Splnomocnenec primátora, ekonóm",
        bioHU: "Klenovics Gábor vagyok, 48 éves, szenci születésű lokálpatrióta, sokéves nemzetközi és európai tapasztalattal. 22 éve élek boldog házasságban, két fiú és egy lány büszke édesapja vagyok. A szlovák mellett angolul és franciául beszélek.\n\n" +
            "Szencen jártam magyar óvodába és alapiskolába, majd a szenci magyar gimnáziumban érettségiztem 1996-ban. Fiatal koromtól kezdve nagyapám, Ásványi László példája és közösségünk iránti elhivatottsága formálta a politika és a közügyek iránti érdeklődésemet. \n\n" +
            "A pozsonyi Közgazdasági Egyetem elvégzése után (2001-ben) rövid ideig az akkor megalakult Pozsony Megyei Hivatalban dolgoztam, majd két évig a Magyar Koalíció Pártjának külügyi titkára voltam. 2004-től csaknem 16 éven keresztül az Európai Parlamentben tevékenykedtem tanácsadóként és képviselői asszisztensként. Brüsszeli éveim alatt elsősorban közlekedéspolitikával, turizmussal és kisebbségi ügyekkel foglalkoztam.\n\n" +
            "Ettől függetlenül mindig szívügyemnek tekintettem és követtem az otthoni, szenci történéseket. 2020-as hazaköltözésünk óta még aktívabban bekapcsolódtam a város életébe: kirándulásokat, anyák napi ünnepségeket, lakossági fórumokat és megemlékezéseket szerveztem. Tagja vagyok a Szenczi Molnár Albert Alapiskola iskolatanácsának, emellett a Magyar Szövetség helyi szervezetének elnöki tisztségét is betöltöm.\n\n" +
            "Magyarságom mellett fontos helyet foglal el az életemben a katolikus vallás, ebben a szellemben neveljük a gyermekeinket is. A szenci magyar katolikus közösség aktív tagja vagyok, kiskorom óta a mai napig ministrálok és felolvasok a szentmiséken.\n\n" +
            "Jelenleg a Szenci Városi Hivatalban tevékenykedem polgármesteri megbízottként. Felelősségi körömbe elsősorban a  a nemzeti közösségek támogatása, a határon átnyúló együttműködések, valamint az uniós és egyéb fejlesztési források tartoznak.\n\n" +
            "Örülök annak, hogy az elmúlt négy évben a város hatalmas és látható fejlődésen ment keresztül. A Magyar Szövetség önkormányzati képviselőinek aktív szerepvállalásával és együttműködésével, támogató munkájának is köszönhetően több fontos beruházás valósult meg: \n" +
            "- Elkezdődött az új egészségügyi központ építése;\n" +
            "- Bővültek iskoláink kapacitásai és megújultak a sportpályák;\n" +
            "- Fotovoltaikus rendszerrel láttuk el iskoláink tetőszerkezetét, és az energetikai közösség révén a fennmaradó napenergiát is hasznosítjuk a városi épületek szükségleteinek kielégítésére;\n" +
            "- Az utolsó pillanatban sikerült megmenteni az enyészettől a régi istállóépületet (Galéria);\n" +
            "- Megújultak és szebbek lettek a városi közterek;\n" +
            "- Újabb bicikliutakat sikerült kiépíteni és ezzel összekötni a városközpont egyes részeit;\n" +
            "- Kiépítettük az első urnafalat a boldogfai úti temetőben.\n" +
            "Az eddigi eredményekre építve a város fejlődése tovább folytatódhat, több jelentős fejlesztés előkészítése zajlik, amelyek megvalósítása a következő évek feladata lesz.  Ezek közé tartozik:\n" +
            "- A poliklinika befejezése és színvonalas egészségügyi ellátás biztosítása;\n" +
            "- az új iskola megépítése;\n" +
            "- a buszpályaudvar revitalizációja és egy mélygarázs kialakítása a városközpontban; \n" +
            "- egy szociális központ kiépítése;\n" +
            "- további közterületek megújítása;\n" +
            "- a bicikliutak további bővítése és kiépítése a város távolabbi pontjainak irányába is.\n\n" +
            "Úgy gondolom, hogy városunk előtt még számos feladat áll, ugyanakkor a jelenlegi városvezetésben megvan az az elkötelezettség, szakmai felkészültség és tenni akarás, amely a megkezdett fejlesztések folytatásához szükséges. Bízom benne, hogy az Önök bizalmával és egy elhivatott csapat közös munkájával tovább építhetjük és szépíthetjük városunkat.\n\n" +
            "Ehhez tisztelettel kérjük támogatásukat a Magyar Szövetség képviselőjelöltjei számára. ",
        bioSK: "Volám sa Gábor Klenovics, mám 48 rokov a Senec je mojím rodným mestom, ku ktorému ma viaže silné citové puto. Už 22 rokov stojím po boku svojej manželky a spoločne vychovávame  dvoch synov a dcéru. Popri maďarčine a slovenčine hovorím po anglicky a francúzsky. \n\n" +
            "Vzdelanie som získal na seneckých maďarských školách a na miestnom gymnáziu som v roku 1996 zmaturoval. Od mladého veku mi bol príkladom môj starý otec, László Ásványi, ktorý neúnavne pracoval pre rozvoj nášho mesta a pokojné spolunažívanie maďarskej a slovenskej komunity v nej.\n\n" +
            "Po úspešnom ukončení Ekonomickej univerzity v Bratislave v roku 2001 som krátko pôsobil na novozriadenom Úrade Bratislavského samosprávneho kraja, následne som sa ujal pozície zahraničného tajomníka Strany maďarskej koalície. Od roku 2004 som takmer 16 rokov zbieral cenné skúsenosti v Európskom parlamente ako poradca a asistent viacerých europoslancov. V Bruseli som sa venoval najmä témam, ktoré majú priamy dosah na život ľudí – dopravnej politike, cestovnému ruchu a podpore národnostných menšín.\n\n" +
            "Hoci som pôsobil v zahraničí, srdcom som nikdy zo Senca neodišiel. Po návrate domov v roku 2020 som sa okamžite zapojil do komunitného života:  organizujem výlety, oslavy Dňa matiek, diskusné fóra s obyvateľmi či spomienkové slávnosti. Pôsobím tiež v rade školy pri ZŠ s VJM A.M. Szencziho a som predsedom miestnej organizácie Maďarskej aliancie. \n\n" +
            "Dôležitým pilierom môjho života je katolícka viera a v tomto duchu vychovávame aj naše deti. Som aktívnou súčasťou maďarskej katolíckej komunity v Senci a od detstva až dodnes miništrujem a čítam liturgické čítania počas omší.\n\n" +
            "Od roku 2023 pracujem na Mestskom úrade v Senci ako splnomocnenec. Do mojej pôsobnosti patrí najmä podpora národnostných komunít, cezhraničná spolupráca a efektívne čerpanie eurofondov či iných externých zdrojov. \n\n" +
            "Teší ma, že za posledné štyri roky naše mesto prešlo viditeľným rozvojom. Aj vďaka konštruktívnej podpore a aktívnej činnosti poslancov Maďarskej aliancie sa nám podarilo naštartovať viaceré kľúčové investície:\n" +
            "- Začala sa výstavba novej polikliniky;\n" +
            "- Rozšírili sme kapacity škôl, zmodernizovali športové ihriská;\n" +
            "- Na strechách škôl sme vybudovali fotovoltické systémy, vďaka ktorým dnes prostredníctvom energetického spoločenstva využívame slnečnú energiu na  uspokojenie energetickej potreby mestských budov;  \n" +
            "- V hodine dvanástej sa nám podarilo zachrániť historickú budovu starého hostinca (galériu);\n" +
            "- Obnovili sme viaceré parky a oddychové zóny;\n" +
            "- Vybudovali sme ďalšie kilometre cyklochodníkov, ktoré prepojili rôzne časti centra mesta;\n" +
            "- Postavili sme prvú urnovú stenu na cintoríne na Boldockej ulici\n" +
            "Aj v najbližších rokoch by sme chceli pokračovať v rozvoji mesta, keďže máme pripravené ďalšie investičné projekty:\n" +
            "- Dokončenie novej polikliniky a zabezpečenie kvalitnej lekárskej starostlivosti;\n" +
            "- Výstavba novej školy;\n" +
            "- Revitalizácia autobusovej stanice s podzemným parkovaním v centre;\n" +
            "- Vybudovanie nízkokapacitného sociálneho strediska;\n" +
            "- Obnova ďalších verejných priestranstiev;\n" +
            "- Rozšírenie cykloinfraštruktúry do ďalších mestských častí a ich postupné prepojenie s centrom mesta.\n\n" +
            "Myslím si, že pred nami stojí množstvo výziev a úloh. Súčasné vedenie mesta však má dostatok elánu, expertízy a odvahy potrebnej na pokračovanie v rozvoji. Dúfam, že vďaka vašej dôvere a spoločnými silami oddaného tímu, sa nám naďalej bude dariť naše mesto rozvíjať a zveľaďovať.",
        goalsHU: ["Az új poliklinika sikeres befejezése és a színvonalas szakellátás biztosítása.", "Az új alapiskola megépítése és a meglévő oktatási infrastruktúra fejlesztése.",
            "A buszpályaudvar felújítása, belvárosi mélygarázs kialakítása és a kerékpárút-hálózat bővítése.", "Új városi szociális központ kiépítése a segítségre szorulók és idősek számára.",
            "EU-s és egyéb fejlesztési keretek hatékony bevonása, valamint a magyar közösség és a határon átnyúló kapcsolatok erősítése.", "A közterületek, parkok és műemlékek folyamatos megújítása, zöld energiás beruházások folytatása."
        ],
        goalsSK: [
            "Dokončenie novej polikliniky a zabezpečenie kvalitnej lekárskej starostlivosti",
            "Výstavba novej školy a rozvoj vzdelávacej infraštruktúry",
            "Revitalizácia autobusovej stanice, podzemné parkovanie v centre a rozširovanie cyklotrás",
            "Vybudovanie nového sociálneho strediska",
            "Efektívne čerpanie eurofondov, podpora národnostných komunít a rozvoj komunitného života",
            "Obnova verejných priestranstiev, parkov a pokračovanie v ekologických projektoch"
        ],
        email: "peter@szenc.sk",
        img: "KG.jpg"
    },
    4: {
        distHU: "1. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 1 • Krúžkujte: #",
        district: 1,
        nameHU: "PhDr. Németh Gabriella",
        nameSK: "PhDr. Gabriella Németh",
        profHU: "Volt megyei alelnök",
        profSK: "Bývalá podpredsedníčka kraja",
        bioHU:
            "Némethné, Bárdos Gabriella vagyok, 1957-ben születtem Szencen. Férjnél vagyok, 2 felnőtt gyermek édesanyja és négy unokám boldog nagymamája vagyok.\n" +
            "\n" +
            "A Szenci Magyar Gimnáziumban 1976-ban érettségiztem. 2006-ban a Pozsonyi Komenský Egyetem Pedagógiai Karán szociális munka szakon szereztem diplomát, majd 2008-ban, szintén a Komenský Egyetem pedagógiai karán “A nők esélyegyenlősége és érvényesülése a munkapiacon“ című témában sikeresen megvédtem rigorózusi szakdolgozatomat és a szintén sikeres államvizsga után doktori diplomát (PhDr.) kaptam.\n" +
            "\n" +
            "Első munkahelyemen, 1978-ban, a város mellett működő karbantartási cégnél, mint könyvelő helyezkedtem el. 1991-től 2009-ig a Szenci Munkahivatalban dolgoztam. Ezt követően 2010-től 2016-ig, két ciklusban, megyei képviselőnek választottak Pozsony-megyében, ahol a szociális ügyek, az egészségügy, az oktatásügy és a kultúra területéért felelős megyei alelnöki tisztséget töltöttem be, majd másfél évig Juraj Droba szaktanácsadója voltam. 2018- tól 2025-ig a Pozsonyi Szent Erzsébet Szociális és Egészségügyi Főiskola Dunaszerdahelyi kihelyezett tagozatán, mint főiskolai oktató tanítottam a szociális munka egyes szakterületeit magában foglaló tantárgyakat. Emellett 1990-től, a rendszerváltás óta - egy választási ciklust leszámítva- képviselőként, több bizottság elnökeként, tanácstagként, ill. frakcióvezetőként tevékenykedem a városi képviselő testületben, tagja vagyok az Iskolatanácsnak és végzem a polgári házasságkötéseket is.\n" +
            "\n" +
            "A rendszerváltás előtt nem voltam párttag, viszont a szlovákiai magyar pártok megalakulását, ill. azok fúzióját követően csak ennek az egy pártnak a színeiben indultam képviselőnek. Jobboldali beállítottságú ember vagyok, keresztény értékrendet vallok. Eddigi politikai pályafutásom során mindig a lakosság jogos igényeinek teljesítését tartottam szem előtt, szociálisan érzékeny vagyok, sokéves szakmai tapasztalataimat, valamint végzettségemből adódó szakmai ismereteimet szeretném továbbra is városunk szociális problémákkal küzdő lakosainak a szolgálatába állítani. A képviselőtestületben végzett, eddigi munkám alapján bízom benne, hogy érdemesnek találnak arra, hogy az előttünk álló, új választási ciklusban is képviseljem Szenc város polgárait a városi képviselő testületben.",
        bioSK: "Narodila som sa v roku 1957 v Senci. Som vydatá, mám 2 dospelé deti a štyri vnúčatá.\n" +
            "\n" +
            "Maturovala som v roku 1976 na Gymnáziu s VJM v Senci. V roku 2006 som úspešne ukončila štúdium na Pedagogickej Fakulte Univerzity Komenskeho, v odbore sociálna práca, a následne v roku 2008 rovnako na tejto univerzite som úspešne obhájila rigoróznu prácu na tému „Nezamestnanosť a rovnosť príležitostí žien po materskej dovolenke na trhu práce“ a po úspešnom vykonaní štátnej skúšky som získala titul doktor filozofie (PhDr).\n" +
            "\n" +
            "Moje prvé pracovné skúsenosti som nadobudla ako finančná účtovníčka a personalistka v Prevádzkárni MsNV v Senci, kde som pôsobila od roku 1978 do 1991. Od roku 1991 do 2009 som pracovala na Úrade práce v Senci. Od roku 2009 do 2017, dve volebné obdobia, som bola zvolená za župnú poslankyňu, kde som zastávala funkciu podpredsedníčky BSK. Bola som zodpovedná za oblasť sociálnu, zdravotnú, za kultúru a školstvo. Následne som 18 mesiacov bola odbornou poradkyňou predsedu BSK pána Juraja Drobu v oblasti sociálnych vecí. Od roku 2018-2025 som učila na Vysokej škole zdravotníctva a sociálnej práce sv. Alžbety, na vysunutom pracovisku v Dunajskej Strede, kde som zastrešovala viaceré odborné predmety z oblasti sociálnej práce.\n" +
            "\n" +
            "Popri mojich pracovných povinností od roku 1990 som si svedomite plnila aj všetky úlohy, ktoré mi vyplývali z postu poslankyne mesta Senec. Dlhé roky som bola predsedníčkou sociálnej komisie, predsedníčkou redakčnej rady mestských novín Senčan, členkou mestskej rady, predsedníčkou poslaneckého klubu, členkou Rady školy a som dlhodobo poverená vykonávaním sobášnych obradov.\n" +
            "\n" +
            "Pred rokom 1989 som nebola členkou žiadnej politickej strany, avšak po vzniku maďarskej politickej strany MKDH som sa stala jej členkou, a po následnom zlúčení ďalších dvoch maďarských strán som sa uchádzala o dôveru Senčanov vo farbách zlúčenej strany SMK. Som pravicovo orientovaná, vyznávam kresťanské hodnoty.\n" +
            "\n" +
            "Počas môjho pôsobenia poslankyne som vždy presadzovala oprávnené požiadavky a záujmy občanov nášho mesta. Svoje dlhoročné pracovné skúsenosti a odborné vedomosti by som chcela naďalej ponúknuť Senčanom, ktorí zápasia s rôznymi problémami, s osobitným zreteľom na sociálnu oblasť.\n" +
            "\n" +
            "Na základe mojej doteraz vykonávanej práce sa uchádzam o vašu priazeň a dôveru aj v nastávajúcom volebnom období. Verím, že moju kandidatúru na poslankyňu mesta Senec podporíte, aby som Vás opäť mohla zastupovať v mestskom zastupiteľstve v Senci a presadzovať vaše potreby a očakávania.",
        goalsHU: [
            "A városi szociális ellátórendszer és a rászorulók támogatásának erősítése",
            "A szociálisan érzékeny városi politika képviselete és fejlesztése",
            "A közösségi és családi értékek megőrzése, a szépkorúak és fiatal családok segítése",
            "A sikeresen megkezdett városi fejlesztések és beruházások támogatása"
        ],
        goalsSK: [
            "Posilnenie mestského systému sociálnych služieb a pomoci odkázaným občanom",
            "Presadzovanie a rozvoj sociálne citlivej mestskej politiky",
            "Zachovanie komunitných a rodinných hodnôt, podpora seniorov a mladých rodín",
            "Podpora úspešne rozbehnutých mestských projektov a investícií"
        ],
        email: "mail@mail.sk",
        img: "NG.jpg"
    },
    5: {
        distHU: "1. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 1 • Krúžkujte: #",
        district: 1,
        nameHU: "Rovensky Mária",
        nameSK: "Mária Rovenská",
        profHU: "Óvodapedagógus, nevelő",
        profSK: "Vychovávateľka, pedagóg",
        bioHU: "Rovenský Mária vagyok, 1957-ben születtem Diószegen, de már negyven éve Szencen élek a családommal, mivel 1988-ban férjemmel Rovenský Istvánnal, aki akkor pedagógusa volt a Szenci Magyar Gimnáziumnak, úgy döntöttünk, hogy ezt a szép várost választjuk otthonunknak. Három leánygyermek anyukája és négy unoka boldog nagymamája vagyok.\n" +
            "\n" +
            "Középiskolai tanulmányaimat a Szenci Magyar Gimnáziumban kezdtem, ahol 1976-ban sikeresen leérettségiztem. \n" +
            "\n" +
            "Középiskolás éveim befejeztével közel 20 évig a szlovák filmgyártás fellegvárában, Pozsonyban a Slovenská filmová tvorba-ban dolgoztam filmlaboránsként.\n" +
            "\n" +
            "Mivel a család és a gyermekek fontos szerepet töltöttek be az életemben, úgy döntöttem, hogy inkább Szencen szeretnék elhelyezkedni, így a Seneca tours  s.r.o. munkatársa lettem.\n" +
            "\n" +
            "2006 májusától 2008 novemberéig a Szenci Városi Hivatalban, mint helyettes anyakönyvvezető dolgoztam, majd 2011-től a Szenczi Molnár Albert Magyar Tanítási Nyelvű Gimnázium és Szakközépiskola gazdasági részlegének voltam a tagja.\n" +
            "\n" +
            "Itt nyílt lehetőségem, hogy felvételizzek az óvópedagógiai és nevelői szakra, melyet 2018-ban sikeresen el is végeztem. Mint szakképzett óvodapedagógus 2018-tól a rétei óvodában, jelenleg pedig a rétei alapiskolában nevelőként dolgozom.\n" +
            "\n" +
            "Mindig aktív tagja voltam a szenci közösségnek. Éveken keresztül a Szenczi Molnár Albert Alapiskola mellett működő szülői szövetség tagja, több éven keresztül pedig elnöke voltam. Munkámmal igyekeztem az iskolát támogatni, melynek gyermekeim is diákjai voltak, sőt már az unokáim is ezt az intézményt látogatják. Oktatási intézményeink munkáját több választási cikluson keresztül, mint iskolatanácstag, ill. elnöki tisztségben is segítettem. Több évtizede rendszeresen részt veszek a város mellett működő polgári ügyek testületének munkájában. Sajnos mára már a magyar esküvőkből hovatovább kevesebb és kevesebb van. A SENČAN városi újság szerkesztőbizottságának is több éve a tagja vagyok.\n" +
            " \n" +
            "Mint a Csemadok szenci helyi szervezetének elnöksége, valamint a Magyar Szövetség elnökségi tagja aktívan segítem a két szervezet tevékenységét is.\n" +
            " \n" +
            "Szenc egy szép, élhető, folyamatosan fejlődő város. Vannak azonban dolgok, amelyeket mindig lehet jobban is csinálni. Ezért az én vízióm, elképzelésem egy olyan modern 21.századi város, ahol mindenki, legyen az gyermek, fiatal, szépkorú jól érzi magát és megtalálja boldogulását. Szeretem ezt a várost, ezért kérem az Önök bizalmát, hogy a képviselő testületben végzett munkámmal ezt a fejlődést segíteni tudjam!",
        bioSK: "Som Mária Rovenská, narodila som sa v roku 1957 v Sládkovičove, ale už 40 rokov bývam v Senci, nakoľko s manželom, Štefanom Rovenským, ktorý učil na Gymnáziu s VJM v Senci, sa rozhodli, že toto krásne mesto si vyberieme za rodinné sídlo pre naše deti. Mám tri dcéry a som šťastnou babkou štyrom vnúčatám.\n" +
            "\n" +
            "Po strednej škole, ktorú som absolvovala v roku 1976 na Gymnáziu s VJM v Senci som skoro 20 rokov pracovala ako filmová laborantka v Bratislave v Slovenskej filmovej tvorbe . \n" +
            "\n" +
            "Rodina a deti boli pre mňa vždy prvoradé, preto po narodení dcéry som sa rozhodla zmeniť si zamestnanie a zamestnala som sa v Senci ako administratívna pracovníčka v cestovnej kancelárie Seneca tours s.r.o. \n" +
            "\n" +
            "Od roku 2006 do 2008 som pracovala na Mestskom úrade v Senci, ako pomocná matrikárka, a od roku 2011 som nastúpila na oddelenie hospodárskej správy Gymnázia Alberta Molnára Szencziho. Tu sa mi naskytla príležitosť prihlásiť sa na pomaturitné štúdium v odbore učiteľstvo pre materské školy a  vychovávateľstvo, ktoré som v roku 2018 úspešne absolvovala. Už ako kvalifikovaná učiteľka som od toho istého roku pracovala v Materskej škole v Reci, momentálne som vychovávateľkou v školskom klube detí pri ZŠ v Reci. \n" +
            "\n" +
            "Vždy som bola aktívnou členkou seneckej komunity. Dlhé roky som zastávala funkciu predsedníčky rodičovského združenia na ZŠ s VJM v Senci. Svojou prácou som sa snažila podporovať činnosť školy, ktorú navštevovali všetky tri moje dcéry a momentálne tu študujú aj moji dvaja vnuci, dvojičky. Pri výkone pracovných záležitostí a splnení si povinností našich vzdelávacích inštitúcií, cez niekoľko volebných cyklov, som bola nápomocná aj ako členka, neskôr ako predsedníčka rady školy. Už niekoľko desaťročí sa podieľam na činnosti Zboru pre občianske záležitosti pri Mestskom úrade v Senci. Som aj  dlhoročnou členkou redakčnej rady mestských novín Senčan.Svojou aktívnou prácou členky predsedníctva MO Csemadok-u, ako aj MO politickej strany  Maďarská aliancia sa podieľam na komplexnej činnosti týchto dvoch organizácií.\n" +
            "\n" +
            "Milujem naše mesto  Senec, ktoré je mestom, ktoré sa sústavne rozvíja. Sú ale oblasti, ktorésa dajú ešte stále vylepšovať. Preto mojou víziou, resp. predstavou je, aby naše mesto sa stalo moderným mestom, hodným 21.storočia kde všetci jeho obyvatelia, či sú to deti, mladí alebo seniori sa cítia dobre a vedia si nájsť uplatnenie. Preto sa obraciam na Vás s prosbou o vašu priazeň, aby som svojou prácou v mestskom zastupiteľstve mohla byť nápomocná pri ďalšom rozvoji nášho mesta.",
        goalsHU: [
            "Modern, 21. századi, élhető város megteremtése minden generáció (gyermekek, fiatalok, szépkorúak) számára",
            "A helyi magyar oktatási és nevelési intézmények, iskolatanácsok folyamatos támogatása",
            "A közösségi és kulturális élet, valamint a civil szervezetek (Csemadok, ZPOZ) aktív segítése",
            "Idősek otthoni gondozásának és a szociális ellátórendszernek a támogatása"
        ],
        goalsSK: [
            "Vytvorenie moderného mesta 21. storočia pre všetky generácie (deti, mládež, seniorov)",
            "Stála podpora miestnych maďarských vzdelávacích inštitúcií a rád škôl",
            "Aktívna podpora komunitného a kultúrneho života a občianskych organizácií (Csemadok, ZPOZ)",
            "Podpora opatrovateľskej služby a sociálnej starostlivosti o seniorov"
        ],
        email: "mail@mail.sk",
        img: "RM.jpg",
    },
    6: {
        distHU: "2. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 2 • Krúžkujte: #",
        district: 2,
        nameHU: "Mgr. Kolláth Imre",
        nameSK: "Mgr. Imre Kolláth",
        profHU: "Pedagógus, utánpótlásedző",
        profSK: "Pedagóg, mládežnícky tréner",
        bioHU: "Kolláth Imre vagyok, szenci születésű, és immár 12 éve dolgozom az oktatásügyben. Három évig a Szenci Malom alapiskolán dolgoztam, pedagógiai pályafutásom további részét pedig a Szenczi Molnár Albert Magyar Tanítási Nyelvű Alapiskolában töltöttem Szencen.\n" +
            "\n" +
            "A Testnevelési és Sporttudományi főiskola alatt kezdtem el fiatal labdarúgókkal foglalkozni. Már játékos-pályafutásom alatt az volt az álmom, hogy annak befejezése után gyermekekkel dolgozhassak, és továbbadhassam nekik mindazt a tudást és tapasztalatot, amelyet edzőimtől kaptam. Edzői pályafutásomat a pozsonyi Slovan csapatánál kezdtem, később visszatértem Szencre, ahol hét éven keresztül utánpótlásedzőként tevékenykedtem.\n" +
            "\n" +
            "Pedagógusi és edzői munkám során rájöttem arra, hogy a sport nem csupán az eredményekről szól, hanem elsősorban a nevelésről, a fegyelemről, a felelősségvállalásról és a fiatalok jellemének formálásáról. Éppen ezért szeretnék aktívan részt venni a szenci ifjúság további fejlődésében, valamint olyan feltételek megteremtésében, amelyek ösztönzik a gyermekeket és a fiatalokat a rendszeres mozgásra és az egészséges életmódra.\n" +
            "\n" +
            "Célom, hogy elősegítsem az iskolák, a sportegyesületek és a város közötti szorosabb együttműködést, hogy a gyermekek minél több lehetőséget kapjanak a sportolásra és tehetségük kibontakoztatására. Fontosnak tartom továbbá, hogy minőségi és elérhető sportolási feltételeket teremtsünk nemcsak a versenysportolók, hanem azok számára is, akik szabadidejükben szeretnének sportolni.\n" +
            "\n" +
            "Hiszem, hogy Szenc nagy potenciállal rendelkezik ahhoz, hogy az utánpótlás-sport támogatásának példamutató városává váljon. Szívesen részt vennék olyan sportesemények, tornák és projektek szervezésében, amelyek összekötik a gyermekeket, a szülőket, az iskolákat és a sportegyesületeket.\n" +
            "\n" +
            "Meggyőződésem, hogy a sportba és az ifjúságba történő befektetés a város jövőjébe történő befektetés. Minden gyermek, aki megtalálja az utat a sporthoz, olyan értékeket és szokásokat sajátít el, amelyek segítik őt a sikeres életút kialakításában. Éppen ezért szeretnék tapasztalataimmal és energiámmal hozzájárulni ahhoz, hogy Szenc továbbra is olyan városként fejlődjön, amely kiváló feltételeket biztosít a fiatal generáció számára.",
        bioSK: "Volám sa Imrich Kolláth, som rodený Senčan a už 12 rokov pôsobím v školstve. Tri roky som pracoval na ZŠ Mlynská a zvyšok svojej pedagogickej praxe som strávil na ZŠ s VJM A. M. Szencziho v Senci.\n" +
            "\n" +
            "Popri štúdiu na Fakulte telesnej výchovy a športu som začal pracovať s mladými futbalistami. Už počas hráčskej kariéry bolo mojím snom venovať sa po jej skončení deťom a odovzdávať im skúsenosti, ktoré som získal od svojich trénerov. S trénerskou prácou som začínal v bratislavskom Slovane, neskôr som sa vrátil do Senca, kde som sedem rokov pôsobil ako mládežnícky tréner.\n" +
            "\n" +
            "Počas svojej pedagogickej aj trénerskej praxe som si uvedomil, že šport nie je len o výsledkoch, ale predovšetkým o výchove, disciplíne, zodpovednosti a budovaní charakteru mladých ľudí. Práve preto by som sa rád aktívne podieľal na ďalšom rozvoji mládeže v Senci a vytváral podmienky, ktoré budú motivovať deti a mládež k pravidelnému pohybu a zdravému životnému štýlu.\n" +
            "\n" +
            "Mojou víziou je podporovať užšiu spoluprácu medzi školami, športovými klubmi a mestom tak, aby mali deti viac príležitostí športovať a rozvíjať svoj talent. Dôležité je tiež vytvárať kvalitné a dostupné športové podmienky nielen pre výkonnostných športovcov, ale aj pre deti, ktoré sa chcú športu venovať vo voľnom čase.\n" +
            "\n" +
            "Verím, že Senec má veľký potenciál stať sa mestom, ktoré bude príkladom podpory mládežníckeho športu. Rád by som sa podieľal na organizovaní športových podujatí, turnajov a projektov, ktoré budú spájať deti, rodičov, školy a športové kluby. \n" +
            "\n" +
            "Som presvedčený, že investícia do športu a mládeže je investíciou do budúcnosti mesta. Každé dieťa, ktoré si nájde cestu k športu, získava hodnoty a návyky, ktoré mu pomôžu uspieť v živote. Práve preto by som rád svojimi skúsenosťami a energiou prispel k tomu, aby sa Senec aj naďalej rozvíjal ako mesto, ktoré vytvára kvalitné podmienky pre mladú generáciu.",
        goalsHU: [
            "Az iskolák, a sportegyesületek és a város közötti szorosabb együttműködés elősegítése",
            "Minőségi és elérhető sportolási feltételek megteremtése a szabadidő- és versenysportban",
            "Az utánpótlás-sport, a rendszeres mozgás és az egészséges életmód kiemelt támogatása",
            "Gyermekeket, szülőket és iskolákat összekötő közösségi sportesemények és tornák szervezése"
        ],
        goalsSK: [
            "Podpora užšej spolupráce medzi školami, športovými klubmi a mestom",
            "Vytváranie kvalitných a dostupných podmienok pre rekreačný aj výkonnostný šport",
            "Kľúčová podpora mládežníckeho športu, pravidelného pohybu a zdravého životného štýlu",
            "Organizovanie športových podujatí a turnajov spájajúcich deti, rodičov a školy"
        ],
        email: "mail@mail.sk",
        img: "KI.jpg",
    },
    7: {
        distHU: "2. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 2 • Krúžkujte: #",
        district: 2,
        nameHU: "Mészáros Melinda",
        nameSK: "Melinda Mészáros",
        profHU: "Asszisztens",
        profSK: "Asistentka",
        bioHU: "Szőjünk Szencnek jobb jövőt.\n" +
            "\n" +
            "Mészáros Melinda vagyok. 1984. december 31-én születtem Galántán, és életem jelentős részét Szencen töltöttem. A Szenci Leányszakközépiskolában végeztem tanulmányaimat. Pályafutásom során dolgoztam Pozsonyban egy órásüzletben, jelenleg pedig asszisztensként dolgozom Szencen.\n" +
            "\n" +
            "Férjemmel öt gyermeket nevelünk. Legidősebb lányunk, Lilla 15 éves, őt követi Ádám, Olivér, Zoltán és a legkisebb, Ella. Gyermekeink által nap mint nap közelről tapasztaljuk meg a családokat érintő örömöket, kihívásokat, valamint azt is, hogy milyen fontos a jól működő közösség, az iskola és a város támogatása.\n" +
            "\n" +
            "A család mellett fontos szerepet tölt be az életemben a közösségi élet. Szeretek emberek között lenni, beszélgetni, kapcsolatokat építeni és segíteni ott, ahol szükség van rá. Számos barátságot ápolok, és hiszem, hogy egy közösség ereje az összefogásban rejlik.\n" +
            "\n" +
            "Aktívan részt veszek az óvoda és az iskola szülői közösségének munkájában. Szívesen segítek a szervezésben, rendezvények előkészítésében és lebonyolításában, valamint minden olyan kezdeményezésben, amely a gyermekek és a családok javát szolgálja. Fontos számomra, hogy a szülők véleménye meghallgatásra találjon, és hogy közösen tegyünk gyermekeink jövőjéért.\n" +
            "\n" +
            "Szabadidőmben szívesen olvasok, valamint a szövés a legkedvesebb hobbim. Kézzel készített sálakat és terítőket szövök, mert örömet találok az alkotásban és az értékteremtésben. Ez a tevékenység türelemre, kitartásra és odafigyelésre tanít, amelyeket a mindennapi életben is fontosnak tartok.\n" +
            "\n" +
            "Úgy gondolom, hogy a város fejlődéséhez nemcsak tervek, hanem együttműködés, nyitottság és tenni akarás is szükséges. Szenc számomra nem csupán lakóhely, hanem otthon, ahol gyermekeink felnőnek, ahol barátaink élnek, és amelynek jövőjét közösen formáljuk.\n" +
            "\n" +
            "Ezért szeretnék aktívan részt venni városunk életében, képviselni a családok, a szülők és a helyi közösségek érdekeit, valamint hozzájárulni ahhoz, hogy Szenc továbbra is egy élhető, összetartó és fejlődő város maradjon.",
        bioSK: "Spoločne utkime lepší Senec.\n" +
            "\n" +
            "Volám sa Melinda Mészáros. Narodila som sa 31. decembra 1984 v Galante a podstatnú časť svojho života som prežila v Senci. Štúdium som ukončila na Dievčenskej strednej odbornej škole v Senci. Počas svojej pracovnej kariéry som pracovala v hodinárstve v Bratislave, v súčasnosti pracujem ako asistentka v Senci.\n" +
            "\n" +
            "Spolu s manželom vychovávame päť detí. Naša najstaršia dcéra Lilla má 15 rokov, po nej nasledujú Ádám, Olivér, Zoltán a najmladšia Ella. Vďaka našim deťom každodenne zblízka vnímame radosti aj výzvy rodinného života a uvedomujeme si, aké dôležité sú kvalitné školy, podpora rodín a dobre fungujúca komunita.\n" +
            "\n" +
            "Popri rodine zohráva v mojom živote významnú úlohu aj komunitný život. Rada sa stretávam s ľuďmi, rozprávam sa, budujem vzťahy a pomáham tam, kde je to potrebné. Vážim si priateľstvá a verím, že sila každej komunity spočíva vo vzájomnej spolupráci a ochote pomôcť si.\n" +
            "\n" +
            "Aktívne sa zapájam do činnosti rodičovských združení v materskej aj základnej škole. Ochotne pomáham pri organizovaní podujatí, príprave školských akcií a pri iniciatívach, ktoré prinášajú úžitok deťom a rodinám. Je pre mňa dôležité, aby bol hlas rodičov vypočutý a aby sme spoločne vytvárali lepšie podmienky pre budúcnosť našich detí.\n" +
            "\n" +
            "Vo voľnom čase rada čítam a mojím najobľúbenejším koníčkom je tkanie. Ručne tkám šály a prestierania, pretože ma teší tvorba a vytváranie hodnôt. Táto záľuba ma učí trpezlivosti, vytrvalosti a pozornosti k detailom – vlastnostiam, ktoré považujem za dôležité aj v každodennom živote.\n" +
            "\n" +
            "Som presvedčená, že rozvoj mesta si vyžaduje nielen dobré plány, ale aj spoluprácu, otvorenosť a ochotu pracovať pre spoločné dobro. Senec pre mňa nie je len miestom, kde bývam. Je to domov, kde vyrastajú naše deti, kde žijú naši priatelia a ktorého budúcnosť spoločne formujeme.\n" +
            "\n" +
            "Preto by som sa chcela aktívne podieľať na živote nášho mesta, zastupovať záujmy rodín, rodičov a miestnych komunít a prispieť k tomu, aby Senec zostal príjemným, súdržným a rozvíjajúcim sa mestom pre všetkých.",
        goalsHU: [
            "A családok, a szülők és a helyi közösségek érdekeinek aktív képviselete",
            "Az iskolai és óvodai szülői közösségek, valamint a gyermekrendezvények támogatása",
            "A családi életet, gyermeknevelést és oktatást segítő városi fejlesztések elősegítése",
            "Egy összetartó, élhető és fejlődő szenci közösség építése összefogással"
        ],
        goalsSK: [
            "Aktívne zastupovanie záujmov rodín, rodičov a miestnych komunít",
            "Podpora rodičovských združení, školských a predškolských podujatí pre deti",
            "Presadzovanie mestskej politiky priateľskej k rodinám a kvalitnému vzdelávaniu",
            "Budovanie súdržnej, príjemnej a rozvíjajúcej sa komunity v Senci prostredníctvom spolupráce"
        ],
        email: "mail@mail.sk",
        img: "MM.jpg",
    },
    8: {
        distHU: "2. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 2 • Krúžkujte: #",
        district: 2,
        nameHU: "Pohl Igor",
        nameSK: "Igor Pohl",
        profHU: "Gázkazán-technikus, kisiparos",
        profSK: "Technik plynových zariadení",
        bioHU: "Pohl Igornak hívnak, 59 éves vagyok.\n" +
            "\n" +
            "Feleségemmel Zsuzsával 3 gyermekünk  van.\n" +
            "\n" +
            "Pozsonyban szakközép iskolán elektrotechnikát végeztem.\n" +
            "\n" +
            "Jelenleg kisiparos vagyok, gázkazánok szerviszelésével foglalkozom.\n" +
            "\n" +
            "Hosszú évek óta aktívan szolgálom a helyi közösséget a római katolikus plébánia keretében. \n" +
            "\n" +
            "Nemcsak technikai feladatokat látok el, hanem lelki szolgálatot is végzek akolitusként. \n" +
            "\n" +
            "Ezen kívül különböző egyházi és közösségi rendezvények szervezésében is részt veszek.\n" +
            "\n" +
            "Az egyházi tanács tagjaként részt veszek a Szent Miklós templom körüli munkálatok javaslatában, megoldásában.\n" +
            "\n" +
            "Köszönöm irántam való bizalmatokat. Köszönöm, hogy megszólítottatok.\n" +
            "\n" +
            "A továbbiakban eddigi tevékenységemet akár a civil, vagy egyházi dolgokban szeretném talán még nagyobb lelkesedéssel folytatni. Szeretném katolikus templomunk örökségét tovább vinni és tovább adni.\n" +
            "\n" +
            "Támogatni, illetve kezdeményezni szeretnék minden olyan város fejlesztési tevékenységet, amely a közjót szolgálja és egységet hoz, mindamellet nem feledkezik meg a lelki értékekről sem.",
        bioSK: "Igor Pohl, 59 rokov.\n" +
            "\n" +
            "S manželkou Zuzkou máme tri deti.\n" +
            "\n" +
            "Vyštudoval som elektrotechniku - silnoprúd.\n" +
            "\n" +
            "Pracujem ako živnostník, technik plynových zariadení.\n" +
            "\n" +
            "Dlhé roky sa aktívne zapájam do života miestnej rímskokatolíckej farnosti. Okrem toho, že zabezpečujem veci technického charakteru, vykonávam aj duchovnú službu akolytu. Organizujem tiež rôzne cirkevné a spoločenské programy. Ako člen farskej rady pomáham pri riešení projektov okolo Kostola sv. Mikuláša.\n" +
            "\n" +
            "Ďakujem za prejavenú dôveru, aj za nomináciu za poslanca mestského zastupiteľstva.\n" +
            "\n" +
            "Doterajšie moje aktivity v civilnej alebo cirkevnej oblasti by som chcel vykonávať s ešte väčším nadšením.\n" +
            "\n" +
            "Chcel by som naďalej presadzovať projekty s duchovnými hodnotami a dedičstvo nášho rímskokatolíckeho kostola odovzdať nastupujúcej generácii. \n" +
            "\n" +
            "Chcel by som podporovať všetky mestské rozvojové aktivity, ktoré slúžia pre verejné dobro a prinášajú jednotu. ",
        goalsHU: [
            "A közjót szolgáló és a közösségi egységet erősítő városfejlesztések támogatása",
            "A Szent Miklós templom örökség megőrzése, ápolása",
            "A lelki értékek és a keresztény értékrend képviselete a város életében",
            "A civil és egyházi közösségi rendezvények, helyi kezdeményezések aktív segítése"
        ],
        goalsSK: [
            "Podpora rozvojových projektov mesta slúžiacich verejnému dobru a spájaniu komunity",
            "Zachovanie a starostlivosť o dedičstvo Kostola sv. Mikuláša",
            "Presadzovanie duchovných hodnôt a kresťanského hodnotového systému v živote mesta",
            "Aktívna pomoc pri organizovaní cirkevných a spoločenských podujatí"
        ],
        email: "mail@mail.sk",
        img: "PI.jpg",
    },
    9: {
        distHU: "3. sz. körzet • Karikázd: #",
        distSK: "Obvod č. 3 • Krúžkujte: #",
        district: 3,
        nameHU: "Kontár Andrea",
        nameSK: "Andrea Kontárová",
        profHU: "Vállalkozó",
        profSK: "Podnikateľka",
        bioHU: "Jó napot kívánok Szenc minden lakosának!\n" +
            "\n" +
            "A nevem Kontár Andrea. Szenci lakos és helyi vállalkozó vagyok. Számomra Szenc nem csupán egy pont a térképen, és nem csak az a hely, ahol a lakcímem van. Ez az otthonom. Ez az a város, ahol találkozunk a szomszédokkal, ahol családjaink élnek, ahol vállalkozunk, dolgozunk, gyermekeinket neveljük, és ahol mindennapi életünket alakítjuk. Éppen ezért őszintén fontos számomra a város jövője.\n" +
            "\n" +
            "Amikor a szomszédokkal, a lakosokkal vagy a helyi vállalkozókkal beszélgetek, gyakran ugyanazokat a problémákat hallom tőlük. Az emberek szeretik Szencet, ugyanakkor érzik, hogy városunknak nagyobb biztonságra, nagyobb rendre, több odafigyelésre, tisztább környezetre és több emberi megközelítésre van szüksége. Szeretnénk, ha a fiatalok itt képzelnék el a jövőt, az idősebbek pedig tiszteletet és támogatást éreznének.\n" +
            "\n" +
            "Ezért állok ma Önök előtt jelöltként Szenc 3. választási körzetében. Nem azért vállaltam a jelölést, hogy nagy ígéreteket tegyek, amelyek a választások után feledésbe merülnek. Azért indulok, mert hiszem, hogy a helyi politika is lehet becsületes, tisztességes és emberközeli. Hiszem, hogy ha meghallgatjuk egymást, őszintén megnevezzük a problémákat, és közösen keressük a megoldásokat, az előbbre viheti városunkat.\n" +
            "\n" +
            "A helyi önkormányzatnak nem szabad távol lennie az emberektől, mellettük kell állnia — mindennapi gondjaikban, kérdéseikben és abban a reményükben is, hogy a dolgokat lehet jobban csinálni. Egy képviselőnek nem csupán üléseken kell jelen lennie. Meg kell hallgatnia az embereket, kérdeznie kell, ki kell állnia mellettük, és az ő hangjuknak kell lennie ott, ahol a város jövőjéről döntenek. Én így szeretném végezni a munkámat.\n" +
            "\n" +
            "Prioritásaim Szenc számára:\n" +
            "- Fenntartható turizmus és a tavak védelme. A szenci tavak városunk szíve. Az emlékek, a pihenés, a találkozások helyei és egyben büszkeségünk is. Ha azt szeretnénk, hogy a következő generációkat is szolgálják, vigyáznunk kell rá, és úgy kell fejlesztenünk a turizmust, hogy az ne legyen káros hatással se a természetre, se a lakosok életminőségére.\n" +
            "- Minőségi infrastruktúra a lakosok és a látogatók számára. A város fejlődésének elsősorban azokra az emberekre kell gondolnia, akik itt élnek. Jobb szolgáltatásokra, biztonságosabb közterekre és olyan megoldásokra van szükségünk, amelyek megkönnyítik a családok, az idősek, a vállalkozók és a látogatók mindennapi életét.\n" +
            "- A helyi vállalkozók támogatása. Minden helyi vállalkozás mögött egy konkrét ember, egy család és rengeteg munka áll. A helyi vállalkozók életet visznek mindennapjainkba, szolgáltatásokat és munkalehetőségeket adnak a lakosoknak. Tisztességes feltételeket, megbecsülést és olyan önkormányzatot érdemelnek, amely nem problémaként tekint rájuk, hanem a közösség fontos részeként tartja számon őket.\n" +
            "- Egész éves turizmus. Szencen minden feltétel adott ahhoz, hogy ne csak nyáron, hanem egész évben teljes életet éljen a város. Támogatni szeretném azokat a rendezvényeket, szolgáltatásokat és tevékenységeket, amelyek energiát, találkozási lehetőségeket és új esélyeket hoznak a városba a főszezonon kívül is.\n" +
            "- Modern szolgáltatások és digitális turizmus. Egy modern városnak egyszerűen, érthetően és hozzáférhetően kell kommunikálnia. A lakosoknak és a látogatóknak egyaránt megbízható információkra van szükségük. A digitális megoldások időmegtakarítást, hatékonyabb tervezést és nyitottabb várost biztosítanak mindenki számára.\n" +
            "- A város közösségi dimenziója. A város nem csupán épületekből, utakból és költségvetésekből áll, hanem elsősorban emberekből, szomszédokból, családokból, játszótereken lévő gyermekekből, padokon ülő idősekből, pult mögött dolgozó vállalkozókból, egyesületekben tevékenykedő önkéntesekből. Ha összetartunk, Szenc olyan hellyé válhat, ahol az emberek nemcsak ismerik, hanem támogatják is egymást.\n" +
            "\n" +
            "Hiszek egy olyan Szencben, amely biztonságos, nyitott, tiszta és élettel teli. Hiszek egy olyan városban, ahol az embereknek nem kell úgy érezniük, hogy nem hallgatják meg őket. Hiszek egy olyan önkormányzatban, amely nem szavak mögé bújik, hanem konkrét emberekért és konkrét eredményekért dolgozik. És hiszem, hogy ha egyesítjük tapasztalatainkat, energiánkat és őszinte segítő szándékunkat, többre vagyunk képesek, mint azt ma talán gondolnánk.\n" +
            "\n" +
            "Bizalommal kérem az Önök támogatását. Nem ígérek azonnali csodákat, de — tisztességes munkát, nyílt kommunikációt, őszinte érdeklődést és eltökéltséget kínálok. Együttműködésre nyújtom Önöknek a kezem egy olyan Szencért, amely biztonságosabb, szívélyesebb, modernebb és mindannyiunkhoz közelebb áll. Támogatásukat előre is köszönöm és örömmel várom a személyes találkozásokat és beszélgetéseket.",
        bioSK: "Dobrý deň prajem všetkým obyvateľom Senca,\n" +
            "\n" +
            "moje meno je Andrea Kontárová. Som obyvateľkou Senca a miestnou podnikateľkou. Senec pre mňa nie je iba bod na mape ani miesto, kde mám adresu. Je to môj domov. Je to mesto, v ktorom sa stretávame so susedmi, v ktorom žijú naše rodiny, v ktorom podnikáme, pracujeme, vychovávame deti a tvoríme každodenný život. Práve preto mi na jeho budúcnosti úprimne záleží.\n" +
            "\n" +
            "Keď sa rozprávam so susedmi, obyvateľmi či miestnymi podnikateľmi, často počujem rovnaké obavy. Ľudia majú Senec radi, no zároveň cítia, že naše mesto potrebuje viac istoty, viac poriadku, viac pozornosti a viac ľudského prístupu. Chceme sa cítiť bezpečne vo vlastných uliciach. Chceme, aby naše okolie bolo čisté a dôstojné. Chceme, aby tu mladí videli budúcnosť a starší cítili úctu a podporu.\n" +
            "\n" +
            "Preto dnes pred vami stojím ako kandidátka za 3. volebný obvod v Senci. Nekandidujem preto, aby som dávala veľké sľuby, ktoré po voľbách zapadnú prachom. Kandidujem preto, lebo verím, že aj komunálna politika môže byť poctivá, slušná a blízka ľuďom. Verím, že ak budeme počúvať jeden druhého, pomenúvať problémy pravdivo a hľadať riešenia spoločne, môžeme naše mesto posunúť dopredu.\n" +
            "\n" +
            "Miestna samospráva nemá byť vzdialená od ľudí. Má byť pri nich — v ich každodenných starostiach, v ich otázkach aj v ich nádeji, že veci sa dajú robiť lepšie. Poslanec nemá sedieť iba na zasadnutiach. Poslanec by mal mat znalosť, má počúvať, pýtať sa, stáť za ľuďmi a byť ich hlasom tam, kde sa rozhoduje o budúcnosti mesta. Práve takto chcem svoju prácu robiť aj ja.\n" +
            "\n" +
            "Moje priority pre Senec:\n" +
            "- Udržateľný turizmus a ochrana jazier. Senecké jazerá sú srdcom nášho mesta. Sú miestom spomienok, oddychu, stretnutí aj hrdosti. Ak chceme, aby slúžili aj ďalším generáciám, musíme ich chrániť s rešpektom a rozvíjať turizmus tak, aby nepoškodzoval prírodu ani kvalitu života obyvateľov.\n" +
            "- Kvalitná infraštruktúra pre návštevníkov aj obyvateľov. Rozvoj mesta musí myslieť predovšetkým na ľudí, ktorí tu žijú. Potrebujeme lepšie služby, bezpečnejšie verejné priestory a riešenia, ktoré uľahčia každodenný život rodinám, seniorom, podnikateľom aj návštevníkom.\n" +
            "- Podpora lokálnych podnikateľov. Za každou miestnou prevádzkou je konkrétny človek, rodina, odvaha a veľa práce. Miestni podnikatelia dávajú mestu život, služby aj pracovné príležitosti. Zaslúžia si férové podmienky, rešpekt a samosprávu, ktorá ich nebude vnímať ako problém, ale ako dôležitú súčasť komunity.\n" +
            "- Celoročný turizmus. Senec má potenciál žiť naplno nielen v lete, ale počas celého roka. Chcem podporovať podujatia, služby a aktivity, ktoré prinesú do mesta energiu, stretávanie ľudí a nové príležitosti aj mimo hlavnej sezóny.\n" +
            "Moderné služby a digitálny turizmus. Moderné mesto má komunikovať jednoducho, zrozumiteľne a dostupne. Obyvatelia aj návštevníci potrebujú informácie, na ktoré sa môžu spoľahnúť. Digitálne riešenia nám môžu pomôcť šetriť čas, lepšie plánovať a robiť mesto otvorenejším pre všetkých.\n" +
            "- Komunitný rozmer mesta. Mesto nie sú len budovy, cesty a rozpočty. Mesto sú ľudia. Susedia, rodiny, deti na ihriskách, seniori na lavičkách, podnikatelia za pultom, dobrovoľníci v spolkoch. Ak budeme držať spolu, Senec môže byť miestom, kde sa ľudia nielen poznajú, ale aj navzájom podporujú.\n" +
            "\n" +
            "Verím v Senec, ktorý bude bezpečný, otvorený, čistý a živý. Verím v mesto, kde sa ľudia nemusia cítiť nevypočutí. Verím v samosprávu, ktorá sa neskrýva za slová, ale pracuje pre konkrétnych ľudí a konkrétne výsledky. A verím, že ak spojíme skúsenosti, energiu a úprimnú vôľu pomôcť, dokážeme viac, než si dnes možno myslíme.\n" +
            "\n" +
            "S dôverou sa uchádzam o váš hlas. Nesľubujem zázraky zo dňa na deň — sľubujem poctivú prácu, otvorenú komunikáciu, úprimný záujem a odhodlanie stáť pri ľuďoch. Podávam vám ruku k spolupráci pre Senec, ktorý bude bezpečnejší, srdečnejší, modernejší a bližší nám všetkým. Ďakujem vám a teším sa na osobné stretnutia a rozhovory s vami.",
        goalsHU: [
            "Fenntartható és egész éves turizmus fejlesztése a Szenci tavak kiemelt védelmével",
            "Minőségi, biztonságos és tiszta városi környezet megteremtése minden generáció számára",
            "A helyi vállalkozók aktív támogatása, megbecsülése és partnerségi kezelése",
            "Modern, digitális városi szolgáltatások és átlátható, emberközeli önkormányzat"
        ],
        goalsSK: [
            "Rozvoj udržateľného a celoročného turizmu s dôrazom na ochranu Seneckých jazier",
            "Vytváranie kvalitnej, bezpečnej a čistej mestskej infraštruktúry pre všetky generácie",
            "Aktívna podpora, rešpekt a férové podmienky pre lokálnych podnikateľov",
            "Moderné, digitálne služby mesta a transparentná, ľuďom blízka samospráva"
        ],
        email: "mail@mail.sk",
        img: "KA.jpg"
    }
};

let currentLang = 'hu';

function setLanguage(lang) {
    currentLang = lang;
    if (lang === 'sk') {
        document.body.classList.add('lang-mode-sk');
        document.getElementById('btn-sk').className = "px-2 py-1 rounded bg-emerald-700 text-white transition";
        document.getElementById('btn-hu').className = "px-2 py-1 rounded text-gray-600 hover:text-emerald-800 transition";
    } else {
        document.body.classList.remove('lang-mode-sk');
        document.getElementById('btn-hu').className = "px-2 py-1 rounded bg-emerald-700 text-white transition";
        document.getElementById('btn-sk').className = "px-2 py-1 rounded text-gray-600 hover:text-emerald-800 transition";
    }
    var navTitleBadgeSc = document.getElementById("nav-title-badge-sc");
    var district1Streets = document.getElementById("district-1-streets-candidate")
    var district2Streets = document.getElementById("district-2-streets-candidate");
    var district3Streets = document.getElementById("district-3-streets-candidate");
    if (lang === 'sk') {
        document.title = "Maďarská aliancia – Senec | #SrdcomPreSenec";
        navTitleBadgeSc.innerHTML = "Senec";
        district1Streets.innerHTML = "5 kandidátov";
        district2Streets.innerHTML = "3 kandidáti";
        district3Streets.innerHTML = "1 kandidát";
    } else {
        document.title = "Magyar Szövetség – Szenc | #SzívügyünkSzenc";
        navTitleBadgeSc.innerHTML = "Szenc";
        district1Streets.innerHTML = "5 jelölt";
        district2Streets.innerHTML = "3 jelölt";
        district3Streets.innerHTML = "1 jelölt";
    }

    updateSearchLanguage();
}

function openCandidateModal(id) {
    const data = candidates[id];
    if (!data) return;

    document.getElementById('modal-district').innerText = currentLang === 'hu' ? data.distHU : data.distSK;
    document.getElementById('modal-name').innerText = currentLang === 'hu' ? data.nameHU : data.nameSK;
    document.getElementById('modal-prof').innerText = currentLang === 'hu' ? data.profHU : data.profSK;
    document.getElementById('modal-bio').innerText = currentLang === 'hu' ? data.bioHU : data.bioSK;
    document.getElementById('modal-image').src = `assets/candidates/${data.img}`;

    const goalsList = document.getElementById('modal-goals');
    goalsList.innerHTML = '';
    const goals = currentLang === 'hu' ? data.goalsHU : data.goalsSK;
    goals.forEach(g => {
        const li = document.createElement('li');
        li.innerText = g;
        goalsList.appendChild(li);
    });

    const socials = document.getElementById('modal-socials');
    socials.innerHTML = `<a href="mailto:${data.email}" class="hover:text-emerald-600"><i class="fa-solid fa-envelope text-lg"></i> ${data.email}</a>`;

    document.getElementById('candidate-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeCandidateModal() {
    document.getElementById('candidate-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function openResultsModal() {
    const modal = document.getElementById('results-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Megakadályozza a háttér görgetését
}

function closeResultsModal() {
    const modal = document.getElementById('results-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function filterStreets() {
    const input = document.getElementById('street-search').value.toLowerCase();
    [1, 2, 3].forEach(num => {
        const list = document.getElementById(`streets-list-${num}`);
        const items = list.getElementsByTagName('li');
        for (let item of items) {
            if (item.innerText.toLowerCase().includes(input)) {
                item.style.display = "";
                item.classList.add("bg-emerald-100", "font-bold");
            } else {
                item.classList.remove("bg-emerald-100", "font-bold");
                if (input.length > 2) {
                    item.style.display = "none";
                } else {
                    item.style.display = "";
                }
            }
        }
    });
}

const pollingData = {
    "farske_namestie": {
        streetHU: "Farské námestie",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "frana_krala": {
        streetHU: "Fraňa Kráľa",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "kratka": {
        streetHU: "Krátka",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "moyzesova": {
        streetHU: "Moyzesova",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "pivnicna": {
        streetHU: "Pivničná",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "pod_vinicami": {
        streetHU: "Pod vinicami",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "strma": {
        streetHU: "Strmá",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "svateho_urbana": {
        streetHU: "Svätého Urbana",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "safarikova": {
        streetHU: "Šafáriková",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "tehelna": {
        streetHU: "Tehelná",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "tehelna_2": {
        streetHU: "Tehelňa",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "vinohradnicka": {
        streetHU: "Vinohradnícka",
        okrsokHU: "1. szavazókör",
        okrsokSK: "Volebný okrsok č. 1",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },

    "bratislavska_3_25_neparos": {
        streetHU: "Bratislavská č. 3–25 (csak páratlan számok)",
        okrsokHU: "2. szavazókör",
        okrsokSK: "Volebný okrsok č. 2",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "mierove_namestie": {
        streetHU: "Mierové námestie",
        okrsokHU: "2. szavazókör",
        okrsokSK: "Volebný okrsok č. 2",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },

    "nam_1_maja": {
        streetHU: "Nám. 1. mája",
        okrsokHU: "3. szavazókör",
        okrsokSK: "Volebný okrsok č. 3",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "robotnicka": {
        streetHU: "Robotnícka",
        okrsokHU: "3. szavazókör",
        okrsokSK: "Volebný okrsok č. 3",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "sadova": {
        streetHU: "Sadová",
        okrsokHU: "3. szavazókör",
        okrsokSK: "Volebný okrsok č. 3",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },
    "skorcova": {
        streetHU: "Škorcová",
        okrsokHU: "3. szavazókör",
        okrsokSK: "Volebný okrsok č. 3",
        placeHU: "Základná škola s VJM A.M. Szencziho",
        addressHU: "Molnár Albert tér 2., Senec"
    },

    "holleho": {
        streetHU: "Hollého",
        okrsokHU: "4. szavazókör",
        okrsokSK: "Volebný okrsok č. 4",
        placeHU: "Materská škola",
        addressHU: "Kollárova utca 23., Senec"
    },
    "j_jesenskeho": {
        streetHU: "J. Jesenského",
        okrsokHU: "4. szavazókör",
        okrsokSK: "Volebný okrsok č. 4",
        placeHU: "Materská škola",
        addressHU: "Kollárova utca 23., Senec"
    },
    "trnavska": {
        streetHU: "Trnavská",
        okrsokHU: "4. szavazókör",
        okrsokSK: "Volebný okrsok č. 4",
        placeHU: "Materská škola",
        addressHU: "Kollárova utca 23., Senec"
    },
    "turecka": {
        streetHU: "Turecká",
        okrsokHU: "4. szavazókör",
        okrsokSK: "Volebný okrsok č. 4",
        placeHU: "Materská škola",
        addressHU: "Kollárova utca 23., Senec"
    },

    "hurbanova": {
        streetHU: "Hurbanova",
        okrsokHU: "5. szavazókör",
        okrsokSK: "Volebný okrsok č. 5",
        placeHU: "Materská škola",
        addressHU: "Kollárova utca 23., Senec"
    },
    "kollarova": {
        streetHU: "Kollárova",
        okrsokHU: "5. szavazókör",
        okrsokSK: "Volebný okrsok č. 5",
        placeHU: "Materská škola",
        addressHU: "Kollárova utca 23., Senec"
    },

    "svaty_martin": {
        streetHU: "m. č. Svätý Martin",
        okrsokHU: "6. szavazókör",
        okrsokSK: "Volebný okrsok č. 6",
        placeHU: "Materská škola",
        addressHU: "Svätý Martin 3."
    },

    "boldocka_cesta": {
        streetHU: "Boldocká cesta",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "duhova": {
        streetHU: "Dúhová",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "fucikova": {
        streetHU: "Fučíkova",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "heckova": {
        streetHU: "Hečková",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "jasna": {
        streetHU: "Jasná",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "kvetna": {
        streetHU: "Kvetná",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "mlynska": {
        streetHU: "Mlynská",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "rosna": {
        streetHU: "Rosná",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "slnecna": {
        streetHU: "Slnečná",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "stefanikova": {
        streetHU: "Štefánikova",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },
    "vrbenskeho": {
        streetHU: "Vrbenského",
        okrsokHU: "7. szavazókör",
        okrsokSK: "Volebný okrsok č. 7",
        placeHU: "Zákadná škola",
        addressHU: "Mlynská utca 50., Senec"
    },

    "nitrianska": {
        streetHU: "Nitrianska",
        okrsokHU: "8. szavazókör",
        okrsokSK: "Volebný okrsok č. 8",
        placeHU: "Spojená škola s VJM (Gymnázium maďarské)",
        addressHU: "Lichnerova utca 71., Senec"
    },
    "rybarska": {
        streetHU: "Rybárska",
        okrsokHU: "8. szavazókör",
        okrsokSK: "Volebný okrsok č. 8",
        placeHU: "Spojená škola s VJM (Gymnázium maďarské)",
        addressHU: "Lichnerova utca 71., Senec"
    },
    "snp": {
        streetHU: "SNP",
        okrsokHU: "8. szavazókör",
        okrsokSK: "Volebný okrsok č. 8",
        placeHU: "Spojená škola s VJM (Gymnázium maďarské)",
        addressHU: "Lichnerova utca 71., Senec"
    },
    "samorinska": {
        streetHU: "Šamorínska",
        okrsokHU: "8. szavazókör",
        okrsokSK: "Volebný okrsok č. 8",
        placeHU: "Spojená škola s VJM (Gymnázium maďarské)",
        addressHU: "Lichnerova utca 71., Senec"
    },
    "skolska": {
        streetHU: "Školská",
        okrsokHU: "8. szavazókör",
        okrsokSK: "Volebný okrsok č. 8",
        placeHU: "Spojená škola s VJM (Gymnázium maďarské)",
        addressHU: "Lichnerova utca 71., Senec"
    },
    "sturova": {
        streetHU: "Štúrova",
        okrsokHU: "8. szavazókör",
        okrsokSK: "Volebný okrsok č. 8",
        placeHU: "Spojená škola s VJM (Gymnázium maďarské)",
        addressHU: "Lichnerova utca 71., Senec"
    },
    "vodna": {
        streetHU: "Vodná",
        okrsokHU: "8. szavazókör",
        okrsokSK: "Volebný okrsok č. 8",
        placeHU: "Spojená škola s VJM (Gymnázium maďarské)",
        addressHU: "Lichnerova utca 71., Senec"
    },
    "zeleznicna": {
        streetHU: "Železničná",
        okrsokHU: "8. szavazókör",
        okrsokSK: "Volebný okrsok č. 8",
        placeHU: "Spojená škola s VJM (Gymnázium maďarské)",
        addressHU: "Lichnerova utca 71., Senec"
    },

    "banicova": {
        streetHU: "Baničova",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "bratislavska_2_30_paros": {
        streetHU: "Bratislavská č. 2–30 (páros számok)",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "bratislavska_27_75_neparos": {
        streetHU: "Bratislavská č. 27–75 (páratlan számok)",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "emila_boleslava_lukaca": {
        streetHU: "Emila Boleslava Lukáča",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "jana_smreka": {
        streetHU: "Jána Smreka",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "kalinciakova": {
        streetHU: "Kalinčiakova",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "liptovska": {
        streetHU: "Liptovská",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "ludovita_fullu": {
        streetHU: "Ľudovíta Fullu",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "m_urbana": {
        streetHU: "M. Urbana",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "novomeskeho": {
        streetHU: "Novomeského",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "pri_striebornom_jazere": {
        streetHU: "Pri Striebornom jazere",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "strieborne_jazero": {
        streetHU: "Strieborné jazero",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "zahradnicka": {
        streetHU: "Záhradnícka",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "zarnovova": {
        streetHU: "Žarnovova",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },
    "hany_zelinovej": {
        streetHU: "Hany Zelinovej",
        okrsokHU: "9. szavazókör",
        okrsokSK: "Volebný okrsok č. 9",
        placeHU: "Materská škola",
        addressHU: "Kysucká utca 9., Senec"
    },

    "dobsinskeho": {
        streetHU: "Dobšinského",
        okrsokHU: "10. szavazókör",
        okrsokSK: "Volebný okrsok č. 10",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "gagarinova": {
        streetHU: "Gagarinova",
        okrsokHU: "10. szavazókör",
        okrsokSK: "Volebný okrsok č. 10",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "janosikova": {
        streetHU: "Jánošíkova",
        okrsokHU: "10. szavazókör",
        okrsokSK: "Volebný okrsok č. 10",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "kysucka": {
        streetHU: "Kysucká",
        okrsokHU: "10. szavazókör",
        okrsokSK: "Volebný okrsok č. 10",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "zemplinska": {
        streetHU: "Zemplínska",
        okrsokHU: "10. szavazókör",
        okrsokSK: "Volebný okrsok č. 10",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },

    "inovecka": {
        streetHU: "Inovecká",
        okrsokHU: "11. szavazókör",
        okrsokSK: "Volebný okrsok č. 11",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "karola_sisku": {
        streetHU: "Karola Šišku",
        okrsokHU: "11. szavazókör",
        okrsokSK: "Volebný okrsok č. 11",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "oravska": {
        streetHU: "Oravská",
        okrsokHU: "11. szavazókör",
        okrsokSK: "Volebný okrsok č. 11",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "pezinska": {
        streetHU: "Pezinská",
        okrsokHU: "11. szavazókör",
        okrsokSK: "Volebný okrsok č. 11",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "povazska": {
        streetHU: "Považská",
        okrsokHU: "11. szavazókör",
        okrsokSK: "Volebný okrsok č. 11",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },
    "žitavska": {
        streetHU: "Žitavská",
        okrsokHU: "11. szavazókör",
        okrsokSK: "Volebný okrsok č. 11",
        placeHU: "Gépjárműipari és Vállalkozási Szakközépiskola",
        addressHU: "Kysucká utca 14., Senec"
    },

    "andreja_sladkovica": {
        streetHU: "Andreja Sládkoviča",
        okrsokHU: "12. szavazókör",
        okrsokSK: "Volebný okrsok č. 12",
        placeHU: "Iskolai gyermekklub",
        addressHU: "Sokolská utca, 4134. hrsz., Senec"
    },
    "sokolska": {
        streetHU: "Sokolská",
        okrsokHU: "12. szavazókör",
        okrsokSK: "Volebný okrsok č. 12",
        placeHU: "Iskolai gyermekklub",
        addressHU: "Sokolská utca, 4134. hrsz., Senec"
    },
    "svatoplukova": {
        streetHU: "Svätoplukova",
        okrsokHU: "12. szavazókör",
        okrsokSK: "Volebný okrsok č. 12",
        placeHU: "Iskolai gyermekklub",
        addressHU: "Sokolská utca, 4134. hrsz., Senec"
    },

    "bernolakova": {
        streetHU: "Bernolákova",
        okrsokHU: "13. szavazókör",
        okrsokSK: "Volebný okrsok č. 13",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "hviezdoslavova": {
        streetHU: "Hviezdoslavova",
        okrsokHU: "13. szavazókör",
        okrsokSK: "Volebný okrsok č. 13",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "j_g_tajovskeho": {
        streetHU: "J.G. Tajovského",
        okrsokHU: "13. szavazókör",
        okrsokSK: "Volebný okrsok č. 13",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "kosicka": {
        streetHU: "Košická",
        okrsokHU: "13. szavazókör",
        okrsokSK: "Volebný okrsok č. 13",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "pribinova": {
        streetHU: "Pribinova",
        okrsokHU: "13. szavazókör",
        okrsokSK: "Volebný okrsok č. 13",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },

    "belu_bartoka": {
        streetHU: "Bélu Bártóka",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "fandlyho": {
        streetHU: "Fándlyho",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "chalupkova": {
        streetHU: "Chalupkova",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "letna": {
        streetHU: "Letná",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "lichnerova": {
        streetHU: "Lichnerova",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "masiarska": {
        streetHU: "Mäsiarska",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "priemyselna": {
        streetHU: "Priemyselná",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "sportova": {
        streetHU: "Športová",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },
    "vajanskeho": {
        streetHU: "Vajanského",
        okrsokHU: "14. szavazókör",
        okrsokSK: "Volebný okrsok č. 14",
        placeHU: "J.G. Tajovský Alapiskola",
        addressHU: "Tajovského utca 1., Senec"
    },

    "a_dubceka": {
        streetHU: "A. Dubčeka",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "a_hlinku": {
        streetHU: "A. Hlinku",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "bazova": {
        streetHU: "Bazová",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "ceresnova": {
        streetHU: "Čerešňová",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "dialnicna": {
        streetHU: "Dialničná",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "drienkova": {
        streetHU: "Drienková",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "g astanova": {
        streetHU: "Gaštanová",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "horny_dvor": {
        streetHU: "Horný dvor",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "j_csermaka": {
        streetHU: "J. Csermáka",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "j_farkasa": {
        streetHU: "J. Farkasa",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "j_murgasa": {
        streetHU: "J. Murgaša",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "javorova": {
        streetHU: "Javorová",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "marhulova": {
        streetHU: "Marhuľová",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "mesacna": {
        streetHU: "Mesačná",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "mor usova": {
        streetHU: "Morušová",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "pri_stifte": {
        streetHU: "Pri Štifte",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "sipkova": {
        streetHU: "Šípková",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "trnkova": {
        streetHU: "Trnková",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },
    "visnova": {
        streetHU: "Višňová",
        okrsokHU: "15. szavazókör",
        okrsokSK: "Volebný okrsok č. 15",
        placeHU: "Seneci Idegenforgalmi Hivatal",
        addressHU: "Május 1. tér 53/4., Senec"
    },

    "agatova": {
        streetHU: "Agátová",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "brezova": {
        streetHU: "Brezová",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "dlha": {
        streetHU: "Dlhá",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "drozdia": {
        streetHU: "Drozdia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "holubia": {
        streetHU: "Holubia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "jarna": {
        streetHU: "Jarná",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "jastrabia": {
        streetHU: "Jastrabia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "jesenna": {
        streetHU: "Jesenná",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "lastovicia": {
        streetHU: "Lastovičia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "lipova": {
        streetHU: "Lipová",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "lucna": {
        streetHU: "Lúčna",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "orechova": {
        streetHU: "Orechová",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "slavicia": {
        streetHU: "Slávičia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "slnecne_jazera": {
        streetHU: "Slnečné jazerá",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "sovia": {
        streetHU: "Sovia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "skovrancia": {
        streetHU: "Škovránčia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "ulica_pri_vcelarikoch": {
        streetHU: "Ulica pri včelárikoch",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "vrabcia": {
        streetHU: "Vrabčia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "vtacia": {
        streetHU: "Vtáčia",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },
    "zimna": {
        streetHU: "Zimná",
        okrsokHU: "16. szavazókör",
        okrsokSK: "Volebný okrsok č. 16",
        placeHU: "Városi Művelődési Központ",
        addressHU: "Május 1. tér 2., Senec"
    },

    "borievkova": {
        streetHU: "Borievková",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "borovicova": {
        streetHU: "Borovicová",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "dolna": {
        streetHU: "Dolná",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "fialkova": {
        streetHU: "Fialková",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "horna": {
        streetHU: "Horná",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "jedlova": {
        streetHU: "Jedľová",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "kapria": {
        streetHU: "Kapria",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "karasova": {
        streetHU: "Karasová",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "lesna": {
        streetHU: "Lesná",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "muskatova": {
        streetHU: "Muškátová",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "okruzna": {
        streetHU: "Okružná",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "polna": {
        streetHU: "Poľná",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "ruzova": {
        streetHU: "Ružová",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "seredska": {
        streetHU: "Sereďská",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "smrekova": {
        streetHU: "Smreková",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "tulipanova": {
        streetHU: "Tulipánová",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "turnianska": {
        streetHU: "Turnianska",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "ulica_alexandra_albrechta": {
        streetHU: "Ulica Alexandra Albrechta",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "ulica_eugena_suchona": {
        streetHU: "Ulica Eugena Suchoňa",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "ulica_jana_cikkera": {
        streetHU: "Ulica Jána Cikkera",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "ulica_jana_l_bellu": {
        streetHU: "Ulica Jána L. Bellu",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "ulica_jana_n_hummela": {
        streetHU: "Ulica Jána N. Hummela",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "ulica_pri_buresi": {
        streetHU: "Ulica pri Búreši",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    },
    "ulica_pri_ciernej_vode": {
        streetHU: "Ulica pri Čiernej vode",
        okrsokHU: "17. szavazókör",
        okrsokSK: "Volebný okrsok č. 17",
        placeHU: "Antona Bernoláka Gimnázium",
        addressHU: "Lichnerova utca 69., Senec"
    }
    // Töltsd fel a többi utcát is a fenti mintát követve...
};

function searchPollingStation() {
    const input = document.getElementById('polling-search-input').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('polling-results-container');
    const noResult = document.getElementById('polling-no-result');

    if (input.length < 2) {
        resultsContainer.innerHTML = '';
        noResult.classList.add('hidden');
        return;
    }

    const searchKey = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const matchingKeys = Object.keys(pollingData).filter(key => {
        const data = pollingData[key];
        const normalizedKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const normalizedStreetHU = (data.streetHU || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        return normalizedKey.includes(searchKey) || normalizedStreetHU.includes(searchKey);
    });

    if (matchingKeys.length > 0) {
        noResult.classList.add('hidden');

        // DINAMIKUS IGAZÍTÁS
        if (matchingKeys.length === 1) {
            resultsContainer.classList.add('justify-center');
        } else {
            resultsContainer.classList.remove('justify-center');
        }

        const isSk = (typeof currentLang !== 'undefined' && currentLang === 'sk');

        // Címkék nyelvi beállítása
        const labelStreet = isSk ? "Ulica:" : "Keresett utca:";
        const labelPlace = isSk ? "Volebná miestnosť:" : "Szavazóhelyiség:";
        const labelAddress = isSk ? "Adresa:" : "Cím:";

        resultsContainer.innerHTML = matchingKeys.map(key => {
            const data = pollingData[key];
            const okrsok = isSk ? data.okrsokSK : data.okrsokHU;

            return `
        <div class="flex-shrink-0 w-80 snap-center bg-white border border-emerald-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:border-emerald-500 transition duration-200">
          <div>
            <!-- Header: Utca neve és Szavazókör száma -->
            <div class="flex items-start justify-between gap-2 mb-3 pb-3 border-b border-gray-100">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">${labelStreet}</span>
                <h3 class="font-extrabold text-gray-900 text-lg leading-tight">${data.streetHU}</h3>
              </div>
              <span class="bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
                ${okrsok}
              </span>
            </div>

            <!-- Részletek: Szavazóhelyiség neve és címe -->
            <div class="space-y-3 mt-3">
              <!-- Szavazóhelyiség épület/név -->
              <div class="flex items-start gap-3">
                <div class="w-7 h-7 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i class="fa-solid fa-building-columns text-xs"></i>
                </div>
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">${labelPlace}</span>
                  <p class="text-sm font-bold text-gray-800 leading-snug">${data.placeHU}</p>
                </div>
              </div>

              <!-- Szavazóhelyiség címe -->
              <div class="flex items-start gap-3">
                <div class="w-7 h-7 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i class="fa-solid fa-location-dot text-xs"></i>
                </div>
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">${labelAddress}</span>
                  <p class="text-xs text-gray-600 leading-snug">${data.addressHU}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
        }).join('');
    } else {
        resultsContainer.innerHTML = '';
        noResult.classList.remove('hidden');
    }
}

// Kifejezetten csak az utcanév kereső nyelvét frissítő függvény
function updateSearchLanguage() {
    const inputPSI = document.getElementById('polling-search-input');
    const inputStS = document.getElementById('street-search');

    if (inputPSI) {
        // Csak ennek az egy inputnak módosítjuk a placeholderét
        inputPSI.placeholder = (typeof currentLang !== 'undefined' && currentLang === 'sk')
            ? "Napíšte názov ulice..."
            : "Írd be az utcád nevét...";
    }

    if (inputStS) {
        // Csak ennek az egy inputnak módosítjuk a placeholderét
        inputStS.placeholder = (typeof currentLang !== 'undefined' && currentLang === 'sk')
            ? "Napíšte názov ulice..."
            : "Írd be az utcád nevét...";
    }

    // Ha már van megjelenített találat, frissítjük a kártyák szövegét is (pl. okrsokHU / okrsokSK)
    searchPollingStation();
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenu && menuIcon) {
        const isHidden = mobileMenu.classList.toggle('hidden');

        // Ikon cseréje (Hamburger <-> Bezárás X)
        if (isHidden) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    }
}

function openGdprModal(e) {
    if(e) e.preventDefault();
    document.getElementById('gdpr-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeGdprModal() {
    document.getElementById('gdpr-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

const backToTopBtn = document.getElementById('back-to-top');

function handleScroll() {
    // Mobilon a pageYOffset és a scrollTop a legbiztosabb érték
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPos > 250) {
        backToTopBtn.classList.remove('hidden');
        backToTopBtn.classList.add('flex');
    } else {
        backToTopBtn.classList.remove('flex');
        backToTopBtn.classList.add('hidden');
    }
}

// Eseményfigyelők az asztali és mobil görgetésekhez
window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('touchmove', handleScroll, { passive: true });

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function filterDistrict(district, btn) {
    // Összes gomb visszaállítása inaktív (sötétszürke) állapotba
    document.querySelectorAll('.district-tab').forEach(tab => {
        tab.className = "district-tab text-gray-700 font-semibold px-4 py-2 rounded-xl text-xs sm:text-sm transition";
    });

    // A kiválasztott gomb átállítása aktív (sötétzöld háttér, fehér szöveg) állapotba
    btn.className = "district-tab bg-emerald-800 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm transition shadow-sm";

    // Kártyák szűrése
    const cards = document.querySelectorAll('[data-district]');
    cards.forEach(card => {
        if (district === 'all' || card.getAttribute('data-district') === district) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


import type { Dictionary } from "./types"

export const sq: Dictionary = {
  meta: {
    title: "Trebit – Softuer modern për menaxhimin e biznesit",
    description:
      "Trebit është platformë moderne për shitje, fiskalizim, stok, financa, raporte dhe menaxhim të biznesit në Kosovë.",
    keywords:
      "softuer për biznes, program për biznes, program për shitje, fiskalizim Kosovë, menaxhim stoku, program për market, program për farmaci, POS Kosovë, softuer për shitje, menaxhim biznesi, softuer biznesi Kosovë",
  },
  nav: {
    product: "Produktet",
    solutions: "Zgjidhjet",
    packages: "KuBIT",
    businesses: "Për biznese",
    about: "Rreth nesh",
    contact: "Kontakt",
    login: "Kyçu",
    demo: "Kërko Demo",
    groups: [
      { label: "KUBIT", items: [
        { label: "KuBIT ERP / Lite", href: "/pakot#kubit-erp", description: "Shitje, stok, depo dhe financa në një sistem." },
        { label: "KuBIT POS", href: "/pakot#kubit-pos", description: "Arkë e shpejtë për dyqane dhe supermarkete." },
        { label: "KuBIT Bar", href: "/pakot#kubit-bar", description: "Porosi në tavolinë, kuzhinë dhe faturim." },
        { label: "Fiskalizimi", href: "/pakot#fiskalizimi", description: "Fatura në përputhje me ligjin, automatikisht." },
        { label: "Paketat", href: "/pakot#pakot", description: "Zgjidhni planin sipas madhësisë së biznesit." },
        { label: "Implementimi", href: "/pakot#implementimi", description: "Instalim, trajnim dhe migrim i të dhënave." },
      ] },
      { label: "PAJISJE", items: [
        { label: "POS Systems", href: "/produkti" },
        { label: "Printerë Termik", href: "/produkti" },
        { label: "Barcode Scanner", href: "/produkti" },
        { label: "PDA / Mobile Computers", href: "/produkti" },
        { label: "Label Printers", href: "/produkti" },
        { label: "Tablets", href: "/produkti" },
      ] },
      { label: "SHËRBIME IT", items: [
        { label: "Managed IT", href: "/sherbime-it" },
        { label: "Infrastructure", href: "/sherbime-it" },
        { label: "Security & Backup", href: "/sherbime-it" },
        { label: "Cloud", href: "/sherbime-it" },
        { label: "Integration", href: "/sherbime-it" },
        { label: "Analytics & Automation", href: "/sherbime-it" },
      ] },
      { label: "SUPPORT", items: [
        { label: "Hap Ticket", href: "/support" },
        { label: "WhatsApp Support", href: "/support" },
        { label: "Remote Support", href: "/support" },
        { label: "Knowledge Base", href: "/support" },
        { label: "Downloads", href: "/support" },
      ] },
      { label: "RRETH NESH", items: [
        { label: "Trebit Solutions", href: "/rreth-nesh" },
        { label: "KuBIT Partnership", href: "/rreth-nesh" },
        { label: "Partnerët", href: "/rreth-nesh" },
        { label: "Kontakt", href: "/rreth-nesh" },
      ] },
    ],
  },
  loginModal: {
    title: "Kyçja në Trebit",
    text: "Hyrja në platformë do të lidhet këtu sapo të jetë gati për klientët. Ndërkohë, kërko një demo dhe ekipi ynë të udhëzon hap pas hapi.",
    close: "Mbyll",
  },
  hero: {
    eyebrow: "Një platformë. Gjithçka për biznesin tënd.",
    headlineA: "Gjithçka që i duhet biznesit tuaj. Në një vend.",
    headlineB: "",
    supporting: "ERP, softuer dhe harduer të integruar për ta menaxhuar biznesin tuaj më thjesht, më shpejt dhe më mirë.",
    primary: "Zbulo Trebit",
    secondary: "Shiko pakot",
    learnMore: "Mëso më shumë",
    trust: "Zgjidhje e ndërtuar për nevojat e bizneseve në Kosovë.",
    tabs: { erp: "ERP", software: "Software", hardware: "Hardware" },
    floats: {
      sales: "Shitje",
      stock: "Stok",
      finance: "Financë",
      reports: "Raporte",
      fiscal: "Fiskalizim",
    },
  },
  values: {
    efficiency: {
      title: "Më shumë efikasitet",
      text: "Automatizo proceset dhe kurse kohë.",
    },
    cost: {
      title: "Më pak kosto",
      text: "Menaxho më shumë me më pak resurse.",
    },
    security: {
      title: "Më shumë siguri",
      text: "Të dhënat e biznesit të mbrojtura dhe të organizuara.",
    },
    growth: {
      title: "Mundësi për rritje",
      text: "Mjete që rriten bashkë me biznesin tënd.",
    },
  },
  product: {
    title: "Gjithçka që i nevojitet biznesit në një platformë.",
    items: {
      sales: {
        title: "Shitje",
        text: "Menaxho shitjet dhe procesin e faturimit në mënyrë të shpejtë dhe të organizuar.",
      },
      fiscal: {
        title: "Fiskalizim",
        text: "Fiskalizim i integruar dhe i përshtatur për bizneset në Kosovë.",
      },
      stock: {
        title: "Stok",
        text: "Kontrollo artikujt, sasitë, depot dhe lëvizjet e stokut.",
      },
      finance: {
        title: "Financa",
        text: "Mbaj nën kontroll të dhënat dhe raportet financiare të biznesit.",
      },
      logistics: {
        title: "Logjistikë",
        text: "Menaxho proceset dhe lëvizjet e produkteve.",
      },
      orders: {
        title: "Porosi",
        text: "Organizo porositë dhe proceset e shitjes.",
      },
      reports: {
        title: "Raporte",
        text: "Shiko të dhënat e biznesit në kohë reale dhe merr vendime më të informuara.",
      },
      channels: {
        title: "Kanale digjitale",
        text: "Lidhe biznesin me kanale moderne digjitale.",
      },
    },
  },
  productPage: {
    eyebrow: "Zgjidhje për biznesin",
    title: "Teknologjia e duhur për mënyrën si punon biznesi yt.",
    intro: "Trebit bashkon softuerin që organizon operacionet me hardware-in e besueshëm që e bën punën e përditshme më të shpejtë dhe më të sigurt.",
    software: { label: "Software", title: "Një platformë për punën e përditshme.", text: "Nga shitjet dhe fiskalizimi deri te stoku, raportet dhe operacionet e menaxhuara IT, çdo proces lidhet në një sistem të vetëm." },
    hardware: {
      label: "Hardware", title: "Pajisje të gatshme për çdo pikë pune.", text: "Përzgjedhim, konfigurojmë dhe mbështesim pajisjet që i duhen biznesit tënd, nga arka deri te rrjeti.",
      items: [
        { title: "POS, PC, PDA, tablet, printer dhe skaner", text: "Pajisje të përzgjedhura për shitje, administrim, lëvizje në terren dhe printim të shpejtë e të saktë." },
        { title: "Network, WiFi, firewall dhe UPS", text: "Rrjet i qëndrueshëm dhe i mbrojtur, me lidhje të besueshme dhe energji rezervë për vazhdimësi në punë." },
        { title: "Standardizim dhe Lifecycle Management", text: "Konfigurime të njëjta, inventar i qartë, përditësime dhe planifikim për çdo fazë të jetës së pajisjes." },
        { title: "Hardware as a Service", text: "Pajisje, konfigurim, mirëmbajtje dhe zëvendësim në një model fleksibil, pa investim të madh fillestar." },
      ],
    },
  },
  servicePages: {
    it: {
      eyebrow: "Shërbime IT",
      title: "Teknologjia që e mban biznesin në lëvizje.",
      intro: "Nga infrastruktura dhe cloud-i te siguria, integrimet dhe automatizimi, KuBIT ju ndihmon ta mbani teknologjinë të qëndrueshme dhe të gatshme për rritje.",
      items: [
        { title: "Managed IT", text: "Monitorojmë, mirëmbajmë dhe mbështesim sistemet tuaja çdo ditë, që ekipi të ketë teknologji të qëndrueshme dhe të gatshme për punë. Nga kërkesat e përdoruesve deri te problemet kritike, reagojmë me procese dhe prioritete të qarta." },
        { title: "Infrastructure", text: "Planifikojmë dhe administrojmë serverët, rrjetin, Wi-Fi-n, firewall-in dhe pajisjet kryesore të biznesit. Infrastruktura dokumentohet, standardizohet dhe përgatitet për rritje, siguri dhe vazhdimësi më të mirë." },
        { title: "Security & Backup", text: "Mbrojmë të dhënat dhe sistemet me politika sigurie, kopje rezervë të kontrolluara dhe plane rikuperimi. Kjo ndihmon që biznesi të vazhdojë punën edhe kur ndodh një gabim, humbje e të dhënave ose ndërprerje." },
        { title: "Cloud", text: "Konfigurojmë shërbime cloud që u japin ekipeve qasje të sigurt, bashkëpunim më të lehtë dhe fleksibilitet për t'u rritur. Zgjidhjet përshtaten me aplikacionet, përdoruesit dhe kërkesat reale të biznesit." },
        { title: "Integration", text: "Lidhim ERP-në, POS-in, pajisjet dhe sistemet e tjera që të dhënat të lëvizin pa futje të dyfishtë dhe pa procese të shkëputura. Integrimet e bëjnë punën më të shpejtë, më të saktë dhe më të kontrollueshme." },
        { title: "Analytics & Automation", text: "Kthejmë të dhënat e operacioneve në raporte të kuptueshme dhe automatizojmë detyrat që përsëriten. Kështu kurseni kohë, dalloni më shpejt problemet dhe merrni vendime të bazuara në të dhëna." },
      ],
    },
    support: {
      eyebrow: "Support",
      title: "Ndihmë kur ju nevojitet.",
      intro: "Një pikë e vetme kontakti për kërkesat, asistencën teknike dhe materialet që e ndihmojnë ekipin tuaj të vazhdojë punën.",
      items: [
        { title: "Hap Ticket", text: "Dërgoni kërkesën tuaj dhe ekipi ynë e ndjek deri në zgjidhje." },
        { title: "WhatsApp Support", text: "Komunikim i shpejtë për pyetje dhe raste që kërkojnë përgjigje të drejtpërdrejtë." },
        { title: "Remote Support", text: "Asistencë në distancë për konfigurime dhe probleme teknike." },
        { title: "Knowledge Base", text: "Udhëzime dhe përgjigje praktike për përdorimin e përditshëm." },
        { title: "Downloads", text: "Materiale dhe dokumente të nevojshme për sistemet tuaja." },
      ],
    },
    about: {
      eyebrow: "Rreth nesh",
      title: "Trebit Solutions dhe KuBIT Partnership.",
      intro: "Trebit Solutions sjell zgjidhje të integruara për bizneset, ndërsa partneriteti me KuBIT lidh software-in, hardware-in dhe shërbimet IT në një ekosistem të vetëm.",
      partnersTitle: "Partnerët tanë",
      partners: ["Balfin", "Toshiba", "Pricer", "Diebold Nixdorf", "Swinto", "ISA4D", "NLB Bank", "MIKA", "NOVA", "Tretech", "TIME", "FEGO"],
    },
  },
  industries: {
    title: "Një zgjidhje për shumë lloje biznesesh.",
    cta: "Gjej zgjidhjen për biznesin tënd",
    items: {
      services: {
        title: "Shërbime",
        text: "Fatura, klientë dhe orare pune në një vend — pa letra dhe pa humbje kohe.",
      },
      barbers: {
        title: "Berberë",
        text: "Shitje e shpejtë në arke, produkte dhe shërbime, me raporte të qarta në fund të ditës.",
      },
      salons: {
        title: "Sallone bukurie",
        text: "Menaxho shërbimet, produktet, stokun dhe pagesat pa e ndërprerë punën me klientin.",
      },
      freeshop: {
        title: "Free Shop",
        text: "Kontroll i stokut, çmimeve dhe shitjeve në hapësira me lëvizje të lartë.",
      },
      boutiques: {
        title: "Butikë",
        text: "Artikuj, madhësi, ngjyra dhe sezon — të gjitha të organizuara për shitje më të qetë.",
      },
      pharmacy: {
        title: "Farmaci",
        text: "Stok i saktë, skadime dhe shitje e rregullt, e përshtatur për ritmin e farmacisë.",
      },
      markets: {
        title: "Markete",
        text: "Arka e shpejtë, stok i gjallë dhe pamje e qartë e ditës së shitjes.",
      },
      retail: {
        title: "Dyqane Retail",
        text: "Nga arka te depoja: një sistem që mban dyqanin të rregullt çdo ditë.",
      },
    },
  },
  pricing: {
    title: "Zgjidh paketën që i përshtatet biznesit tënd.",
    subtitle:
      "Fillo me funksionalitetet që të duhen sot dhe zgjeroje Trebit-in bashkë me biznesin tënd.",
    contactPrice: "Kontakto për çmim",
    requestQuote: "Kërko ofertë",
    popular: "Më e zgjedhura",
    items: {
      basic: {
        name: "Pako Bazike",
        description: "E thjeshtë dhe efikase për fillimin e biznesit.",
        features: ["Shitje", "Fiskalizimi", "Menaxhimi i artikujve", "Raporte bazike", "Përdorim i lehtë"],
        cta: "Zgjidh Pakon Bazike",
      },
      standard: {
        name: "Pako Standard",
        description: "Më shumë funksionalitete për rritjen e biznesit.",
        features: [
          "Artikujt dhe kategoritë",
          "Subjektet (klientë/furnitorë)",
          "Blerjet dhe stoku",
          "Shitje – Fiskalizimi",
          "Raporte të avancuara",
        ],
        cta: "Zgjidh Pakon Standard",
      },
      plus: {
        name: "Pako Plus",
        description: "Zgjidhje e zgjeruar për biznese në zhvillim.",
        features: [
          "Të gjitha nga Pako Standard",
          "Menaxhim i më shumë degëve",
          "Stok dhe transfere",
          "Raporte financiare",
          "Integrime me pajisje/pagesa",
          "Përdorues të shumtë",
        ],
        cta: "Zgjidh Pakon Plus",
      },
      enterprise: {
        name: "Pako Enterprise",
        description: "Për biznese të mëdha dhe kërkesa të veçanta.",
        features: [
          "Të gjitha funksionalitetet",
          "Integrime të personalizuara",
          "Role dhe leje të avancuara",
          "Raporte të dedikuara",
          "Mbështetje prioritare",
        ],
        cta: "Kontakto ekipin",
      },
    },
  },
  packagesPage: {
    eyebrow: "KuBIT",
    title: "KuBIT",
    intro: "Një ekosistem i plotë teknologjik për biznesin tuaj: nga menaxhimi i operacioneve dhe shitjeve, te shërbimi në lokal, paketat dhe implementimi i përshtatur.",
    erp: { title: "KuBIT ERP Dashboard", text: "KuBIT ERP ju jep një pamje të qartë të gjithë biznesit. Menaxhoni shitjet, artikujt, stokun, depot, furnitorët, financat dhe raportet nga një sistem i vetëm. Të dhënat lidhen në kohë reale, në mënyrë që ju të kuptoni më shpejt çfarë po ndodh dhe të merrni vendime më të sigurta.", label: "Menaxhim i biznesit" },
    pos: { title: "KuBIT POS", text: "KuBIT POS e thjeshton punën në arkë dhe e lidh atë drejtpërdrejt me ERP-në. Regjistroni shitjet, pranoni pagesat, menaxhoni artikujt dhe mbani kontroll mbi performancën e çdo pike të shitjes. Një përvojë e shpejtë për stafin dhe më shumë saktësi për biznesin.", label: "Shitje dhe pagesa" },
    bar: { title: "KuBIT Bar", text: "KuBIT Bar është krijuar për kafene, bare dhe restorante që duan ta menaxhojnë shërbimin pa komplikime. Nga porosia në tavolinë dhe menaxhimi i artikujve, te kuzhina, arka dhe pagesa, çdo hap lidhet në një rrjedhë të vetme pune.", label: "Për kafene, bare dhe restorante" },
    pricingTitle: "Pakot",
    implementation: {
      title: "Implementimi",
      text: "Implementimi i KuBIT përshtatet me mënyrën se si punon biznesi juaj. Ne analizojmë proceset, konfigurojmë sistemin, lidhim pajisjet dhe e përgatisim ekipin tuaj për përdorim të sigurt në përditshmëri.",
      steps: [
        { title: "Analiza e nevojave", text: "Përcaktojmë proceset dhe funksionalitetet që i duhen biznesit tuaj." },
        { title: "Konfigurimi", text: "Përshtatim KuBIT me mënyrën e punës, përdoruesit dhe pajisjet tuaja." },
        { title: "Trajnimi dhe lansimi", text: "Trajnojmë ekipin dhe ju ndihmojmë ta nisni punën me siguri." },
      ],
    },
  },
  how: {
    title: "Si ju ndihmon Trebit?",
    intro: "Trebit i sjell në një vend teknologjitë dhe mjetet që ju nevojiten për ta menaxhuar biznesin tuaj në mënyrë më të thjeshtë dhe efikase.",
    steps: [
      { title: "Menaxhim", text: "Mbani nën kontroll shitjet, stokun, financat dhe proceset e biznesit." },
      { title: "Integrim", text: "Lidhni ERP-në, softuerët dhe harduerin tuaj në një ekosistem të vetëm." },
      { title: "Kontroll", text: "Punoni më efikas, merrni vendime më të informuara dhe zhvilloni biznesin tuaj." },
    ],
  },
  dashboard: {
    title: "Shiko biznesin tënd, në një pamje.",
    subtitle: "Shitjet e ditës, stoku, alarmet dhe raportet financiare — të gjitha të qarta, në kohë reale.",
    kpis: [
      { label: "Shitje sot", value: "4.280 €", delta: "+12%" },
      { label: "Të hyra javore", value: "28.640 €", delta: "+8%" },
      { label: "Artikuj në stok", value: "1.240", delta: "stabil" },
      { label: "Stok i ulët", value: "7", delta: "kujdes" },
    ],
    chartTitle: "Ecuria e shitjeve",
    stockTitle: "Alarme stoku",
    txTitle: "Transaksionet e fundit",
    lowStock: "Sasi e ulët",
    sectionTitle: "Menaxhoni biznesin tuaj nga një vend.",
    sectionText: "Me Trebit ERP, keni një pamje të qartë të operacioneve të biznesit tuaj dhe kontroll mbi proceset kryesore, nga shitjet dhe inventari deri te financat.",
    labels: { sales: "Shitjet", inventory: "Inventari", finance: "Financat" },
    slides: {
      software: { title: "Software që e organizon biznesin", text: "Një platformë e qartë për shitje, fiskalizim, stok, financa dhe raporte në kohë reale.", points: ["Shitje dhe fiskalizim", "Stok, blerje dhe logjistikë", "Financa dhe raporte", "Kanale digjitale të lidhura"] },
      hardware: { title: "Hardware i gatshëm për punë", text: "Pajisje të përzgjedhura dhe të konfiguruara për çdo pikë ku punon biznesi yt.", points: ["POS, PC, PDA dhe tablet", "Printerë dhe skanerë", "Network, WiFi, firewall dhe UPS", "Hardware as a Service"] },
      support: { title: "Support që përgjigjet kur duhet", text: "Ekipi ynë të ndihmon të vazhdosh punën pa ndërprerje, me zgjidhje të shpejta dhe të qarta.", points: ["Ndihmë për përdoruesit", "Konfigurim i pajisjeve", "Zgjidhje e problemeve teknike", "Udhëzim dhe mbështetje lokale"] },
      itServices: { title: "Shërbime të menaxhuara IT", text: "Ne kujdesemi për teknologjinë e përditshme, që ekipi yt të fokusohet te puna dhe rritja.", points: ["Server, rrjet dhe infrastrukturë", "Menaxhim i identitetit dhe qasjes", "Monitorim dhe SLA", "Menaxhim i incidenteve"] },
    },
  },
  security: {
    title: "Biznesi yt, gjithmonë nën kontroll.",
    operations: {
      eyebrow: "Shërbime të menaxhuara IT",
      title: "Operacionet e IT-së që e mbajnë biznesin në lëvizje.",
      intro: "Nga infrastruktura bazë deri te mbështetja e përdoruesve, i organizojmë proceset e përditshme të IT-së që ekipet tuaja të kenë teknologji të sigurt, të qasshme dhe të gatshme për punë.",
      items: {
        infrastructure: { title: "Server, rrjet dhe infrastrukturë", summary: "Planifikojmë, konfigurojmë dhe mirëmbajmë bazën teknike për aplikacionet, të dhënat dhe komunikimin e biznesit.", details: ["Administrim i serverëve, ruajtjes së të dhënave, kopjeve rezervë dhe shërbimeve cloud.", "Konfigurim i rrjetit, Wi-Fi, VPN, firewall dhe segmentimit për lidhje të qëndrueshme e të mbrojtura.", "Dokumentim i infrastrukturës, konfigurime të standardizuara dhe planifikim i kapacitetit për rritje.", "Mirëmbajtje parandaluese, përditësime të kontrolluara dhe rikuperim i shpejtë në rast ndërprerjeje."] },
        access: { title: "Menaxhimi i identitetit dhe qasjes", summary: "Sigurojmë që secili person të ketë vetëm qasjen që i nevojitet, me gjurmë të qartë auditimi.", details: ["Krijim, ndryshim dhe mbyllje e llogarive për hyrje të reja, ndryshim roli dhe largim nga puna.", "Role dhe leje sipas detyrës, duke zbatuar parimin e qasjes minimale.", "Autentikim shumfaktorësh dhe politika të sigurta për fjalëkalimet e pajisjet.", "Rishikim periodik i qasjeve dhe regjistra auditimi për të reduktuar rrezikun."] },
        support: { title: "Mbështetje për përdoruesit fundorë dhe pajisjet", summary: "I ndihmojmë punonjësit të punojnë pa pengesa dhe i mbajmë pajisjet të konfiguruara, të mbrojtura dhe gati.", details: ["Zgjidhje për laptopë, kompjuterë, email, aplikacione, printerë dhe pajisje mobile.", "Përgatitje e pajisjeve për punonjësit e rinj me llogari, programe dhe konfigurime standarde që në ditën e parë.", "Menaxhim i inventarit, përditësimeve, enkriptimit dhe mbrojtjes gjatë ciklit jetësor të pajisjes.", "Udhëzim i qartë për përdoruesit që ul kohën e humbur nga problemet teknike."] },
        operations: { title: "Monitorim, SLA dhe menaxhim i incidenteve", summary: "Vëzhgojmë shërbimet kryesore, reagojmë ndaj problemeve dhe e rikthejmë punën me prioritete të qarta.", details: ["Monitorim proaktiv i disponueshmërisë, performancës, kapacitetit dhe sigurisë së sistemeve kryesore.", "Alarmim dhe klasifikim i incidenteve sipas ndikimit në biznes, me eskalim te ekipi i duhur.", "SLA të qarta për kohën e reagimit, prioritetet dhe komunikimin gjatë ndërprerjeve.", "Analizë pas incidentit, dokumentim i shkakut rrënjësor dhe masa parandaluese."] },
      },
    },    items: {
      cloud: {
        title: "Cloud",
        text: "Të dhënat e biznesit të qasshme kurdo.",
      },
      data: {
        title: "Siguri e të dhënave",
        text: "Infrastrukturë e ndërtuar për siguri dhe besueshmëri.",
      },
      reports: {
        title: "Raporte në kohë reale",
        text: "Shiko performancën e biznesit pa pritur.",
      },
      support: {
        title: "Support lokal",
        text: "Merr ndihmë nga ekipi lokal i Trebit.",
      },
      managed: {
        title: "Menaxhim i IT-së dhe operacioneve të sistemit",
        text: "Infrastrukturë e qëndrueshme dhe mbështetje e shpejtë për operacionet e përditshme.",
        bullets: [
          "Serverë, rrjet dhe infrastrukturë",
          "Menaxhimi i identitetit dhe qasjes",
          "Mbështetje për përdoruesit fundorë dhe pajisjet",
          "Monitorim, SLA dhe menaxhim i incidenteve",
        ],
      },
    },
  },
  about: {
    title: "Rreth Trebit",
    text: "Trebit është një zgjidhje moderne për menaxhimin e bizneseve, e krijuar për t'i ndihmuar kompanitë të punojnë më thjeshtë, më organizuar dhe më efikas. Nga arka e ditës deri te raportet e muajit, Trebit mban operacionet të lidhura — pa e ndërlikuar punën.",
    kubit: "Trebit është një njësi biznesi e KuBIT, e ndërtuar posaçërisht për ndërmarrjet që duan një platformë të qartë, të shpejtë dhe të gatshme për t'u rritur.",
  },
  cta: {
    title: "Je gati ta menaxhosh biznesin më ndryshe?",
    text: "Zbulo se si Trebit mund ta thjeshtojë mënyrën se si punon biznesi yt.",
    demo: "Kërko Demo",
    contact: "Na Kontakto",
  },
  contact: {
    title: "Na trego për biznesin tënd",
    text: "Plotëso kërkesën dhe ekipi i Trebit të kthen përgjigje me hapin e radhës — demo, paketë ose një bisedë të shkurtër.",
    name: "Emri dhe Mbiemri",
    business: "Emri i biznesit",
    phone: "Numri i telefonit",
    email: "Email",
    type: "Lloji i biznesit",
    package: "Paketa që të intereson",
    message: "Mesazhi",
    submit: "Dërgo kërkesën",
    success: "Faleminderit. Kërkesa u ruajt. Ekipi i Trebit do të të kontaktojë sapo të jenë aktive kanalet e komunikimit.",
    types: ["Shërbime", "Berber", "Sallon bukurie", "Free Shop", "Butik", "Farmaci", "Market", "Retail", "Tjetër"],
    websiteLabel: "Uebsajti",
    emailLabel: "Email",
    phoneLabel: "Telefoni",
    comingSoon: "Do të shtohet së shpejti",
  },
  footer: {
    blurb: "Zgjidhje moderne për menaxhimin e biznesit.",
    privacy: "Privatësia",
    terms: "Kushtet e përdorimit",
    kubit: "Trebit është pjesë e ekosistemit KuBIT.",
    copyright: "© 2026 Trebit. Të gjitha të drejtat e rezervuara.",
  },
  legal: {
    privacyTitle: "Politika e privatësisë",
    privacyBody:
      "Trebit respekton privatësinë e të dhënave që na dërgoni përmes këtij uebsajti. Të dhënat e formularit përdoren vetëm për t'iu përgjigjur kërkesës suaj për demo ose informacion. Kjo faqe do të përditësohet me politikën e plotë ligjore para lansimit publik.",
    termsTitle: "Kushtet e përdorimit",
    termsBody:
      "Përmbajtja e këtij uebsajti është në pronësi të Trebit. Përshkrimet e produkteve dhe paketave janë informative. Kushtet e plota të shërbimit do të publikohen para aktivizimit të kontratave me klientët.",
    back: "Kthehu në faqen kryesore",
  },
}

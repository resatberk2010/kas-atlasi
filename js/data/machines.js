/* Makineler ve istasyonlar.
   type: selectorized | plate-loaded | cable | station | cardio
   group: chest | back | shoulders | arms | legs | core | multi | cardio
   Makineyle yapılan hareketler otomatik bulunur (hareketlerdeki machineId); "related" ek hareketleri listeler. */
FIT.machines.push(
  // ================= GÖĞÜS =================
  {
    id: 'chest-press', name: 'Chest Press Machine', nameTr: 'Göğüs Presi Makinesi', type: 'selectorized', group: 'chest',
    primary: ['chest'], secondary: ['front-delt', 'triceps', 'chest-upper'],
    what: 'Oturarak öne doğru itiş yaptığın, bench press hareketini sabit bir yol üzerinde taklit eden makinedir. Denge gerektirmediği için göğsü güvenle ve yorulana kadar çalıştırmanı sağlar.',
    focus: [
      'Ana yük göğsün orta ve alt kısmına (sternal baş) biner.',
      'Tutamaklar göğüs hizasından aşağıdaysa alt göğüs, köprücük kemiğine yakınsa üst göğüs ve ön omuz daha çok çalışır.',
      'Dirsekleri gövdeye yakın tutmak triceps’i, yana açık tutmak göğsü öne çıkarır.',
      'Kürek kemikleri geride ve sıkıyken göğüs, omuzlar öne kaçtığında ön omuz daha fazla iş yapar.'
    ],
    adjust: [
      'Koltuk yüksekliği: Tutamaklar göğsünün orta hizasına (meme ucu seviyesi) gelsin.',
      'Varsa başlangıç kolu/ayak pedalı: Tutamaklar göğsünün biraz önünde başlasın; omuzlar aşırı gerilmesin.',
      'Sırt pedi: Sırtın tamamen pede yaslanmalı, kürek kemiklerini geriye çekebilmelisin.'
    ],
    steps: [
      'Tutamakları kavra, kürek kemiklerini geriye ve aşağı çek.',
      'Tutamakları öne doğru, kollar neredeyse düzleşene kadar it.',
      'Dirsekleri sertçe kilitlemeden bir an dur.',
      'Ağırlık blokları birbirine değmeden kontrollü geri dön.'
    ],
    mistakes: [
      'Koltuğu çok alçak ayarlayıp omuzları zorlamak.',
      'Sırtı pedden kaldırıp gövdeyle itmek.',
      'Ağırlık bloklarını her tekrarda çarptırmak.'
    ]
  },
  {
    id: 'incline-chest-press', name: 'Incline Chest Press Machine', nameTr: 'Eğimli Göğüs Presi Makinesi', type: 'plate-loaded', group: 'chest',
    primary: ['chest-upper'], secondary: ['chest', 'front-delt', 'triceps'],
    what: 'İtiş yönünün yukarı ve öne doğru olduğu, eğimli bench press’i taklit eden makinedir. Çoğu modelde iki kol bağımsız çalışır.',
    focus: [
      'Üst göğsü (klaviküler baş) hedefler.',
      'Koltuk ne kadar alçaksa itiş yönü o kadar dikleşir ve iş ön omza kayar; tutamaklar üst göğüs hizasında olmalıdır.',
      'Triceps ve ön omuz yardımcı olarak güçlü şekilde çalışır.'
    ],
    adjust: [
      'Koltuk yüksekliği: Tutamaklar köprücük kemiğinin biraz altına, üst göğüs hizasına gelsin.',
      'Plakaları iki tarafa eşit yükle.',
      'Ayaklarını yere sağlam bas; sırt pedine tamamen yaslan.'
    ],
    steps: [
      'Tutamakları kavra, kürek kemiklerini sık.',
      'Tutamakları yukarı-öne doğru it.',
      'Kollar neredeyse düzleşince bir an dur.',
      'Kontrollü şekilde, göğüste gerilme hissedene kadar geri dön.'
    ],
    mistakes: [
      'Koltuğu çok alçak ayarlayıp hareketi omuz presine çevirmek.',
      'Plakaları dengesiz yüklemek.',
      'Yarım tekrar yapmak.'
    ]
  },
  {
    id: 'pec-deck', name: 'Pec Deck / Rear Delt Fly', nameTr: 'Pec Deck (Butterfly) Makinesi', type: 'selectorized', group: 'chest',
    primary: ['chest'], secondary: ['front-delt', 'rear-delt', 'mid-back'],
    what: 'Kolları bir yay çizerek önde birleştirdiğin (göğüs açışı) makinedir. Çoğu model çift yönlüdür: pede ters oturup kolları geriye açarak arka omzu çalıştırabilirsin.',
    focus: [
      'Normal kullanımda: göğüs izole edilir; triceps neredeyse hiç devreye girmez.',
      'Tutamaklar omuz hizasının biraz altındaysa orta göğüs çalışır; kolları çok yukarıda tutmak ön omzu devreye sokar.',
      'Ters kullanımda (reverse fly): arka omuz ana kas, orta sırt ve trapez yardımcıdır.'
    ],
    adjust: [
      'Koltuk yüksekliği: Tutamaklar omuz hizasının hemen altında olsun.',
      'Göğüs açışı için başlangıç kolu: Kollar açıkken göğüste hafif gerilme olsun, omuzlar aşırı gerilmesin.',
      'Arka omuz için: Kolları en öne getir, yüzün pede dönük otur.'
    ],
    steps: [
      'Sırtını (veya arka omuz için göğsünü) pede yasla.',
      'Kollar hafif bükük şekilde tutamakları yay çizerek birleştir (ya da arka omuz için aç).',
      'Hareketin sonunda 1 saniye sık.',
      'Kontrollü şekilde başlangıca dön.'
    ],
    mistakes: [
      'Kolları omuz ekleminin gerisine fazla açıp omzu zorlamak.',
      'Omuzları öne yuvarlamak.',
      'Ağır ağırlıkla hızla savurmak.'
    ]
  },
  {
    id: 'cable-crossover', name: 'Cable Crossover Station', nameTr: 'Kablo Crossover İstasyonu (Çift Makara)', type: 'cable', group: 'multi',
    primary: ['chest'], secondary: ['chest-upper', 'front-delt'],
    what: 'İki yanda yüksekliği ayarlanabilir makaraları olan geniş kablo istasyonudur. En çok göğüs açışları için kullanılır, ancak neredeyse her kablo hareketi yapılabilir.',
    focus: [
      'Makaralar yüksekten alçağa çekildiğinde alt ve orta göğüs çalışır.',
      'Makaralar alttayken alçaktan yükseğe çekildiğinde üst göğüs çalışır.',
      'Omuz hizasında yatay çekiş orta göğsü hedefler.',
      'Kablo, hareketin her noktasında sabit gerilim sağlar; dambıl açışta üst noktada kaybolan yük burada korunur.'
    ],
    adjust: [
      'Makara yüksekliğini hedef bölgeye göre ayarla (yukarıdaki maddeler).',
      'İki tarafa aynı ağırlığı seç.',
      'Makaralara uygun tutamakları (tek tutamak) tak.'
    ],
    steps: [
      'Tutamakları kavrayıp istasyonun ortasında bir adım öne çık; kademeli duruş al.',
      'Dirsekler hafif bükük şekilde tutamakları vücudunun önünde birleştir.',
      'Birleşme noktasında göğsünü sık.',
      'Kontrollü şekilde geri aç.'
    ],
    mistakes: [
      'Dirsekleri bükerek hareketi prese çevirmek.',
      'Gövdeyi sallamak.',
      'Kolları omuzların çok gerisine açmak.'
    ]
  },

  // ================= SIRT =================
  {
    id: 'lat-pulldown', name: 'Lat Pulldown Machine', nameTr: 'Lat Pulldown Makinesi', type: 'selectorized', group: 'back',
    primary: ['lats'], secondary: ['mid-back', 'biceps', 'rear-delt', 'forearms'],
    what: 'Oturarak yukarıdaki bir barı göğsüne doğru çektiğin makinedir. Barfiks hareketini kendi vücut ağırlığından daha hafif yükle yapmanı sağlar.',
    focus: [
      'Ana hedef latissimus dorsi (kanat) kasıdır; sırta genişlik kazandırır.',
      'Geniş tutuş ve dirsekleri yandan indirmek üst kanat ve teres major’u öne çıkarır.',
      'Dar/nötr tutuş (V bar) daha uzun hareket açıklığı sağlar ve kanadın alt kısmını çalıştırır.',
      'Ters tutuş (avuçlar sana dönük) biceps’i daha fazla devreye sokar.',
      'Gövdeyi çok geriye yatırmak işi orta sırta kaydırır.'
    ],
    adjust: [
      'Diz pedi: Uylukların sıkıca sabitlenmeli; çekerken kalkmamalısın.',
      'Tutamak: Hedefe göre geniş bar, V bar veya tek tutamak seç.',
      'Koltuk: Otururken kollarını tam uzattığında bara uzanabilmelisin.'
    ],
    steps: [
      'Barı kavra ve diz pedinin altına otur.',
      'Göğsünü kabart, hafifçe geriye yaslan.',
      'Omuzlarını aşağı çekerek başla, dirseklerini aşağı sürerek barı üst göğsüne çek.',
      'Kolların tam uzayana kadar kontrollü şekilde bırak.'
    ],
    mistakes: [
      'Barı ense arkasına çekmek.',
      'Gövdeyle sallanarak çekmek.',
      'Yukarıda kolları tam uzatmamak.'
    ]
  },
  {
    id: 'seated-row', name: 'Seated Cable Row Machine', nameTr: 'Oturarak Kablo Kürek Makinesi', type: 'cable', group: 'back',
    primary: ['mid-back', 'lats'], secondary: ['rear-delt', 'biceps', 'lower-back', 'forearms'],
    what: 'Ayak platformu ve alçak makarası olan, oturarak yatay çekiş yaptığın kablo istasyonudur.',
    focus: [
      'Orta sırt (rhomboid, orta trapez) ve kanat kasını birlikte çalıştırır; sırta kalınlık kazandırır.',
      'Dirsekler gövdeye yakın ve göbeğe çekiş: kanat ağırlıklı.',
      'Dirsekler açık (geniş bar) ve göğse çekiş: orta sırt ve arka omuz ağırlıklı.',
      'Gövde dik ve sabit kaldığı sürece bel sadece sabitleyicidir.'
    ],
    adjust: [
      'Tutamak: V tutamak (kanat), geniş bar (orta sırt) veya halat seç.',
      'Ayak platformu: Dizler hafif bükükken kolların tam uzayabilmeli.'
    ],
    steps: [
      'Otur, ayaklarını platforma koy, tutamağı kavrayıp gövdeni dikleştir.',
      'Omuzlar aşağıda, dirsekleri arkaya çekerek tutamağı gövdene getir.',
      'Kürek kemiklerini sık.',
      'Kontrollü şekilde kolları uzat.'
    ],
    mistakes: [
      'Gövdeyle ileri-geri sallanmak.',
      'Beli yuvarlamak.',
      'Omuzları kulaklara kaldırmak.'
    ]
  },
  {
    id: 'chest-supported-row', name: 'Chest-Supported Row Machine', nameTr: 'Göğüs Destekli Kürek Makinesi', type: 'plate-loaded', group: 'back',
    primary: ['mid-back', 'lats'], secondary: ['rear-delt', 'biceps', 'forearms'],
    what: 'Göğsünü bir pede yaslayarak tutamakları kendine çektiğin kürek makinesidir. Bel tamamen desteklenir.',
    focus: [
      'Orta sırt ve kanat kasları ana hedeftir.',
      'Genellikle birden fazla tutamak vardır: dikey (nötr) tutamaklar kanat, yatay (geniş) tutamaklar orta sırt ve arka omuz için.',
      'Bel ve hamstring neredeyse hiç yorulmaz; bu yüzden sırtı izole eder.'
    ],
    adjust: [
      'Koltuk yüksekliği: Göğsün pede yaslıyken tutamaklara kolların tam uzanarak ulaşmalı.',
      'Göğüs pedi mesafesi: Başlangıçta kürek kemiklerin hafifçe öne esneyebilmeli.'
    ],
    steps: [
      'Göğsünü pede yasla, tutamakları kavra.',
      'Dirseklerini arkaya sürerek çek.',
      'Kürek kemiklerini sık, 1 saniye bekle.',
      'Kontrollü şekilde bırak.'
    ],
    mistakes: [
      'Göğsü pedden kaldırmak.',
      'Omuzları öne yuvarlamak.',
      'Yarım tekrar yapmak.'
    ]
  },
  {
    id: 't-bar-row', name: 'T-Bar Row Machine', nameTr: 'T-Bar Row Makinesi', type: 'plate-loaded', group: 'back',
    primary: ['mid-back', 'lats'], secondary: ['rear-delt', 'biceps', 'lower-back', 'hamstrings'],
    what: 'Bir ucu sabitlenmiş, diğer ucuna plaka takılan bir kolu eğilerek kendine çektiğin makinedir. Göğüs destekli ve desteksiz versiyonları vardır.',
    focus: [
      'Orta sırt kalınlığı için en etkili makinelerdendir.',
      'Desteksiz versiyon bel ve hamstring’i de sabitleyici olarak zorlar.',
      'Geniş tutamak orta sırt ve arka omzu, dar tutamak kanadı öne çıkarır.'
    ],
    adjust: [
      'Göğüs destekli modelde ped yüksekliğini, tutamaklara kollar düzken ulaşabileceğin şekilde ayarla.',
      'Plakaları küçük çaplı seç; büyük plakalar hareket açıklığını kısaltır.'
    ],
    steps: [
      'Ayak platformuna bas, sırtın düz şekilde tutamakları kavra.',
      'Ağırlığı kaldır, kollar düz başla.',
      'Dirseklerini arkaya çekerek tutamakları göğsüne getir.',
      'Kontrollü indir.'
    ],
    mistakes: [
      'Beli yuvarlamak.',
      'Gövdeyi kaldırarak momentumla çekmek.',
      'Çok ağır yükle yarım tekrar yapmak.'
    ]
  },
  {
    id: 'pullover-machine', name: 'Pullover Machine', nameTr: 'Pullover Makinesi', type: 'selectorized', group: 'back',
    primary: ['lats'], secondary: ['chest', 'triceps', 'abs'],
    what: 'Dirseklerini pedlere yaslayıp kollarını başının arkasından öne doğru bir yay çizerek getirdiğin makinedir.',
    focus: [
      'Kanat kasını biceps’i neredeyse hiç kullanmadan izole eder.',
      'Göğüs ve triceps’in uzun başı yardımcı olarak çalışır.',
      'Çekişlerde biceps’i sırttan önce yoruluyorsa bu makine iyi bir çözümdür.'
    ],
    adjust: [
      'Koltuk yüksekliği: Omuz eklemin makinenin dönme ekseniyle aynı hizada olmalı.',
      'Emniyet kemerini tak.',
      'Varsa ayak pedalıyla kolları başlangıç pozisyonuna getir.'
    ],
    steps: [
      'Dirseklerini kol pedlerine yerleştir.',
      'Dirseklerle öne ve aşağı iterek yay çiz.',
      'Kollar gövdenin önüne gelince kanadı sık.',
      'Kontrollü şekilde başın arkasına dön.'
    ],
    mistakes: [
      'Ellerle çekmek.',
      'Koltuğu hizalamamak.',
      'Ağırlığı çarptırmak.'
    ]
  },
  {
    id: 'assisted-pullup-dip', name: 'Assisted Pull-Up / Dip Machine', nameTr: 'Asistli Barfiks & Dips Makinesi', type: 'selectorized', group: 'multi',
    primary: ['lats', 'triceps'], secondary: ['chest', 'biceps', 'mid-back', 'front-delt'],
    what: 'Diz veya ayak platformuyla vücut ağırlığının bir kısmını taşıyarak barfiks ve dips yapmanı sağlayan makinedir. Seçilen ağırlık ne kadar fazlaysa hareket o kadar kolaylaşır.',
    focus: [
      'Barfiks tutamaklarıyla: kanat ana kas; biceps, orta sırt ve arka omuz yardımcı.',
      'Dips tutamaklarıyla: triceps ve alt göğüs ana kas; ön omuz yardımcı.',
      'Dipste gövdeyi öne eğmek göğsü, dik tutmak triceps’i öne çıkarır.'
    ],
    adjust: [
      'Yardım ağırlığını seç: Zorlanarak 6–10 tekrar yapabileceğin kadar yardım al.',
      'Diz platformlu modelde platformu indirip dizlerini yerleştir; ayakta modelde ayak basamağına bas.'
    ],
    steps: [
      'Tutamakları kavra ve platforma dikkatle yerleş.',
      'Barfiks için kendini yukarı çek; dips için aşağı in ve it.',
      'Hareketin sonunda bir an dur.',
      'Kontrollü şekilde başlangıca dön; setin sonunda platformdan dikkatle in.'
    ],
    mistakes: [
      'Platformdan birden inip ağırlığın sert düşmesine neden olmak.',
      'Hep aynı yardım seviyesinde kalmak.',
      'Yarım tekrar yapmak.'
    ],
    related: ['pull-up', 'chin-up']
  },
  {
    id: 'back-extension', name: 'Back Extension Bench (45° / Roman Chair)', nameTr: 'Hiperekstansiyon Sehpası (Roman Chair)', type: 'station', group: 'core',
    primary: ['lower-back'], secondary: ['glutes', 'hamstrings'],
    what: 'Kalçanı bir pede dayayıp ayaklarını sabitleyerek gövdeni aşağı-yukarı hareket ettirdiğin sehpadır.',
    focus: [
      'Sırt düz tutulursa omurga dikleştiricileri (bel) ve kalça birlikte çalışır.',
      'Sırt hafifçe yuvarlak ve kalça sıkılarak yapılırsa yük kalça ve hamstring’e kayar.',
      'Ped kalça kemiğinin altındaysa kalçadan menteşe hareketi mümkün olur; pedi çok yukarı koymak hareketi kısıtlar.'
    ],
    adjust: [
      'Ped yüksekliği: Pedin üst kenarı kalça kemiğinin hemen altında olsun.',
      'Ayak sabitleyicileri: Ayakların kaymayacak şekilde sıkıca yerleşsin.'
    ],
    steps: [
      'Kolların göğsünde çapraz ya da başın yanında olsun.',
      'Kalçadan öne eğil.',
      'Gövden bacaklarla düz bir çizgi oluşturana kadar kalk.',
      'Beli aşırı geriye bükmeden tekrarla.'
    ],
    mistakes: [
      'Üstte beli aşırı kavislendirmek.',
      'Sallanarak hızlı yapmak.',
      'Pedi yanlış yükseklikte kullanmak.'
    ]
  },
  {
    id: 'ghd', name: 'Glute-Ham Developer (GHD)', nameTr: 'GHD Makinesi', type: 'station', group: 'legs',
    primary: ['hamstrings', 'glutes'], secondary: ['lower-back', 'calves', 'abs'],
    what: 'Ayaklarını bir platformda iki ped arasına sabitleyip dizlerini bir pedin üzerinde tuttuğun istasyondur. Glute-ham raise, hiperekstansiyon ve GHD mekik için kullanılır.',
    focus: [
      'Glute-ham raise: hamstring’i hem diz bükme hem kalça açma görevinde birlikte çalıştırır.',
      'Hiperekstansiyon: bel ve kalçayı çalıştırır.',
      'Hamstring sakatlıklarını önlemede en etkili ekipmanlardan biridir.'
    ],
    adjust: [
      'Ayak platformu mesafesi: Dizlerin pedin hemen arkasında olmalı (glute-ham raise için).',
      'Hiperekstansiyon için pedi kalça kemiğinin altına gelecek şekilde uzaklaştır.'
    ],
    steps: [
      'Ayaklarını sabitleyicilerin arasına yerleştir.',
      'Gövdeni yere paralel konuma getir, kalçanı sık.',
      'Hamstring’lerinle dizlerini bükerek gövdeni dikleştir.',
      'Kontrollü şekilde geri in.'
    ],
    mistakes: [
      'Kalçadan bükülmek.',
      'Yanlış ayarla dizleri zorlamak.',
      'Isınmadan yapmak.'
    ],
    related: ['back-extension', 'nordic-curl']
  },

  // ================= OMUZ =================
  {
    id: 'shoulder-press', name: 'Shoulder Press Machine', nameTr: 'Omuz Presi Makinesi', type: 'selectorized', group: 'shoulders',
    primary: ['front-delt'], secondary: ['side-delt', 'triceps', 'traps'],
    what: 'Oturarak tutamakları baş üstüne ittiğin makinedir. Serbest ağırlıkla omuz presinin denge gerektirmeyen versiyonudur.',
    focus: [
      'Ön omuz ana kastır; yan omuz ve triceps yardımcı olarak güçlü çalışır.',
      'Dirsekler öndeyken ön omuz, yanlara açıkken yan omuz biraz daha çok çalışır.',
      'Nötr tutamaklar (avuçlar karşılıklı) omuz eklemini daha rahat bir pozisyonda tutar.'
    ],
    adjust: [
      'Koltuk yüksekliği: Tutamaklar omuz hizasında ya da biraz üstünde olsun.',
      'Sırt pedi: Sırtın tamamen yaslanmalı, bel kavisi aşırı olmamalı.'
    ],
    steps: [
      'Tutamakları kavra, karnını sık.',
      'Tutamakları yukarı it.',
      'Kollar neredeyse düzleşince dur.',
      'Kontrollü indir.'
    ],
    mistakes: [
      'Koltuğu çok alçak ayarlamak.',
      'Beli pedden koparmak.',
      'Ağırlığı düşürür gibi indirmek.'
    ]
  },
  {
    id: 'lateral-raise-machine', name: 'Lateral Raise Machine', nameTr: 'Yana Açış Makinesi', type: 'selectorized', group: 'shoulders',
    primary: ['side-delt'], secondary: ['traps', 'front-delt'],
    what: 'Kol pedlerini dirseklerinle yana doğru kaldırdığın, yan omzu izole eden makinedir.',
    focus: [
      'Yan omuz (lateral deltoid) izole edilir; omuz genişliği için en doğrudan hareket.',
      'Dambılın aksine hareketin başında da direnç vardır.',
      'Omuzlar kulaklara kalkarsa üst trapez devreye girer ve yan omuz yükü azalır.'
    ],
    adjust: [
      'Koltuk yüksekliği: Omuz eklemin dönme ekseniyle aynı hizada olsun.',
      'Kol pedleri dirseklerinin hemen üstünde olsun.'
    ],
    steps: [
      'Otur, göğsünü pede yasla (varsa).',
      'Dirseklerinle pedleri yana ve yukarı it.',
      'Kollar omuz hizasına gelince dur.',
      'Kontrollü indir.'
    ],
    mistakes: [
      'Omuz silkerek kaldırmak.',
      'Koltuğu ayarlamamak.',
      'Momentum kullanmak.'
    ]
  },

  // ================= KOL =================
  {
    id: 'preacher-curl-machine', name: 'Preacher Curl Machine', nameTr: 'Biceps Curl Makinesi (Scott)', type: 'selectorized', group: 'arms',
    primary: ['biceps'], secondary: ['forearms'],
    what: 'Üst kollarını eğimli bir pede yaslayarak tutamakları kendine doğru kıvırdığın makinedir.',
    focus: [
      'Biceps ve altındaki brachialis kası izole edilir.',
      'Üst kol sabit olduğu için hile yapmak neredeyse imkânsızdır.',
      'Hareketin alt kısmında biceps en gerilmiş haldedir; bu bölüm gelişim için çok değerlidir.'
    ],
    adjust: [
      'Koltuk yüksekliği: Dirseklerin makinenin dönme ekseniyle aynı hizada olmalı; koltuk altların pedin üst kenarına yakın dursun.'
    ],
    steps: [
      'Üst kollarını pede yasla, tutamakları kavra.',
      'Tutamakları omuzlarına doğru kıvır.',
      'Tepede sık.',
      'Kontrollü şekilde, kollar neredeyse düzleşene kadar indir.'
    ],
    mistakes: [
      'Dirsekleri pedden kaldırmak.',
      'Alt noktada ağırlığı serbest bırakmak.',
      'Kalçayı kaldırıp gövdeyle yardım almak.'
    ]
  },
  {
    id: 'triceps-dip-machine', name: 'Seated Dip / Triceps Press Machine', nameTr: 'Oturarak Triceps Dips Makinesi', type: 'selectorized', group: 'arms',
    primary: ['triceps'], secondary: ['chest', 'front-delt'],
    what: 'Oturarak yanlardaki tutamakları aşağı ittiğin makinedir. Paralel bar dips’in kontrollü versiyonudur.',
    focus: [
      'Triceps’in üç başı birlikte çalışır.',
      'Gövde dik kaldıkça triceps, öne eğildikçe alt göğüs daha çok çalışır.',
      'Omuzlar aşağıda tutulursa ön omuza binen yük azalır.'
    ],
    adjust: [
      'Koltuk yüksekliği: Başlangıçta dirsekler yaklaşık 90° bükük olmalı.',
      'Varsa uyluk pedini, kalkmayacak şekilde sabitle.'
    ],
    steps: [
      'Sırtını yasla, tutamakları kavra.',
      'Tutamakları kollar neredeyse düzleşene kadar aşağı it.',
      'Altta triceps’i sık.',
      'Kontrollü şekilde yukarı dön.'
    ],
    mistakes: [
      'Omuzları kulaklara kaldırmak.',
      'Gövdeyi öne eğip göğüsle itmek.',
      'Ağırlığı çarptırmak.'
    ]
  },
  {
    id: 'cable-station', name: 'Adjustable Cable Station', nameTr: 'Ayarlanabilir Kablo İstasyonu (Tek Makara)', type: 'cable', group: 'multi',
    primary: ['triceps', 'biceps', 'side-delt'], secondary: ['rear-delt', 'abs', 'obliques', 'glutes', 'lats'],
    what: 'Yüksekliği ayarlanabilen tek makaralı kablo istasyonudur. Tutamak (halat, düz bar, tek tutamak, ayak bileği kayışı) değiştirerek vücudun neredeyse her bölgesini çalıştırabilirsin.',
    focus: [
      'Neyi çalıştırdığı tamamen makara yüksekliğine ve seçtiğin harekete bağlıdır.',
      'Üst makara: triceps pushdown, straight-arm pulldown, kablo mekik, face pull.',
      'Alt makara: biceps curl, yana açış, kalça kickback, pull-through.',
      'Orta makara: Pallof press, woodchopper, tek kol kürek çekiş.',
      'Kablo, hareketin her noktasında sabit direnç sağlar; serbest ağırlıkta direncin kaybolduğu noktalarda bile kas çalışmaya devam eder.'
    ],
    adjust: [
      'Makara yüksekliğini harekete göre ayarla.',
      'Uygun tutamağı karabinayla tak.',
      'Ağırlık pimini istediğin plakaya tamamen yerleştir.'
    ],
    steps: [
      'Makarayı ve tutamağı ayarla.',
      'Kablonun gergin olacağı şekilde makinenin önünde doğru mesafede dur.',
      'Hareketi kontrollü tempoda yap; ağırlık bloğunun en altta çarpmasına izin verme.',
      'Setin sonunda tutamağı yavaşça başlangıç noktasına bırak.'
    ],
    mistakes: [
      'Makaraya çok yakın durup gerilimi kaybetmek.',
      'Ağırlık bloğunu her tekrarda çarptırmak.',
      'Pimi tam yerleştirmemek.'
    ]
  },

  // ================= BACAK & KALÇA =================
  {
    id: 'leg-press', name: '45° Leg Press', nameTr: '45° Leg Press Makinesi', type: 'plate-loaded', group: 'legs',
    primary: ['quads', 'glutes'], secondary: ['adductors', 'hamstrings', 'calves'],
    what: 'Sırtüstü yarı yatarak ayaklarınla bir platformu 45° eğimli raylar üzerinde ittiğin makinedir. Bele yük bindirmeden bacakları çok ağır çalıştırmanı sağlar.',
    focus: [
      'Ayaklar platformun alt kısmında: quadriceps (ön bacak) ağırlıklı.',
      'Ayaklar platformun üst kısmında: kalça ve hamstring ağırlıklı.',
      'Geniş duruş ve dışa dönük ayaklar: iç bacak (adductor) ve kalça.',
      'Dar duruş: dış quadriceps (vastus lateralis).',
      'Derinlik arttıkça kalçanın katılımı artar; ancak kalça pedden kalkıyorsa fazla derine iniyorsun demektir.'
    ],
    adjust: [
      'Sırt pedinin açısını ayarla: dik açı hareketi kısaltır, yatık açı derinleştirir.',
      'Plakaları iki tarafa eşit yükle.',
      'Emniyet kollarını, platformu ittikten sonra aç; setin sonunda kapat.'
    ],
    steps: [
      'Otur, sırtını ve kalçanı yasla, ayaklarını platforma koy.',
      'Platformu it ve emniyet kollarını aç.',
      'Dizlerini ayak uçları yönünde bükerek platformu indir.',
      'Topuklarınla iterek yukarı çık; dizleri kilitlemeden dur.',
      'Set bitince emniyet kollarını kapat.'
    ],
    mistakes: [
      'Üstte dizleri kilitlemek — ağır yükte dizin ters bükülme riski vardır.',
      'Kalça ve belin pedden kalkmasına izin verecek kadar derine inmek.',
      'Dizleri içe çökertmek.'
    ]
  },
  {
    id: 'hack-squat', name: 'Hack Squat Machine', nameTr: 'Hack Squat Makinesi', type: 'plate-loaded', group: 'legs',
    primary: ['quads'], secondary: ['glutes', 'adductors'],
    what: 'Sırtını eğimli bir pede yaslayıp omuz pedlerinin altında squat yaptığın makinedir.',
    focus: [
      'Quadriceps’e çok yoğun yük bindirir; bel desteklendiği için ana sınırlayıcı bacak gücüdür.',
      'Ayaklar platformda aşağıda: daha fazla diz bükülmesi, daha fazla quadriceps.',
      'Ayaklar yukarıda: kalça daha fazla çalışır.'
    ],
    adjust: [
      'Omuz pedlerinin yüksekliğini ayarla (varsa).',
      'Emniyet kolunu, başlangıç pozisyonunda açılacak şekilde kontrol et.',
      'Plakaları iki tarafa eşit yükle.'
    ],
    steps: [
      'Sırtını pede yasla, omuzlarını pedlerin altına yerleştir.',
      'Ayaklarını omuz genişliğinde koy, emniyeti aç.',
      'Derin bir squat’a in.',
      'Topuklarla iterek kalk; set sonunda emniyeti kapat.'
    ],
    mistakes: [
      'Topukların kalkması.',
      'Yarım tekrar.',
      'Kalçanın pedden uzaklaşması.'
    ]
  },
  {
    id: 'pendulum-squat', name: 'Pendulum Squat Machine', nameTr: 'Pendulum Squat Makinesi', type: 'plate-loaded', group: 'legs',
    primary: ['quads'], secondary: ['glutes', 'adductors'],
    what: 'Sırt pedi bir sarkaç gibi yay çizerek hareket eden squat makinesidir.',
    focus: [
      'Quadriceps’i, özellikle derin pozisyonda çok yoğun çalıştırır.',
      'Direnç eğrisi, hareketin alt kısmında kasın en güçlü olduğu yerde yüksektir.',
      'Bele neredeyse hiç yük binmez.'
    ],
    adjust: [
      'Ayak platformunun açısını ayarla (varsa).',
      'Emniyet kolunu ve derinlik sınırlayıcıyı kontrol et.'
    ],
    steps: [
      'Sırtını yasla, omuzlarını pedlerin altına yerleştir.',
      'Emniyeti aç ve dizlerini bükerek derin squat’a in.',
      'Platformu iterek kalk.',
      'Set sonunda emniyeti kapat.'
    ],
    mistakes: [
      'Yarım tekrar.',
      'Aşağıda sekmek.',
      'Topukları kaldırmak.'
    ]
  },
  {
    id: 'belt-squat', name: 'Belt Squat Machine', nameTr: 'Kemerli Squat Makinesi', type: 'plate-loaded', group: 'legs',
    primary: ['quads', 'glutes'], secondary: ['adductors', 'hamstrings'],
    what: 'Yükün beline taktığın bir kemerle kalçadan asıldığı squat makinesidir. Omurgaya hiç baskı yapmaz.',
    focus: [
      'Quadriceps ve kalça ana kaslardır.',
      'Omurga yük taşımadığı için bel sorunu olanlar veya bacak hacmini artırmak isteyenler için idealdir.',
      'Geniş duruş iç bacak ve kalçayı öne çıkarır.'
    ],
    adjust: [
      'Kemer zincirinin uzunluğunu, dikken yük hafifçe askıda kalacak şekilde ayarla.',
      'Kemeri kalça kemiğinin üstüne sıkıca bağla.'
    ],
    steps: [
      'Kemeri tak ve zincire bağla.',
      'Kolu çevirerek yükü serbest bırak.',
      'Dik gövdeyle derin squat yap.',
      'Yeri iterek kalk.'
    ],
    mistakes: [
      'Tutamaklardan çekerek kalkmak.',
      'Kemeri gevşek bağlamak.',
      'Dizleri içe çökertmek.'
    ]
  },
  {
    id: 'leg-extension', name: 'Leg Extension Machine', nameTr: 'Leg Extension (Bacak Uzatma) Makinesi', type: 'selectorized', group: 'legs',
    primary: ['quads'], secondary: [],
    what: 'Oturarak ayak bileğinin önündeki pedi dizlerini açarak yukarı kaldırdığın makinedir.',
    focus: [
      'Quadriceps’i tamamen izole eden tek yaygın makinedir; kalça hiç çalışmaz.',
      'Rectus femoris (quadriceps’in kalçayı da geçen başı) squat’ta az çalışır, burada ise tam çalışır.',
      'Geriye yaslanmak rectus femoris’i daha fazla gerer.',
      'Ayak uçlarının yönünü değiştirmek hedefi anlamlı ölçüde değiştirmez.'
    ],
    adjust: [
      'Sırt pedi: Dizlerin (diz kapağının hemen yanı) makinenin dönme ekseniyle aynı hizada olmalı.',
      'Ayak pedi: Ayak bileğinin hemen üstünde, kaval kemiğinin alt kısmında durmalı.',
      'Başlangıç açısı: Dizler yaklaşık 90° bükük başlamalı.'
    ],
    steps: [
      'Otur, yan tutamakları kavra.',
      'Bacaklarını tamamen düzleşene kadar kaldır.',
      'Tepede 1 saniye sık.',
      'Kontrollü indir.'
    ],
    mistakes: [
      'Dönme eksenini dizle hizalamamak.',
      'Ağırlığı savurmak.',
      'Kalçayı koltuktan kaldırmak.'
    ]
  },
  {
    id: 'lying-leg-curl', name: 'Lying Leg Curl Machine', nameTr: 'Yüzüstü Leg Curl Makinesi', type: 'selectorized', group: 'legs',
    primary: ['hamstrings'], secondary: ['calves'],
    what: 'Yüzüstü uzanıp ayak bileğinin arkasındaki pedi topuklarını kalçana çekerek kaldırdığın makinedir.',
    focus: [
      'Hamstring’i diz bükme görevinde izole eder.',
      'Kalf (gastrocnemius) dizi bükmeye yardım eder; ayak parmaklarını uzatmak (sivriltmek) kalfın katkısını azaltır.',
      'Çoğu makinenin gövde pedi hafif kırıktır; bu kalçayı hafif bükerek hamstring’i daha iyi gerer.'
    ],
    adjust: [
      'Dizlerin, pedin kenarının hemen dışında ve dönme ekseniyle hizalı olmalı.',
      'Ayak bileği pedi aşil tendonunun hemen üstünde olmalı.'
    ],
    steps: [
      'Yüzüstü uzan, tutamakları kavra.',
      'Topuklarını kalçana doğru çek.',
      'Tepede sık.',
      'Kontrollü indir.'
    ],
    mistakes: [
      'Kalçayı pedden kaldırmak.',
      'Savurarak kaldırmak.',
      'Aşağıda ağırlığı düşürmek.'
    ]
  },
  {
    id: 'seated-leg-curl', name: 'Seated Leg Curl Machine', nameTr: 'Oturarak Leg Curl Makinesi', type: 'selectorized', group: 'legs',
    primary: ['hamstrings'], secondary: ['calves'],
    what: 'Oturarak bacaklarının altındaki pedi aşağı ve geriye doğru ittiğin makinedir.',
    focus: [
      'Hamstring’i diz bükme görevinde izole eder.',
      'Oturma pozisyonunda kalça bükük olduğu için hamstring daha uzun (gerilmiş) konumda çalışır; araştırmalar bunun yüzüstü versiyona göre daha fazla kas gelişimi sağlayabildiğini gösteriyor.',
      'Gövdeyi hafifçe öne eğmek gerilmeyi daha da artırır.'
    ],
    adjust: [
      'Sırt pedi: Dizler dönme ekseniyle hizalı.',
      'Ayak bileği pedi: Aşil tendonunun üstünde.',
      'Uyluk pedi: Dizlerin hemen üstünde, bacakları sıkıca sabitleyecek şekilde.'
    ],
    steps: [
      'Otur ve pedleri sabitle.',
      'Topuklarını aşağı ve geriye çekerek pedi it.',
      'Dizler tam büküldüğünde sık.',
      'Kontrollü şekilde başlangıca dön.'
    ],
    mistakes: [
      'Uyluk pedini gevşek bırakmak.',
      'Hızlı ve kontrolsüz dönmek.',
      'Kalçayı kaldırmak.'
    ]
  },
  {
    id: 'hip-abductor', name: 'Hip Abductor Machine', nameTr: 'Dış Kalça (Abductor) Makinesi', type: 'selectorized', group: 'legs',
    primary: ['glute-med'], secondary: ['glutes'],
    what: 'Oturarak dizlerinin dış tarafındaki pedleri bacaklarını açarak dışa ittiğin makinedir.',
    focus: [
      'Kalça yanı kaslarını (gluteus medius ve minimus) çalıştırır.',
      'Gövdeyi öne eğmek gluteus maximus’un üst liflerini de devreye sokar.',
      'Bu kaslar tek bacak üzerinde dururken dizin içe kaçmasını önler.'
    ],
    adjust: [
      'Başlangıç açısını, bacaklar kapalıyken hafif direnç olacak şekilde ayarla.',
      'Pedler dizlerin dış kısmına denk gelmeli.'
    ],
    steps: [
      'Otur, bacaklarını pedlerin arasına yerleştir.',
      'Dizlerinle pedleri dışa it.',
      'Açık pozisyonda 1 saniye bekle.',
      'Kontrollü şekilde kapat.'
    ],
    mistakes: [
      'Pedleri çarparak kapatmak.',
      'Kalçayı koltuktan kaldırmak.',
      'Momentumla çalışmak.'
    ]
  },
  {
    id: 'hip-adductor', name: 'Hip Adductor Machine', nameTr: 'İç Bacak (Adductor) Makinesi', type: 'selectorized', group: 'legs',
    primary: ['adductors'], secondary: [],
    what: 'Oturarak dizlerinin iç tarafındaki pedleri bacaklarını kapatarak birbirine yaklaştırdığın makinedir. Genellikle abductor ile aynı makinedir; sadece pedler değiştirilir.',
    focus: [
      'İç bacak kas grubunu (adductor magnus, longus, brevis) izole eder.',
      'Adductor magnus kalçayı açmaya da yardım eder; bu yüzden güçlü iç bacak squat ve deadlift performansını artırır.',
      'Başlangıç açısı genişledikçe kas daha gerilmiş pozisyonda çalışır.'
    ],
    adjust: [
      'Başlangıç açısını, iç bacakta hafif gerilme hissedecek kadar geniş ayarla; kasığı zorlama.',
      'Pedler dizlerin iç kısmına denk gelmeli.'
    ],
    steps: [
      'Otur, dizlerinin iç kısmını pedlere yerleştir.',
      'Bacaklarını birbirine doğru bastır.',
      'Kapalı pozisyonda sık.',
      'Kontrollü şekilde aç.'
    ],
    mistakes: [
      'Başlangıç açısını aşırı geniş ayarlamak.',
      'Pedleri çarptırmak.',
      'Gövdeyi öne eğip destek almak.'
    ]
  },
  {
    id: 'glute-kickback-machine', name: 'Glute Kickback Machine', nameTr: 'Kalça Kickback Makinesi', type: 'selectorized', group: 'legs',
    primary: ['glutes'], secondary: ['hamstrings'],
    what: 'Gövdeni bir pede yaslayıp tek ayağınla bir platformu geriye doğru ittiğin makinedir.',
    focus: [
      'Gluteus maximus’u tek taraflı olarak izole eder.',
      'Kalça tamamen açıldığında (bacak gövdenin gerisinde) kasılma en yüksektir.',
      'Beli kavislendirmek yükü bele kaydırır.'
    ],
    adjust: [
      'Göğüs/kol pedinin yüksekliğini ayarla.',
      'Ayak platformunun başlangıç pozisyonunu, kalçan hafif bükükken başlayacak şekilde ayarla.'
    ],
    steps: [
      'Pede yaslan, çalışan ayağını platforma koy.',
      'Topuğunla platformu geriye it.',
      'Kalça tam açıldığında sık.',
      'Kontrollü şekilde geri dön.'
    ],
    mistakes: [
      'Beli kavislendirmek.',
      'Platformu aşırı yükseğe itmek.',
      'Momentum kullanmak.'
    ]
  },
  {
    id: 'hip-thrust-machine', name: 'Hip Thrust Machine', nameTr: 'Hip Thrust Makinesi', type: 'plate-loaded', group: 'legs',
    primary: ['glutes'], secondary: ['hamstrings', 'quads', 'adductors'],
    what: 'Sırtını bir pede yaslayıp kalçanın üzerindeki pedi/kemeri kalçanı yukarı iterek kaldırdığın makinedir.',
    focus: [
      'Gluteus maximus’u, kasın tamamen kasıldığı pozisyonda en yüksek dirençle çalıştırır.',
      'Ayaklar öne konunca hamstring, geriye (kalçaya yakın) konunca quadriceps katkısı artar; tepede dizlerin 90° olduğu konum kalça için idealdir.'
    ],
    adjust: [
      'Sırt pedi kürek kemiklerinin hemen altında olmalı.',
      'Kalça pedi/kemeri kalça kemiğinin (leğen) üzerinde durmalı.',
      'Ayak platformunda ayakları, tepede dizler 90° olacak şekilde konumlandır.'
    ],
    steps: [
      'Yerleş ve karnını sık.',
      'Topuklarınla iterek kalçanı kaldır.',
      'Tepede 1–2 saniye sık.',
      'Kontrollü indir.'
    ],
    mistakes: [
      'Beli kavislendirmek.',
      'Başı geriye atmak.',
      'Yarım tekrar.'
    ]
  },
  {
    id: 'standing-calf', name: 'Standing Calf Raise Machine', nameTr: 'Ayakta Kalf Makinesi', type: 'selectorized', group: 'legs',
    primary: ['calves'], secondary: [],
    what: 'Omuzlarına gelen pedlerin altında, parmak uçlarınla bir basamakta durarak topuklarını kaldırıp indirdiğin makinedir.',
    focus: [
      'Diz düz olduğu için kalfın büyük ve görünür kası gastrocnemius öne çıkar.',
      'Alttaki soleus da çalışır ama ikincil düzeydedir.',
      'Ayak uçlarının içe veya dışa dönük olması etkiyi yalnızca çok az değiştirir.'
    ],
    adjust: [
      'Omuz pedlerinin yüksekliğini, dizlerin düzken topukların basamaktan tam aşağı inebileceği şekilde ayarla.'
    ],
    steps: [
      'Pedlerin altına gir, parmak uçlarınla basamağa bas.',
      'Topuklarını tam aşağı indir, 1 saniye bekle.',
      'Parmak uçlarına olabildiğince yükseğe kalk.',
      'Tepede sık ve yavaşça indir.'
    ],
    mistakes: [
      'Sektirmek.',
      'Dizleri bükmek.',
      'Kısa hareket açıklığı.'
    ]
  },
  {
    id: 'seated-calf', name: 'Seated Calf Raise Machine', nameTr: 'Oturarak Kalf Makinesi', type: 'plate-loaded', group: 'legs',
    primary: ['calves'], secondary: [],
    what: 'Oturarak dizlerinin üzerindeki pedi parmak uçlarınla iterek kaldırdığın makinedir.',
    focus: [
      'Diz bükük olduğu için gastrocnemius gevşer ve yükün çoğu alttaki soleus kasına biner.',
      'Soleus kalfın kalınlığı ve dayanıklılığı için önemlidir; ayakta kalfla birlikte yapılmalıdır.'
    ],
    adjust: [
      'Diz pedini uyluklarının alt kısmına sıkıca indir.',
      'Parmak uçlarının ön kısmıyla platforma bas; topuklar boşta kalsın.'
    ],
    steps: [
      'Emniyet kolunu aç.',
      'Topuklarını tam aşağı indir.',
      'Parmak uçlarına kalk ve sık.',
      'Set sonunda emniyet kolunu kapat.'
    ],
    mistakes: [
      'Sektirmek.',
      'Pedi gevşek bırakmak.',
      'Yarım tekrar.'
    ]
  },

  // ================= KARIN =================
  {
    id: 'ab-crunch-machine', name: 'Ab Crunch Machine', nameTr: 'Karın (Crunch) Makinesi', type: 'selectorized', group: 'core',
    primary: ['abs'], secondary: ['obliques'],
    what: 'Oturarak gövdeni ağırlığa karşı öne doğru kıvırdığın makinedir.',
    focus: [
      'Rectus abdominis’i (karın) ağırlıkla çalıştırmanı sağlar.',
      'Hareket kalçadan değil omurganın bükülmesinden gelmeli; kalçadan menteşelenirsen kalça bükücüler çalışır.'
    ],
    adjust: [
      'Koltuk yüksekliğini, pedler veya tutamaklar üst göğsüne gelecek şekilde ayarla.',
      'Ayaklarını pedlerin altına sabitle.'
    ],
    steps: [
      'Tutamakları kavra, sırtını yasla.',
      'Karnını sıkarak gövdeni öne kıvır.',
      'Sonda 1 saniye sık.',
      'Kontrollü dön.'
    ],
    mistakes: [
      'Kollarla itmek.',
      'Kalçadan menteşelenmek.',
      'Ağırlığı çarptırmak.'
    ]
  },
  {
    id: 'rotary-torso', name: 'Rotary Torso Machine', nameTr: 'Gövde Döndürme Makinesi', type: 'selectorized', group: 'core',
    primary: ['obliques'], secondary: ['abs'],
    what: 'Bacakların sabitken gövdeni dirence karşı sağa ve sola döndürdüğün makinedir.',
    focus: [
      'Yan karın kaslarını (iç ve dış oblikler) döndürme görevinde çalıştırır.',
      'Dönüş, bel omurlarından çok göğüs kafesi bölgesinden gelmeli; bu yüzden aşırı açı kullanılmamalı.'
    ],
    adjust: [
      'Koltuk yüksekliği ve göğüs pedi: Gövden sabit ve dik olmalı.',
      'Dönüş açısını orta düzeyde tut (her yöne 45° civarı).'
    ],
    steps: [
      'Dizlerini sabitle, pedleri kavra.',
      'Gövdeni yavaşça bir yana döndür.',
      'Sonda sık ve kontrollü dön.',
      'Set sonunda diğer yöne geç.'
    ],
    mistakes: [
      'Hızla savurmak.',
      'Aşırı dönüş açısı.',
      'Ağır yüklenmek.'
    ]
  },
  {
    id: 'captains-chair', name: 'Captain’s Chair / Vertical Knee Raise', nameTr: 'Dips & Diz Çekme İstasyonu (Captain’s Chair)', type: 'station', group: 'core',
    primary: ['abs', 'hip-flexors'], secondary: ['obliques', 'triceps', 'chest'],
    what: 'Sırtını bir pede yaslayıp ön kollarını kol pedlerine dayayarak bacaklarını kaldırdığın istasyondur. Çoğunda dips tutamakları ve barfiks barı da bulunur.',
    focus: [
      'Diz/bacak kaldırma: alt karın ve kalça bükücüler.',
      'Leğen kemiğini yukarı kıvırmak karnı, sadece bacakları kaldırmak kalça bükücüleri çalıştırır.',
      'Dizleri çaprazlama çekmek yan karnı devreye sokar.',
      'Dips tutamaklarıyla: triceps ve alt göğüs.'
    ],
    adjust: [
      'Ayarlanabilir bir parça yoktur; sırtını pede tam yaslayıp ön kollarını pedlere yerleştir.'
    ],
    steps: [
      'Ön kollarını pedlere koy, tutamakları kavra ve sırtını yasla.',
      'Dizlerini göğsüne doğru çek.',
      'Tepede leğen kemiğini hafifçe kıvırıp karnını sık.',
      'Kontrollü indir.'
    ],
    mistakes: [
      'Bacakları sallamak.',
      'Sırtı pedden koparmak.',
      'Omuzları çökertmek.'
    ],
    related: ['hanging-leg-raise', 'triceps-dip']
  },

  // ================= ÇOK AMAÇLI =================
  {
    id: 'smith-machine', name: 'Smith Machine', nameTr: 'Smith Makinesi', type: 'station', group: 'multi',
    primary: ['quads', 'chest'], secondary: ['glutes', 'front-delt', 'triceps', 'calves'],
    what: 'Barın dikey raylar üzerinde sabit bir yolda hareket ettiği makinedir. Her yükseklikte bileği çevirerek barı kancalara asabilirsin.',
    focus: [
      'Neyi çalıştırdığı yaptığın harekete bağlıdır: squat’ta quadriceps ve kalça, preste göğüs, omuz presinde ön omuz.',
      'Sabit bar yolu dengeleyici kasların işini azaltır; hedef kasa odaklanmayı kolaylaştırır.',
      'Squat’ta ayakları barın önüne koymak quadriceps’i öne çıkarır ve beli rahatlatır.'
    ],
    adjust: [
      'Güvenlik durdurucularını, hareketin en alt noktasının hemen altına ayarla.',
      'Kanca yüksekliğini başlangıç pozisyonuna göre seç.',
      'Sehpayı, bar hedef bölgeye inecek şekilde yerleştir.'
    ],
    steps: [
      'Barın altına pozisyon al, barı kavra.',
      'Bileğini çevirerek barı kancalardan kurtar.',
      'Hareketi kontrollü tempoda yap.',
      'Set sonunda bileğini çevirip barı kancaya as.'
    ],
    mistakes: [
      'Güvenlik durdurucularını ayarlamamak.',
      'Vücudu barın sabit yoluna göre yanlış konumlandırmak.',
      'Barın serbest ağırlıkla aynı olduğunu sanıp aynı ağırlıkları beklemek; bazı makinelerde bar dengelenmiştir.'
    ]
  },
  {
    id: 'power-rack', name: 'Power Rack / Squat Rack', nameTr: 'Kafes (Power Rack)', type: 'station', group: 'multi',
    primary: ['quads', 'glutes', 'chest'], secondary: ['hamstrings', 'lower-back', 'front-delt', 'triceps', 'lats'],
    what: 'Barı istediğin yükseklikte kancalara asabildiğin ve güvenlik barlarıyla korunarak ağır serbest ağırlık çalışabildiğin kafestir.',
    focus: [
      'Kendi başına bir kası çalıştırmaz; squat, bench press, omuz presi, rack pull ve barfiks gibi temel serbest ağırlık hareketlerinin güvenli istasyonudur.',
      'Güvenlik barları sayesinde bir tekrarı tamamlayamazsan barı güvenle bırakabilirsin.'
    ],
    adjust: [
      'Kancaları (J-hook) başlangıç pozisyonunun biraz altına ayarla: squat’ta omuz hizasının altı, bench’te kolların hafif bükük uzanabileceği yükseklik.',
      'Güvenlik barlarını hareketin en alt noktasının hemen altına ayarla.'
    ],
    steps: [
      'Kancaları ve güvenlik barlarını ayarla.',
      'Plakaları yükle ve klipsleri tak.',
      'Barı kancalardan al ve hareketini yap.',
      'Set sonunda barı kancalara geri koy.'
    ],
    mistakes: [
      'Güvenlik barlarını kullanmamak.',
      'Plaka klipslerini takmamak.',
      'Barı raftan kaldırmak için çok uzakta durmak.'
    ],
    related: ['back-squat', 'barbell-bench-press', 'overhead-press', 'pull-up']
  },

  // ================= KARDİYO =================
  {
    id: 'treadmill', name: 'Treadmill', nameTr: 'Koşu Bandı', type: 'cardio', group: 'cardio',
    primary: ['quads', 'calves'], secondary: ['glutes', 'hamstrings', 'hip-flexors', 'abs'],
    what: 'Hareketli bir bant üzerinde yürüdüğün veya koştuğun kardiyo aletidir. Hız ve eğim ayarlanabilir.',
    focus: [
      'Düz koşuda quadriceps, kalf ve kalça bükücüler öndedir.',
      'Eğim arttıkça (%6–15) kalça ve hamstring çok daha fazla çalışır; eğimli yürüyüş eklemlere az yük bindiren güçlü bir antrenmandır.',
      'Kalp-damar dayanıklılığını geliştirir.'
    ],
    adjust: [
      'Emniyet klipsini kıyafetine tak.',
      'Yavaş hızla başla, ardından hız ve eğimi kademeli artır.',
      'Dış mekân koşusunu taklit etmek için %1 eğim kullanılabilir.'
    ],
    steps: [
      'Bandın yanlarındaki basamaklara bas ve bandı düşük hızda başlat.',
      'Banda adım at ve yavaş yürüyerek ısın (3–5 dk).',
      'Hız ve eğimi hedefine göre ayarla.',
      'Bitirirken hızı kademeli düşürerek soğu.'
    ],
    workouts: [
      'Eğimli yürüyüş: %10–12 eğim, 5–6 km/s hız, 20–30 dakika.',
      'Aralıklı koşu: 1 dakika hızlı koşu + 2 dakika yürüyüş, 8 tur.',
      'Başlangıç: 30 dakika tempolu yürüyüş, haftada 3–5 gün.'
    ],
    mistakes: [
      'Tutamaklara sıkıca tutunup eğimin etkisini ortadan kaldırmak.',
      'Adım uzunluğunu aşırı açıp topuklarla sert basmak.',
      'Bant hareket halindeyken arkasından inmek.'
    ]
  },
  {
    id: 'stationary-bike', name: 'Upright Exercise Bike', nameTr: 'Kondisyon Bisikleti', type: 'cardio', group: 'cardio',
    primary: ['quads'], secondary: ['glutes', 'hamstrings', 'calves'],
    what: 'Dik oturarak pedal çevirdiğin sabit bisiklettir. Eklemlere çok az yük bindirir.',
    focus: [
      'Ana yük quadriceps’tedir; direnç arttıkça kalça da devreye girer.',
      'Ayakta pedal çevirmek kalça ve kalf katkısını artırır.',
      'Diz dostu, düşük darbeli bir kardiyodur.'
    ],
    adjust: [
      'Sele yüksekliği: Pedal en alttayken dizin hafif (25–35°) bükük kalmalı.',
      'Sele ileri-geri: Pedal öndeyken (saat 3 pozisyonu) diz, pedalın üzerinde olmalı.',
      'Gidon: Sırtın rahat, omuzların gevşek olacak yükseklikte.'
    ],
    steps: [
      'Seleyi ayarla ve ayaklarını pedal kayışlarına yerleştir.',
      'Düşük dirençte 3–5 dakika ısın.',
      'Direnci ve tempoyu hedefine göre ayarla.',
      'Bitirirken direnci düşürerek soğu.'
    ],
    workouts: [
      'Orta tempo: 30–45 dakika, konuşabileceğin bir yoğunlukta.',
      'Aralıklı: 30 saniye yüksek direnç + 90 saniye hafif, 8–10 tur.'
    ],
    mistakes: [
      'Seleyi çok alçak ayarlamak — diz ağrısına yol açabilir.',
      'Çok hafif dirençle kontrolsüz hızda pedal çevirmek.',
      'Kalçayı seleden seleye sallamak (sele çok yüksek demektir).'
    ]
  },
  {
    id: 'recumbent-bike', name: 'Recumbent Bike', nameTr: 'Sırt Destekli (Yatık) Bisiklet', type: 'cardio', group: 'cardio',
    primary: ['quads'], secondary: ['glutes', 'hamstrings'],
    what: 'Sırt destekli, yarı yatık bir koltukta pedalların önde olduğu bisiklettir.',
    focus: [
      'Quadriceps ve kalça çalışır.',
      'Sırt desteklendiği için bel ağrısı olanlar, ileri yaştakiler ve rehabilitasyon sürecindekiler için uygundur.'
    ],
    adjust: [
      'Koltuğu, pedal en uzaktayken dizin hafif bükük kalacak mesafeye ayarla.'
    ],
    steps: [
      'Koltuğa yaslan, ayaklarını pedallara yerleştir.',
      'Düşük dirençte ısın.',
      'Hedefine göre direnç ve tempo seç.',
      'Kademeli olarak soğu.'
    ],
    workouts: [
      'Düşük yoğunlukta 30–45 dakika sürekli pedal.',
      'Yeni başlayanlar için 10 dakikalık bloklar hâlinde, gün içinde 2–3 kez.'
    ],
    mistakes: [
      'Koltuğu çok yakın ayarlayıp dizleri fazla bükmek.',
      'Direnci hiç artırmamak.'
    ]
  },
  {
    id: 'elliptical', name: 'Elliptical Trainer', nameTr: 'Eliptik Bisiklet', type: 'cardio', group: 'cardio',
    primary: ['quads', 'glutes'], secondary: ['hamstrings', 'calves', 'chest', 'lats', 'triceps', 'biceps'],
    what: 'Ayakların elips şeklinde bir yol çizdiği, hareketli kolları olan kardiyo aletidir. Koşuya benzer ancak darbe yoktur.',
    focus: [
      'Bacaklar ana iş yükünü taşır: quadriceps ve kalça.',
      'Hareketli kollar itilip çekildiğinde göğüs, sırt ve kollar da hafifçe çalışır.',
      'Geriye doğru pedal çevirmek hamstring ve kalçayı daha fazla devreye sokar.',
      'Ayak eklemlerine binen yük koşudan çok daha azdır.'
    ],
    adjust: [
      'Direnç ve (varsa) rampa eğimini hedefine göre ayarla; eğim arttıkça kalça daha çok çalışır.'
    ],
    steps: [
      'Ayaklarını pedallara, ellerini hareketli kollara yerleştir.',
      'Düşük dirençte ısın.',
      'Kollarla itip çekerek ve bacaklarla eşit güç vererek tempoyu koru.',
      'Bitirirken yavaşla.'
    ],
    workouts: [
      'Orta tempo: 30–40 dakika.',
      'Aralıklı: 1 dakika yüksek direnç + 1 dakika hafif, 10 tur.'
    ],
    mistakes: [
      'Tamamen tutamaklara yaslanmak.',
      'Topukları pedaldan kaldırıp parmak ucunda gitmek.',
      'Direnci çok düşük tutup momentumla dönmek.'
    ]
  },
  {
    id: 'rowing-machine', name: 'Rowing Machine', nameTr: 'Kürek Çekme Makinesi', type: 'cardio', group: 'cardio',
    primary: ['quads', 'lats', 'mid-back'], secondary: ['glutes', 'hamstrings', 'biceps', 'rear-delt', 'abs', 'lower-back'],
    what: 'Kayan bir koltukta bacaklarınla itip bir tutamağı gövdene çekerek kürek çekmeyi taklit eden alettir. Kasların yaklaşık %85’ini çalıştıran bir tüm vücut kardiyosudur.',
    focus: [
      'Gücün yaklaşık %60’ı bacaklardan (quadriceps, kalça), %20’si gövdeden, %20’si kollar ve sırttan gelir.',
      'Çekiş aşamasında kanat, orta sırt ve biceps çalışır.',
      'Karın ve bel, gövdeyi sabitler.'
    ],
    adjust: [
      'Ayak kayışlarını ayakkabı bağcığı hizasının üzerinden geçecek şekilde sık.',
      'Damper (hava ayarı) genellikle 3–5 arası yeterlidir; yüksek damper daha zor değil, daha ağır ve yavaş hissettirir.'
    ],
    steps: [
      'Başlangıç: Dizler bükük, kaval kemikleri dik, kollar düz, gövde hafif öne eğik.',
      'Bacaklarla it: Önce bacaklar açılır, kollar düz kalır.',
      'Gövde hafifçe geriye yaslanır, ardından kollar tutamağı alt göğse çeker.',
      'Dönüş sırası tersidir: kollar uzar → gövde öne eğilir → dizler bükülür.'
    ],
    workouts: [
      'Teknik: 10 dakika hafif tempo, 20–24 çekiş/dakika.',
      'Aralıklı: 250 m hızlı + 1 dakika dinlenme, 6–8 tur.',
      'Dayanıklılık: 20–30 dakika sabit tempo.'
    ],
    mistakes: [
      'Kollarla çekmeye başlamak; güç önce bacaktan gelmeli.',
      'Beli yuvarlamak.',
      'Dönüşte dizleri kollar geçmeden bükmek (tutamak dizlere takılır).',
      'Damperi 10’a getirip daha iyi antrenman sanmak.'
    ]
  },
  {
    id: 'stair-climber', name: 'Stair Climber / StairMaster', nameTr: 'Merdiven Makinesi', type: 'cardio', group: 'cardio',
    primary: ['glutes', 'quads'], secondary: ['hamstrings', 'calves'],
    what: 'Sürekli dönen basamakları çıktığın kardiyo aletidir.',
    focus: [
      'Kalça ve quadriceps’i yoğun çalıştırır.',
      'Gövdeyi hafifçe öne eğmek (tutamaklara yaslanmadan) kalçayı daha çok devreye sokar.',
      'Kısa sürede nabzı hızla yükseltir.'
    ],
    adjust: [
      'Düşük hız seviyesiyle başla; tutamaklara yaslanmadan sürdürebileceğin tempoyu bul.'
    ],
    steps: [
      'Basamağa çık ve makineyi düşük hızda başlat.',
      'Her basamağa tüm ayak tabanınla bas.',
      'Gövdeni dik veya hafif öne eğik tut; tutamaklara sadece denge için hafifçe dokun.',
      'Bitirirken hızı düşür ve makine durunca in.'
    ],
    workouts: [
      'Başlangıç: 10–15 dakika orta tempo.',
      'Kalça odaklı: Her 2 dakikada bir basamak atlayarak 1 dakika çıkış.'
    ],
    mistakes: [
      'Tutamaklara tüm ağırlığınla yaslanmak — etkinin büyük kısmı kaybolur.',
      'Sadece parmak uçlarıyla basmak.',
      'Kamburlaşmak.'
    ]
  },
  {
    id: 'air-bike', name: 'Air Bike (Assault/Echo Bike)', nameTr: 'Fanlı Bisiklet (Air Bike)', type: 'cardio', group: 'cardio',
    primary: ['quads', 'glutes'], secondary: ['chest', 'lats', 'triceps', 'biceps', 'front-delt', 'hamstrings'],
    what: 'Önündeki büyük fanın direnç oluşturduğu, kolların da itip çektiği bir bisiklettir. Ne kadar hızlı çevirirsen direnç o kadar artar.',
    focus: [
      'Bacaklar ve kollar birlikte çalıştığı için tüm vücudu çalıştırır.',
      'Kol hareketinde itiş göğüs ve triceps’i, çekiş sırt ve biceps’i kullanır.',
      'Kısa aralıklı yüksek yoğunluklu antrenman için en zorlu aletlerden biridir.'
    ],
    adjust: [
      'Sele yüksekliğini kondisyon bisikletindeki gibi ayarla: pedal en alttayken diz hafif bükük.'
    ],
    steps: [
      'Seleye otur, ayaklarını pedallara, ellerini kollara yerleştir.',
      'Kol ve bacakları eş zamanlı kullanarak ısın.',
      'Aralıklarda tüm gücünle çevir, dinlenmede yavaşla.',
      'Kademeli soğu.'
    ],
    workouts: [
      'Tabata: 20 saniye maksimum + 10 saniye dinlenme, 8 tur (4 dakika).',
      '30/90: 30 saniye yüksek tempo + 90 saniye hafif, 6–8 tur.'
    ],
    mistakes: [
      'İlk aralıkta tüm enerjiyi harcayıp kalan turları yapamamak.',
      'Sadece bacakla çevirip kolları kullanmamak.'
    ]
  }
);

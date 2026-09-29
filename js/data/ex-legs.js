/* Bacak hareketleri: ön & iç bacak, kalça & arka bacak, kalf */
FIT.exercises.push(
  // ---------------- Ön & iç bacak ----------------
  {
    id: 'back-squat', name: 'Barbell Back Squat', nameTr: 'Barbell Squat (Arka Squat)', aka: 'çömelme',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['adductors', 'hamstrings', 'lower-back', 'abs'],
    equipment: 'barbell', machineId: 'power-rack', mechanic: 'compound', difficulty: 2,
    setup: 'Barı kafeste omuz hizasının biraz altına ayarla. Barın altına gir; bar trapezinin üstüne (high bar) ya da arka omzuna (low bar) otursun. Barı sıkıca kavra, dirseklerini aşağı çek ve barı raftan kaldırıp 2–3 adım geri çekil.',
    steps: [
      'Ayaklarını omuz genişliğinde aç, ayak uçlarını hafifçe (15–30°) dışa çevir.',
      'Derin nefes al, karnını sık.',
      'Kalçanı geriye ve aşağı, dizlerini ayak uçları yönünde dışa doğru iterek çömel.',
      'Uyluklar en az yere paralel olana (kalça diz hizasına) kadar in; tekniğin bozulmuyorsa daha derine inebilirsin.',
      'Topuk ve orta ayakla yeri iterek kalkış yap; kalça ve omuzlar aynı anda yükselsin.'
    ],
    breathing: 'Her tekrardan önce derin nefes al ve karnını sık (bracing); zorlu bölümü geçince nefes ver.',
    mistakes: [
      'Dizlerin içe çökmesi (valgus).',
      'Topukların yerden kalkması.',
      'Kalkarken kalçanın omuzlardan önce yükselip hareketin “good morning”e dönmesi.',
      'Altta belin yuvarlanması (butt wink) — genelde fazla derine inmekten ya da hareketlilik eksikliğinden olur.'
    ],
    tips: [
      'Dizlerin ayak uçlarını geçmesi sağlıklı dizler için sorun değildir; önemli olan dizlerin ayak yönünde ilerlemesidir.',
      'Kafesin güvenlik barlarını en alt pozisyonunun hemen altına ayarla.',
      'Ayak bileği hareketliliğin kısıtlıysa topuğu yükseltilmiş squat ayakkabısı veya topuk altına ince plaka yardımcı olur.'
    ],
    variations: ['front-squat', 'goblet-squat', 'smith-squat', 'hack-squat']
  },
  {
    id: 'front-squat', name: 'Front Squat', nameTr: 'Önden Squat',
    group: 'quads', primary: ['quads'], secondary: ['glutes', 'adductors', 'abs', 'lower-back'],
    equipment: 'barbell', machineId: 'power-rack', mechanic: 'compound', difficulty: 3,
    setup: 'Barı ön omuzlarının üzerine, boynuna yakın yerleştir. Parmak uçlarınla barı omuz genişliğinde tut (ya da kolları çaprazla) ve dirseklerini olabildiğince yukarı kaldır.',
    steps: [
      'Ayaklar omuz genişliğinde, ayak uçları hafif dışa dönük.',
      'Gövdeyi dik ve dirsekleri yukarıda tutarak çömel.',
      'Kalça diz hizasının altına inene kadar devam et.',
      'Dirsekleri yukarıda tutarak kalk.'
    ],
    mistakes: [
      'Dirseklerin düşmesi — bar öne kayar.',
      'Gövdeyi öne yatırmak.',
      'Barı elleriyle sıkıca kavramaya çalışıp bilekleri zorlamak.'
    ],
    tips: [
      'Arka squat’a göre gövde daha dik kalır; bu da bele daha az, quadriceps’e daha fazla yük bindirir.',
      'Bilek esnekliği yetmiyorsa kolları çaprazlama veya kayış tutuşu kullan.'
    ],
    variations: ['back-squat', 'goblet-squat', 'hack-squat']
  },
  {
    id: 'goblet-squat', name: 'Goblet Squat', nameTr: 'Goblet Squat',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['adductors', 'abs'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Bir dambılı (veya kettlebell’i) dikey şekilde, üst plakasından iki elinle göğsünün önünde tut. Ayaklar omuz genişliğinde.',
    steps: [
      'Göğsünü dik tutarak kalçanı aşağı indir.',
      'Dirseklerin dizlerinin iç tarafına yaklaşana kadar derin çömel.',
      'Altta sırtını düz tut.',
      'Yeri iterek kalk.'
    ],
    mistakes: [
      'Dambılı göğüsten uzaklaştırmak.',
      'Topukları kaldırmak.',
      'Dizleri içe çökertmek.'
    ],
    tips: [
      'Squat tekniğini öğrenmek için en iyi başlangıç hareketidir.',
      'Altta dirseklerinle dizlerini hafifçe dışa iterek kalça esnekliğini geliştirebilirsin.'
    ],
    variations: ['back-squat', 'bulgarian-split-squat']
  },
  {
    id: 'leg-press', name: 'Leg Press', nameTr: 'Leg Press (Bacak Presi)',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['adductors', 'hamstrings'],
    equipment: 'machine', machineId: 'leg-press', mechanic: 'compound', difficulty: 1,
    setup: 'Sırtını ve kalçanı pede tamamen yasla. Ayaklarını platformun ortasına, omuz genişliğinde koy. Platformu itip emniyet kollarını aç.',
    steps: [
      'Dizlerini ayak uçları yönünde bükerek platformu göğsüne doğru indir.',
      'Dizler yaklaşık 90° veya biraz daha bükülünceye kadar in; kalçan pedden kalkmasın.',
      'Topuk ve orta ayakla platformu yukarı it.',
      'Üstte dizleri tamamen kilitlemeden dur.'
    ],
    mistakes: [
      'Üstte dizleri sertçe kilitlemek — ağır yükte ciddi sakatlık riski taşır.',
      'Çok derine inip kalçanın ve belin pedden kalkması.',
      'Dizleri içe çökertmek.'
    ],
    tips: [
      'Ayakları platformda yukarı koymak kalça ve hamstring’i, aşağı koymak quadriceps’i öne çıkarır.',
      'Dar duruş dış quadriceps’i, geniş duruş iç bacağı daha çok çalıştırır.'
    ],
    variations: ['hack-squat', 'back-squat', 'pendulum-squat']
  },
  {
    id: 'hack-squat', name: 'Hack Squat', nameTr: 'Hack Squat Makinesi',
    group: 'quads', primary: ['quads'], secondary: ['glutes', 'adductors'],
    equipment: 'machine', machineId: 'hack-squat', mechanic: 'compound', difficulty: 2,
    setup: 'Sırtını pede yasla, omuzlarını omuz pedlerinin altına yerleştir. Ayaklarını platformda omuz genişliğinde koy ve emniyet kolunu aç.',
    steps: [
      'Dizleri ayak uçları yönünde bükerek aşağı in.',
      'Uyluklar platforma paralel olana kadar ya da daha derine in.',
      'Topukları platforma bastırarak yukarı it.',
      'Üstte dizleri kilitlemeden dur.'
    ],
    mistakes: [
      'Topukları platformdan kaldırmak.',
      'Kalçayı pedden uzaklaştırmak.',
      'Yarım tekrar yapmak.'
    ],
    tips: [
      'Sırt desteklendiği için quadriceps’i bele yük bindirmeden ağır çalıştırmanın iyi bir yoludur.',
      'Ayakları platformda aşağıya koymak quadriceps vurgusunu artırır.'
    ],
    variations: ['leg-press', 'pendulum-squat', 'front-squat']
  },
  {
    id: 'leg-extension', name: 'Leg Extension', nameTr: 'Leg Extension (Bacak Uzatma)',
    group: 'quads', primary: ['quads'], secondary: [],
    equipment: 'machine', machineId: 'leg-extension', mechanic: 'isolation', difficulty: 1,
    setup: 'Sırt pedini, dizlerin makinenin dönme ekseniyle aynı hizaya gelecek şekilde ayarla. Ayak bileği pedini, ayak bileğinin hemen üstüne gelecek şekilde konumlandır.',
    steps: [
      'Yan tutamakları kavra, kalçanı koltuğa bastır.',
      'Bacaklarını tamamen düzleşene kadar kaldır.',
      'Tepede quadriceps’i 1 saniye sık.',
      'Kontrollü şekilde indir; ağırlık bloğuna değmeden tekrara geç.'
    ],
    mistakes: [
      'Dönme eksenini dizle hizalamamak.',
      'Ağırlığı savurarak kaldırmak.',
      'Kalçayı koltuktan kaldırmak.'
    ],
    tips: [
      'Quadriceps’i, özellikle rectus femoris’i izole eden nadir hareketlerdendir.',
      'Arkaya hafifçe yaslanmak rectus femoris’i daha çok gerer.'
    ],
    variations: ['sissy-squat', 'hack-squat']
  },
  {
    id: 'bulgarian-split-squat', name: 'Bulgarian Split Squat', nameTr: 'Bulgar Split Squat',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['adductors', 'hamstrings', 'glute-med'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Bir sehpanın önünde dur, arka ayağının üst kısmını sehpaya koy. Ön ayağın sehpadan yaklaşık bir büyük adım uzakta olsun. Dambılları yanlarında tut.',
    steps: [
      'Gövdeni dik tutarak arka dizini yere doğru indir.',
      'Ön uyluğun yere paralel olana kadar in.',
      'Ön ayağının topuğu ve orta kısmıyla yeri iterek kalk.',
      'Bir bacağın setini bitir, sonra diğer bacağa geç.'
    ],
    mistakes: [
      'Ön ayağı sehpaya çok yakın koymak.',
      'Ön dizi içe çökertmek.',
      'Arka bacakla itmek.'
    ],
    tips: [
      'Gövdeyi dik tutmak quadriceps’i, öne eğmek kalçayı daha çok çalıştırır.',
      'Denge zor geliyorsa bir eline destek alarak başla.'
    ],
    variations: ['walking-lunge', 'reverse-lunge', 'step-up']
  },
  {
    id: 'walking-lunge', name: 'Walking Lunge', nameTr: 'Yürüyerek Lunge',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['hamstrings', 'adductors', 'glute-med', 'calves'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Dambılları yanlarında tut, dik dur ve önünde yürüyebileceğin boş bir alan olsun.',
    steps: [
      'Bir büyük adım öne at.',
      'Her iki dizini bükerek arka dizini yere yaklaştır.',
      'Ön ayakla iterek kalk ve arka ayağı öne getirip yeni adımı at.',
      'Bacakları sırayla değiştirerek ilerle.'
    ],
    mistakes: [
      'Çok kısa adım atmak — dizler aşırı öne gider.',
      'Arka dizi yere çarpmak.',
      'Gövdeyi yana yatırmak.'
    ],
    tips: [
      'Uzun adım kalçayı, kısa adım quadriceps’i daha çok çalıştırır.',
      'Alan yoksa yerinde öne veya geriye lunge yap.'
    ],
    variations: ['reverse-lunge', 'bulgarian-split-squat']
  },
  {
    id: 'reverse-lunge', name: 'Reverse Lunge', nameTr: 'Geriye Lunge',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['hamstrings', 'adductors', 'glute-med'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Dik dur, dambılları yanlarında tut.',
    steps: [
      'Bir ayağınla geriye büyük bir adım at.',
      'Arka dizini yere yaklaştırana kadar in.',
      'Ön ayağınla iterek başlangıç pozisyonuna dön.',
      'Bacakları değiştir.'
    ],
    mistakes: [
      'Gövdeyi öne çökertmek.',
      'Ön dizi içe kaçırmak.',
      'Dengeyi kaybedip ayakları aynı çizgiye koymak.'
    ],
    tips: [
      'Öne lunge’a göre dizlere daha az yük bindirir; diz hassasiyeti olanlar için iyi bir seçenektir.',
      'Ayakların ray gibi iki paralel çizgide dursun, ip üstünde gibi değil.'
    ],
    variations: ['walking-lunge', 'bulgarian-split-squat', 'step-up']
  },
  {
    id: 'step-up', name: 'Dumbbell Step-Up', nameTr: 'Basamağa Çıkış',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['hamstrings', 'glute-med', 'calves'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Diz yüksekliğinde sağlam bir sehpa veya kutunun önünde dur; dambılları yanlarında tut.',
    steps: [
      'Bir ayağını tamamen basamağın üzerine koy.',
      'Üstteki ayakla iterek vücudunu yukarı kaldır; arka ayakla sıçrama.',
      'Üstte dikleş.',
      'Kontrollü şekilde aynı ayakla geri in.'
    ],
    mistakes: [
      'Alttaki ayakla yerden sekerek yardım almak.',
      'Çok yüksek basamak kullanmak.',
      'Dizi içe kaçırmak.'
    ],
    tips: [
      'Günlük hayattaki merdiven çıkmayı doğrudan güçlendirir.',
      'Basamak yükseldikçe kalçaya binen yük artar.'
    ],
    variations: ['bulgarian-split-squat', 'reverse-lunge']
  },
  {
    id: 'smith-squat', name: 'Smith Machine Squat', nameTr: 'Smith Makinede Squat',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['adductors', 'hamstrings'],
    equipment: 'smith', machineId: 'smith-machine', mechanic: 'compound', difficulty: 1,
    setup: 'Barı omuz hizasının biraz altına ayarla ve trapezinin üstüne yerleştir. Ayaklarını barın biraz önüne koy; güvenlik durdurucularını ayarla.',
    steps: [
      'Bileği çevirerek barı kancalardan kurtar.',
      'Kalçanı aşağı indirerek çömel.',
      'Uyluklar yere paralel olunca veya biraz daha altında dur.',
      'Yeri iterek kalk ve seti bitirince barı kancaya as.'
    ],
    mistakes: [
      'Ayakları tam barın altına koyup dizleri zorlamak.',
      'Güvenlik durdurucularını ayarlamamak.',
      'Barın sabit yolu nedeniyle doğal olmayan bir pozisyona zorlanmak.'
    ],
    tips: [
      'Ayakları öne koymak kalça ve bele binen yükü azaltır, quadriceps’i ön plana çıkarır.',
      'Denge gerektirmediği için yorgunken bile güvenle son tekrarları zorlayabilirsin.'
    ],
    variations: ['back-squat', 'hack-squat']
  },
  {
    id: 'pendulum-squat', name: 'Pendulum Squat', nameTr: 'Pendulum Squat',
    group: 'quads', primary: ['quads'], secondary: ['glutes', 'adductors'],
    equipment: 'machine', machineId: 'pendulum-squat', mechanic: 'compound', difficulty: 2,
    setup: 'Sırtını pede yasla, omuzlarını pedlerin altına yerleştir. Ayaklarını platformda omuz genişliğinde koy ve emniyeti aç.',
    steps: [
      'Dizlerini bükerek aşağı in; makine bir yay çizerek hareket eder.',
      'Olabildiğince derin, kalçan pedden kalkmadan in.',
      'Platformu iterek yukarı çık.',
      'Üstte dizleri kilitlemeden tekrara geç.'
    ],
    mistakes: [
      'Yarım tekrar yapmak.',
      'Topukları kaldırmak.',
      'Aşağıda sekmek.'
    ],
    tips: [
      'Direnç, quadriceps’in en güçlü olduğu derin pozisyonda artar; bu da derin squat’ı daha verimli yapar.',
      'Bele neredeyse hiç yük binmez.'
    ],
    variations: ['hack-squat', 'leg-press']
  },
  {
    id: 'belt-squat', name: 'Belt Squat', nameTr: 'Kemerli Squat',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['adductors', 'hamstrings'],
    equipment: 'machine', machineId: 'belt-squat', mechanic: 'compound', difficulty: 1,
    setup: 'Kemeri beline tak ve makinenin zincirine bağla. Platformda omuz genişliğinde dur, tutamakları hafifçe kavra.',
    steps: [
      'Kolu çevirerek ağırlığı serbest bırak.',
      'Gövdeni dik tutarak derin bir squat yap.',
      'Kalça diz hizasının altına inince yeri it.',
      'Tamamen dikleş.'
    ],
    mistakes: [
      'Tutamaklardan çekerek kendini kaldırmak.',
      'Dizleri içe çökertmek.',
      'Kemeri gevşek bağlamak.'
    ],
    tips: [
      'Yük kalçadan asıldığı için omurgaya baskı yapmaz; bel sorunu olanlar için harika bir squat alternatifidir.',
      'Makine yoksa dips kemeri ve bir plaka ile iki sehpa arasında yapılabilir.'
    ],
    variations: ['back-squat', 'goblet-squat']
  },
  {
    id: 'sissy-squat', name: 'Sissy Squat', nameTr: 'Sissy Squat',
    group: 'quads', primary: ['quads'], secondary: ['abs', 'hip-flexors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 3,
    setup: 'Bir eline destek alarak (direk, kafes) dik dur; ayaklar kalça genişliğinde.',
    steps: [
      'Parmak uçlarına kalk ve dizlerini öne iterek geriye doğru yaslan.',
      'Diz, kalça ve omuzlar düz bir çizgi oluşturacak şekilde dizlerini bükmeye devam et.',
      'Quadriceps’te güçlü bir gerilme hissedince dur.',
      'Quadriceps’le iterek başlangıç pozisyonuna dön.'
    ],
    mistakes: [
      'Kalçayı bükerek hareketi normal squat’a çevirmek.',
      'Diz ağrısı varken yapmak.',
      'Çok hızlı inmek.'
    ],
    tips: [
      'Vücut ağırlığıyla quadriceps’i izole eden zorlu bir harekettir.',
      'Önce kısa hareket açıklığıyla başla, zamanla derinleştir.'
    ],
    variations: ['leg-extension']
  },
  {
    id: 'wall-sit', name: 'Wall Sit', nameTr: 'Duvarda Oturma',
    group: 'quads', primary: ['quads'], secondary: ['glutes', 'adductors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Sırtını bir duvara yasla, ayaklarını duvardan yaklaşık iki ayak boyu öne koy.',
    steps: [
      'Sırtını duvarda kaydırarak uyluklar yere paralel olana kadar in.',
      'Dizler 90° bükük, ayak bileklerinin üstünde olsun.',
      'Pozisyonu belirlenen süre boyunca koru (ör. 30–60 saniye).',
      'Duvardan kayarak yukarı çık.'
    ],
    mistakes: [
      'Elleri uyluklara dayayıp destek almak.',
      'Dizleri ayak uçlarının çok önüne çıkarmak.',
      'Nefesi tutmak.'
    ],
    tips: [
      'Ekipman gerektirmeyen iyi bir dayanıklılık hareketidir.',
      'Kucağına bir plaka koyarak zorlaştırabilirsin.'
    ],
    variations: ['goblet-squat', 'sissy-squat']
  },
  {
    id: 'jump-squat', name: 'Jump Squat', nameTr: 'Sıçramalı Squat',
    group: 'quads', primary: ['quads', 'glutes'], secondary: ['calves', 'hamstrings'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Ayaklar omuz genişliğinde, kollar yanlarda dik dur.',
    steps: [
      'Yarım veya çeyrek squat pozisyonuna in.',
      'Kolları yukarı savurarak patlayıcı şekilde yukarı sıçra.',
      'Dizlerini hafifçe bükerek yumuşak bir iniş yap.',
      'İnişten doğrudan bir sonraki tekrara geç.'
    ],
    mistakes: [
      'Dizler düz, sert iniş yapmak.',
      'İnişte dizleri içe çökertmek.',
      'Yorgunken tekrarı sürdürüp tekniği bozmak.'
    ],
    tips: [
      'Patlayıcı güç ve kondisyon için etkilidir.',
      'Setleri kısa tut (5–10 tekrar); kalite önemlidir.'
    ],
    variations: ['box-jump', 'goblet-squat']
  },
  {
    id: 'hip-adduction', name: 'Hip Adduction Machine', nameTr: 'İç Bacak Makinesi (Adductor)',
    group: 'quads', primary: ['adductors'], secondary: [],
    equipment: 'machine', machineId: 'hip-adductor', mechanic: 'isolation', difficulty: 1,
    setup: 'Makineye otur, dizlerinin iç kısmını pedlere yerleştir. Başlangıç açısını, iç bacakta hafif gerilme hissedeceğin şekilde ayarla.',
    steps: [
      'Sırtını yasla, tutamakları kavra.',
      'Bacaklarını birbirine doğru bastırarak pedleri kapat.',
      'Kapalı pozisyonda 1 saniye sık.',
      'Kontrollü şekilde aç.'
    ],
    mistakes: [
      'Başlangıç açısını çok geniş ayarlayıp kasığı zorlamak.',
      'Pedleri çarparak kapatmak.',
      'Gövdeyi öne eğip destek almak.'
    ],
    tips: [
      'Güçlü iç bacak kasları squat ve deadlift’te kalçanın açılmasına yardım eder.',
      'Kasık sakatlıklarına karşı koruyucu etkisi vardır.'
    ],
    variations: ['sumo-deadlift', 'hip-abduction']
  },

  // ---------------- Kalça & arka bacak ----------------
  {
    id: 'romanian-deadlift', name: 'Romanian Deadlift', nameTr: 'Romen Deadlift (RDL)', aka: 'rdl',
    group: 'glutes-hams', primary: ['hamstrings', 'glutes'], secondary: ['lower-back', 'forearms', 'adductors'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Barı omuz genişliğinde kavrayıp dik dur; ayaklar kalça genişliğinde, dizler hafif bükük.',
    steps: [
      'Kalçanı geriye iterek (kapıyı kalçanla kapatır gibi) öne eğilmeye başla.',
      'Bar bacaklarına yakın şekilde kayarak insin; sırtın düz kalsın.',
      'Hamstring’lerinde güçlü gerilme hissedince dur (genelde bar dizin biraz altında).',
      'Kalçanı öne sürerek dikleş ve üstte kalçanı sık.'
    ],
    mistakes: [
      'Beli yuvarlayarak daha aşağı inmeye çalışmak.',
      'Dizleri fazla bükerek hareketi squat’a çevirmek.',
      'Barı vücuttan uzaklaştırmak.'
    ],
    tips: [
      'İneceğin nokta esnekliğine bağlıdır; bar yere değmek zorunda değildir.',
      'Dambılla da aynı teknikle yapılabilir.'
    ],
    variations: ['single-leg-rdl', 'good-morning', 'deadlift']
  },
  {
    id: 'sumo-deadlift', name: 'Sumo Deadlift', nameTr: 'Sumo Deadlift',
    group: 'glutes-hams', primary: ['glutes', 'adductors', 'quads'], secondary: ['hamstrings', 'lower-back', 'traps', 'forearms'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 3,
    setup: 'Geniş bir duruşla dur; ayak uçları 30–45° dışa dönük, kaval kemiklerin bara yakın olsun. Barı bacaklarının arasından, omuz genişliğinde kavra.',
    steps: [
      'Kalçanı indir, göğsünü kaldır, dizlerini ayak uçları yönünde dışa it.',
      'Karnını sık ve yeri “ayaklarınla yana doğru yırtar” gibi iterek barı kaldır.',
      'Kalçanı öne sürerek tamamen dikleş.',
      'Kontrollü şekilde barı yere indir.'
    ],
    mistakes: [
      'Dizlerin içe çökmesi.',
      'Kalçayı çok yüksekte başlatıp hareketi RDL’ye çevirmek.',
      'Sırtı yuvarlamak.'
    ],
    tips: [
      'Gövde daha dik kaldığı için bele binen yük klasik deadlift’ten daha azdır.',
      'Kalça hareketliliği gerektirir; önce hafif yükle duruşunu bul.'
    ],
    variations: ['deadlift', 'hip-adduction']
  },
  {
    id: 'hip-thrust', name: 'Barbell Hip Thrust', nameTr: 'Barbell Hip Thrust (Kalça İtme)',
    group: 'glutes-hams', primary: ['glutes'], secondary: ['hamstrings', 'quads', 'adductors'],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 2,
    setup: 'Sırtının üst kısmını (kürek kemiklerinin altı) bir sehpaya daya. Barı süngerli bir pedle kalça kemiğinin üzerine yerleştir. Ayaklar kalça genişliğinde, yere tam bassın.',
    steps: [
      'Çeneni hafifçe göğsüne doğru tut, karnını sık.',
      'Topuklarınla yeri iterek kalçanı yukarı kaldır.',
      'Gövden yere paralel, dizler 90° olduğunda kalçanı güçlü şekilde sık (1–2 saniye).',
      'Kontrollü şekilde kalçanı indir.'
    ],
    mistakes: [
      'Üstte beli aşırı kavislendirmek; hareket kalçadan değil belden olur.',
      'Ayakları çok uzağa veya yakına koymak.',
      'Başı geriye atmak.'
    ],
    tips: [
      'Tepede dizlerin tam 90° olacak şekilde ayak konumunu ayarla.',
      'Kalçanın tam kasıldığı pozisyonda en yüksek direnci sağlar; kalça gelişimi için en etkili hareketlerden biridir.'
    ],
    variations: ['glute-bridge', 'machine-hip-thrust', 'cable-pull-through']
  },
  {
    id: 'machine-hip-thrust', name: 'Machine Hip Thrust', nameTr: 'Makinede Hip Thrust',
    group: 'glutes-hams', primary: ['glutes'], secondary: ['hamstrings', 'quads'],
    equipment: 'machine', machineId: 'hip-thrust-machine', mechanic: 'isolation', difficulty: 1,
    setup: 'Sırt pedini kürek kemiklerinin altına, kalça pedini/kemerini kalça kemiğinin üzerine ayarla. Ayaklarını platforma kalça genişliğinde koy.',
    steps: [
      'Karnını sık, çeneni hafifçe içe al.',
      'Topuklarınla iterek kalçanı yukarı kaldır.',
      'Tepede kalçanı 1–2 saniye sık.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Beli kavislendirmek.',
      'Ayakları yanlış konumlandırıp hamstring veya quadriceps’e yüklenmek.',
      'Yarım tekrar yapmak.'
    ],
    tips: [
      'Barbell ve ped hazırlığı gerektirmeden aynı hareketi hızlıca yapmanı sağlar.',
      'Tepede duraklama kalça aktivasyonunu artırır.'
    ],
    variations: ['hip-thrust', 'glute-bridge']
  },
  {
    id: 'glute-bridge', name: 'Glute Bridge', nameTr: 'Kalça Köprüsü',
    group: 'glutes-hams', primary: ['glutes'], secondary: ['hamstrings', 'abs'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Sırtüstü yere uzan, dizlerini bük ve ayaklarını kalça genişliğinde yere koy. Kollar yanlarda.',
    steps: [
      'Karnını sık, topuklarınla yeri it.',
      'Kalçanı omuzlardan dizlere düz bir çizgi oluşana kadar kaldır.',
      'Tepede kalçanı 2 saniye sık.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Beli kavislendirmek.',
      'Dizleri dışa veya içe düşürmek.',
      'Hızlı ve sektirerek yapmak.'
    ],
    tips: [
      'Evde kalça çalışmak ve ısınmak için mükemmeldir.',
      'Tek bacakla yapmak zorluğu ciddi ölçüde artırır.'
    ],
    variations: ['hip-thrust', 'machine-hip-thrust']
  },
  {
    id: 'lying-leg-curl', name: 'Lying Leg Curl', nameTr: 'Yüzüstü Leg Curl',
    group: 'glutes-hams', primary: ['hamstrings'], secondary: ['calves'],
    equipment: 'machine', machineId: 'lying-leg-curl', mechanic: 'isolation', difficulty: 1,
    setup: 'Makineye yüzüstü uzan; dizlerin pedin kenarının hemen dışında, dönme ekseniyle aynı hizada olsun. Ayak bileği pedini aşil tendonunun hemen üstüne ayarla.',
    steps: [
      'Tutamakları kavra, kalçanı pede bastır.',
      'Topuklarını kalçana doğru çekerek pedi kaldır.',
      'Tepede hamstring’leri sık.',
      'Kontrollü şekilde, bacaklar neredeyse düzleşene kadar indir.'
    ],
    mistakes: [
      'Kalçayı pedden kaldırmak.',
      'Ağırlığı savurarak kaldırmak.',
      'Aşağıda ağırlığı düşürmek.'
    ],
    tips: [
      'Ayak parmaklarını kendine doğru çekmek (dorsifleksiyon) kalfın yardımını artırır; parmakları uzatmak hamstring’i daha çok izole eder.',
      'Oturarak leg curl ile birlikte kullanmak hamstring’i farklı açılardan çalıştırır.'
    ],
    variations: ['seated-leg-curl', 'nordic-curl']
  },
  {
    id: 'seated-leg-curl', name: 'Seated Leg Curl', nameTr: 'Oturarak Leg Curl',
    group: 'glutes-hams', primary: ['hamstrings'], secondary: ['calves'],
    equipment: 'machine', machineId: 'seated-leg-curl', mechanic: 'isolation', difficulty: 1,
    setup: 'Sırt pedini, dizlerin dönme ekseniyle hizalanacak şekilde ayarla. Ayak bileği pedini aşil tendonunun üstüne, uyluk pedini dizlerinin hemen üstüne sıkıca indir.',
    steps: [
      'Tutamakları kavra, sırtını yasla.',
      'Topuklarını aşağı ve geriye doğru çekerek pedi it.',
      'Dizler tamamen büküldüğünde hamstring’leri sık.',
      'Kontrollü şekilde başlangıca dön.'
    ],
    mistakes: [
      'Uyluk pedini gevşek bırakmak.',
      'Hızlı ve kontrolsüz dönmek.',
      'Kalçayı koltuktan kaldırmak.'
    ],
    tips: [
      'Oturma pozisyonu hamstring’i kalçadan da gerdiği için yüzüstü versiyona göre daha iyi gelişim sağlayabilir.',
      'Gövdeni hafifçe öne eğmek gerilmeyi artırır.'
    ],
    variations: ['lying-leg-curl', 'nordic-curl']
  },
  {
    id: 'nordic-curl', name: 'Nordic Hamstring Curl', nameTr: 'Nordic Curl',
    group: 'glutes-hams', primary: ['hamstrings'], secondary: ['glutes', 'calves'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 3,
    setup: 'Dizlerinin üzerine bir mindere çök. Ayak bileklerini bir sabitleyicinin (veya bir arkadaşın tutmasının) altına yerleştir. Vücudun dizlerden başa düz bir çizgi olsun.',
    steps: [
      'Kalçanı düz tutarak gövdeni yavaşça öne doğru bırak.',
      'Hamstring’lerinle bu düşüşü mümkün olduğunca yavaşlat.',
      'Daha fazla tutamadığın noktada ellerinle yere kontrollü şekilde düş.',
      'Ellerinle hafifçe iterek ve hamstring’leri kasarak başlangıç pozisyonuna dön.'
    ],
    mistakes: [
      'Kalçayı bükerek hareketi kolaylaştırmak.',
      'Isınmadan yapmak.',
      'Çok fazla tekrar yapmak — bu hareket çok yorucudur.'
    ],
    tips: [
      'Araştırmalar Nordic curl’ün hamstring sakatlık riskini belirgin şekilde azalttığını gösteriyor.',
      'Başlangıçta sadece iniş (eksantrik) kısmına odaklan; 3 × 3–6 tekrar yeterlidir.'
    ],
    variations: ['glute-ham-raise', 'lying-leg-curl']
  },
  {
    id: 'good-morning', name: 'Good Morning', nameTr: 'Good Morning',
    group: 'glutes-hams', primary: ['hamstrings', 'lower-back'], secondary: ['glutes', 'adductors'],
    equipment: 'barbell', machineId: 'power-rack', mechanic: 'compound', difficulty: 3,
    setup: 'Barı squat pozisyonundaki gibi sırtına yerleştir. Ayaklar kalça genişliğinde, dizler hafif bükük.',
    steps: [
      'Sırtını düz tutarak kalçanı geriye iterek öne eğil.',
      'Gövde yere neredeyse paralel olana ya da hamstring’lerde güçlü gerilme hissedene kadar in.',
      'Kalçanı öne sürerek dikleş.',
      'Üstte beli kavislendirme.'
    ],
    mistakes: [
      'Sırtı yuvarlamak.',
      'Ağır yükle başlamak.',
      'Dizleri fazla bükmek.'
    ],
    tips: [
      'Çok hafif ağırlıkla (hatta boş barla) başla; bu hareket kaldıraç nedeniyle bele ciddi yük bindirir.',
      'Kalça menteşesini öğrenmek için önce bir çubukla pratik yap.'
    ],
    variations: ['romanian-deadlift', 'back-extension']
  },
  {
    id: 'cable-kickback', name: 'Cable Glute Kickback', nameTr: 'Kablo ile Geriye Tekme (Kickback)',
    group: 'glutes-hams', primary: ['glutes'], secondary: ['hamstrings', 'glute-med'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 1,
    setup: 'Makarayı en alt seviyeye ayarla, ayak bileği kayışını tak. Makineye dönük dur, iki elinle tutun ve gövdeni hafifçe öne eğ.',
    steps: [
      'Kayış takılı bacağı dizin hafif bükük şekilde geriye doğru it.',
      'Bacak gövdenin gerisine geçince kalçanı sık.',
      'Beli kavislendirmeden bir an bekle.',
      'Kontrollü şekilde öne getir.'
    ],
    mistakes: [
      'Bacağı çok yükseğe kaldırıp beli kavislendirmek.',
      'Gövdeyi döndürmek.',
      'Hızla savurmak.'
    ],
    tips: [
      'Hareketin son noktasında kalçayı sıkmak, yüksekliğe ulaşmaktan daha önemlidir.',
      'Bacağı hafif çapraz dışa doğru itmek kalça yanını da çalıştırır.'
    ],
    variations: ['machine-glute-kickback', 'hip-thrust']
  },
  {
    id: 'machine-glute-kickback', name: 'Machine Glute Kickback', nameTr: 'Makinede Kalça Tekme',
    group: 'glutes-hams', primary: ['glutes'], secondary: ['hamstrings'],
    equipment: 'machine', machineId: 'glute-kickback-machine', mechanic: 'isolation', difficulty: 1,
    setup: 'Göğüs/kol pedlerine yaslan, çalışan ayağını ayak platformuna yerleştir. Destek bacağın hafif bükük olsun.',
    steps: [
      'Karnını sık, sırtını düz tut.',
      'Topuğunla platformu geriye ve yukarı it.',
      'Kalça tamamen açılınca 1 saniye sık.',
      'Kontrollü şekilde geri dön.'
    ],
    mistakes: [
      'Beli kavislendirmek.',
      'Platformu çok yükseğe itmek.',
      'Momentumla çalışmak.'
    ],
    tips: [
      'Tek taraflı çalıştığı için kalçadaki güç farklarını gidermeye yardımcı olur.',
      'Orta tempoda 10–15 tekrar idealdir.'
    ],
    variations: ['cable-kickback', 'machine-hip-thrust']
  },
  {
    id: 'hip-abduction', name: 'Hip Abduction Machine', nameTr: 'Dış Kalça Makinesi (Abductor)',
    group: 'glutes-hams', primary: ['glute-med'], secondary: ['glutes'],
    equipment: 'machine', machineId: 'hip-abductor', mechanic: 'isolation', difficulty: 1,
    setup: 'Makineye otur, dizlerinin dış kısmını pedlere yerleştir. Bacaklar kapalı pozisyonda başlasın.',
    steps: [
      'Sırtını yasla, tutamakları kavra.',
      'Dizlerinle pedleri dışa doğru it.',
      'Açık pozisyonda 1 saniye sık.',
      'Kontrollü şekilde kapat.'
    ],
    mistakes: [
      'Pedleri hızla çarptırmak.',
      'Kalçayı koltuktan kaldırmak.',
      'Çok kısa hareket açıklığıyla ağır yüklenmek.'
    ],
    tips: [
      'Gövdeyi öne eğmek gluteus maximus’un üst kısmını, dik oturmak gluteus medius’u daha çok çalıştırır.',
      'Diz ve kalça sağlığı için kalça yanını güçlendirmek önemlidir.'
    ],
    variations: ['hip-adduction', 'cable-kickback']
  },
  {
    id: 'glute-ham-raise', name: 'Glute-Ham Raise', nameTr: 'Glute-Ham Raise (GHR)',
    group: 'glutes-hams', primary: ['hamstrings', 'glutes'], secondary: ['calves', 'lower-back'],
    equipment: 'machine', machineId: 'ghd', mechanic: 'compound', difficulty: 3,
    setup: 'GHD makinesinde ayaklarını sabitleyicilerin arasına yerleştir; dizlerin pedin hemen arkasında olsun. Gövdeni yere paralel olacak şekilde öne uzat.',
    steps: [
      'Kalçanı sıkarak gövdeni düz tut.',
      'Ayak parmaklarınla platforma bas ve hamstring’lerinle dizlerini bükerek gövdeni dik konuma kaldır.',
      'Dikleşince bir an dur.',
      'Kontrollü şekilde yere paralel konuma geri in.'
    ],
    mistakes: [
      'Kalçayı bükmek.',
      'Makineyi yanlış ayarlamak.',
      'Kollarla itmeye çalışmak.'
    ],
    tips: [
      'Hamstring’i hem diz hem kalça fonksiyonunda çalıştıran en etkili hareketlerden biridir.',
      'Başlangıçta ellerini bir bantla destekleyebilirsin.'
    ],
    variations: ['nordic-curl', 'back-extension']
  },
  {
    id: 'single-leg-rdl', name: 'Single-Leg Romanian Deadlift', nameTr: 'Tek Bacak Romen Deadlift',
    group: 'glutes-hams', primary: ['hamstrings', 'glutes'], secondary: ['glute-med', 'lower-back', 'abs'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Bir dambılı, çalışan bacağın karşı tarafındaki elinde tut. Tek bacak üzerinde dur, diz hafif bükük.',
    steps: [
      'Kalçadan menteşelenerek öne eğil; boştaki bacak geriye doğru uzansın.',
      'Gövde ve arka bacak düz bir çizgi oluştursun.',
      'Hamstring’de gerilme hissedince dur.',
      'Kalçanı sıkarak dikleş.'
    ],
    mistakes: [
      'Kalçayı yana açmak (pelvis dönmesi).',
      'Sırtı yuvarlamak.',
      'Hızla yapıp dengeyi kaybetmek.'
    ],
    tips: [
      'Denge ve kalça yanı kaslarını da çalıştırır.',
      'Dengeyi kurmak için bir elinle duvara dokunabilirsin.'
    ],
    variations: ['romanian-deadlift']
  },
  {
    id: 'cable-pull-through', name: 'Cable Pull-Through', nameTr: 'Kablo Pull-Through',
    group: 'glutes-hams', primary: ['glutes', 'hamstrings'], secondary: ['lower-back'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'compound', difficulty: 1,
    setup: 'Makarayı en alt seviyeye ayarla, halat tak. Makaraya sırtını dön; halatı bacaklarının arasından iki elinle kavra ve iki adım öne çık.',
    steps: [
      'Kalçanı geriye iterek öne eğil; halat bacaklarının arasından geriye gitsin.',
      'Hamstring’lerde gerilme hissedince dur.',
      'Kalçanı öne sürerek dikleş ve üstte kalçanı sık.',
      'Kollar sadece halatı tutar; çekişi kalçayla yap.'
    ],
    mistakes: [
      'Kollarla çekmek.',
      'Squat’a dönüştürmek.',
      'Üstte geriye yaslanmak.'
    ],
    tips: [
      'Kalça menteşesi (hip hinge) hareketini öğrenmek için güvenli bir yöntemdir.',
      'Bele çok az yük bindirir.'
    ],
    variations: ['hip-thrust', 'romanian-deadlift', 'kettlebell-swing']
  },

  // ---------------- Kalf ----------------
  {
    id: 'standing-calf-raise', name: 'Standing Calf Raise', nameTr: 'Ayakta Kalf Kaldırma',
    group: 'calves', primary: ['calves'], secondary: [],
    equipment: 'machine', machineId: 'standing-calf', mechanic: 'isolation', difficulty: 1,
    setup: 'Omuz pedlerinin altına gir, ayak parmaklarının ön kısmıyla platformun kenarına bas. Topukların boşta kalsın, dizler düz ama kilitli değil.',
    steps: [
      'Topuklarını platformun altına doğru, kalfta güçlü bir gerilme hissedene kadar indir.',
      'Altta 1 saniye bekle.',
      'Parmak uçlarına olabildiğince yükseğe kalk.',
      'Tepede 1 saniye sık ve kontrollü indir.'
    ],
    mistakes: [
      'Sektirerek hızlı yapmak.',
      'Dizleri bükerek bacakla itmek.',
      'Kısa hareket açıklığıyla çalışmak.'
    ],
    tips: [
      'Düz diz, kalfın en büyük kası gastrocnemius’u öne çıkarır.',
      'Aşil tendonu sektirmeyle enerji depolar; beklemeler kası daha çok çalışmaya zorlar.'
    ],
    variations: ['seated-calf-raise', 'single-leg-calf-raise', 'leg-press-calf-raise']
  },
  {
    id: 'seated-calf-raise', name: 'Seated Calf Raise', nameTr: 'Oturarak Kalf Kaldırma',
    group: 'calves', primary: ['calves'], secondary: [],
    equipment: 'machine', machineId: 'seated-calf', mechanic: 'isolation', difficulty: 1,
    setup: 'Makineye otur, ayak parmaklarının ön kısmını platforma koy ve diz pedini uyluklarının alt kısmına sıkıca indir.',
    steps: [
      'Emniyet kolunu aç.',
      'Topuklarını olabildiğince aşağı indir.',
      'Parmak uçlarına kalk ve tepede sık.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Sektirmek.',
      'Pedi gevşek bırakmak.',
      'Hareket açıklığını kısaltmak.'
    ],
    tips: [
      'Bükük diz gastrocnemius’u gevşettiği için yükü alttaki soleus kasına kaydırır.',
      'Ayakta kalf ile birlikte yapmak kalfın iki kasını da çalıştırır.'
    ],
    variations: ['standing-calf-raise']
  },
  {
    id: 'leg-press-calf-raise', name: 'Leg Press Calf Raise', nameTr: 'Leg Press’te Kalf İtme',
    group: 'calves', primary: ['calves'], secondary: [],
    equipment: 'machine', machineId: 'leg-press', mechanic: 'isolation', difficulty: 1,
    setup: 'Leg press makinesine otur, ayak parmaklarının ön kısmını platformun alt kenarına koy. Dizlerin düz ama kilitli olmasın; hafif bir ağırlıkla başla.',
    steps: [
      'Topuklarını kendine doğru bırakarak kalfı gerdir.',
      'Parmak uçlarınla platformu it.',
      'Tepede sık.',
      'Kontrollü şekilde geri dön.'
    ],
    mistakes: [
      'Ayakların platformdan kayması — ciddi sakatlık riski.',
      'Dizleri bükmek.',
      'Çok ağır ve hızlı çalışmak.'
    ],
    tips: [
      'Ayakta kalf makinesi yoksa iyi bir alternatiftir.',
      'Ayakkabı tabanının kaymaz olduğundan emin ol.'
    ],
    variations: ['standing-calf-raise', 'seated-calf-raise']
  },
  {
    id: 'single-leg-calf-raise', name: 'Single-Leg Calf Raise', nameTr: 'Tek Bacak Kalf Kaldırma',
    group: 'calves', primary: ['calves'], secondary: [],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Bir basamağın kenarında tek ayak üzerinde dur; topuğun boşta olsun. Dengen için duvara tutun, istersen boştaki elinde dambıl tut.',
    steps: [
      'Topuğunu basamağın altına indir.',
      'Parmak ucuna olabildiğince yükseğe kalk.',
      'Tepede 1 saniye bekle.',
      'Yavaşça indir.'
    ],
    mistakes: [
      'Dizi bükerek yardım almak.',
      'Sektirmek.',
      'Dengeyi kaybetmemek için yarım tekrar yapmak.'
    ],
    tips: [
      'Evde kalf çalışmanın en etkili yoludur.',
      'Her iki bacağı ayrı çalıştığı için güç farkını dengeler.'
    ],
    variations: ['standing-calf-raise', 'smith-calf-raise']
  },
  {
    id: 'smith-calf-raise', name: 'Smith Machine Calf Raise', nameTr: 'Smith Makinede Kalf Kaldırma',
    group: 'calves', primary: ['calves'], secondary: [],
    equipment: 'smith', machineId: 'smith-machine', mechanic: 'isolation', difficulty: 1,
    setup: 'Smith barının altına bir step veya plaka koy. Barı omuzlarına yerleştir, parmak uçlarınla stepe bas.',
    steps: [
      'Barı kancalardan kurtar.',
      'Topuklarını aşağı indirip kalfı gerdir.',
      'Parmak uçlarına kalk ve sık.',
      'Seti bitirince barı kancalara as.'
    ],
    mistakes: [
      'Step’in kaymasına izin vermek.',
      'Sektirmek.',
      'Dizleri bükmek.'
    ],
    tips: [
      'Denge gerektirmediği için ağır yüklenebilirsin.',
      'Ayakta kalf makinesi doluysa iyi bir alternatiftir.'
    ],
    variations: ['standing-calf-raise', 'single-leg-calf-raise']
  }
);

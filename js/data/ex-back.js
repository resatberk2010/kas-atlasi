/* Sırt ve trapez hareketleri */
FIT.exercises.push(
  {
    id: 'pull-up', name: 'Pull-Up', nameTr: 'Barfiks (Geniş Tutuş)', aka: 'barfiks',
    group: 'back', primary: ['lats'], secondary: ['mid-back', 'biceps', 'rear-delt', 'forearms', 'abs'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 3,
    setup: 'Barı avuç içleri öne bakacak şekilde, omuz genişliğinden biraz geniş kavra. Kolların tam düz şekilde asıl, bacaklarını hafifçe çaprazlayabilirsin.',
    steps: [
      'Omuzlarını kulaklarından uzaklaştırarak (kürek kemiklerini aşağı çekerek) harekete başla.',
      'Dirseklerini aşağı ve kaburgalarına doğru sürerek kendini yukarı çek.',
      'Çenen barın üzerine çıkana kadar devam et; göğsünü bara doğru yönelt.',
      'Kontrollü şekilde, kolların tamamen düzleşene kadar aşağı in.'
    ],
    breathing: 'Aşağıda nefes al, yukarı çekerken nefes ver.',
    mistakes: [
      'Bacakları sallayarak momentumla çıkmak (kipping).',
      'Yarım tekrar yapmak; aşağıda kolları tam açmamak.',
      'Çeneyi bara ulaştırmak için boynu öne uzatmak.'
    ],
    tips: [
      'Tek tekrar bile yapamıyorsan asistli barfiks makinesi, direnç bandı ya da sadece aşağı iniş (negatif) tekrarlarıyla başla.',
      'Barı “kırmaya” çalışır gibi sıkı kavramak sırt kaslarının devreye girmesine yardım eder.'
    ],
    variations: ['chin-up', 'assisted-pull-up', 'lat-pulldown']
  },
  {
    id: 'chin-up', name: 'Chin-Up', nameTr: 'Ters Tutuş Barfiks',
    group: 'back', primary: ['lats', 'biceps'], secondary: ['mid-back', 'forearms', 'abs'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Barı avuç içleri sana bakacak şekilde, omuz genişliğinde kavra ve kollar düz asıl.',
    steps: [
      'Kürek kemiklerini aşağı çekerek başla.',
      'Dirseklerini gövdenin önünden aşağı sürerek kendini yukarı çek.',
      'Çenen barın üzerine geçince bir an dur.',
      'Kontrollü şekilde tam aşağı in.'
    ],
    mistakes: [
      'Dirsekleri kilitlenmiş gibi aşağıda sertçe bırakmak — dirsek tendonlarını zorlar.',
      'Gövdeyi geriye atarak çekmek.',
      'Omuzları kulaklara doğru kaldırmak.'
    ],
    tips: [
      'Biceps daha fazla çalıştığı için çoğu kişi chin-up’ta pull-up’tan daha fazla tekrar yapar.',
      'Barfiks öğrenmek için iyi bir başlangıç noktasıdır.'
    ],
    variations: ['pull-up', 'close-grip-pulldown', 'assisted-pull-up']
  },
  {
    id: 'assisted-pull-up', name: 'Assisted Pull-Up', nameTr: 'Asistli Barfiks',
    group: 'back', primary: ['lats'], secondary: ['mid-back', 'biceps', 'rear-delt'],
    equipment: 'machine', machineId: 'assisted-pullup-dip', mechanic: 'compound', difficulty: 1,
    setup: 'Makinede yardım ağırlığını seç (seçilen ağırlık ne kadar fazlaysa o kadar kolaylaşır). Dizlerini veya ayaklarını platforma koy ve üstteki tutamakları kavra.',
    steps: [
      'Kollar düz şekilde başla, omuzlarını aşağı çek.',
      'Dirseklerini kaburgalarına doğru sürerek kendini yukarı çek.',
      'Çenen tutamak hizasını geçince bir an dur.',
      'Platformu kontrol ederek yavaşça aşağı in.'
    ],
    mistakes: [
      'Platforma bir anda basıp sert iniş yapmak.',
      'Hep aynı yardım ağırlığında kalmak.',
      'Yarım tekrar yapmak.'
    ],
    tips: [
      'Her hafta yardım ağırlığını biraz azaltmayı hedefle; sıfıra indiğinde gerçek barfikse geçebilirsin.',
      'Aynı makinede tutamakları değiştirerek asistli dips de yapabilirsin.'
    ],
    variations: ['pull-up', 'lat-pulldown']
  },
  {
    id: 'lat-pulldown', name: 'Lat Pulldown', nameTr: 'Önden Lat Çekiş',
    group: 'back', primary: ['lats'], secondary: ['mid-back', 'biceps', 'rear-delt'],
    equipment: 'machine', machineId: 'lat-pulldown', mechanic: 'compound', difficulty: 1,
    setup: 'Diz pedini, uyluklarını sıkıca sabitleyecek şekilde ayarla. Barı omuz genişliğinden biraz geniş, avuç içleri öne bakacak şekilde kavra ve otur.',
    steps: [
      'Gövdeni 10–20° geriye yasla, göğsünü kabart.',
      'Önce omuzlarını aşağı çek, ardından dirseklerini aşağı ve arkaya sürerek barı üst göğsüne çek.',
      'Bar köprücük kemiği hizasına gelince kürek kemiklerini sık.',
      'Kolların tamamen uzayana kadar barı kontrollü şekilde yukarı bırak.'
    ],
    mistakes: [
      'Barı ense arkasına çekmek — omuz eklemini riskli bir pozisyona sokar.',
      'Gövdeyi çok geriye atıp hareketi kürek çekişine çevirmek.',
      'Kollarla çekip sırtı devreye sokmamak.'
    ],
    tips: [
      'Elleri kanca gibi düşün; çekişi dirseklerle başlatmak sırt kaslarını daha çok çalıştırır.',
      'Başparmağı barın üstüne koymak (başparmaksız tutuş) bazı kişilerde biceps katılımını azaltır.'
    ],
    variations: ['close-grip-pulldown', 'pull-up', 'straight-arm-pulldown']
  },
  {
    id: 'close-grip-pulldown', name: 'Close-Grip Pulldown', nameTr: 'Dar Tutuş (V Bar) Lat Çekiş',
    group: 'back', primary: ['lats'], secondary: ['mid-back', 'biceps'],
    equipment: 'machine', machineId: 'lat-pulldown', mechanic: 'compound', difficulty: 1,
    setup: 'Lat pulldown makinesine V (üçgen) tutamak tak. Avuç içleri birbirine bakacak şekilde kavra ve diz pedinin altına otur.',
    steps: [
      'Göğsünü kabart, gövdeni hafifçe geriye yasla.',
      'Dirseklerini gövdene yakın tutarak tutamağı üst göğsüne çek.',
      'Altta kanat kaslarını sık.',
      'Kolların tam uzayana kadar kontrollü şekilde bırak.'
    ],
    mistakes: [
      'Omuzları öne yuvarlamak.',
      'Gövdeyle sallanarak çekmek.',
      'Hareketin üst kısmını kısaltmak.'
    ],
    tips: [
      'Dar ve nötr tutuş daha uzun hareket açıklığı sağlar, kanadın alt kısmında güçlü bir kasılma hissettirir.',
      'Tek kollu kablo pulldown ile iki tarafı ayrı ayrı çalışabilirsin.'
    ],
    variations: ['lat-pulldown', 'chin-up']
  },
  {
    id: 'straight-arm-pulldown', name: 'Straight-Arm Pulldown', nameTr: 'Düz Kol Kablo Çekiş',
    group: 'back', primary: ['lats'], secondary: ['triceps', 'abs'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 2,
    setup: 'Makarayı en üst seviyeye ayarla, düz bar veya halat tak. Bir adım geri çekil, kalçadan hafifçe öne eğil; kollar önde neredeyse düz olsun.',
    steps: [
      'Dirsekleri sabit ve hafif bükük tutarak barı bir yay çizerek uyluklarına doğru it.',
      'Bar uyluklarına yaklaşınca kanat kaslarını sık.',
      'Kontrollü şekilde, kanatlarda gerilme hissedene kadar kolları yukarı bırak.',
      'Gövde açını hareket boyunca sabit tut.'
    ],
    mistakes: [
      'Dirsekleri bükerek hareketi triceps pushdown’a çevirmek.',
      'Gövdeyi yukarı-aşağı sallamak.',
      'Omuzları kulaklara doğru kaldırmak.'
    ],
    tips: [
      'Biceps’i neredeyse devreden çıkardığı için kanat kaslarını “hissetmeyi” öğrenmek için mükemmeldir.',
      'Çekişlerden önce ısınma/aktivasyon hareketi olarak da kullanılabilir.'
    ],
    variations: ['machine-pullover', 'dumbbell-pullover', 'lat-pulldown']
  },
  {
    id: 'machine-pullover', name: 'Machine Pullover', nameTr: 'Pullover Makinesi',
    group: 'back', primary: ['lats'], secondary: ['chest', 'triceps', 'abs'],
    equipment: 'machine', machineId: 'pullover-machine', mechanic: 'isolation', difficulty: 1,
    setup: 'Koltuğu, omuz eklemin makinenin dönme ekseniyle aynı hizaya gelecek şekilde ayarla. Emniyet kemerini tak, dirseklerini kol pedlerine yerleştir.',
    steps: [
      'Başının arkasında, kanatlarında gerilme hissedecek şekilde başla.',
      'Dirseklerinle pedleri öne ve aşağı doğru, bir yay çizerek it.',
      'Kollar gövdenin önüne/yanına gelince kanatları sık.',
      'Kontrollü şekilde geri dön.'
    ],
    mistakes: [
      'Koltuk yüksekliğini ayarlamadan çalışmak; hareket omuzları zorlar.',
      'Ellerle tutamakları çekip biceps’i devreye sokmak.',
      'Aşağıda ağırlığı çarptırmak.'
    ],
    tips: [
      'Eller sadece rehberdir; itişi dirseklerle yap.',
      'Kanat kaslarını çekişlerden önce yormak için “ön yorgunluk” hareketi olarak kullanılabilir.'
    ],
    variations: ['straight-arm-pulldown', 'dumbbell-pullover']
  },
  {
    id: 'barbell-row', name: 'Barbell Row', nameTr: 'Barbell ile Eğilerek Kürek Çekiş',
    group: 'back', primary: ['lats', 'mid-back'], secondary: ['rear-delt', 'biceps', 'lower-back', 'hamstrings', 'forearms'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Ayaklar kalça genişliğinde, barı omuz genişliğinde kavra. Dizleri hafif bük, kalçadan geriye menteşelenerek gövdeni 30–45° öne eğ. Sırt düz, bar dizlerin hizasında sarkık dursun.',
    steps: [
      'Karnını sık ve omurganı nötr pozisyonda kilitle.',
      'Dirseklerini arkaya ve yukarı sürerek barı göbek ile alt göğüs arasına çek.',
      'Üstte kürek kemiklerini birbirine sıkıştır.',
      'Barı kolların düzleşene kadar kontrollü indir; gövde açını değiştirme.'
    ],
    breathing: 'Çekmeden önce nefes al ve karnı sıkı tut, bar göğse değince nefes ver.',
    mistakes: [
      'Beli yuvarlamak — bel omurlarına ciddi yük bindirir.',
      'Her tekrarda gövdeyi kaldırarak momentum kullanmak.',
      'Barı göğüs yerine boyna doğru çekmek.'
    ],
    tips: [
      'Dirsekleri gövdeye yakın tutmak kanadı, daha açık tutmak orta sırtı ve arka omzu öne çıkarır.',
      'Belinde hassasiyet varsa chest-supported row veya kablolu kürek daha güvenli alternatiflerdir.'
    ],
    variations: ['pendlay-row', 'dumbbell-row', 't-bar-row', 'chest-supported-row']
  },
  {
    id: 'pendlay-row', name: 'Pendlay Row', nameTr: 'Pendlay Kürek Çekiş',
    group: 'back', primary: ['mid-back', 'lats'], secondary: ['rear-delt', 'lower-back', 'biceps', 'hamstrings'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 3,
    setup: 'Bar yerde dururken deadlift duruşunda eğil; gövden yere neredeyse paralel olsun. Barı omuz genişliğinden biraz geniş kavra.',
    steps: [
      'Sırtını düz ve sabit tutarak barı yerden patlayıcı şekilde alt göğsüne çek.',
      'Kürek kemiklerini sık.',
      'Barı kontrollü şekilde yere geri koy ve tamamen durdur.',
      'Her tekrara yerden, sıfırdan başla.'
    ],
    mistakes: [
      'Gövdeyi yukarı kaldırıp hareketi normal kürek çekişine çevirmek.',
      'Sırtı yuvarlamak.',
      'Barı yere sektirmek.'
    ],
    tips: [
      'Her tekrarın yerden başlaması patlayıcı gücü geliştirir ve bel için dinlenme anı yaratır.',
      'Hamstring esnekliğin yeterli değilse barı bir basamağın üzerine koyarak başla.'
    ],
    variations: ['barbell-row', 't-bar-row']
  },
  {
    id: 'dumbbell-row', name: 'One-Arm Dumbbell Row', nameTr: 'Tek Kol Dambıl Kürek Çekiş',
    group: 'back', primary: ['lats', 'mid-back'], secondary: ['rear-delt', 'biceps', 'forearms'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Bir el ve aynı taraftaki diz düz bir sehpaya dayansın; diğer ayak yerde. Sırtın yere paralel ve düz olsun. Boştaki elinle dambılı kavra, kol aşağı sarksın.',
    steps: [
      'Omzunu hafifçe aşağı çek.',
      'Dirseğini arkaya ve kalçana doğru sürerek dambılı kaburga hizasına çek.',
      'Üstte kanat kasını sık ve bir an bekle.',
      'Kolun tam uzayana kadar dambılı kontrollü indir; aşağıda omzun hafifçe öne esneyebilir.'
    ],
    mistakes: [
      'Gövdeyi döndürerek ağırlığı kaldırmak.',
      'Dambılı göğse değil omuza doğru çekmek.',
      'Sırtı yuvarlamak.'
    ],
    tips: [
      'Dirseği kalçaya doğru bir yay çizerek çekmek kanadı, dışa açık çekmek orta sırtı hedefler.',
      'Tek taraflı çalıştığı için sağ-sol dengesizliğini gidermeye yardım eder.'
    ],
    variations: ['barbell-row', 'seated-cable-row', 'chest-supported-row']
  },
  {
    id: 't-bar-row', name: 'T-Bar Row', nameTr: 'T-Bar Kürek Çekiş',
    group: 'back', primary: ['mid-back', 'lats'], secondary: ['rear-delt', 'biceps', 'lower-back'],
    equipment: 'machine', machineId: 't-bar-row', mechanic: 'compound', difficulty: 2,
    setup: 'Makinede göğüs desteği varsa göğsünü pede yasla; yoksa ayak platformuna basıp barı iki yanından saracak şekilde eğil. Tutamakları kavra.',
    steps: [
      'Sırtı düz tutarak ağırlığı kaldır ve kolların düz başla.',
      'Dirseklerini arkaya sürerek tutamakları göğsüne doğru çek.',
      'Üstte kürek kemiklerini sık.',
      'Kontrollü şekilde kollar düzleşene kadar indir.'
    ],
    mistakes: [
      'Göğüs desteksiz versiyonda beli yuvarlamak.',
      'Aşırı ağırlıkla yarım tekrar yapmak.',
      'Omuzları kulaklara doğru silkmek.'
    ],
    tips: [
      'Geniş tutamak orta sırt ve arka omzu, dar tutamak kanadı öne çıkarır.',
      'Göğüs destekli versiyon bele binen yükü neredeyse sıfırlar.'
    ],
    variations: ['barbell-row', 'chest-supported-row']
  },
  {
    id: 'seated-cable-row', name: 'Seated Cable Row', nameTr: 'Oturarak Kablo Kürek Çekiş',
    group: 'back', primary: ['mid-back', 'lats'], secondary: ['rear-delt', 'biceps', 'lower-back'],
    equipment: 'cable', machineId: 'seated-row', mechanic: 'compound', difficulty: 1,
    setup: 'Makineye otur, ayaklarını platforma koy ve dizlerini hafifçe bük. V tutamağı kavrayıp gövdeni dik konuma getir; kollar önde düz olsun.',
    steps: [
      'Göğsünü kabart, omuzlarını aşağıda tut.',
      'Dirseklerini gövdene yakın şekilde arkaya çekerek tutamağı göbek hizasına getir.',
      'Kürek kemiklerini birbirine sık ve bir an bekle.',
      'Kolları kontrollü şekilde öne uzat; omuzlarının hafifçe öne esnemesine izin ver.'
    ],
    mistakes: [
      'Gövdeyi ileri geri sallayarak kürek çeker gibi momentum kullanmak.',
      'Beli yuvarlayarak öne uzanmak.',
      'Omuzları kulaklara kaldırmak.'
    ],
    tips: [
      'Geniş bar ile dirsekler dışa açık çekersen orta sırt ve arka omuz daha çok çalışır.',
      'Gövdeyi sabit tutmak için hareketi bir aynaya yandan bakarak kontrol et.'
    ],
    variations: ['dumbbell-row', 'chest-supported-row', 'face-pull']
  },
  {
    id: 'chest-supported-row', name: 'Chest-Supported Row', nameTr: 'Göğüs Destekli Kürek Çekiş',
    group: 'back', primary: ['mid-back', 'lats'], secondary: ['rear-delt', 'biceps'],
    equipment: 'machine', machineId: 'chest-supported-row', mechanic: 'compound', difficulty: 1,
    setup: 'Koltuğu, göğsün pede yaslandığında tutamaklara kollarını tam uzatarak ulaşabileceğin yüksekliğe ayarla. Göğsünü pede daya.',
    steps: [
      'Tutamakları kavra, omuzlarını aşağı çek.',
      'Dirseklerini arkaya sürerek tutamakları gövdene doğru çek.',
      'Kürek kemiklerini sık ve 1 saniye bekle.',
      'Kontrollü şekilde kolları uzat.'
    ],
    mistakes: [
      'Göğsü pedden kaldırıp gövdeyle çekmek.',
      'Omuzları öne yuvarlamak.',
      'Tutamakları çok sıkı kavrayıp ön kolla çekmek.'
    ],
    tips: [
      'Bele yük binmediği için sırt antrenmanında ağır ve güvenli çalışmak için idealdir.',
      'Aynı hareketi eğimli bir sehpaya yüzüstü uzanıp dambılla da yapabilirsin.'
    ],
    variations: ['t-bar-row', 'seated-cable-row', 'dumbbell-row']
  },
  {
    id: 'inverted-row', name: 'Inverted Row', nameTr: 'Ters Kürek (Vücut Ağırlığı)',
    group: 'back', primary: ['mid-back', 'lats'], secondary: ['rear-delt', 'biceps', 'abs'],
    equipment: 'bodyweight', machineId: 'power-rack', mechanic: 'compound', difficulty: 1,
    setup: 'Bir barı kafeste bel hizasına sabitle. Barın altına uzan ve omuz genişliğinde kavra; topuklar yerde, vücudun düz bir çizgi oluştursun.',
    steps: [
      'Kalçanı ve karnını sıkarak vücudunu tek parça tut.',
      'Dirseklerini arkaya sürerek göğsünü bara çek.',
      'Kürek kemiklerini sık.',
      'Kolların düzleşene kadar kontrollü in.'
    ],
    mistakes: [
      'Kalçanın aşağı sarkması.',
      'Sadece başı bara uzatmak.',
      'Aşağıda omuzları tamamen gevşek bırakmak.'
    ],
    tips: [
      'Bar yükseldikçe ve dizler büküldükçe hareket kolaylaşır; zorlaştırmak için ayakları yükselt.',
      'Barfiks çalışmaya hazırlık için iyi bir harekettir.'
    ],
    variations: ['seated-cable-row', 'pull-up']
  },
  {
    id: 'deadlift', name: 'Conventional Deadlift', nameTr: 'Deadlift (Ölü Kaldırış)',
    group: 'back', primary: ['glutes', 'hamstrings', 'lower-back'], secondary: ['quads', 'traps', 'lats', 'forearms', 'adductors'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 3,
    setup: 'Ayaklar kalça genişliğinde, bar ayağının orta noktasının üzerinde olsun. Kalçadan eğilip barı bacaklarının hemen dışından kavra. Kalçanı indir, göğsünü kaldır, sırtını düzle; kaval kemiklerin bara değsin.',
    steps: [
      'Derin nefes al, karnını sık ve kanat kaslarını aktif et (“barı bacaklarına doğru bük”).',
      'Bacaklarınla yeri iterek barı kaldırmaya başla; bar bacaklarına temas ederek yükselsin.',
      'Bar dizini geçince kalçanı öne sürerek tamamen dikleş.',
      'Üstte beli geriye kavislendirmeden dur.',
      'Barı kalçadan geriye menteşelenerek indir; dizi geçince dizlerini bükerek yere koy.'
    ],
    breathing: 'Her tekrardan önce derin nefes alıp karnı sıkı tut (bracing); kilitlemeden sonra nefes ver.',
    mistakes: [
      'Sırtı yuvarlamak — deadlift’te en sık yapılan ve en riskli hata.',
      'Barı vücuttan uzakta kaldırmak.',
      'Kalçayı çok erken kaldırıp hareketi düz bacak deadlift’e çevirmek.',
      'Üstte geriye yaslanıp beli aşırı kavislendirmek.'
    ],
    tips: [
      'Hafif ağırlıkla tekniği oturtmadan ağırlık artırma; mümkünse ilk seanslarda bir antrenörden destek al.',
      'Tutuş gücü yetmiyorsa ters tutuş (bir el önde bir el arkada) veya kayış kullanabilirsin.',
      'Düz tabanlı ayakkabı ya da çıplak ayak daha dengeli bir itiş sağlar.'
    ],
    variations: ['sumo-deadlift', 'romanian-deadlift', 'rack-pull']
  },
  {
    id: 'rack-pull', name: 'Rack Pull', nameTr: 'Kafeste Kısmi Deadlift',
    group: 'back', primary: ['lower-back', 'traps', 'glutes'], secondary: ['hamstrings', 'lats', 'forearms'],
    equipment: 'barbell', machineId: 'power-rack', mechanic: 'compound', difficulty: 2,
    setup: 'Kafesin güvenlik barlarını diz hizasının hemen altına ya da üstüne ayarla ve barı üzerine koy. Deadlift duruşunda barı kavra.',
    steps: [
      'Sırtını düzle, karnını sık.',
      'Kalçanı öne sürerek barı kaldır ve tamamen dikleş.',
      'Üstte omuzlarını geriye al, trapezini sık.',
      'Barı kontrollü şekilde güvenlik barlarına geri indir.'
    ],
    mistakes: [
      'Çok ağır yükle sırtı yuvarlamak.',
      'Üstte geriye yaslanmak.',
      'Barı güvenlik barlarına sertçe bırakmak.'
    ],
    tips: [
      'Deadlift’in kilitleme bölümünü güçlendirmek ve sırt kalınlığı için kullanılır.',
      'Hareket açıklığı kısa olduğu için normal deadlift’ten daha ağır çalışılabilir; tekniği bozma.'
    ],
    variations: ['deadlift', 'barbell-shrug']
  },
  {
    id: 'back-extension', name: 'Back Extension', nameTr: 'Hiperekstansiyon (Bel Açma)',
    group: 'back', primary: ['lower-back'], secondary: ['glutes', 'hamstrings'],
    equipment: 'bodyweight', machineId: 'back-extension', mechanic: 'isolation', difficulty: 1,
    setup: 'Roman chair / 45° sehpada ped, kalça kemiğinin hemen altında kalacak şekilde ayarla. Ayaklarını sabitleyicilerin altına yerleştir, kollarını göğsünde çapraz yap.',
    steps: [
      'Sırtını düz tutarak kalçadan öne doğru eğil.',
      'Hamstring’lerinde gerilme hissedince dur.',
      'Bel ve kalça kaslarınla gövdeni, vücudun düz bir çizgi oluşturana kadar kaldır.',
      'Üstte beli aşırı geriye bükmeden dur ve tekrarla.'
    ],
    mistakes: [
      'Üstte beli aşırı kavislendirmek (hiperekstansiyon).',
      'Hızlı ve sallanarak yapmak.',
      'Pedi çok yükseğe ayarlayıp hareketi kısıtlamak.'
    ],
    tips: [
      'Sırtı hafifçe yuvarlayıp kalçayı sıkarak yaparsan kalça kasları daha çok çalışır.',
      'Kolaylaştığında göğsünde bir plaka tutarak zorlaştır.'
    ],
    variations: ['good-morning', 'glute-ham-raise']
  },
  {
    id: 'barbell-shrug', name: 'Barbell Shrug', nameTr: 'Barbell ile Omuz Silkme',
    group: 'back', primary: ['traps'], secondary: ['forearms'],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dik dur, barı omuz genişliğinde, avuç içleri sana bakacak şekilde kavra; bar uyluklarının önünde dursun.',
    steps: [
      'Kolları düz tutarak omuzlarını kulaklarına doğru dik bir çizgide yukarı kaldır.',
      'Tepede trapezlerini 1–2 saniye sık.',
      'Omuzlarını kontrollü şekilde tamamen aşağı indir.',
      'Tekrarla.'
    ],
    mistakes: [
      'Omuzları daire çizerek döndürmek — gereksizdir ve eklemi zorlar.',
      'Dirsekleri bükerek kollarla çekmek.',
      'Başı öne uzatmak.'
    ],
    tips: [
      'Tepede beklemek ağırlıktan daha önemlidir.',
      'Tutuş zorlanıyorsa kayış kullanabilirsin.'
    ],
    variations: ['dumbbell-shrug', 'farmers-walk', 'rack-pull']
  },
  {
    id: 'dumbbell-shrug', name: 'Dumbbell Shrug', nameTr: 'Dambıl ile Omuz Silkme',
    group: 'back', primary: ['traps'], secondary: ['forearms'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dik dur, iki elinde dambıllar yanlarında, avuç içleri birbirine baksın.',
    steps: [
      'Omuzlarını kulaklarına doğru dik bir şekilde kaldır.',
      'Tepede 1–2 saniye sık.',
      'Kontrollü şekilde tamamen indir.',
      'Tekrarla.'
    ],
    mistakes: [
      'Omuzları döndürmek.',
      'Başı öne eğmek.',
      'Hızla sektirerek yapmak.'
    ],
    tips: [
      'Dambıllar yanlarda durduğu için barbell’a göre daha doğal bir hareket yolu sağlar.',
      'Gövdeni hafifçe öne eğmek orta trapezi biraz daha devreye sokar.'
    ],
    variations: ['barbell-shrug', 'farmers-walk']
  }
);

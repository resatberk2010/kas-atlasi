/* Karın & core ve tüm vücut hareketleri */
FIT.exercises.push(
  // ---------------- Karın & core ----------------
  {
    id: 'plank', name: 'Plank', nameTr: 'Plank (Dirsek Üstü Durma)',
    group: 'core', primary: ['abs'], secondary: ['obliques', 'front-delt', 'glutes', 'quads'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Ön kolların yerde, dirsekler omuzlarının tam altında olsun. Bacakları geriye uzat ve parmak uçlarında dur.',
    steps: [
      'Kalçanı ve karnını sıkarak baştan topuğa düz bir çizgi oluştur.',
      'Göbek deliğini omurgana doğru çek; kaburgaları aşağıda tut.',
      'Pozisyonu belirlediğin süre boyunca koru (20–60 saniye).',
      'Nefes almaya devam et.'
    ],
    breathing: 'Nefesini tutma; karnı sıkı tutarken kısa ve düzenli nefes al-ver.',
    mistakes: [
      'Kalçanın sarkması — bele yük biner.',
      'Kalçanın çok yukarı kalkması.',
      'Başı aşağı düşürmek veya yukarı kaldırmak.'
    ],
    tips: [
      'Uzun süre kötü formda durmak yerine kısa ama kaliteli setler yap.',
      'Dirsekleri ayak uçlarına doğru çekiyormuş gibi kasmak (RKC plank) zorluğu ciddi ölçüde artırır.'
    ],
    variations: ['side-plank', 'dead-bug', 'ab-wheel-rollout']
  },
  {
    id: 'side-plank', name: 'Side Plank', nameTr: 'Yan Plank',
    group: 'core', primary: ['obliques'], secondary: ['abs', 'glute-med'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Yan yat, dirseğini omzunun altına koy. Bacaklar düz ve üst üste olsun.',
    steps: [
      'Kalçanı yerden kaldırarak baştan ayağa düz bir çizgi oluştur.',
      'Üstteki eli beline veya tavana doğru uzat.',
      'Pozisyonu koru (15–45 saniye).',
      'Diğer tarafa geç.'
    ],
    mistakes: [
      'Kalçanın aşağı sarkması.',
      'Gövdeyi öne veya arkaya döndürmek.',
      'Omzun kulağa doğru çökmesi.'
    ],
    tips: [
      'Zor geliyorsa alttaki dizini yere koyarak başla.',
      'Üstteki bacağı kaldırmak kalça yanını da çalıştırır.'
    ],
    variations: ['plank', 'pallof-press']
  },
  {
    id: 'crunch', name: 'Crunch', nameTr: 'Mekik (Crunch)',
    group: 'core', primary: ['abs'], secondary: ['obliques'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Sırtüstü uzan, dizlerini bük, ayaklar yerde. Ellerini göğsünde çaprazla veya parmak uçlarını kulaklarının yanına koy.',
    steps: [
      'Karnını sıkarak omuzlarını ve üst sırtını yerden kaldır; kaburgalarını leğen kemiğine yaklaştırmayı düşün.',
      'Bel yerde kalsın.',
      'Tepede 1 saniye sık.',
      'Kontrollü şekilde omuzlarını yere indir.'
    ],
    mistakes: [
      'Elleriyle başını çekip boynu zorlamak.',
      'Hızlı ve sektirerek yapmak.',
      'Tam oturma pozisyonuna kalkıp hareketi kalça bükücülere yüklemek.'
    ],
    tips: [
      'Çenenle göğsün arasında bir yumruk boşluğu bırak.',
      'Hareket küçüktür; amaç yukarı çıkmak değil karnı “bükmek”tir.'
    ],
    variations: ['cable-crunch', 'machine-crunch', 'bicycle-crunch']
  },
  {
    id: 'cable-crunch', name: 'Cable Crunch', nameTr: 'Kablo Mekik',
    group: 'core', primary: ['abs'], secondary: ['obliques'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 2,
    setup: 'Makarayı en üst seviyeye ayarla, halat tak. Makinenin önünde diz çök; halatın uçlarını başının iki yanında tut.',
    steps: [
      'Kalçanı sabit tutarak gövdeni aşağıya doğru kıvır; dirseklerini dizlerine yaklaştır.',
      'Karnını tamamen sık.',
      'Kontrollü şekilde başlangıca dön.',
      'Hareket kalçadan değil omurganın bükülmesinden gelsin.'
    ],
    mistakes: [
      'Kalçayı geriye oturtarak ağırlıkla çekmek.',
      'Kollarla çekmek.',
      'Çok hızlı dönmek.'
    ],
    tips: [
      'Karın kasına kademeli olarak ağırlık eklemenin en kolay yollarındandır.',
      '10–15 tekrar aralığı uygundur.'
    ],
    variations: ['machine-crunch', 'crunch']
  },
  {
    id: 'machine-crunch', name: 'Ab Crunch Machine', nameTr: 'Karın Makinesi',
    group: 'core', primary: ['abs'], secondary: ['obliques'],
    equipment: 'machine', machineId: 'ab-crunch-machine', mechanic: 'isolation', difficulty: 1,
    setup: 'Koltuğu, göğüs pedleri veya tutamaklar üst göğsüne gelecek şekilde ayarla. Ayaklarını pedlerin altına yerleştir.',
    steps: [
      'Tutamakları kavra, sırtını yasla.',
      'Karnını sıkarak gövdeni öne doğru kıvır.',
      'Karnını tamamen sıktığın noktada 1 saniye bekle.',
      'Kontrollü şekilde geri dön.'
    ],
    mistakes: [
      'Kollarla itmek veya çekmek.',
      'Ağırlığı çarptırmak.',
      'Kalçadan menteşelenip hareketi kalça bükücülere yüklemek.'
    ],
    tips: [
      'Nefes vererek kasılmak karnı daha güçlü sıkmana yardım eder.',
      'Yavaş tempo daha etkilidir.'
    ],
    variations: ['cable-crunch', 'crunch']
  },
  {
    id: 'hanging-leg-raise', name: 'Hanging Leg Raise', nameTr: 'Barda Bacak Kaldırma',
    group: 'core', primary: ['abs', 'hip-flexors'], secondary: ['obliques', 'forearms', 'lats'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 3,
    setup: 'Barfiks barına omuz genişliğinde asıl. Omuzlarını hafifçe aktif tut, bacaklar düz ve bitişik.',
    steps: [
      'Sallanmadan bacaklarını düz şekilde yukarı kaldır.',
      'Leğen kemiğini göğsüne doğru kıvırarak bacakları en az yere paralel konuma getir.',
      'Tepede bir an bekle.',
      'Kontrollü şekilde indir; sallanmayı engelle.'
    ],
    mistakes: [
      'Bacakları savurarak momentum kullanmak.',
      'Sadece kalçadan bükülüp leğen kemiğini kıvırmamak — karın yerine kalça bükücüler çalışır.',
      'Aşağıda sallanmak.'
    ],
    tips: [
      'Dizleri bükerek başla, güçlendikçe bacakları düzleştir.',
      'Tutuş yetmiyorsa kol askıları (ab straps) kullan.'
    ],
    variations: ['captains-chair-knee-raise', 'lying-leg-raise']
  },
  {
    id: 'captains-chair-knee-raise', name: 'Captain’s Chair Knee Raise', nameTr: 'Dips İstasyonunda Diz Çekme',
    group: 'core', primary: ['abs', 'hip-flexors'], secondary: ['obliques'],
    equipment: 'machine', machineId: 'captains-chair', mechanic: 'compound', difficulty: 2,
    setup: 'İstasyonda sırtını pede yasla, ön kollarını kol pedlerine koy ve tutamakları kavra. Bacaklar aşağı sarksın.',
    steps: [
      'Dizlerini bükerek göğsüne doğru çek.',
      'Tepede leğen kemiğini hafifçe yukarı kıvır.',
      'Karnını 1 saniye sık.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Bacakları sallamak.',
      'Sırtı pedden koparmak.',
      'Omuzları kulaklara doğru çökertmek.'
    ],
    tips: [
      'Barda asılmaya göre daha sabit olduğu için başlangıç için idealdir.',
      'Dizleri çapraz tarafa çekmek yan karın kaslarını da çalıştırır.'
    ],
    variations: ['hanging-leg-raise', 'lying-leg-raise']
  },
  {
    id: 'lying-leg-raise', name: 'Lying Leg Raise', nameTr: 'Yerde Bacak Kaldırma',
    group: 'core', primary: ['abs', 'hip-flexors'], secondary: [],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Sırtüstü uzan, ellerini kalçanın yanına veya altına koy. Bacaklar düz ve bitişik.',
    steps: [
      'Belini yere bastır.',
      'Bacaklarını düz şekilde tavana doğru kaldır.',
      'Tepede kalçanı yerden hafifçe kaldırarak karnını sık.',
      'Bacakları yavaşça, belin yerden kalkmadan indirebileceğin noktaya kadar indir.'
    ],
    mistakes: [
      'Bacakları indirirken belin yerden kalkması.',
      'Bacakları hızla düşürmek.',
      'Nefesi tutmak.'
    ],
    tips: [
      'Belin kalkıyorsa dizleri hafifçe bük veya bacakları o kadar aşağı indirme.',
      'Evde karın çalışmak için iyi bir temel harekettir.'
    ],
    variations: ['hanging-leg-raise', 'dead-bug']
  },
  {
    id: 'ab-wheel-rollout', name: 'Ab Wheel Rollout', nameTr: 'Karın Tekerleği',
    group: 'core', primary: ['abs'], secondary: ['lats', 'obliques', 'front-delt', 'triceps'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 3,
    setup: 'Dizlerinin üzerine çök, tekerleği omuzlarının altında iki elinle kavra.',
    steps: [
      'Karnını ve kalçanı sıkarak tekerleği öne doğru yuvarla.',
      'Belin sarkmadan gidebildiğin kadar uzağa uzan.',
      'Karın kaslarınla tekerleği geri çek.',
      'Başlangıç pozisyonuna dön.'
    ],
    mistakes: [
      'Belin sarkması — en sık ve en riskli hata.',
      'Kalçayı önce geri çekip kolla çekmek.',
      'Çok uzağa uzanıp kontrolü kaybetmek.'
    ],
    tips: [
      'Önce kısa mesafeyle başla veya bir duvara doğru yuvarlanarak mesafeyi sınırla.',
      'Karın kaslarını “uzamaya karşı” çalıştıran en etkili hareketlerden biridir.'
    ],
    variations: ['plank', 'dead-bug']
  },
  {
    id: 'russian-twist', name: 'Russian Twist', nameTr: 'Rus Dönüşü',
    group: 'core', primary: ['obliques'], secondary: ['abs', 'hip-flexors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Yere otur, dizleri bük ve gövdeni hafifçe geriye yasla. Ellerini göğsünün önünde birleştir (istersen bir plaka veya top tut).',
    steps: [
      'Sırtını düz tutarak gövdeni bir yana döndür.',
      'Ellerin kalçanın yanına gelsin.',
      'Diğer yana döndür.',
      'Kontrollü bir tempoda devam et.'
    ],
    mistakes: [
      'Sadece kolları sallamak, gövdeyi döndürmemek.',
      'Sırtı yuvarlamak.',
      'Çok hızlı yapmak.'
    ],
    tips: [
      'Ayakları yerden kaldırmak zorluğu artırır.',
      'Bel hassasiyetin varsa bunun yerine Pallof press tercih et.'
    ],
    variations: ['cable-woodchopper', 'bicycle-crunch']
  },
  {
    id: 'bicycle-crunch', name: 'Bicycle Crunch', nameTr: 'Bisiklet Mekik',
    group: 'core', primary: ['abs', 'obliques'], secondary: ['hip-flexors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Sırtüstü uzan, ellerini başının yanına koy, bacaklarını yerden kaldırıp dizleri 90° bük.',
    steps: [
      'Omuzlarını yerden kaldır.',
      'Sağ dirseğini sol dizine doğru getirirken sağ bacağını uzat.',
      'Taraf değiştir: sol dirsek sağ dize, sol bacak uzar.',
      'Pedal çevirir gibi kontrollü devam et.'
    ],
    mistakes: [
      'Başı ellerle çekmek.',
      'Çok hızlı ve kontrolsüz yapmak.',
      'Belin yerden kalkması.'
    ],
    tips: [
      'Yavaş ve kontrollü yapmak her tekrarın etkisini artırır.',
      'Dirseği dize değdirmek değil, omzu karşı dize döndürmek önemlidir.'
    ],
    variations: ['crunch', 'russian-twist']
  },
  {
    id: 'dead-bug', name: 'Dead Bug', nameTr: 'Dead Bug (Ölü Böcek)',
    group: 'core', primary: ['abs'], secondary: ['obliques', 'hip-flexors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Sırtüstü uzan, kollarını tavana doğru uzat, dizlerini 90° bükerek bacaklarını kaldır.',
    steps: [
      'Belini yere bastır ve karnını sık.',
      'Sağ kolunu başının arkasına, sol bacağını öne doğru uzatarak yere yaklaştır.',
      'Başlangıç pozisyonuna dön.',
      'Karşı kol ve bacakla tekrarla.'
    ],
    mistakes: [
      'Belin yerden kalkması.',
      'Hızlı yapmak.',
      'Nefesi tutmak.'
    ],
    tips: [
      'Bel ağrısı yaşayanlar için güvenli ve etkili bir core hareketidir.',
      'Kol ve bacağı uzatırken nefes vermek karnı daha iyi sabitler.'
    ],
    variations: ['plank', 'lying-leg-raise', 'hollow-hold']
  },
  {
    id: 'pallof-press', name: 'Pallof Press', nameTr: 'Pallof Press (Dönmeye Karşı İtiş)',
    group: 'core', primary: ['obliques', 'abs'], secondary: ['glutes'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 1,
    setup: 'Makarayı göğüs hizasına ayarla, tek tutamak tak. Makineye yanını dönerek dur, tutamağı iki elinle göğsünün önünde tut ve bir adım uzaklaş.',
    steps: [
      'Ayaklar omuz genişliğinde, dizler hafif bükük; karnını sık.',
      'Tutamağı göğsünden düz şekilde öne it.',
      'Kablonun seni döndürmesine direnerek 2–3 saniye bekle.',
      'Tutamağı göğsüne geri getir. Setin sonunda diğer tarafa geç.'
    ],
    mistakes: [
      'Gövdenin makineye doğru dönmesine izin vermek.',
      'Çok ağır ağırlık seçmek.',
      'Omuzları kulaklara kaldırmak.'
    ],
    tips: [
      'Karnı “dönmeye direnç” görevinde çalıştırır; bu, günlük hayattaki ve spordaki görevine en yakın çalışmadır.',
      'Bel dostu bir core hareketidir.'
    ],
    variations: ['side-plank', 'cable-woodchopper']
  },
  {
    id: 'cable-woodchopper', name: 'Cable Woodchopper', nameTr: 'Kablo Odun Kesme',
    group: 'core', primary: ['obliques'], secondary: ['abs', 'front-delt', 'glutes'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'compound', difficulty: 2,
    setup: 'Makarayı en üst seviyeye ayarla, tek tutamak tak. Makineye yanını dönerek dur ve tutamağı iki elinle omzunun üst tarafından kavra.',
    steps: [
      'Kollar düz şekilde tutamağı çapraz olarak aşağı, karşı kalçana doğru çek.',
      'Gövdeni döndürürken arka ayağının topuğunu hafifçe döndür.',
      'Hareketin sonunda yan karnını sık.',
      'Kontrollü şekilde başlangıca dön.'
    ],
    mistakes: [
      'Kollarla çekmek.',
      'Beli tek başına döndürmek; dönüş kalça ve göğüs kafesinden gelmeli.',
      'Çok hızlı yapmak.'
    ],
    tips: [
      'Makarayı alta alıp aşağıdan yukarı da yapılabilir.',
      'Rotasyon gücü gerektiren sporlar (tenis, golf, dövüş) için faydalıdır.'
    ],
    variations: ['pallof-press', 'russian-twist', 'rotary-torso']
  },
  {
    id: 'rotary-torso', name: 'Rotary Torso Machine', nameTr: 'Gövde Döndürme Makinesi',
    group: 'core', primary: ['obliques'], secondary: ['abs'],
    equipment: 'machine', machineId: 'rotary-torso', mechanic: 'isolation', difficulty: 1,
    setup: 'Koltuğa otur, dizlerini pedlerin arasına sabitle. Göğüs pedini ve başlangıç açısını ayarla; kollar pedleri tutsun.',
    steps: [
      'Karnını sık, sırtın dik olsun.',
      'Gövdeni yavaşça bir yana döndür.',
      'Sonda yan karnını sık.',
      'Kontrollü şekilde ortaya dön. Setin sonunda diğer yöne geç.'
    ],
    mistakes: [
      'Hızla savurarak dönmek.',
      'Çok geniş dönüş açısı ayarlayıp beli zorlamak.',
      'Ağır yüklenmek.'
    ],
    tips: [
      'Hafif-orta ağırlıkla kontrollü çalış; bel omurları büyük rotasyon açıları için tasarlanmamıştır.',
      'Bel sorunun varsa Pallof press daha güvenli bir seçenektir.'
    ],
    variations: ['cable-woodchopper', 'pallof-press']
  },
  {
    id: 'decline-sit-up', name: 'Decline Sit-Up', nameTr: 'Ters Eğimli Mekik',
    group: 'core', primary: ['abs', 'hip-flexors'], secondary: ['obliques'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Decline mekik sehpasına bacaklarını sabitleyerek uzan. Ellerini göğsünde çaprazla.',
    steps: [
      'Karnını sıkarak omuzlarından başlayarak gövdeni kıvır ve yukarı kalk.',
      'Gövdeni dik konuma gelene kadar kaldır.',
      'Kontrollü şekilde omurga omurga geri in.',
      'Aşağıda tamamen gevşemeden tekrara geç.'
    ],
    mistakes: [
      'Elleriyle başı çekmek.',
      'Düz sırtla, sadece kalçadan kalkmak.',
      'Aşağı düşer gibi inmek.'
    ],
    tips: [
      'Eğim arttıkça zorluk artar.',
      'Göğsünde plaka tutarak ağırlık ekleyebilirsin.'
    ],
    variations: ['crunch', 'cable-crunch']
  },
  {
    id: 'hollow-hold', name: 'Hollow Body Hold', nameTr: 'Hollow Hold (Kayık Pozisyonu)',
    group: 'core', primary: ['abs'], secondary: ['hip-flexors', 'obliques'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 2,
    setup: 'Sırtüstü uzan, kollarını başının üzerine uzat.',
    steps: [
      'Belini yere bastır ve karnını sık.',
      'Omuzlarını ve bacaklarını aynı anda yerden kaldır; vücudun muz şeklini alsın.',
      'Pozisyonu 15–40 saniye koru.',
      'Kontrollü şekilde yere in.'
    ],
    mistakes: [
      'Belin yerden kalkması.',
      'Bacakları çok yükseğe kaldırıp kolaylaştırmak.',
      'Boynu zorlamak.'
    ],
    tips: [
      'Zor geliyorsa dizleri bük ve kolları yanlarda tut.',
      'Jimnastiğin temel core pozisyonudur.'
    ],
    variations: ['dead-bug', 'plank']
  },

  // ---------------- Tüm vücut ----------------
  {
    id: 'kettlebell-swing', name: 'Kettlebell Swing', nameTr: 'Kettlebell Salınımı',
    group: 'fullbody', primary: ['glutes', 'hamstrings'], secondary: ['lower-back', 'abs', 'front-delt', 'forearms'],
    equipment: 'kettlebell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Ayaklar omuz genişliğinden biraz geniş, kettlebell ayaklarının bir adım önünde yerde dursun. Kalçadan eğilip kettlebell’ı iki elinle kavra.',
    steps: [
      'Kettlebell’ı bacaklarının arasından geriye doğru savur (futbolda topu geriye atar gibi).',
      'Kalçanı patlayıcı şekilde öne sürerek dikleş; kettlebell bu itişle göğüs hizasına kadar yükselsin.',
      'Tepede kalçanı ve karnını sık, kollar sadece yönlendirir.',
      'Kettlebell düşerken kalçadan menteşelenerek onu yeniden bacak arasına al.'
    ],
    mistakes: [
      'Hareketi squat’a çevirmek (dizleri fazla bükmek).',
      'Kettlebell’ı kollarla kaldırmak.',
      'Sırtı yuvarlamak.',
      'Tepede geriye yaslanmak.'
    ],
    tips: [
      'Güç kalçadan gelir; kettlebell’ın yüksekliği kalça itişinin sonucudur.',
      'Hem kuvvet hem kondisyon için çok verimli bir harekettir.'
    ],
    variations: ['cable-pull-through', 'romanian-deadlift']
  },
  {
    id: 'farmers-walk', name: 'Farmer’s Walk', nameTr: 'Çiftçi Yürüyüşü',
    group: 'fullbody', primary: ['forearms', 'traps'], secondary: ['abs', 'obliques', 'quads', 'glutes', 'calves'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'İki ağır dambılı (veya kettlebell’ı) yerden deadlift gibi kaldır ve yanlarında tut.',
    steps: [
      'Dik dur, omuzlarını geriye ve aşağı al, karnını sık.',
      'Kısa ve kontrollü adımlarla yürü.',
      'Belirlediğin mesafe ya da süre (ör. 30–40 m) boyunca devam et.',
      'Dambılları kalçadan eğilerek yere bırak.'
    ],
    mistakes: [
      'Omuzları öne yuvarlamak.',
      'Gövdeyi bir yana yatırmak.',
      'Dambılları yerden sırtı yuvarlayarak almak.'
    ],
    tips: [
      'Tutuş gücü, trapez ve core dayanıklılığını birlikte geliştirir.',
      'Tek elle yapmak (suitcase carry) yan karın kaslarını çok daha fazla zorlar.'
    ],
    variations: ['dumbbell-shrug', 'dead-hang']
  },
  {
    id: 'burpee', name: 'Burpee', nameTr: 'Burpee',
    group: 'fullbody', primary: ['quads', 'chest'], secondary: ['glutes', 'triceps', 'front-delt', 'abs', 'calves'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Ayaklar omuz genişliğinde dik dur.',
    steps: [
      'Çömel ve ellerini ayaklarının önüne yere koy.',
      'Ayaklarını geriye atarak şınav pozisyonuna geç (istersen bir şınav yap).',
      'Ayaklarını ellerinin yanına geri getir.',
      'Patlayıcı şekilde yukarı sıçra ve kollarını başının üzerine kaldır.'
    ],
    mistakes: [
      'Şınav pozisyonunda belin sarkması.',
      'Sert iniş yapmak.',
      'Yorgunken formu tamamen bozmak.'
    ],
    tips: [
      'Kondisyon antrenmanlarında zaman bazlı (ör. 30 saniye çalış / 30 saniye dinlen) kullanılır.',
      'Zorlanırsan ayakları geriye atmak yerine adım adım geriye götür.'
    ],
    variations: ['mountain-climber', 'jump-squat', 'push-up']
  },
  {
    id: 'power-clean', name: 'Power Clean', nameTr: 'Power Clean (Göğse Çekiş)',
    group: 'fullbody', primary: ['glutes', 'hamstrings', 'quads', 'traps'], secondary: ['lower-back', 'calves', 'front-delt', 'forearms'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 3,
    setup: 'Deadlift duruşu al; bar orta ayak üzerinde, eller omuz genişliğinden biraz geniş. Omuzlar barın biraz önünde, sırt düz.',
    steps: [
      'Barı kontrollü şekilde dizlerin üstüne kadar kaldır (ilk çekiş).',
      'Bar uyluk ortasına gelince kalça ve dizlerini patlayıcı şekilde açarak barı yukarı hızlandır; omuzlarını silk.',
      'Dirseklerini hızla öne çevirerek barın altına gir ve barı ön omuzlarında, çeyrek squat pozisyonunda karşıla.',
      'Dikleş, ardından barı kontrollü şekilde yere indir.'
    ],
    mistakes: [
      'Barı kollarla çekmek.',
      'Barın vücuttan uzaklaşması.',
      'Karşılarken dirsekleri düşük bırakmak.'
    ],
    tips: [
      'Teknik açıdan karmaşık bir olimpik harekettir; mutlaka hafif yükle ve mümkünse bir antrenörle öğren.',
      'Sporcular için patlayıcı güç geliştirmenin en etkili yollarından biridir.'
    ],
    variations: ['deadlift', 'kettlebell-swing', 'push-press']
  },
  {
    id: 'thruster', name: 'Dumbbell Thruster', nameTr: 'Thruster (Squat + Omuz Presi)',
    group: 'fullbody', primary: ['quads', 'front-delt'], secondary: ['glutes', 'triceps', 'abs', 'side-delt'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Dambılları omuz hizasında tut, ayaklar omuz genişliğinde.',
    steps: [
      'Dambıllar omuzlarındayken tam bir squat yap.',
      'Kalkarken bacaklardan gelen güçle dambılları başının üzerine it.',
      'Kollar düzleşince bir an dur.',
      'Dambılları omuzlarına indirirken bir sonraki squat’a geç.'
    ],
    mistakes: [
      'Squat’ı yarım bırakmak.',
      'Beli kavislendirerek presi tamamlamak.',
      'Dambılları omuz yerine göğüs önünde tutmak.'
    ],
    tips: [
      'Kondisyon antrenmanlarında nabzı çok hızlı yükselten bir harekettir.',
      'Barbell ile de yapılabilir.'
    ],
    variations: ['push-press', 'goblet-squat']
  },
  {
    id: 'mountain-climber', name: 'Mountain Climber', nameTr: 'Dağcı',
    group: 'fullbody', primary: ['abs', 'hip-flexors'], secondary: ['front-delt', 'quads', 'obliques'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Şınav pozisyonuna geç; eller omuzlarının altında, vücut düz.',
    steps: [
      'Bir dizini göğsüne doğru çek.',
      'Hızla bacak değiştirerek diğer dizini çek.',
      'Koşar gibi ritmik şekilde devam et.',
      'Kalçayı omuz hizasında tut.'
    ],
    mistakes: [
      'Kalçayı yukarı kaldırmak.',
      'Omuzları ellerin gerisine kaydırmak.',
      'Adımları çok kısa tutmak.'
    ],
    tips: [
      'Yavaş yapıldığında core, hızlı yapıldığında kondisyon hareketidir.',
      'Dizleri çapraz dirseğe çekmek yan karnı da çalıştırır.'
    ],
    variations: ['plank', 'burpee']
  },
  {
    id: 'box-jump', name: 'Box Jump', nameTr: 'Kutuya Sıçrama',
    group: 'fullbody', primary: ['quads', 'glutes'], secondary: ['calves', 'hamstrings'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Sağlam bir plyo kutusunun önünde, ayaklar kalça genişliğinde dur.',
    steps: [
      'Kollarını geriye savurarak çeyrek squat’a in.',
      'Kollarını öne savurup patlayıcı şekilde kutuya sıçra.',
      'Dizler hafif bükük, iki ayakla yumuşak şekilde kutunun ortasına kon.',
      'Kutunun üzerinde dikleş ve adım adım aşağı in.'
    ],
    mistakes: [
      'Kutudan aşağı sıçramak — aşil tendonuna gereksiz yük bindirir.',
      'Çok yüksek kutu seçip kutuya derin squat’la konmak.',
      'Yorgunken devam etmek.'
    ],
    tips: [
      'Hedef yüksek kutu değil, patlayıcı sıçrama ve yumuşak iniştir.',
      'Setleri 3–5 tekrarla sınırlı tut.'
    ],
    variations: ['jump-squat', 'step-up']
  }
);

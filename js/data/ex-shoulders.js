/* Omuz hareketleri */
FIT.exercises.push(
  {
    id: 'overhead-press', name: 'Overhead Press', nameTr: 'Ayakta Barbell Omuz Presi (Military Press)', aka: 'military press ohp',
    group: 'shoulders', primary: ['front-delt'], secondary: ['side-delt', 'triceps', 'chest-upper', 'traps', 'abs'],
    equipment: 'barbell', machineId: 'power-rack', mechanic: 'compound', difficulty: 2,
    setup: 'Barı kafeste köprücük kemiği hizasına ayarla. Omuz genişliğinden biraz geniş kavra; dirsekler barın hafif önünde olsun. Ayaklar kalça genişliğinde, kalça ve karın sıkı.',
    steps: [
      'Barı raftan al, bir adım geri çekil. Bar üst göğsünde, ön omuzlarının üzerinde dursun.',
      'Başını hafifçe geri çekerek barın geçeceği yolu aç ve barı dik bir çizgide yukarı it.',
      'Bar alnını geçince başını öne, barın altına getir.',
      'Kollar kilitli, bar orta ayak hizasının üstündeyken dur.',
      'Barı kontrollü şekilde üst göğsüne geri indir.'
    ],
    breathing: 'Her tekrardan önce nefes alıp karnını sık, bar alnını geçtikten sonra nefes ver.',
    mistakes: [
      'Beli aşırı geriye kavislendirmek; hareket eğimli bench’e dönüşür ve bele yük biner.',
      'Barı yüzün önünde bir yay çizerek itmek.',
      'Dizleri bükerek bacaktan güç almak (bu push press olur).'
    ],
    tips: [
      'Kalçanı ve karnını sıkmak gövdeyi sabitler ve belin kavislenmesini önler.',
      'Omuz hareketliliğin kısıtlıysa dambılla ya da oturarak başla.'
    ],
    variations: ['seated-dumbbell-press', 'push-press', 'machine-shoulder-press', 'landmine-press']
  },
  {
    id: 'seated-dumbbell-press', name: 'Seated Dumbbell Shoulder Press', nameTr: 'Oturarak Dambıl Omuz Presi',
    group: 'shoulders', primary: ['front-delt'], secondary: ['side-delt', 'triceps', 'traps'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Sehpayı 80–90° dik konuma getir. Dambılları dizlerinle omuz hizasına kaldır; avuç içleri öne veya hafif içe baksın, dirsekler gövdenin biraz önünde olsun.',
    steps: [
      'Sırtını pede yasla, karnını sık.',
      'Dambılları yukarı ve hafifçe içe doğru it.',
      'Üstte dambıllar neredeyse birbirine değsin; kolları sertçe kilitleme.',
      'Kontrollü şekilde kulak hizasına ya da biraz altına indir.'
    ],
    mistakes: [
      'Beli pedden koparıp geriye kavislendirmek.',
      'Dirsekleri tamamen yana (180°) açmak.',
      'Yarım tekrar yapmak.'
    ],
    tips: [
      'Dirsekleri gövdenin hafif önünde (scapular plane) tutmak omuz eklemi için daha rahattır.',
      'Dambıllar iki kolun bağımsız çalışmasını sağlar; güç farkı hemen belli olur.'
    ],
    variations: ['arnold-press', 'overhead-press', 'machine-shoulder-press']
  },
  {
    id: 'arnold-press', name: 'Arnold Press', nameTr: 'Arnold Pres',
    group: 'shoulders', primary: ['front-delt'], secondary: ['side-delt', 'triceps'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Dik sehpaya otur. Dambılları göğsünün önünde, avuç içleri sana bakacak şekilde tut (biceps curl’ün üst noktası gibi).',
    steps: [
      'Dambılları yukarı iterken bileklerini dışa doğru döndürmeye başla.',
      'Kollar yukarıda düzleştiğinde avuç içlerin öne baksın.',
      'İnerken hareketi tersine çevir; avuç içleri yeniden sana dönsün.',
      'Tüm hareket boyunca akıcı ve kontrollü ol.'
    ],
    mistakes: [
      'Dönüşü tamamen alt veya üst noktada bir anda yapmak.',
      'Çok ağır dambılla kontrolü kaybetmek.',
      'Beli kavislendirmek.'
    ],
    tips: [
      'Klasik omuz presine göre daha uzun hareket açıklığı sağlar ve ön omzu daha fazla çalıştırır.',
      'Normal omuz presinde kullandığından biraz daha hafif başla.'
    ],
    variations: ['seated-dumbbell-press']
  },
  {
    id: 'machine-shoulder-press', name: 'Machine Shoulder Press', nameTr: 'Makinede Omuz Presi',
    group: 'shoulders', primary: ['front-delt'], secondary: ['side-delt', 'triceps'],
    equipment: 'machine', machineId: 'shoulder-press', mechanic: 'compound', difficulty: 1,
    setup: 'Koltuğu, tutamaklar omuz hizasında ya da biraz üstünde kalacak şekilde ayarla. Sırtını tamamen pede yasla.',
    steps: [
      'Tutamakları kavra, dirsekler gövdenin biraz önünde olsun.',
      'Tutamakları yukarı it.',
      'Kollar neredeyse düzleşince bir an dur.',
      'Kontrollü şekilde, ağırlık bloğuna değmeden indir.'
    ],
    mistakes: [
      'Koltuğu çok alçak ayarlayıp başlangıçta omzu aşırı zorlamak.',
      'Beli pedden koparmak.',
      'Ağırlığı hızla bırakmak.'
    ],
    tips: [
      'Denge gerektirmediği için omuz presini öğrenmek ve güvenle yüklenmek için iyidir.',
      'Nötr tutamak (avuçlar karşılıklı) omuz ağrısı olanlarda genelde daha rahattır.'
    ],
    variations: ['seated-dumbbell-press', 'overhead-press']
  },
  {
    id: 'dumbbell-lateral-raise', name: 'Dumbbell Lateral Raise', nameTr: 'Dambıl ile Yana Açış',
    group: 'shoulders', primary: ['side-delt'], secondary: ['front-delt', 'traps'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dik dur, dambıllar yanlarında, dirsekler hafif bükük olsun. Gövdeni çok hafif öne eğebilirsin.',
    steps: [
      'Dirsekleri önde götürerek dambılları yanlara doğru kaldır.',
      'Kolların yere paralel olunca (omuz hizası) dur.',
      'Tepede bir an bekle.',
      'Dambılları kontrollü, yavaş şekilde indir.'
    ],
    mistakes: [
      'Gövdeyi sallayarak ağırlığı fırlatmak.',
      'Omuzları kulaklara doğru kaldırıp trapezle yapmak.',
      'Çok ağır dambıl seçmek.'
    ],
    tips: [
      'Serçe parmağını yukarı çevirmek gerekmez; bu omzu içe döndürür ve sıkışmaya yol açabilir. Avuçlar yere baksın.',
      'Hafif ağırlık, 12–20 tekrar ve yavaş iniş bu hareket için en verimli yöntemdir.'
    ],
    variations: ['cable-lateral-raise', 'machine-lateral-raise', 'upright-row']
  },
  {
    id: 'cable-lateral-raise', name: 'Cable Lateral Raise', nameTr: 'Kablo ile Yana Açış',
    group: 'shoulders', primary: ['side-delt'], secondary: ['front-delt', 'traps'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 1,
    setup: 'Makarayı en alt seviyeye ayarla, tek tutamak tak. Makaraya yanını dönerek dur ve uzak taraftaki elinle tutamağı kavra; kablo vücudunun önünden geçsin.',
    steps: [
      'Dirseğin hafif bükük şekilde kolunu yana doğru kaldır.',
      'Kol omuz hizasına gelince dur.',
      'Tepede bir an bekle.',
      'Kontrollü şekilde indir; kablonun gerginliğini kaybetme.'
    ],
    mistakes: [
      'Gövdeyi makaradan uzağa yatırıp hileye kaçmak.',
      'Omzu kulağa doğru kaldırmak.',
      'Hızla bırakmak.'
    ],
    tips: [
      'Kablo, hareketin alt kısmında da gerilim sağlar; dambılda bu bölüm neredeyse boşa geçer.',
      'Diğer elinle makineye tutunarak gövdeni sabitleyebilirsin.'
    ],
    variations: ['dumbbell-lateral-raise', 'machine-lateral-raise']
  },
  {
    id: 'machine-lateral-raise', name: 'Machine Lateral Raise', nameTr: 'Makinede Yana Açış',
    group: 'shoulders', primary: ['side-delt'], secondary: ['traps'],
    equipment: 'machine', machineId: 'lateral-raise-machine', mechanic: 'isolation', difficulty: 1,
    setup: 'Koltuğu, omuz eklemin makinenin dönme ekseniyle aynı hizaya gelecek şekilde ayarla. Kol pedlerini dirseklerinin hemen üstüne yerleştir.',
    steps: [
      'Göğsünü pede yasla (varsa), tutamakları hafifçe kavra.',
      'Dirseklerinle pedleri yana ve yukarı it.',
      'Kollar omuz hizasına gelince bir an dur.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Koltuk yüksekliğini ayarlamamak.',
      'Omuzları silkerek trapezi devreye sokmak.',
      'Tutamakları sıkı çekip kolla kaldırmak.'
    ],
    tips: [
      'İtişi ellerle değil dirseklerle yapmayı düşün.',
      'Yavaş tempo ve yüksek tekrar ile yan omuz için mükemmel bir izolasyon hareketidir.'
    ],
    variations: ['dumbbell-lateral-raise', 'cable-lateral-raise']
  },
  {
    id: 'front-raise', name: 'Dumbbell Front Raise', nameTr: 'Dambıl ile Önden Kaldırış',
    group: 'shoulders', primary: ['front-delt'], secondary: ['chest-upper', 'side-delt'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dik dur, dambıllar uyluklarının önünde, avuç içleri sana veya birbirine baksın.',
    steps: [
      'Kolların neredeyse düz şekilde dambılları öne doğru kaldır.',
      'Kolların omuz hizasına gelince dur.',
      'Kontrollü şekilde indir.',
      'İki kolu aynı anda veya sırayla çalıştırabilirsin.'
    ],
    mistakes: [
      'Gövdeyi geriye yatırarak momentum kullanmak.',
      'Kolları omuz hizasının çok üstüne kaldırmak.',
      'Ağır dambılla hızlı yapmak.'
    ],
    tips: [
      'Ön omuz preslerde zaten çok çalışır; bu hareket genelde ek hacim içindir.',
      'Bir plakayı iki elle tutarak da yapılabilir.'
    ],
    variations: ['dumbbell-lateral-raise', 'seated-dumbbell-press']
  },
  {
    id: 'rear-delt-fly', name: 'Bent-Over Rear Delt Fly', nameTr: 'Eğilerek Arka Omuz Açışı',
    group: 'shoulders', primary: ['rear-delt'], secondary: ['mid-back', 'traps'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dizleri hafif bük, kalçadan menteşelenerek gövdeni yere neredeyse paralel olacak şekilde eğ. Dambıllar göğsünün altında sarksın, avuçlar birbirine baksın.',
    steps: [
      'Dirsekler hafif bükük şekilde dambılları yanlara doğru kaldır.',
      'Kollar gövdeyle aynı hizaya gelince dur.',
      'Tepede bir an bekle.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Kürek kemiklerini fazla sıkıştırıp hareketi orta sırta kaydırmak.',
      'Gövdeyi kaldırarak momentum kullanmak.',
      'Çok ağır dambıl kullanmak.'
    ],
    tips: [
      'Başını bir sehpaya dayamak (veya eğimli sehpaya yüzüstü uzanmak) hileyi önler.',
      'Kolları omuz hizasında değil, biraz aşağıda (göğüs hizası) açmak arka omzu daha iyi izole eder.'
    ],
    variations: ['reverse-pec-deck', 'face-pull']
  },
  {
    id: 'reverse-pec-deck', name: 'Reverse Pec Deck', nameTr: 'Ters Pec Deck (Arka Omuz Makinesi)',
    group: 'shoulders', primary: ['rear-delt'], secondary: ['mid-back', 'traps'],
    equipment: 'machine', machineId: 'pec-deck', mechanic: 'isolation', difficulty: 1,
    setup: 'Pec deck makinesine yüzün pede dönük otur. Kol tutamaklarını en arka konumdan en öne gelecek şekilde ayarla. Koltuğu, tutamaklar omuz hizasında olacak şekilde ayarla.',
    steps: [
      'Göğsünü pede yasla, tutamakları avuçlar birbirine veya yere bakacak şekilde kavra.',
      'Kollar hafif bükük şekilde tutamakları yana ve geriye doğru aç.',
      'Kollar gövdeyle aynı hizaya gelince dur.',
      'Kontrollü şekilde öne geri dön.'
    ],
    mistakes: [
      'Kolları gövdenin çok gerisine götürmek.',
      'Omuzları kulaklara kaldırmak.',
      'Göğsü pedden koparmak.'
    ],
    tips: [
      'Arka omuzu izole etmenin en kolay yollarından biridir.',
      'Tutamakları sıkıca kavramak yerine parmaklarınla hafifçe tut; itişi dirsekle yap.'
    ],
    variations: ['rear-delt-fly', 'face-pull']
  },
  {
    id: 'face-pull', name: 'Face Pull', nameTr: 'Yüze Çekiş (Halat)',
    group: 'shoulders', primary: ['rear-delt', 'mid-back'], secondary: ['traps', 'side-delt'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'compound', difficulty: 1,
    setup: 'Makarayı göz hizasına veya biraz üstüne ayarla, halat tak. Halatın uçlarını başparmaklar sana bakacak şekilde kavra ve kollar düz olana kadar geri çekil.',
    steps: [
      'Dirseklerini yukarıda ve yanlarda tutarak halatı yüzüne doğru çek.',
      'Çekerken halatın uçlarını ayır; ellerin kulaklarının yanına gelsin.',
      'Sonunda kollarını dışa döndür (bir “çift biceps” pozu gibi) ve 1 saniye bekle.',
      'Kontrollü şekilde kolları uzat.'
    ],
    mistakes: [
      'Ağır ağırlıkla gövdeyi geriye atmak.',
      'Dirsekleri aşağı düşürüp hareketi kürek çekişine çevirmek.',
      'Halatı göğse çekmek.'
    ],
    tips: [
      'Omuz sağlığı ve duruş için her programa eklenmesi önerilen bir harekettir.',
      'Hafif ağırlık ve 15–20 tekrar yeterlidir.'
    ],
    variations: ['rear-delt-fly', 'reverse-pec-deck', 'seated-cable-row']
  },
  {
    id: 'upright-row', name: 'Upright Row', nameTr: 'Dik Çekiş (Upright Row)',
    group: 'shoulders', primary: ['side-delt', 'traps'], secondary: ['front-delt', 'biceps'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Dik dur, barı (veya EZ barı) omuz genişliğinde, avuç içleri sana bakacak şekilde kavra.',
    steps: [
      'Dirseklerini yanlara ve yukarı sürerek barı gövdenin önünden yukarı çek.',
      'Dirsekler omuz hizasına gelince dur; bar göğüs hizasında olsun.',
      'Bir an bekle.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Çok dar tutmak — omuzda sıkışmaya (impingement) yol açabilir.',
      'Barı çeneye kadar çekip dirsekleri omuz hizasının üzerine kaldırmak.',
      'Gövdeyi sallamak.'
    ],
    tips: [
      'Omuz genişliğinde veya daha geniş tutuş ve omuz hizasında durmak hareketi daha güvenli yapar.',
      'Omzunda ağrı oluyorsa bu hareketi yana açışla değiştir.'
    ],
    variations: ['dumbbell-lateral-raise', 'barbell-shrug']
  },
  {
    id: 'landmine-press', name: 'Landmine Press', nameTr: 'Landmine Omuz Presi',
    group: 'shoulders', primary: ['front-delt', 'chest-upper'], secondary: ['triceps', 'side-delt', 'abs', 'obliques'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Barın bir ucunu landmine aparatına ya da duvar köşesine sabitle. Diğer ucunu tek elinle omuz hizasında tut; ayaklar omuz genişliğinde veya kademeli dur.',
    steps: [
      'Karnını sık, gövdeni hafifçe öne eğ.',
      'Barı yukarı ve öne doğru, kol tamamen uzayana kadar it.',
      'Üstte omzunu hafifçe öne uzat.',
      'Kontrollü şekilde omuz hizasına geri indir.'
    ],
    mistakes: [
      'Gövdeyi yana doğru yatırmak.',
      'Beli geriye kavislendirmek.',
      'Barı çok hızlı indirmek.'
    ],
    tips: [
      'Eğimli bar yolu, baş üstü preste omuz ağrısı yaşayanlar için genellikle daha rahattır.',
      'Diz çökerek yapmak gövde sabitliğini daha çok zorlar.'
    ],
    variations: ['overhead-press', 'incline-dumbbell-press']
  },
  {
    id: 'push-press', name: 'Push Press', nameTr: 'Push Press (Bacak Destekli Omuz Presi)',
    group: 'shoulders', primary: ['front-delt', 'triceps'], secondary: ['side-delt', 'quads', 'glutes', 'traps', 'abs'],
    equipment: 'barbell', machineId: 'power-rack', mechanic: 'compound', difficulty: 3,
    setup: 'Overhead press ile aynı başlangıç: bar ön omuzlarında, dirsekler hafif önde, ayaklar kalça genişliğinde.',
    steps: [
      'Gövdeni dik tutarak dizlerini hafifçe (5–10 cm) bük.',
      'Bacaklarınla patlayıcı şekilde yukarı it; bu itiş barı hızlandırsın.',
      'Barın hızıyla birlikte kollarınla yukarı pres yap ve kilitle.',
      'Barı kontrollü şekilde omuzlarına geri indir, dizlerini hafifçe bükerek karşıla.'
    ],
    mistakes: [
      'Çok derin çömelmek (squat’a dönüştürmek).',
      'Dizleri öne kaçırıp gövdeyi öne yatırmak.',
      'Barı indirirken sert şekilde omuzlara çarptırmak.'
    ],
    tips: [
      'Overhead press’ten daha ağır yük kullanmanı sağlar; güç ve atletizm için idealdir.',
      'Önce overhead press tekniğini oturt.'
    ],
    variations: ['overhead-press', 'thruster']
  },
  {
    id: 'pike-push-up', name: 'Pike Push-Up', nameTr: 'Pike Şınav',
    group: 'shoulders', primary: ['front-delt'], secondary: ['triceps', 'side-delt', 'chest-upper'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Şınav pozisyonundan kalçanı yukarı kaldır; vücudun ters V şeklini alsın. Eller omuz genişliğinde, baş kollar arasında.',
    steps: [
      'Dirsekleri bükerek başını ellerinin biraz önüne doğru, yere yaklaştır.',
      'Başın yere yaklaşınca dur.',
      'Yeri iterek başlangıç pozisyonuna dön.',
      'Kalçayı hareket boyunca yukarıda tut.'
    ],
    mistakes: [
      'Kalçayı indirip normal şınava dönmek.',
      'Dirsekleri tamamen yana açmak.',
      'Başı yere çarptırmak.'
    ],
    tips: [
      'Ayakları bir sehpaya koymak zorluğu artırır ve amuda kalkarak şınava hazırlık olur.',
      'Evde omuz çalışmak için en etkili vücut ağırlığı hareketidir.'
    ],
    variations: ['decline-push-up', 'seated-dumbbell-press']
  }
);

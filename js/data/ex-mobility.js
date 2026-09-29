/* Esneme & mobilite ve kondisyon hareketleri.
   Esneme hareketlerinde (mechanic: 'stretch') "primary" esnetilen kasları gösterir. */
FIT.exercises.push(
  // ---------------- Esneme & mobilite ----------------
  {
    id: 'standing-hamstring-stretch', name: 'Standing Hamstring Stretch', nameTr: 'Ayakta Arka Bacak Esnetme',
    group: 'mobility', primary: ['hamstrings'], secondary: ['calves', 'lower-back'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Dik dur, ayaklar kalça genişliğinde. Dizlerin düz ama kilitli olmasın.',
    steps: [
      'Kalçanı geriye iterek, sırtın düz şekilde öne eğil.',
      'Ellerini bacaklarından aşağı kaydır; arka bacakta belirgin ama acı vermeyen bir gerilme hissedince dur.',
      'Bu pozisyonda 20–40 saniye kal, yavaş nefes al-ver.',
      'Kalçanı öne sürerek yavaşça dikleş.'
    ],
    breathing: 'Esnemede nefesini tutma; her nefes verişte biraz daha gevşemeye çalış.',
    mistakes: ['Sırtı yuvarlayıp yere uzanmaya çalışmak — gerilme bele kayar.', 'Yaylanarak (sektirerek) esnemek.', 'Dizleri sert şekilde kilitlemek.'],
    tips: ['Gerilme uyluğun arkasında hissedilmeli; belde hissediyorsan dizlerini hafifçe bük.', 'Bir ayağını bir basamağa koyarak tek bacak da yapabilirsin.'],
    variations: ['worlds-greatest-stretch', 'romanian-deadlift']
  },
  {
    id: 'standing-quad-stretch', name: 'Standing Quad Stretch', nameTr: 'Ayakta Ön Bacak Esnetme',
    group: 'mobility', primary: ['quads'], secondary: ['hip-flexors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Tek ayak üzerinde dur; denge için diğer elinle duvara veya bir direğe tutun.',
    steps: [
      'Bir dizini bük ve aynı taraftaki elinle ayak bileğini kavra.',
      'Topuğunu kalçana doğru çek; dizler yan yana ve aşağıyı gösteriyor olsun.',
      'Kalçanı hafifçe öne it (leğeni geriye devir); ön bacakta gerilme artar.',
      '20–40 saniye tut, diğer bacağa geç.'
    ],
    mistakes: ['Dizi öne veya yana kaçırmak.', 'Beli çukurlaştırmak.', 'Ayağı zorla çekip dize baskı yapmak.'],
    tips: ['Kalçayı sıkmak ön bacak ve kalça bükücüdeki gerilmeyi artırır.', 'Dizinde ağrı varsa yan yatarak aynı esnemeyi yap.'],
    variations: ['kneeling-hip-flexor-stretch']
  },
  {
    id: 'kneeling-hip-flexor-stretch', name: 'Kneeling Hip Flexor Stretch', nameTr: 'Dizüstü Kalça Bükücü Esnetme',
    group: 'mobility', primary: ['hip-flexors'], secondary: ['quads', 'abs'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Bir dizini yere (mindere) koy, diğer ayağın önde, dizler 90° bükük olsun.',
    steps: [
      'Gövdeni dik tut, karnını hafifçe sık.',
      'Kalçanı öne kaydır; arkadaki bacağın kalça önünde gerilme hissedeceksin.',
      'Arka taraftaki kolunu tavana uzatırsan gerilme artar.',
      '30–45 saniye tut, taraf değiştir.'
    ],
    mistakes: ['Beli çukurlaştırıp gerilmeyi bele aktarmak.', 'Ön dizi ayak ucunun çok önüne itmek.', 'Gövdeyi öne eğmek.'],
    tips: ['Uzun süre oturarak çalışanlar için en önemli esnemelerden biridir.', 'Kalçayı sıkmak (arka bacak tarafında) esnemeyi doğru bölgeye taşır.'],
    variations: ['worlds-greatest-stretch', 'standing-quad-stretch']
  },
  {
    id: 'pigeon-stretch', name: 'Pigeon Stretch', nameTr: 'Güvercin Esnetmesi (Kalça)',
    group: 'mobility', primary: ['glutes', 'glute-med'], secondary: ['hip-flexors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 2,
    setup: 'Dört ayak (emekleme) pozisyonundan başla.',
    steps: [
      'Bir dizini öne, aynı taraftaki elinin arkasına getir; alt bacağın gövdenin önünde çapraz dursun.',
      'Diğer bacağını geriye doğru düz şekilde uzat.',
      'Kalçanı yere doğru bırak, gövdeni dik tut veya ön kolların üzerine eğil.',
      '30–60 saniye tut, taraf değiştir.'
    ],
    mistakes: ['Dizde ağrı olmasına rağmen devam etmek.', 'Kalçayı bir yana devirmek.', 'Nefesi tutmak.'],
    tips: ['Diz hassasiyetin varsa sırtüstü yatarak "4" şekli esnetmesini tercih et.', 'Ön ayağı kalçana yaklaştırmak esnemeyi hafifletir.'],
    variations: ['deep-squat-hold', 'worlds-greatest-stretch']
  },
  {
    id: 'doorway-chest-stretch', name: 'Doorway Chest Stretch', nameTr: 'Kapı Aralığında Göğüs Esnetme',
    group: 'mobility', primary: ['chest', 'front-delt'], secondary: ['chest-upper', 'biceps'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Bir kapı aralığının önünde dur. Ön kolunu, dirseğin omuz hizasında olacak şekilde kasaya daya.',
    steps: [
      'Aynı taraftaki ayağınla bir adım öne çık.',
      'Gövdeni kasadan uzağa doğru hafifçe döndür ve öne yaslan.',
      'Göğsünde ve omzunun önünde gerilme hisset.',
      '20–40 saniye tut, taraf değiştir.'
    ],
    mistakes: ['Omzu kulağa kaldırmak.', 'Çok sert yaslanıp omzun önünü zorlamak.', 'Beli çukurlaştırmak.'],
    tips: ['Dirseği yükseltmek göğsün alt kısmını, alçaltmak üst kısmını daha çok esnetir.', 'Masa başı çalışanların öne kapanan omuzları için çok faydalıdır.'],
    variations: ['band-pass-through']
  },
  {
    id: 'childs-pose', name: "Child's Pose", nameTr: 'Çocuk Pozu',
    group: 'mobility', primary: ['lats', 'lower-back'], secondary: ['glutes', 'mid-back'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Minderin üzerine diz çök, ayak başparmakların birbirine değsin, dizlerini hafifçe aç.',
    steps: [
      'Kalçanı topuklarına doğru geriye oturt.',
      'Kollarını önde uzatarak gövdeni yere doğru bırak; alnın mindere değsin.',
      'Ellerini ileri doğru "yürüt"; kanatlarda ve belde gerilme hisset.',
      '30–60 saniye derin nefeslerle kal.'
    ],
    mistakes: ['Kalçayı topuklardan kaldırmak.', 'Omuzları kulaklara doğru sıkıştırmak.', 'Nefesi tutmak.'],
    tips: ['Ellerini bir yana kaydırmak karşı taraftaki kanadı daha çok esnetir.', 'Antrenman sonrası sakinleşmek için idealdir.'],
    variations: ['cat-cow', 'cobra-stretch']
  },
  {
    id: 'cat-cow', name: 'Cat-Cow', nameTr: 'Kedi-İnek (Omurga Mobilitesi)',
    group: 'mobility', primary: ['lower-back', 'abs'], secondary: ['mid-back'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Dört ayak pozisyonuna geç: eller omuzların, dizler kalçanın altında.',
    steps: [
      'Nefes alırken göbeğini yere bırak, göğsünü ve başını kaldır (inek).',
      'Nefes verirken sırtını tavana doğru yuvarla, çeneni göğsüne getir (kedi).',
      'İki pozisyon arasında yavaş ve akıcı şekilde gidip gel.',
      '8–12 tekrar yap.'
    ],
    mistakes: ['Hareketi hızlı ve sarsıntılı yapmak.', 'Sadece boynu hareket ettirmek.', 'Dirsekleri kilitleyip omuzları çökertmek.'],
    tips: ['Omurgayı tek tek omurlar hâlinde hareket ettirdiğini düşün.', 'Sabah sertliği ve uzun oturma sonrası için çok iyidir.'],
    variations: ['childs-pose']
  },
  {
    id: 'cobra-stretch', name: 'Cobra Stretch', nameTr: 'Kobra Esnetmesi',
    group: 'mobility', primary: ['abs', 'hip-flexors'], secondary: ['chest'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Yüzüstü uzan, ellerini omuzlarının yanına koy.',
    steps: [
      'Kalçanı yerde tutarak ellerinle iterek göğsünü yavaşça kaldır.',
      'Dirseklerin hafif bükük kalabilir; karnında ve kalçanın önünde gerilme hisset.',
      'Omuzlarını aşağı ve geriye al.',
      '15–30 saniye tut, yavaşça in. 3–5 kez tekrarla.'
    ],
    mistakes: ['Belde ağrı olmasına rağmen yükselmeye devam etmek.', 'Kalçayı yerden kaldırmak.', 'Omuzları kulaklara sıkıştırmak.'],
    tips: ['Belinde hassasiyet varsa ön kolların üzerinde (sfenks) kal.', 'Uzun süre öne eğilerek çalışanlar için iyi bir dengeleyicidir.'],
    variations: ['childs-pose', 'kneeling-hip-flexor-stretch']
  },
  {
    id: 'calf-wall-stretch', name: 'Wall Calf Stretch', nameTr: 'Duvarda Kalf Esnetme',
    group: 'mobility', primary: ['calves'], secondary: [],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Duvara dönük dur, ellerini omuz hizasında duvara koy.',
    steps: [
      'Bir ayağını geriye al; arka topuk yerde, arka diz düz olsun.',
      'Ön dizini bükerek gövdeni duvara doğru yasla.',
      'Arka bacağın kalfında gerilme hisset.',
      '30 saniye tut; sonra arka dizini hafifçe bükerek 30 saniye daha tut (soleus). Taraf değiştir.'
    ],
    mistakes: ['Arka topuğu yerden kaldırmak.', 'Arka ayağın ucunu dışa çevirmek.', 'Beli çukurlaştırmak.'],
    tips: ['Koşu sonrası mutlaka yapılması önerilen bir esnemedir.', 'Düz diz gastrocnemius’u, bükük diz soleus’u esnetir.'],
    variations: ['deep-squat-hold']
  },
  {
    id: 'deep-squat-hold', name: 'Deep Squat Hold', nameTr: 'Derin Squat’ta Bekleme',
    group: 'mobility', primary: ['adductors', 'glutes'], secondary: ['calves', 'lower-back'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Ayaklar omuz genişliğinde veya biraz geniş, ayak uçları hafifçe dışa dönük dur.',
    steps: [
      'Topuklarını yerden kaldırmadan olabildiğince derin çömel.',
      'Dirseklerinle dizlerini hafifçe dışa it, göğsünü dik tut.',
      '30–60 saniye bu pozisyonda kal; ağırlığını hafifçe sağa sola aktarabilirsin.',
      'Ellerini yere koyarak yavaşça kalk.'
    ],
    mistakes: ['Topukları kaldırmak.', 'Sırtı tamamen yuvarlamak.', 'Dizleri içe çökertmek.'],
    tips: ['Zorlanıyorsan önündeki bir direğe tutun ya da topuklarının altına ince bir plaka koy.', 'Squat tekniğini geliştirmek için her gün birkaç kez yapılabilir.'],
    variations: ['goblet-squat', 'side-lunge-stretch']
  },
  {
    id: 'worlds-greatest-stretch', name: "World's Greatest Stretch", nameTr: 'Dünyanın En İyi Esnetmesi',
    group: 'mobility', primary: ['hip-flexors', 'hamstrings'], secondary: ['glutes', 'obliques', 'mid-back'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 2,
    setup: 'Şınav pozisyonundan başla.',
    steps: [
      'Sağ ayağını sağ elinin dışına, öne doğru getir (derin lunge).',
      'Sol dizini yerden kaldırılmış ya da yerde tut; kalçanı aşağı bırak.',
      'Sağ kolunu tavana doğru açarak gövdeni sağa döndür, ellerini takip et.',
      'Elini yere geri koy, ön bacağı düzleştirip kalçanı geriye iterek arka bacağı esnet. Taraf değiştir; her tarafa 3–5 tekrar.'
    ],
    mistakes: ['Hareketleri hızlı ve kontrolsüz yapmak.', 'Ön dizi içe çökertmek.', 'Dönüşü sadece omuzla yapıp göğüs kafesini döndürmemek.'],
    tips: ['Antrenman öncesi dinamik ısınma için en verimli tek harekettir.', 'Her pozisyonda 2 saniye bekle.'],
    variations: ['kneeling-hip-flexor-stretch', 'standing-hamstring-stretch']
  },
  {
    id: 'band-pass-through', name: 'Band Pass-Through', nameTr: 'Bantla Omuz Çevirme',
    group: 'mobility', primary: ['chest', 'front-delt'], secondary: ['rear-delt', 'lats'],
    equipment: 'band', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Bir direnç bandını (veya süpürge sapını) iki elinle geniş bir tutuşla, uyluklarının önünde tut.',
    steps: [
      'Kollarını düz tutarak bandı önden başının üzerine kaldır.',
      'Devam ederek bandı başının arkasından kalçalarının arkasına indir.',
      'Aynı yoldan geri gel.',
      '10–15 tekrar yap.'
    ],
    mistakes: ['Dirsekleri bükmek.', 'Çok dar tutup omzu zorlamak.', 'Beli çukurlaştırarak geçmeye çalışmak.'],
    tips: ['Rahatça geçebildiğin en geniş tutuşla başla, zamanla daralt.', 'Üst vücut antrenmanı öncesi omuz ısınması için idealdir.'],
    variations: ['doorway-chest-stretch', 'face-pull']
  },
  {
    id: 'cross-body-shoulder-stretch', name: 'Cross-Body Shoulder Stretch', nameTr: 'Göğüs Önünde Omuz Esnetme',
    group: 'mobility', primary: ['rear-delt'], secondary: ['mid-back', 'triceps'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Dik dur veya otur.',
    steps: [
      'Bir kolunu düz şekilde göğsünün önünden karşı tarafa uzat.',
      'Diğer elinle dirseğin hemen üstünden kolunu göğsüne doğru bastır.',
      'Omzunun arka tarafında gerilme hisset.',
      '20–30 saniye tut, taraf değiştir.'
    ],
    mistakes: ['Dirseğe (eklemin üstüne) bastırmak.', 'Omzu kulağa kaldırmak.', 'Gövdeyi döndürmek.'],
    tips: ['Omuz aşağıda kalsın; gerilme omzun arkasında olmalı.', 'Üst vücut antrenmanı sonrası iyi bir soğumadır.'],
    variations: ['doorway-chest-stretch']
  },
  {
    id: 'side-lunge-stretch', name: 'Side Lunge Stretch', nameTr: 'Yana Lunge ile İç Bacak Esnetme',
    group: 'mobility', primary: ['adductors'], secondary: ['hamstrings', 'glutes'],
    equipment: 'bodyweight', machineId: null, mechanic: 'stretch', difficulty: 1,
    setup: 'Ayaklarını omuz genişliğinin iki katı açarak dur, ayak uçları öne baksın.',
    steps: [
      'Ağırlığını bir bacağa aktararak o dizini bük ve kalçanı geriye-aşağı indir.',
      'Diğer bacak düz kalsın; iç bacağında gerilme hisset.',
      '2–3 saniye bekle, ortadan geçerek diğer tarafa geç.',
      'Her tarafa 6–8 tekrar yap veya her tarafta 20 saniye bekle.'
    ],
    mistakes: ['Bükülen dizi içe çökertmek.', 'Düz bacağın ayak tabanını yerden kaldırmak.', 'Sırtı yuvarlamak.'],
    tips: ['Squat ve deadlift öncesi kalça ısınması olarak kullanılabilir.', 'Ellerini göğsünün önünde birleştirmek dengeyi kolaylaştırır.'],
    variations: ['deep-squat-hold', 'hip-adduction']
  },

  // ---------------- Kondisyon ----------------
  {
    id: 'jumping-jack', name: 'Jumping Jack', nameTr: 'Açma-Kapama Zıplama',
    group: 'conditioning', primary: ['calves', 'glute-med'], secondary: ['quads', 'side-delt', 'adductors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Ayaklar bitişik, kollar yanlarda dik dur.',
    steps: [
      'Zıplayarak ayaklarını omuz genişliğinden biraz fazla aç, aynı anda kollarını yanlardan başının üzerine kaldır.',
      'Tekrar zıplayarak ayaklarını birleştir, kollarını indir.',
      'Parmak uçlarına yumuşak şekilde basarak ritmik devam et.',
      'Süre veya tekrar hedefine göre sürdür (ör. 30 saniye).'
    ],
    breathing: 'Ritmik ve düzenli nefes al-ver; nefesini tutma.',
    mistakes: ['Topuklarla sert iniş yapmak.', 'Dizleri kilitli tutmak.', 'Kolları yarım kaldırmak.'],
    tips: ['Darbe istemiyorsan zıplamadan, adım atarak (yana adım) yap.', 'Isınma ve kondisyon devrelerinin klasik hareketidir.'],
    variations: ['high-knees', 'jump-rope']
  },
  {
    id: 'high-knees', name: 'High Knees', nameTr: 'Yüksek Diz (Yerinde Koşu)',
    group: 'conditioning', primary: ['hip-flexors', 'quads'], secondary: ['calves', 'abs'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Ayaklar kalça genişliğinde dik dur, kollar dirsekten bükük.',
    steps: [
      'Yerinde koşar gibi bir dizini kalça hizasına kadar kaldır.',
      'Hızla bacak değiştir, parmak uçlarına bas.',
      'Kollarını koşudaki gibi ters tempoda salla.',
      'Belirlenen süre boyunca hızlı tempoda devam et.'
    ],
    mistakes: ['Gövdeyi geriye yatırmak.', 'Dizleri yeterince kaldırmamak.', 'Topuklarla basmak.'],
    tips: ['Zorluğu artırmak için tempoyu artır; azaltmak için yürüyerek diz çek.', 'Kalp atışını hızla yükseltir; aralıklı antrenmanlarda sık kullanılır.'],
    variations: ['mountain-climber', 'jumping-jack']
  },
  {
    id: 'skater-jump', name: 'Skater Jump', nameTr: 'Patenci Sıçrayışı',
    group: 'conditioning', primary: ['glutes', 'glute-med', 'quads'], secondary: ['calves', 'adductors'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Hafif çömelmiş, tek ayak üzerinde dur; diğer ayak arkada havada.',
    steps: [
      'Duran bacağınla yana doğru sıçra.',
      'Karşı ayağın üzerine yumuşak şekilde kon; diğer bacak arkadan çapraz gelsin.',
      'Hemen ters yöne sıçra.',
      'Paten kayar gibi ritmik şekilde sağa sola devam et.'
    ],
    mistakes: ['Sert ve düz dizle inmek.', 'İnişte dizin içe çökmesi.', 'Gövdeyi dik tutamayıp dengeyi kaybetmek.'],
    tips: ['Önce kısa mesafe ve yavaş tempoyla başla.', 'Kalça yanı kaslarını ve dengeyi geliştirir; koşucular için faydalıdır.'],
    variations: ['jump-squat', 'reverse-lunge']
  },
  {
    id: 'jump-rope', name: 'Jump Rope', nameTr: 'İp Atlama',
    group: 'conditioning', primary: ['calves'], secondary: ['quads', 'forearms', 'front-delt'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'İpin ortasına bas, tutamaklar koltuk altına gelecek şekilde ip boyunu ayarla. Dik dur, dirsekler gövdeye yakın.',
    steps: [
      'İpi bileklerinle çevir; kollar değil bilekler döndürsün.',
      'Parmak uçlarında, yerden 2–3 cm yükselerek küçük zıplamalar yap.',
      'Ritmi koru; ip ayaklarının altından geçerken zıpla.',
      'Süre hedefine göre devam et (ör. 30–60 saniye).'
    ],
    mistakes: ['Çok yükseğe zıplamak.', 'İpi kollarla büyük daireler çizerek çevirmek.', 'Topuklarla inmek.'],
    tips: ['İpsiz de aynı ritimde zıplayarak yapılabilir.', 'Kalf ve ayak bileği dayanıklılığını, koordinasyonu geliştirir.'],
    variations: ['jumping-jack', 'high-knees']
  }
);

// Kondisyon grubuna taşınan mevcut hareketler
FIT.exercises.forEach(function (e) {
  if (e.id === 'burpee' || e.id === 'mountain-climber') e.group = 'conditioning';
});

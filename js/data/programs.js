/* Hazır antrenman programları ve ortak ısınma/soğuma rutinleri.

   Program alanları:
     goals      : hedef türleri, ilki ana hedef — muscle | strength | conditioning | fatloss | running | mobility | general
     equipType  : gym | machines | barbell | home | none
     weeks      : önerilen süre (hafta), sessionMin: seans süresi (dk)
     progression: [{ weeks: '1–2', text }] hafta hafta ne değişeceği
   Gün alanları: name, focus?, format? (ör. AMRAP açıklaması), warmup?, cooldown? (FIT.routines anahtarı), items
   Satır tipleri:
     { ex, sets, reps, rest }            kuvvet
     { ex, sets, time, rest }            süreli (plank, esneme)
     { ex|mc, rounds, work, rest }       aralıklı / devre
     { mc, dur, intensity }              kardiyo
     { label, dur?, reps? }              bağlantısız serbest satır
   Her satırda isteğe bağlı: note */

FIT.routines = {
  // ---------------- Isınma ----------------
  'warmup-general': { name: 'Genel ısınma (8–10 dk)', steps: [
    { text: 'Hafif tempolu kardiyo (bisiklet, eliptik veya hızlı yürüyüş)', mc: 'stationary-bike', dur: '5 dk' },
    { text: 'Açma-kapama zıplama', ex: 'jumping-jack', dur: '30 sn' },
    { text: 'Dünyanın en iyi esnetmesi', ex: 'worlds-greatest-stretch', dur: '3 / taraf' },
    { text: 'Bantla omuz çevirme', ex: 'band-pass-through', dur: '10 tekrar' },
    { text: 'Kalça köprüsü', ex: 'glute-bridge', dur: '10 tekrar' },
    { text: 'İlk ana harekette boş bar / hafif ağırlıkla 1–2 ısınma seti' }
  ] },
  'warmup-upper': { name: 'Üst vücut ısınması (8 dk)', steps: [
    { text: 'Hafif tempolu kardiyo', mc: 'rowing-machine', dur: '4 dk' },
    { text: 'Bantla omuz çevirme', ex: 'band-pass-through', dur: '15 tekrar' },
    { text: 'Kedi-inek', ex: 'cat-cow', dur: '8 tekrar' },
    { text: 'Çok hafif ağırlıkla yüze çekiş', ex: 'face-pull', dur: '15 tekrar' },
    { text: 'Şınav (dizler yerde olabilir)', ex: 'push-up', dur: '8–10 tekrar' },
    { text: 'İlk harekette 2 kademeli ısınma seti (%40 ve %70)' }
  ] },
  'warmup-lower': { name: 'Alt vücut ısınması (8 dk)', steps: [
    { text: 'Hafif tempolu kardiyo', mc: 'stationary-bike', dur: '4 dk' },
    { text: 'Derin squat’ta bekleme', ex: 'deep-squat-hold', dur: '30 sn' },
    { text: 'Yana lunge esnetmesi', ex: 'side-lunge-stretch', dur: '6 / taraf' },
    { text: 'Kalça köprüsü', ex: 'glute-bridge', dur: '12 tekrar' },
    { text: 'Dünyanın en iyi esnetmesi', ex: 'worlds-greatest-stretch', dur: '3 / taraf' },
    { text: 'İlk harekette 2–3 kademeli ısınma seti' }
  ] },
  'warmup-hiit': { name: 'Kondisyon ısınması (7 dk)', steps: [
    { text: 'Tempolu yürüyüş veya hafif koşu', mc: 'treadmill', dur: '3 dk' },
    { text: 'Açma-kapama zıplama', ex: 'jumping-jack', dur: '30 sn' },
    { text: 'Yüksek diz (orta tempo)', ex: 'high-knees', dur: '20 sn' },
    { text: 'Dünyanın en iyi esnetmesi', ex: 'worlds-greatest-stretch', dur: '3 / taraf' },
    { text: 'İlk aralıktan önce 2 × 10 saniye orta yoğunlukta hızlanma' }
  ] },
  'warmup-run': { name: 'Koşu ısınması (6 dk)', steps: [
    { text: 'Tempolu yürüyüş', mc: 'treadmill', dur: '5 dk' },
    { text: 'Yüksek diz (hafif)', ex: 'high-knees', dur: '20 sn' },
    { text: 'Ayakta ön bacak esnetme (kısa)', ex: 'standing-quad-stretch', dur: '10 sn / taraf' }
  ] },
  // ---------------- Soğuma ----------------
  'cooldown-full': { name: 'Soğuma (6–8 dk)', steps: [
    { text: 'Yavaş yürüyüş veya pedal', dur: '3 dk' },
    { text: 'Ayakta arka bacak esnetme', ex: 'standing-hamstring-stretch', dur: '30 sn' },
    { text: 'Dizüstü kalça bükücü esnetme', ex: 'kneeling-hip-flexor-stretch', dur: '30 sn / taraf' },
    { text: 'Kapı aralığında göğüs esnetme', ex: 'doorway-chest-stretch', dur: '30 sn / taraf' },
    { text: 'Çocuk pozu', ex: 'childs-pose', dur: '45 sn' }
  ] },
  'cooldown-upper': { name: 'Üst vücut soğuması (5 dk)', steps: [
    { text: 'Kapı aralığında göğüs esnetme', ex: 'doorway-chest-stretch', dur: '30 sn / taraf' },
    { text: 'Göğüs önünde omuz esnetme', ex: 'cross-body-shoulder-stretch', dur: '30 sn / taraf' },
    { text: 'Çocuk pozu', ex: 'childs-pose', dur: '45 sn' },
    { text: 'Kedi-inek', ex: 'cat-cow', dur: '6 tekrar' }
  ] },
  'cooldown-lower': { name: 'Alt vücut soğuması (6 dk)', steps: [
    { text: 'Ayakta arka bacak esnetme', ex: 'standing-hamstring-stretch', dur: '30 sn' },
    { text: 'Ayakta ön bacak esnetme', ex: 'standing-quad-stretch', dur: '30 sn / taraf' },
    { text: 'Dizüstü kalça bükücü esnetme', ex: 'kneeling-hip-flexor-stretch', dur: '30 sn / taraf' },
    { text: 'Güvercin esnetmesi', ex: 'pigeon-stretch', dur: '45 sn / taraf' },
    { text: 'Duvarda kalf esnetme', ex: 'calf-wall-stretch', dur: '30 sn / taraf' }
  ] },
  'cooldown-run': { name: 'Koşu sonrası soğuma (7 dk)', steps: [
    { text: 'Yavaş yürüyüş', mc: 'treadmill', dur: '5 dk' },
    { text: 'Duvarda kalf esnetme', ex: 'calf-wall-stretch', dur: '30 sn / taraf' },
    { text: 'Ayakta ön bacak esnetme', ex: 'standing-quad-stretch', dur: '30 sn / taraf' },
    { text: 'Ayakta arka bacak esnetme', ex: 'standing-hamstring-stretch', dur: '30 sn' },
    { text: 'Dizüstü kalça bükücü esnetme', ex: 'kneeling-hip-flexor-stretch', dur: '30 sn / taraf' }
  ] }
};

FIT.programs.push(
  // =====================================================================
  // KAS & GÜÇ
  // =====================================================================
  {
    id: 'beginner-full-body', name: 'Başlangıç: Tüm Vücut', level: 1, daysPerWeek: 3,
    goals: ['muscle', 'strength', 'general'], equipType: 'gym', weeks: 12, sessionMin: 55,
    goal: 'Temel hareketleri öğrenmek, genel kuvvet ve kas kazanmak',
    equipment: 'Tam donanımlı salon',
    schedule: 'Haftada 3 gün, arada en az bir dinlenme günü bırakarak A ve B antrenmanlarını sırayla yap. Örnek: Pazartesi A, Çarşamba B, Cuma A; sonraki hafta B – A – B.',
    progression: [
      { weeks: '1–2', text: 'Teknik haftaları. Setleri 3–4 tekrar yedekte bitir (zorlanma 6/10). Ağırlığı rahatça kontrol edebileceğin seviyede seç.' },
      { weeks: '3–6', text: 'Çift ilerleme: bir harekette tüm setlerde aralığın üst sınırına ulaşınca bir sonraki antrenmanda ağırlığı %2,5–5 artır. Setleri 2 tekrar yedekte bitir.' },
      { weeks: '7', text: 'Hafifletme haftası (deload): set sayılarını yarıya indir, ağırlıkları koru. Toparlanmaya odaklan.' },
      { weeks: '8–11', text: 'Squat, dambıl pres ve RDL’ye birer set ekle (4 set). Çift ilerlemeye devam et; son setler 1–2 tekrar yedekte bitsin.' },
      { weeks: '12', text: 'Hafifletme + değerlendirme: ana hareketlerde temiz 5 tekrar yapabildiğin en iyi ağırlığı not et. Sonra Üst/Alt programına geçebilirsin.' }
    ],
    days: [
      { name: 'Antrenman A', focus: 'Squat & göğüs', warmup: 'warmup-general', cooldown: 'cooldown-full', items: [
        { ex: 'back-squat', sets: 3, reps: '8–10', rest: '2–3 dk' },
        { ex: 'dumbbell-bench-press', sets: 3, reps: '8–12', rest: '2 dk' },
        { ex: 'lat-pulldown', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'romanian-deadlift', sets: 3, reps: '10', rest: '2 dk' },
        { ex: 'dumbbell-lateral-raise', sets: 2, reps: '12–15', rest: '60 sn' },
        { ex: 'plank', sets: 3, time: '30–45 sn', rest: '60 sn' }
      ] },
      { name: 'Antrenman B', focus: 'Bacak presi & sırt', warmup: 'warmup-general', cooldown: 'cooldown-full', items: [
        { ex: 'leg-press', sets: 3, reps: '10–12', rest: '2 dk' },
        { ex: 'incline-dumbbell-press', sets: 3, reps: '8–12', rest: '2 dk' },
        { ex: 'seated-cable-row', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'lying-leg-curl', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'triceps-pushdown', sets: 2, reps: '12–15', rest: '60 sn' },
        { ex: 'dumbbell-curl', sets: 2, reps: '10–12', rest: '60 sn' },
        { ex: 'dead-bug', sets: 3, reps: '10 / taraf', rest: '60 sn' }
      ] }
    ],
    notes: [
      'İlk 2 hafta ağırlığı önemseme; tekniği oturtmaya odaklan.',
      'Kullandığın ağırlıkları aşağıdaki takip alanına yaz; bir sonraki antrenmanda neyi artıracağını bilirsin.',
      'Bir hareketi makine meşgul olduğu için yapamıyorsan hareket sayfasındaki “Varyasyonlar ve alternatifler” bölümünden seç.'
    ]
  },
  {
    id: 'machine-beginner', name: 'Sadece Makinelerle Başlangıç', level: 1, daysPerWeek: 3,
    goals: ['muscle', 'general'], equipType: 'machines', weeks: 8, sessionMin: 45,
    goal: 'Salona yeni başlayanlar için güvenli ve kolay öğrenilen bir başlangıç',
    equipment: 'Makineler',
    schedule: 'Haftada 3 gün, A ve B antrenmanlarını sırayla yap. Her makinenin sayfasındaki ayar rehberine göz at.',
    progression: [
      { weeks: '1', text: 'Makineleri ve ayarlarını öğren. Her harekette 2 set, hafif ağırlıkla; ayarları telefonuna not et.' },
      { weeks: '2–4', text: '3 sete çık. Tüm setlerde 12 tekrara ulaşınca ağırlığı bir kademe (bir plaka) artır.' },
      { weeks: '5', text: 'Hafifletme: 2 set, aynı ağırlık.' },
      { weeks: '6–8', text: 'A gününe goblet squat (3 × 10), B gününe dambıl göğüs presi (3 × 10) ekle; serbest ağırlığa geçişe hazırlan.' }
    ],
    days: [
      { name: 'Antrenman A', warmup: 'warmup-general', cooldown: 'cooldown-full', items: [
        { ex: 'leg-press', sets: 3, reps: '10–12', rest: '2 dk' },
        { ex: 'machine-chest-press', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'lat-pulldown', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'seated-leg-curl', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'machine-shoulder-press', sets: 2, reps: '10–12', rest: '90 sn' },
        { ex: 'machine-crunch', sets: 2, reps: '12–15', rest: '60 sn' }
      ] },
      { name: 'Antrenman B', warmup: 'warmup-general', cooldown: 'cooldown-full', items: [
        { ex: 'leg-extension', sets: 3, reps: '12–15', rest: '90 sn' },
        { ex: 'incline-machine-press', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'chest-supported-row', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'lying-leg-curl', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'machine-lateral-raise', sets: 2, reps: '12–15', rest: '60 sn' },
        { ex: 'machine-preacher-curl', sets: 2, reps: '10–12', rest: '60 sn' },
        { ex: 'machine-triceps-dip', sets: 2, reps: '10–12', rest: '60 sn' },
        { ex: 'hip-abduction', sets: 2, reps: '15', rest: '60 sn' }
      ] }
    ],
    notes: [
      'Ağırlık bloğunun her tekrarda çarpmasına izin verme; kontrollü tempo sonucun yarısıdır.',
      'Programı bitirince “Başlangıç: Tüm Vücut” programına geçebilirsin.'
    ]
  },
  {
    id: 'upper-lower', name: 'Üst / Alt Vücut Bölünmüş', level: 2, daysPerWeek: 4,
    goals: ['muscle', 'strength'], equipType: 'gym', weeks: 12, sessionMin: 65,
    goal: 'Kas kütlesi ve kuvvet (hipertrofi odaklı)',
    equipment: 'Tam donanımlı salon',
    schedule: 'Haftada 4 gün. Örnek: Pazartesi Üst A, Salı Alt A, Perşembe Üst B, Cuma Alt B. Hafta sonu dinlenme.',
    progression: [
      { weeks: '1–4', text: 'Birikim bloğu. A günlerinde ağır (6–8), B günlerinde hacim (8–12). Her hafta ana hareketlerde +1 tekrar veya +2,5 kg hedefle; setler 2 tekrar yedekte bitsin.' },
      { weeks: '5', text: 'Hafifletme: tüm hareketlerde set sayısını yarıya indir.' },
      { weeks: '6–9', text: 'Yoğunlaştırma: ana hareketlerde (bench, row, squat, deadlift) tekrar aralığını 5–6’ya indir, ağırlığı artır. Yardımcı hareketlere birer set ekle.' },
      { weeks: '10', text: 'Hafifletme.' },
      { weeks: '11–12', text: 'Zirve: ana hareketlerde 3 × 3–5 ile en iyi ağırlıklarına çalış, yardımcı hareketleri 2 sete indir. Sonra 1. haftaya daha yüksek ağırlıklarla dön.' }
    ],
    days: [
      { name: 'Üst A', focus: 'Kuvvet ağırlıklı', warmup: 'warmup-upper', cooldown: 'cooldown-upper', items: [
        { ex: 'barbell-bench-press', sets: 4, reps: '6–8', rest: '2–3 dk' },
        { ex: 'barbell-row', sets: 4, reps: '6–8', rest: '2–3 dk' },
        { ex: 'seated-dumbbell-press', sets: 3, reps: '8–10', rest: '2 dk' },
        { ex: 'lat-pulldown', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'triceps-pushdown', sets: 3, reps: '10–12', rest: '60 sn' },
        { ex: 'ez-bar-curl', sets: 3, reps: '10–12', rest: '60 sn' }
      ] },
      { name: 'Alt A', focus: 'Squat ağırlıklı', warmup: 'warmup-lower', cooldown: 'cooldown-lower', items: [
        { ex: 'back-squat', sets: 4, reps: '6–8', rest: '3 dk' },
        { ex: 'romanian-deadlift', sets: 3, reps: '8–10', rest: '2 dk' },
        { ex: 'leg-press', sets: 3, reps: '10–12', rest: '2 dk' },
        { ex: 'lying-leg-curl', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'standing-calf-raise', sets: 4, reps: '10–15', rest: '60 sn' },
        { ex: 'hanging-leg-raise', sets: 3, reps: '10–12', rest: '60 sn' }
      ] },
      { name: 'Üst B', focus: 'Hacim ağırlıklı', warmup: 'warmup-upper', cooldown: 'cooldown-upper', items: [
        { ex: 'incline-dumbbell-press', sets: 4, reps: '8–10', rest: '2 dk' },
        { ex: 'pull-up', sets: 4, reps: '6–10', rest: '2 dk', note: 'Yapamıyorsan asistli barfiks' },
        { ex: 'dumbbell-row', sets: 3, reps: '10 / kol', rest: '90 sn' },
        { ex: 'dumbbell-lateral-raise', sets: 3, reps: '12–15', rest: '60 sn' },
        { ex: 'face-pull', sets: 3, reps: '15', rest: '60 sn' },
        { ex: 'overhead-cable-extension', sets: 3, reps: '10–12', rest: '60 sn' },
        { ex: 'hammer-curl', sets: 3, reps: '10–12', rest: '60 sn' }
      ] },
      { name: 'Alt B', focus: 'Deadlift ağırlıklı', warmup: 'warmup-lower', cooldown: 'cooldown-lower', items: [
        { ex: 'deadlift', sets: 3, reps: '5', rest: '3 dk' },
        { ex: 'bulgarian-split-squat', sets: 3, reps: '8–10 / bacak', rest: '90 sn' },
        { ex: 'hip-thrust', sets: 3, reps: '8–12', rest: '2 dk' },
        { ex: 'leg-extension', sets: 3, reps: '12–15', rest: '60 sn' },
        { ex: 'seated-leg-curl', sets: 3, reps: '10–12', rest: '60 sn' },
        { ex: 'seated-calf-raise', sets: 3, reps: '12–15', rest: '60 sn' },
        { ex: 'cable-crunch', sets: 3, reps: '12–15', rest: '60 sn' }
      ] }
    ],
    notes: [
      'Her kas grubu haftada iki kez çalışır; bu, kas gelişimi için etkili bir sıklıktır.',
      'Uyku (7–9 saat) ve yeterli protein, programın kendisi kadar önemlidir.'
    ]
  },
  {
    id: 'push-pull-legs', name: 'Push / Pull / Legs', level: 3, daysPerWeek: 6,
    goals: ['muscle'], equipType: 'gym', weeks: 12, sessionMin: 70,
    goal: 'Yüksek hacimle maksimum kas gelişimi',
    equipment: 'Tam donanımlı salon',
    schedule: 'İtiş – Çekiş – Bacak – İtiş – Çekiş – Bacak – Dinlenme. Toparlanman yetersizse döngüyü haftada 3–4 güne yayabilirsin.',
    progression: [
      { weeks: '1–3', text: 'Her harekette aralığın alt sınırından başla; her hafta tekrar veya ağırlık ekle. Son setler 1–2 tekrar yedekte bitsin.' },
      { weeks: '4', text: 'Hafifletme: set sayılarını yarıya indir.' },
      { weeks: '5–7', text: 'İkinci turdaki günlerde ana hareketleri varyasyonlarıyla değiştir (bench → dambıl pres, squat → hack squat, barbell row → T-bar row).' },
      { weeks: '8', text: 'Hafifletme.' },
      { weeks: '9–11', text: 'Kalan en zayıf 1–2 kas grubuna (ör. yan omuz, arka bacak) haftada 3–4 set ekle; tükenişe yakın son setler.' },
      { weeks: '12', text: 'Hafifletme ve değerlendirme; yeni döngüye daha yüksek ağırlıklarla başla.' }
    ],
    days: [
      { name: 'İtiş (Push)', focus: 'Göğüs, omuz, triceps', warmup: 'warmup-upper', cooldown: 'cooldown-upper', items: [
        { ex: 'barbell-bench-press', sets: 4, reps: '6–8', rest: '2–3 dk' },
        { ex: 'incline-dumbbell-press', sets: 3, reps: '8–10', rest: '2 dk' },
        { ex: 'machine-shoulder-press', sets: 3, reps: '8–10', rest: '2 dk' },
        { ex: 'cable-crossover', sets: 3, reps: '12–15', rest: '60 sn' },
        { ex: 'dumbbell-lateral-raise', sets: 4, reps: '12–20', rest: '60 sn' },
        { ex: 'triceps-pushdown', sets: 3, reps: '10–12', rest: '60 sn' },
        { ex: 'overhead-cable-extension', sets: 3, reps: '10–12', rest: '60 sn' }
      ] },
      { name: 'Çekiş (Pull)', focus: 'Sırt, arka omuz, biceps', warmup: 'warmup-upper', cooldown: 'cooldown-upper', items: [
        { ex: 'pull-up', sets: 4, reps: '6–10', rest: '2 dk' },
        { ex: 'barbell-row', sets: 4, reps: '6–8', rest: '2–3 dk' },
        { ex: 'seated-cable-row', sets: 3, reps: '10–12', rest: '90 sn' },
        { ex: 'straight-arm-pulldown', sets: 3, reps: '12–15', rest: '60 sn' },
        { ex: 'reverse-pec-deck', sets: 3, reps: '12–15', rest: '60 sn' },
        { ex: 'barbell-curl', sets: 3, reps: '8–10', rest: '60 sn' },
        { ex: 'incline-dumbbell-curl', sets: 3, reps: '10–12', rest: '60 sn' }
      ] },
      { name: 'Bacak (Legs)', focus: 'Quadriceps, kalça, hamstring, kalf', warmup: 'warmup-lower', cooldown: 'cooldown-lower', items: [
        { ex: 'back-squat', sets: 4, reps: '6–8', rest: '3 dk' },
        { ex: 'romanian-deadlift', sets: 3, reps: '8–10', rest: '2 dk' },
        { ex: 'leg-press', sets: 3, reps: '10–12', rest: '2 dk' },
        { ex: 'leg-extension', sets: 3, reps: '12–15', rest: '60 sn' },
        { ex: 'seated-leg-curl', sets: 3, reps: '10–12', rest: '60 sn' },
        { ex: 'standing-calf-raise', sets: 4, reps: '10–15', rest: '60 sn' },
        { ex: 'hanging-leg-raise', sets: 3, reps: '10–15', rest: '60 sn' }
      ] }
    ],
    notes: [
      'Yüksek hacimli bir programdır; uyku ve beslenme düzenin iyi değilse haftada 3 güne indir.',
      'Bir kasta 48 saatten uzun süren yoğun ağrı, hacmin fazla geldiğinin işaretidir; set sayısını azalt.'
    ]
  },
  {
    id: 'strength-5x5', name: 'Güç Odaklı 5×5', level: 2, daysPerWeek: 3,
    goals: ['strength'], equipType: 'barbell', weeks: 12, sessionMin: 60,
    goal: 'Temel kaldırışlarda (squat, bench, deadlift) maksimum kuvvet',
    equipment: 'Barbell ve kafes',
    schedule: 'Haftada 3 gün, A ve B antrenmanlarını sırayla yap: 1. hafta A–B–A, 2. hafta B–A–B.',
    progression: [
      { weeks: '1–4', text: 'Doğrusal ilerleme: 5×5’i tamamladığın her antrenmandan sonra squat ve deadlift’e 2,5–5 kg, bench, omuz presi ve row’a 1,25–2,5 kg ekle.' },
      { weeks: '5–8', text: 'İlerleme yavaşlar. Aynı ağırlıkta üç antrenman üst üste başarısız olursan o harekette ağırlığı %10 düşür ve yeniden tırman.' },
      { weeks: '9', text: 'Hafifletme: ağırlıkları %20 azalt, 3 × 5 yap.' },
      { weeks: '10–12', text: 'Ana hareketlerde 3 × 3’e geç ve ağırlığı artırmaya devam et. 12. haftanın sonunda 3 tekrarlık en iyi ağırlıklarını not et.' }
    ],
    days: [
      { name: 'Antrenman A', warmup: 'warmup-lower', cooldown: 'cooldown-full', items: [
        { ex: 'back-squat', sets: 5, reps: '5', rest: '3–5 dk' },
        { ex: 'barbell-bench-press', sets: 5, reps: '5', rest: '3–5 dk' },
        { ex: 'barbell-row', sets: 5, reps: '5', rest: '2–3 dk' },
        { ex: 'plank', sets: 3, time: '45 sn', rest: '60 sn' }
      ] },
      { name: 'Antrenman B', warmup: 'warmup-lower', cooldown: 'cooldown-full', items: [
        { ex: 'back-squat', sets: 5, reps: '5', rest: '3–5 dk' },
        { ex: 'overhead-press', sets: 5, reps: '5', rest: '3–5 dk' },
        { ex: 'deadlift', sets: 1, reps: '5', rest: '—' },
        { ex: 'chin-up', sets: 3, reps: '6–8', rest: '2 dk' }
      ] }
    ],
    notes: [
      'Her ana hareketten önce boş barla başlayıp kademeli ısınma setleri yap.',
      'Ağır setlerde kafesin güvenlik barlarını mutlaka ayarla.'
    ]
  },

  // =====================================================================
  // KONDİSYON
  // =====================================================================
  {
    id: 'hiit-beginner', name: 'HIIT Başlangıç', level: 1, daysPerWeek: 3,
    goals: ['conditioning', 'fatloss', 'general'], equipType: 'home', weeks: 8, sessionMin: 25,
    goal: 'Kısa sürede kondisyonu ve nefes dayanıklılığını artırmak',
    equipment: 'Ev veya salon (bisiklet ve kettlebell isteğe bağlı)',
    schedule: 'Haftada 3 gün, aralarda en az bir gün dinlenme. A – B – C sırasıyla. Dinlenme günlerinde 20–30 dk yürüyüş iyi gelir.',
    progression: [
      { weeks: '1–2', text: 'Aralıklar 20 sn iş / 40 sn dinlenme, 3 tur. Tempoyu konuşmakta zorlanacağın ama bitirebileceğin seviyede tut.' },
      { weeks: '3–4', text: '30 sn iş / 30 sn dinlenme, 3 tur. Bisiklet gününde 8 aralık.' },
      { weeks: '5–6', text: '30 sn iş / 30 sn dinlenme, 4 tur. Bisiklette 10 aralık.' },
      { weeks: '7', text: 'Hafif hafta: 3 tur, 20/40.' },
      { weeks: '8', text: '40 sn iş / 20 sn dinlenme, 4 tur. İlk haftaya göre ne kadar rahatladığını fark et.' }
    ],
    days: [
      { name: 'Gün A', focus: 'Vücut ağırlığıyla aralıklı devre', warmup: 'warmup-hiit', cooldown: 'cooldown-full',
        format: 'Hareketleri sırayla yap; hepsini bir kez yapmak 1 turdur. Turlar arasında 1 dk dinlen. İş/dinlenme süresini haftalık plana göre ayarla.',
        items: [
          { ex: 'jumping-jack', rounds: 3, work: '30 sn', rest: '30 sn' },
          { ex: 'goblet-squat', rounds: 3, work: '30 sn', rest: '30 sn', note: 'Ağırlıksız (vücut ağırlığıyla squat)' },
          { ex: 'mountain-climber', rounds: 3, work: '30 sn', rest: '30 sn' },
          { ex: 'high-knees', rounds: 3, work: '30 sn', rest: '30 sn' },
          { ex: 'push-up', rounds: 3, work: '30 sn', rest: '30 sn', note: 'Gerekirse dizler yerde' }
        ] },
      { name: 'Gün B', focus: 'Bisiklette aralıklı antrenman', warmup: 'warmup-hiit', cooldown: 'cooldown-lower', items: [
        { mc: 'stationary-bike', rounds: 8, work: '30 sn hızlı', rest: '90 sn yavaş', note: 'Bisiklet yoksa: 30 sn yüksek diz + 90 sn yürüyüş' },
        { mc: 'stationary-bike', dur: '5 dk', intensity: 'Çok hafif, soğuma temposu' }
      ] },
      { name: 'Gün C', focus: 'Kettlebell & şınav devresi', warmup: 'warmup-hiit', cooldown: 'cooldown-full',
        format: 'Devre: 4 hareketi arka arkaya yap, 90 sn dinlen, 3 tur tekrarla.',
        items: [
          { ex: 'kettlebell-swing', rounds: 3, work: '15 tekrar', rest: '—', note: 'Kettlebell yoksa kalça köprüsü' },
          { ex: 'push-up', rounds: 3, work: '8–12 tekrar', rest: '—' },
          { ex: 'reverse-lunge', rounds: 3, work: '10 / bacak', rest: '—' },
          { ex: 'plank', rounds: 3, work: '30 sn', rest: '90 sn' }
        ] }
    ],
    notes: [
      '“Yüksek yoğunluk” herkes için farklıdır: iş aralıklarında 10 üzerinden 7–8 zorlanma yeterlidir.',
      'Göğüs ağrısı, baş dönmesi veya olağandışı nefes darlığı hissedersen hemen dur.',
      'Zıplamalı hareketler dizlerini rahatsız ederse zıplamadan (adım atarak) yap.'
    ]
  },
  {
    id: 'conditioning-advanced', name: 'Kondisyon İleri (Metcon)', level: 3, daysPerWeek: 4,
    goals: ['conditioning', 'fatloss'], equipType: 'gym', weeks: 8, sessionMin: 40,
    goal: 'Yüksek yoğunluklu metabolik antrenmanla üst düzey kondisyon',
    equipment: 'Salon (air bike, kürek, kettlebell, dambıl, kutu)',
    schedule: 'Haftada 4 gün: Pazartesi A, Salı B, Perşembe C, Cumartesi D. Kuvvet antrenmanıyla birlikte yapıyorsan kondisyonu kuvvetten sonra ya da ayrı günde yap.',
    progression: [
      { weeks: '1–2', text: 'Temponu öğren: Tabata’da her 20 saniyede aynı çıktıyı koru, AMRAP’ta ilk turları hızlı başlama. Toplam tur/mesafe sayılarını not et.' },
      { weeks: '3–5', text: 'Hacmi artır: kürekte 8 aralığa, EMOM’da 20 dakikaya çık. Tabata’yı 2 set yap (arada 3 dk).' },
      { weeks: '6', text: 'Hafif hafta: her seansı %60 hacimle yap.' },
      { weeks: '7–8', text: 'Test: AMRAP tur sayını ve 250 m kürek sürelerini 1. haftayla karşılaştır.' }
    ],
    days: [
      { name: 'Gün A', focus: 'Tabata + kuvvet dayanıklılığı', warmup: 'warmup-hiit', cooldown: 'cooldown-full', items: [
        { mc: 'air-bike', rounds: 8, work: '20 sn maksimum', rest: '10 sn' },
        { ex: 'thruster', sets: 4, reps: '10', rest: '60 sn' },
        { ex: 'burpee', rounds: 4, work: '40 sn', rest: '20 sn' }
      ] },
      { name: 'Gün B', focus: 'Kürek aralıkları + taşıma', warmup: 'warmup-hiit', cooldown: 'cooldown-full', items: [
        { mc: 'rowing-machine', rounds: 6, work: '250 m hızlı', rest: '1 dk' },
        { ex: 'farmers-walk', sets: 4, reps: '40 m', rest: '90 sn' },
        { ex: 'hanging-leg-raise', sets: 3, reps: '10–12', rest: '60 sn' }
      ] },
      { name: 'Gün C', focus: 'EMOM 16 dk', warmup: 'warmup-hiit', cooldown: 'cooldown-full',
        format: 'EMOM: her dakikanın başında belirtilen tekrarı yap, dakikanın kalanında dinlen. Tek dakikalar 1. hareket, çift dakikalar 2. hareket.',
        items: [
          { ex: 'burpee', rounds: 8, work: '8 tekrar', rest: 'Dakikanın kalanı' },
          { ex: 'kettlebell-swing', rounds: 8, work: '15 tekrar', rest: 'Dakikanın kalanı' }
        ] },
      { name: 'Gün D', focus: 'AMRAP 20 dk', warmup: 'warmup-hiit', cooldown: 'cooldown-lower',
        format: 'AMRAP: aşağıdaki hareketleri sırayla, 20 dakika boyunca olabildiğince çok tur yap. Tur sayını not et.',
        items: [
          { ex: 'box-jump', reps: '10' },
          { ex: 'push-up', reps: '12' },
          { ex: 'walking-lunge', reps: '12 / bacak' },
          { ex: 'mountain-climber', reps: '20' },
          { mc: 'rowing-machine', label: 'Kürek', reps: '200 m' }
        ] }
    ],
    notes: [
      'Bu program iyi bir kondisyon ve hareket tekniği temeli gerektirir; önce HIIT Başlangıç’ı tamamlaman önerilir.',
      'Yorgunluk tekniği bozuyorsa tempoyu düşür; tur sayısı tekniğe feda edilmez.'
    ]
  },
  {
    id: 'fat-loss', name: 'Yağ Yakımı: Kuvvet + Kardiyo', level: 1, daysPerWeek: 4,
    goals: ['fatloss', 'conditioning', 'muscle'], equipType: 'gym', weeks: 10, sessionMin: 50,
    goal: 'Kas kütlesini koruyarak yağ oranını azaltmak',
    equipment: 'Tam donanımlı salon',
    schedule: 'Haftada 4 gün: Pazartesi Kuvvet A, Salı Uzun kardiyo, Perşembe Kuvvet B, Cumartesi Aralıklı kardiyo. Diğer günlerde günlük adım hedefine ulaş.',
    progression: [
      { weeks: '1–2', text: 'Kuvvet günlerinde 2–3 set, kardiyo 30 dk ve 6 aralık. Günlük 7.000 adım.' },
      { weeks: '3–5', text: 'Kuvvette tüm hareketler 3 set; ağırlıkları korumaya/artırmaya çalış. Uzun kardiyo 40 dk, aralıklı gün 8 aralık. Günlük 8.000–9.000 adım.' },
      { weeks: '6', text: 'Hafif hafta: kuvvet 2 set, kardiyo süreleri %25 kısa.' },
      { weeks: '7–10', text: 'Uzun kardiyo 45 dk, 10 aralık. Kuvvet ağırlıklarını koru; kalori açığındayken bile ağırlıkların düşmüyorsa kas kaybetmiyorsun demektir. Günlük 10.000 adım.' }
    ],
    days: [
      { name: 'Kuvvet A', focus: 'Tüm vücut, süper setler', warmup: 'warmup-general', cooldown: 'cooldown-full',
        format: 'A1/A2 ve B1/B2 süper set: iki hareketi dinlenmeden arka arkaya yap, ardından belirtilen süre dinlen.',
        items: [
          { ex: 'goblet-squat', sets: 3, reps: '10–12', rest: '—', note: 'A1' },
          { ex: 'seated-cable-row', sets: 3, reps: '12', rest: '75 sn', note: 'A2' },
          { ex: 'dumbbell-bench-press', sets: 3, reps: '10–12', rest: '—', note: 'B1' },
          { ex: 'romanian-deadlift', sets: 3, reps: '10', rest: '75 sn', note: 'B2' },
          { ex: 'plank', sets: 3, time: '30–45 sn', rest: '45 sn' }
        ] },
      { name: 'Uzun kardiyo', focus: 'Düşük yoğunluk, uzun süre (LISS)', warmup: null, cooldown: 'cooldown-run', items: [
        { mc: 'treadmill', dur: '35–45 dk', intensity: 'Eğim %8–12, hız 5–6 km/s; konuşabileceğin tempo' },
        { label: 'Alternatif', dur: 'Eliptik veya bisiklet, aynı süre ve yoğunluk' }
      ] },
      { name: 'Kuvvet B', focus: 'Tüm vücut, süper setler', warmup: 'warmup-general', cooldown: 'cooldown-full',
        format: 'A1/A2 ve B1/B2 süper set.',
        items: [
          { ex: 'leg-press', sets: 3, reps: '12', rest: '—', note: 'A1' },
          { ex: 'lat-pulldown', sets: 3, reps: '12', rest: '75 sn', note: 'A2' },
          { ex: 'walking-lunge', sets: 3, reps: '10 / bacak', rest: '—', note: 'B1' },
          { ex: 'machine-shoulder-press', sets: 3, reps: '12', rest: '75 sn', note: 'B2' },
          { ex: 'cable-crunch', sets: 3, reps: '15', rest: '45 sn' }
        ] },
      { name: 'Aralıklı kardiyo', focus: 'Kürek + merdiven', warmup: 'warmup-hiit', cooldown: 'cooldown-lower', items: [
        { mc: 'rowing-machine', rounds: 8, work: '30 sn hızlı', rest: '90 sn yavaş' },
        { mc: 'stair-climber', dur: '10 dk', intensity: 'Orta tempo, tutamaklara yaslanmadan' }
      ] }
    ],
    notes: [
      'Yağ kaybını belirleyen asıl etken beslenmedir: günlük ihtiyacının hafif altında (yaklaşık %10–20) kalori almak genelde yeterli ve sürdürülebilirdir.',
      'Her öğünde bir protein kaynağı bulundur; kalori açığında kas kaybını azaltır.',
      'Haftada ortalama 0,5–1 kg kayıp makul bir hızdır. Tartı her gün dalgalanır; haftalık ortalamaya ve bel ölçüne bak.',
      'Kronik bir rahatsızlığın varsa ya da ilaç kullanıyorsan beslenmeni değiştirmeden önce bir hekime veya diyetisyene danış.'
    ]
  },

  // =====================================================================
  // KOŞU
  // =====================================================================
  {
    id: 'couch-to-5k', name: 'Koşu: 0’dan 5 km’ye', level: 1, daysPerWeek: 3,
    goals: ['running', 'conditioning', 'fatloss'], equipType: 'none', weeks: 8, sessionMin: 30,
    goal: '8 haftada hiç koşmamış birinin 30 dakika kesintisiz koşabilmesi',
    equipment: 'Koşu ayakkabısı (açık hava veya koşu bandı)',
    schedule: 'Haftada 3 seans, arada en az bir gün dinlenme (ör. Pazartesi, Çarşamba, Cumartesi). Her seans: ısınma yürüyüşü + haftanın aralıkları + soğuma yürüyüşü.',
    progression: [
      { weeks: '1', text: '8 × (60 sn koşu + 90 sn yürüyüş) — toplam 20 dk' },
      { weeks: '2', text: '6 × (90 sn koşu + 2 dk yürüyüş) — toplam 21 dk' },
      { weeks: '3', text: '2 × (90 sn koşu + 90 sn yürüyüş + 3 dk koşu + 3 dk yürüyüş) — toplam 18 dk' },
      { weeks: '4', text: '2 × (3 dk koşu + 90 sn yürüyüş + 5 dk koşu + 2,5 dk yürüyüş) — toplam 24 dk' },
      { weeks: '5', text: 'Seans 1–2: 3 × (5 dk koşu + 3 dk yürüyüş). Seans 3: 20 dk kesintisiz koşu' },
      { weeks: '6', text: 'Seans 1–2: 10 dk koşu + 3 dk yürüyüş + 10 dk koşu. Seans 3: 22 dk kesintisiz koşu' },
      { weeks: '7', text: '25 dk kesintisiz koşu' },
      { weeks: '8', text: '28–30 dk kesintisiz koşu (yaklaşık 5 km). Tebrikler!' }
    ],
    days: [
      { name: 'Koşu seansı', focus: 'Haftada 3 kez aynı yapı', warmup: 'warmup-run', cooldown: 'cooldown-run', items: [
        { mc: 'treadmill', label: 'Koşu–yürüyüş aralıkları', dur: 'Haftalık plana göre', intensity: 'Konuşabileceğin kadar yavaş koşu tempo; nefes nefese kalmamalısın' }
      ] }
    ],
    notes: [
      'Hız önemli değil: koşarken kısa cümlelerle konuşabilmelisin. Zorlanırsan daha yavaş koş, durma.',
      'Bir haftayı zor bulduysan o haftayı tekrar etmekte sakınca yok.',
      'Koşu bandında %1 eğim, açık hava koşusuna daha yakın bir his verir.',
      'Dizde, kaval kemiğinde veya ayakta keskin bir ağrı olursa ara ver; devam ederse bir uzmana danış.'
    ]
  },

  // =====================================================================
  // ESNEKLİK & MOBİLİTE
  // =====================================================================
  {
    id: 'daily-mobility', name: 'Günlük Mobilite (12 dk)', level: 1, daysPerWeek: 7,
    goals: ['mobility', 'general'], equipType: 'none', weeks: 4, sessionMin: 12,
    goal: 'Eklem hareket açıklığını artırmak, sertliği ve duruş bozukluklarını azaltmak',
    equipment: 'Minder (direnç bandı veya süpürge sapı isteğe bağlı)',
    schedule: 'Her gün A ve B rutinlerini sırayla yap. Sabah, antrenman sonrası veya akşam yapılabilir. Isınma gerekmez; ilk tekrarları yavaş yap.',
    progression: [
      { weeks: '1', text: 'Her esnemede 20 sn bekle; gerilme 10 üzerinden 4–5 olsun. Acı hissi olmamalı.' },
      { weeks: '2', text: 'Beklemeleri 30 sn’ye çıkar.' },
      { weeks: '3', text: 'En gergin hissettiğin 2 bölgeye (ör. kalça bükücü, göğüs) ikinci set ekle.' },
      { weeks: '4+', text: 'Beklemeler 45 sn. Rutini günlük alışkanlığa dönüştür; hareket açıklığındaki farkı ilk haftayla karşılaştır.' }
    ],
    days: [
      { name: 'Rutin A', focus: 'Kalça & alt vücut', warmup: null, cooldown: null, items: [
        { ex: 'deep-squat-hold', sets: 2, time: '30 sn', rest: '—' },
        { ex: 'kneeling-hip-flexor-stretch', sets: 2, time: '30 sn / taraf', rest: '—' },
        { ex: 'pigeon-stretch', sets: 1, time: '45 sn / taraf', rest: '—' },
        { ex: 'standing-hamstring-stretch', sets: 2, time: '30 sn', rest: '—' },
        { ex: 'side-lunge-stretch', sets: 1, reps: '6 / taraf', rest: '—' },
        { ex: 'calf-wall-stretch', sets: 1, time: '30 sn / taraf', rest: '—' }
      ] },
      { name: 'Rutin B', focus: 'Omurga, omuz & göğüs', warmup: null, cooldown: null, items: [
        { ex: 'cat-cow', sets: 2, reps: '8', rest: '—' },
        { ex: 'worlds-greatest-stretch', sets: 1, reps: '3 / taraf', rest: '—' },
        { ex: 'band-pass-through', sets: 2, reps: '10', rest: '—' },
        { ex: 'doorway-chest-stretch', sets: 2, time: '30 sn / taraf', rest: '—' },
        { ex: 'cross-body-shoulder-stretch', sets: 1, time: '30 sn / taraf', rest: '—' },
        { ex: 'cobra-stretch', sets: 3, time: '15 sn', rest: '—' },
        { ex: 'childs-pose', sets: 1, time: '45 sn', rest: '—' }
      ] }
    ],
    notes: [
      'Esneme asla keskin ağrı vermemeli; hafif bir gerilme hissi yeterlidir.',
      'Yaylanarak (sektirerek) esneme yapma; pozisyonu yavaşça al ve bekle.',
      'Esneklik yavaş gelişir; düzenli yapmak, uzun süre yapmaktan daha etkilidir.'
    ]
  },
  {
    id: 'desk-worker', name: 'Masa Başı Çalışanlar İçin Esneklik', level: 1, daysPerWeek: 4,
    goals: ['mobility', 'general'], equipType: 'none', weeks: 6, sessionMin: 15,
    goal: 'Uzun süre oturmanın getirdiği kalça, bel, göğüs ve boyun sertliğini azaltmak',
    equipment: 'Minder, bir kapı aralığı (bant isteğe bağlı)',
    schedule: 'Haftada en az 4 gün, tercihen iş gününün sonunda. Gün içinde her 45–60 dakikada bir kalkıp 2 dk hareket et.',
    progression: [
      { weeks: '1–2', text: 'Rutini yavaş tempoda öğren; beklemeler 20–30 sn.' },
      { weeks: '3–4', text: 'Beklemeler 30–45 sn; kalça köprüsünü 3 set yap.' },
      { weeks: '5–6', text: 'Rutini haftada 5–6 güne çıkar. Öğle arasında sadece kalça bükücü + göğüs esnetmesini içeren 3 dakikalık mini sürüm ekle.' }
    ],
    days: [
      { name: 'Masa başı rutini', focus: 'Kalça bükücü, göğüs, sırt ve arka bacak', warmup: null, cooldown: null, items: [
        { ex: 'cat-cow', sets: 1, reps: '10', rest: '—' },
        { ex: 'kneeling-hip-flexor-stretch', sets: 2, time: '30 sn / taraf', rest: '—' },
        { ex: 'doorway-chest-stretch', sets: 2, time: '30 sn / taraf', rest: '—' },
        { ex: 'cobra-stretch', sets: 3, time: '15 sn', rest: '—' },
        { ex: 'worlds-greatest-stretch', sets: 1, reps: '3 / taraf', rest: '—' },
        { ex: 'standing-hamstring-stretch', sets: 1, time: '30 sn', rest: '—' },
        { ex: 'band-pass-through', sets: 2, reps: '10', rest: '—' },
        { ex: 'glute-bridge', sets: 2, reps: '12', rest: '30 sn', note: 'Uzun oturmada “uyuyan” kalça kaslarını uyandırır' },
        { ex: 'dead-bug', sets: 2, reps: '8 / taraf', rest: '30 sn' }
      ] }
    ],
    notes: [
      'Ekranın üst kenarı göz hizasında, ayaklar yere tam basacak şekilde otur.',
      'Esnemek oturma süresini telafi etmez; gün içinde sık sık kalkıp yürümek en etkili çözümdür.',
      'Uyuşma, karıncalanma veya kola/bacağa yayılan ağrı varsa bir uzmana danış.'
    ]
  },

  // =====================================================================
  // EV
  // =====================================================================
  {
    id: 'home-bodyweight', name: 'Evde Vücut Ağırlığı', level: 1, daysPerWeek: 3,
    goals: ['general', 'conditioning', 'muscle'], equipType: 'none', weeks: 8, sessionMin: 35,
    goal: 'Ekipmansız genel kondisyon ve kuvvet',
    equipment: 'Ekipmansız (sandalye, masa)',
    schedule: 'Haftada 3 gün. Hareketleri sırayla bir kez yap (1 tur), tur bitince 2 dakika dinlen ve toplam 3 tur tamamla. A ve B günlerini sırayla uygula.',
    progression: [
      { weeks: '1–2', text: '3 tur, her harekette aralığın alt sınırı. Formu oturt.' },
      { weeks: '3–4', text: 'Aralığın üst sınırına çık; turlar arası dinlenmeyi 90 sn’ye indir.' },
      { weeks: '5', text: 'Hafif hafta: 2 tur.' },
      { weeks: '6–8', text: 'Zor varyasyonlara geç: şınav → ayaklar yüksekte şınav, lunge → Bulgar split squat, plank → daha uzun süre. 4 tur.' }
    ],
    days: [
      { name: 'Antrenman A', focus: 'Devre', warmup: 'warmup-hiit', cooldown: 'cooldown-full', items: [
        { ex: 'push-up', sets: 3, reps: '8–15', rest: '30 sn' },
        { ex: 'reverse-lunge', sets: 3, reps: '10 / bacak', rest: '30 sn' },
        { ex: 'inverted-row', sets: 3, reps: '8–12', rest: '30 sn', note: 'Sağlam bir masanın altında' },
        { ex: 'glute-bridge', sets: 3, reps: '15', rest: '30 sn' },
        { ex: 'pike-push-up', sets: 3, reps: '6–10', rest: '30 sn' },
        { ex: 'plank', sets: 3, time: '30–45 sn', rest: '30 sn' }
      ] },
      { name: 'Antrenman B', focus: 'Devre', warmup: 'warmup-hiit', cooldown: 'cooldown-full', items: [
        { ex: 'bulgarian-split-squat', sets: 3, reps: '8–12 / bacak', rest: '30 sn' },
        { ex: 'diamond-push-up', sets: 3, reps: '6–12', rest: '30 sn' },
        { ex: 'single-leg-rdl', sets: 3, reps: '10 / bacak', rest: '30 sn' },
        { ex: 'bench-dip', sets: 3, reps: '10–15', rest: '30 sn' },
        { ex: 'single-leg-calf-raise', sets: 3, reps: '12–15 / bacak', rest: '30 sn' },
        { ex: 'dead-bug', sets: 3, reps: '10 / taraf', rest: '30 sn' },
        { ex: 'burpee', sets: 3, reps: '8–10', rest: '30 sn' }
      ] }
    ],
    notes: [
      'Lunge, split squat ve RDL hareketlerini dambıl olmadan, yalnızca vücut ağırlığınla yap; su şişesi veya sırt çantası ağırlık olarak kullanılabilir.',
      'Masanın altında ters kürek yaparken masanın devrilmeyeceğinden emin ol.'
    ]
  }
);

/* Kol hareketleri: biceps, triceps, ön kol */
FIT.exercises.push(
  // ---------------- Biceps ----------------
  {
    id: 'barbell-curl', name: 'Barbell Curl', nameTr: 'Barbell ile Biceps Curl',
    group: 'biceps', primary: ['biceps'], secondary: ['forearms'],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dik dur, barı omuz genişliğinde, avuç içleri öne bakacak şekilde kavra. Dirsekler gövdenin yanında olsun.',
    steps: [
      'Dirseklerini sabit tutarak barı göğsüne doğru kaldır.',
      'Tepede biceps’i sık; dirsekler öne kaymasın.',
      'Barı kontrollü şekilde, kollar tamamen düzleşene kadar indir.',
      'Bir sonraki tekrara geç.'
    ],
    mistakes: [
      'Gövdeyi geriye atarak ağırlığı savurmak.',
      'Dirsekleri öne getirip ön omzu devreye sokmak.',
      'Aşağıda kolları tam açmamak.'
    ],
    tips: [
      'İnişi 2–3 saniyede yapmak gelişimi hızlandırır.',
      'Düz bar bileklerini zorluyorsa EZ bar kullan.'
    ],
    variations: ['ez-bar-curl', 'dumbbell-curl', 'cable-curl']
  },
  {
    id: 'ez-bar-curl', name: 'EZ-Bar Curl', nameTr: 'EZ Bar ile Biceps Curl',
    group: 'biceps', primary: ['biceps'], secondary: ['forearms'],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'EZ barı kıvrımlı kısımlarından, avuç içleri hafif içe dönük olacak şekilde kavra. Dik dur, dirsekler yanlarda.',
    steps: [
      'Dirsekleri sabit tutarak barı yukarı kıvır.',
      'Tepede biceps’i sık.',
      'Kontrollü şekilde tamamen indir.',
      'Gövdeyi hareket boyunca sabit tut.'
    ],
    mistakes: [
      'Gövdeyle sallanmak.',
      'Dirsekleri öne veya arkaya kaydırmak.',
      'Yarım tekrar yapmak.'
    ],
    tips: [
      'Kıvrımlı bar bileklere düz bardan daha az yük bindirir.',
      'Dar tutuş biceps’in uzun başını, geniş tutuş kısa başını biraz daha öne çıkarır.'
    ],
    variations: ['barbell-curl', 'preacher-curl']
  },
  {
    id: 'dumbbell-curl', name: 'Dumbbell Curl', nameTr: 'Dambıl ile Biceps Curl',
    group: 'biceps', primary: ['biceps'], secondary: ['forearms'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dik dur veya otur; dambıllar yanlarında, avuç içleri gövdene baksın.',
    steps: [
      'Dambılı kaldırırken bileğini dışa çevir; avuç içi yukarı baksın.',
      'Dambılı omuz hizasına kadar kaldır ve biceps’i sık.',
      'Kontrollü şekilde indirirken bileği yeniden nötr konuma döndür.',
      'Kolları aynı anda veya sırayla çalıştırabilirsin.'
    ],
    mistakes: [
      'Dambılı savurmak.',
      'Dirseği öne getirmek.',
      'Bileği bükerek kaldırmak.'
    ],
    tips: [
      'Bileği dışa çevirmek (supinasyon) biceps’in ikinci görevidir; kasılmayı artırır.',
      'Tek tek yapmak her kola daha fazla odaklanmayı sağlar.'
    ],
    variations: ['hammer-curl', 'incline-dumbbell-curl', 'concentration-curl']
  },
  {
    id: 'hammer-curl', name: 'Hammer Curl', nameTr: 'Çekiç Curl',
    group: 'biceps', primary: ['biceps', 'forearms'], secondary: [],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dambılları avuç içleri birbirine bakacak (nötr) şekilde tut. Dirsekler yanlarında.',
    steps: [
      'Bileği çevirmeden dambılı yukarı kaldır; çekiç sallar gibi.',
      'Omuz hizasına yaklaşınca sık.',
      'Kontrollü şekilde indir.',
      'Tekrarla.'
    ],
    mistakes: [
      'Gövdeyle sallanmak.',
      'Dirsekleri kaldırmak.',
      'Bileği yukarı veya aşağı bükerek hareketi bilekten yapmak.'
    ],
    tips: [
      'Brachialis ve brachioradialis’i (ön kolun üst kısmı) güçlü çalıştırır; kol kalınlığı için iyidir.',
      'Halatla kabloda da yapılabilir.'
    ],
    variations: ['dumbbell-curl', 'reverse-curl']
  },
  {
    id: 'incline-dumbbell-curl', name: 'Incline Dumbbell Curl', nameTr: 'Eğimli Sehpada Dambıl Curl',
    group: 'biceps', primary: ['biceps'], secondary: ['forearms'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 2,
    setup: 'Sehpayı 45–60° eğime ayarla ve sırtüstü yaslan. Kolların omuzlarının arkasında, yere doğru sarksın; avuçlar öne baksın.',
    steps: [
      'Dirsekleri sabit tutarak dambılları kaldır.',
      'Tepede biceps’i sık.',
      'Kolların tam uzayana kadar yavaşça indir; biceps’te gerilme hisset.',
      'Omuzlarını öne kaldırma.'
    ],
    mistakes: [
      'Dirsekleri öne getirerek gerilmeyi kaybetmek.',
      'Çok ağır dambıl kullanmak.',
      'Aşağıda kolları tam açmamak.'
    ],
    tips: [
      'Kol gövdenin arkasında olduğu için biceps’in uzun başı daha fazla gerilir.',
      'Normal curl’den daha hafif ağırlıkla çalışman gerekir.'
    ],
    variations: ['dumbbell-curl', 'bayesian-cable-curl']
  },
  {
    id: 'concentration-curl', name: 'Concentration Curl', nameTr: 'Konsantrasyon Curl',
    group: 'biceps', primary: ['biceps'], secondary: [],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Sehpaya bacakların açık otur. Dambılı tutan kolunun dirseğini aynı taraftaki uyluğunun iç kısmına daya.',
    steps: [
      'Kolun aşağıda düz başla.',
      'Dambılı omzuna doğru kaldır.',
      'Tepede biceps’i 1 saniye sık.',
      'Yavaşça indir.'
    ],
    mistakes: [
      'Dirseği uyluktan kaldırmak.',
      'Gövdeyi geriye çekerek yardım almak.',
      'Hızlı yapmak.'
    ],
    tips: [
      'Hileyi neredeyse imkânsız kılar; kasın kasılmasını hissetmek için iyidir.',
      'Antrenmanın sonunda bitirici olarak kullan.'
    ],
    variations: ['preacher-curl', 'spider-curl']
  },
  {
    id: 'preacher-curl', name: 'EZ-Bar Preacher Curl', nameTr: 'Scott Sehpasında EZ Bar Curl',
    group: 'biceps', primary: ['biceps'], secondary: ['forearms'],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Scott (preacher) sehpasının koltuğunu, koltuk altların pedin üst kenarına oturacak şekilde ayarla. Üst kolların pede tamamen yaslansın.',
    steps: [
      'EZ barı avuçlar yukarı bakacak şekilde kavra.',
      'Barı omuzlarına doğru kaldır.',
      'Tepede sık.',
      'Kontrollü şekilde, kollar neredeyse tamamen açılana kadar indir.'
    ],
    mistakes: [
      'Alt noktada ağırlığı serbest bırakıp dirseği sertçe açmak — biceps tendonunu zorlar.',
      'Kalçayı kaldırıp gövdeyle yardım almak.',
      'Omuzları öne yuvarlamak.'
    ],
    tips: [
      'Hareketin alt kısmı (gerilme bölümü) en değerli kısımdır; burada yavaşla.',
      'Dambılla tek kol da yapılabilir.'
    ],
    variations: ['machine-preacher-curl', 'concentration-curl']
  },
  {
    id: 'machine-preacher-curl', name: 'Machine Preacher Curl', nameTr: 'Makinede Biceps Curl',
    group: 'biceps', primary: ['biceps'], secondary: [],
    equipment: 'machine', machineId: 'preacher-curl-machine', mechanic: 'isolation', difficulty: 1,
    setup: 'Koltuğu, dirseklerin makinenin dönme ekseniyle aynı hizaya gelecek şekilde ayarla. Üst kollarını pede yasla.',
    steps: [
      'Tutamakları avuçlar yukarı bakacak şekilde kavra.',
      'Tutamakları omuzlarına doğru kıvır.',
      'Tepede 1 saniye sık.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Dirsekleri pedden kaldırmak.',
      'Koltuk ayarını yapmamak.',
      'Ağırlığı düşürür gibi bırakmak.'
    ],
    tips: [
      'Makine, hareketin tamamında sabit direnç sağlar.',
      'Yeni başlayanlar için tekniği öğrenmesi en kolay biceps hareketidir.'
    ],
    variations: ['preacher-curl', 'cable-curl']
  },
  {
    id: 'cable-curl', name: 'Cable Curl', nameTr: 'Kablo ile Biceps Curl',
    group: 'biceps', primary: ['biceps'], secondary: ['forearms'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 1,
    setup: 'Makarayı en alt seviyeye ayarla, düz veya EZ bar tak. Makaraya dönük dik dur, barı avuçlar yukarı bakacak şekilde kavra.',
    steps: [
      'Dirsekleri yanlarında sabit tutarak barı yukarı kıvır.',
      'Tepede biceps’i sık.',
      'Kontrollü şekilde indir.',
      'Kablonun gerginliğini hiç kaybetme.'
    ],
    mistakes: [
      'Makaraya çok yakın durmak.',
      'Gövdeyle sallanmak.',
      'Dirsekleri öne getirmek.'
    ],
    tips: [
      'Kablo hareketin tamamında gerilim sağlar.',
      'Halat takarak hammer curl versiyonunu yapabilirsin.'
    ],
    variations: ['bayesian-cable-curl', 'barbell-curl']
  },
  {
    id: 'spider-curl', name: 'Spider Curl', nameTr: 'Spider Curl',
    group: 'biceps', primary: ['biceps'], secondary: [],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 2,
    setup: 'Eğimli sehpaya (45°) yüzüstü uzan; göğsün sehpanın üst kısmına dayansın. Kolların dambıllarla birlikte yere dik sarksın.',
    steps: [
      'Dirsekleri sabit tutarak dambılları yukarı kıvır.',
      'Tepede biceps’i güçlü şekilde sık.',
      'Kontrollü şekilde indir.',
      'Omuzlarını hareket ettirme.'
    ],
    mistakes: [
      'Dirsekleri geriye çekmek.',
      'Çok ağır dambıl kullanmak.',
      'Hızlı yapmak.'
    ],
    tips: [
      'Hareketin üst kısmında (tam kasılmada) direnç en yüksektir.',
      'Incline curl ile birlikte kullanınca biceps hem gerilmiş hem kasılmış pozisyonda çalışır.'
    ],
    variations: ['concentration-curl', 'incline-dumbbell-curl']
  },
  {
    id: 'bayesian-cable-curl', name: 'Bayesian Cable Curl', nameTr: 'Arkadan Kablo Curl (Bayesian)',
    group: 'biceps', primary: ['biceps'], secondary: ['forearms'],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 2,
    setup: 'Makarayı en alt seviyeye ayarla, tek tutamak tak. Makaraya sırtını dön ve bir adım öne çık; çalışan kol gövdenin gerisinde kalsın.',
    steps: [
      'Kol gövdenin arkasında, avuç öne bakarken başla.',
      'Dirseği sabit tutarak tutamağı omzuna doğru kıvır.',
      'Tepede sık.',
      'Kolun tam uzayana ve biceps gerilene kadar yavaşça indir.'
    ],
    mistakes: [
      'Dirseği öne getirmek.',
      'Gövdeyi öne yatırıp gerilmeyi azaltmak.',
      'Ağırlığı çok artırmak.'
    ],
    tips: [
      'Biceps’i en gerilmiş pozisyonda yükler; incline curl’ün kablolu versiyonudur.',
      'Kademeli duruş (bir ayak önde) dengeyi artırır.'
    ],
    variations: ['incline-dumbbell-curl', 'cable-curl']
  },

  // ---------------- Triceps ----------------
  {
    id: 'triceps-pushdown', name: 'Triceps Pushdown', nameTr: 'Kablo ile Triceps İtiş (Pushdown)',
    group: 'triceps', primary: ['triceps'], secondary: [],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 1,
    setup: 'Makarayı en üst seviyeye ayarla, halat veya düz bar tak. Makaraya dönük dur, tutamağı kavra ve dirseklerini gövdenin yanına sabitle.',
    steps: [
      'Dirsekler yaklaşık 90° bükük başla.',
      'Dirsekleri sabit tutarak tutamağı aşağı, kolların tamamen düzleşene kadar it.',
      'Altta triceps’i sık (halatta uçları hafifçe ayır).',
      'Kontrollü şekilde yukarı dön; dirsekler yerinden oynamasın.'
    ],
    mistakes: [
      'Dirsekleri öne-arkaya hareket ettirmek.',
      'Gövdeyi öne eğip üstten bastırmak.',
      'Tutamağı yüz hizasına kadar çıkarmak.'
    ],
    tips: [
      'Halat daha doğal bir bilek açısı sağlar; düz bar daha ağır yüklemeye izin verir.',
      'Ters tutuşla (avuç yukarı) yapmak farklı bir kasılma hissi verir.'
    ],
    variations: ['overhead-cable-extension', 'triceps-kickback', 'skull-crusher']
  },
  {
    id: 'overhead-cable-extension', name: 'Overhead Cable Extension', nameTr: 'Baş Üstü Kablo Triceps Uzatma',
    group: 'triceps', primary: ['triceps'], secondary: [],
    equipment: 'cable', machineId: 'cable-station', mechanic: 'isolation', difficulty: 2,
    setup: 'Makarayı alçak veya orta seviyeye ayarla, halat tak. Makaraya sırtını dön, halatı başının arkasında tut ve bir adım öne çık; gövde hafif öne eğik.',
    steps: [
      'Dirsekler başının yanında, yukarı bakacak şekilde başla.',
      'Dirsekleri sabit tutarak kollarını öne ve yukarı uzat.',
      'Kollar düzleşince triceps’i sık.',
      'Kontrollü şekilde, triceps’te gerilme hissedene kadar geri bük.'
    ],
    mistakes: [
      'Dirsekleri yanlara açmak.',
      'Beli kavislendirmek.',
      'Hareket açıklığını kısaltmak.'
    ],
    tips: [
      'Kol baş üstündeyken triceps’in uzun başı en çok gerilir; araştırmalar bunun daha iyi gelişim sağladığını gösteriyor.',
      'Tek kolla da yapılabilir.'
    ],
    variations: ['dumbbell-overhead-extension', 'skull-crusher', 'triceps-pushdown']
  },
  {
    id: 'skull-crusher', name: 'Skull Crusher', nameTr: 'Yatarak Triceps Uzatma (Skull Crusher)',
    group: 'triceps', primary: ['triceps'], secondary: [],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 2,
    setup: 'Düz sehpaya uzan. EZ barı dar tutuşla kavra ve kolların göğsünün üzerinde dik olacak şekilde kaldır; sonra kolları hafifçe başına doğru eğ.',
    steps: [
      'Üst kolları sabit tutarak dirsekleri bük ve barı alnının hemen arkasına doğru indir.',
      'Triceps’te gerilme hissedince dur.',
      'Dirsekleri açarak barı başlangıç pozisyonuna it.',
      'Dirsekleri yanlara açma.'
    ],
    mistakes: [
      'Barı yüzüne doğru indirip kontrolü kaybetmek.',
      'Dirsekleri dışa açmak.',
      'Çok ağır yükle dirsek eklemini zorlamak.'
    ],
    tips: [
      'Barı başın arkasına indirmek triceps uzun başını daha fazla gerer.',
      'Dirseklerinde ağrı varsa dambıl veya kablo versiyonunu dene.'
    ],
    variations: ['overhead-cable-extension', 'close-grip-bench-press']
  },
  {
    id: 'close-grip-bench-press', name: 'Close-Grip Bench Press', nameTr: 'Dar Tutuş Bench Press',
    group: 'triceps', primary: ['triceps'], secondary: ['chest', 'front-delt'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Düz sehpaya uzan; barı omuz genişliğinde (ya da biraz daha dar) kavra. Kürek kemiklerini sık, ayaklarını yere bas.',
    steps: [
      'Barı raftan al ve omuzlarının üzerine getir.',
      'Dirsekleri gövdene yakın tutarak barı göğsünün alt kısmına indir.',
      'Göğse hafifçe değince yukarı it.',
      'Kolları kilitle.'
    ],
    mistakes: [
      'Elleri birbirine çok yakın tutmak — bilekleri zorlar.',
      'Dirsekleri yana açmak.',
      'Barı sektirmek.'
    ],
    tips: [
      'Triceps için en ağır yüklenebilen hareketlerden biridir.',
      'Bench press’teki kilitleme gücünü de artırır.'
    ],
    variations: ['barbell-bench-press', 'skull-crusher', 'diamond-push-up']
  },
  {
    id: 'dumbbell-overhead-extension', name: 'Dumbbell Overhead Extension', nameTr: 'Dambıl ile Baş Üstü Triceps Uzatma',
    group: 'triceps', primary: ['triceps'], secondary: [],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Sırt destekli bir sehpaya otur. Bir dambılı iki elinle üst plakasının altından kavra ve başının üzerine kaldır.',
    steps: [
      'Dirsekleri yukarıda sabit tutarak dambılı başının arkasına doğru indir.',
      'Triceps’te gerilme hissedince dur.',
      'Dirsekleri açarak dambılı yukarı kaldır.',
      'Üstte triceps’i sık.'
    ],
    mistakes: [
      'Dirsekleri yanlara açmak.',
      'Beli kavislendirmek.',
      'Dambılı gevşek kavramak.'
    ],
    tips: [
      'Oturarak ve sırt destekli yapmak beli korur.',
      'Tek kolla yapılabilir; diğer elinle çalışan kolu destekle.'
    ],
    variations: ['overhead-cable-extension', 'skull-crusher']
  },
  {
    id: 'triceps-kickback', name: 'Dumbbell Kickback', nameTr: 'Dambıl ile Triceps Kickback',
    group: 'triceps', primary: ['triceps'], secondary: [],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Tek kol dambıl kürek çekişteki gibi bir sehpaya dayan. Üst kolunu gövdenle paralel olacak şekilde yukarıda sabitle; dirsek 90° bükük olsun.',
    steps: [
      'Üst kolu sabit tutarak dirseği aç ve dambılı geriye uzat.',
      'Kol tamamen düzleşince triceps’i sık.',
      'Kontrollü şekilde 90°’ye geri dön.',
      'Üst kolun aşağı düşmesine izin verme.'
    ],
    mistakes: [
      'Dambılı sallayarak geriye fırlatmak.',
      'Üst kolu indirmek.',
      'Çok ağır dambıl kullanmak.'
    ],
    tips: [
      'Hafif ağırlıkla tepe noktasında sıkmaya odaklan.',
      'Kabloyla yapmak hareketin başında da gerilim sağlar.'
    ],
    variations: ['triceps-pushdown']
  },
  {
    id: 'bench-dip', name: 'Bench Dip', nameTr: 'Sehpada Triceps Dips',
    group: 'triceps', primary: ['triceps'], secondary: ['front-delt', 'chest'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Bir sehpanın kenarına otur, ellerini kalçanın yanında kenara koy. Kalçanı sehpadan öne kaydır; bacaklar önde, dizler bükük veya düz.',
    steps: [
      'Dirsekleri geriye doğru bükerek kalçanı aşağı indir.',
      'Üst kolların yere yaklaşık paralel olunca dur.',
      'Ellerinle iterek yukarı çık.',
      'Sırtını sehpaya yakın tut.'
    ],
    mistakes: [
      'Çok derine inip omzun önünü aşırı germek.',
      'Dirsekleri yanlara açmak.',
      'Kalçayı sehpadan çok uzakta tutmak.'
    ],
    tips: [
      'Bacakları bükmek kolaylaştırır, düzleştirmek veya ayakları yükseltmek zorlaştırır.',
      'Omuz ağrısı varsa bu hareket yerine pushdown tercih et.'
    ],
    variations: ['triceps-dip', 'machine-triceps-dip']
  },
  {
    id: 'diamond-push-up', name: 'Diamond Push-Up', nameTr: 'Elmas Şınav',
    group: 'triceps', primary: ['triceps'], secondary: ['chest', 'front-delt', 'abs'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Şınav pozisyonuna geç; başparmak ve işaret parmaklarını birleştirerek göğsünün altında bir elmas şekli oluştur.',
    steps: [
      'Vücudunu düz bir çizgide tut.',
      'Dirsekleri gövdene yakın tutarak göğsünü ellerine doğru indir.',
      'Göğsün ellerine yaklaşınca yeri it.',
      'Kolları düzleştir.'
    ],
    mistakes: [
      'Kalçayı sarkıtmak.',
      'Dirsekleri yana açmak.',
      'Yarım tekrar yapmak.'
    ],
    tips: [
      'Zor geliyorsa dizlerin üzerinde veya eller yüksekte başla.',
      'Evde triceps için en etkili harekettir.'
    ],
    variations: ['push-up', 'close-grip-bench-press']
  },
  {
    id: 'machine-triceps-dip', name: 'Seated Dip Machine', nameTr: 'Makinede Oturarak Triceps Dips',
    group: 'triceps', primary: ['triceps'], secondary: ['chest', 'front-delt'],
    equipment: 'machine', machineId: 'triceps-dip-machine', mechanic: 'compound', difficulty: 1,
    setup: 'Koltuğu, tutamaklar gövdenin yanında, dirsekler yaklaşık 90° bükük olacak şekilde ayarla. Sırtını yasla, varsa uyluk pedini ayarla.',
    steps: [
      'Tutamakları kavra, omuzlarını aşağıda tut.',
      'Tutamakları aşağı, kollar neredeyse düzleşene kadar it.',
      'Altta triceps’i sık.',
      'Kontrollü şekilde yukarı dön.'
    ],
    mistakes: [
      'Omuzları kulaklara kaldırmak.',
      'Gövdeyi öne eğip göğüsle itmek.',
      'Ağırlığı çarptırmak.'
    ],
    tips: [
      'Paralel bar dips’e göre omuzlar için daha kontrollü bir seçenektir.',
      'Ağır yüklenebildiği için triceps antrenmanının ilk hareketi olabilir.'
    ],
    variations: ['triceps-dip', 'bench-dip']
  },
  {
    id: 'triceps-dip', name: 'Triceps Dip', nameTr: 'Paralel Barda Triceps Dips',
    group: 'triceps', primary: ['triceps'], secondary: ['chest', 'front-delt'],
    equipment: 'bodyweight', machineId: 'assisted-pullup-dip', mechanic: 'compound', difficulty: 3,
    setup: 'Paralel barlarda kolların düz şekilde kendini yukarı kaldır. Gövdeni olabildiğince dik tut.',
    steps: [
      'Dirsekleri geriye doğru bükerek kendini aşağı indir.',
      'Üst kolların yere paralel olunca dur.',
      'Barları iterek yukarı çık ve kolları düzleştir.',
      'Gövdeyi dik, dirsekleri gövdeye yakın tut.'
    ],
    mistakes: [
      'Gövdeyi öne eğip hareketi göğüs dips’e çevirmek (amaç triceps ise).',
      'Çok derine inmek.',
      'Omuzları kulaklara kaldırmak.'
    ],
    tips: [
      'Başlangıçta asistli dips makinesi kullan.',
      'Güçlendikçe kemerle ağırlık ekle.'
    ],
    variations: ['chest-dip', 'machine-triceps-dip', 'bench-dip']
  },

  // ---------------- Ön kol ----------------
  {
    id: 'wrist-curl', name: 'Wrist Curl', nameTr: 'Bilek Curl',
    group: 'forearms', primary: ['forearms'], secondary: [],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Sehpaya otur, ön kollarını uyluklarına veya sehpaya yasla; bileklerin dizlerin ötesinde boşta kalsın. Barı avuçlar yukarı bakacak şekilde kavra.',
    steps: [
      'Bileklerini aşağı bırakarak barı parmaklarına doğru yuvarla.',
      'Parmaklarını kapatarak barı geri kavra.',
      'Bileklerini yukarı bükerek barı kaldır.',
      'Tepede sık ve kontrollü indir.'
    ],
    mistakes: [
      'Ön kolları uyluktan kaldırmak.',
      'Çok ağır ağırlıkla hızlı yapmak.',
      'Hareket açıklığını kısaltmak.'
    ],
    tips: [
      'Yüksek tekrar (15–25) ön kollar için iyi çalışır.',
      'Dambılla tek tek de yapılabilir.'
    ],
    variations: ['reverse-wrist-curl', 'farmers-walk']
  },
  {
    id: 'reverse-wrist-curl', name: 'Reverse Wrist Curl', nameTr: 'Ters Bilek Curl',
    group: 'forearms', primary: ['forearms'], secondary: [],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Bilek curl pozisyonunda otur, ancak barı avuçlar aşağı bakacak şekilde kavra.',
    steps: [
      'Bileklerini aşağı bırak.',
      'Bileklerini yukarı doğru bükerek barı kaldır (el sırtı tavana doğru).',
      'Tepede bir an bekle.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Ağır yükle bileği zorlamak.',
      'Ön kolları kaldırmak.',
      'Hızlı yapmak.'
    ],
    tips: [
      'Ön kolun üst (ekstansör) tarafını çalıştırır; tenisçi dirseği riskine karşı dengeleyici bir harekettir.',
      'Hafif ağırlıkla başla.'
    ],
    variations: ['wrist-curl', 'reverse-curl']
  },
  {
    id: 'reverse-curl', name: 'Reverse Curl', nameTr: 'Ters Tutuş Curl',
    group: 'forearms', primary: ['forearms'], secondary: ['biceps'],
    equipment: 'barbell', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Dik dur, barı (veya EZ barı) omuz genişliğinde, avuç içleri aşağı bakacak şekilde kavra.',
    steps: [
      'Dirsekleri sabit tutarak barı yukarı kıvır.',
      'Bilekleri düz tut.',
      'Tepede bir an bekle.',
      'Kontrollü şekilde indir.'
    ],
    mistakes: [
      'Bilekleri aşağı bükmek.',
      'Gövdeyle sallanmak.',
      'Normal curl ağırlığıyla başlamak.'
    ],
    tips: [
      'Brachioradialis’i (ön kolun dirseğe yakın üst kısmı) en iyi çalıştıran harekettir.',
      'EZ bar bileklere daha az yük bindirir.'
    ],
    variations: ['hammer-curl', 'reverse-wrist-curl']
  },
  {
    id: 'dead-hang', name: 'Dead Hang', nameTr: 'Barda Asılı Durma',
    group: 'forearms', primary: ['forearms'], secondary: ['lats', 'traps'],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'Barfiks barını omuz genişliğinde, avuçlar öne bakacak şekilde kavra.',
    steps: [
      'Ayaklarını yerden kesip kolların düz şekilde asıl.',
      'Omuzlarını hafifçe aktif tut (tamamen gevşek bırakma).',
      'Belirlediğin süre boyunca asılı kal (ör. 20–60 saniye).',
      'Kontrollü şekilde yere in.'
    ],
    mistakes: [
      'Sallanmak.',
      'Nefesi tutmak.',
      'Omuz ağrısı varken tamamen pasif asılmak.'
    ],
    tips: [
      'Tutuş gücünü ve omuz hareketliliğini birlikte geliştirir.',
      'İlerledikçe tek kolla asılmayı veya havlu üzerinden tutunmayı dene.'
    ],
    variations: ['farmers-walk', 'plate-pinch', 'pull-up']
  },
  {
    id: 'plate-pinch', name: 'Plate Pinch', nameTr: 'Plaka Sıkıştırma',
    group: 'forearms', primary: ['forearms'], secondary: [],
    equipment: 'bodyweight', machineId: null, mechanic: 'isolation', difficulty: 1,
    setup: 'İki düz plakayı düz yüzleri dışarı bakacak şekilde üst üste koy. Parmaklar bir tarafta, başparmak diğer tarafta olacak şekilde kenarlarından sıkıştırarak tut.',
    steps: [
      'Plakaları yerden kaldır ve kolun yanında düz şekilde tut.',
      'Belirlenen süre boyunca (20–40 saniye) sıkıştırarak taşı.',
      'Kontrollü şekilde yere bırak.',
      'Diğer elle tekrarla.'
    ],
    mistakes: [
      'Plakaları ayağının üzerine düşürmek.',
      'Omuzları silkmek.',
      'Çok ağır başlamak.'
    ],
    tips: [
      'Başparmak ve parmak uçlarının kıskaç gücünü geliştirir.',
      'Yürüyerek yapmak zorluğu artırır.'
    ],
    variations: ['dead-hang', 'farmers-walk']
  }
);

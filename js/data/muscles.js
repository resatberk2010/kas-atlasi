/* Kas bölgeleri. Bu dosya ilk yüklenir ve global FIT nesnesini oluşturur. */
window.FIT = { muscles: [], exercises: [], machines: [], programs: [] };

FIT.muscles = [
  // ---- Üst vücut – ön ----
  {
    id: 'chest-upper', name: 'Üst Göğüs', latin: 'Pectoralis major – klaviküler baş', area: 'upper-front',
    role: 'Kolu yukarı-öne doğru kaldırır ve vücudun önüne çeker. Eğimli (incline) itişlerde en fazla devreye giren göğüs bölümüdür.',
    tip: '30–45° eğimli presler ve alçaktan yükseğe kablo açışları bu bölgeye daha fazla yük bindirir. Bench açısını 45°’nin üzerine çıkarırsan iş giderek ön omuza kayar.'
  },
  {
    id: 'chest', name: 'Orta & Alt Göğüs', latin: 'Pectoralis major – sternal baş', area: 'upper-front',
    role: 'Kolu vücudun önünde birleştirir (horizontal adduksiyon), içe döndürür ve yukarıdan aşağıya çeker. Göğüs kasının en büyük bölümüdür.',
    tip: 'Düz ve decline presler, dips ve yüksekten alçağa kablo açışları sternal başı hedefler. “İç göğüs” ya da “dış göğüs”ü ayrı ayrı çalıştırmak mümkün değildir; kas bir bütün olarak kasılır.'
  },
  {
    id: 'front-delt', name: 'Ön Omuz', latin: 'Deltoideus anterior', area: 'upper-front',
    role: 'Kolu öne doğru kaldırır ve içe döndürür. Göğüs preslerinde ve omuz preslerinde güçlü biçimde çalışır.',
    tip: 'Pres hacmin yüksekse ön omuz çoğunlukla yeterince uyarılır; ayrıca ön kaldırış yapmak şart değildir.'
  },
  {
    id: 'side-delt', name: 'Yan Omuz', latin: 'Deltoideus lateralis', area: 'upper-front',
    role: 'Kolu yana doğru kaldırır (abduksiyon). Omuzlara genişlik görüntüsü veren bölümdür.',
    tip: 'Yana açış (lateral raise) varyasyonları bu bölgeyi en doğrudan çalıştırır. Hafif ağırlık, kontrollü tempo ve yüksek tekrar iyi sonuç verir.'
  },
  // ---- Üst vücut – arka ----
  {
    id: 'rear-delt', name: 'Arka Omuz', latin: 'Deltoideus posterior', area: 'upper-back',
    role: 'Kolu geriye ve yana doğru çeker, dışa döndürür. Omuz sağlığı ve dik duruş için önemlidir.',
    tip: 'Reverse pec deck, face pull ve eğilerek yana açış iyi seçeneklerdir. Kürek kemiklerini fazla sıkıştırırsan iş orta sırta kayar.'
  },
  {
    id: 'traps', name: 'Trapez', latin: 'Trapezius – üst lifler', area: 'upper-back',
    role: 'Omuz kuşağını yukarı kaldırır (omuz silkme), boynu destekler ve kolu baş üstüne kaldırırken kürek kemiğini döndürür.',
    tip: 'Shrug, deadlift, farmer walk ve ağır çekişler trapezi güçlendirir.'
  },
  {
    id: 'lats', name: 'Kanat (Latissimus)', latin: 'Latissimus dorsi', area: 'upper-back',
    role: 'Kolu yukarıdan aşağıya ve önden arkaya çeker (omuz ekstansiyonu ve adduksiyonu). Sırta V görünümünü veren kastır.',
    tip: 'Barfiks, lat pulldown ve dirseği kalçaya doğru sürdüğün kürek çekişleri kanadı hedefler.'
  },
  {
    id: 'mid-back', name: 'Orta Sırt', latin: 'Rhomboideus & Trapezius – orta/alt lifler', area: 'upper-back',
    role: 'Kürek kemiklerini geriye ve birbirine doğru çeker (retraksiyon). Sırtın kalınlığını ve dik duruşu sağlar.',
    tip: 'Dirsekleri gövdeden daha açık tutarak yapılan kürek çekişleri ve face pull orta sırtı öne çıkarır.'
  },
  {
    id: 'lower-back', name: 'Bel', latin: 'Erector spinae (omurga dikleştiricileri)', area: 'core',
    role: 'Omurgayı dik tutar ve geriye doğru uzatır. Deadlift ve squat gibi hareketlerde gövdeyi sabitler.',
    tip: 'Back extension, deadlift ve good morning ile güçlenir. Bu hareketlerde omurgayı nötr pozisyonda tutmak şarttır.'
  },
  // ---- Kollar ----
  {
    id: 'biceps', name: 'Biceps (Pazu)', latin: 'Biceps brachii & Brachialis', area: 'arms',
    role: 'Dirseği büker ve ön kolu dışa çevirir (supinasyon). Tüm çekiş hareketlerine yardımcı olur.',
    tip: 'Tam hareket açıklığı ve kontrollü iniş (eksantrik faz) biceps gelişimi için önemlidir.'
  },
  {
    id: 'triceps', name: 'Triceps (Arka Kol)', latin: 'Triceps brachii', area: 'arms',
    role: 'Dirseği açar (ekstansiyon); uzun başı ayrıca kolu geriye çeker. Üst kol hacminin yaklaşık üçte ikisini oluşturur.',
    tip: 'Kollar baş üstündeyken yapılan hareketler uzun başı daha fazla gerer ve genelde daha iyi gelişim sağlar.'
  },
  {
    id: 'forearms', name: 'Ön Kol', latin: 'Fleksör/ekstansör grubu & Brachioradialis', area: 'arms',
    role: 'Bileği büker ve açar, parmaklarla kavrar, dirseği bükmeye yardım eder. Tutuş gücünün kaynağıdır.',
    tip: 'Ağır çekişler, farmer walk ve bilek curl’leri tutuş gücünü artırır.'
  },
  // ---- Gövde ----
  {
    id: 'abs', name: 'Karın', latin: 'Rectus abdominis', area: 'core',
    role: 'Gövdeyi öne büker ve pelvisi yukarı doğru çeker. Ağır kaldırışlarda gövdeyi sabitler.',
    tip: 'Karın kaslarının görünürlüğü büyük ölçüde vücut yağ oranına bağlıdır. Antrenman kası güçlendirir, yağı ise beslenme düzeni azaltır.'
  },
  {
    id: 'obliques', name: 'Yan Karın', latin: 'Obliquus externus & internus', area: 'core',
    role: 'Gövdeyi döndürür ve yana büker. Dönmeye karşı direnç göstererek omurgayı korur.',
    tip: 'Pallof press, woodchopper ve side plank bu bölgeyi fonksiyonel olarak güçlendirir.'
  },
  {
    id: 'hip-flexors', name: 'Kalça Bükücüler', latin: 'Iliopsoas & Rectus femoris', area: 'lower',
    role: 'Dizi göğse doğru çeker (kalça fleksiyonu). Bacak kaldırma, koşu ve tırmanma hareketlerinde çalışır.',
    tip: 'Uzun süre oturanlarda kısalabilir; esneme ve güçlendirme birlikte yapılmalıdır.'
  },
  // ---- Alt vücut ----
  {
    id: 'glutes', name: 'Kalça', latin: 'Gluteus maximus', area: 'lower',
    role: 'Kalçayı açar (ekstansiyon) ve dışa döndürür. Vücudun en büyük ve en güçlü kasıdır.',
    tip: 'Hip thrust, squat, RDL ve lunge ana hareketlerdir. Kalça tam açıldığında kası sıkmak aktivasyonu artırır.'
  },
  {
    id: 'glute-med', name: 'Kalça Yanı', latin: 'Gluteus medius & minimus', area: 'lower',
    role: 'Bacağı yana açar ve tek bacak üzerinde dururken pelvisi dengede tutar. Diz ve kalça sağlığı için önemlidir.',
    tip: 'Hip abductor makinesi, yan yatarak bacak kaldırma ve tek bacak hareketleri bu kası güçlendirir.'
  },
  {
    id: 'quads', name: 'Ön Bacak (Quadriceps)', latin: 'Quadriceps femoris', area: 'lower',
    role: 'Dizi açar (ekstansiyon); rectus femoris başı kalçayı da büker. Squat, leg press ve merdiven çıkarken ana kastır.',
    tip: 'Dizlerin ayak uçlarını geçtiği derin squat varyasyonları quadriceps’i daha çok çalıştırır ve sağlıklı dizler için güvenlidir.'
  },
  {
    id: 'hamstrings', name: 'Arka Bacak (Hamstring)', latin: 'Biceps femoris, Semitendinosus, Semimembranosus', area: 'lower',
    role: 'Dizi büker ve kalçayı açar. Sprint ve sıçramalarda kritik rol oynar.',
    tip: 'Diz bükme (leg curl) ve kalça menteşesi (RDL) hareketlerini birlikte kullanmak en iyi sonucu verir.'
  },
  {
    id: 'adductors', name: 'İç Bacak', latin: 'Adductor grubu', area: 'lower',
    role: 'Bacağı vücudun orta hattına doğru çeker ve kalçanın açılmasına yardım eder. Geniş duruşlu squat’ta yoğun çalışır.',
    tip: 'Sumo deadlift, geniş duruşlu squat ve hip adductor makinesi bu bölgeyi hedefler.'
  },
  {
    id: 'calves', name: 'Kalf (Baldır)', latin: 'Gastrocnemius & Soleus', area: 'lower',
    role: 'Ayak bileğini aşağı iter (parmak ucuna kalkma). Gastrocnemius düz dizle, soleus bükük dizle daha çok çalışır.',
    tip: 'Tam esneme ve tepe noktasında 1 saniye bekleme kalf gelişimi için önemlidir.'
  }
];

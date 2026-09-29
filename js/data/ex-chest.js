/* Göğüs hareketleri */
FIT.exercises.push(
  {
    id: 'barbell-bench-press', name: 'Barbell Bench Press', nameTr: 'Düz Bench Press', aka: 'göğüs presi',
    group: 'chest', primary: ['chest'], secondary: ['chest-upper', 'front-delt', 'triceps'],
    equipment: 'barbell', machineId: 'power-rack', mechanic: 'compound', difficulty: 2,
    setup: 'Düz sehpaya sırtüstü uzan; gözlerin barın tam altında olsun. Ayaklar yere sağlam bassın, kürek kemiklerini geriye ve aşağı sıkıştırarak göğsünü hafifçe kabart. Barı omuz genişliğinden biraz geniş kavra.',
    steps: [
      'Barı raftan kaldır ve kolların düz olacak şekilde omuzlarının üzerine getir.',
      'Kontrollü şekilde barı göğsünün alt-orta kısmına (meme ucu hizası) indir. Dirsekler gövdeyle yaklaşık 45–70° açı yapsın.',
      'Bar göğsüne hafifçe dokunduğunda duraksamadan, ayaklarla yere basıp barı yukarı it.',
      'Bar hafif bir yay çizerek omuzlarının üzerine dönsün; kolları kilitleyip bir sonraki tekrara geç.',
      'Seti bitirince barı rafın dikmelerine değdirip ardından kancaya indir.'
    ],
    breathing: 'Barı indirmeden önce derin nefes al ve karnını sıkı tut; itişin en zor noktasını geçtikten sonra nefes ver.',
    mistakes: [
      'Dirsekleri 90° yana açmak — omuz eklemine gereksiz yük bindirir.',
      'Barı göğüsten sektirmek; momentum kası devreden çıkarır ve kaburgaya zarar verebilir.',
      'Kalçayı sehpadan kaldırmak.',
      'Kürek kemiklerini gevşek bırakmak; omuzlar öne kayar.'
    ],
    tips: [
      'Ağır setlerde mutlaka spotter (yardımcı) kullan ya da güvenlik barlarını göğüs hizasının hemen altına ayarla.',
      'Barı “ikiye bükmeye” çalışır gibi kavramak dirsekleri doğru açıda tutar.',
      'Bileklerin düz olsun; bar avuç içinin alt kısmında, ön kol kemiklerinin üzerinde dursun.'
    ],
    variations: ['incline-barbell-press', 'decline-barbell-press', 'dumbbell-bench-press', 'close-grip-bench-press']
  },
  {
    id: 'incline-barbell-press', name: 'Incline Barbell Press', nameTr: 'Eğimli Bench Press',
    group: 'chest', primary: ['chest-upper'], secondary: ['chest', 'front-delt', 'triceps'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Sehpayı 30–45° eğime ayarla. Kürek kemiklerini sıkıştır, ayakları yere bas ve barı omuz genişliğinden biraz geniş kavra.',
    steps: [
      'Barı raftan al ve omuzlarının üzerine getir.',
      'Barı köprücük kemiğinin biraz altına, üst göğsüne doğru kontrollü indir.',
      'Göğse hafifçe değdiğinde barı dik bir hat üzerinde yukarı it.',
      'Kollar kilitlenince bir sonraki tekrara geç.'
    ],
    mistakes: [
      'Eğimi çok dik yapmak (45°’nin üzeri) — iş ağırlıklı olarak ön omuza kayar.',
      'Barı göğsün alt kısmına indirmek; bar yolu bozulur.',
      'Beli aşırı kavislendirip hareketi düz bench’e çevirmek.'
    ],
    tips: [
      'Üst göğüs için en verimli açı genelde 30° civarıdır.',
      'Düz bench’e göre biraz daha hafif ağırlık kullanman normaldir.'
    ],
    variations: ['incline-dumbbell-press', 'smith-incline-press', 'incline-machine-press']
  },
  {
    id: 'decline-barbell-press', name: 'Decline Bench Press', nameTr: 'Ters Eğimli Bench Press',
    group: 'chest', primary: ['chest'], secondary: ['triceps', 'front-delt'],
    equipment: 'barbell', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Decline sehpaya bacaklarını pedlerin altına kilitleyerek uzan (baş aşağıda, 15–30° eğim). Barı omuz genişliğinden biraz geniş kavra.',
    steps: [
      'Barı (tercihen spotter yardımıyla) raftan al ve göğsünün üzerine getir.',
      'Barı göğsünün alt kısmına doğru kontrollü indir.',
      'Göğse hafifçe değince yukarı it ve kolları kilitle.',
      'Seti bitirince barı rafa geri koy ve oturmadan önce birkaç saniye bekle.'
    ],
    mistakes: [
      'Barı boyna doğru indirmek.',
      'Spotter olmadan çok ağır çalışmak — bu pozisyonda barı güvenle bırakmak zordur.',
      'Seti bitirir bitirmez hızla doğrulmak; baş dönmesi yapabilir.'
    ],
    tips: [
      'Hareket açıklığı düz bench’ten kısadır; bu yüzden genelde daha ağır kaldırılır.',
      'Alt göğüs için dips iyi bir alternatiftir.'
    ],
    variations: ['chest-dip', 'barbell-bench-press']
  },
  {
    id: 'dumbbell-bench-press', name: 'Dumbbell Bench Press', nameTr: 'Dambıl ile Düz Pres',
    group: 'chest', primary: ['chest'], secondary: ['chest-upper', 'front-delt', 'triceps'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Dambılları dizlerinin üzerine alıp otur. Geriye yaslanırken dizlerinle dambılları göğüs hizasına it. Kürek kemiklerini sıkıştır, ayaklar yere bassın.',
    steps: [
      'Dambılları göğsünün yanlarında, avuç içleri ayaklarına bakacak (veya hafif içe dönük) şekilde tut.',
      'Dambılları yukarı iterken hafifçe birbirine yaklaştır.',
      'Üst noktada dambıllar birbirine değmeden dur.',
      'Dirsekler gövdeyle yaklaşık 45–60° açıdayken dambılları göğüs hizasına kadar kontrollü indir.'
    ],
    mistakes: [
      'Dambılları çok derine indirip omzu aşırı germek.',
      'Setin sonunda dambılları yana doğru fırlatarak bırakmak.',
      'İki kolun farklı hızda itmesi.'
    ],
    tips: [
      'Barbell’a göre daha geniş hareket açıklığı sağlar ve iki kolu bağımsız çalıştırır.',
      'Seti bitirirken dambılları göğsüne çekip dizlerini kaldırarak oturma pozisyonuna geç.'
    ],
    variations: ['incline-dumbbell-press', 'barbell-bench-press', 'dumbbell-fly']
  },
  {
    id: 'incline-dumbbell-press', name: 'Incline Dumbbell Press', nameTr: 'Dambıl ile Eğimli Pres',
    group: 'chest', primary: ['chest-upper'], secondary: ['chest', 'front-delt', 'triceps'],
    equipment: 'dumbbell', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Sehpayı 30–45° eğime ayarla. Dambılları dizlerinle kaldırıp omuz hizasına getir, kürek kemiklerini sıkıştır.',
    steps: [
      'Dambılları üst göğsünün yanlarında, dirsekler hafif gövdeye yakın olacak şekilde tut.',
      'Dambılları yukarı ve hafifçe içe doğru it.',
      'Üstte kolları kilitlemeden bir an dur.',
      'Kontrollü şekilde başlangıç pozisyonuna indir.'
    ],
    mistakes: [
      'Sehpayı çok dik ayarlamak.',
      'Dambılları kulak hizasına indirmek (dirsekler çok açık).',
      'Beli sehpadan fazla koparmak.'
    ],
    tips: [
      'Avuç içlerini hafifçe birbirine çevirmek omuz için daha rahat bir açı sağlar.',
      'Üst göğüs gelişimi için programındaki ilk göğüs hareketi yapabilirsin.'
    ],
    variations: ['incline-barbell-press', 'incline-dumbbell-fly', 'incline-machine-press']
  },
  {
    id: 'dumbbell-fly', name: 'Dumbbell Fly', nameTr: 'Dambıl ile Göğüs Açışı',
    group: 'chest', primary: ['chest'], secondary: ['chest-upper', 'front-delt'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 2,
    setup: 'Düz sehpaya uzan, dambılları göğsünün üzerinde avuç içleri birbirine bakacak şekilde tut. Dirseklerini hafifçe bük ve bu açıyı hareket boyunca sabit tut.',
    steps: [
      'Dambılları geniş bir yay çizerek yanlara doğru aç.',
      'Göğsünde belirgin bir gerilme hissedene kadar (genelde dambıllar göğüs hizasına gelince) indir.',
      'Göğüs kaslarını sıkarak aynı yaydan dambılları yukarıda birleştir; sanki büyük bir ağaca sarılıyormuşsun gibi.',
      'Üstte dambılları birbirine vurmadan bir sonraki tekrara geç.'
    ],
    mistakes: [
      'Dirsekleri bükerek hareketi prese çevirmek.',
      'Çok ağır dambıl kullanıp omzu aşırı esnetmek.',
      'Dambılları omuz hizasının çok altına indirmek.'
    ],
    tips: [
      'Hafif ağırlıkla 10–15 tekrar aralığında çalış; bu hareket kuvvet değil gerilme odaklıdır.',
      'Kablolu versiyonu hareketin üst kısmında da gerilimi korur.'
    ],
    variations: ['incline-dumbbell-fly', 'cable-crossover', 'pec-deck-fly']
  },
  {
    id: 'incline-dumbbell-fly', name: 'Incline Dumbbell Fly', nameTr: 'Eğimli Dambıl Açışı',
    group: 'chest', primary: ['chest-upper'], secondary: ['chest', 'front-delt'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 2,
    setup: 'Sehpayı 30° eğime ayarla. Dambılları üst göğsünün üzerinde, dirsekler hafif bükük tut.',
    steps: [
      'Dambılları yanlara doğru geniş bir yay çizerek indir.',
      'Üst göğüste gerilme hissedince dur.',
      'Aynı yay üzerinden dambılları yukarıda birleştir.',
      'Üst noktada göğsünü bir an sık.'
    ],
    mistakes: [
      'Eğimi fazla dik tutmak.',
      'Dirsek açısını hareket boyunca değiştirmek.',
      'Ağır ağırlıkla hızlı yapmak.'
    ],
    tips: [
      'Hareketin alt kısmında 1 saniye beklemek gerilme etkisini artırır.',
      'Bu hareketi preslerden sonra, antrenmanın ikinci yarısında yapmak daha uygundur.'
    ],
    variations: ['dumbbell-fly', 'low-to-high-cable-fly']
  },
  {
    id: 'push-up', name: 'Push-Up', nameTr: 'Şınav',
    group: 'chest', primary: ['chest'], secondary: ['front-delt', 'triceps', 'abs'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 1,
    setup: 'Elleri omuz genişliğinden biraz geniş, parmaklar öne bakacak şekilde yere koy. Bacakları geriye uzat; baş, sırt, kalça ve topuklar düz bir çizgi oluştursun.',
    steps: [
      'Karnını ve kalçanı sıkarak vücudunu tek parça tut.',
      'Dirsekleri gövdeyle yaklaşık 45° açı yapacak şekilde bükerek göğsünü yere yaklaştır.',
      'Göğsün yere 2–3 cm kalana kadar in.',
      'Avuçlarınla yeri iterek başlangıç pozisyonuna dön.'
    ],
    mistakes: [
      'Kalçanın aşağı sarkması veya yukarı kalkması.',
      'Sadece başı eğip göğsü indirmemek (yarım tekrar).',
      'Dirsekleri tamamen yana açmak.'
    ],
    tips: [
      'Zorlanıyorsan elleri bir sehpaya koyarak (incline push-up) ya da dizlerin üzerinde başla.',
      'Kolaylaştığında ayakları yükseltmek (decline) veya sırta ağırlık koymak zorluğu artırır.'
    ],
    variations: ['decline-push-up', 'diamond-push-up', 'dumbbell-bench-press']
  },
  {
    id: 'decline-push-up', name: 'Decline Push-Up', nameTr: 'Ayaklar Yüksekte Şınav',
    group: 'chest', primary: ['chest-upper'], secondary: ['chest', 'front-delt', 'triceps', 'abs'],
    equipment: 'bodyweight', machineId: null, mechanic: 'compound', difficulty: 2,
    setup: 'Ayaklarını bir sehpa veya basamağın üzerine koy, ellerini yerde omuz genişliğinden biraz geniş aç. Vücudun düz bir çizgi oluştursun.',
    steps: [
      'Karın ve kalçayı sıkı tut.',
      'Dirsekleri bükerek göğsünü ellerinin arasına doğru indir.',
      'Göğsün yere yaklaşınca yeri iterek yukarı çık.',
      'Kollar düzleşince tekrarla.'
    ],
    mistakes: [
      'Kalçanın aşağı sarkması — bele yük biner.',
      'Başı öne uzatıp boynu zorlamak.',
      'Ayakları çok yükseğe koyup hareketi omuz presine çevirmek.'
    ],
    tips: [
      'Ayak yüksekliği arttıkça yük üst göğse ve omuzlara kayar.',
      'Evde antrenman yapanlar için eğimli pres yerine iyi bir seçenektir.'
    ],
    variations: ['push-up', 'pike-push-up']
  },
  {
    id: 'chest-dip', name: 'Chest Dip', nameTr: 'Göğüs Dips',
    group: 'chest', primary: ['chest'], secondary: ['triceps', 'front-delt'],
    equipment: 'bodyweight', machineId: 'assisted-pullup-dip', mechanic: 'compound', difficulty: 3,
    setup: 'Paralel barları kavra ve kolların düz şekilde kendini yukarı kaldır. Gövdeni hafifçe öne eğ, dizlerini bükebilirsin.',
    steps: [
      'Gövde öne eğikken dirsekleri bükerek kendini aşağı indir.',
      'Omuzların dirsek hizasına ya da biraz altına inene kadar devam et; göğsünde gerilme hissetmelisin.',
      'Ellerinle barları iterek yukarı çık.',
      'Üstte omuzları kulaklardan uzak tut ve tekrarla.'
    ],
    mistakes: [
      'Omuz ağrısı varken çok derine inmek.',
      'Gövdeyi tamamen dik tutmak — iş triceps’e kayar.',
      'Aşağıda sallanarak momentumla çıkmak.'
    ],
    tips: [
      'Yeni başlıyorsan asistli dips makinesiyle başla.',
      'Güçlendikçe kemerle ağırlık ekleyebilirsin.'
    ],
    variations: ['triceps-dip', 'decline-barbell-press', 'machine-triceps-dip']
  },
  {
    id: 'cable-crossover', name: 'Cable Crossover', nameTr: 'Kablo Crossover (Yüksekten Alçağa)',
    group: 'chest', primary: ['chest'], secondary: ['front-delt'],
    equipment: 'cable', machineId: 'cable-crossover', mechanic: 'isolation', difficulty: 2,
    setup: 'Makaraları omuz hizasının üstüne ayarla ve tutamakları tak. İki tutamağı kavrayıp istasyonun ortasında bir adım öne çık; bir ayağını öne alarak dengeli bir duruş kur. Gövdeni hafifçe öne eğ.',
    steps: [
      'Kollar yanlara açık, dirsekler hafif bükük başla; göğsünde gerilme olsun.',
      'Tutamakları aşağı ve öne doğru, göbek hizasının önünde birleşecek şekilde çek.',
      'Birleştiğin noktada göğsünü 1 saniye sık.',
      'Kontrollü şekilde kolları yanlara geri aç.'
    ],
    mistakes: [
      'Dirsekleri bükerek hareketi itişe çevirmek.',
      'Gövdeyi sallayarak ağırlığı çekmek.',
      'Kolları omuzların çok gerisine kadar açıp omzu zorlamak.'
    ],
    tips: [
      'Makara yüksekliğini değiştirmek hedef bölgeyi değiştirir: yüksekten alçağa alt göğüs, alçaktan yükseğe üst göğüs.',
      'Tek kolla yapmak daha geniş hareket açıklığı sağlar.'
    ],
    variations: ['low-to-high-cable-fly', 'pec-deck-fly', 'dumbbell-fly']
  },
  {
    id: 'low-to-high-cable-fly', name: 'Low-to-High Cable Fly', nameTr: 'Alçaktan Yükseğe Kablo Açış',
    group: 'chest', primary: ['chest-upper'], secondary: ['front-delt'],
    equipment: 'cable', machineId: 'cable-crossover', mechanic: 'isolation', difficulty: 1,
    setup: 'Makaraları en alt seviyeye ayarla. Tutamakları kavrayıp istasyonun ortasında bir adım öne çık; avuç içleri öne baksın.',
    steps: [
      'Kollar aşağıda ve yanlarda, dirsekler hafif bükük başla.',
      'Tutamakları yukarı ve içe doğru, yüz hizasının önünde birleşecek şekilde kaldır.',
      'Üst göğsünü sık ve 1 saniye bekle.',
      'Kontrollü şekilde başlangıca dön.'
    ],
    mistakes: [
      'Tutamakları baş üstüne kadar kaldırmak.',
      'Omuzları kulaklara doğru kaldırmak.',
      'Beli geriye kavislendirmek.'
    ],
    tips: [
      'Hafif ağırlıkla çalışıp kasın kasıldığını hissetmeye odaklan.',
      'Eğimli preslerden sonra bitirici hareket olarak iyi çalışır.'
    ],
    variations: ['cable-crossover', 'incline-dumbbell-fly']
  },
  {
    id: 'machine-chest-press', name: 'Machine Chest Press', nameTr: 'Makinede Göğüs Presi',
    group: 'chest', primary: ['chest'], secondary: ['front-delt', 'triceps'],
    equipment: 'machine', machineId: 'chest-press', mechanic: 'compound', difficulty: 1,
    setup: 'Koltuğu, tutamaklar göğsünün orta hizasına gelecek şekilde ayarla. Sırtını pede yasla, kürek kemiklerini hafifçe geriye çek ve ayaklarını yere bas.',
    steps: [
      'Tutamakları kavra; dirsekler gövdenin biraz gerisinde başla.',
      'Tutamakları öne doğru, kollar neredeyse düzleşene kadar it.',
      'Dirsekleri kilitlemeden bir an dur.',
      'Ağırlık bloğunu yere çarptırmadan kontrollü geri dön.'
    ],
    mistakes: [
      'Koltuğu çok alçak ayarlamak — omuzlar öne kayar.',
      'Sırtı pedden koparmak.',
      'Ağırlığı hızlı bırakıp blokları çarptırmak.'
    ],
    tips: [
      'Yeni başlayanlar için bench press öğrenmeden önce güvenli bir başlangıçtır.',
      'Tek kolla yaparak iki taraf arasındaki güç farkını dengeleyebilirsin.'
    ],
    variations: ['barbell-bench-press', 'incline-machine-press', 'dumbbell-bench-press']
  },
  {
    id: 'incline-machine-press', name: 'Incline Machine Press', nameTr: 'Makinede Eğimli Göğüs Presi',
    group: 'chest', primary: ['chest-upper'], secondary: ['chest', 'front-delt', 'triceps'],
    equipment: 'machine', machineId: 'incline-chest-press', mechanic: 'compound', difficulty: 1,
    setup: 'Koltuğu, tutamaklar üst göğüs (köprücük kemiğinin biraz altı) hizasına gelecek şekilde ayarla. Sırtını yasla, ayaklarını yere bas.',
    steps: [
      'Tutamakları kavra ve kürek kemiklerini sıkıştır.',
      'Tutamakları yukarı-öne doğru it.',
      'Kollar neredeyse düzleşince bir an dur.',
      'Kontrollü şekilde geri dön; göğüste gerilme hisset.'
    ],
    mistakes: [
      'Koltuğu çok yükseğe ayarlayıp hareketi omuz presine çevirmek.',
      'Omuzları pedden öne kaldırmak.',
      'Yarım tekrar yapmak.'
    ],
    tips: [
      'Plaka yüklemeli versiyonlarda iki kol bağımsız hareket eder; zayıf tarafı fark etmek kolaylaşır.',
      'Serbest ağırlıkla eğimli presten sonra ek hacim için idealdir.'
    ],
    variations: ['incline-dumbbell-press', 'incline-barbell-press', 'smith-incline-press']
  },
  {
    id: 'pec-deck-fly', name: 'Pec Deck Fly', nameTr: 'Pec Deck (Butterfly)',
    group: 'chest', primary: ['chest'], secondary: ['front-delt'],
    equipment: 'machine', machineId: 'pec-deck', mechanic: 'isolation', difficulty: 1,
    setup: 'Koltuğu, tutamaklar omuz hizasının biraz altına gelecek şekilde ayarla. Kolların arkaya açıldığında göğsünde hafif gerilme hissedecek şekilde kol pozisyonunu ayarla.',
    steps: [
      'Sırtını pede yasla, tutamakları (veya kol pedlerini) kavra.',
      'Kolları göğsünün önünde birleştirecek şekilde yay çizerek kapat.',
      'Birleştiğin noktada göğsünü 1 saniye sık.',
      'Kolları kontrollü şekilde, gerilme hissedene kadar geri aç.'
    ],
    mistakes: [
      'Kolları çok geriye açıp omzu zorlamak.',
      'Omuzları öne yuvarlamak.',
      'Ağırlığı hızla bırakmak.'
    ],
    tips: [
      'Bu hareket izolasyondur; 12–15 tekrar aralığı uygundur.',
      'Aynı makinede ters oturarak arka omuz çalışabilirsin (reverse pec deck).'
    ],
    variations: ['cable-crossover', 'dumbbell-fly', 'reverse-pec-deck']
  },
  {
    id: 'smith-incline-press', name: 'Smith Machine Incline Press', nameTr: 'Smith Makinede Eğimli Pres',
    group: 'chest', primary: ['chest-upper'], secondary: ['front-delt', 'triceps'],
    equipment: 'smith', machineId: 'smith-machine', mechanic: 'compound', difficulty: 1,
    setup: 'Eğimli sehpayı (30–45°) Smith makinesinin altına, bar üst göğsüne inecek şekilde yerleştir. Barı omuz genişliğinden biraz geniş kavra.',
    steps: [
      'Bileği çevirerek barı kancalardan kurtar.',
      'Barı üst göğsüne doğru kontrollü indir.',
      'Göğse hafifçe değince yukarı it.',
      'Seti bitirince bileği çevirip barı kancalara as.'
    ],
    mistakes: [
      'Sehpayı yanlış konumlandırmak; bar boyna veya karna iner.',
      'Güvenlik durdurucularını ayarlamamak.',
      'Barın sabit yolu yüzünden omzu zorlayan bir açıda çalışmak.'
    ],
    tips: [
      'Sabit bar yolu, dengeyle uğraşmadan göğse odaklanmayı kolaylaştırır.',
      'Durdurucuları göğüs hizasının hemen altına ayarlarsan tek başına güvenle çalışabilirsin.'
    ],
    variations: ['incline-barbell-press', 'incline-machine-press']
  },
  {
    id: 'dumbbell-pullover', name: 'Dumbbell Pullover', nameTr: 'Dambıl Pullover',
    group: 'chest', primary: ['chest', 'lats'], secondary: ['triceps', 'abs'],
    equipment: 'dumbbell', machineId: null, mechanic: 'isolation', difficulty: 2,
    setup: 'Bir dambılı iki elinle, avuçların üst plakanın altını kavrayacak şekilde tut. Sehpaya enine veya boyuna uzan; dambıl göğsünün üzerinde, dirsekler hafif bükük olsun.',
    steps: [
      'Dirsek açısını sabit tutarak dambılı başının arkasına doğru bir yay çizerek indir.',
      'Göğsünde ve kanat kaslarında gerilme hissedince dur (genelde kollar gövdeyle aynı hizaya gelir).',
      'Aynı yay üzerinden dambılı göğsünün üzerine geri getir.',
      'Kalçanı sabit tut, beli fazla kavislendirme.'
    ],
    mistakes: [
      'Dirsekleri çok bükerek hareketi triceps extension’a çevirmek.',
      'Omuz hareketliliğini aşan bir açıya kadar indirmek.',
      'Dambılı gevşek kavramak.'
    ],
    tips: [
      'Hem göğsü hem kanadı esneten nadir hareketlerdendir.',
      'Kanat kaslarını daha çok hedeflemek için pullover makinesi veya straight-arm pulldown kullanabilirsin.'
    ],
    variations: ['machine-pullover', 'straight-arm-pulldown']
  }
);

export type WordData = {
  word: string;
  trivia: string;
};

export type Category = {
  name: string;
  words: WordData[];
};

export const quizData: Category[] = [
  {
    name: 'HEALTH DISEASES AND CONDITIONS',
    words: [
      { word: 'DIABETES', trivia: 'Diabetes adalah penyakit kronis yang mempengaruhi cara tubuh memproses gula darah.' },
      { word: 'ASTHMA', trivia: 'Asthma adalah kondisi pernapasan yang menyebabkan saluran udara menyempit dan membengkak.' },
      { word: 'HYPERTENSION', trivia: 'Hypertension atau tekanan darah tinggi sering disebut "silent killer" karena tidak memiliki gejala awal.' },
      { word: 'PNEUMONIA', trivia: 'Pneumonia adalah infeksi yang mengobarkan kantung udara di salah satu atau kedua paru-paru.' },
      { word: 'ARTHRITIS', trivia: 'Arthritis adalah peradangan pada satu atau lebih sendi yang menyebabkan nyeri dan kaku.' }
    ]
  },
  {
    name: 'ANIMALS',
    words: [
      { word: 'KANGAROO', trivia: 'Kangaroo adalah marsupial terbesar di dunia dan hanya ditemukan di Australia.' },
      { word: 'ELEPHANT', trivia: 'Gajah adalah mamalia darat terbesar dan memiliki ingatan yang sangat baik.' },
      { word: 'DOLPHIN', trivia: 'Lumba-lumba adalah salah satu hewan paling cerdas di dunia dan menggunakan sonar untuk navigasi.' },
      { word: 'BUTTERFLY', trivia: 'Kupu-kupu mengalami metamorfosis lengkap dari ulat menjadi kepompong kemudian menjadi kupu-kupu.' },
      { word: 'PENGUIN', trivia: 'Penguin adalah burung yang tidak bisa terbang tetapi perenang yang sangat baik.' },
      { word: 'GIRAFFE', trivia: 'Jerapah adalah hewan tertinggi di dunia dengan leher yang bisa mencapai 2 meter.' },
      { word: 'TIGER', trivia: 'Harimau adalah kucing terbesar di dunia dan memiliki garis-garis unik seperti sidik jari manusia.' },
      { word: 'WHALE', trivia: 'Paus adalah mamalia terbesar di dunia dan bisa hidup hingga 200 tahun.' },
      { word: 'EAGLE', trivia: 'Elang memiliki penglihatan yang sangat tajam, bisa melihat mangsa dari jarak 3 km.' },
      { word: 'PANDA', trivia: 'Panda menghabiskan 12 jam sehari untuk makan bambu dan bisa makan hingga 20 kg per hari.' }
    ]
  },
  {
    name: 'FOOD AND DRINKS',
    words: [
      { word: 'SPAGHETTI', trivia: 'Spaghetti berasal dari Italia dan merupakan salah satu pasta paling populer di dunia.' },
      { word: 'CHOCOLATE', trivia: 'Cokelat terbuat dari biji kakao dan pertama kali dikonsumsi sebagai minuman pahit oleh suku Maya.' },
      { word: 'SANDWICH', trivia: 'Sandwich dinamai dari Earl of Sandwich yang konon meminta daging di antara dua potong roti agar bisa makan sambil bermain kartu.' },
      { word: 'HAMBURGER', trivia: 'Hamburger berasal dari Hamburg, Jerman, meskipun menjadi ikon makanan Amerika.' },
      { word: 'PIZZA', trivia: 'Pizza pertama kali dibuat di Naples, Italia pada abad ke-18 dan awalnya adalah makanan untuk orang miskin.' },
      { word: 'SUSHI', trivia: 'Sushi berasal dari Jepang dan awalnya adalah cara untuk mengawetkan ikan dengan nasi yang difermentasi.' },
      { word: 'PASTA', trivia: 'Pasta adalah makanan pokok Italia dan ada lebih dari 300 bentuk pasta yang berbeda.' },
      { word: 'COFFEE', trivia: 'Kopi adalah minuman paling populer di dunia setelah air, dengan lebih dari 2 miliar cangkir diminum setiap hari.' },
      { word: 'ORANGE', trivia: 'Jeruk adalah buah jeruk yang kaya akan vitamin C dan awalnya berasal dari Asia Tenggara.' },
      { word: 'BANANA', trivia: 'Pisang secara teknis adalah berry dan merupakan buah paling populer di dunia.' }
    ]
  },
  {
    name: 'COUNTRIES',
    words: [
      { word: 'INDONESIA', trivia: 'Indonesia adalah negara kepulauan terbesar di dunia dengan lebih dari 17.000 pulau.' },
      { word: 'JAPAN', trivia: 'Jepang memiliki lebih dari 6.800 pulau dan terkenal dengan gunung Fuji yang ikonik.' },
      { word: 'AUSTRALIA', trivia: 'Australia adalah benua sekaligus negara dan merupakan pulau terbesar di dunia.' },
      { word: 'BRAZIL', trivia: 'Brazil adalah negara terbesar di Amerika Selatan dan memiliki hutan hujan Amazon yang luas.' },
      { word: 'CANADA', trivia: 'Kanada memiliki garis pantai terpanjang di dunia, lebih dari 200.000 km.' },
      { word: 'FRANCE', trivia: 'Prancis adalah negara yang paling banyak dikunjungi di dunia dengan lebih dari 80 juta turis per tahun.' },
      { word: 'GERMANY', trivia: 'Jerman memiliki lebih dari 1.500 jenis sosis yang berbeda.' },
      { word: 'ITALY', trivia: 'Italia memiliki lebih banyak situs Warisan Dunia UNESCO daripada negara lain di dunia.' },
      { word: 'MEXICO', trivia: 'Meksiko adalah tempat kelahiran cokelat, jagung, dan tomat.' },
      { word: 'SPAIN', trivia: 'Spanyol memiliki lebih dari 8.000 km pantai dan terkenal dengan siesta tradisionalnya.' }
    ]
  },
  {
    name: 'SPORTS',
    words: [
      { word: 'FOOTBALL', trivia: 'Sepak bola adalah olahraga paling populer di dunia dengan lebih dari 3,5 miliar penggemar.' },
      { word: 'BASKETBALL', trivia: 'Basketball diciptakan oleh Dr. James Naismith pada tahun 1891 di Springfield, Massachusetts.' },
      { word: 'TENNIS', trivia: 'Tenis dimainkan di permukaan yang disebut "court" dan bola bisa mencapai kecepatan lebih dari 200 km/jam.' },
      { word: 'SWIMMING', trivia: 'Renang adalah olahraga yang melibatkan semua otot utama tubuh dan sangat baik untuk kardiovaskular.' },
      { word: 'VOLLEYBALL', trivia: 'Voli diciptakan pada tahun 1895 oleh William G. Morgan sebagai alternatif yang lebih lembut dari basket.' },
      { word: 'BASEBALL', trivia: 'Baseball dikenal sebagai "America\'s Pastime" dan dimainkan dengan tongkat dan bola.' },
      { word: 'SOCCER', trivia: 'Soccer adalah nama lain untuk sepak bola di Amerika, berasal dari kata "association football".' },
      { word: 'CYCLING', trivia: 'Bersepeda adalah cara transportasi ramah lingkungan dan olahraga yang membakar banyak kalori.' },
      { word: 'RUNNING', trivia: 'Lari adalah salah satu olahraga tertua dan paling alami yang dilakukan manusia.' },
      { word: 'BOXING', trivia: 'Tinju adalah olahraga tempur yang telah ada sejak zaman kuno dan merupakan bagian dari Olimpiade kuno.' }
    ]
  },
  {
    name: 'TECHNOLOGY',
    words: [
      { word: 'COMPUTER', trivia: 'Komputer pertama ENIAC beratnya lebih dari 27 ton dan membutuhkan ruangan besar.' },
      { word: 'SMARTPHONE', trivia: 'Smartphone pertama adalah IBM Simon yang dirilis pada tahun 1994.' },
      { word: 'TABLET', trivia: 'Tablet pertama yang populer adalah iPad yang dirilis Apple pada tahun 2010.' },
      { word: 'KEYBOARD', trivia: 'Keyboard QWERTY dirancang pada tahun 1870-an untuk memperlambat pengetikan agar tidak macet.' },
      { word: 'MONITOR', trivia: 'Monitor pertama menggunakan teknologi CRT dan sangat berat dibandingkan monitor modern.' },
      { word: 'LAPTOP', trivia: 'Laptop pertama adalah Osborne 1 yang dirilis pada tahun 1981 dan beratnya 11 kg.' },
      { word: 'CAMERA', trivia: 'Kamera pertama dibuat pada tahun 1816 dan membutuhkan waktu 8 jam untuk mengambil satu foto.' },
      { word: 'ROBOT', trivia: 'Kata "robot" berasal dari bahasa Ceko "robota" yang berarti kerja paksa.' },
      { word: 'INTERNET', trivia: 'Internet dimulai sebagai proyek militer AS pada tahun 1960-an yang disebut ARPANET.' },
      { word: 'SOFTWARE', trivia: 'Software pertama ditulis oleh Ada Lovelace pada tahun 1843 untuk mesin analitik.' }
    ]
  },
  {
    name: 'NATURE',
    words: [
      { word: 'MOUNTAIN', trivia: 'Gunung tertinggi di dunia adalah Mount Everest dengan ketinggian 8.848 meter di atas permukaan laut.' },
      { word: 'OCEAN', trivia: 'Lautan menutupi lebih dari 70% permukaan bumi dan mengandung 97% air di planet ini.' },
      { word: 'FOREST', trivia: 'Hutan hujan Amazon menghasilkan 20% oksigen dunia dan merupakan rumah bagi 10% spesies yang dikenal.' },
      { word: 'RIVER', trivia: 'Sungai terpanjang di dunia adalah Sungai Nil dengan panjang lebih dari 6.650 km.' },
      { word: 'VOLCANO', trivia: 'Gunung berapi aktif di dunia ada lebih dari 1.500 dan sebagian besar berada di "Ring of Fire".' },
      { word: 'WATERFALL', trivia: 'Air terjun tertinggi di dunia adalah Angel Falls di Venezuela dengan ketinggian 979 meter.' },
      { word: 'DESERT', trivia: 'Gurun terbesar di dunia adalah Antartika, yang secara teknis adalah gurun karena curah hujannya sangat rendah.' },
      { word: 'ISLAND', trivia: 'Pulau terbesar di dunia adalah Greenland dengan luas lebih dari 2 juta km persegi.' },
      { word: 'JUNGLE', trivia: 'Hutan hujan tropis hanya menutupi 6% permukaan bumi tetapi mengandung lebih dari setengah spesies dunia.' },
      { word: 'GLACIER', trivia: 'Gletser menyimpan 69% air tawar dunia dan jika semua mencair, permukaan laut akan naik 70 meter.' }
    ]
  },
  {
    name: 'MUSIC',
    words: [
      { word: 'GUITAR', trivia: 'Gitar memiliki sejarah lebih dari 4.000 tahun dan awalnya memiliki 4 senar.' },
      { word: 'PIANO', trivia: 'Piano diciptakan pada tahun 1700 oleh Bartolomeo Cristofori dan awalnya disebut "pianoforte".' },
      { word: 'VIOLIN', trivia: 'Biola memiliki 4 senar dan dibuat pertama kali di Italia pada abad ke-16.' },
      { word: 'DRUMS', trivia: 'Drum adalah instrumen tertua di dunia, dengan bukti arkeologis dari 6.000 SM.' },
      { word: 'TRUMPET', trivia: 'Terompet telah digunakan sejak zaman kuno untuk komunikasi militer dan upacara keagamaan.' },
      { word: 'FLUTE', trivia: 'Seruling adalah salah satu instrumen tertua, dengan contoh dari 35.000 tahun yang lalu.' },
      { word: 'SAXOPHONE', trivia: 'Saksofon diciptakan pada tahun 1840 oleh Adolphe Sax dan awalnya dimaksudkan untuk band militer.' },
      { word: 'HARMONICA', trivia: 'Harmonika adalah instrumen yang paling banyak dimainkan di dunia dan mudah dibawa.' },
      { word: 'ORGAN', trivia: 'Organ adalah instrumen terbesar dan paling kompleks, dengan beberapa organ memiliki lebih dari 10.000 pipa.' },
      { word: 'CELLO', trivia: 'Cello adalah bagian dari keluarga biola dan dimainkan sambil duduk karena ukurannya yang besar.' }
    ]
  },
  {
    name: 'COLORS',
    words: [
      { word: 'RED', trivia: 'Merah adalah warna dengan panjang gelombang terpanjang yang terlihat oleh mata manusia.' },
      { word: 'BLUE', trivia: 'Biru adalah warna favorit kebanyakan orang di seluruh dunia dan dikaitkan dengan ketenangan.' },
      { word: 'GREEN', trivia: 'Hijau adalah warna yang paling mudah dilihat oleh mata manusia dan melambangkan alam.' },
      { word: 'YELLOW', trivia: 'Kuning adalah warna yang paling terlihat dari semua warna dan menarik perhatian dengan cepat.' },
      { word: 'PURPLE', trivia: 'Ungu adalah warna yang langka di alam dan secara historis dikaitkan dengan royalti dan kekayaan.' },
      { word: 'ORANGE', trivia: 'Oranye dinamai dari buah jeruk dan merupakan kombinasi dari merah dan kuning.' },
      { word: 'PINK', trivia: 'Pink adalah warna yang menenangkan dan secara historis dikaitkan dengan femininitas di budaya Barat.' },
      { word: 'BROWN', trivia: 'Cokelat adalah warna yang paling banyak ditemukan di alam, dari kayu hingga tanah.' },
      { word: 'BLACK', trivia: 'Hitam adalah tidak adanya semua warna cahaya dan menyerap semua panjang gelombang.' },
      { word: 'WHITE', trivia: 'Putih adalah kombinasi dari semua warna cahaya dan memantulkan semua panjang gelombang.' }
    ]
  },
  {
    name: 'TRANSPORTATION',
    words: [
      { word: 'AIRPLANE', trivia: 'Pesawat pertama yang berhasil terbang dibuat oleh Wright bersaudara pada tahun 1903.' },
      { word: 'TRAIN', trivia: 'Kereta api pertama menggunakan uap dan mulai beroperasi pada awal abad ke-19.' },
      { word: 'BICYCLE', trivia: 'Sepeda pertama dibuat pada tahun 1817 dan tidak memiliki pedal - didorong dengan kaki.' },
      { word: 'MOTORCYCLE', trivia: 'Sepeda motor pertama dibuat pada tahun 1885 oleh Gottlieb Daimler dan Wilhelm Maybach.' },
      { word: 'SHIP', trivia: 'Kapal telah digunakan selama lebih dari 10.000 tahun dan merupakan salah satu bentuk transportasi tertua.' },
      { word: 'BUS', trivia: 'Bus pertama adalah omnibus yang ditarik kuda dan mulai beroperasi di Paris pada tahun 1820-an.' },
      { word: 'CAR', trivia: 'Mobil pertama dengan mesin pembakaran internal dibuat oleh Karl Benz pada tahun 1886.' },
      { word: 'HELICOPTER', trivia: 'Helikopter pertama yang berhasil terbang dibuat oleh Igor Sikorsky pada tahun 1939.' },
      { word: 'SUBWAY', trivia: 'Subway pertama dibuka di London pada tahun 1863 dan merupakan sistem kereta bawah tanah tertua di dunia.' },
      { word: 'TRUCK', trivia: 'Truk pertama dibuat pada tahun 1896 oleh Gottlieb Daimler dan digunakan untuk mengangkut barang.' }
    ]
  },
  {
    name: 'FAMOUS LANDMARKS',
    words: [
      { word: 'EIFFELTOWER', trivia: 'Menara Eiffel di Paris awalnya direncanakan sebagai struktur sementara untuk Pameran Dunia 1889.' },
      { word: 'STATUEOFLIBERTY', trivia: 'Patung Liberty di New York dibuat oleh Frédéric Auguste Bartholdi dan diberikan oleh Prancis pada tahun 1886.' },
      { word: 'PYRAMIDS', trivia: 'Benteng piramida di Mesir adalah salah satu dari Tujuh Keajaiban Dunia dan dibangun sekitar tahun 2580 SM.' },
      { word: 'COLOSSUS', trivia: 'Kolosus di Rhodes adalah patung raksasa yang dibangun pada abad ke-3 SM dan menjadi salah satu dari Tujuh Keajaiban Dunia.' },
      { word: 'MACHU PICCHU', trivia: 'Machu Picchu adalah kota purba Inca yang terletak di pegunungan Andes, Peru, dan dibangun sekitar tahun 1450 M.' },
      { word: 'COLISEUM', trivia: 'Koliseum di Roma adalah arena gladiator terbesar yang dibangun pada tahun 70-80 M. dan dapat menampung hingga 50.000 penonton.' },
      { word: 'TAJ MAHAL', trivia: 'Taj Mahal adalah monumen cinta yang dibangun oleh Shah Jahan untuk istri kesayangannya Mumtaz Mahal pada tahun 1632.' },
      { word: 'GREAT WALL', trivia: 'Dinding Besar Tiongkok adalah bangunan pertahanan terpanjang di dunia, dengan panjang sekitar 13.000 mil.' },
      { word: 'CHRIST THE REDEEMER', trivia: 'Kristus Penebus di Rio de Janeiro adalah patung Kristus yang berdiri dengan tangan terbuka, dibangun pada tahun 1931.' },
      { word: 'PETRA', trivia: 'Petra adalah kota purba yang terletak di Yordania dan merupakan pusat perdagangan penting pada abad ke-4 SM hingga ke-2 M.' }
    ]
  }, 
  {
    name : "ATHLETES",
    words: [
      {word : "JOHN CENA", trivia : "John Cena adalah seorang pegulat profesional, aktor, dan rapper Amerika yang terkenal dengan julukan 'The Champ'."},
      {word : "THOM HAYE", trivia : "Thom Haye adalah seorang pemain sepak bola profesional Belanda yang bermain sebagai gelandang tengah untuk timnas Indonesia."},
      {word : "LEWANDOWSKI", trivia : "Robert Lewandowski adalah seorang pemain sepak bola profesional Polandia yang dikenal sebagai salah satu penyerang terbaik di dunia."},
      {word : "SERENA WILLIAMS", trivia : "Serena Williams adalah seorang petenis profesional Amerika yang telah memenangkan 23 gelar Grand Slam tunggal."},
      {word : "USAIN BOLT", trivia : "Usain Bolt adalah pelari Jamaika yang memegang rekor dunia untuk lari 100 meter dan 200 meter."},
    ]
  } ,   {
    name: 'CITIES',
    words: [
      { word: 'JAYAPURA', trivia: 'Jayapura adalah ibu kota Provinsi Papua yang berbatasan langsung dengan Papua New Guinea.' },
      { word: 'BALI', trivia: 'Bali dikenal sebagai Pulau Dewata dan merupakan destinasi wisata terkenal di Indonesia.' },
      { word: 'YOGYAKARTA', trivia: 'Yogyakarta adalah kota budaya yang terkenal dengan Keraton dan Candi Borobudur.' },
      { word: 'BANDUNG', trivia: 'Bandung dikenal sebagai Paris van Java dan terkenal dengan fashion dan kuliner.' },
      { word: 'SURABAYA', trivia: 'Surabaya adalah kota terbesar kedua di Indonesia dan dikenal sebagai Kota Pahlawan.' }
    ]
  },
  {
    name: 'MOVIES AND FILMS',
    words: [
      { word: 'AVATAR', trivia: 'Avatar adalah film fiksi ilmiah yang dirilis pada tahun 2009 dan menjadi film terlaris sepanjang masa.' },
      { word: 'TITANIC', trivia: 'Titanic adalah film romantis yang menceritakan kisah cinta di atas kapal yang tenggelam pada tahun 1912.' },
      { word: 'INCEPTION', trivia: 'Inception adalah film thriller fiksi ilmiah yang mengeksplorasi konsep mimpi dalam mimpi.' },
      { word: 'MATRIX', trivia: 'Matrix adalah film aksi fiksi ilmiah yang menceritakan tentang realitas virtual dan dunia simulasi.' },
      { word: 'JOKER', trivia: 'Joker adalah film drama psikologis yang menceritakan asal usul karakter penjahat ikonik DC Comics.' }
    ]
  },
  {
    name: 'GAMING',
    words: [
      { word: 'MINECRAFT', trivia: 'Minecraft adalah game sandbox yang memungkinkan pemain membangun dunia dari blok-blok kubus.' },
      { word: 'FORTNITE', trivia: 'Fortnite adalah game battle royale yang sangat populer dengan lebih dari 350 juta pemain terdaftar.' },
      { word: 'POKEMON', trivia: 'Pokemon adalah franchise game yang dimulai pada tahun 1996 dan telah menjadi fenomena global.' },
      { word: 'SUPERMARIO', trivia: 'Super Mario adalah karakter ikonik Nintendo yang pertama kali muncul pada tahun 1985.' },
      { word: 'LEAGUEOFLEGENDS', trivia: 'League of Legends adalah game MOBA yang memiliki lebih dari 100 juta pemain aktif setiap bulan.' }
    ]
  },
  {
    name: 'SOCIAL MEDIA',
    words: [
      { word: 'INSTAGRAM', trivia: 'Instagram adalah platform media sosial untuk berbagi foto dan video yang diluncurkan pada tahun 2010.' },
      { word: 'TIKTOK', trivia: 'TikTok adalah platform video pendek yang menjadi sangat populer di kalangan generasi muda.' },
      { word: 'TWITTER', trivia: 'Twitter adalah platform media sosial untuk berbagi pesan pendek yang disebut tweet.' },
      { word: 'FACEBOOK', trivia: 'Facebook adalah platform media sosial terbesar di dunia dengan lebih dari 2 miliar pengguna aktif.' },
      { word: 'YOUTUBE', trivia: 'YouTube adalah platform video terbesar di dunia dengan lebih dari 2 miliar pengguna bulanan.' }
    ]
  },
  {
    name: 'FASHION',
    words: [
      { word: 'JEANS', trivia: 'Jeans pertama kali dibuat oleh Levi Strauss pada tahun 1873 untuk para penambang emas di California.' },
      { word: 'SNEAKERS', trivia: 'Sneakers pertama kali dibuat pada tahun 1860-an dan awalnya disebut "plimsolls".' },
      { word: 'HANDBAG', trivia: 'Tas tangan pertama kali digunakan pada abad ke-14 dan awalnya hanya untuk membawa uang.' },
      { word: 'SUNGLASSES', trivia: 'Kacamata hitam pertama kali digunakan oleh para hakim di Tiongkok pada abad ke-12 untuk menyembunyikan ekspresi mereka.' },
      { word: 'WATCH', trivia: 'Jam tangan pertama dibuat pada abad ke-16 dan awalnya hanya dipakai oleh wanita sebagai perhiasan.' }
    ]
  },
  {
    name: 'SPACE AND ASTRONOMY',
    words: [
      { word: 'PLANET', trivia: 'Ada 8 planet di tata surya kita, dan Pluto tidak lagi dianggap sebagai planet sejak tahun 2006.' },
      { word: 'GALAXY', trivia: 'Galaksi Bima Sakti kita memiliki lebih dari 100 miliar bintang dan diameter sekitar 100.000 tahun cahaya.' },
      { word: 'ASTEROID', trivia: 'Asteroid adalah benda langit kecil yang mengorbit matahari, sebagian besar berada di sabuk asteroid antara Mars dan Jupiter.' },
      { word: 'COMET', trivia: 'Komet adalah benda langit yang terbuat dari es dan debu, dan membentuk ekor bercahaya saat mendekati matahari.' },
      { word: 'NEBULA', trivia: 'Nebula adalah awan gas dan debu di ruang angkasa yang merupakan tempat kelahiran bintang-bintang baru.' }
    ]
  },
  {
    name: 'EMOTIONS AND FEELINGS',
    words: [
      { word: 'HAPPINESS', trivia: 'Kebahagiaan adalah emosi positif yang dapat meningkatkan sistem kekebalan tubuh dan memperpanjang umur.' },
      { word: 'SADNESS', trivia: 'Kesedihan adalah emosi alami yang membantu kita memproses kehilangan dan perubahan dalam hidup.' },
      { word: 'EXCITEMENT', trivia: 'Kegembiraan adalah perasaan antusias dan energi yang tinggi yang sering muncul sebelum acara penting.' },
      { word: 'ANXIETY', trivia: 'Kecemasan adalah respons alami terhadap stres, tetapi bisa menjadi gangguan jika berlebihan.' },
      { word: 'LOVE', trivia: 'Cinta adalah emosi kompleks yang melibatkan perhatian, kasih sayang, dan ikatan emosional yang dalam.' }
    ]
  }
];


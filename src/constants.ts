
import { Article, QuizQuestion, Achievement } from './types';

export const HISTORICAL_QUOTES = [
  "Bangsa yang besar adalah bangsa yang menghargai sejarahnya. - Soekarno",
  "Sejarah adalah milik mereka yang mencatatnya.",
  "Di perpustakaan ini, waktu berhenti namun pikiran melaju.",
  "Masa lalu bukanlah beban, melainkan pelindung jalan masa depan."
];

export const ARTICLES: Article[] = [
  {
    id: 'voc-rise',
    title: 'Kejayaan dan Keruntuhan VOC',
    excerpt: 'Kisah dibalik Vereenigde Oostindische Compagnie yang sempat menjadi perusahaan terkaya di dunia.',
    content: 'Vereenigde Oostindische Compagnie (VOC) yang didirikan pada tahun 1602 bukan sekadar perusahaan dagang biasa. Ia memiliki hak oktroi—kedaulatan untuk memiliki tentara sendiri, mencetak uang, dan mengadakan perjanjian dengan raja-raja di Nusantara. Selama hampir dua abad, VOC mendominasi perdagangan rempah-rempah global. \n\nNamun, kerakusan dan korupsi internal (yang sering diplesetkan menjadi Vergaan Onder Corruptie) perlahan menggerogoti fondasi raksasa ini hingga akhirnya dibubarkan pada 31 Desember 1799. Warisan mereka berupa sistem administrasi dan infrastruktur pelabuhan tetap membekas dalam memori sejarah Indonesia.',
    category: 'Kolonialisme',
    readTime: '5 min',
    era: 'Era VOC',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeG13XIU8YyMf6hnppCN0NxqmvgyurWT_1eg&s'
  },
  {
    id: 'diponegoro-war',
    title: 'Perang Jawa: Perlawanan Sang Pangeran',
    excerpt: 'Perjuangan Pangeran Diponegoro yang mengguncang stabilitas pemerintah kolonial Belanda.',
    content: 'Pangeran Diponegoro memimpin salah satu perlawanan terbesar terhadap kolonialisme Belanda di tanah Jawa (1825-1830). Dipicu oleh pemasangan patok jalan yang melintasi makam leluhurnya, perlawanan ini menyatukan berbagai lapisan masyarakat. Taktik gerilya yang digunakan membuat Belanda kewalahan dan hampir mengalami kebangkrutan ekonomi. Perang ini diakhiri dengan pengkhianatan dalam sebuah perundingan, di mana sang pangeran ditangkap dan dibuang ke Makassar.',
    category: 'Perlawanan',
    readTime: '7 min',
    era: 'Perjuangan Daerah',
    image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1000'
  },
  {
    id: 'national-awakening',
    title: 'Fajar Kebangkitan Nasional',
    excerpt: 'Lahirnya Budi Utomo dan semangat persatuan kaum intelektual muda Indonesia.',
    content: 'Tahun 1908 menandai babak baru dengan lahirnya Boedi Oetomo. Ini adalah masa di mana perlawanan fisik mulai bertransformasi menjadi perlawanan intelektual dan organisasional. Para pemuda terpelajar Stovia menyadari bahwa kemerdekaan hanya bisa dicapai melalui persatuan nasional, bukan lagi sekadar kedaerahan.',
    category: 'Nasionalisme',
    readTime: '4 min',
    era: 'Kebangkitan Nasional',
    image: 'https://images.unsplash.com/photo-1550985543-f47f38aee02a?q=80&w=1000'
  },
  {
    id: 'majapahit-glory',
    title: 'Majapahit: Kemaharajaan Bahari Nusantara',
    excerpt: 'Masa keemasan di bawah Hayam Wuruk dan Gajah Mada dengan Sumpah Palapa yang legendaris.',
    content: 'Majapahit mencapai puncak kejayaannya pada abad ke-14 di bawah kepemimpinan Raja Hayam Wuruk dan Mahapatih Gajah Mada. Dengan Sumpah Palapa-nya, Gajah Mada bertekad menyatukan wilayah Nusantara di bawah kedamaian Majapahit. Sebagai imperium bahari, pengaruh Majapahit membentang dari Jawa, Sumatera, Semenanjung Malaya, hingga ke kepulauan bagian timur.\n\nSimbol kebesaran Majapahit seperti Surya Majapahit dan penggunaan warna merah-putih (Panji Umbul-Umbul) hingga kini masih menjadi akar identitas nasional Indonesia.',
    category: 'Kerajaan Klasik',
    readTime: '8 min',
    era: 'Era Kerajaan Hindu-Buddha',
    image: 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?q=80&w=1000'
  },
  {
    id: 'independence-proclamation',
    title: 'Detik-Detik Proklamasi 1945',
    excerpt: 'Peristiwa Rengasdengklok hingga pembacaan teks proklamasi di Pegangsaan Timur 56.',
    content: 'Kemerdekaan Indonesia tidak datang secara tiba-tiba. Kekalahan Jepang di Perang Pasifik membuka jalan bagi para pemuda untuk mendesak Soekarno dan Hatta segera memproklamasikan kemerdekaan. Peristiwa Rengasdengklok menjadi saksi bisu perbedaan strategi antara tokoh tua dan muda.\n\nHingga akhirnya, pada pagi hari 17 Agustus 1945, di bawah terik matahari Jakarta, teks proklamasi dibacakan di hadapan rakyat jelata. Sebuah pernyataan kedaulatan yang menggema ke seluruh penjuru dunia.',
    category: 'Kemerdekaan',
    readTime: '6 min',
    era: 'Era Revolusi',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1000'
  },
  {
    id: 'aceh-war-cutnyakdhien',
    title: 'Srikandi Aceh: Cut Nyak Dhien',
    excerpt: 'Keteguhan hati seorang wanita yang memimpin gerilya melawan agresi Belanda di bumi Serambi Mekkah.',
    content: 'Cut Nyak Dhien adalah simbol perlawanan yang tak kenal padam. Setelah suaminya gugur dalam pertempuran melawan Belanda, ia memimpin pasukan gerilya di hutan-hutan Aceh selama bertahun-tahun. Keberaniannya membuat Belanda sangat menghormatinya meskipun ia merupakan musuh yang sangat merepotkan. Keteguhan imannya dan rasa cintanya pada tanah kelahiran menjadi inspirasi bagi banyak pejuang wanita di kemudian hari.',
    category: 'Perlawanan',
    readTime: '9 min',
    era: 'Perjuangan Daerah',
    image: 'https://images.unsplash.com/photo-1540958742468-f99ba281ef54?q=80&w=1000'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Siapa nama Gubernur Jenderal VOC yang memindahkan pusat pemerintahan ke Batavia?',
    options: ['Jan Pieterszoon Coen', 'Herman Willem Daendels', 'Johan van Oldenbarnevelt', 'Antonio van Diemen'],
    correctIndex: 0
  },
  {
    id: 'q2',
    question: 'Tahun berapakah VOC resmi dibubarkan?',
    options: ['1788', '1799', '1800', '1811'],
    correctIndex: 1
  },
  {
    id: 'q3',
    question: 'Budi Utomo didirikan oleh para mahasiswa dari sekolah kedokteran...',
    options: ['ITB', 'STOVIA', 'Gadjah Mada', 'NIAS'],
    correctIndex: 1
  },
  {
    id: 'q4',
    question: 'Sumpah Palapa yang bertujuan menyatukan Nusantara diucapkan oleh...',
    options: ['Raden Wijaya', 'Gajah Mada', 'Hayam Wuruk', 'Kertanegara'],
    correctIndex: 1
  },
  {
    id: 'q5',
    question: 'Siapakah yang menyeret Soekarno dan Hatta ke Rengasdengklok sebelum Proklamasi?',
    options: ['Golongan Tua', 'Golongan Muda', 'Tentara Jepang', 'Mata-mata Belanda'],
    correctIndex: 1
  },
  {
    id: 'q6',
    question: 'Bendera Merah Putih yang dikibarkan saat proklamasi dijahit oleh...',
    options: ['Fatmawati', 'Megawati', 'Kartini', 'Cut Nyak Dhien'],
    correctIndex: 0
  },
  {
    id: 'q7',
    question: 'Pahlawan wanita dari Aceh yang memimpin perlawanan gerilya hingga masa tuanya adalah...',
    options: ['Cut Meutia', 'Martha Christina Tiahahu', 'Cut Nyak Dhien', 'Raden Ajeng Kartini'],
    correctIndex: 2
  },
  {
    id: 'q8',
    question: 'Di mana lokasi pembacaan teks proklamasi kemerdekaan Indonesia?',
    options: ['Istana Merdeka', 'Lapangan Ikada', 'Jl. Pegangsaan Timur No. 56', 'Rumah Laksamana Maeda'],
    correctIndex: 2
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-read',
    title: 'Penjelajah Awal',
    description: 'Selesaikan membaca artikel pertama.',
    icon: 'BookOpen',
    unlocked: true,
    historySnippet: 'Tradisi lisan di Nusantara mulai bertransformasi menjadi catatan tertulis sejak abad ke-4.'
  },
  {
    id: 'quiz-master',
    title: 'Sarjana Sejarah',
    description: 'Dapatkan skor 100% pada satu quiz.',
    icon: 'GraduationCap',
    unlocked: false,
    historySnippet: 'Sistem pendidikan modern diperkenalkan di Hindia Belanda melalui Politik Etis.'
  },
  {
    id: 'streak-7',
    title: 'Penjaga Arsip',
    description: 'Belajar selama 7 hari berturut-turut.',
    icon: 'Calendar',
    unlocked: false,
    historySnippet: 'Penanggalan di Nusantara sangat beragam, dari Saka hingga Hijriah.'
  }
];

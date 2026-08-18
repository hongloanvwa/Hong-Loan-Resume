import { useState } from 'react';
import {
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Award,
  BookOpen,
  Sparkles,
  Download,
  Share2,
  Check,
  Star,
  Play,
  FileText,
  X,
  Languages,
  Briefcase,
  GraduationCap,
  Tv,
  Video
} from 'lucide-react';

interface Project {
  title: string;
  client: string;
  slug: string;
  image: string;
  category: 'broadcast' | 'tiktok' | 'commercial' | 'shortfilm';
}

const PROJECTS: Project[] = [
  {
    image: '/images/work/phuc-son-tu.png',
    title: 'Kỹ thuật ghi hình: "Phúc Sơn Tự" - Phóng sự về chùa Phúc Sơn - Cao Xá - Bắc Ninh',
    client: 'Phóng sự truyền hình',
    slug: 'https://drive.google.com/file/d/1Gg9RbEoQeMKZ_DTjhqF83yMFhfRxRC5F/view?usp=share_link',
    category: 'broadcast',
  },
  {
    image: '/images/work/y-dang-hop-long-dan.png',
    title: 'Phóng sự: "Sáp nhập xã - Ý Đảng hợp lòng dân"',
    client: 'Phóng sự điều tra xã hội',
    slug: 'https://drive.google.com/file/d/1jt8o-JIF_HBoFdCRCAaegdjZdwCujI_A/view?usp=share_link',
    category: 'broadcast',
  },
  {
    image: '/images/work/quang-cao-tuyen-sinh-hvpnvn.png',
    title: 'Quảng cáo tuyển sinh khoa Truyền thông ĐPT HVPNVN',
    client: 'Quảng cáo tuyển sinh',
    slug: 'https://drive.google.com/file/d/13KX7iYzh2I4F6O9wAlgvQTC0uEI3Gy0E/view?usp=share_link',
    category: 'commercial',
  },
  {
    image: '/images/work/mv-chang-con-nhung-ngay-ay.png',
    title: 'MV "Chẳng còn những ngày ấy"',
    client: 'Music Video học đường',
    slug: 'https://drive.google.com/file/d/1Eho9hox7gFjTvD0Td9aBkmqS83lcOqPt/view?usp=share_link',
    category: 'shortfilm',
  },
  {
    image: '/images/work/tiktok-ao-xua-pho-moi.png',
    title: 'Dự án xây kênh Tiktok về Việt Phục "Áo xưa phố mới"',
    client: 'Dự án xây kênh TikTok',
    slug: 'https://www.tiktok.com/@moiphoxuaao?is_from_webapp=1&sender_device=pc',
    category: 'tiktok',
  },
  {
    image: '/images/work/van-hoa-an-mac-giang-duong.png',
    title: 'Phóng sự: "Văn hoá ăn mặc giảng đường"',
    client: 'Bản tin thời sự học đường',
    slug: 'https://drive.google.com/file/d/1TxrD_e9GEZuojQQShgHOuEBZNQr7dcPq/view?usp=share_link',
    category: 'broadcast',
  },
  {
    image: '/images/work/quang-cao-cao-sao-vang.png',
    title: 'Quảng cáo kỹ xảo "Cao sao vàng"',
    client: 'Quảng cáo VFX',
    slug: 'https://drive.google.com/file/d/1a4St9hHVf2pvftSbgO8rfCh4i7zdVbK2/view?usp=share_link',
    category: 'commercial',
  },
  {
    image: '/images/work/tiktok-nhap-vai-van-hoc.png',
    title: 'Kênh TikTok giáo dục nhập vai văn học',
    client: 'Kênh @chuyen.hoc.van (Giải Nhì STTTNNĐ)',
    slug: 'https://www.tiktok.com/@chuyen.hoc.van?is_from_webapp=1&sender_device=pc',
    category: 'tiktok',
  },
  {
    image: '/images/work/duong-tro-ve.png',
    title: 'Phim ngắn tiếng Anh: Đường trở về',
    client: 'Giải Nhất Tiểu phẩm cấp tỉnh',
    slug: 'https://youtu.be/hY036Er_HRI?si=QplmLOLEFU4NVJO_',
    category: 'shortfilm',
  },
  {
    image: '/images/work/kem-bo-ho.png',
    title: 'TVC: Kem bờ hồ - Hương vị vượt thời gian',
    client: 'Quảng cáo hoài niệm',
    slug: 'https://drive.google.com/file/d/12Rt8kw0NVNP0Atd2yVkoInBYxWLVNQtL/view?usp=sharing',
    category: 'commercial',
  },
];

const SKILLS = [
  {
    name: 'Biên kịch & Kịch bản',
    icon: '/images/home/education-skill/bien-kich-kich-ban.png',
    rating: 5,
    desc: 'Lên ý tưởng, cấu trúc kịch bản truyền hình, video ngắn viral',
  },
  {
    name: 'CapCut & Dựng Mobile',
    icon: '/images/home/education-skill/capcut.png',
    rating: 5,
    desc: 'Biên tập video tốc độ cao, bắt trend thuật toán TikTok / Reels',
  },
  {
    name: 'Adobe Photoshop',
    icon: '/images/home/education-skill/adobe-photoshop.jpg',
    rating: 4,
    desc: 'Xử lý hình ảnh, thiết kế thumbnail, poster truyền thông',
  },
  {
    name: 'Adobe Illustrator',
    icon: '/images/home/education-skill/illustrator.png',
    rating: 4,
    desc: 'Thiết kế vector, ấn phẩm đồ họa nhận diện thương hiệu',
  },
  {
    name: 'AI (Gemini / ChatGPT)',
    icon: '/images/home/education-skill/ai-gemini-chatgpt.webp',
    rating: 5,
    desc: 'Ứng dụng AI sáng tạo nội dung, nghiên cứu & tối ưu hóa quy trình',
  },
  {
    name: 'Quay phim & Dẫn hiện trường (MC)',
    icon: '/images/home/education-skill/quay-phim-mc.jpg',
    rating: 4,
    desc: 'Tác nghiệp góc máy hiện trường, dẫn chương trình & phỏng vấn',
  },
];

const EXPERIENCES = [
  {
    period: '09/2024',
    role: 'Thực tập sinh Truyền thông',
    company: 'Đài PT&TH Bắc Giang (nay là Bắc Ninh)',
    type: 'Thực tập',
    description:
      'Sản xuất nội dung tin bài và phóng sự truyền hình đáp ứng quy chuẩn phát sóng. Tác nghiệp ảnh hiện trường, ghi hình và thực hiện phỏng vấn nhân vật thực tế.',
    highlight: false,
  },
  {
    period: '10/2024 - 01/2025',
    role: 'Video Editor & Creative Content',
    company: 'Chippi&co',
    type: 'Part-time',
    description:
      'Quay phim, ghi hình sản phẩm doanh nghiệp, thực hiện thuyết minh/lồng tiếng. Hậu kỳ (edit) chuỗi video ngắn TikTok chuẩn thuật toán tiếp cận khách hàng.',
    highlight: true,
  },
  {
    period: '2026',
    role: 'Video Editor',
    company: 'Thanh Tran Pickleball',
    type: 'Freelance',
    description:
      'Biên kịch và dựng video ngắn phục vụ tiếp thị liên kết cho các sản phẩm thể thao. Góp phần đưa kênh đạt Top 3 doanh thu ngành hàng Pickleball trên TikTok Shop.',
    highlight: false,
  },
  {
    period: '2023 - 2025',
    role: 'Content Creator',
    company: 'Cá nhân & Kênh Văn hóa',
    type: 'Freelance',
    description:
      'Lên kịch bản và hậu kỳ video ngắn đa dạng chủ đề trên TikTok (20K+ followers, 1.5M+ likes). Sản xuất vlogs cinematic và phim ngắn nghệ thuật cá nhân.',
    highlight: false,
  },
];

const EDUCATION = [
  {
    title: 'Sinh viên Truyền thông Đa phương tiện',
    period: '2023 - Nay',
    institution: 'Học viện Phụ nữ Việt Nam',
    detail: 'GPA: 3.42 / 4.0 (Học lực Giỏi). Tư duy logic chặt chẽ, năng lực phân tích dữ liệu chuyên sâu và kỹ năng kiểm chứng thông tin báo chí khắt khe.',
    badge: 'GPA 3.42 / 4.0',
  },
  {
    title: 'Giải Nhất NCKH Sinh viên cấp Học viện',
    period: '2025',
    institution: 'Dự án Nghiên cứu Khoa học Sinh viên',
    detail: 'Khẳng định tư duy học thuật và khả năng xử lý số liệu - yếu tố nền tảng cho công tác biên tập báo chí và truyền hình chuyên nghiệp.',
    badge: 'Giải Nhất',
  },
  {
    title: 'Chứng chỉ Tiếng Anh IELTS B2',
    period: 'Chứng chỉ',
    institution: 'Khả năng ngoại ngữ',
    detail: 'Đọc hiểu, biên dịch tài liệu và khai thác tin tức trực tiếp từ các nguồn báo chí quốc tế độc lập.',
    badge: 'IELTS B2',
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div id="portfolio-root" className="min-h-screen bg-[#FBFBFB] text-[#111111] font-sans selection:bg-[#fe4300] selection:text-white">
      {/* Top Navigation */}
      <header id="main-header" className="sticky top-0 z-50 bg-[#FBFBFB]/90 backdrop-blur-md border-b border-black/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a id="nav-brand-logo" href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo/logo.svg"
              alt="Nguyễn Hồng Loan Logo"
              className="w-11 h-11 transition-transform group-hover:scale-105"
              onError={(e) => {
                // fallback if svg fails
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <span className="font-bold text-lg tracking-tight block leading-tight text-black">HỒNG LOAN</span>
              <span className="text-xs text-[#fe4300] font-medium tracking-wide uppercase">CTV BTV VTV</span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-[#fe4300] transition-colors">Giới thiệu</a>
            <a href="#skills" className="hover:text-[#fe4300] transition-colors">Kỹ năng</a>
            <a href="#experience" className="hover:text-[#fe4300] transition-colors">Kinh nghiệm</a>
            <a href="#projects" className="hover:text-[#fe4300] transition-colors">Dự án nổi bật</a>
            <a href="#contact" className="hover:text-[#fe4300] transition-colors">Liên hệ</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              id="btn-open-resume"
              onClick={() => setShowResumeModal(true)}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full border-2 border-black text-black text-sm font-semibold hover:bg-black hover:text-white transition-all shadow-sm active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#fe4300]" />
              <span>Xem Resume CV</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fe4300]/10 text-[#fe4300] text-xs sm:text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#fe4300] animate-pulse"></span>
                <span>Cộng tác viên Biên tập viên VTV</span>
              </div>

              {/* Heading */}
              <div className="flex items-center gap-4 mb-3">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black">
                  Nguyễn Hồng Loan
                </h1>
                <div className="wave select-none text-3xl sm:text-4xl">
                  👋
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#fe4300] mb-5 tracking-tight">
                Biên tập viên Thế hệ mới
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                CTV Biên tập viên trẻ yêu thích văn hoá truyền thống, sở hữu tư duy nội dung sáng tạo, năng lực nghiên cứu học thuật chuẩn mực và khả năng kể chuyện bằng ngôn ngữ truyền hình số hiện đại.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center mb-10">
                <a
                  id="hero-btn-explore"
                  href="#projects"
                  className="px-7 py-3.5 rounded-full bg-[#fe4300] text-white font-semibold text-sm sm:text-base hover:bg-[#d83900] transition-colors shadow-lg shadow-[#fe4300]/25 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Khám phá dự án</span>
                </a>
                <a
                  id="hero-btn-contact"
                  href="#contact"
                  className="px-7 py-3.5 rounded-full bg-white border border-gray-300 text-black font-semibold text-sm sm:text-base hover:border-black transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-gray-700" />
                  <span>Kết nối ngay</span>
                </a>
              </div>

              {/* Quick Contact Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-200 w-full text-xs sm:text-sm text-gray-600">
                <div
                  onClick={() => copyToClipboard('hongloanvwa@gmail.com', 'email')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors"
                  title="Nhấp để copy email"
                >
                  <Mail className="w-4 h-4 text-[#fe4300]" />
                  <span>hongloanvwa@gmail.com</span>
                  {copied === 'email' && <Check className="w-3.5 h-3.5 text-green-600" />}
                </div>

                <div
                  onClick={() => copyToClipboard('+84369608516', 'phone')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors"
                  title="Nhấp để copy số điện thoại"
                >
                  <Phone className="w-4 h-4 text-[#fe4300]" />
                  <span>+84 369 608 516</span>
                  {copied === 'phone' && <Check className="w-3.5 h-3.5 text-green-600" />}
                </div>

                <a
                  href="https://www.tiktok.com/@nghongloan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 font-medium"
                >
                  <span>@nghongloan</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Right Portrait & Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fe4300]/20 to-orange-100 rounded-3xl transform rotate-2 scale-102"></div>
                
                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 p-2">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 relative group">
                    <img
                      src="/images/portrait.jpg"
                      alt="Nguyễn Hồng Loan - Chân dung"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                      <p className="text-xs uppercase tracking-wider font-semibold text-orange-300">Biên tập viên</p>
                      <p className="text-lg font-bold">Nguyễn Hồng Loan</p>
                      <p className="text-xs text-gray-300">Truyền thông Đa phương tiện - HVPNVN</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-short">
                  <div className="w-11 h-11 rounded-xl bg-[#fe4300]/10 flex items-center justify-center text-[#fe4300]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Thành tích nổi bật</p>
                    <p className="text-sm font-bold text-black">Giải Nhất NCKH 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Giới thiệu (About Me) */}
      <section id="about" className="py-20 lg:py-32 bg-[#F2F2F2] border-b border-black/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-black pb-6 mb-12">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Giới thiệu</h2>
            </div>
            <span className="text-xl font-bold text-[#fe4300]">( 01 )</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left image */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-300 bg-white">
                <img
                  src="/images/portrait.jpg"
                  alt="Nguyễn Hồng Loan Giới thiệu"
                  className="w-full h-[460px] object-cover"
                />
              </div>
            </div>

            {/* Right text & stats */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Sinh viên năm 3 ngành <strong>Truyền thông Đa phương tiện</strong>, đam mê và định hướng theo đuổi lĩnh vực báo chí – truyền hình và sản xuất nội dung văn hoá. Từng đạt <strong>Giải Nhất Nghiên cứu Khoa học</strong> cấp Học viện với đề tài về văn hoá truyền thống.
                </p>
                <p>
                  Có kinh nghiệm kiến tập tại <strong>Đài Phát thanh & Truyền hình Bắc Giang</strong> (nay là Đài PT&TH Bắc Ninh), trực tiếp tham gia tìm hiểu quy trình sản xuất tin tức truyền hình, tác nghiệp phóng sự hiện trường và phỏng vấn nhân vật thực tế.
                </p>
                <p>
                  Sở hữu tinh thần năng động, tư duy phản biện tốt, kỹ năng lên ý tưởng kịch bản sắc bén, kỹ năng quay dựng video và làm việc nhóm hiệu quả trong môi trường cường độ cao.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 py-8 border-y border-gray-300">
                <div id="stat-experience" className="text-center sm:text-left">
                  <span className="block text-3xl sm:text-5xl font-black text-black tracking-tight">03+</span>
                  <span className="text-xs sm:text-base text-gray-600 font-medium mt-1 block">Năm kinh nghiệm</span>
                </div>
                <div id="stat-engagement" className="text-center sm:text-left border-x border-gray-300 px-3 sm:px-6">
                  <span className="block text-3xl sm:text-5xl font-black text-[#fe4300] tracking-tight">1.5M+</span>
                  <span className="text-xs sm:text-base text-gray-600 font-medium mt-1 block">Lượt tương tác</span>
                </div>
                <div id="stat-projects" className="text-center sm:text-left">
                  <span className="block text-3xl sm:text-5xl font-black text-black tracking-tight">10+</span>
                  <span className="text-xs sm:text-base text-gray-600 font-medium mt-1 block">Dự án hoàn thành</span>
                </div>
              </div>

              {/* Language Tags */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2 text-black font-semibold text-base">
                  <Languages className="w-5 h-5 text-[#fe4300]" />
                  <span>Ngôn ngữ:</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full bg-white text-black font-medium text-sm border border-gray-300 shadow-sm">
                    🇻🇳 Tiếng Việt (Bản ngữ)
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white text-black font-medium text-sm border border-gray-300 shadow-sm">
                    🇬🇧 English (IELTS B2)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Kinh nghiệm (Experience) */}
      <section id="experience" className="py-20 lg:py-32 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b-2 border-black pb-6 mb-16">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Kinh nghiệm làm việc</h2>
            </div>
            <span className="text-xl font-bold text-[#fe4300]">( 02 )</span>
          </div>

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-100"
              >
                {/* Time & Role */}
                <div className="md:col-span-4">
                  <span className="inline-block px-3 py-1 bg-black text-white text-xs font-semibold rounded-md mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-black">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-[#fe4300]">{exp.company}</span>
                    <span className="text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full font-medium">{exp.type}</span>
                  </div>
                </div>

                {/* Timeline connector visual on desktop */}
                <div className="hidden md:flex md:col-span-1 justify-center pt-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#fe4300] ring-4 ring-[#fe4300]/20"></div>
                </div>

                {/* Description */}
                <div className="md:col-span-7">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Kỹ năng học thuật & Chuyên môn (Academic & Skills) */}
      <section id="skills" className="py-20 lg:py-32 bg-[#F6F6F6] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b-2 border-black pb-6 mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Học vấn & Kỹ năng</h2>
              <p className="text-sm text-gray-500 mt-1">Nền tảng học thuật và năng lực chuyên môn thực chiến</p>
            </div>
            <span className="text-xl font-bold text-[#fe4300]">( 03 )</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Education column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-[#fe4300]" />
                <h3 className="text-2xl font-bold text-black">Học vấn & Thành tích</h3>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-bold text-lg text-black">{edu.title}</h4>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#fe4300]/10 text-[#fe4300] font-bold whitespace-nowrap">
                        {edu.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">{edu.institution} • <span className="text-gray-500 font-normal">{edu.period}</span></p>
                    <p className="text-sm text-gray-600 leading-relaxed">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-[#fe4300]" />
                <h3 className="text-2xl font-bold text-black">Kỹ năng chuyên môn</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {SKILLS.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#fe4300] transition-all hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 p-2 flex items-center justify-center overflow-hidden border border-gray-200 shrink-0">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-black">{skill.name}</h4>
                        {/* Rating Stars */}
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < skill.rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'fill-gray-200 text-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Dự án nổi bật (Featured Projects) */}
      <section id="projects" className="py-20 lg:py-32 bg-[#EFEFEF] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b-2 border-black pb-6 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Dự án nổi bật</h2>
              <p className="text-sm text-gray-500 mt-1">Các tác phẩm phóng sự, video ngắn, MV và TVC đã sản xuất</p>
            </div>
            <span className="text-xl font-bold text-[#fe4300]">( 04 )</span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { key: 'all', label: 'Tất cả (10)' },
              { key: 'broadcast', label: 'Phóng sự & Báo chí' },
              { key: 'tiktok', label: 'TikTok & Viral Content' },
              { key: 'commercial', label: 'TVC & Quảng cáo' },
              { key: 'shortfilm', label: 'MV & Phim ngắn' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.key
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Project Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-gray-900 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback visual banner
                      e.currentTarget.src = '/images/portrait.jpg';
                    }}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-semibold">
                      {project.client}
                    </span>
                  </div>

                  {/* Play / View overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.slug, '_blank');
                      }}
                      className="p-3.5 rounded-full bg-[#fe4300] text-white hover:scale-110 transition-transform shadow-lg"
                      title="Mở liên kết tác phẩm"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-black line-clamp-2 group-hover:text-[#fe4300] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">Thể loại: {project.client}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-gray-700 hover:text-black flex items-center gap-1"
                    >
                      <span>Xem thông tin</span>
                    </button>

                    <a
                      href={project.slug}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#fe4300] hover:text-white text-gray-900 text-xs font-semibold transition-colors"
                    >
                      <span>Xem tác phẩm</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 05: Kết nối & Liên hệ (Contact Section) */}
      <section id="contact" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe4300]/10 text-[#fe4300] text-xs font-bold">
                <span>LIÊN HỆ & HỢP TÁC</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
                Sẵn sàng đồng hành cùng các dự án truyền hình & nội dung số
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Quý cơ quan, đối tác hoặc đơn vị sản xuất có nhu cầu cộng tác biên tập, sản xuất video hoặc xây dựng kịch bản, vui lòng liên hệ trực tiếp qua thông tin dưới đây.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:hongloanvwa@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:border-black transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#fe4300] group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Email cá nhân</span>
                    <span className="text-base font-bold text-black">hongloanvwa@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+84369608516"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:border-black transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#fe4300] group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Số điện thoại / Zalo</span>
                    <span className="text-base font-bold text-black">+84 369 608 516</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Social Channels & Quick message */}
            <div className="lg:col-span-6 bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Các kênh truyền thông đang quản lý</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <a
                    href="https://www.tiktok.com/@nghongloan"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-[#fe4300] transition-colors flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">
                      TT
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">TikTok Cá nhân</p>
                      <p className="text-sm font-bold text-black">@nghongloan</p>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@chuyen.hoc.van"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-[#fe4300] transition-colors flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">TikTok Văn học</p>
                      <p className="text-sm font-bold text-black">@chuyen.hoc.van</p>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@moiphoxuaao"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-[#fe4300] transition-colors flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                      CP
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">TikTok Cổ Phục</p>
                      <p className="text-sm font-bold text-black">@moiphoxuaao</p>
                    </div>
                  </a>

                  <a
                    href="https://www.youtube.com/@onlyelse"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-[#fe4300] transition-colors flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">YouTube Channel</p>
                      <p className="text-sm font-bold text-black">@onlyelse</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Resume download prompt box */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-black text-sm">Hồ sơ năng lực hoàn chỉnh (CV)</p>
                  <p className="text-xs text-gray-500">Xem hoặc tải bản PDF đầy đủ thông tin chi tiết</p>
                </div>
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-[#fe4300] transition-colors whitespace-nowrap flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Xem CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo.svg"
                alt="Logo"
                className="w-10 h-10 invert opacity-90"
              />
              <div>
                <span className="font-bold text-lg text-white block">Nguyễn Hồng Loan</span>
                <span className="text-xs text-gray-400">CTV Biên tập viên VTV • BTV Thế hệ mới</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#about" className="hover:text-white transition-colors">Giới thiệu</a>
              <a href="#skills" className="hover:text-white transition-colors">Kỹ năng</a>
              <a href="#experience" className="hover:text-white transition-colors">Kinh nghiệm</a>
              <a href="#projects" className="hover:text-white transition-colors">Dự án</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} Nguyễn Hồng Loan. All rights reserved.</p>
            <p>Thiết kế & hoàn thiện hồ sơ năng lực truyền thông đa phương tiện.</p>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-video bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/portrait.jpg';
                }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#fe4300]/10 text-[#fe4300] text-xs font-bold">
                {selectedProject.client}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-black">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tác phẩm nằm trong danh mục các dự án tiêu biểu thực hiện bởi Nguyễn Hồng Loan, thể hiện kỹ năng xây dựng kịch bản, quay phim hiện trường và biên tập hậu kỳ.
              </p>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:bg-gray-100"
                >
                  Đóng
                </button>
                <a
                  href={selectedProject.slug}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#fe4300] hover:bg-[#d83900] text-white text-sm font-bold flex items-center gap-2 shadow-md shadow-[#fe4300]/25"
                >
                  <span>Mở video / Liên kết gốc</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#fe4300]" />
                <h3 className="text-xl font-bold text-black">Hồ Sơ Năng Lực (Resume CV)</h3>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Printable CV Content */}
            <div className="space-y-6 text-left text-sm text-gray-800">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-200">
                <div>
                  <h2 className="text-2xl font-black text-black">NGUYỄN HỒNG LOAN</h2>
                  <p className="text-[#fe4300] font-bold">CTV BIÊN TẬP VIÊN VTV • TRUYỀN THÔNG ĐA PHƯƠNG TIỆN</p>
                  <p className="text-xs text-gray-500 mt-1">📧 hongloanvwa@gmail.com | 📱 +84 369 608 516</p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-[#fe4300] transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  <span>In / Lưu PDF</span>
                </button>
              </div>

              <div>
                <h4 className="font-bold text-base text-black border-b border-gray-300 pb-1 mb-2">MỤC TIÊU NGHỀ NGHIỆP</h4>
                <p className="text-gray-700 leading-relaxed">
                  Phát triển trở thành Biên tập viên truyền hình và nhà sản xuất nội dung chuyên nghiệp, ứng dụng tư duy báo chí chuẩn mực kết hợp ngôn ngữ video số hiện đại để tạo ra các tác phẩm có chiều sâu văn hoá và sức lan tỏa mạnh mẽ.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-base text-black border-b border-gray-300 pb-1 mb-2">HỌC VẤN & THÀNH TÍCH</h4>
                <ul className="list-disc list-inside space-y-1.5 text-gray-700">
                  <li><strong>Sinh viên Truyền thông Đa phương tiện</strong> - Học viện Phụ nữ Việt Nam (GPA: 3.42 / 4.0 - Học lực Giỏi).</li>
                  <li><strong>Giải Nhất Nghiên cứu Khoa học</strong> Sinh viên cấp Học viện năm 2025.</li>
                  <li><strong>Chứng chỉ Tiếng Anh IELTS B2</strong>.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base text-black border-b border-gray-300 pb-1 mb-2">KINH NGHIỆM LÀM VIỆC</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-black">Đài PT&TH Bắc Giang (nay là Bắc Ninh) | Thực tập sinh Truyền thông (09/2024)</p>
                    <p className="text-xs text-gray-600">Sản xuất tin bài, phóng sự truyền hình, tác nghiệp ảnh hiện trường và phỏng vấn nhân vật.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Chippi&co | Video Editor & Creative Content (10/2024 - 01/2025)</p>
                    <p className="text-xs text-gray-600">Sản xuất và biên tập video ngắn TikTok chuẩn thuật toán, quay phim ghi hình và thuyết minh.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Thanh Tran Pickleball | Video Editor Freelance (2026)</p>
                    <p className="text-xs text-gray-600">Biên kịch và dựng video ngắn TikTok Shop thể thao, đạt Top 3 doanh thu ngành hàng Pickleball.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-base text-black border-b border-gray-300 pb-1 mb-2">KỸ NĂNG CHUYÊN MÔN</h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-semibold">Biên kịch & Kịch bản</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-semibold">CapCut & Dựng Mobile</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-semibold">Adobe Photoshop</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-semibold">Adobe Illustrator</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-semibold">AI (Gemini / ChatGPT)</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-semibold">Quay phim & MC hiện trường</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-sm"
              >
                Đóng lại
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

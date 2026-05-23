"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { CheckCircle, Home, Zap, MessageCircle } from "lucide-react";

export default function LandingPage() {
  const whatsappLink = "https://wa.me/212613638043?text=السلام%20عليكم%20سي%20يونس،%20أنا%20مهتم%20بهذا%20العقار.";
  
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="large"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        {/* Pulse Animated WhatsApp Button */}
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#004b87] shadow-xl transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full bg-[#d4af37] animate-ping opacity-75"></span>
          <MessageCircle className="w-8 h-8 text-[#d4af37]" />
        </a>

  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "الرئيسية",          id: "hero"},
        {
          name: "العقارات",          id: "listings"},
        {
          name: "من نحن",          id: "about"},
        {
          name: "تواصل معنا",          id: "contact"},
      ]}
      brandName="يونس أصيلة"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="عقارات يونس أصيلة: بيتك بين يديك"
      description="اكتشف أفضل الفرص العقارية في مدينة أصيلة الساحرة، بيع، كراء، وسياحة."
      buttons={[
        {
          text: "استكشف العقارات",          href: "#listings"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/courtyard-lions-alhambra_1139-27.jpg"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/luxury-holiday-home_23-2151918264.jpg", alt: "Luxury holiday home" },
        { src: "http://img.b2bpic.net/free-photo/luxury-courtyard-oasis-with-pool-open-skylight_23-2152008203.jpg", alt: "Luxury courtyard oasis with pool and open skylight" },
        { src: "http://img.b2bpic.net/free-photo/traditional-house-architecture_23-2151050988.jpg", alt: "Traditional house architecture" },
        { src: "http://img.b2bpic.net/free-photo/architecture-morocco-style_74190-6502.jpg", alt: "Architecture morocco style" },
        { src: "http://img.b2bpic.net/free-photo/egyprt-tourist-resort_1385-743.jpg", alt: "Egyprt tourist resort" },
      ]}
      avatarText="عملائنا السعداء"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="خبرة تضع ثقتك في مكانها"
      description="بخبرة تمتد لسنوات في السوق العقاري بأصيلة، نوفر لكم خدمات شفافة ومضمونة."
      bulletPoints={[
        { title: "بيع وشراء", description: "عقارات موثقة ومضمونة" },
        { title: "كراء طويل", description: "خيارات سكن مريحة ومستقرة" },
        { title: "كراء موسمي", description: "استمتع بعطلة لا تُنسى في أصيلة" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/office-executive-holding-clipboard-discussing-with-company-manager-staircase-business-building-analysing-reports-group-professional-businesspeople-working-modern-financial-workplace_482257-13826.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { icon: Home, title: "معاينة ميدانية", description: "نرافقك في زيارة العقارات" },
        { icon: CheckCircle, title: "توثيق قانوني", description: "عقود سليمة ومحفظة" },
        { icon: Zap, title: "سرعة التجاوب", description: "تواصل فوري عبر الواتساب" },
      ]}
      title="خدماتنا المميزة"
      description="نحن نركز على تسهيل عملية البحث والتعاقد في أصيلة."
    />
  </div>

  <div id="listings" data-section="listings">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "فيلا فاخرة", price: "3,000,000 DH", variant: "بيع", imageSrc: "http://img.b2bpic.net/free-photo/luxury-holiday-home_23-2151918244.jpg", onProductClick: () => window.open(whatsappLink, '_blank') },
        { id: "2", name: "شقة في المدينة", price: "4500 DH/شهر", variant: "كراء طويل", imageSrc: "http://img.b2bpic.net/free-photo/luxury-holiday-home_23-2151918251.jpg", onProductClick: () => window.open(whatsappLink, '_blank') },
        { id: "3", name: "بقعة أرضية", price: "800,000 DH", variant: "بيع", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-outdoor-swimming-pool-with-sea-ocean-white-cloud-blue-sky_74190-8835.jpg", onProductClick: () => window.open(whatsappLink, '_blank') },
        { id: "4", name: "منزل سياحي", price: "800 DH/ليلة", variant: "كراء موسمي", imageSrc: "http://img.b2bpic.net/free-photo/close-up-house-s-entrance_1156-87.jpg", onProductClick: () => window.open(whatsappLink, '_blank') },
        { id: "5", name: "شقة سياحية", price: "600 DH/ليلة", variant: "كراء موسمي", imageSrc: "http://img.b2bpic.net/free-photo/minimalist-architecture-space_23-2151912529.jpg", onProductClick: () => window.open(whatsappLink, '_blank') },
        { id: "6", name: "محل تجاري", price: "5000 DH/شهر", variant: "كراء", imageSrc: "http://img.b2bpic.net/free-photo/top-view-idyllic-beach-falesia-algarve-region-portugal_231208-6932.jpg", onProductClick: () => window.open(whatsappLink, '_blank') },
      ]}
      title="أحدث العقارات"
      description="عروض متنوعة تلبي كافة الاحتياجات. اضغط على العقار للاستفسار عبر واتساب."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",          tag: "شامل",          price: "1%",          period: "عمولة",          description: "لخدمات البيع المباشر",          button: { text: "تواصل", href: "#contact" },
          featuresTitle: "المميزات",          features: ["تقييم مجاني", "تسويق احترافي", "دعم قانوني"],
        },
        {
          id: "p2",          tag: "كراء",          price: "نصف شهر",          period: "عمولة",          description: "لخدمات الكراء طويل الأمد",          button: { text: "تواصل", href: "#contact" },
          featuresTitle: "المميزات",          features: ["فحص المستأجرين", "تنسيق العقد", "إدارة التوقيع"],
        },
      ]}
      title="خطط الخدمات"
      description="باقاتنا تناسب الجميع في سوق أصيلة."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "أحمد المغربي", role: "مستثمر", company: "كازابلانكا", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/photo-black-woman-caucasian-guy-have-outdoor-walk-stand-closely_273609-18072.jpg" },
        { id: "2", name: "سارة فرنسية", role: "سائحة", company: "باريس", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/shy-charming-woman-with-curly-hair-wearing-denim-shirt-listening-music_291650-819.jpg" },
        { id: "3", name: "محمد أصيلة", role: "مالك", company: "أصيلة", rating: 4, imageSrc: "http://img.b2bpic.net/free-photo/low-angle-business-man-talking-phone_23-2148479503.jpg" },
        { id: "4", name: "ياسين إسباني", role: "مستثمر", company: "مدريد", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/joyful-beautiful-young-hispanic-woman-opening-door-standing-doorway_74855-10224.jpg" },
        { id: "5", name: "فاطمة مغربية", role: "مستأجرة", company: "طنجة", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shot-happy-white-couple-moving-together-into-new-house_181624-36388.jpg" },
      ]}
      kpiItems={[
        { value: "100+", label: "عقار مباع" },
        { value: "200+", label: "سائح مستضاف" },
        { value: "10+", label: "سنوات خبرة" },
      ]}
      title="أراء عملائنا"
      description="قصص نجاح عملائنا في العثور على عقار أحلامهم."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "هل العقارات محفظة؟", content: "نعم، معظم عقاراتنا محفظة قانونياً." },
        { id: "q2", title: "كيف أحجز عبر الواتساب؟", content: "بمجرد النقر، سيتم توجيهك لرسالة تلقائية." },
        { id: "q3", title: "هل يتوفر كراء موسمي؟", content: "نعم، خاصة في فصل الصيف." },
      ]}
      sideTitle="أسئلة شائعة"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "animated-grid" }}
      text="هل لديك استفسار؟ تواصل مع يونس الآن عبر واتساب للرد الفوري."
      buttons={[
        { text: "تحدث معي على واتساب", href: whatsappLink },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "الرئيسية", href: "#" }, { label: "العقارات", href: "#listings" }] },
        { items: [{ label: "تواصل", href: "#contact" }, { label: "الخصوصية", href: "#" }] },
      ]}
      logoText="يونس أصيلة"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
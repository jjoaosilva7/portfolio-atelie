import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logoAtelie from '../imports/logoAtelie.png';
import keliFouet from '../imports/kelifouet1.jpeg';
import keliMaoNoQ from '../imports/kelimaonoq.jpeg';
import boloConfetes from '../imports/WhatsApp_Image_2026-05-22_at_13.48.27__4_.jpeg';
import boloRosa from '../imports/WhatsApp_Image_2026-05-22_at_13.48.27__3_.jpeg';
import coxinhaPanko from '../imports/WhatsApp_Image_2026-05-20_at_19.23.49.jpeg';
import fatiaBolo from '../imports/WhatsApp_Image_2026-05-20_at_20.25.09__1_.jpeg';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Contato', href: '#contato' },
];

const PRODUCTS = [
  {
    id: 'fatias-supreme',
    title: 'Fatias Supreme',
    description: 'Massa super molhadinha e recheio no ponto perfeito.',
    image: fatiaBolo,
    alt: 'Fatia de Bolo',
  },
  {
    id: 'bolo-confetes',
    title: 'Bolo de Confetes',
    description: 'Clássico vibrante que faz sucesso em qualquer ocasião.',
    image: boloConfetes,
    alt: 'Bolo de Confetes',
  },
  {
    id: 'bolos-festivos',
    title: 'Bolos Festivos',
    description: 'O centro das atenções para o seu evento inesquecível.',
    image: boloRosa,
    alt: 'Bolo Festivo',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#513629] overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif", scrollBehavior: 'smooth' }}>

      {/* HEADER */}
      <header className="flex justify-between items-center px-[5%] py-5 bg-[rgba(250,250,250,0.95)] backdrop-blur-[15px] sticky top-0 z-[100] border-b border-[rgba(0,0,0,0.05)]">
        <a href="#" className="flex items-center h-[80px] md:h-[90px] transition-transform hover:scale-105">
          <ImageWithFallback
            src={logoAtelie}
            alt="Logo Ateliê Mendes"
            className="w-auto h-full object-contain border-none shadow-none"
          />
        </a>
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-[#513629] font-medium transition-colors hover:text-[#e47a98]">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="bg-[#e47a98] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-transform hover:scale-105">
          Fazer Pedido
        </a>
      </header>

      {/* HERO - CHEF KELI EM DESTAQUE */}
      <section className="flex flex-wrap items-center px-[5%] py-20 gap-16 min-h-[75vh]">
        <div className="flex-1 min-w-[300px] max-w-[600px]">
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
            Keli<br/>Mendes
          </h1>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Chef de confeitaria artesanal especializada em criar experiências únicas através de doces e salgados premium. Cada criação combina técnica refinada com ingredientes de altíssima qualidade.
          </p>
          <a href="#produtos" className="inline-block bg-[#e47a98] text-white px-8 py-3.5 rounded-full font-semibold text-base transition-transform hover:scale-105">
            Ver Criações
          </a>
        </div>
        <div className="flex-1 min-w-[300px] max-w-[500px]">
          <div className="relative h-[550px] rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(81,54,41,0.2)]">
            <ImageWithFallback
              src={keliMaoNoQ}
              alt="Chef Keli Mendes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SOBRE - MÃO NA MASSA */}
      <section id="sobre" className="bg-[#df70b8] text-white px-[5%] pt-24 pb-0 flex flex-wrap gap-12 items-end">
        <div className="flex-1 min-w-[300px] pb-24">
          <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            Excelência Artesanal
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.05]">
            Mão na Massa.
          </h2>
          <p className="text-xl font-light leading-relaxed opacity-95">
            Do rigor técnico à escolha dos melhores insumos. Cada criação é desenvolvida para clientes exigentes que buscam padrão de excelência sem perder a alma do feito à mão.
          </p>
        </div>
        <div className="flex-1 min-w-[300px] h-[520px]">
          <ImageWithFallback
            src={keliFouet}
            alt="Chef Keli com Fouet"
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </section>

      {/* VITRINE DE PRODUTOS */}
      <section id="produtos" className="px-[5%] py-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#fce7f3] text-[#e47a98] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Portfolio
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-6xl lg:text-7xl mb-4">
              Criações Artesanais
            </h2>
            <p className="text-lg opacity-70 max-w-[600px] mx-auto">
              Cada doce é uma obra de arte feita com dedicação e os melhores ingredientes
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">

          {PRODUCTS.map((product) => (
            <div key={product.id} className="text-left bg-white rounded-[25px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] cursor-pointer transition-transform hover:-translate-y-2.5 group">
              <div className="h-[300px] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl mb-1 text-[#513629]">
                  {product.title}
                </h3>
                <p className="text-[#777] text-sm m-0">
                  {product.
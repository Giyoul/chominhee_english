import {
  ArrowRight,
  BookOpen,
  Camera,
  Check,
  ChevronRight,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Target,
} from 'lucide-react';

const concerns = [
  ['단어는 외웠는데', '문장을 읽기 시작하면 막히는 아이'],
  ['문법은 배웠는데', '문장 속에서 규칙을 찾지 못하는 아이'],
  ['숙제는 해오는데', '혼자 공부하는 습관이 잡히지 않은 아이'],
] as const;

const learningSteps = [
  ['01', '품사', '단어가 문장 안에서 맡은 역할을 이해합니다.'],
  ['02', '문장 구조', '문장이 만들어지는 원리를 눈으로 찾습니다.'],
  ['03', '문법', '외운 규칙을 실제 문장에 적용합니다.'],
  ['04', '독해', '배운 내용을 이용해 스스로 읽고 설명합니다.'],
] as const;

const reviews = [
  {
    title: '기초부터 차근차근',
    quote: '아이 눈높이에 맞춰 친절하게 수업해 주시고, 자신도 많이 생겼어요.',
    image: '/images/review-confidence.png',
    width: 371,
    height: 740,
    mask: 'mask-confidence',
  },
  {
    title: '꼼꼼한 맞춤 지도',
    quote: '조금씩 읽기도 되고 어휘도 꼼꼼히 익혀가는 것 같아 만족합니다.',
    image: '/images/review-basics.png',
    width: 381,
    height: 606,
    mask: 'mask-basics',
  },
  {
    title: '중학교까지 이어진 실력',
    quote: '기초를 닦고 문법을 다져 중학생이 된 지금도 세심한 지도를 받고 있어요.',
    image: '/images/review-middle.png',
    width: 378,
    height: 750,
    mask: 'mask-middle',
  },
  {
    title: '영어에 대한 꾸준한 흥미',
    quote: '숙제는 싫어해도 영어에 대한 흥미를 잃지 않고 꾸준히 다니고 있어요.',
    image: '/images/review-consistency.png',
    width: 377,
    height: 698,
    mask: 'mask-consistency',
  },
  {
    title: '아이를 사랑하는 마음',
    quote: '매번 소통도 잘 되고 아이들을 사랑하는 원장님의 마음이 느껴지는 학원이에요.',
    image: '/images/review-care.png',
    width: 370,
    height: 512,
    mask: '',
  },
] as const;

const credentials = [
  '정교사 2급 자격증',
  '고등학교 기간제 교사',
  '고등학교 입시상담 교사',
  '고등 입시 13년',
  '영어교육 전공 석사',
  '호주 유학',
] as const;

const phoneUrl = 'tel:03180165715';
const naverPlaceUrl = 'https://naver.me/FvFuFl54';
const naverTalkUrl = 'https://talk.naver.com/ct/w5wsk7?frm=mnmb&frm=mnmb#nafullscreen';
const instagramUrl = 'https://www.instagram.com/reel/Dbjoudpzlfg/?igsh=azRseWs1czBmY2Z1';

function Logo() {
  return (
    <>
      <span className="brand-character" aria-hidden="true">
        <img src="/images/logo.webp" alt="" width={404} height={154} />
      </span>
      <span className="brand-copy">
        <span><strong>고래영어</strong><i>조민희영어</i></span>
        <small>산운초 캠퍼스</small>
      </span>
    </>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="고래영어, 조민희영어 산운초 캠퍼스 첫 화면으로 이동">
          <Logo />
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          <a href="#philosophy">교육 철학</a>
          <a href="#program">수업 안내</a>
          <a href="#reviews">학부모 후기</a>
          <a href="#director">원장 소개</a>
        </nav>
        <a className="header-cta" href={phoneUrl}>
          <Phone aria-hidden="true" />
          031-8016-5715
        </a>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true">01</span>
            고래영어, 조민희영어 산운초 캠퍼스
          </p>
          <h1>
            <span className="hero-title-line">기본은 탄탄하게,</span>
            <span className="hero-title-line">공부는 <em>스스로.</em></span>
          </h1>
          <p className="hero-description">
            아이마다 다른 막힘을 세심하게 찾아 채우고,
            <br className="desktop-only" /> 중학교에서도 혼자 공부할 수 있는 힘을 만듭니다.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={phoneUrl}>
              <Phone aria-hidden="true" />
              전화 상담
            </a>
            <a className="secondary-action" href={naverTalkUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              네이버 톡 문의
            </a>
          </div>
          <div className="hero-proof">
            <BookOpen aria-hidden="true" />
            <span>품사부터 독해까지 연결하는 맞춤 수업</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <img
              src="/images/classroom.png"
              alt="고래영어 교실에서 각자의 교재로 집중해서 공부하는 학생들"
              width={1456}
              height={1080}
              sizes="(max-width: 860px) 90vw, 44vw"
            />
          </div>
          <div className="photo-note">
            <span>ONE BY ONE</span>
            <strong>한 명씩, 제대로</strong>
            <p>배운 것을 스스로 설명할 때까지 확인합니다.</p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="philosophy section-block">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">고래영어, 조민희영어의 시작점</p>
              <h2>빠른 진도보다<br />오래가는 공부의 힘</h2>
            </div>
            <p>
              단어를 알면 문장을 읽고, 문법을 배우면 문장 속에서 찾아내고,
              배운 내용은 자기 말로 풀어낼 수 있어야 합니다.
            </p>
          </div>

          <div className="concern-grid">
            {concerns.map(([lead, detail], index) => (
              <article key={lead} className="concern-card">
                <span>0{index + 1}</span>
                <strong>{lead}</strong>
                <p>{detail}</p>
              </article>
            ))}
          </div>

          <div className="philosophy-statement">
            <Sparkles aria-hidden="true" />
            <p>
              진도를 빨리 나가는 것보다 <strong>배운 것을 자기 것으로 만드는 과정</strong>이 먼저입니다.
            </p>
          </div>
        </div>
      </section>

      <section id="program" className="method section-block">
        <div className="section-shell">
          <div className="section-heading centered">
            <p className="section-kicker">연결해서 배우는 영어</p>
            <h2>외우고 끝나는 대신,<br />읽어내는 힘까지</h2>
            <p>각 단계가 다음 공부의 도구가 되도록 차근차근 연결합니다.</p>
          </div>

          <div className="step-grid">
            {learningSteps.map(([number, title, description], index) => (
              <article key={title} className="step-card">
                <span>{number}</span>
                <div className="step-icon" aria-hidden="true">{['A', 'S', 'G', 'R'][index]}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                {index < learningSteps.length - 1 && <ChevronRight className="step-arrow" aria-hidden="true" />}
              </article>
            ))}
          </div>

          <div className="one-to-one">
            <div className="one-to-one-title">
              <Target aria-hidden="true" />
              <div>
                <span>1:1 CHECK</span>
                <h3>막히는 지점은 아이마다 다르니까</h3>
              </div>
            </div>
            <p>일대일로 부족한 부분을 정확히 찾고, 반복하고 확인하며 자기 것으로 만듭니다.</p>
          </div>

          <div className="program-grid">
            <article className="program-card elementary">
              <span className="program-label">ELEMENTARY</span>
              <h3>초등 과정</h3>
              <p>중학교에 올라갔을 때 스스로 공부할 수 있도록 기본기와 공부 습관을 함께 만듭니다.</p>
              <ul>
                {['파닉스와 리딩', '문장 구조와 어휘', '문법과 독해', '기본기와 공부 습관'].map((item) => (
                  <li key={item}><Check aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </article>
            <article className="program-card middle">
              <span className="program-label">MIDDLE SCHOOL</span>
              <h3>중등 과정</h3>
              <p>초등에서 만든 공부의 힘을 학교별 내신과 고등 영어를 준비하는 실력으로 확장합니다.</p>
              <ul>
                {['학교별 내신 관리', '문법과 독해', '서술형 대비', '고등 영어 기반'].map((item) => (
                  <li key={item}><Check aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews section-block">
        <div className="section-shell">
          <div className="section-heading reviews-heading">
            <div>
              <p className="section-kicker">학부모가 직접 전한 이야기</p>
              <h2>아이의 변화를<br />가장 가까이에서</h2>
            </div>
            <p>화려한 약속 대신, 실제로 수업을 경험한 학부모님의 이야기를 들려드립니다.</p>
          </div>
          <div className="review-scroller">
            {reviews.map((review) => (
              <article key={review.title} className="review-card">
                <Quote aria-hidden="true" />
                <h3>{review.title}</h3>
                <p>“{review.quote}”</p>
                <details>
                  <summary>후기 원문 보기</summary>
                  <span className={`review-original ${review.mask}`}>
                    <img
                      src={review.image}
                      alt={`${review.title} 학부모 후기 원문`}
                      width={review.width}
                      height={review.height}
                      loading="lazy"
                    />
                    {review.mask && <i className="face-mask" aria-hidden="true" />}
                  </span>
                </details>
              </article>
            ))}
          </div>
          <p className="review-footnote">제공된 네이버 플레이스 후기 원문을 바탕으로 핵심 내용을 정리했습니다.</p>
        </div>
      </section>

      <section className="story section-block">
        <div className="section-shell story-grid">
          <div className="story-copy">
            <p className="section-kicker">수업이 더 궁금하다면</p>
            <h2>아이의 성장 과정과<br />수업 자료를 만나보세요</h2>
            <p>교재를 선택하고 구성하는 이유, 학생이 달라지는 과정을 블로그에서 자세히 확인할 수 있습니다.</p>
            <a href="https://blog.naver.com/winnie2014/222917852576" target="_blank" rel="noreferrer">
              네이버 블로그에서 보기
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="story-visual" aria-hidden="true">
            <BookOpen />
            <span>READ, THINK, EXPLAIN</span>
            <strong>배운 것을<br />내 것으로</strong>
          </div>
        </div>
      </section>

      <section id="director" className="director section-block">
        <div className="section-shell director-grid">
          <div className="director-visual">
            <img
              src="/images/intro-poster.png"
              alt="고래영어 원장 소개 포스터"
              width={1414}
              height={2000}
              loading="lazy"
            />
          </div>
          <div className="director-copy">
            <p className="section-kicker">원장 소개</p>
            <h2>입시까지 경험한 시선으로<br />초등의 기본기를 설계합니다</h2>
            <p className="director-belief">
              “아이의 가능성을 끝까지 믿고,<br />성장할 때까지 끈질기게 돕습니다.”
            </p>
            <div className="credential-grid">
              {credentials.map((credential) => (
                <span key={credential}><Check aria-hidden="true" />{credential}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-block">
        <div className="section-shell contact-panel">
          <div className="contact-icon"><HeartHandshake aria-hidden="true" /></div>
          <p className="section-kicker">상담 안내</p>
          <h2>우리 아이는 어디에서<br className="mobile-only" /> 막히고 있을까요?</h2>
          <p>현재 학습 상태를 함께 살펴보고, 지금 필요한 과정을 안내합니다.</p>
          <div className="contact-actions">
            <a className="contact-action" href={phoneUrl}><Phone aria-hidden="true" />031-8016-5715</a>
            <a className="contact-action talk" href={naverTalkUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />네이버 톡 문의</a>
          </div>
          <div className="channel-links">
            <a href={naverPlaceUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />네이버 플레이스</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer"><Camera aria-hidden="true" />인스타그램</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <a className="brand" href="#top"><Logo /></a>
          <p>고래영어, 조민희영어 산운초 캠퍼스</p>
          <div className="footer-links">
            <a href={naverPlaceUrl} target="_blank" rel="noreferrer">플레이스</a>
            <a href={naverTalkUrl} target="_blank" rel="noreferrer">네이버 톡</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">인스타그램</a>
          </div>
        </div>
      </footer>

      <div className="mobile-contact" aria-label="빠른 상담">
        <a href={phoneUrl}><Phone aria-hidden="true" />전화</a>
        <a href={naverTalkUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />네이버 톡</a>
      </div>
    </main>
  );
}

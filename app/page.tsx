"use client"
import { useState, useEffect, useRef } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [bubbleCount, setBubbleCount] = useState(15)
  const [showModal, setShowModal] = useState(false)
  const [bubblesMultiplied, setBubblesMultiplied] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const fullText = "Pastor Cristóvão Carriço"
    let currentIndex = 0

    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typewriterInterval)
      }
    }, 100)

    return () => clearInterval(typewriterInterval)
  }, [])

  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      setBubbleCount((prev) => {
        const addRate = bubblesMultiplied ? 9 : 3 // 3x faster when multiplied
        const maxBubbles = bubblesMultiplied ? 150 : 50 // 3x more bubbles when multiplied

        if (prev < maxBubbles) {
          return prev + addRate
        }
        return prev
      })
    }, 1000)

    const multiplyTimer = setTimeout(() => {
      setBubblesMultiplied(true)
    }, 10000) // 10 seconds

    return () => {
      clearInterval(bubbleInterval)
      clearTimeout(multiplyTimer)
    }
  }, [bubblesMultiplied])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="fixed top-12 md:top-12 top-52 left-1/2 transform -translate-x-1/2 z-50 opacity-40 hover:opacity-90 transition-opacity">
        <p className="text-white text-sm font-light text-center tracking-wide">
          Clique play para abençoar sua experiência
        </p>
      </div>

      <audio
        ref={audioRef}
        autoPlay
        loop
        preload="auto"
        controls
        className="fixed top-20 md:top-20 top-60 left-1/2 transform -translate-x-1/2 z-50 opacity-30 hover:opacity-80 transition-opacity"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elevai-me%20%28Edit%29-zcqENCrZwUWcOoGPD7HokC6rZPagnE.wav"
          type="audio/wav"
        />
      </audio>

      <style jsx>{`
        .text-glow-jesus {
          position: relative;
          color: #FFD700;
          font-weight: 900;
          text-shadow: 
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            -3px 0 0 #000,
            3px 0 0 #000,
            0 -3px 0 #000,
            0 3px 0 #000;
        }
        
        .text-glow-elevai {
          position: relative;
          color: #00FFFF;
          font-weight: 900;
          text-shadow: 
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            -3px 0 0 #000,
            3px 0 0 #000,
            0 -3px 0 #000,
            0 3px 0 #000;
        }

        .text-glow-pastor {
          position: relative;
          color: #00FFAA;
          font-weight: 700;
          text-shadow: 
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000,
            0 0 10px rgba(0,255,170,0.8);
        }

        .glassmorphism-card {
          background: linear-gradient(135deg, 
            rgba(255, 215, 0, 0.3) 0%,
            rgba(255, 223, 0, 0.4) 25%,
            rgba(255, 215, 0, 0.5) 50%,
            rgba(255, 207, 0, 0.4) 75%,
            rgba(255, 215, 0, 0.3) 100%
          );
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 215, 0, 0.6);
          border-radius: 20px;
          box-shadow: 
            0 8px 32px rgba(255, 215, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
            0 0 40px rgba(255, 215, 0, 0.2);
          position: relative;
          overflow: hidden;
        }

        .glassmorphism-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, 
            rgba(255, 215, 0, 0.6),
            rgba(255, 223, 0, 0.7),
            rgba(255, 207, 0, 0.6),
            rgba(255, 215, 0, 0.6)
          );
          border-radius: 22px;
          z-index: -1;
          animation: cardGlow 3s ease-in-out infinite alternate;
        }

        .glassmorphism-article {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(25px);
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 25px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            inset 0 2px 0 rgba(255, 215, 0, 0.2),
            inset 0 -2px 0 rgba(0, 255, 255, 0.1),
            0 0 100px rgba(255, 215, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .card-lights {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
          border-radius: 20px;
        }

        .card-lights::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, 
            rgba(255, 255, 255, 0.1) 0%,
            rgba(0, 255, 255, 0.1) 25%,
            rgba(255, 215, 0, 0.1) 50%,
            transparent 70%
          );
          animation: rotateLights 8s linear infinite;
        }

        @keyframes cardGlow {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes rotateLights {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes jesusAnimation {
          0% { 
            transform: scale(0.3) translateY(300px); 
            opacity: 1; 
          }
          25% { 
            transform: scale(1) translateY(0px); 
            opacity: 1; 
          }
          100% { 
            transform: scale(1) translateY(0px); 
            opacity: 1; 
          }
        }
        
        @keyframes elevaiAnimation {
          0%, 30% { 
            opacity: 0; 
            transform: translateY(600px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0px); 
          }
        }

        @keyframes elevaiScaleAndLight {
          0% { 
            transform: translateY(0px) scale(1); 
          }
          100% { 
            transform: translateY(0px) scale(1.5); 
          }
        }

        .elevai-with-light {
          position: relative;
        }
        
        .elevai-with-light::before {
          content: '';
          position: absolute;
          top: -280px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
          border-top: 280px solid rgba(255, 255, 255, 0.6);
          opacity: 0;
          animation: triangularLight 3s ease-out forwards;
          animation-delay: 8s;
          filter: blur(8px);
          z-index: -1;
        }
        
        .elevai-with-light::after {
          content: '';
          position: absolute;
          top: -280px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-top: 280px solid rgba(255, 255, 255, 0.9);
          opacity: 0;
          animation: triangularLight 3s ease-out forwards;
          animation-delay: 8.5s;
          filter: blur(4px);
          z-index: -1;
        }
        
        @keyframes triangularLight {
          0% { 
            opacity: 0;
            transform: translateX(-50%) scaleY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-50%) scaleY(0.5);
          }
          100% { 
            opacity: 1;
            transform: translateX(-50%) scaleY(1);
          }
        }

        .sword-light {
          position: fixed;
          top: 0;
          left: 0;
          width: 4px;
          height: 100vh;
          background: linear-gradient(to bottom, 
            transparent 0%,
            rgba(255, 255, 255, 0.9) 20%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.9) 80%,
            transparent 100%
          );
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(255, 255, 255, 0.6),
            0 0 60px rgba(255, 255, 255, 0.4);
          z-index: 40;
          pointer-events: none;
        }

        .sword-light-1 {
          animation: swordStatic 3s ease-out forwards;
          animation-delay: 25s;
        }

        .sword-light-2 {
          animation: swordStatic2 3s ease-out forwards;
          animation-delay: 25s;
        }

        @keyframes swordStatic {
          0% { 
            transform: translateX(-20vw) translateY(480px) rotate(15deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          20% {
            transform: translateX(0vw) translateY(480px) rotate(15deg);
            opacity: 1;
          }
          100% { 
            transform: translateX(0vw) translateY(480px) rotate(15deg);
            opacity: 1;
          }
        }

        @keyframes swordStatic2 {
          0% { 
            transform: translateX(120vw) translateY(480px) rotate(-15deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          20% {
            transform: translateX(100vw) translateY(480px) rotate(-15deg);
            opacity: 1;
          }
          100% { 
            transform: translateX(100vw) translateY(480px) rotate(-15deg);
            opacity: 1;
          }
        }

        @keyframes cardAppear {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-delayed {
          opacity: 0;
          animation: cardAppear 1s ease-out forwards;
          animation-delay: 8s;
        }

        @keyframes typewriterCursor {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .sword-light-1 {
            animation: swordStaticMobile 3s ease-out forwards;
            animation-delay: 25s;
          }

          .sword-light-2 {
            animation: swordStaticMobile2 3s ease-out forwards;
            animation-delay: 25s;
          }

          @keyframes swordStaticMobile {
            0% { 
              transform: translateX(-10vw) translateY(420px) rotate(15deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            20% {
              transform: translateX(10vw) translateY(420px) rotate(15deg);
              opacity: 1;
            }
            100% { 
              transform: translateX(10vw) translateY(420px) rotate(15deg);
              opacity: 1;
            }
          }

          @keyframes swordStaticMobile2 {
            0% { 
              transform: translateX(110vw) translateY(420px) rotate(-15deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            20% {
              transform: translateX(90vw) translateY(420px) rotate(-15deg);
              opacity: 1;
            }
            100% { 
              transform: translateX(90vw) translateY(420px) rotate(-15deg);
              opacity: 1;
            }
          }
        }
      `}</style>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="glassmorphism-article w-full max-w-4xl max-h-[90vh] p-4 sm:p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors text-2xl font-bold z-10"
            >
              ×
            </button>
            <div className="overflow-y-auto max-h-[calc(90vh-4rem)] pr-2 sm:pr-4">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-6 text-center">
                Elevação Através da Fé: O Poder Transformador da Oração
              </h1>

              <h2 className="text-lg sm:text-xl text-yellow-200 mb-6 text-center">
                Da simplicidade do interior à liderança de 6 congregações: uma jornada de crescimento espiritual
              </h2>

              <div className="text-white space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="text-yellow-200 italic text-center mb-6">
                  <em>Episódio especial do Podcast ELEVAI.ME</em>
                  <br />
                  <strong>Por Cristine Carriço</strong>
                </p>

                <hr className="border-yellow-600/30 my-6" />

                <p>
                  Nascido em 1962 no Rio de Janeiro, em uma família humilde mas rica em fé, ele cresceu observando o
                  poder transformador da oração através dos olhos de sua mãe. Uma mulher semianalfabeta, mas com uma fé
                  gigantesca, que durante 30 anos intercedeu pela conversão do marido - e venceu.
                </p>

                <p>
                  "Minha mãe nunca começava o dia sem buscar a Deus por cada um dos filhos", relembra. "Ela criou oito
                  filhos vindos do interior do Rio de Janeiro, e sua perseverança em oração foi o que sustentou nossa
                  família."
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">Os Primeiros Passos</h3>

                <p>
                  Aos 6 anos, já caminhava três horas a pé, no escuro, para chegar à pequena igreja pentecostal. Aos 11
                  anos, aceitou Jesus na Igreja Batista, e aos 12, foi batizado. Participava do grupo "Embaixadores do
                  Rei", desenvolvendo suas primeiras habilidades de liderança cristã.
                </p>

                <p>
                  "Quando me apresentei no Exército aos 18 anos, eu já tinha disciplina e obediência - valores
                  aprendidos na igreja", conta. "Servi um ano e saí com honra ao mérito, melhor praça da companhia."
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">O Desvio</h3>

                <p>
                  O casamento aos 21 anos marcou o início de um período turbulento. Casado com uma jovem católica,
                  gradualmente se afastou da fé. Por mais de 10 anos, viveu longe da igreja, enfrentando brigas
                  constantes no casamento e situações que quase lhe custaram a vida.
                </p>

                <p>
                  "Quando você está desviado, você se torna um canal do inimigo", reflete. "O diabo tentou me matar
                  quase quatro vezes - acidentes de carro, envolvimento involuntário com a violência do bairro. Mas
                  Jesus não permitiu."
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">A Restauração</h3>

                <p>
                  Em 1993-94, algo mudou. Sua esposa Janete, inspirada pelas irmãs de oração do bairro, começou a buscar
                  a Deus intensamente. Sua mãe, mais uma vez, entrou em intercessão.
                </p>

                <p>
                  "Foi nesse período que Deus começou a me tratar", lembra. "Tive uma semana inteira de sonhos sobre o
                  fim do mundo, Jesus voltando, e eu ficando para trás porque não estava servindo como devia."
                </p>

                <p>
                  O processo não foi fácil. Deus permitiu que perdesse seus bens materiais - três automóveis, emprego,
                  segurança financeira. O que parecia destruição era reconstrução.
                </p>

                <p>
                  "Tinha três carros, perdi tudo. Ganhava dez salários mínimos, perdi o emprego. Mas ganhei a coisa mais
                  valiosa do universo: minha alma de volta", testemunha emocionado.
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">Tragédia e Chamado</h3>

                <p>
                  Em abril de 1996, sua mãe faleceu. Em julho, seu pai também partiu. Órfão aos 34 anos, enfrentou o
                  momento mais difícil, mas foi quando o chamado pastoral se tornou inegável.
                </p>

                <p>
                  "Perder os pais foi como perder um pedaço de mim. Mas tinha ao meu lado minha esposa e filhos, que já
                  buscavam ao Senhor. Era hora de assumir meu chamado."
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">Novo Nascimento</h3>

                <p>
                  Em 5 de julho de 1997, aos 35 anos, foi batizado em nome de Jesus na Igreja Casa de Oração Betel, onde
                  permanece há 29 anos. Deus lhe concedeu dons espirituais - profecia, discernimento, revelação e cura.
                </p>

                <p>
                  Em 10 de agosto de 1997, fundou o Ministério Casa de Oração Betel no Rio de Janeiro. Viu Deus
                  transformar sua família completa. Seus filhos se formaram, o mais velho vive no Canadá há oito anos, e
                  sua filha se tornou administradora.
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">O Teste Final</h3>

                <p>
                  Em 2022, após 42 anos de casamento, sua esposa Janete contraiu COVID-19. Após dois anos de luta, ela
                  faleceu em seus braços em 27 de julho.
                </p>

                <p>
                  "Não reclamei do Senhor. Todas as coisas cooperam para o bem daqueles que amam a Deus. Minha esposa
                  cumpriu sua missão e Deus a recolheu."
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">Hoje</h3>

                <p>
                  Aos 63 anos, é pastor dirigente responsável por congregações no Rio de Janeiro, Minas Gerais, Piauí e
                  Rio Grande do Sul - seis congregações ao todo. Consagrado pastor em janeiro de 2024, continua servindo
                  com a mesma paixão.
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">Lições</h3>

                <p>
                  <strong className="text-yellow-300">Sobre Perseverança</strong>: "Minha mãe orou 30 anos pela
                  conversão do meu pai. A oração perseverante sempre vence."
                </p>

                <p>
                  <strong className="text-yellow-300">Sobre o Chamado</strong>: "Quando você tem um chamado de Deus, não
                  lute contra ele. Escolhido você já é."
                </p>

                <p>
                  <strong className="text-yellow-300">Sobre as Provas</strong>: "Tudo compensa. Tenho vivido a palavra:
                  'Deleita-te no Senhor e Ele satisfará o desejo do teu coração.'"
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mt-6 mb-3">Mensagem Final</h3>

                <p>
                  "Nunca é tarde para voltar", é sua mensagem. "Se você está fora da comunhão, volta, porque Jesus está
                  voltando. Deixa Deus entrar no seu coração."
                </p>

                <p>
                  Sua história prova que não importa quão longe alguém se desvie, o amor de Deus é maior. De um jovem
                  desviado que quase perdeu tudo, Deus fez um pastor que impacta vidas em quatro estados brasileiros.
                </p>

                <p>
                  "Que Jesus cresça e que eu diminua. Que eu seja lâmpada e Ele seja o óleo que brilha", conclui com
                  humildade.
                </p>

                <p>
                  Uma vida que começou na simplicidade, passou pelo vale da sombra e floresceu em ministério frutífero -
                  provando que nas mãos de Deus, toda história pode ter um final redentor.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="diamondGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="20%" stopColor="rgba(240,248,255,0.95)" />
                <stop offset="40%" stopColor="rgba(220,220,255,0.8)" />
                <stop offset="70%" stopColor="rgba(200,200,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              <filter id="diamondFilter" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1" result="softGlow" />
                <feColorMatrix in="softGlow" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 0" result="brightGlow" />
                <feMerge>
                  <feMergeNode in="brightGlow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g>
              {Array.from({ length: bubbleCount }, (_, i) => {
                const startX = Math.random() * 1200
                const startY = 800 + Math.random() * 100
                const endX = startX + (-50 + Math.random() * 100)
                const endY = -150 - Math.random() * 200
                const baseDuration = bubblesMultiplied ? 4 : 8 // 2x faster when multiplied
                const duration = baseDuration + Math.random() * (bubblesMultiplied ? 6 : 12)
                const delay = Math.random() * 20
                const size = 1.5 + Math.random() * 3

                return (
                  <circle
                    key={`diamond-${i}`}
                    cx={startX}
                    cy={startY}
                    r={size}
                    fill="url(#diamondGlow)"
                    filter="url(#diamondFilter)"
                    opacity={0.6 + Math.random() * 0.4}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values={`0,0;${endX - startX},${endY - startY}`}
                      dur={`${duration}s`}
                      repeatCount="indefinite"
                      begin={`${delay}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.3;0.8;1;0.8;0.3;0"
                      dur={`${duration}s`}
                      repeatCount="indefinite"
                      begin={`${delay}s`}
                    />
                    <animate
                      attributeName="r"
                      values={`${size * 0.8};${size};${size * 1.2};${size};${size * 0.6}`}
                      dur={`${duration}s`}
                      repeatCount="indefinite"
                      begin={`${delay}s`}
                    />
                  </circle>
                )
              })}
            </g>

            <g>
              {/* JESUS text */}
              <foreignObject x="200" y="80" width="800" height="200" className="hidden lg:block">
                <div className="flex flex-col items-center justify-center h-full">
                  <span
                    className="text-glow-jesus text-[120px] leading-none"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      transform: "scale(0.3)",
                      transformOrigin: "center",
                      animation: "jesusAnimation 8s ease-out forwards",
                    }}
                  >
                    JESUS
                  </span>
                  <span
                    className="text-glow-jesus text-[24px] leading-none mt-2"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      opacity: 0,
                      animation: "jesusAnimation 8s ease-out forwards",
                      animationDelay: "2s",
                    }}
                  >
                    O ÚNICO DEUS
                  </span>
                </div>
              </foreignObject>

              <foreignObject x="100" y="40" width="1000" height="160" className="block lg:hidden">
                <div className="flex flex-col items-center justify-center h-full">
                  <span
                    className="text-glow-jesus text-[80px] leading-none"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      transform: "scale(0.3)",
                      transformOrigin: "center",
                      animation: "jesusAnimation 8s ease-out forwards",
                    }}
                  >
                    JESUS
                  </span>
                  <span
                    className="text-glow-jesus text-[16px] leading-none mt-1"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      opacity: 0,
                      animation: "jesusAnimation 8s ease-out forwards",
                      animationDelay: "2s",
                    }}
                  >
                    O ÚNICO DEUS
                  </span>
                </div>
              </foreignObject>

              {/* ELEVAI.ME text */}
              <foreignObject x="200" y="300" width="800" height="200" className="hidden lg:block">
                <div className="flex flex-col items-center justify-center h-full">
                  <span
                    className="text-glow-elevai elevai-with-light text-[80px] leading-none"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      opacity: 0,
                      transform: "translateY(600px)",
                      animation: "elevaiAnimation 6s ease-out forwards, elevaiScaleAndLight 2s ease-out forwards",
                      animationDelay: "2s, 7s",
                    }}
                  >
                    ELEVAI.ME
                  </span>
                  <span
                    className="text-glow-elevai text-[32px] leading-none mt-2"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      opacity: 0,
                      transform: "translateY(600px)",
                      animation: "elevaiAnimation 6s ease-out forwards",
                      animationDelay: "3s",
                    }}
                  >
                    PODCAST
                  </span>
                </div>
              </foreignObject>

              <foreignObject x="100" y="260" width="1000" height="140" className="block lg:hidden">
                <div className="flex flex-col items-center justify-center h-full">
                  <span
                    className="text-glow-elevai elevai-with-light text-[50px] leading-none"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      opacity: 0,
                      transform: "translateY(600px)",
                      animation: "elevaiAnimation 6s ease-out forwards, elevaiScaleAndLight 2s ease-out forwards",
                      animationDelay: "2s, 7s",
                    }}
                  >
                    ELEVAI.ME
                  </span>
                  <span
                    className="text-glow-elevai text-[20px] leading-none mt-1"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      opacity: 0,
                      transform: "translateY(600px)",
                      animation: "elevaiAnimation 6s ease-out forwards",
                      animationDelay: "3s",
                    }}
                  >
                    PODCAST
                  </span>
                </div>
              </foreignObject>

              {/* Pastor name */}
              <foreignObject x="200" y="560" width="800" height="80" className="hidden lg:block">
                <div className="flex items-center justify-center h-full">
                  <span
                    className="text-glow-pastor text-[28px] leading-none"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      letterSpacing: "0.15em",
                      animationDelay: "25s",
                    }}
                  >
                    {typewriterText}
                    <span
                      style={{
                        animation: "typewriterCursor 1s infinite",
                        marginLeft: "2px",
                      }}
                    >
                      |
                    </span>
                  </span>
                </div>
              </foreignObject>

              <foreignObject x="100" y="460" width="1000" height="60" className="block lg:hidden">
                <div className="flex items-center justify-center h-full">
                  <span
                    className="text-glow-pastor text-[18px] leading-none"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      letterSpacing: "0.15em",
                      animationDelay: "25s",
                    }}
                  >
                    {typewriterText}
                    <span
                      style={{
                        animation: "typewriterCursor 1s infinite",
                        marginLeft: "2px",
                      }}
                    >
                      |
                    </span>
                  </span>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>
      </div>

      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
        <div className="absolute top-4 left-4 z-20">
          <p className="text-white text-xs sm:text-sm font-medium leading-tight max-w-xs">
            <span className="text-cyan-300">O batismo é em nome de Jesus.</span>
            <br />
            <span className="text-yellow-300 font-semibold">Atos 2:38</span>
          </p>
        </div>

        <div className="absolute top-16 sm:top-20 left-2 sm:left-4 z-30 card-delayed hidden md:block">
          <div className="glassmorphism-card w-72 sm:w-80 h-36 sm:h-40 p-3 sm:p-4">
            <div className="card-lights"></div>
            <div className="relative z-10 h-full">
              <div className="mb-2">
                <h3
                  className="text-yellow-300 font-bold text-base sm:text-lg leading-tight drop-shadow-lg"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,215,0,0.6)",
                    background: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Podcast ELEVAI.ME
                </h3>
                <p
                  className="text-yellow-200 text-xs sm:text-sm font-medium"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(255,215,0,0.4)",
                    background: "linear-gradient(45deg, #FFD700, #FFDF00, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Testemunho & Transformação
                </p>
              </div>
              <iframe
                src="https://open.spotify.com/embed/episode/1D0UDCnLTjiCOpOMwRKZWZ?utm_source=generator&theme=0"
                width="100%"
                height="90"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{
                  borderRadius: "12px",
                  background: "rgba(0,0,0,0.3)",
                }}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="absolute top-16 sm:top-20 right-2 sm:right-4 z-30 card-delayed hidden md:block">
          <div
            className="glassmorphism-card w-72 sm:w-80 h-36 sm:h-40 p-3 sm:p-4 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3
                  className="font-bold text-base sm:text-lg mb-2 leading-tight"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 12px rgba(255,215,0,0.8)",
                    background: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
                  }}
                >
                  Elevação Através da Fé
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed mb-2"
                  style={{
                    textShadow: "1px 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(255,215,0,0.6)",
                    background: "linear-gradient(45deg, #FFD700, #FFDF00, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Da simplicidade do interior à liderança de 6 congregações
                </p>
                <p
                  className="text-xs italic font-medium"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8), 0 0 6px rgba(255,215,0,0.5)",
                    background: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Por Cristine Carriço
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-bold"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(255,215,0,0.6)",
                    background: "linear-gradient(45deg, #FFD700, #FFDF00, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Clique para ler
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center justify-center shadow-lg">
                  <span className="text-black text-xs sm:text-sm font-bold">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto">
          <a href="#" className="text-white hover:text-cyan-200 transition-colors text-sm lg:text-base font-medium">
            TESTEMUNHO
          </a>
          <a href="#" className="text-white hover:text-cyan-200 transition-colors text-sm lg:text-base font-medium">
            PALAVRA
          </a>
          <a href="#" className="text-white hover:text-cyan-200 transition-colors text-sm lg:text-base font-medium">
            FÉ
          </a>
          <a href="#" className="text-white hover:text-cyan-200 transition-colors text-sm lg:text-base font-medium">
            TRANSFORMAÇÃO
          </a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </header>

      <div className="sword-light sword-light-1"></div>
      <div className="sword-light sword-light-2"></div>

      <div className="block md:hidden fixed bottom-20 left-0 right-0 z-30 px-4 space-y-4 card-delayed">
        <div className="glassmorphism-card w-full h-32 p-3">
          <div className="card-lights"></div>
          <div className="relative z-10 h-full">
            <div className="mb-2">
              <h3
                className="text-yellow-300 font-bold text-sm leading-tight drop-shadow-lg"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,215,0,0.6)",
                  background: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Podcast ELEVAI.ME
              </h3>
              <p
                className="text-yellow-200 text-xs leading-tight drop-shadow-md"
                style={{
                  textShadow: "1px 1px 2px rgba(0,0,0,0.7), 0 0 8px rgba(255,215,0,0.4)",
                  background: "linear-gradient(45deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Testemunho & Transformação
              </p>
            </div>
          </div>
        </div>

        <div className="glassmorphism-card w-full h-32 p-3 cursor-pointer" onClick={() => setShowModal(true)}>
          <div className="card-lights"></div>
          <div className="relative z-10 h-full">
            <div className="mb-2">
              <h3
                className="text-yellow-300 font-bold text-sm leading-tight drop-shadow-lg"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,215,0,0.6)",
                  background: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Elevação Através da Fé
              </h3>
              <p
                className="text-yellow-200 text-xs leading-tight drop-shadow-md"
                style={{
                  textShadow: "1px 1px 2px rgba(0,0,0,0.7), 0 0 8px rgba(255,215,0,0.4)",
                  background: "linear-gradient(45deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Uma jornada de crescimento espiritual
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="text-yellow-300 text-xs font-medium drop-shadow-md"
                style={{
                  textShadow: "1px 1px 2px rgba(0,0,0,0.7), 0 0 6px rgba(255,215,0,0.4)",
                  background: "linear-gradient(45deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Por Cristine Carriço
              </span>
              <span className="text-black text-sm font-bold">→</span>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 z-20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#" className="text-white hover:text-cyan-200 transition-colors font-medium">
              TESTEMUNHO
            </a>
            <a href="#" className="text-white hover:text-cyan-200 transition-colors font-medium">
              PALAVRA
            </a>
            <a href="#" className="text-white hover:text-cyan-200 transition-colors font-medium">
              FÉ
            </a>
            <a href="#" className="text-white hover:text-cyan-200 transition-colors font-medium">
              TRANSFORMAÇÃO
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}

import { motion } from "motion/react";

export function FAQ() {
  const faqs = [
    {
      question: "O que é o Método Full?",
      answer: "É um protocolo que combina técnicas como fios de colágeno, ácido hialurônico, bioestimuladores, Botox e laser para rejuvenescer com naturalidade."
    },
    {
      question: "Para quem é indicado?",
      answer: "Para quem tem:\n• Rosto cansado ou flácido\n• Perda de volume\n• Contorno facial menos definido\n• Pele sem viço ou com rugas"
    },
    {
      question: "Como é feito?",
      answer: "Após avaliação, o médico escolhe as técnicas ideais para o seu caso. Cada rosto recebe um plano exclusivo."
    },
    {
      question: "Quanto tempo dura?",
      answer: "• Sessões de 40 min a 2h\n• Resultados imediatos e progressivos\n• Duração: 12 a 24 meses"
    },
    {
      question: "Dói? Tem recuperação?",
      answer: "Desconforto leve com anestesia local. Pode haver inchaço ou hematoma leve por 2 a 5 dias. Retorno rápido às atividades."
    },
    {
      question: "É seguro?",
      answer: "Sim, quando realizado por especialista. Riscos são raros (como hematomas ou assimetrias temporárias)."
    },
    {
      question: "Pode ser combinado com outros tratamentos?",
      answer: "Sim! Pode ser associado a peelings, skincare ou radiofrequência."
    },
    {
      question: "Quanto custa?",
      answer: "Varia conforme o plano e técnicas aplicadas. Consulte para orçamento personalizado."
    },
    {
      question: "Fica natural?",
      answer: "Sim. O objetivo é parecer descansado(a) e rejuvenescido(a), sem sinais de exagero."
    },
    {
      question: "Como começar?",
      answer: "Agende sua avaliação com o Dr. Douglas Jordão para um plano feito sob medida."
    }
  ];

  // Dividir FAQs em duas colunas
  const leftColumnItems = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnItems = faqs.filter((_, index) => index % 2 === 1);

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl mb-10 md:mb-12 tracking-[0.12em] uppercase text-center"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
        >
          PERGUNTAS FREQUENTES
        </h2>

        {/* MOBILE: uma coluna / DESKTOP: duas colunas independentes */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Coluna A */}
          <div className="flex-1 space-y-4">
            {leftColumnItems.map((faq, index) => (
              <motion.div
                key={index * 2}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <details className="group rounded-2xl bg-white p-6 shadow">
                  <summary className="cursor-pointer list-none flex justify-between items-center">
                    <span className="font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {faq.question}
                    </span>
                    <span className="transition-transform group-open:rotate-45 text-2xl">+</span>
                  </summary>
                  <div className="mt-3 space-y-2 text-[#1E1E1E]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i} className={line.startsWith('•') ? 'ml-4' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          {/* Coluna B */}
          <div className="flex-1 space-y-4">
            {rightColumnItems.map((faq, index) => (
              <motion.div
                key={index * 2 + 1}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <details className="group rounded-2xl bg-white p-6 shadow">
                  <summary className="cursor-pointer list-none flex justify-between items-center">
                    <span className="font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {faq.question}
                    </span>
                    <span className="transition-transform group-open:rotate-45 text-2xl">+</span>
                  </summary>
                  <div className="mt-3 space-y-2 text-[#1E1E1E]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i} className={line.startsWith('•') ? 'ml-4' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
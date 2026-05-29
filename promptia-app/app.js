const situations = [
  {
    id: "S01",
    title: "O Resumo de Última Hora",
    situation: "Você precisa resumir um artigo acadêmico denso de 30 páginas sobre Métodos Ágeis para conseguir estudar para a prova que acontece amanhã cedo.",
    ethics: "Não envie o artigo inteiro se ele tiver dados pessoais, conteúdo restrito ou material sem permissão. Prefira trechos necessários e cite a fonte."
  },
  {
    id: "S02",
    title: "O Currículo Estratégico",
    situation: "Você está montando seu currículo para uma vaga de estágio em Administração e precisa descrever suas habilidades de resolução de problemas de uma forma que chame a atenção dos recrutadores.",
    ethics: "A IA pode ajudar na redação, mas não deve inventar experiências ou competências que a pessoa não possui."
  },
  {
    id: "S03",
    title: "A Automação do Estagiário",
    situation: "Você precisa escrever um e-mail formal, mas direto, para o seu chefe, explicando que conseguiu automatizar a extração de dados de uma planilha do Excel chata usando um script em Python.",
    ethics: "Evite expor dados internos da empresa no prompt. Descreva o problema sem anexar informações sigilosas."
  },
  {
    id: "S04",
    title: "Equilibrando os Pratos",
    situation: "Você precisa de ajuda para montar um cronograma semanal que encaixe as aulas matutinas, o estágio à tarde, e ainda deixe tempo livre para seus projetos pessoais sem virar um workaholic.",
    ethics: "Rotinas pessoais podem revelar dados sensíveis. Compartilhe apenas o necessário para a tarefa."
  },
  {
    id: "S05",
    title: "O Atraso da Encomenda",
    situation: "Você comprou um produto na Shopee que está atrasado há mais de duas semanas. Você precisa gerar uma mensagem para o suporte ao cliente exigindo uma atualização clara ou o reembolso imediato.",
    ethics: "Não inclua CPF, endereço completo, telefone ou número de pedido real em ferramentas de IA sem necessidade e segurança."
  },
  {
    id: "S06",
    title: "A Logística do Transporte",
    situation: "Você perdeu a van/ônibus e precisa que a IA calcule as melhores rotas alternativas combinando ônibus e metrô para chegar no trabalho/faculdade o mais rápido possível.",
    ethics: "Localização exata é dado sensível. Use pontos de referência aproximados quando possível."
  },
  {
    id: "S07",
    title: "O Treino Expresso",
    situation: "Você tem apenas 45 minutos livres no dia e precisa de um treino de academia focado exclusivamente em levantamento de peso, hipertrofia, que seja intenso e rápido.",
    ethics: "Orientações de treino não substituem profissionais de saúde. Lesões, doenças e limitações físicas exigem cuidado."
  },
  {
    id: "S08",
    title: "O Guia do Maracanã",
    situation: "Você quer organizar um roteiro para ir com os amigos assistir a um jogo de futebol no Maracanã no fim de semana, incluindo opções de onde comer algo bom e barato nos arredores antes da partida.",
    ethics: "A IA pode sugerir lugares desatualizados. Em uso real, informações de preço, segurança e horário precisam de confirmação."
  },
  {
    id: "S09",
    title: "O Jantar de Aniversário",
    situation: "Você precisa planejar um jantar de comemoração com foco em pizza e massas que tenha um clima legal, mas que caiba no orçamento de um estudante universitário.",
    ethics: "Preferências alimentares e restrições podem envolver saúde ou religião. Trate essas informações com respeito e necessidade."
  },
  {
    id: "S10",
    title: "O Músico de Quarto",
    situation: "Você decidiu aprender a tocar violão sozinho e quer tocar a sua música favorita. Você precisa que a IA simplifique as cifras para acordes de iniciante e explique o ritmo de forma fácil.",
    ethics: "Evite pedir reprodução integral de letras ou materiais protegidos. Peça orientação, técnica ou resumo."
  }
];

const promptTemplates = [
  {
    suffix: "P1",
    level: "Nível 1",
    quality: "Vago",
    concepts: ["tarefa"],
    lesson: "Prompt vago costuma gerar resposta genérica, porque falta contexto, público, objetivo e formato de saída."
  },
  {
    suffix: "P2",
    level: "Nível 2",
    quality: "Intermediário",
    concepts: ["contexto", "tarefa", "tom"],
    lesson: "Adicionar contexto e tom reduz ambiguidades e aproxima a resposta do uso real."
  },
  {
    suffix: "P3",
    level: "Nível 3",
    quality: "Completo",
    concepts: ["persona", "contexto", "tarefa", "formato", "restrições", "ética"],
    lesson: "Um prompt forte define papel, objetivo, restrições e formato, sem pedir exposição desnecessária de dados."
  }
];

const promptsBySituation = {
  S01: [
    ["Resume esse artigo.", "O texto apresenta um resumo geral sobre Métodos Ágeis, citando Scrum, Kanban e entregas iterativas. A resposta é superficial e não separa conceitos importantes para estudar."],
    ["Resuma um artigo acadêmico de 30 páginas sobre Métodos Ágeis para eu revisar antes da prova.", "Métodos Ágeis são abordagens de gestão que priorizam adaptação, colaboração e entregas frequentes. O resumo destaca Scrum, Kanban, papéis, eventos e benefícios para projetos."],
    ["Você é um monitor universitário. Faça um resumo de estudo sobre um artigo de Métodos Ágeis para uma prova amanhã. Organize em tópicos: ideia central, Scrum, Kanban, vantagens, limitações e 5 perguntas de revisão.", "Resumo de estudo: Métodos Ágeis priorizam ciclos curtos, feedback constante e colaboração. Scrum organiza o trabalho em sprints, papéis e cerimônias. Kanban visualiza fluxo e limita WIP. Vantagens: adaptação e transparência. Limitações: exige disciplina e comunicação. Perguntas de revisão incluídas."]
  ],
  S02: [
    ["Melhora meu currículo.", "Use verbos fortes, destaque experiências e deixe o currículo mais profissional. A orientação é ampla e não gera uma descrição pronta."],
    ["Escreva uma frase para currículo de estágio em Administração destacando resolução de problemas.", "Habilidade em analisar situações, organizar informações e propor soluções práticas para melhorar processos administrativos."],
    ["Você é recrutador de estágio em Administração. Crie 3 versões curtas para currículo, em primeira pessoa profissional, destacando resolução de problemas, organização e aprendizado rápido, sem inventar experiências.", "1. Tenho facilidade para identificar problemas, organizar informações e buscar soluções práticas. 2. Sou organizado, aprendo rápido e gosto de transformar desafios em melhorias de rotina. 3. Desenvolvo soluções com responsabilidade, colaboração e atenção aos detalhes."]
  ],
  S03: [
    ["Faz um e-mail pro chefe.", "Olá, fiz uma automação em Python para a planilha. Isso deve ajudar no trabalho. Obrigado."],
    ["Escreva um e-mail formal para meu chefe dizendo que automatizei a extração de dados de uma planilha Excel com Python.", "Assunto: Automação da extração de dados. Olá, gostaria de informar que desenvolvi um script em Python para automatizar a extração de dados da planilha Excel, reduzindo etapas manuais e agilizando a rotina."],
    ["Você é um estagiário comunicando uma melhoria. Escreva um e-mail formal, direto e breve para o chefe explicando que um script em Python automatizou a extração de dados do Excel, reduziu retrabalho e pode ser demonstrado. Não cite dados internos.", "Assunto: Automação da extração de dados no Excel. Olá, [Nome]. Desenvolvi um script em Python que automatiza a extração de dados da planilha, reduzindo retrabalho e tempo gasto em etapas manuais. Posso demonstrar o funcionamento e ajustar conforme a necessidade da equipe. Atenciosamente."]
  ],
  S04: [
    ["Faz uma rotina.", "Monte uma agenda com estudos, trabalho e descanso. Tente equilibrar as atividades e evite excesso de tarefas."],
    ["Monte um cronograma semanal com aulas de manhã, estágio à tarde e tempo livre para projetos pessoais.", "Segunda a sexta: aulas pela manhã, estágio à tarde, uma hora para projetos à noite em dias alternados e blocos de descanso. Fim de semana reservado para revisão leve e lazer."],
    ["Você é um mentor de produtividade saudável. Crie um cronograma semanal realista para estudante com aulas matutinas e estágio à tarde. Inclua projetos pessoais, descanso, refeições e limite de trabalho noturno. Formato: tabela por período.", "Tabela sugerida: manhã para aulas, tarde para estágio, início da noite para refeição e descanso, dois ou três blocos semanais de projetos pessoais de 60 a 90 minutos, revisão curta aos sábados e domingo livre. Evite trabalho após 21h."]
  ],
  S05: [
    ["Mensagem produto atrasado.", "Meu produto atrasou. Quero saber quando vai chegar ou quero reembolso."],
    ["Escreva uma mensagem para suporte da Shopee dizendo que meu produto está atrasado há duas semanas e pedindo atualização ou reembolso.", "Olá. Meu pedido está atrasado há mais de duas semanas. Solicito uma atualização clara sobre a entrega ou, se não houver previsão, o reembolso imediato."],
    ["Você é um consumidor escrevendo ao suporte. Crie uma mensagem firme, educada e objetiva sobre uma encomenda atrasada há mais de duas semanas. Peça prazo atualizado ou reembolso. Use campos genéricos para número do pedido e não inclua dados pessoais.", "Olá. O pedido [NÚMERO DO PEDIDO] está atrasado há mais de duas semanas. Solicito uma previsão atualizada e objetiva de entrega. Caso não seja possível informar um prazo confiável, peço o reembolso imediato. Aguardo retorno."]
  ],
  S06: [
    ["Qual rota eu pego?", "Procure uma rota alternativa usando ônibus ou metrô. Saia o quanto antes e verifique o trânsito."],
    ["Sugira rotas alternativas de ônibus e metrô para chegar mais rápido à faculdade depois de perder a van.", "Considere ir até a estação de metrô mais próxima, combinar uma linha expressa de ônibus até um terminal e comparar tempo de espera. Escolha a opção com menor troca."],
    ["Você é um planejador de mobilidade urbana. Sem usar endereço exato, monte um método para comparar 3 rotas alternativas combinando ônibus e metrô. Formato: critérios, tabela e recomendação final.", "Critérios: tempo total, número de baldeações, custo, segurança do trajeto e previsibilidade. Tabela: Rota A metrô + ônibus; Rota B ônibus direto; Rota C ônibus até terminal + metrô. Recomendação: escolha a rota com menor tempo previsível e menos trocas em horário de pico."]
  ],
  S07: [
    ["Treino hipertrofia rápido.", "Faça exercícios de musculação intensos, como agachamento, supino e remada. Descanse pouco para caber em 45 minutos."],
    ["Monte um treino de musculação de 45 minutos para hipertrofia, intenso e rápido.", "Aquecimento de 5 minutos, 4 exercícios compostos com 3 séries cada, descanso de 60 a 90 segundos e finalização curta. Exemplo: agachamento, supino, remada e desenvolvimento."],
    ["Você é um treinador explicando com cautela. Crie um treino de hipertrofia de 45 minutos para pessoa sem lesão informada. Inclua aquecimento, séries, repetições, descanso e aviso de segurança. Não substitua avaliação profissional.", "Aquecimento: 5 minutos. Treino: agachamento 3x8-10, supino 3x8-10, remada 3x10, desenvolvimento 2x10, levantamento terra romeno 2x10. Descanso: 60-90 segundos. Pare se houver dor e ajuste cargas com orientação profissional."]
  ],
  S08: [
    ["Roteiro Maracanã.", "Vá ao Maracanã, coma algo por perto e chegue cedo para evitar filas."],
    ["Monte um roteiro barato para ir ao Maracanã com amigos e comer antes do jogo.", "Cheguem com antecedência, combinem ponto de encontro perto do estádio, escolham lanches simples nos arredores e reservem tempo para entrada e revista."],
    ["Você é um guia local prudente. Crie um roteiro econômico para universitários irem ao Maracanã no fim de semana. Inclua chegada, alimentação barata, margem de segurança e lembrete para confirmar horários e preços.", "Roteiro: encontrar o grupo 2h30 antes, chegar de transporte público, comer em lanchonetes simples nos arredores, entrar no estádio com antecedência e combinar ponto de saída. Confirmar horário do jogo, funcionamento dos locais, preço e recomendações de segurança no dia."]
  ],
  S09: [
    ["Jantar aniversário barato.", "Peça pizza ou massa em um restaurante barato e divida a conta com os amigos."],
    ["Planeje um jantar de aniversário com pizza e massas que caiba no orçamento de universitários.", "Escolha uma pizzaria ou cantina com rodízio/promos, defina teto por pessoa, confirme quantidade de convidados e combine divisão da conta antes."],
    ["Você é organizador de eventos estudantis. Planeje um jantar de aniversário econômico com pizza e massas. Entregue checklist, orçamento por pessoa, opções para restrições alimentares e mensagem de convite.", "Checklist: lista de convidados, teto de gasto, reserva, opções vegetarianas e sem lactose, transporte e divisão da conta. Orçamento: definir valor máximo por pessoa e pesquisar combos. Convite: pessoal, curto e com confirmação até uma data."]
  ],
  S10: [
    ["Simplifica cifra.", "Use acordes fáceis e toque devagar. Procure uma versão simplificada da música."],
    ["Explique como simplificar cifras de uma música favorita para tocar violão como iniciante.", "Troque acordes com pestana por versões abertas, reduza a batida para baixo-baixo-cima e pratique em andamento lento antes de acelerar."],
    ["Você é professor de violão para iniciantes. Explique um método para simplificar uma música sem reproduzir letra protegida: troca de acordes difíceis, ritmo básico, treino por partes e cuidados com direitos autorais.", "Método: identifique acordes difíceis, substitua por equivalentes simples quando possível, pratique ritmo básico em 4 tempos, divida verso e refrão em blocos e aumente a velocidade aos poucos. Evite copiar letras integrais; foque na técnica."]
  ]
};

const glossary = [
  ["Prompt", "Instrução enviada para a IA.", "Exemplo: 'Escreva um e-mail formal pedindo estágio'."],
  ["Contexto", "Informações que ajudam a IA a entender a situação.", "Exemplo: público, objetivo, prazo, lugar e restrições."],
  ["Persona", "Papel que a IA deve simular para responder melhor.", "Exemplo: 'Você é um recrutador' ou 'Você é um professor'."],
  ["Tarefa", "A ação principal esperada da IA.", "Exemplo: resumir, comparar, revisar, planejar ou escrever."],
  ["Formato", "Como a resposta deve ser entregue.", "Exemplo: tabela, lista, e-mail, checklist ou roteiro."],
  ["Tom", "Estilo de linguagem esperado.", "Exemplo: formal, direto, acolhedor, técnico ou simples."],
  ["Restrição", "Limite que guia a resposta.", "Exemplo: 'em até 100 palavras' ou 'sem dados pessoais'."],
  ["Viés", "Tendência injusta ou distorcida na resposta.", "Exemplo: supor gênero, renda ou região sem base."],
  ["Dados sensíveis", "Informações que exigem cuidado especial.", "Exemplo: saúde, localização, documentos, religião e biometria."],
  ["LGPD", "Lei brasileira que orienta proteção de dados pessoais.", "No jogo, o jogador aprende a pedir ajuda sem expor dados desnecessários."],
  ["Alucinação", "Resposta confiante, mas incorreta ou inventada.", "Exemplo: indicar preço ou horário sem confirmação."],
  ["Few-shot", "Dar exemplos para a IA seguir um padrão.", "Exemplo: mostrar uma resposta boa antes de pedir outra."]
];

const cards = situations.flatMap((situation) =>
  promptTemplates.map((template, index) => {
    const promptData = promptsBySituation[situation.id][index];
    return {
      code: `${situation.id}-${template.suffix}`,
      situationId: situation.id,
      title: situation.title,
      situation: situation.situation,
      prompt: promptData[0],
      response: promptData[1],
      level: template.level,
      quality: template.quality,
      concepts: template.concepts,
      lesson: template.lesson,
      ethics: situation.ethics
    };
  })
);

const byCode = new Map(cards.map((card) => [card.code, card]));

const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    views.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.view).classList.add("active");
  });
});

const quickCodes = document.getElementById("quickCodes");
cards.forEach((card) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "codeButton";
  button.textContent = card.code;
  button.addEventListener("click", () => reveal(card.code));
  quickCodes.appendChild(button);
});

document.getElementById("lookupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  reveal(document.getElementById("cardCode").value);
});

function reveal(rawCode) {
  const code = rawCode.trim().toUpperCase();
  const card = byCode.get(code);
  if (!card) {
    alert("Código não encontrado. Tente algo como S01-P3.");
    return;
  }
  document.getElementById("cardCode").value = card.code;
  document.getElementById("resultPanel").hidden = false;
  document.getElementById("emptyState").hidden = true;
  document.getElementById("resultCode").textContent = card.code;
  document.getElementById("resultTitle").textContent = card.title;
  document.getElementById("resultLevel").textContent = `${card.level} - ${card.quality}`;
  document.getElementById("resultPrompt").textContent = card.prompt;
  document.getElementById("resultResponse").textContent = card.response;
  document.getElementById("resultLesson").textContent = card.lesson;
  document.getElementById("resultEthics").textContent = card.ethics;
  const chips = document.getElementById("promptChips");
  chips.innerHTML = "";
  card.concepts.forEach((concept) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = concept;
    chips.appendChild(chip);
  });
}

const glossaryGrid = document.getElementById("glossaryGrid");
glossary.forEach(([term, definition, example]) => {
  const article = document.createElement("article");
  article.className = "glossaryCard";
  article.innerHTML = `<h3>${term}</h3><p>${definition}</p><p><strong>No jogo:</strong> ${example}</p>`;
  glossaryGrid.appendChild(article);
});

const cardTable = document.getElementById("cardTable");
function renderTable(filter = "") {
  const query = filter.trim().toLowerCase();
  cardTable.innerHTML = "";
  cards
    .filter((card) => {
      const text = `${card.code} ${card.title} ${card.quality} ${card.concepts.join(" ")}`.toLowerCase();
      return text.includes(query);
    })
    .forEach((card) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td><button class="codeButton" type="button">${card.code}</button></td><td>${card.title}</td><td>${card.quality}</td><td>${card.concepts.join(", ")}</td>`;
      row.querySelector("button").addEventListener("click", () => {
        document.querySelector('[data-view="scanner"]').click();
        reveal(card.code);
      });
      cardTable.appendChild(row);
    });
}
renderTable();
document.getElementById("cardSearch").addEventListener("input", (event) => renderTable(event.target.value));

const scoreFields = ["hits", "tricks", "allHit", "noneHit"].map((id) => document.getElementById(id));
scoreFields.forEach((field) => field.addEventListener("input", calculateScore));
function calculateScore() {
  const hits = Number(document.getElementById("hits").value || 0);
  const tricks = Number(document.getElementById("tricks").value || 0);
  const allHit = document.getElementById("allHit").value === "yes";
  const noneHit = document.getElementById("noneHit").value === "yes";
  const player = hits * 2 + tricks;
  let narrator = hits > 0 ? 3 : 0;
  if (allHit) narrator = 0;
  if (noneHit) narrator = -1;
  document.getElementById("scoreResult").textContent = `Jogador: ${player} pontos | Narrador: ${narrator} pontos`;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {
    document.getElementById("offlineStatus").textContent = "Modo offline via arquivo local";
  });
}

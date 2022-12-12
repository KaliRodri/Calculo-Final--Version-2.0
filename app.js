const express = require("express");

const app = express();

const path = require("path");

const hbs = require("hbs");

const port = process.env.PORT || 3000;

hbs.registerPartials(path.join(__dirname, "/templates/partials"));

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "/templates/views"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    text: "Quer saber quanto precisa tirar na final? Escolha seu curso abaixo",
    footertext: "©2021 CalculoFinal. Todos os direitos reservados.",
  });
});

app.get("/biology", (req, res) => {
  res.render("biology", {
    text: "Agora escolha sua matéria:",
    footertext: "©2021 CalculoFinal. Todos os direitos reservados.",
    courseTitle: "Ciências Biologicas",
    subjects1: [
      "Estudo Evolutivo das Geosferas",
      "Fundamentos de Química",
      "Tópicos de Física",
      "Biologia Celular e Molecular",
      "Epistemologia da Ciência",
      "Lab. de Leitura e Produção de Texto",
      "Prática Pedagógica I",
      "Seminário Temático I",
    ],

    subjects2: [
      "Biofísica",
      "Bioquímica",
      "Biologia dos Protoctistas ",
      "Biologia Vegetal I ",
      "Lab. de Leitura e Produção de Imagens ",
      "Prática Pedagógica II",
      "Genética",
      "Seminário Temático II",
    ],

    subjects3: [
      "Genética",
      "Biologia dos Invertebrados I",
      "Biologia do Desenvolvimento",
      "Anatomia e Organografia Vegetal",
      "Prática Pedagógica III",
      "Seminário Temático III",
    ],

    subjects4: [
      "Biologia dos Invertebrados II",
      "Sistemática Vegetal",
      "Genética e Evolução",
      "Bioestatística",
      "Biologia dos Fungos",
      "Prática Pedagógica IV",
      "Seminário Temático IV",
    ],
    subjects5: [
      "Biologia de Cordados",
      "Microbiologia",
      "Fisiologia Vegetal",
      "Ecologia Geral",
      "Prática Pedagógica e Estágio Supervisionado I",
    ],
    subjects6: [
      "Fisiologia Animal Comparada",
      "Anatomia dos Vertebrados",
      "Bioética",
      "Projeto de Pesquisa I",
      "Prática Pedagógica e Estágio Supervisionado II",
    ],
    subjects7: [
      "Paleontologia",
      "Ecologia e Meio Ambiente",
      "Projeto de Pesquisa II",
      "Estágio Supervisionado I",
    ],
    subjects8: ["Monografia", "Estágio Supervisionado II"],
  });
});

app.get("/edphysical", (req, res) => {
  res.render("physicaleducation", {
    text: "Agora escolha sua matéria:",
    footertext: "©2021 CalculoFinal. Todos os direitos reservados.",
    courseTitle: "Educacao Fisica",
    subjects1: [
      "Metodologia do Trabalho Científico I",
      "Didática",
      "Fundamentos Anátomo-biológicos",
      "Fundamentos Sócio-antropológicos",
      "Conhecimento e Metodologia do Jogo",
      "Oficina I Atividade Física ",
    ],
    subjects2: [
      "Fundamentos Histórico-Filosóficos",
      "História da Educação Física e Esporte",
      "Atividade Física e Saúde Coletiva",
      "Ordenamento Legal e Políticas Públicas em Educação Física, Esporte e Lazer",
      "Conhecimento e Metodologia do Esporte I",
      "Oficina II Biodança",
    ],
    subjects3: [
      "Metodologia do Trabalho Científico II",
      "Medidas e Avaliação em Atividade Física",
      "Psicologia da Educação",
      "Corpo e Movimento para Pessoas com Deficiência",
      "Conhecimento e Metodologia do Esporte II",
      "Oficina III Futebol",
    ],
    subjects4: [
      "Lazer e Meio Ambiente",
      "Fisiologia do Exercício",
      "Conhecimento e Metodologia da Dança",
      "Conhecimento e Metodologia da Ginástica hidroginástica",
      "Oficina IV Atletismo",
    ],
    subjects5: [
      "Políticas de Educação e Gestão Escolar",
      "Primeiros Socorros",
      "Conhecimento e Metodologia da Natação",
      "Conhecimento e Metodologia da Capoeira",
      "Estágio Curricular I",
      "LIBRAS - Língua Brasileira de Sinais",
    ],
    subjects6: [
      "Mídia, Esporte e Lazer",
      "Educação e Ludicidade",
      "Conhecimento e Metodologia do Treinamento Corporal Esportivo",
      "Conhecimento e Metodologia da Luta",
      "Estágio Curricular II",
      "Conhecimento e Metodologia da Cultura Afro-brasileira e Indígena",
    ],
    subjects7: [
      "Projeto de Pesquisa",
      "Atividade Física para Grupos Especiais",
      "Oficina V (Corpo e Cultura)",
      "Estágio Curricular III",
    ],
    subjects8: ["TCC Monografia", "Estágio Curricular IV"],
  });
});

app.get("/engineering", (req, res) => {
  res.render("engineering", {
    text: "Agora escolha sua matéria:",
    footertext: "©2021 CalculoFinal. Todos os direitos reservados.",
    courseTitle: "Eng. Sanitaria e Ambiental",
    subjects1: [
      "Geometria Analítica",
      "Cálculo 1",
      "Química Geral",
      "Int. à Eng. Sanitária e Ambiental",
      "Leitura e Produção de Texto",
      "Biologia Geral",
      "Desenho Técnico",
    ],
    subjects2: [
      "Álgebra Linar",
      "Cálculo II",
      "Química Orgânica",
      "Geologia e Solos",
      "Ecologia Geral",
      "Biologia Sanitária e Ambiental",
      "Geometria Descritiva",
    ],
    subjects3: [
      "Física I",
      "Cálculo III",
      "Bioquímica",
      "Topografia",
      "Ecossistemas Aquáticos e Terrestres e suas Interfaces",
      "Poluição e Impacto Ambiental",
      "Computação",
    ],
    subjects4: [
      "Fisica II",
      "Tópicos Sociológicos e Antropológicos",
      "Mecânica dos Solos",
      "Cartografia e Geoprocessamento",
      "Climatologia",
      "Métodos Numéricos e Computacionais",
      "Legislação Ambiental e Sanitária",
    ],
    subjects5: [
      "Física III",
      "Microbiologia Ambiental",
      "Química Ambiental",
      "Estatística Básica",
      "Hidrologia e Solo",
      "Análise Ambiental",
    ],
    subjects6: [
      "Física Ambiental",
      "Fenômenos de Transporte",
      "Hidráulica I",
      "Resistência dos Materiais",
      "Materiais e Técnicas de Construção",
      "Administração Básica",
      "Controle de Poluição das Águas",
    ],
    subjects7: [
      "Biotecnologia e Meio Ambiente",
      "Educação Ambiental",
      "Hidráulica II",
      "Saúde Pública e Ambiental",
      "Planejamento e Gestão Ambiental",
      "Economia e Meio Ambiente",
    ],
    subjects8: [
      "Mecânica dos Fluídos",
      "Projeto de Pesquisa",
      "Obras Hidráulicas",
      "Sistema de Abastecimento e Tratamento de Água",
      "Resíduos Sólidos e Gestão",
      "Controle e Recuperação de Áreas Degradadas",
    ],
    subjects9: [
      "Estágio Supervisionado I",
      "Orientação de TCC",
      "Recursos Naturais e Manejo",
      "Drenagem e Controle de Enchentes",
      "Sistema de Esgotamento",
    ],
    subjects10: [
      "Estágio Supervisionado II",
      "Controle de Poluição Atmosférica",
      "Trabalho de Conclusão de Curso",
    ],
  });
});

app.get("/math", (req, res) => {
  res.render("math", {
    text: "Agora escolha sua matéria:",
    footertext: "©2021 CalculoFinal. Todos os direitos reservados.",
    courseTitle: "Matemática",
    subjects1: [
      "Matemática I",
      "Lógica",
      "Desenho Geométrico I",
      "Leitura e Produção Textual I",
      "Metodologia da Pesquisa I",
      "Informática I",
      "Psicologia I",
      "Tópicos Sócio-Antropológico-Filosófico - TSF",
      "Políticas Educacionais I",
      "Seminário Temático I (Linguagem e Representação Matemática)",
    ],
    subjects2: [
      "Geometria Plana",
      "Geometria Analítica I",
      "Geometria Descritiva I",
      "Matemática II",
      "Leitura e Produção Textual II",
      "Metodologia da Pesquisa II",
      "Psicologia II",
      "Análise e Reflexão do Processo Ensino da Matemática - ARPE",
      "Políticas Educacionais II",
      "Seminário Temático II (Representação Geométrica I)",
    ],
    subjects3: [
      "Geometria Espacial",
      "Geometria Analítica II",
      "Matemática III",
      "Leitura e Produção Textual III",
      "Metodologia da Pesquisa III",
      "Laboratório do Ensino da Matemática I",
      "Didática",
      "Introdução a Língua Brasileira de Sinais",
      "Seminário Temático III (Representação Geométrica II)",
    ],
    subjects4: [
      "Cálculo I",
      "Estatística I",
      "Algebra Linear I",
      "Leitura e Produção Textual IV",
      "Informática II",
      "Laboratório do Ensino da Matemática II",
      "Didática da Matemática",
      "História e Cultura Afro-brasileira e Indígena",
      "Seminário Temático IV (Pesquisa em Educação Matemática)",
    ],
    subjects5: [
      "Cálculo II",
      "Física I",
      "Algebra Linear II",
      "Estrutura Algébrica I",
      "Leitura e Produção Textual V",
      "Softwares Matemáticos",
      "Estágio I",
    ],
    subjects6: [
      "Cálculo III",
      "Física II",
      "Estrutura Algébrica II",
      "Trabalho de Conclusão de Curso I",
      "História da Matemática",
      "Estágio II",
    ],
    subjects7: [
      "Cálculo IV",
      "Física III",
      "Estrutura Algébrica III",
      "Trabalho de Conclusão de Curso II",
      "Estágio III",
    ],
    subjects8: [
      "Análise Real",
      "Trabalho de Conclusão de Curso III",
      "Estágio IV",
    ],
  });
});

app.get("/informatics", (req, res) => {
  res.render("informatics", {
    text: "Agora escolha sua matéria:",
    footertext: "©2021 CalculoFinal. Todos os direitos reservados.",
    courseTitle: "Sistemas de Informação",
    subjects1: [
      "Estudos Sócio Filosóficos",
      "Comunicação e Expressão",
      "Lógica e Matemática Discreta",
      "Teoria Geral da Administração",
      "Algoritmos",
      "Fundamentos da Informática",
    ],
    subjects2: [
      "Metodologia da Pesquisa",
      "Sistemas de Informação",
      "Cálculo I",
      "Aplicações da Informática",
      "Linguagem de Programação I",
      "Arquitetura de Computadores",
    ],
    subjects3: [
      "OSM",
      "Ética e Direito em Informática",
      "Cálculo II",
      "Introdução a Estrutura de Dados",
      "Linguagem de Programação II",
      "Sistemas Operacionais",
    ],
    subjects4: [
      "Probabilidade e Estatística",
      "Contabilidade",
      "Metodologia de Desenvolvimento de Sistemas I",
      "Estrutura de Dados",
      "Linguagem de Programação III",
      "Introdução a Redes de Computadores",
      "Tópicos Especiais em Sistemas de Informação",
    ],
    subjects5: [
      "Teoria dos Grafos",
      "Psicologia Aplicada as Organizações",
      "Metodologia de Desenvolvimento de Sistemas II",
      "Introdução a Banco de Dados",
      "Interface Homem-Máquina",
      "Redes de Computadores",
    ],
    subjects6: [
      "Economia",
      "Auditoria e Segurança de Sistemas",
      "Engenharia de Software",
      "Banco de Dados",
      "Laboratório de Aplicações Web",
      "Sistemas Distribuídos",
      "Estágio Supervisionado I",
    ],
    subjects7: [
      "Núcleo de Demandas Específicas",
      "Inteligência Artificial",
      "Sistemas Multimídia",
      "Planejamento Estratégico em TI",
      "Gerência de Projeto de Sistemas",
      "Projeto de Pesquisa em Informática",
      "Estágio Supervisionado I",
    ],
    subjects8: [
      "Núcleo de Demandas Específicas",
      "Trabalho de Conclusão de Curso",
      "Empreendedorismo",
      "Tópicos Especiais em Engenharia de Software",
      "Gestão de Pessoas",
      "Gestão do Conhecimento",
      "Estágio Supervisionado III",
    ],
  });
});

app.get("/calculo", (req, res) => {
  res.render("calculo", {
    text: "Agora digite suas notas e veja o resultado!",
    footertext: "©2021 CalculoFinal. Todos os direitos reservados.",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    text: "Eu sou Ian Rodrigo, discente do curso de Sistemas de Informação - Campus II, e estudante de Desenvolvimento Web, criei este projeto para suprir a necessidade de saber quanto precisamos tirar nas finais, sem precisar recorrer a fórmula complexa de cálculo ou procurar por tabelas, espero que esta aplicação auxilie outros estudantes como ao corpo docente. Você pode entrar em contato comigo pelas minhas redes sociais:",
    footertext: "©2021 CalculoFinal. Todos os direitos reservados.",
  });
});

app.listen(port, (req, res) => {
  console.log("Server is running on port 3000");
});

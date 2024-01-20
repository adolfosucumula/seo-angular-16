
export interface JobsList{
  id: number;
  hashKey: string;
  category: string;
  company: string;
  location: string;
  phone: string;
  email: string;
  url: string;
  shiftAndHours: string;
  period: string;
  companyDescription: string;
  tasks: string;
  jobType: string;
  whyWorkAt: string;
  requirements: string;
  obs: string;
  salary: string;
  createdAt: string;
  updatedAt: string;
  isActive: string;
  numberOfCandidates: number;
  benefits: string;
  path: string
}

export const job_contents: JobsList[] = [
    {
      id: 1,
      hashKey: 'c6e366c753a38a8bb560255c1cf1c7ced023901c',
      category: "Vaga de Emprego de Pizzaiolo - Distrito do Porto",
      company: "Pizzaria dona Joana",
      location: "Porto-Portugal",
      phone: "+351 933443566",
      email: "donajoana.pizzas@gmail.com",
      url: "",
      shiftAndHours: "Período diário",
      period: "Período Integral",
      companyDescription: "Pizzaria Dona Joana. Somo um restaurante de refrência no Porto, constituido por uma Equipa multifuncional, dinâmica e que vela muito pela proactividade de individual e colectiva.",
      tasks: "Preparar o espaço de trabalho; Higienização do espaço de trabalho; preparação do material; Elaboração de planos de necessidades; Confeição das Pizzas;",
      jobType: "Remote",
      whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;",
      requirements: "Motivação;Facilidade de comunicação – perfil comercial;Vontade de aprender;Sentido empreendedor;Com ou sem experiência no ramo imobiliário",
      obs: "",
      salary: "750 por mes",
      createdAt: "20-13-2023",
      updatedAt: "20-13-2023",
      isActive: "",
      numberOfCandidates: 3,
      benefits: "Subsidio de férias",
      path: '/career/vaga-de-emprego-pizzaria-matosinhos/'
    },
    {
      id: 2,
      hashKey: '96805bf8f71bf6a5a0ce515831dbe18ca31d8339',
      category: "Inventory Operator - Distrito do Porto",
      company: "CONSTANT GROUP",
      location: "Porto-Portugal",
      phone: "",
      email: "recrutamentooporto@grupoconstant.com",
      url: "",
      shiftAndHours: "Período diário; 8 horas diário",
      period: "Integral period and Night time period",
      companyDescription: "CONSTANT GROUP, a multinational company specializing in Human Resource Management, through its Temporary Work business area, recruits for its prestigious client company an Inventory Operator (M/F) for the Port area",
      tasks: 'In these training sessions we will get to know the candidates, show the dynamics of the work and present the Campaign;' +
      "Selected Candidates will undergo a 1H training session; In this session you will teach everything you need to make sure you are ready to get started; " +
      "Training time will be paid for as long as they are approved and appear on Inventory",
      jobType: "Remote",
      whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
      requirements: "Motivation; Full and immediate availability; Dynamism and proactiveness.",
      obs: "Paid traning if approved;",
      salary: "Base salary",
      createdAt: "",
      updatedAt: "",
      isActive: "",
      numberOfCandidates: 3,
      benefits: "Trabalho presencial",
      path: "/career/vaga-operador-de-inventarios-porto/"
    },
    {
      id: 3,
      hashKey: 'e2522aa8b724bd649e6dd6a8d293ee3ecccbbce4',
      category: "Vaga de Ajudante de Cozinha - Distrito do Porto",
      company: "Restaurante em Hospital de São João",
      location: "Porto-Portugal",
      phone: "",
      email: "recrutamentoaveiro@trianglerrhh.pt",
      url: "",
      shiftAndHours: "Período diário; 8 horas diário (8am-4h30pm/7am-3h30pm/11h30am-8h30pm)",
      period: "Período integral, horário rotativo",
      companyDescription: "Somos uma empresa que atua no ramo da Restauração, temos vários restaurantes espalhados pelo pais. Atuamos neste ramo a mais de 6 anos.",
      tasks: "Precisamos pessoal para completar a nossa equipe de trabalhadores",
      jobType: "Presencial",
      whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
      requirements: "Motivation; Full and immediate availability; Dynamism and proactiveness.",
      obs: "Paid traning if approved;",
      salary: "Base salary",
      createdAt: "20-01-2024",
      updatedAt: "20-01-2024",
      isActive: "1",
      numberOfCandidates: 3,
      benefits: "Trabalho presencial",
      path: "/career/vaga-para-ajudante-de-cozinha-porto/"
    },
    {
      id: 4,
      hashKey: 'e2522aa8b724bd649e6dd6a8d293ee3ecccbbce4',
      category: "Vaga de Empregada de Limpeza e Copeira/o - Matozinhos",
      company: "Restaurante em Matozinhos",
      location: "Porto-Portugal",
      phone: "+351 968 395 333",
      email: "",
      url: "",
      shiftAndHours: "Período diário; 8 horas diário ",
      period: "Período integral, horário rotativo",
      companyDescription: "Somos uma empresa que atua no ramo da Restauração, temos vários restaurantes espalhados pelo pais. Atuamos neste ramo a mais de 6 anos.",
      tasks: "Precisamos pessoal para completar a nossa equipe de trabalhadores",
      jobType: "Presencial",
      whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
      requirements: "Motivation; Full and immediate availability; Dynamism and proactiveness.",
      obs: "Paid traning if approved;",
      salary: "Base salary",
      createdAt: "20-01-2024",
      updatedAt: "20-01-2024",
      isActive: "1",
      numberOfCandidates: 3,
      benefits: "Trabalho presencial",
      path: "/career/vaga-para-ajudante-de-cozinha-porto/"
    },

  ];



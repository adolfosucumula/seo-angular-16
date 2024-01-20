import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

const metaTags = [
  { name: 'findjob:site',
  content:"Job career; Make your career in iledmd; Find a job in iledmd; find your job career in iledmd; Make a career with the iledmd; iluminate your future with iledmd;"
  + "Iluminate your life getting a job in iledmd;  getting my dream career; getting my job of dreams;"
  }
];

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { generateHashDigest } from 'src/app/global/generate-hash-keay';
import { job_contents } from '../../service/job-contents';
import { job_categories } from '../../service/job-categories';
import { LoadFromContentfulService } from '../../service/load-from-contentful.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent {
  title = 'Job Career';
  description = "find your job career in iledmd; Make a career with the iledmd; iluminate your future with iledmd;"
  + "Iluminate your life getting a job in iledmd;  getting my dream career; getting my job of dreams;"

  jobs = job_contents;
  links = job_categories;
  jobSelected: any = [];
  showCategories = false;
  showCities = false;
  showJobsFound = false;
  isUnchanged = false;

  categoryToSearch: string = '';
  cityToSearch: string = '';



  constructor(private router: Router,
    private contentfulService: LoadFromContentfulService,
    private titleService: Title,
    private metaService: Meta
    ){
      this.setSEOData(this.title, this.description)
  }

  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.addTags( metaTags , true);
  }

  ngOnInit(): void{
    generateHashDigest("vaga-para-empregada-de-copeiro-e-limpeza-porto").then((digest)=> {
      console.log(digest)
    })

    for (let index = this.jobs.length; index >= 0; index--) {
      const element = this.jobs[index-1];

      if(element.id){
        this.jobSelected = element
        break;
      }
    }

  }

  applyCareer(){
    this.router.navigate(['/career/apply-now/'])
  }

  openJob(jobSelected: any){
    this.jobSelected = jobSelected
    alert(jobSelected)
  }

  getPeriods(period: string){
    const array = period.split(";")
    return array;
  }

  onKeyUpCategory(e: any){
    if(e.target.value){
      this.showCategories = true
      this.categoryToSearch = e.target.value;
    }else{
      this.showCategories = false
      this.categoryToSearch = '';
    }
  }

  onKeyUpCity(e: any){
    if(e.target.value){
      this.showCities = true
      this.cityToSearch = e.target.value;
    }else{
      this.showCities = false
      this.cityToSearch = '';
    }
  }

  selectCategory(value: string | any){

    this.showCategories = false
    this.categoryToSearch = '';
  }

  selectCity(value: string | any){

    this.showCities = false
    this.cityToSearch = '';
  }




}


export interface JobsList{
  id: number;
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
}

export interface Links {
  id: number,
  category: string,
  company: string,
  location: string,
  period: string,
  path: string
}


const elements: JobsList[] = [
  {
    id: 1,
    category: "Consultor Imobiliário - Distrito do Porto",
    company: "SAFTI",
    location: "Porto-Portugal",
    phone: "+351 933443506",
    email: "email.com",
    url: "",
    shiftAndHours: "Período diário",
    period: "Período Integral",
    companyDescription: "A SAFTI é uma empresa imobiliária de rápido crescimento, fundada em França e que conta com 6.000 consultores na Europa. A SAFTI está a reinventar o mercado do imobiliário, através de um plano de alta remuneração sem concorrência no mercado, baseado em comissões que poderão aumentar de 70% a 100%.",
    tasks: "Prospeção de clientes e imóveis a transacionar; Divulgação, promoção e visita dos imóveis em carteira; Negociação com clientes; Acompanhamento dos clientes durante todo o processo de venda; Possibilidade de desenvolver uma equipa comercial;",
    jobType: "Remote",
    whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
    requirements: "Motivação;Facilidade de comunicação – perfil comercial;Vontade de aprender;Sentido empreendedor;Com ou sem experiência no ramo imobiliário",
    obs: "",
    salary: "750 por mes",
    createdAt: "20-13-2023",
    updatedAt: "20-13-2023",
    isActive: "",
    numberOfCandidates: 3,
    benefits: "Trabalho remoto",
  },
  {
    id: 2,
    category: "Consultor Imobiliário - Distrito do Porto",
    company: "SAFTI 002",
    location: "Porto-Portugal",
    phone: "+351 933443506",
    email: "email.com",
    url: "",
    shiftAndHours: "Período diário",
    period: "Período Integral",
    companyDescription: "A SAFTI é uma empresa imobiliária de rápido crescimento, fundada em França e que conta com 6.000 consultores na Europa. A SAFTI está a reinventar o mercado do imobiliário, através de um plano de alta remuneração sem concorrência no mercado, baseado em comissões que poderão aumentar de 70% a 100%.",
    tasks: "Prospeção de clientes e imóveis a transacionar; Divulgação, promoção e visita dos imóveis em carteira; Negociação com clientes; Acompanhamento dos clientes durante todo o processo de venda; Possibilidade de desenvolver uma equipa comercial;",
    jobType: "Remote",
    whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
    requirements: "Motivação;Facilidade de comunicação – perfil comercial;Vontade de aprender;Sentido empreendedor;Com ou sem experiência no ramo imobiliário",
    obs: "",
    salary: "850 por mes",
    createdAt: "",
    updatedAt: "",
    isActive: "",
    numberOfCandidates: 3,
    benefits: "Trabalho remoto"
  },
  {
    id: 3,
    category: "Consultor Imobiliário - Distrito do Porto",
    company: "SAFTI 003",
    location: "Porto-Portugal",
    phone: "+351 933443506",
    email: "email.com",
    url: "",
    shiftAndHours: "Período diário",
    period: "Período Integral; Part-time",
    companyDescription: "A SAFTI é uma empresa imobiliária de rápido crescimento, fundada em França e que conta com 6.000 consultores na Europa. A SAFTI está a reinventar o mercado do imobiliário, através de um plano de alta remuneração sem concorrência no mercado, baseado em comissões que poderão aumentar de 70% a 100%.",
    tasks: "Prospeção de clientes e imóveis a transacionar; Divulgação, promoção e visita dos imóveis em carteira; Negociação com clientes; Acompanhamento dos clientes durante todo o processo de venda; Possibilidade de desenvolver uma equipa comercial;",
    jobType: "Remote",
    whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
    requirements: "Motivação;Facilidade de comunicação – perfil comercial;Vontade de aprender;Sentido empreendedor;Com ou sem experiência no ramo imobiliário",
    obs: "",
    salary: "950",
    createdAt: "",
    updatedAt: "",
    isActive: "",
    numberOfCandidates: 3,
    benefits: "Trabalho remoto"
  },
  {
    id: 4,
    category: "Consultor Imobiliário - Distrito do Porto",
    company: "SAFTI 005",
    location: "Porto-Portugal",
    phone: "+351 933443506",
    email: "email.com",
    url: "",
    shiftAndHours: "Período diário",
    period: "Período Integral; Part-time; Full-time",
    companyDescription: "A SAFTI é uma empresa imobiliária de rápido crescimento, fundada em França e que conta com 6.000 consultores na Europa. A SAFTI está a reinventar o mercado do imobiliário, através de um plano de alta remuneração sem concorrência no mercado, baseado em comissões que poderão aumentar de 70% a 100%.",
    tasks: "Prospeção de clientes e imóveis a transacionar; Divulgação, promoção e visita dos imóveis em carteira; Negociação com clientes; Acompanhamento dos clientes durante todo o processo de venda; Possibilidade de desenvolver uma equipa comercial;",
    jobType: "Remote",
    whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
    requirements: "Motivação;Facilidade de comunicação – perfil comercial;Vontade de aprender;Sentido empreendedor;Com ou sem experiência no ramo imobiliário",
    obs: "",
    salary: "1500 mensal",
    createdAt: "",
    updatedAt: "",
    isActive: "",
    numberOfCandidates: 3,
    benefits: "Trabalho remoto"
  },
  {
    id: 5,
    category: "Consultor Imobiliário - Distrito do Porto",
    company: "SAFTI 005",
    location: "Porto-Portugal",
    phone: "+351 933443506",
    email: "email.com",
    url: "",
    shiftAndHours: "Período diário",
    period: "Período Integral; Regime Hibrido",
    companyDescription: "A SAFTI é uma empresa imobiliária de rápido crescimento, fundada em França e que conta com 6.000 consultores na Europa. A SAFTI está a reinventar o mercado do imobiliário, através de um plano de alta remuneração sem concorrência no mercado, baseado em comissões que poderão aumentar de 70% a 100%.",
    tasks: "Prospeção de clientes e imóveis a transacionar; Divulgação, promoção e visita dos imóveis em carteira; Negociação com clientes; Acompanhamento dos clientes durante todo o processo de venda; Possibilidade de desenvolver uma equipa comercial;",
    jobType: "Remote",
    whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
    requirements: "Motivação;Facilidade de comunicação – perfil comercial;Vontade de aprender;Sentido empreendedor;Com ou sem experiência no ramo imobiliário",
    obs: "",
    salary: "950",
    createdAt: "",
    updatedAt: "",
    isActive: "",
    numberOfCandidates: 3,
    benefits: "Trabalho remoto"
  },
  {
    id: 6,
    category: "Consultor Imobiliário - Distrito do Porto",
    company: "SAFTI 005",
    location: "Porto-Portugal",
    phone: "+351 933443506",
    email: "email.com",
    url: "https://iledmd.pt",
    shiftAndHours: "Período diário",
    period: "Período Integral",
    companyDescription: "A SAFTI é uma empresa imobiliária de rápido crescimento, fundada em França e que conta com 6.000 consultores na Europa. A SAFTI está a reinventar o mercado do imobiliário, através de um plano de alta remuneração sem concorrência no mercado, baseado em comissões que poderão aumentar de 70% a 100%.",
    tasks: "Prospeção de clientes e imóveis a transacionar; Divulgação, promoção e visita dos imóveis em carteira; Negociação com clientes; Acompanhamento dos clientes durante todo o processo de venda; Possibilidade de desenvolver uma equipa comercial",
    jobType: "Remote",
    whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
    requirements: "Motivação;Facilidade de comunicação – perfil comercial;Vontade de aprender;Sentido empreendedor;Com ou sem experiência no ramo imobiliário",
    obs: "",
    salary: "950 por semana",
    createdAt: "",
    updatedAt: "",
    isActive: "",
    numberOfCandidates: 3,
    benefits: "Trabalho remoto"
  },
  {
    id: 7,
    category: "Consultor Imobiliário - Distrito do Porto",
    company: "SAFTI 005",
    location: "Porto-Portugal",
    phone: "+351 933443506",
    email: "email.com",
    url: "",
    shiftAndHours: "Período diário",
    period: "Período Integral",
    companyDescription: "A SAFTI é uma empresa imobiliária de rápido crescimento, fundada em França e que conta com 6.000 consultores na Europa. A SAFTI está a reinventar o mercado do imobiliário, através de um plano de alta remuneração sem concorrência no mercado, baseado em comissões que poderão aumentar de 70% a 100%.",
    tasks: "Prospeção de clientes e imóveis a transacionar; Divulgação, promoção e visita dos imóveis em carteira; Negociação com clientes; Acompanhamento dos clientes durante todo o processo de venda; Possibilidade de desenvolver uma equipa comercial;",
    jobType: "Remote",
    whyWorkAt: "Formação de excelência;Acompanhamento por uma equipa de profissionais;Ferramentas inovadoras, com a última tecnologia digital;Remuneração atrativa e sem igual no mercado – de 70% até 100% da comissão de agência;Total flexibilidade de horário;Liberdade para escolher a zona de atuação;Plano de carreira, com a possibilidade de desenvolver uma equipa de consultores imobiliários",
    requirements: "Motivação;Facilidade de comunicação – perfil comercial;Vontade de aprender;Sentido empreendedor;Com ou sem experiência no ramo imobiliário",
    obs: "",
    salary: "1200",
    createdAt: "",
    updatedAt: "",
    isActive: "",
    numberOfCandidates: 3,
    benefits: "Trabalho remoto"
  }
];

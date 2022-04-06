import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  isDark:boolean=true;
  news:any[] = [
    {Title:"Festividades de año nuevo limitadas por ómicron",
      Content:"La rápida difusión de la variante Omicron está frenando las celebraciones de Año Nuevo en todo el mundo. Si bien todavía se están produciendo algunos eventos más pequeños, será un comienzo sombrío para otro año de la pandemia de coronavirus.",
      CategoryId:1,
    Url:"https://cnnespanol.cnn.com/video/omicron-avance-celebraciones-ano-nuevo-2022-contagios-cafe/"},
      {Title:"Exclusiva: sospechoso de Waukesha había dicho que padecía trastorno mental",
      Content:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
      CategoryId:3,
      Url:"https://cnnespanol.cnn.com/2021/11/24/exclusiva-sospechoso-waukesha-trastornos-mentales-pensamientos-suicidas-trax/"},
      {Title:"El Programa Mundial de Alimentos de la ONU presenta plan a Elon Musk",
      Content:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
      CategoryId:1,
      Url:"https://cnnespanol.cnn.com/2021/11/18/onu-elon-musk-plan-hambruna-mundial-trax/"},
      {Title:"¿Pagarías US$ 19.000 por noche en esta isla?",
      Content:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
      CategoryId:2,
      Url:"https://cnnespanol.cnn.com/video/isla-moskito-richard-branson-islas-virgenes-fernando-del-rincon-conclusiones-cnne/"},
      {Title:"Figueres: Estamos a tiempo de construir un planeta sano",
      Content:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
      CategoryId:3,
      Url:"https://cnnespanol.cnn.com/video/christiana-figueres-informe-onu-agosto-2021-cambio-climatico-redaccion-mexico/"},
      {Title:"Funcionarios del FBI viajarán a Haití",
      Content:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
      CategoryId:1,
      Url:"https://cnnespanol.cnn.com/2021/07/09/funcionarios-fbi-seguridad-nacional-viajaran-haiti-trax/"},
      {Title:"Biden habla con Putin sobre presos de EE.UU.",
      Content:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
      CategoryId:3,
      Url:"https://cnnespanol.cnn.com/2021/06/17/biden-putin-estadounidenses-paul-whelan-trevor-reed-trax/"},
      {Title:"¿Qué anunciará Apple en la WWDC que comienza este lunes?",
      Content:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
      CategoryId:1,
      Url:"https://cnnespanol.cnn.com/video/apple-wwdc-tecnologia-desarrolladores-anuncios-guillermo-arduino-clix/"},
      {Title:"5 cosas: 'hongo negro' se propaga en la India",
      Content:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
      CategoryId:2,
      Url:"https://cnnespanol.cnn.com/video/5-cosas-italia-investigacion-accidente-teleferico-india-hongo-negro-epidemia-myanmar-aung-san-suu-kyi-tribunal-japon-vacunacion-masiva-eeuu-violencia-tiroteos-masivos-vo-cafe-cnn/"},]

  filteredNews = this.news;
  constructor(){}

  ngOnInit(): void {
  }

  FilterNewsByCategory(categoryId:number):void{
    this.filteredNews = this.news;
    this.filteredNews = this.filteredNews.filter(n => n.CategoryId == categoryId);
  }

  BW(){
    this.isDark = !this.isDark;
  }
  
}

 interface Inews{
  Title:string,
  Content:string,
  CategoryId:number
}

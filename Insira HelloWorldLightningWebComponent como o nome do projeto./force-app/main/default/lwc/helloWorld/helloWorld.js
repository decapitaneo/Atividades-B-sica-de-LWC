import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  empresa = {
    empresa: 'X',
    cnpj: '000000000000',
    endereco: 'Rua das Laranjeiras, 1000'
  }

  produto = {
    produto: 'Barbie',
    descricao: 'Boneca linda',
    preco: 299.00
  }

  promocao = {
    promocao: 'X',
    oferta1: '10%',
    oferta2 : '20%'

  }
  visible = true;

  trocarDiv(){
    this.visible = !this.visible;

  }

  imagem1 = 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg';
 

  desaparecer = true;
  

  trocarImagem(){
  
    if(this.desaparecer == true){
      this.imagem1 = 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg';
      this.desaparecer = false;
    }else{
      this.imagem1 = 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg';
      this.desaparecer = true;
    }
  } 
}
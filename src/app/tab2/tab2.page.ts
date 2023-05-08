import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public pokemon_ObjList: any = []

  constructor( public toastController: ToastController) {
    this.pokemon_ObjList = [
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png', nome: 'Snivy', tipo: 'Grama', capturado: 'Pokémon Inicial'},
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png', nome: 'Oshawott', tipo: 'Água', capturado: 'Pokémon Inicial'},
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png', nome: 'Tepig', tipo: 'Fogo', capturado: 'Pokémon Inicial'},
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/519.png', nome: 'Pidove', tipo: 'Voador e Normal', capturado: 'Rota 1'},
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/509.png', nome: 'Purrloin', tipo: 'Sombrio', capturado: 'Rota 2'},
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/506.png', nome: 'Lillipup', tipo: 'Normal', capturado: 'Rota 1'},
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/511.png', nome: 'Pansage', tipo: 'Grama', capturado: 'Cidade de Striaton'},
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/515.png', nome: 'Panpour', tipo: 'Água', capturado: 'Cidade de Striaton'},
      {image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png', nome: 'Pansear', tipo: 'Fogo', capturado: 'Cidade de Striaton'},
      

    ]
    }

  openSite(){
    window.open("https://www.pokemon.com/br/pokedex/snivy")
  }

  async like(){
    const toast = await this.toastController.create({
      message: 'Pokémon Favoritado!',
      duration: 2000
    });
    toast.present();
  }



}

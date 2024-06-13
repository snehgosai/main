// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.sass']
// })
// export class CardComponent implements OnInit {
//   cards: Array<{ title: string, content: string, imageUrl: string }>;

//   constructor() {
//     this.cards = [
//       {
//         title: 'Card 1',
//         content: 'This is the content of card 1.',
//         imageUrl: 'https://via.placeholder.com/150'
//       },
//       {
//         title: 'Card 2',
//         content: 'This is the content of card 2.',
//         imageUrl: 'https://via.placeholder.com/150'
//       },
//       {
//         title: 'Card 3',
//         content: 'This is the content of card 3.',
//         imageUrl: 'https://via.placeholder.com/150'
//       }
//     ];
//   }

//   ngOnInit(): void {
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  cards = [
    {
      title: 'Card 1',
      content: 'This is the content of card 1',
      imageUrl: 'https://via.placeholder.com/150/8e44ad/ffffff?text=Card+1',
      color: 'lightblue'
    },
    {
      title: 'Card 2',
      content: 'This is the content of card 2',
      imageUrl: 'https://via.placeholder.com/150/27ae60/ffffff?text=Card+2',
      color: 'lightgreen'
    },
    {
      title: 'Card 3',
      content: 'This is the content of card 3',
      imageUrl: 'https://via.placeholder.com/150/e74c3c/ffffff?text=Card+3',
      color: 'lightcoral'
    },
    {
      title: 'Card 4',
      content: 'This is the content of card 4',
      imageUrl: 'https://via.placeholder.com/150/f1c40f/ffffff?text=Card+4',
      color: 'lightgoldenrodyellow'
    },
  ];
}

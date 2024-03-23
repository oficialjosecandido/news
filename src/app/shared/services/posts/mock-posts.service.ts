import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class MockPostsService {

  constructor() { }

  // change any by Post model or interface
  getPosts(): Observable<Post[]> {
    // Define your mock data here
    const mockPosts: any[] = [
      { id: 1, title: 'Certificados de Aforro: O que fazer quando morre o titular da conta', content: 'Content of Post 1', excerpt: 'Herdeiros podem reclamar o dinheiro investido em Certificados de Aforro. Há passos a cumprir. Estado encaixa milhões com contas não reclamadas      ', image: 'https://i0.wp.com/tejomag.com/wp-content/uploads/2024/03/moedas.jpg?resize=1536%2C1024&ssl=1'},
      { id: 2, title: 'Ainda não é desta. BCE mantém taxas de juro acima dos 4%', content: 'Content of Post 2' , excerpt: 'Mesmo com a inflação a abrandar, o BCE é mais cauteloso e mantém principal taxa nos 4,5%. Há porta aberta para mexidas no verão.      ', image: 'https://i0.wp.com/tejomag.com/wp-content/uploads/2024/03/juros_relogio.jpg?resize=1536%2C1024&ssl=1'},
      { id: 3, title: 'Este suplemento de baixo custo pode ser o segredo para melhorar a memória em 3 meses', content: 'Content of Post 3',  excerpt: 'Um novo estudo chegou a conclusões promissoras. Um simples suplemento pode ser o segredo para melhorar a memória !', image: 'https://i0.wp.com/tejomag.com/wp-content/uploads/2024/03/suplemento.jpg?resize=1536%2C1024&ssl=1' }
      // Add more mock posts as needed
    ];

    return of(mockPosts);
  }
}

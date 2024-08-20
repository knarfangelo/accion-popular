import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INoticias } from './DB/INoticias';
import { noticiasJSON } from './DB/noticiasJSON';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: ` 
    <header>
    <h1>Últimas Noticias de Acción Popular</h1>
      <main>
        @for (item of items; track $index) {
          <article>
            <img [src]="item.img" alt="">
            <p>{{item.date}}</p>
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
          </article>
        }
      </main>
    </header>
  `,
  styleUrl: './noticias.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasComponent { 

  items: INoticias[] = noticiasJSON;

}

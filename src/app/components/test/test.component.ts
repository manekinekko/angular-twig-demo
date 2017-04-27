import { Component, OnInit } from '@angular/core';
import { Twig } from '../../../../twig-decorator';

@Twig({
  template: `
  <section>
    {% if title %}
      <h2>{{ title }}</h2>
    {% endif %}

    {{ content_1 }}

    {% if content_2 %}
      {{ content_2 }}
    {% endif %}
  </section>
  `,
	context: {
		title: 'Angular2 ❤ Twig',
		content_1: 'content 1',
		content_2: 'content 2'
	},
	selector: '#block-content',
})

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

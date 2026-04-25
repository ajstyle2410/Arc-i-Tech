import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BRAND } from '../../util/brand.util';

@Component({
  selector: 'app-brand-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-name.component.html',
  styleUrls: ['./brand-name.component.css']
})
export class BrandNameComponent {
  /** Extra CSS class(es) applied to the root span — use to control font-size/weight */
  @Input() className = '';

  readonly brand = BRAND;
}

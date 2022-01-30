import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponentComponent implements OnInit {

  @Input() dialogClass = '';
	@Input() hideHeader = false;
	@Input() hideFooter = false;
	@Input() containerClick = true;
	public visible = false;
	public visibleAnimate = false;

  constructor() { }

  ngOnInit(): void {
  }

  public show(): void {
		this.visible = true;
		setTimeout(() => this.visibleAnimate = true, 100);
		document.querySelector('body')!.classList.add('modal-open');
	}

	public hide(): void {
		this.visibleAnimate = false;
		setTimeout(() => this.visible = false, 300);
		document.querySelector('body')!.classList.remove('modal-open');
	}

	public onContainerClicked(event: MouseEvent): void {
		if ((event.target as HTMLElement).classList.contains('modal') && this.containerClick === true) {
			this.hide();
		}
	}

}

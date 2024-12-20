import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  private mousemoveListener: (() => void) | null = null;
  private mouseClickListener: (() => void) | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    document.body.classList.remove('stopped');
    this.setupMouseListener();
  }

  ngOnDestroy(): void {
    document.body.classList.add('stopped');
    this.removeMouseListener();
  }

  setupMouseListener(): void {
    const tablet = this.el.nativeElement.querySelector('.personality-tablet');
    if (!tablet) return;

    const prompt = tablet.querySelector('.prompt-hover') as HTMLElement;
    const promptText: string = prompt.innerHTML;

    this.mousemoveListener = this.renderer.listen(
      tablet,
      'mousemove',
      (event) => {
        const tabletRect = tablet.getBoundingClientRect();
        const mouseX = event.clientX - tabletRect.left;
        const mouseY = event.clientY - tabletRect.top;
        tablet
          .querySelectorAll('.keyword')
          .forEach((keywordEl: HTMLElement) => {
            const keywordRect = keywordEl.getBoundingClientRect();
            const keywordX = keywordRect.left - tabletRect.left;
            const keywordY = keywordRect.top - tabletRect.top;

            const distance = Math.sqrt(
              (mouseX - (keywordX + keywordRect.width / 2)) ** 2 +
                (mouseY - (keywordY + keywordRect.height / 2)) ** 2
            );

            if (distance <= 80) {
              this.renderer.addClass(keywordEl, 'highlighted');
            } else {
              this.renderer.removeClass(keywordEl, 'highlighted');
            }
          });
        if (
          mouseX >= 10 &&
          mouseX <= tabletRect.width - 10 &&
          mouseY >= 10 &&
          mouseY <= tabletRect.height - 10
        ) {
          prompt.innerHTML = '';
          const cursor = document.createElement('div');
          cursor.classList.add('cursor');
          cursor.style.left = mouseX + 'px';
          cursor.style.top = mouseY + 'px';
          cursor.style.content = '';
          cursor.style.position = 'absolute';
          cursor.style.width = '20px';
          cursor.style.height = '20px';
          cursor.style.backgroundColor = '#00f5a0';
          cursor.style.borderRadius = '50%';
          cursor.style.transform = 'translate(-50%, -50%)';
          cursor.style.pointerEvents = 'none';
          cursor.style.zIndex = '2';
          cursor.style.animation = 'pulse 1s infinite';

          tablet.style.cursor = 'none';

          prompt.appendChild(cursor);
          // this.renderer.addClass(prompt, 'hidden');
        } else {
          prompt.innerHTML = promptText;
          // this.renderer.removeClass(prompt, 'hidden');
        }
      }
    );

    // this.mouseClickListener = this.renderer.listen(
    //   tablet,
    //   'click',
    //   (event) => {
    //     const tabletRect = tablet.getBoundingClientRect();
    //     const mouseX = event.clientX - tabletRect.left;
    //     const mouseY = event.clientY - tabletRect.top;
    //     tablet
    //       .querySelectorAll('.keyword')
    //       .forEach((keywordEl: HTMLElement) => {
    //         const keywordRect = keywordEl.getBoundingClientRect();
    //         const keywordX = keywordRect.left - tabletRect.left;
    //         const keywordY = keywordRect.top - tabletRect.top;

    //         const distance = Math.sqrt(
    //           (mouseX - (keywordX + keywordRect.width / 2)) ** 2 +
    //             (mouseY - (keywordY + keywordRect.height / 2)) ** 2
    //         );

    //         if (distance <= 80) {
    //           this.renderer.addClass(keywordEl, 'highlighted');
    //         } else {
    //           this.renderer.addClass(keywordEl, 'highlighted');
    //         }
    //       });
    //   }
    // );
  }

  private removeMouseListener(): void {
    if (this.mousemoveListener) {
      this.mousemoveListener();
      this.mousemoveListener = null;
    }
  }
}

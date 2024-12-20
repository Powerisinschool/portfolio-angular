// social-share.component.ts
import {
  Component,
  Input,
  HostListener,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface SocialNetwork {
  name: string;
  icon: string; // SVG code or path to icon
  shareUrlTemplate: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.css'],
  standalone: false,
})
export class SocialShareComponent implements OnInit, OnDestroy {
  @Input() pageUrl: string;

  isHidden = false;
  private lastScrollTop = 0;

  iconStyle: string = 'width: 20px; height: 20px; transition: fill 0.3s ease;';

  socialNetworks: SocialNetwork[] = [
    {
      name: 'Twitter',
      icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      style="${this.iconStyle}"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>`,
      shareUrlTemplate: 'https://twitter.com/share?url=',
      ariaLabel: 'Share on Twitter',
    },
    {
      name: 'LinkedIn',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" style="${this.iconStyle}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>`,
      shareUrlTemplate: 'https://www.linkedin.com/shareArticle?url=',
      ariaLabel: 'Share on LinkedIn',
    },
    {
      name: 'GitHub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" style="${this.iconStyle}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>`,
      shareUrlTemplate: 'https://github.com/Powerisinschool/portfolio-angular', // Your GitHub profile URL (not a share URL)
      ariaLabel: 'View my source code on GitHub',
    },
  ];

  constructor(private el: ElementRef, public readonly sanitizer: DomSanitizer) {
    this.pageUrl = window.location.href;
  }

  ngOnInit(): void {
    this.lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (this.lastScrollTop < scrollTop && window.scrollY > 100) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = scrollTop;
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}

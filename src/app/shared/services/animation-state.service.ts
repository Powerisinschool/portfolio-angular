import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationStateService {
  preloaderFinished = signal(false);
}

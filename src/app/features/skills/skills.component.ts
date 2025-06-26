import {
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  viewChild,
  viewChildren,
  WritableSignal,
} from '@angular/core';
import { NgClass, TitleCasePipe } from '@angular/common';
import { animate } from 'animejs';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-skills',
  host: {
    class: 'app-section',
  },
  templateUrl: './skills.component.html',
  imports: [
    NgClass,
    TitleCasePipe,
    BaseChartDirective,
    ScrollAnimationDirective,
  ],
  // styleUrl: './skills.component.css',
})
export class SkillsComponent {
  readonly skillTypes: Array<'technical' | 'soft' | 'other'> = [
    'technical',
    'soft',
    'other',
  ];
  activeSkill: WritableSignal<(typeof this.skillTypes)[number]> =
    signal('technical');

  private skillsData = {
    technical: {
      labels: ['Python', 'Go', 'SQL', 'React', 'Angular', 'TensorFlow', 'Git'],
      data: [90, 85, 80, 80, 75, 70, 95],
    },
    soft: {
      labels: [
        'Communication',
        'Teamwork',
        'Problem-Solving',
        'Leadership',
        'Adaptability',
      ],
      data: [90, 95, 85, 80, 90],
    },
    other: {
      labels: [
        'Project Mgmt',
        'Data Analysis',
        'Backend Dev',
        'Frontend Dev',
        'ML',
      ],
      data: [80, 85, 90, 85, 65],
    },
  };

  skillButtons = viewChildren<ElementRef<HTMLButtonElement>>('skillBtn');
  chart = viewChild.required(BaseChartDirective);

  // Initial Chart Configuration
  public barChartOptions: ChartConfiguration['options'] = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `Proficiency: ${ctx.raw}%`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: { display: false },
      },
      y: { grid: { color: 'rgba(200, 200, 200, 0.2)' } },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutExpo',
    },
  };
  public barChartType: ChartType = 'bar';
  private chartData = computed(() => this.skillsData[this.activeSkill()]);
  public barChartData: ChartData<'bar'> = {
    labels: this.skillsData.technical.labels,
    datasets: [
      {
        label: 'Proficiency',
        data: this.skillsData.technical.data,
        backgroundColor: 'rgba(55, 65, 81, 0.8)',
        borderColor: 'rgba(55, 65, 81, 1)',
        borderWidth: 1,
        barPercentage: 1,
        categoryPercentage: 0.8,
      },
    ],
  };

  constructor() {
    effect(() => {
      const newChartData = this.chartData();
      const chartInstance = this.chart()?.chart;

      if (chartInstance) {
        chartInstance.data.labels = newChartData.labels;
        chartInstance.data.datasets[0].data = newChartData.data;
        chartInstance.update();
      }
    });
  }

  getSkillBtn(
    skillType: (typeof this.skillTypes)[number],
  ): ElementRef<HTMLButtonElement> | undefined {
    return this.skillButtons().find(
      (btn) => btn.nativeElement.dataset['skill'] === skillType,
    );
  }

  updateChart(skillType: (typeof this.skillTypes)[number]) {
    this.activeSkill.set(skillType);

    const clickedButton = this.getSkillBtn(skillType);
    if (clickedButton) {
      animate(clickedButton.nativeElement, {
        scale: [1, 1.05, 1],
        duration: 400,
        ease: 'inOutQuad',
      });
    }
  }
}

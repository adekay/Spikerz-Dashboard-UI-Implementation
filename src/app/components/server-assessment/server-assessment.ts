import { Component } from '@angular/core';
import {
  Asset,
  RiskSummary,
  RiskLevel
} from '../../types';
import { ALL_ASSETS, DEFAULT_RISK_CLASSES, DEFAULT_RISK_COLORS } from '../../constants';
import { ApexChart, NgApexchartsModule } from "ng-apexcharts";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-assessment',
  templateUrl: './server-assessment.html',
  styleUrl: './server-assessment.scss',
  imports: [CommonModule, NgApexchartsModule]
})
export class ServerAssessment {
  riskSummary: RiskSummary = {
    critical: 2,
    high: 0,
    medium: 0,
    low: 0
  };

  chartOptions = {
    series: [this.riskSummary.critical, 0, 0, 0],
    chart: {
      type: "donut",
      width: 120,
      height: 120
    } as ApexChart,
    colors: [
      DEFAULT_RISK_COLORS['Critical'],
      DEFAULT_RISK_COLORS['High'],
      DEFAULT_RISK_COLORS['Medium'],
      DEFAULT_RISK_COLORS['Low']
    ],
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '85%',
          labels: {
            show: true,
            name: {
              show: false
            },
            value: {
              show: true,
              fontSize: '20px',
              fontWeight: 600,
              color: '#1F2937',
              offsetY: 5,
              formatter: () => `${this.riskSummary.critical}`
            },
            total: {
              show: false
            }
          }
        }
      }
    },
    stroke: {
      width: 0
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100,
          height: 100
        },
        plotOptions: {
          pie: {
            donut: {
              size: '90%'
            }
          }
        }
      }
    }]
  };



  displayedColumns: string[] = ['asset', 'contextualRisk'];
  allAssets: Asset[] = ALL_ASSETS;

  currentPage = 1;
  pageSize = 2;

  constructor() {
    this.updateChartData();
  }

  private updateChartData(): void {
    this.chartOptions.series = [
      this.riskSummary.critical
    ];
  }

  get totalAssets(): number {
    return this.allAssets.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalAssets / this.pageSize);
  }

  get assets(): Asset[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.allAssets.slice(startIndex, endIndex);
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalAssets);
  }

  get canGoPrevious(): boolean {
    return this.currentPage > 1;
  }

  get canGoNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  previousPage(): void {
    if (this.canGoPrevious) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.canGoNext) {
      this.currentPage++;
    }
  }

  getRiskColor(risk: RiskLevel): string {
    return DEFAULT_RISK_COLORS[risk] || '#6B7280';
  }

  getRiskBadgeClass(risk: RiskLevel): string {
    return DEFAULT_RISK_CLASSES[risk] || 'risk-badge-default';
  }
}

export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export type Asset = {
  name: string;
  ipAddress: string;
  riskLevel: RiskLevel;
  icon: string;
}

export type RiskSummary = {
  critical: number;
  high: number;
  medium: number;
  low: number;
}

export type PaginationConfig = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

export type RiskBadgeStyle = {
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
}

export type RiskColorMap = {
  [key in RiskLevel]: string;
};

export type RiskClassMap = {
  [key in RiskLevel]: string;
};

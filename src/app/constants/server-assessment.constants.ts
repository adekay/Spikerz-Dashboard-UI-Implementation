import { Asset, RiskClassMap, RiskColorMap } from "../types";

export const  ALL_ASSETS: Asset[] = [
    {
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      riskLevel: 'Critical',
      icon: 'storage'
    },
    {
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskLevel: 'Critical',
      icon: 'storage'
    },
    {
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.3',
      riskLevel: 'Critical',
      icon: 'storage'
    },
    {
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.4',
      riskLevel: 'Critical',
      icon: 'storage'
    }
  ];

export const DEFAULT_RISK_COLORS: RiskColorMap = {
  Critical: '#DC2626',
  High: '#EA580C',
  Medium: '#D97706',
  Low: '#059669'
};

export const DEFAULT_RISK_CLASSES: RiskClassMap = {
  Critical: 'risk-badge-critical',
  High: 'risk-badge-high',
  Medium: 'risk-badge-medium',
  Low: 'risk-badge-low'
};

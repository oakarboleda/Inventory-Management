import { ReportOpts } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportOpts) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFCP, onFID, onINP, onTTFB, onLCP }) => {
      onCLS(metric => onPerfEntry({ name: 'CLS', value: metric.value, id: metric.id }));
      onFID(metric => onPerfEntry({ name: 'FID', value: metric.value, id: metric.id }));
      onFCP(metric => onPerfEntry({ name: 'FCP', value: metric.value, id: metric.id }));
      onLCP(metric => onPerfEntry({ name: 'LCP', value: metric.value, id: metric.id }));
      onTTFB(metric => onPerfEntry({ name: 'TTFB', value: metric.value, id: metric.id }));
        onINP(metric => onPerfEntry({ name: 'INP', value: metric.value, id: metric.id }));
    });
  }
};

export default reportWebVitals;

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/AnalyticsView.vue'),
    children: [
      {
        path: '', // 기본 경로 (/analytics)
        name: 'AnalyticsOverview',
        component: () => import('../views/analytics/Overview.vue'),
      },
      {
        path: 'reports', // /analytics/reports
        name: 'AnalyticsReports',
        component: () => import('../views/analytics/Reports.vue'),
      },
      {
        path: 'trends', // /analytics/trends
        name: 'AnalyticsTrends',
        component: () => import('../views/analytics/Trends.vue'),
      },
    ],
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/SettingsView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/real/views/Home.vue';
import About from '@/real/views/About.vue';
import PostCreate from '../views/posts/PostCreate.vue';
import PostDetail from '../views/posts/PostDetail.vue';
import PostEdit from '../views/posts/PostEdit.vue';
import PostList from '../views/posts/PostList.vue';
import NotFound from '../views/NotFound.vue';
import Nested from '../views/nested/Nested.vue';
import NestedOne from '../views/nested/NestedOne.vue';
import NestedTwo from '../views/nested/NestedTwo.vue';
import NestedHome from '../views/nested/NestedHome.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/About', name: 'about', component: About },

  { path: '/posts', name: 'post-list', component: PostList },
  { path: '/posts/:id', name: 'post-detail', component: PostDetail },
  { path: '/posts/create', name: 'post-create', component: PostCreate },
  { path: '/posts/edit/:id', name: 'post-edit', component: PostEdit },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

  { path: '/nested',
    name: 'Nested',
    component: Nested,
    children: [
      { path: '', name: 'NestedHome', component: NestedHome },
      { path: 'one', name: 'NestedOne', component: NestedOne },
      { path: 'two', name: 'NestedTwo', component: NestedTwo },
    ]
  }
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;

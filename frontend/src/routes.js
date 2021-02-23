import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import StudentPage from './pages/examples/StudentPage';

const routes = [
  {
    path: "/examples",
    component: DashboardLayout,
    routes: [
      {
        path: "/examples/students",
        component: StudentPage
      }
    ]
  },
  {
    path: "/",
    component: MainLayout,
    routes: [
      /*
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
      */
    ]
  }
];

export default routes;

/*
const routes = [
  { page: HomePage, path: "/", exact: true },
  { page: TodoPage, path: "/todos" },
  { page: AboutPage, path: "/about" },
  { page: StudentPage, path: "/students" },
  { page: NotFoundPage, path: "*" }
];
*/

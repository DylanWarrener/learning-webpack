import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from "vue-router";

// Static child component
import Home from './pages/pages-home.vue';

// Asyncronous child components (only load when needed)
const Kitchens = defineAsyncComponent({
  // Component to load when called. But prefetch in browser's idle time
  loader: () => import(
    /* webpackPrefetch: true */ 
    /* webpackChunkName: "kitchens" */ 
    "./pages/pages-kitchens.vue"
  ),

  // A component to load while the async component is loading
  // loadingComponent: Loader,

  // A component to load if the load fails
  // errorComponent: Error,

  // Delay before showing the loader. Default: 200ms.
  // delay: 300,

  // The error component will be displayed if a timeout is provided & exceeded. Default: Infinity
  // timeout: 4000,

  //
  // suspensible: false,

  //
  // onError(error, retry, fail, attempts) {
  // 	if (error.message.match(/fetch/) && attempts <= 2) {
  // 		retry()
  // 	} else {
  // 		fail()
  // 	}
  // }
});
const Bathrooms = defineAsyncComponent({
  loader: () => import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "bathrooms" */
     "./pages/pages-bathrooms.vue"
  )
});
const Newbuilds = defineAsyncComponent({
  loader: () => import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "newbuilds" */ 
    "./pages/pages-newbuilds.vue"
  )
});
const Extensions = defineAsyncComponent({
  loader: () => import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "extensions" */ 
    "./pages/pages-extensions.vue"
  ),
});
const Refurbishments = defineAsyncComponent({
  loader: () => import(
    /* webpackPrefetch: true */ 
    /* webpackChunkName: "refurbishments" */ 
    "./pages/pages-refurbishments.vue"
  ),
});
const Contact = defineAsyncComponent({
  loader: () => import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "contact" */ 
    "./pages/pages-contact.vue"
  ),
});
const About = defineAsyncComponent({
  loader: () => import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "about" */ 
    "./pages/pages-about.vue"
  ),
});

// Routes
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "Home", component: Home },
		{ path: "/kitchens", name: "Kitchen", component: Kitchens },
		{ path: "/bathrooms", name: "Bathroom", component: Bathrooms },
		{ path: "/newbuilds", name: "Newbuild", component: Newbuilds },
		{ path: "/extensions", name: "Extension", component: Extensions },
		{ path: "/refurbishments", name: "Refurbishment", component: Refurbishments },
		{ path: "/contact", name: "Contact", component: Contact },
		{ path: "/about", name: "About", component: About },
		{ path: "/:notFound(.*)", name: "NotFound", redirect: "/" },
	],
	/*
    scrollBehavior(to, from, savedPosition) {
        // To: the route I want to go to
        // From: the route I came from
        // SavedPosition: the saved top a& bottom corrdinates before going to new route
    },
  */
});

export default router;
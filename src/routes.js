import NotFound from './views/404.vue'
import Home from './views/home.vue'
import About from './views/about.vue'
import News from './views/news.vue'
import SingleNewView from './views/singleNewView.vue'
import Awards from './views/awards.vue'
import Award from './views/award.vue'
import Archive from './views/archive.vue'
import Team from './views/team.vue'
import Worker from "./views/worker.vue"

export default [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/comunication/news', component: News},
    {path: '/comunication/news/:newsid', component: SingleNewView},
    {path: '/comunication/awards', component: Awards},
    {path: '/comunication/awards/:awardid', component: Award},
    {path: '/comunication/archive', component: Archive},
    {path: '/aboutUs/team', component: Team},
    {path: '/aboutUs/team/:workerid', component: Worker},
]
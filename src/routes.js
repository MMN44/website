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
import Projects from './views/projects.vue'
import Project from './views/project.vue'
import ResearchAreas from './views/researchareas.vue'
import Area from './views/area.vue'
import Events from './views/events.vue'
import History from './views/history.vue'
import Education from './views/education.vue'
import JoinUs from './views/joinus.vue'
import JoinUsCategory from './views/joinuscategory.vue'
import Contact from './views/location.vue'

export default [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/comunication/news', component: News},
    {path: '/comunication/news/:newsid', component: SingleNewView},
    {path: '/comunication/awards', component: Awards},
    {path: '/comunication/awards/:awardid', component: Award},
    {path: '/comunication/archive', component: Archive},
    {path: '/aboutUs/history', component: History},
    {path: '/aboutUs/team', component: Team},
    {path: '/aboutUs/team/:workerid', component: Worker},
    {path: '/aboutUs/joinUs', component: JoinUs},
    {path: '/aboutUs/joinUs/:category', component: JoinUsCategory},
    {path: '/research/projects', component: Projects},
    {path: '/research/projects/:project', component: Project},
    {path: '/research/areas', component: ResearchAreas},
    {path: '/research/areas/:area', component: Area},
    {path: '/education/courses/official', component: Education},
    {path: '/education/mooc', component: Education},
    {path: '/education/professionalTraining', component: Education},
    {path: '/events/scientificEvents/', component: Events},
    {path: '/contact', component: Contact, name: 'Contact'},
    {path: '*', component: NotFound}
]
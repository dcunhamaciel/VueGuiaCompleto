import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio.vue';
import Menu from './components/template/Menu.vue';
import MenuAlt from './components/template/MenuAlt.vue';
import Usuario from './components/usuario/Usuario.vue';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue';
import UsuarioEditar from './components/usuario/UsuarioEditar.vue';
import UsuarioLista from './components/usuario/UsuarioLista.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'inicio',
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        //component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', name: 'editarUsuario', component: UsuarioEditar, props: true }
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }]
})
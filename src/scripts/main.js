import Modal from './components/Modal.vue';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    components: {
        Modal
    },
    methods: {
        showModal() {
            app.$refs.modal.show();
        }
    }
})

<template>
    <div class="modal-mask" v-if="visible">
        <div class="modal-wrapper" v-on:click.self="close">
            <div class="modal-container">

                <div class="modal-header">
                    <slot name="title">
                        {{ title }}
                    </slot>
                    <span class="close" v-on:click.self="close">&#10006;</span>
                </div>

                <div class="modal-body">
                    <slot name="content">
                        {{ content }}
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data: function() {
        return {
            visible : false,
            title   : null,
            content : null,
        }
    },
    props: {
        startVisible: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: true
        },
    },
    mounted() {
        if(this.startVisible) {
            this.show();
        }
    },
    methods: {
        close() {
            if(this.closable == false) {
                return;
            }

            document.documentElement.style.overflow = 'auto'

            this.$emit('close');
            this.visible = false;
        },
        show() {

            document.documentElement.style.overflow = 'hidden'

            this.$emit('open');
            this.visible = true;
        },
    },
}
</script>

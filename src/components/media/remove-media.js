import { removeMedia } from '../../store';

export default {

    template: `
        <a class="button -small -danger" @click="remove">
            Remove <i class="fa fa-remove"></i>
        </a>
    `,

    props: ['media'],

    methods: {
        remove() {
            removeMedia(this.media);
        },
    },

};

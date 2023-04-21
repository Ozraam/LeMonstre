import { Collapse, Modal } from 'bootstrap'

function defineCollapseDirective(nuxtApp) {
    nuxtApp.vueApp.directive('bs-collapse', {
        mounted(el) {
            const collapse = new Collapse(el)
            el.collapse = collapse
        },
        unmounted(el) {
            el.collapse.dispose()
        },
    })
}

function defineModalDirective(nuxtApp) {
    nuxtApp.vueApp.directive('bs-modal', {
        mounted(el) {
            const modal = new Modal(el)
            el.modal = modal
        },
        unmounted(el) {
            el.modal.dispose()
        },
    })
}


export default defineNuxtPlugin((nuxtApp) => {
    defineCollapseDirective(nuxtApp);
    defineModalDirective(nuxtApp);
})

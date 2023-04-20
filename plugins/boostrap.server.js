function defineCollapseDirective(nuxtApp) {
nuxtApp.vueApp.directive("bs-collapse", {
    getSSRProps() {
        return {};
    },
});
}

function defineModalDirective(nuxtApp) {
nuxtApp.vueApp.directive("bs-modal", {
    getSSRProps() {
        return {};
    },
});
}



export default defineNuxtPlugin((nuxtApp) => {
    defineCollapseDirective(nuxtApp);
    defineModalDirective(nuxtApp);
});

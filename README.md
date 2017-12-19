# TestElements
This repos contains tests of how to use the new angular elements, this is still very experimental at the moment

Guide to build a new component:

1. implement the new component 
2. add it to `customElements` array on `app.module.ts`

**NOTES:** (how this works)
1. install `@angular/elements` from `https://github.com/angular/elements-builds.git` dependencie
2. the `customElements` array needs to be passed on to `entryComponents` and `declarations`
3. add `ngDoBootstrap() {}` to the modules class(this will disapear in future i think)
4. enable web components polyfills in `polyfills.ts`

**Current issues:** 
1. style missbehaves
2. it's not working at all on firefox 
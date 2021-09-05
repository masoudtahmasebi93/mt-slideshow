# MtSlideShow

This is going to be a simple Framework, currently the slideshow and soon carousel will be available.

## How to install

For installing the component in an angular application you just have to run the following command and then you can simply use it:

        npm install mt-slideshow

you also need to add `@angular/platform-browser/animations` to the imports in the `app.module.ts` like below

    import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

    @NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [AppComponent, CarouselComponent],
    bootstrap: [AppComponent]
    })

## Using Slideshow
 [**Demo**](https://brampeirs.github.io/angular-carousel/)  

The slide show is highly based on [here](https://github.com/brampeirs/angular-carousel)

for using this component, you can use the following syntax:

        <mt-slideshow [slides]="slides" animationType="flip"></mt-slideshow>

in which, the slides is an array of slides with the property of `src` set to the url of the image, and optional `alt` property, which can make the plugin more SEO friendly

this is a sample slides object:

    slides = [
        { src: "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80", alt: "Picture 1" },
        { src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80", alt: "Picture 2" },
        { src: "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80", alt: "Picture 3" }];

In the end, don't forget that you have to also add `MtSlideshowModule` to the `app.module.ts` imports

    ...
    imports: [
        ... ,
        MtSlideshowModule,
        ...
    ],
    ...
## Further help

If you needed any help feel free to raise a new issue in the issues section. You are more than welcome to do so.

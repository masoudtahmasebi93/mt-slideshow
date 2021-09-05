# MtCarousel

This is going to be a simple Framework, currently the slideshow and carousel are available.

## How to install

For installing the component in an angular application you just have to run the following command and then you can simply use it:

        npm install mt-carousel

you also need to add `@angular/platform-browser/animations` to the imports in the `app.module.ts` like below

    import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

    @NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [AppComponent, CarouselComponent],
    bootstrap: [AppComponent]
    })

## Using Carousel

 <!-- [**Demo**](https://brampeirs.github.io/angular-carousel/)   -->

<!-- The slide show is highly based on [here](https://github.com/brampeirs/angular-carousel) -->

for using this component, you can use the following syntax:

        <mt-carousel [carouselItems]="carouselItems" animationType="flip"></mt-carousel>

in which, the carouselItems is an array of carousels with the property of `src` set to the url of the image, and optional `alt` property, which can make the plugin more SEO friendly. The `caption` which will be shown on the picture and the `link`, which will be the target url when the carousel item is clicked.

this is a sample carouselItems object:

    slides = [
        { src: "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80", alt: "Picture 1" ,link: "https://google.com", caption: "Picture 1"},
    { src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80", alt: "Picture 2",link: "https://google.com", caption: "Picture 2" },
    { src: "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80", alt: "Picture 3",link: "https://google.com", caption: "Picture 3" }];

In the end, don't forget that you have to also add `MtCarouselModule` to the `app.module.ts` imports

    ...
    imports: [
        ... ,
        MtCarouselModule,
        ...
    ],
    ...

## Further help

If you needed any help feel free to raise a new issue in the issues section. You are more than welcome to do so.

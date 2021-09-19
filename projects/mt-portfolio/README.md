# MtPortfolio

[**MT Portfolio Demo**](https://masoudtahmasebi.ir/)

**MT Framework** is going to be a simple Framework, full of different tools that can be used for your everyday development.

## How to install

For installing the component in an angular application you just have to run the following command and then you can simply use it:

        npm install mt-portfolio

you also need to add `@angular/platform-browser/animations` to the imports in the `app.module.ts` like below

    import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

    @NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
    })

## Using Portfolio Maker

[**Demo**](https://masoudtahmasebi.ir/)

The portfolio maker is the result of me trying to make a portfolio website for myself. I'm hopeful that it can also be helpful to you.

for using this component, you can use the following syntax:

        <mt-portfolio [portfolioList]="portfolio" [header]="header"></mt-portfolio>

in which, the portfolioList is an array of portfolio items and model of `PortfolioModel` with the properties of `src,srcLarge,srcMedium` for images in different sizes loaded for each page. The optional `alt` property, which can make the plugin more SEO friendly.

this is a sample slides object:

    portfolio: PortfolioModel[] = [
    {
      src: 'https://masoudtahmasebi.ir/assets/img/1-.jpg', //Source of small image
      srcLarge: '../assets/img/1-.jpg', //Source of Large Image
      srcMedium: 'https://masoudtahmasebi.ir/assets/img/1-.jpg', //Source of small image
      x: '25vw', // X position, horizontal place
      y: '17vh', // Y position, vertical place
      alt: 'masoud tahmasebi',
      selectable: {
        id: 1,
        title: "Masoud", // Title on image as h1, it also accepts Html
        titleFull: " Tahmasebi", // completer of title, which shines with hover
        linkTitle: "Home", // Title shown on the navigotors
        link: "#", // Link For Navigation
        caption: `A Simple Caption` // Text below Title which also accepts Html
        }
    },
    {
      src: https://masoudtahmasebi.ir/assets/img/2-2.jpg',
      srcLarge: 'https://masoudtahmasebi.ir/assets/img/2-.jpg',
      srcMedium: https://masoudtahmasebi.ir/assets/img/2-2.jpg',
      x: '21vw',
      y: '5vh',
      alt: 'masoud tahmasebi',
      selectable: {
        id: 2,
        titleFull: " Me",
        title: "About",
        linkTitle: "About",
        link: "#about",
        caption: `<div style="line-height:2rem;">Custom HTML</div>`
            }
        }
    ];

This plugin also supports dynamic heading, which the input can given as follows:

        header: HeaderModel[] = [{
        href: "https://github.com/masoudtahmasebi93/",
        enabled: true,
        icon: `<svg width="24" height="24" viewBox="0 0 1024 1024" fill="#ff9933" xmlns="http://www.w3.org/2000/svg">...</svg>`,
        title: 'Nasoud on Github'
            }, {
        href: "https://www.linkedin.com/in/masoudtahmasebi/",
        enabled: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34" fill="#ff9933">...</svg>`,
        title: 'Masoud on Linkedin'
    }, {
        href: "https://stackoverflow.com/users/9163685/masoud-tahmasebi",
        enabled: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff9933">...</svg>`,
        title: 'Masoud on StackoverFlow'
    },
    ];

Then the parameters are given to the component as follows:

    <div>
        <mt-portfolio [portfolioList]="portfolio" [header]="header"></mt-portfolio>
    </div>
In the demo, this code has been put in the `app.component.ts`.

In the end, don't forget that you have to also add `MtPortfolioModule` to the `app.module.ts` imports

    ...
    imports: [
        ... ,
        MtPortfolioModule,
        ...
    ],
    ...

## Further help

If you needed any help feel free to raise a new issue in the issues section. You are more than welcome to do so.

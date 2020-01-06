# Generate responsive images

> I used that script to be able increase my website's score on google search console.
> Cause my images was too big on mobile devices.

## Install
This project use https://www.npmjs.com/package/responsive-images-generator library.

Run `yarn install` or `npm install`

## Explication
Put your own images in the `images` folder and it will trasnform them in different size, named like : `${width}x`. 

`width` correspond to width in px of your image.

If you want to use them in your website use `srcset` image's attribute.

```html
<img src="/path/image.webp" srcset="/path/image-widthx.webp widthw, ..."/>
```

#### Example

```html
<img src="/path/image.webp" srcset="/path/image.webp 600w, /path/image.webp 900w, /path/image.webp 1200w"/>
```

#### Using create-react-app
If you don't import all images in differents size in your react component, they won't be generated in the build version. 

I recommend using ImageWebp component you can find [here](https://gist.github.com/antoineFrau/81fcea86bd42124c6bfb5777bde9cc0b)

So you should do something like that

```js
import imageWebp from "./images/image.webp";
import image from ".images/image.svg";
import image604 from "./images/image-604x.webp";
import image1208 from "./images/image-1208x.webp";
import image1811 from "./images/image-1811x.webp";
import image2415 from "./images/image-2415x.webp";
import image3019 from "./images/image-3019x.webp";

const srcSetFull = `${image604} 604w, ${image1208} 1208w, ${image1811} 1811w, ${image2415} 2415w, ${image3019} 3019w`;

<img src={image} srcWebp={imageWebp} srcSet={srcSetFull} alt="">
```

#### Warning
`Webp` extension image will not be rendered in Safari and few other.

## Author
Antoine Frau - Student Full-Stack Developer Master degree.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
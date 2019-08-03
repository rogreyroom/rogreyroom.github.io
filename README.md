# rogreyroom.github.io homepage

Robert Adamczewski homepage with github projects.

## Website 🚀

[go to the website](https://rogreyroom.github.io/)

![Robert Adamczewski gitHub ready website screen](public/assets/images/cover.png)

## Build with

- [gulp-starter](https://github.com/rogreyroom/gulp-starter)

## Using gulp

- development - run `gulp` or `npm start`
- production - run `gulp build` or `npm build`
- deployment - follow deploy section

## Deploy

To deploy public folder to **master** brunch

**_npm script version_**

```npm
npm run build
npm run deploy
```

**_git version_**

```git
> git checkout master
> git rm -f -r --ignore-unmatch ./**
> git checkout source -- 'public/**'
> git mv -f public/** ./
> git commit . -m "build: website deploy `date +\"%Y-%m-%d\"`"
```

## Version

v.1.0.0

## Author

Robert Adamczewski

## License

This project is licensed under MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

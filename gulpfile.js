// ==========================================================================
// Gulp build script
// ==========================================================================
/* eslint no-console: "off" */

const path = require('path');
const gulp = require('gulp');
// ------------------------------------
// JavaScript
// ------------------------------------
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
// ------------------------------------
// CSS
// ------------------------------------
const sass = require('gulp-sass');
const clean = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
// ------------------------------------
// Images
// ------------------------------------
const svgstore = require('gulp-svgstore');
const imagemin = require('gulp-imagemin');
// ------------------------------------
// Utils
// ------------------------------------
const del = require('del');
const filter = require('gulp-filter');
const header = require('gulp-header');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
// ------------------------------------
// Deployment
// ------------------------------------
// ------------------------------------
// Configs
// ------------------------------------
const pkg = require('./package.json');
const build = require('./build.json');
// ------------------------------------
// Info from package
// ------------------------------------
const { browserslist: browsers } = pkg;

// Paths
const paths = {
    plyr: {
        output: path.join(__dirname, 'dist/')
    },
    demo: {
        output: path.join(__dirname, 'demo/dist/')
    }
};

// Task arrays
const tasks = {
    css: [],
    js: [],
    sprite: [],
    clean: 'clean',
};

// Size plugin
const sizeOptions = { showFiles: true, gzip: true };

// Clean out /dist
gulp.task(tasks.clean, done => {
    const dirs = [paths.plyr.output, paths.demo.output].map(dir => path.join(dir, '**/*'));

    // Don't delete the mp4
    dirs.push(`!${path.join(paths.plyr.output, '**/*.mp4')}`);

    del(dirs);

    done();
});

// JavaScript
Object.entries(build.js).forEach(([filename, entry]) => {
    const { dist, formats, namespace, polyfill, src } = entry;

    formats.forEach(format => {
        const name = `js:${filename}:${format}`;
        const extension = 'js';
        tasks.js.push(name);

        gulp.task(name, () =>
            gulp
                .src(src)
                .pipe(plumber())
                .pipe(
                    rollup(
                        {
                            plugins: [
                                resolve(),
                                commonjs(),
                                babel({
                                    presets: [
                                        [
                                            '@babel/env',
                                            {
                                                // debug: true,
                                                useBuiltIns: polyfill ? 'usage' : false,
                                                corejs: polyfill ? 3 : undefined,
                                            },
                                        ],
                                    ],
                                    babelrc: false,
                                    exclude: [/\/core-js\//],
                                }),
                            ],
                        },
                        {
                            name: namespace,
                            format,
                        },
                    ),
                )
                .pipe(header('typeof navigator === "object" && ')) // "Support" SSR (#935)
                .pipe(header(process.env.MARKER ? `console.info(${JSON.stringify(process.env.MARKER)}); ` : ''))
                .pipe(
                    rename({
                        extname: `.${extension}`,
                    }),
                )
                .pipe(gulp.dest(dist))
                .pipe(filter(`**/*.${extension}`))
                .pipe(gulp.dest(dist)),
        );
    });
});

// CSS
Object.entries(build.css).forEach(([filename, entry]) => {
    const { dist, src } = entry;
    const name = `css:${filename}`;
    tasks.css.push(name);

    gulp.task(name, () =>
        gulp
            .src(src)
            .pipe(plumber())
            .pipe(sass())
            .pipe(
                prefix(browsers, {
                    cascade: false,
                }),
            )
            .pipe(clean({ format: 'beautify' }))
            .pipe(gulp.dest(dist)),
    );
});

// SVG Sprites
Object.entries(build.sprite).forEach(([filename, entry]) => {
    const { dist, src } = entry;
    const name = `sprite:${filename}`;
    tasks.sprite.push(name);

    gulp.task(name, () =>
        gulp
            .src(src)
            .pipe(plumber())
            .pipe(imagemin())
            .pipe(svgstore())
            .pipe(rename({ basename: path.parse(filename).name }))
            .pipe(gulp.dest(dist)),
    );
});

// Build all JS
gulp.task('js', () => gulp.parallel(...tasks.js));

// Build distribution
gulp.task('build', gulp.series(tasks.clean, gulp.parallel(...tasks.js, ...tasks.css, ...tasks.sprite)));

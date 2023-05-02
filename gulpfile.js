const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

gulp.task('svg-sprite', function() {
  return gulp.src('svg/*.svg') // вибираємо всі SVG файли з директорії svg
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "sprite.svg", // назва вихідного спрайту
          render: {
            // видаляємо атрибут fill з усіх елементів
            symbol: {
              attributes: {
                fill: "none"
              }
            }
          },
          // видаляємо атрибут style з усіх елементів
          svg: {
            xmlDeclaration: false,
            doctypeDeclaration: false,
            namespaceIDs: false,
            namespaceClassnames: false,
            attributes: {
              style: 'display:none'
            }
          }
        }
      }
    }))
    .pipe(gulp.dest('dist')); // куди зберігаємо готовий спрайт
});

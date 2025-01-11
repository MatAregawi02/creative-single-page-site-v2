# Refactoring a mixin with too many parameters

// Mixin for layout properties
@mixin layout($width, $height, $padding, $margin) {
  width: $width;
  height: $height;
  padding: $padding;
  margin: $margin;
}

// Mixin for text-related properties
@mixin text($font-size, $line-height, $font-weight, $text-align) {
  font-size: $font-size;
  line-height: $line-height;
  font-weight: $font-weight;
  text-align: $text-align;
}

// Mixin for visual styles
@mixin visuals($color, $border-radius, $background, $box-shadow, $opacity) {
  color: $color;
  border-radius: $border-radius;
  background: $background;
  box-shadow: $box-shadow;
  opacity: $opacity;
}
/**SCSS (Sassy Cascading Style Sheets)**/ is a superset of CSS, meaning all valid CSS is also valid SCSS. It's a preprocessor scripting language that extends CSS with dynamic features, making stylesheets more efficient, maintainable, and organized. SCSS code is then compiled into standard CSS for browsers to interpret.

Read Flex grow

**Most Use Concept Of SCSS :- Nesting, Mixins and Partials and Imports**

/-**Features SCSS adds to CSS:**-/

**Variables:** SCSS allows you to define variables (using the $ symbol) to store values like colors, font sizes, or spacing. This promotes consistency and makes global style changes easier, as you only need to update the variable in one place.
$primary-color: #3498db;
.header {
background-color: $primary-color;
}

**Nesting:** You can nest CSS selectors within each other, mirroring the hierarchical structure of your HTML. This improves readability and reduces repetitive selector declarations.
.container {
h1 {
color: black;
}
p {
font-size: 16px;
}
}

**Mixins:** Mixins are reusable blocks of CSS declarations that can be included in different parts of your stylesheet using the @include directive. They help avoid code repetition and promote modularity.
@mixin border-radius($radius) {
-webkit-border-radius: $radius;
-moz-border-radius: $radius;
border-radius: $radius;
}

    .button {
      @include border-radius(5px);
    }

**Partials and Imports:** SCSS supports breaking down large stylesheets into smaller, more manageable partial files (prefixed with \_). These partials can then be imported into a main SCSS file using the @import directive, enhancing organization and modularity.
// \_variables.scss
$font-stack: Helvetica, sans-serif;

    // style.scss
    @import 'variables';
    body {
      font-family: $font-stack;
    }

**Functions:** SCSS provides built-in functions for manipulating colors, strings, numbers, and more, as well as the ability to define custom functions. This allows for more dynamic and complex styling logic.
.box {
width: percentage(1/3); // Calculates 33.333%
}

**Extend/Inheritance:** The @extend directive allows a selector to inherit the styles of another selector, promoting code reuse and reducing redundancy without duplicating CSS.
.message {
border: 1px solid #ccc;
padding: 10px;
}

    .success-message {
      @extend .message;
      color: green;
    }

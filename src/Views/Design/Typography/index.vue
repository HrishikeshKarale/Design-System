<template>
  <article>
    <section id="typography">
      <header>
        <h1>Typography</h1>
      </header>
      <p>
        The official Comet typeface is Roboto and it is suggested for use on Comet print publications. In the event that a unit does not have access to Roboto fonts, other suggested fonts are Times New Roman or Open Sans.
      </p>   
      <p>
        If Roboto is available as webfonts and is recomended for the use of web. If you do not have access to this font, we recommend replacing it with Lato to enhance clarity and readability on the web.
      </p>
      <div class= 'typographyCard'>
        <card-background
          low= '2'
        >
          <div class= 'typoCardContainer'>
            <div class= 'typographyAlphabet'>
              R r
            </div>
            <div class= 'typographyType'>
              Roboto
            </div>
          </div>
        </card-background>
      </div>
    </section>
    <section id="details">
      <div class= 'subSection'>
        <label class="h2">
          Font Family:
        </label>
        <h2>Roboto</h2>
      </div>
      <div class= 'subSection'>
        <label class="h2">
          Style:
        </label>
        <h2>Regular, Bold</h2>
      </div>
    </section>
    <section id="characters">
      <div>
        <div
          v-for= '(char, index) in characters'
          :key= 'index'
          v-html= 'char'
          class= 'char'
        />
      </div>
      <div>
        <div
          v-for= '(char, index) in characters'
          :key= 'index'
          v-html= 'char'
          class= 'char'
        />
      </div>
    </section>
    <section id="FontInfo">
      <font-info
        v-for= 'info in fontInfo'
        :key= 'info.index'
        :category= 'info.category'
        :text= 'info.text'
        :fontWeight= 'info.fontWeight'
        :size= 'info.size'
      />
    </section>
  </article>
</template>

<script>

  import cardBackground from  '@/components/UIComponents/Cards/cardBackground'
  import fontInfo from '@/Views/fontInfo' 

  export default {
    name: 'typography',

    data () {
      const characters= [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '‘',
        '?',
        '’',
        '“',
        '!',
        '”',
        '(',
        '%',
        ')',
        '[',
        '#',
        ']',
        '{',
        '@',
        '}',
        '/',
        '&amp;',
        '\\',
        '&lt;',
        '-',
        '+',
        '÷',
        '×',
        '=',
        '&gt;',
        '®',
        '©',
        '$',
        '€',
        '£',
        '¥',
        '¢',
        ':',
        ';',
        ',',
        '.',
        '*',
      ];
      const fontInfo= [
        {
          category: '<h1>H1</h1>',
          fontWeight: 'Bold',
          text: '<h1>This Font Size is used for title.</h1>'
        },
        {
          category: '<h3>H3</h3>',
          fontWeight: 'Bold',
          text: '<h3>This Font Size is used for sub-title.</h3>'
        },
        {
          category: 'Navigation',
          fontWeight: 'Bold',
          text: 'This Font Size is used for Navigation title.'
        },
        {
          category: 'Body',
          fontWeight: 'Bold',
          text: 'This Font Size is used for labels and table headers title.',
          size: '16px'
        },
        {
          category: 'Body',
          fontWeight: 'Regular',
          text: 'This Font Size is used for text in general.',
          size: '16px'
        },
        {
          category: 'BUTTON TEXT',
          fontWeight: 'Bold',
          text: 'THIS FONT IS USED TO CHARACTERIZE A BUTTON.'
        }

      ];//fontInfo
      return {
        characters,
        fontInfo
      }
    }, //data

    components: {
      cardBackground,
      fontInfo
    }, //components
  } //default
</script>

<style lang= 'less' scoped>

  @import (reference) "./../../../Less/customMixins.less";
  @import (reference) "./../../../Less/customVariables";

  article {
    & > #typography {
      & > .typographyCard {
        align-self: center;
        color: @backgroundColor;
        border-radius: @borderRadius;


        .typoCardContainer {
          background-color: @textColor;
          width: 320px;

          .typographyAlphabet {
            font-size: 4*@fontSize;
            padding: @spaceXl @spaceLg;
            text-align: center;
          }

          .typographyType {
            font-size: 2*@fontSize;
            color: @textColor;
            padding: @spaceLg @spaceMd;
            text-align: center;
            background-color: grey;
          }
        }
      }
    }
    & > #details {
      align-self: center;
    }
    & > #characters {
      align-self: center;

      & > div {  
        color: @backgroundColor;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: @spaceLg;
        border-radius: @borderRadius;
        background-color: @textColor;

        .boxShadow(@one);

        &:last-child {
          font-weight: bold;
        }
        
        & > .char {
          display: inline-flex;
          font-size: 2*@fontSize;
          padding: @spaceMd @spaceLg;
        }
      }
    }
    & > #fontInfo {
      flex-direction: column;
      justify-content: space-around;
      align-self: center;

      > div {
        margin: @spaceLg 0;
      }
    }
  }
</style>

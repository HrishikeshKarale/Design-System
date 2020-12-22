<template>
  <article id= "typography">
    <h1>Typography</h1>
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
    <div class= 'typographyDetails'>
      <div class= 'detailsFamily'>
        <div>
          <label>
            <h2>Font Family:</h2>
          </label>
        </div>
        <div>
          <h2>Roboto</h2>
        </div>
      </div>
      <div class= 'detailsStyle'>
        <div>
          <label>
            <h2>Style:</h2>
          </label>
        </div>
        <div>
          <h2>Regular, Bold</h2>
        </div>
      </div>
    </div>
    <div class= 'typographyCharacters'>
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
    </div>
    <div class= 'typographyFontInfo'>
      <font-info
        v-for= 'info in fontInfo'
        :key= 'info.index'
        :category= 'info.category'
        :text= 'info.text'
        :fontWeight= 'info.fontWeight'
        :size= 'info.size'
      />
    </div>
  </article>
</template>

<script>

  import cardBackground from  '@/components/UIComponents/Cards/cardBackground'
  import fontInfo from '@/Views/fontInfo' 

  export default {
    name: 'typography',

    data () {
      return {
        title: 'Typography',

        characters: [
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
        ],

        msg1: '',

        msg2: '',

        activeClass: 'card1',

        fontInfo: [
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

        ]//fontInfo
      } //return
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

  /* @width: 1280px; */

  .typography {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* width: @width; */

    .typographyTitle {
      margin-bottom: 96px;
      text-align: center;
    }

    .typographyCard {
      margin: 64px auto 32px;
      color: @textColor;

      .typoCardContainer {
        background-color: @white;
        width: 320px;

        .typographyAlphabet {
          font-size: 96px;
          padding: 32px 8px;
          margin: 0 auto;
          text-align: center;
        }

        .typographyType {
          font-size: 32px;
          color: @white;
          padding: 16px 8px;
          margin: 0 auto;
          text-align: center;
          background-color: grey;
        }
      }
    }

    .typographyDetails {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      .detailsFamily, .detailsStyle {
        display: flex;
        flex-direction: row;

        > div {
          flex-grow: 1;
        }
      }
    }

    .typographyFontInfo {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: auto;

      > div {
        margin: @spaceLg 0;
      }
    }

    .typographyCharacters {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /* max-width: @width; */
      margin: 0 auto;

      > div {  
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 480px;
        margin: @spaceLg @spaceXl;
        font-weight: 400;
        border-radius: @borderRadius;
        background-color: @white;

        .boxShadow(@one);

        &:last-child {
          font-weight: bold;
        }
        
        > .char {
          display: inline-flex;
          font-size: 32px;
          padding: @spaceSm @spaceMd;
        }
      }
    }
  }
</style>

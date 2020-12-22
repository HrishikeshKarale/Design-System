<template>
  <div class= "sound">   
      
        <article id= 'sound'>
          <h1>Sounds</h1>
          <p>
            COMET uses sounds intentionally to communicate information and to enhance our users’ experience of our product. Sound patterns make interactions with our product easier and more predictable.
          </p>
          <section id= "considerations">
            <h3>Considerations</h3>
            <div class= 'subSection'>
              <h4>Considering the Urgency of the event</h4>
              <p>
                The duration, volume, and character of a sound should all be dictated by the level of urgency of an event. For example, an alert indicating that a customer is struggling to complete checkout requires more urgent attention and immediate action. An alert indicating that a customer has arrived at a storefront is informative, but doesn’t require immediate action. The sounds used during these events should be customized to reflect the differences in urgency.
              </p>
            </div>
            <div class= 'subSection'>
              <h4>Consider repetition</h4>
              <p>
                Some sounds occur many times per day. While appealing on first listen, a sound may become irritating after ten, and unbearable after a hundred. Merchants that hear a sound repeatedly may quickly grow tired of it.
              </p>
              <div class= 'subSection'>
                <h5>Our sounds should be informative and not annoying.</h5>
                <p>
                  Whenever possible, use data to determine how often a sound will be triggered. This data should inform us how to design a certain sound intentionally. The end goal is to communicate information without frustrating users through obnoxious sound.
                </p>
              </div>
            </div>
            <div class= 'subSection'>
              <h4>Consider clarity</h4>
              <p>
                Merchants are likely to hear our sounds in a variety of contexts. Clean, focused, and succinct sounds convey information better than muffled or distorted sounds.
              </p>
            </div>
            <div class= 'subSection'>
              <h4>Consider the device</h4>
              <p>
                While you may be testing your designs using headphones or loudspeakers that reveal the audible frequency spectrum clearly, a smartphone speaker will affect the quality of the sound. Smaller speakers are more susceptible to distortion. Sounds on mobile devices should be played at lower levels than on a desktop computer or laptop. Test sounds on a variety of devices and volume levels.
              </p>
            </div>
            <div class= 'subSection'>
              <h4>Consider accisibility</h4>
              <p>
              Some people can’t rely on sound to receive cues or notifications. Merchants may have a disability that affects hearing or auditory processing. Merchants may not hear at all, or may be unable to hear sounds at certain frequencies or volumes.
              </p>
              <p>
                Depending on the merchant’s preferences and technologies, they may receive sound cues through haptic or visual feedback, but it is important to not assume that sound can be perceived.
              </p>
              <p>
                When sound is used, always include an alternative method to convey information. Use text-based notifications or visual changes in the interface that can be communicated to and interpreted in a timely manner by assistive technologies.
              </p>
            </div>
          </section>
          <section id= "whenToUse">
            <h3>When to use sound</h3>
            <p>
              Sounds in our product help convey information. There’s an important balance between having too many sounds and not enough. Useful and well-planned sounds will help with merchant understanding. Unnecessary sounds will reduce the perceived quality of our product.
            </p>
            <p>
              Even though users might miss important information if they turn off their sound, we should always provide the option for them to do so.
            </p>
            <p>
              Use more space between large components, or between components which are less functionally related.
            </p>
            <div class= 'subSection'>
              <h5>Common sound events</h5>
              <ul>
                <li>For an event that requires users’ immediate attention, use an alert to encourage users to pause their workflow and attend to the event</li>
                <li>For an event that’s useful for users to attend to, but not immediately, use a notification</li>
                <li>To confirm success, use feedback for a successful action</li>
                <li>For statement of failure, use feedback for unsuccessful action</li>
              </ul>
            </div>
          </section>
          <section id= "howToApproach">
            <h3>How to approach sound design</h3>
            <p>
              Be creative and intentional in sound design. Here are a few simple considerations:
            </p>
            <ul>
              <li>Short sounds should be no longer than 250ms.</li>
              <li>Long sounds should be no longer than 1 second.</li>
              <li>Sounds should be in the same “family” — there needs to be clear intention behind the introduction of a new note, key, or timbre.</li>
              <li>
                Two versions of every sound should be created for use on a mobile device and a desktop device or speakers.
                <ul>
                  <li>A louder version of the sound should be used for desktop applications.</li>
                  <li>A quieter version of the sound should be used for mobile applications where the speakers are smaller and may distort more easily.</li>
                </ul>
              </li>
            </ul>
            <p>
              Design sounds with as much intentionality as other design aspects of Shopify’s products.
            </p>
          </section>
        </article>
  </div>
</template>

<script>

  import vueButton from '@/components/UIComponents/Buttons'
  import vueCard from "@/components/UIComponents/Cards/vueCard"
  import vueClipboard from "@/components/Code/vueClipboard";
  
  // import { store } from '@/store/store'

  export default {
    name: 'sound',

    // store,

    data () {
      
      var d_type= 'button'

      var d_tag= 'consoleTextButton'

      var d_text= 'Click Me'

      var d_icon= 'fas fa-copy'

      var d_category= this.$store.state.category
      
      var d_form= ''
      
      return {

        d_type: d_type,

        d_tag: d_tag,

        d_text: d_text,

        d_icon: d_icon,

        d_category: d_category,

        d_form: d_form,

        d_booleanTrue: true,
      
        colors: this.$store.state.colors
      } //return
    }, //data

    components: {

      vueButton,
      vueCard,
      vueClipboard
    }, //componnets

    methods: {

      hexToRgb: function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
         ] : null;
      }, //hexToRgb
    }, //methods
  } //default
</script>

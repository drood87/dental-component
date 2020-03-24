<template>
  <div id="appMedizduoDental" class="app-medizduo-dental main-wrapper">
    <nav class="nav">
      <ul class="nav__list">
        <li
          class="nav__item"
          @click="toggleView('treatment')"
          :class="!isDentalView ? 'nav__item--not-active' : ''"
        >
          Zahnbehandlung
        </li>
        <li
          class="nav__item"
          @click="toggleView('prosthesis')"
          :class="!isProsthesisView ? 'nav__item--not-active' : ''"
        >
          Zahnersatz
        </li>
      </ul>
    </nav>
    <treatment
      v-if="isProsthesisView"
      :other="otherTreatmentImg"
      :cleaning="cleaningImg"
      :filling="fillingImg"
    ></treatment>
    <prosthesis
      v-if="isDentalView"
      :ceramicBridge="ceramicImg"
      :implantant="implantantImg"
      :crone="ceramicCroneImg"
      :inlay="inlayImg"
    ></prosthesis>
  </div>
</template>

<script>
import Prosthesis from './components/Prosthesis.vue';
import Treatment from './components/Treatment.vue';

export default {
  name: 'AppMedizduoDental',
  components: {
    Prosthesis,
    Treatment,
  },
  data() {
    return {
      isDentalView: true,
      isProsthesisView: false,
      otherTreatmentImg: '',
      cleaningImg: '',
      fillingImg: '',
      ceramicImg: '',
      implantantImg: '',
      ceramicCroneImg: '',
      inlayImg: '',
    };
  },
  created() {
    this.preloadImages();
  },
  methods: {
    toggleView(view) {
      if (view === 'dentalCare' && !this.isDentalView) {
        this.isProsthesisView = false;
        this.isDentalView = !this.isDentalView;
      } else if (view === 'prosthesis' && !this.isProsthesisView) {
        this.isDentalView = false;
        this.isProsthesisView = !this.isProsthesisView;
      }
    },
    preloadImages() {
      //treatment Zahnbehandlung
      const otherTreatmentImg = new Image();
      const cleaningImg = new Image();
      const fillingImg = new Image();

      otherTreatmentImg.src = require('./../public/ZB-Sonstige.png');
      cleaningImg.src = require('./../public/ZB-PZR.png');
      fillingImg.src = require('./../public/ZB-Fuellung.png');

      this.otherTreatmentImg = otherTreatmentImg.src;
      this.cleaningImg = cleaningImg.src;
      this.fillingImg = fillingImg.src;

      // this.content.graphic1.graphicPath = otherTreatmentImg.src;
      // this.content.graphic2.graphicPath = cleaningImg.src;
      // this.content.graphic3.graphicPath = professionalCleanImg.src;

      // prosthesis Zahnersatz
      const ceramicImg = new Image();
      const implantantImg = new Image();
      const ceramicCroneImg = new Image();
      const inlayImg = new Image();

      // ceramicImg.src = require('./../public/ZE-Keramikbruecke.png');
      ceramicImg.src = require('./../public/ZE-Keramikbruecke.png');
      implantantImg.src = require('./../public/ZE-Implantat.png');
      ceramicCroneImg.src = require('./../public/ZE-Keramikkrone.png');
      inlayImg.src = require('./../public/ZE-Inlay.png');

      this.ceramicImg = ceramicImg;
      this.implantantImg = implantantImg;
      this.ceramicCroneImg = ceramicCroneImg;
      this.inlayImg = inlayImg;

      // this.content.graphic1.graphicPath = ceramicImg.src;
      // this.content.graphic2.graphicPath = implantantImg.src;
      // this.content.graphic3.graphicPath = ceramicCroneImg.src;
      // this.content.graphic4.graphicPath = inlayImg.src;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './main.scss';

.main-wrapper {
  font-size: 10px;
  font-family: 'MetaPro', Arial;

  &* {
    margin: 0;
    box-sizing: border-box;
  }

  & p {
    margin: 0;
  }

  & ul {
    list-style-type: none;
    font-weight: 300;
    line-height: 2em;
  }
}

.app-medizduo-dental {
  @include media-breakpoint-up(sm) {
    display: none;
  }
}

.nav {
  font-size: 3.5em;
  color: $blue-dark;

  @include media-breakpoint-up(lg) {
    font-size: 2.8em;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    justify-content: center;
    padding: 1.5em 0 0 0;
    margin: 0 auto;
    column-gap: 1em;
    max-width: 50vw;
  }

  &__item {
    border-bottom: 1px solid $blue-dark;
    cursor: pointer;

    &--not-active {
      border-bottom: none;
      color: $mid-gray;
    }
  }
}
</style>

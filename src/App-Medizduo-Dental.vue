<template>
  <div id="appMedizduoDental" class="app-medizduo-dental main-wrapper">
    <nav class="nav">
      <ul class="nav__list">
        <li
          class="nav__item"
          @click="toggleView('dentalCare')"
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
    <prosthesis v-if="isDentalView"></prosthesis>
    <treatment v-if="isProsthesisView"></treatment>
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
    };
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
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding-top: 1.5em;
    margin: 0 auto;
    column-gap: 4em;
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

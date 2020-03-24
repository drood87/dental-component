<template>
  <div class="dental">
    <div class="dental__wrapper">
      <div
        class="dental__graphics-wrapper"
        :class="
          isDetailedGraphicActive ? 'dental__graphics-wrapper--translate' : ''
        "
      >
        <img
          :src="emptyDefaultImg"
          alt="Zahnersatz leer"
          class="dental__graphic"
          :class="isDetailedGraphicActive ? 'dental__graphic--default' : ''"
          rel="preload"
        />
        <transition-group name="image" mode="out-in">
          <img
            :src="askedContent.graphicPath"
            :alt="askedContent.altText"
            class="dental__graphic"
            :key="askedContent.headline"
            rel="preload"
          />
        </transition-group>
        <div
          class="dental__btn-plus dental__btn-plus--p1"
          @click="toggleGraphic('graphic1')"
          v-if="!detailedGraphics.graphic1"
        >
          <svg
            preserveAspectRatio="xMidYMin meet"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#00718F"
            />
            <path
              d="M20 39.25C30.6315 39.25 39.25 30.6315 39.25 20C39.25 9.36852 30.6315 0.75 20 0.75C9.36852 0.75 0.75 9.36852 0.75 20C0.75 30.6315 9.36852 39.25 20 39.25Z"
              fill="#00718F"
            />
            <path
              d="M20.0033 31.0066C19.681 31.0063 19.372 30.8781 19.144 30.6502C18.9161 30.4222 18.7879 30.1132 18.7875 29.7909V21.2191H10.2158C9.89335 21.2191 9.5841 21.091 9.3561 20.863C9.12809 20.635 9 20.3258 9 20.0033C9 19.6809 9.12809 19.3716 9.3561 19.1436C9.5841 18.9156 9.89335 18.7875 10.2158 18.7875H18.7809V10.2158C18.7809 9.89334 18.909 9.5841 19.137 9.3561C19.365 9.12809 19.6742 9 19.9967 9C20.3191 9 20.6284 9.12809 20.8564 9.3561C21.0844 9.5841 21.2125 9.89334 21.2125 10.2158V18.7875H29.7842C30.1067 18.7875 30.4159 18.9156 30.6439 19.1436C30.8719 19.3716 31 19.6809 31 20.0033C31 20.3258 30.8719 20.635 30.6439 20.863C30.4159 21.091 30.1067 21.2191 29.7842 21.2191H21.2191V29.7909C21.2188 30.1132 21.0906 30.4222 20.8626 30.6502C20.6347 30.8781 20.3257 31.0063 20.0033 31.0066Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="dental__btn-plus dental__btn-plus--p2"
          @click="toggleGraphic('graphic2')"
          v-if="!detailedGraphics.graphic2"
        >
          <svg
            preserveAspectRatio="xMidYMin meet"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#00718F"
            />
            <path
              d="M20 39.25C30.6315 39.25 39.25 30.6315 39.25 20C39.25 9.36852 30.6315 0.75 20 0.75C9.36852 0.75 0.75 9.36852 0.75 20C0.75 30.6315 9.36852 39.25 20 39.25Z"
              fill="#00718F"
            />
            <path
              d="M20.0033 31.0066C19.681 31.0063 19.372 30.8781 19.144 30.6502C18.9161 30.4222 18.7879 30.1132 18.7875 29.7909V21.2191H10.2158C9.89335 21.2191 9.5841 21.091 9.3561 20.863C9.12809 20.635 9 20.3258 9 20.0033C9 19.6809 9.12809 19.3716 9.3561 19.1436C9.5841 18.9156 9.89335 18.7875 10.2158 18.7875H18.7809V10.2158C18.7809 9.89334 18.909 9.5841 19.137 9.3561C19.365 9.12809 19.6742 9 19.9967 9C20.3191 9 20.6284 9.12809 20.8564 9.3561C21.0844 9.5841 21.2125 9.89334 21.2125 10.2158V18.7875H29.7842C30.1067 18.7875 30.4159 18.9156 30.6439 19.1436C30.8719 19.3716 31 19.6809 31 20.0033C31 20.3258 30.8719 20.635 30.6439 20.863C30.4159 21.091 30.1067 21.2191 29.7842 21.2191H21.2191V29.7909C21.2188 30.1132 21.0906 30.4222 20.8626 30.6502C20.6347 30.8781 20.3257 31.0063 20.0033 31.0066Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="dental__btn-plus dental__btn-plus--p3"
          @click="toggleGraphic('graphic3')"
          v-if="!detailedGraphics.graphic3"
        >
          <svg
            preserveAspectRatio="xMidYMin meet"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#00718F"
            />
            <path
              d="M20 39.25C30.6315 39.25 39.25 30.6315 39.25 20C39.25 9.36852 30.6315 0.75 20 0.75C9.36852 0.75 0.75 9.36852 0.75 20C0.75 30.6315 9.36852 39.25 20 39.25Z"
              fill="#00718F"
            />
            <path
              d="M20.0033 31.0066C19.681 31.0063 19.372 30.8781 19.144 30.6502C18.9161 30.4222 18.7879 30.1132 18.7875 29.7909V21.2191H10.2158C9.89335 21.2191 9.5841 21.091 9.3561 20.863C9.12809 20.635 9 20.3258 9 20.0033C9 19.6809 9.12809 19.3716 9.3561 19.1436C9.5841 18.9156 9.89335 18.7875 10.2158 18.7875H18.7809V10.2158C18.7809 9.89334 18.909 9.5841 19.137 9.3561C19.365 9.12809 19.6742 9 19.9967 9C20.3191 9 20.6284 9.12809 20.8564 9.3561C21.0844 9.5841 21.2125 9.89334 21.2125 10.2158V18.7875H29.7842C30.1067 18.7875 30.4159 18.9156 30.6439 19.1436C30.8719 19.3716 31 19.6809 31 20.0033C31 20.3258 30.8719 20.635 30.6439 20.863C30.4159 21.091 30.1067 21.2191 29.7842 21.2191H21.2191V29.7909C21.2188 30.1132 21.0906 30.4222 20.8626 30.6502C20.6347 30.8781 20.3257 31.0063 20.0033 31.0066Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="dental__btn-plus dental__btn-plus--p4"
          @click="toggleGraphic('graphic4')"
          v-if="!detailedGraphics.graphic4"
        >
          <svg
            preserveAspectRatio="xMidYMin meet"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#00718F"
            />
            <path
              d="M20 39.25C30.6315 39.25 39.25 30.6315 39.25 20C39.25 9.36852 30.6315 0.75 20 0.75C9.36852 0.75 0.75 9.36852 0.75 20C0.75 30.6315 9.36852 39.25 20 39.25Z"
              fill="#00718F"
            />
            <path
              d="M20.0033 31.0066C19.681 31.0063 19.372 30.8781 19.144 30.6502C18.9161 30.4222 18.7879 30.1132 18.7875 29.7909V21.2191H10.2158C9.89335 21.2191 9.5841 21.091 9.3561 20.863C9.12809 20.635 9 20.3258 9 20.0033C9 19.6809 9.12809 19.3716 9.3561 19.1436C9.5841 18.9156 9.89335 18.7875 10.2158 18.7875H18.7809V10.2158C18.7809 9.89334 18.909 9.5841 19.137 9.3561C19.365 9.12809 19.6742 9 19.9967 9C20.3191 9 20.6284 9.12809 20.8564 9.3561C21.0844 9.5841 21.2125 9.89334 21.2125 10.2158V18.7875H29.7842C30.1067 18.7875 30.4159 18.9156 30.6439 19.1436C30.8719 19.3716 31 19.6809 31 20.0033C31 20.3258 30.8719 20.635 30.6439 20.863C30.4159 21.091 30.1067 21.2191 29.7842 21.2191H21.2191V29.7909C21.2188 30.1132 21.0906 30.4222 20.8626 30.6502C20.6347 30.8781 20.3257 31.0063 20.0033 31.0066Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <transition-group name="content" mode="out-in">
        <div
          class="dental__content"
          v-if="isDetailedGraphicActive"
          :key="activeGraphic"
        >
          <div class="dental__content-wrapper">
            <h3 class="dental__content-headline">
              {{ askedContent.headline }}
              <span
                class="dental__content-headline--small"
                v-if="askedContent === content.graphic2"
                >(inkl. Knochenaufbau)</span
              >
            </h3>
            <div class="dental__content-list">
              <div class="dental__content-desc">durchschnittl. Kosten</div>
              <div class="dental__content-price">
                {{ askedContent.approxPrice }}
              </div>
              <div class="dental__content-desc">
                <b>GKV</b> übernimmt i.d.R.:
              </div>
              <div class="dental__content-price dental__content-price--neg">
                {{ askedContent.gkvShare }}
              </div>
              <div class="dental__content-desc" v-if="showMediBenefit">
                <b>MediZ Duo</b> übernimmt:
              </div>
              <div
                class="dental__content-price dental__content-price--neg"
                v-if="showMediBenefit"
              >
                {{ askedContent.medizShare }}
              </div>
            </div>

            <div class="dental__content-total" :class="benefitStyles">
              <div class="dental__content-desc">Ihr Eigenanteil:</div>
              <div class="dental__content-price dental__content-price--big">
                {{ askedContent.ownShare }}
              </div>
            </div>
            <div class="dental__button-wrapper" v-if="!showMediBenefit">
              <button
                class="god-btn god-btn-secondary"
                v-if="!showMediBenefit"
                @click="toggleBenefits"
              >
                Was bringt MediZ Duo?
              </button>
            </div>
          </div>
          <div class="dental__benefit-wrapper" v-if="showMediBenefit">
            <div class="dental__benefit-content">
              <div class="dental__benefit-desc">Dank MediZ Duo nur:</div>
              <div class="dental__benefit-price">
                {{ askedContent.priceWithMediz }}
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prothesis',
  props: {
    ceramicBridge: String,
    implantant: String,
    crone: String,
    inlay: String,
    defaultImg: String,
  },
  data() {
    return {
      emptyDefaultImg: this.defaultImg,
      activeGraphic: false,
      detailedGraphics: {
        graphic1: false,
        graphic2: false,
        graphic3: false,
        graphic4: false,
      },
      isDetailedGraphicActive: false,
      content: {
        graphic1: {
          graphicPath: this.ceramicBridge,
          altText: 'Vollkeramik-Brücke',
          headline: 'Vollkeramik-Brücke',
          approxPrice: '1.800 €',
          gkvShare: '- 364 €',
          ownShare: '1.436 €',
          medizShare: '- 1.256 €',
          priceWithMediz: '180 €',
        },
        graphic2: {
          graphicPath: this.implantant,
          altText: 'Implantant',
          headline: 'Implantant',
          approxPrice: '3.950 €',
          gkvShare: '- 364 €',
          ownShare: '3.586 €',
          medizShare: '- 1.256 €',
          priceWithMediz: '395 €',
        },
        graphic3: {
          graphicPath: this.crone,
          altText: 'Vollkeramik-Krone',
          headline: 'Vollkeramik-Krone',
          approxPrice: '1.000 €',
          gkvShare: '- 211 €',
          ownShare: '789 €',
          medizShare: '- 689 €',
          priceWithMediz: '100 €',
        },
        graphic4: {
          graphicPath: this.inlay,
          altText: 'Keramik-Inlay',
          headline: 'Keramik-Inlay',
          approxPrice: '660 €',
          gkvShare: '- 50 €',
          ownShare: '610 €',
          medizShare: '- 544 €',
          priceWithMediz: '66 €',
        },
      },
      askedContent: {
        graphicPath: '',
        altText: '',
        headline: '',
        approxPrice: '',
        gkvShare: '',
        ownShare: '',
        medizShare: '',
        priceWithMediz: '',
      },
      showMediBenefit: false,
    };
  },

  computed: {
    benefitStyles() {
      return {
        'dental__content-total--border-bottom': this.showMediBenefit,
        'dental__content-total--strikethrough': this.showMediBenefit,
      };
    },
  },
  methods: {
    toggleGraphic(graphic) {
      for (const key of Object.keys(this.detailedGraphics)) {
        if (this.detailedGraphics[graphic] !== true) {
          this.detailedGraphics[key] = false;
        }

        this.askedContent = this.content[graphic];
      }

      this.detailedGraphics[graphic] = !this.detailedGraphics[graphic];
      this.isDetailedGraphicActive = this.detailedGraphics[graphic];
      this.showMediBenefit = false;
      this.activeGraphic = !this.activeGraphic;
    },
    toggleBenefits() {
      this.showMediBenefit = !this.showMediBenefit;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../main.scss';
@import './../scss/components/button';

.content-enter-active,
.content-leave-active {
  transition: opacity 1s;
  overflow: hidden;
  max-height: 90%;
  max-width: 100%;
}

.content-enter,
.content-leave-to {
  opacity: 0.4;
  max-height: 0px;
  max-width: 0px;
}

.image-enter-active,
.image-leave-active {
  transition: opacity 0.8s;
  max-width: 100%;
}

.image-enter,
.image-leave-to {
  opacity: 0.4;
  max-width: 0px;
}

.dental {
  padding: 5em;
  margin: 0 auto;

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5em;
    justify-items: center;
    align-items: center;
    max-width: 119em;
    margin: 0 auto;
    position: relative;
    height: 55em;
  }

  &__graphics-wrapper {
    width: 100%;
    height: auto;
    position: relative;
    transform: translateX(21em);
    transition: transform 0.4s ease;

    @include media-breakpoint-up(lg) {
      transform: translateX(15em);
    }

    &--translate {
      transform: translateX(0);
    }
  }

  &__graphic {
    height: auto;
    width: 100%;

    &--default {
      display: none;
    }

    &--hide {
      display: none;
    }

    &--show {
      display: block;
    }
  }

  &__button-wrapper {
    height: 10em;
  }

  &__content {
    width: 100%;
    height: 90%;

    &-headline {
      font-size: 3em;
      font-weight: 500;
      margin-bottom: 2em;

      @include media-breakpoint-up(lg) {
        font-size: 2.7em;
      }

      @include media-breakpoint-up(lg) {
        font-size: 2.5em;
      }

      &--small {
        font-size: 0.8em;
        font-weight: 400;
      }
    }

    &-list {
      font-size: 1.8em;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      row-gap: 0.8em;

      @include media-breakpoint-up(lg) {
        font-size: 1.2em;
      }
    }

    &-price {
      justify-self: right;
      font-weight: 700;
      &--neg {
        color: $red;
      }
      &--big {
        font-size: 2.5em;

        @include media-breakpoint-up(lg) {
          font-size: 2em;
        }
      }
    }

    &-total {
      font-size: 1.8em;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      margin: 2.5em 0 4em 0;
      padding: 0.5em 0 0.5em;
      border-top: 2px solid $light-gray;
      position: relative;

      @include media-breakpoint-up(lg) {
        margin: 3em 0 3em 0;
        font-size: 1.2em;
      }

      &--border-bottom {
        border-bottom: 2px solid $light-gray;
      }

      &--strikethrough {
        &:after {
          content: '';
          top: 2.1em;
          left: 0;
          height: 0.1em;
          background: $red;
          position: absolute;
          width: 100%;

          @include media-breakpoint-up(lg) {
            top: 1.6em;
            height: 0.1em;
          }
        }
      }
    }
  }

  &__benefit {
    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    &-desc {
      font-size: 1.8em;

      @include media-breakpoint-up(lg) {
        font-size: 1.1em;
      }
    }

    &-price {
      font-size: 4em;
      font-weight: bold;
      color: $green;
      justify-self: right;

      @include media-breakpoint-up(lg) {
        font-size: 3em;
      }
    }
  }

  &__btn-plus {
    position: absolute;
    top: 0;
    left: 0;
    height: 7%;
    width: 7%;
    box-sizing: border-box;
    cursor: pointer;

    &--p1 {
      top: 17%;
      left: 5%;
    }

    &--p2 {
      top: 58%;
      left: 29%;
    }

    &--p3 {
      top: 35%;
      left: 62%;
    }

    &--p4 {
      top: 41%;
      left: 89%;
    }
  }
}
</style>

<template>
  <div class="whole">
    <div class="requirements">
      <button class="note" @click="showr = !showr">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
          />
        </svg>
      </button>
      <div v-if="showr" class="require">
        <div class="uncr">
          <h3 class="mt-0 font-bold">Requirements (different for seniors)</h3>
          <bl>
            <li v-if="this.needed.ENGLISH === 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              English
            </li>
            <li v-if="this.needed.ENGLISH !== 0">
              <svg
                class="check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              English
            </li>
            <li v-if="this.needed.MATH === 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Math
            </li>
            <li v-if="this.needed.MATH !== 0">
              <svg
                class="check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Math
            </li>
            <li v-if="this.needed.SS === 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                /></svg
              >History
            </li>
            <li v-if="this.needed.SS !== 0">
              <svg
                class="check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              History
            </li>
            <li v-if="this.needed.PE === 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Gym
            </li>
            <li v-if="this.needed.PE !== 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                /></svg
              >Gym
            </li>
            <li
              v-if="this.yearPicked !== `Senior` && this.needed.SCIENCE === 0"
            >
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Science
            </li>
            <li
              v-if="this.yearPicked !== `Senior` && this.needed.SCIENCE !== 0"
            >
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Science
            </li>
            <li v-if="this.yearPicked !== `Senior` && this.needed.LANG === 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Russian
            </li>
            <li v-if="this.yearPicked !== `Senior` && this.needed.LANG !== 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Russian
            </li>
            <li v-if="this.yearPicked !== `Senior` && this.needed.LUNCH !== 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Lunch
            </li>
            <li v-if="this.yearPicked !== `Senior` && this.needed.LUNCH === 0">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              Lunch
            </li>
            <li v-if="this.needed.educationalPeriods < 7">
              <svg
                class="x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                /></svg
              >7 educational periods (not including lunch)
            </li>
            <li v-if="this.needed.educationalPeriods >= 7">
              <svg
                class="check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                />
              </svg>
              7 educational periods (not including lunch)
            </li>
          </bl>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button @click="switchTabs(`russian`)" class="tab r">Russian</button>
      <button @click="switchTabs(`gym`)" class="tab g">Gym</button>
      <button @click="switchTabs(`art`)" class="tab a">Art</button>
      <button @click="switchTabs(`technology`)" class="tab t">
        Technology
      </button>
      <button @click="switchTabs(`history`)" class="tab h">History</button>
      <button @click="switchTabs(`english`)" class="tab en">English</button>
      <button @click="switchTabs(`science`)" class="tab s">Science</button>
      <button @click="switchTabs(`math`)" class="tab m">Math</button>
    </div>
    <div class="folder">
      <div v-if="showSubjects.showrussian" class="file LANG">
        <div class="holders">
          <div
            class="placeholder LANG"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `LANG` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showgym" class="file PE">
        <div class="holders">
          <div
            class="placeholder PE"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `PE` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showart" class="file a">
        <div class="holders">
          <div
            class="placeholder ARTS"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `ARTS` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showtechnology" class="file TECH">
        <div class="holders">
          <div
            class="placeholder TECH"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `TECH` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
          <div
            class="placeholder TECH"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `SCIENCE` &&
                course[`${this.yearPicked.toLowerCase()}`] &&
                course.name === `Comp Sci/Engineering T1`
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showhistory" class="file SS">
        <div class="holders">
          <div
            class="placeholder SS"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `SS` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showenglish" class="file ENGLISH">
        <div class="holders">
          <div
            class="placeholder ENGLISH"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `ENGLISH` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showscience" class="file SCIENCE">
        <div class="holders">
          <div
            class="placeholder SCIENCE"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `SCIENCE` &&
                course[`${this.yearPicked.toLowerCase()}`] &&
                course.name !== `Comp Sci/Engineering T1`
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showmath" class="file MATH">
        <div class="holders">
          <div
            class="placeholder MATH"
            v-for="course in courses.filter(
              (course) =>
                course.catalog &&
                course.subject === `MATH` &&
                course[`${this.yearPicked.toLowerCase()}`]
            )"
            v-on:click="addClass(course)"
          >
            <h4>{{ course.name }}</h4>
          </div>
        </div>
      </div>
      <div v-if="showSubjects.showlanding" class="file landing">
        <div class="content">
          <h2>Instructions</h2>
          <h3>
            Click on subject tabs and drag desired courses to the schedule
            maker. Please keep in mind that this may not be your actual schedule
            that year.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useCourseStore } from "~/store/store";
import SubjectType from "../course-cards/SubjectType.vue";
export default {
  name: "Courses",
  props: {
    schedule: [Object],
    yearPicked: String,
    needed: Object,
  },
  watch: {
    yearPicked: function () {
      this.showSubjects = {
        showrussian: false,
        showgym: false,
        showart: false,
        showtechnology: false,
        showenglish: false,
        showhistory: false,
        showscience: false,
        showmath: false,
        showlanding: true,
      };
      if (this.yearPicked === "Freshman") {
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Russian T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "AP World History T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "English T1" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "Chemistry T1" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.LANG += 1;
        this.needed.SCIENCE += 1;
        this.needed.educationalPeriods += 4;
      } else if (this.yearPicked === "Sophomore") {
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "AP World History T3" && course.catalog
          )
        );
        Object.assign(
          this.schedule.find((period) => period.name === undefined),
          this.courses.find(
            (course) => course.name === "English T3" && course.catalog
          )
        );
        this.needed.ENGLISH += 1;
        this.needed.SS += 1;
        this.needed.educationalPeriods += 2;
      }
    },
  },
  components: {
    useCourseStore,
  },
  data() {
    return {
      hider: true,
      showr: false,
      showSubjects: {
        showrussian: false,
        showgym: false,
        showart: false,
        showtechnology: false,
        showenglish: false,
        showhistory: false,
        showscience: false,
        showmath: false,
        showlanding: true,
      },

      courses: useCourseStore().courses,
    };
  },
  methods: {
    switchTabs: function (subject) {
      if (this.yearPicked) {
        this.showSubjects.showrussian = false;
        this.showSubjects.showgym = false;
        this.showSubjects.showart = false;
        this.showSubjects.showtechnology = false;
        this.showSubjects.showenglish = false;
        this.showSubjects.showhistory = false;
        this.showSubjects.showscience = false;
        this.showSubjects.showmath = false;
        this.showSubjects.showlanding = false;
        if (subject === "russian") {
          this.showSubjects.showrussian = true;
        } else if (subject === "gym") {
          this.showSubjects.showgym = true;
        } else if (subject === "art") {
          this.showSubjects.showart = true;
        } else if (subject === "english") {
          this.showSubjects.showenglish = true;
        } else if (subject === "history") {
          this.showSubjects.showhistory = true;
        } else if (subject === "science") {
          this.showSubjects.showscience = true;
        } else if (subject === "math") {
          this.showSubjects.showmath = true;
        } else if (subject === "technology") {
          this.showSubjects.showtechnology = true;
        }
      } else {
        alert("Pick a year from the dropdown");
      }
    },
    addClass: function (chosenClass) {
      const schedule = this.schedule;
      const needed = this.needed;
      const yearPicked = this.yearPicked;
      function neededChange() {
        if (chosenClass.name !== `Comp Sci/Engineering T1`) {
          // to treat comp sci like a science
          if (chosenClass.subject === "LANG" && needed.LANG === 0) {
            needed.LANG += 1;
            return true;
          } else if (chosenClass.subject === "ENGLISH" && needed.ENGLISH < 2) {
            needed.ENGLISH += 1;
            return true;
          } else if (chosenClass.subject === "ARTS" && needed.ARTS < 2) {
            needed.ARTS += 1;
            return true;
          } else if (chosenClass.subject === "SS" && needed.SS === 0) {
            needed.SS += 1;
            return true;
          } else if (
            chosenClass.subject === "TECH" &&
            yearPicked === "Freshman" &&
            needed.TECH < 1
          ) {
            // av, stem, comp sci should not be together (they are currently they only choice for freshmen)
            needed.TECH += 1;
            return true;
          } else if (
            chosenClass.subject === "TECH" &&
            yearPicked !== "Freshman" &&
            needed.TECH < 2
          ) {
            needed.TECH += 1;
            return true;
          } else if (chosenClass.subject === "PE" && needed.PE === 0) {
            needed.PE += 1;
            return true;
          } else if (chosenClass.subject === "MATH" && needed.MATH === 0) {
            needed.MATH += 1;
            return true;
          } else if (chosenClass.subject === "SCIENCE" && needed.SCIENCE < 2) {
            needed.SCIENCE += 1;
            return true;
          } else {
            alert("You can not have any more of that subject");
          }
        } else if (needed.TECH < 1) {
          // it's a freshman class, and av, stem, comp sci should not be together (they are currently they only choice)
          needed.TECH += 1;
          return true;
        } else {
          alert("You can not have any more of that subject");
        }
      }
      console.log(chosenClass);
      if (schedule.find((period) => period.name === chosenClass.name)) {
        alert("You can't have 2 of the same class");
      } else {
        if (chosenClass.ap) {
          if (needed.ap === 4) {
            alert("You have too many ap classes");
          } else if (chosenClass.double_period) {
            if (
              schedule.find(
                (period) =>
                  period.name === undefined &&
                  schedule[schedule.indexOf(period) + 1].name === undefined
              )
            ) {
              if (neededChange()) {
                needed.ap += 1;
                Object.assign(
                  schedule.find(
                    (period) =>
                      period.name === undefined &&
                      schedule[schedule.indexOf(period) + 1].name === undefined
                  ),
                  chosenClass
                );
                Object.assign(
                  schedule[
                    schedule.indexOf(
                      schedule.find(
                        (period) => period.name === chosenClass.name
                      )
                    ) + 1
                  ],
                  chosenClass
                );
                needed.educationalPeriods += 2;
              }
            } else {
              alert("You don't have 2 consecutive empty spaces");
            }
          } else if (schedule.find((period) => period.name === undefined)) {
            if (neededChange()) {
              needed.ap += 1;
              Object.assign(
                schedule.find((period) => period.name === undefined),
                chosenClass
              );
              needed.educationalPeriods += 1;
            }
          }
        } else if (schedule.find((period) => period.name === undefined)) {
          if (neededChange()) {
            Object.assign(
              schedule.find((period) => period.name === undefined),
              chosenClass
            );
            needed.educationalPeriods += 1;
            if (chosenClass.name === "PE T1") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Health Education"
              );
            } else if (chosenClass.name === "Health Education") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with PE "
              );
            }
            if (chosenClass.name === "Engineering Robotics") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with A/V Eng & TV Studio OR Comp Sci/Engineering"
              );
            } else if (chosenClass.name === "A/V Eng & TV Studio") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Engineering Robotics"
              );
            } else if (chosenClass.name === "Comp Sci/Engineering T1") {
              alert(
                "By picking this class, you acknowledge that next term it will be switched out with Engineering Robotics"
              );
              schedule.find(
                (period) => period.name === chosenClass.name
              ).subject = "TECH";
            }
          }
        } else {
          alert("You don't have enough space for another class");
        } //might need something else if there are non-ap classes that are 2 periods
      }
      if (schedule[8].name) {
        this.showr = true;
        console.log(schedule[8]);
      }
    },
  },
};
</script>
<style>
.requirements {
  margin-top: -3rem;
  margin-bottom: 3.5rem;
}
.require {
  position: absolute;
  z-index: 2;
  background-color: white;
  padding: 1rem;
  padding-bottom: 2rem;
  border: 2px solid #37394f;
  border-radius: 1rem;
  color: #37394f;
  width: 30%;
  margin-left: 30%;
  margin-bottom: 1rem;
}
svg {
  fill: #37394f;
  transition: 0.3s;
}
svg:hover {
  opacity: 0.8;
}
.file {
  position: absolute;
}
.test {
  background-color: #d6eeff;
}
.holders {
  border-radius: 0.8rem;
  height: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-column-gap: 10px;
  justify-content: center;
  margin: auto;
  box-shadow: 2px 0px 2px 0px rgba(0.3, 0.5, 0.3, 0.2);
  padding-bottom: 1.5rem;
}
h4 {
  margin-top: 3px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
  padding-right: 1rem;
}
.placeholder {
  text-align: center;
  font-size: 1.2rem;
  width: 18rem;
  height: 2.3rem;
  border: 2px dashed #7d7d7d;
  border-radius: 15px;
  margin: 2rem 2rem 0.2rem 2rem;
  transition: 0.3s;
  color: #37394f;
  overflow: hidden;
}
.landing {
  display: block;
  background-color: #fff2e2;
  color: #37394f;
}
.placeholder:hover {
  opacity: 0.5;
  cursor: pointer;
}
.placeholder:active {
  background-color: #ededed;
}
.r {
  background-color: #fedcb5;
}
.LANG {
  background-color: #fedcb5;
}
.g {
  background-color: #bebfdf;
}
.PE {
  background-color: #bebfdf;
}
.a {
  background-color: #ffdfdf;
}
.ARTS {
  background-color: #ffdfdf;
}
.t {
  background-color: #fffbd6;
}
.TECH {
  background-color: #fffbd6;
}
.h {
  background-color: #e0d6ff;
}
.SS {
  background-color: #e0d6ff;
}
.en {
  background-color: #d6eeff;
}
.ENGLISH {
  background-color: #d6eeff;
}
.s {
  background-color: #cbf2d4;
}
.SCIENCE {
  background-color: #cbf2d4;
}
.m {
  background-color: #ffadb2;
}
.MATH {
  background-color: #ffadb2;
}
.LUNCH {
  background-color: #d2fcff;
}
.folder {
  display: flex;
  flex-direction: column;
}
.tabs {
  margin-left: 15%;
  display: flex;
  flex-direction: row;
}
.tab {
  text-align: left;
  font-weight: bold;
  font-size: 1rem;
  border-top-right-radius: 0.6rem;
  border-top-left-radius: 0.6rem;
  transition: 0.4s;
  padding: 0.5rem;
  width: 6.2rem;
  color: #37394f;
}
.tab:hover {
  opacity: 0.8;
  cursor: pointer;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.3);
}
.file {
  line-height: 4;
  width: 56%;
  margin-left: 3%;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  padding: 2rem;
  height: 33rem;
}
svg {
  fill: #f20707;
}
.x {
  fill: #f20707;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0;
  width: 1rem;
}
.check {
  fill: #1abd18;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0;
  width: 1rem;
}
li {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
}
@media only screen and (max-width: 1180px) {
  .whole {
    display: none;
  }
}
@media only screen and (min-width: 1440px) {
  .note {
    margin-left: 55%;
    position: absolute;
    z-index: 6;
    margin-top: 1rem;
  }
  svg {
    width: 1.5rem;
    margin-left: 105%;
  }
  .tabs {
    margin-left: 8%;
  }
  .tab {
    font-size: 1rem;
    width: 6.4rem;
  }
  h2 {
    font-weight: bold;
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.1rem;
  }
  .holders {
    border-radius: 0.8rem;
    height: 100%;
    justify-content: center;
    margin: auto;
  }
}
@media only screen and (min-width: 1540px) {
  .tab {
    width: 7.5rem;
  }
}
@media only screen and (min-width: 1740px) {
  svg {
    width: 1.5rem;
    margin-left: 3rem;
  }
  .file {
    width: 53%;
    height: 63%;
    margin-left: 8rem;
  }
  .tabs {
    margin-left: 23%;
  }
  .tab {
    width: 8rem;
  }
}
</style>

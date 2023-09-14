<template>
	<div class="m-6 p-2">
    <!-- title -->
    <h1 class="text-3xl my-4 text-center">Vue Calendar</h1>

    <!-- month details -->
    <section class="font-bold flex justify-between p-1 mx-14">
      <h2>{{ currentMonthName }}</h2>
      <h2>{{ currentYear }}</h2>
    </section>

    <!-- week name -->
    <section class="flex my-2">
      <p class="text-center" style="width: 14.28%" v-for="day in days" :key="day" >
        {{ day }}
      </p>
    </section>

    <!-- days -->
    <section class="flex my-2 flex-wrap">

      <!-- blankdates -->
      <p 
        class="text-center" 
        style="width: 14.28%" 
        v-for="day in startDay(c)" 
        :key="day" 
      >
      </p> 

      <!-- dates -->
      <p 
        class="text-center" 
        style="width: 14.28%" 
        v-for="day in daysInMonth()" 
        v-text="day"
        :key="day"
        :class="currentDateClass(day)"
      >
      </p> 
    </section>

    <!-- buttons -->
    <div class="flex justify-between mt-10">
      <button 
        class="no-select p-1 bg-white shadow border border-green-800 text-black w-1/4 mx-5 rounded-md shadow-lg hover:shadow-2xl" 
        @click="prevMonth"
      >
        Prev.
      </button>

      <button 
        class="no-select p-1 bg-white shadow border border-green-800 text-black w-1/4 mx-5 rounded-md shadow-lg hover:shadow-2xl" 
        @click="nextMonth"
      >
        Next.
      </button>
    </div>

    </div>
</template>

<script>
export default {
  data () {
      return {
        currentDate: new Date().getUTCDate(),
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth(),
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      }
  },
  computed: {
    currentMonthName () {
      return new Date(this.currentYear, this.currentMonth, 1).toLocaleString("default", {month: "long"});
    }
  },
  methods: {
    daysInMonth (){
      return new Date(this.currentYear,this.currentMonth, 0).getDate()
    },
    startDay(){
      return new Date(this.currentYear,this.currentMonth, 1).getDay()
    },
    currentDateClass(num){
      return new Date().toDateString() === new Date(this.currentYear,this.currentMonth, num).toDateString() ? 'text-green-800 underline font-semibold' : '';
    },
    nextMonth(){
      if(this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++ 
      }
    },
    prevMonth(){
      if(this.currentMonth === 0) {
        this.currentMonth = 11
        this.currentYear--
      } else {
        this.currentMonth--
      }
    }
  }
}
</script>
<style scoped>
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }
</style>
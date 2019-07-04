<template>

    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Well History of {{ wellHistory.wellName }}</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">

              <div class="well-hist-heading">
                  <div class="well-hist-heading-item"><strong>UWID</strong></div>
                  <div class="well-hist-heading-item"><strong>Change Date</strong></div>
                  <div class="well-hist-heading-item"><strong>Action</strong></div>            
              </div>

              <div v-for="(history, index) in wellHistory.histData" :key="index" class="well-hist-body">
                  <div class="well-hist-body-item">{{ history.uwid }}</div>
                  <div class="well-hist-body-item">{{ history.changeDate | localTime }}</div>
                  <div class="well-hist-body-item">{{ history.action }}</div>
              </div>          

          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    computed: {
        // Getting the history of a specific well from the store
        wellHistory() {
            return !this.$store.getters.getWellHistData ? false : this.$store.getters.getWellHistData;
        }
    },
    filters: {
        // Converting GMT time to Local time using moment.js library
        localTime(value) {
            let GMTtime = value.slice(0, 19);
            GMTtime = GMTtime.split('T').join(' ');
            const stillUtc = moment.utc(GMTtime).toDate();
            let local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');
            return local;
        }
    }

}
</script>

<style>

</style>


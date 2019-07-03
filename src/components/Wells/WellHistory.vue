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
                  <div class="well-hist-heading-item">UWID</div>
                  <div class="well-hist-heading-item">Change Date</div>
                  <div class="well-hist-heading-item">Action</div>            
              </div>

              <div v-for="(history, index) in wellHistory.histData" :key="index" class="well-hist-body">
                  <div class="well-hist-body-item">{{ history.uwid }}</div>
                  <div class="well-hist-body-item">{{ history.changeDate }}</div>
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
export default {
    computed: {
        wellHistory() {
            return !this.$store.getters.getWellHistData ? false : this.$store.getters.getWellHistData;
        }
    }

}
</script>

<style>

</style>


<template>
    <div id="add-well">
      <div class="box container">
        <div class="box-title">
            <h2 class="font-weight-bold">Input Well Data</h2>
        </div>
        <form @submit.prevent="submit">
          <div class="form-grid">
              <div class="label">
                  <label for="wellName">Well Name</label>
              </div>
              <div>
                  <input type="text" id="wellName" v-model="wellData.wellName" required>
              </div>

              <div class="label">
                  <label for="uniqueIdentifier">Unique Identifier</label>
              </div>
              <div>
                  <input type="text" id="uniqueIdentifier" v-model="wellData.uwid" required>
              </div>

              <div class="label">
                  <label for="licenseNumber">License Number</label>
              </div>
              <div>
                  <input type="text" id="licenseNumber" v-model="wellData.licenseNumber"> 
              </div>

              <div class="label">
                  <label for="area">Area</label>
              </div>
              <div>
                  <input type="text" id="area" v-model="wellData.area"> 
              </div>

              <div class="label">
                  <label for="field">Field</label>
              </div>
              <div>
                  <input type="text" id="field" v-model="wellData.field">
              </div>

              <div class="label">
                  <label for="totalDepth">Total Depth (m)</label>
              </div>
              <div>
                  <input type="text" id="totalDepth" v-model="wellData.totalDepth">
              </div>

              <div class="label">
                  <label for="drillingDate">Drilling Date</label>
              </div>
              <div>
                  <input type="text" id="drillingDate" v-model="wellData.drillingDate">
              </div>

              <div class="label">
                  <label for="status">Status</label>
              </div>
              <div>
                  <input
                    type="text" id="status" v-model="wellData.status">
              </div>  
          </div>

          <div class="submit-btn">
            <button type="submit">Add Well</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wellData: {
                wellName: '',
                uwid: '',
                licenseNumber: '',
                area: '',
                field: '',
                totalDepth: '',
                drillingDate: '',
                status: ''
            }
        }
    },
    computed: {},
    methods: {
        submit() {
            this.$store.dispatch('addNewWell', this.wellData);
        }
    }
}
</script>

<style>
    
</style>
